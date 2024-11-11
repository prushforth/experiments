const fs = require('fs');
const sharp = require('sharp');

// Paths or URLs to sprite resources
const SPRITES_JSON_URL = 'sprite.json';
const SPRITES_PNG_URL = 'sprite.png';

// Helper function to handle object serialization
function fixSymbolizerValue(value) {
    if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
    }
    return value;
}

// Improved function to sanitize and simplify SVG IDs
function sanitizeId(id) {
    // Remove all non-alphanumeric characters and replace them with underscores
    return id.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');
}

// Generate an icon sheet compatible with Protomaps
// Generate an icon sheet compatible with Protomaps, using prefix-based IDs
async function generateIconSheet() {
    const spriteData = JSON.parse(fs.readFileSync(SPRITES_JSON_URL, 'utf-8'));
    const svgIcons = [];
    const iconIdMap = {};
    let iconCounter = 1;  // Start counter for unique IDs

    for (const iconName in spriteData) {
        const { x, y, width, height } = spriteData[iconName];
        
        // Generate a unique ID with a prefix and counter
        const generatedId = `icon_${iconCounter++}`;
        iconIdMap[iconName] = generatedId;  // Map original name to generated ID

        // Use sharp to extract each icon from the PNG
        const buffer = await sharp(SPRITES_PNG_URL)
            .extract({ left: x, top: y, width, height })
            .toBuffer();
        const encodedIcon = buffer.toString('base64');

        svgIcons.push(`
          <svg id="${generatedId}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <image href="data:image/png;base64,${encodedIcon}" width="${width}" height="${height}" />
          </svg>
        `);
    }

    return { svgSheet: `<html><body>${svgIcons.join('\n')}</body></html>`, iconIdMap };
}


// Define mapping functions for symbolizers
function mapPaint(layer) {
    if (layer.type === 'fill') {
        return `new protomapsL.PolygonSymbolizer({ fill: '${layer.paint["fill-color"]}' })`;
    } else if (layer.type === 'line') {
        return `new protomapsL.LineSymbolizer({ color: '${layer.paint["line-color"]}', width: ${fixSymbolizerValue(layer.paint["line-width"] || 1)} })`;
    }
    return null;
}

function resolveIconName(iconImage, layerProps, iconIdMap) {
    // Replace placeholders (e.g., {property}) with values from layerProps
    let resolvedIconName = iconImage.replace(/\{(\w+)\}/g, (_, prop) => layerProps[prop] || '');

    // If resolvedIconName is still not found in iconIdMap, try numbered variations
    if (!iconIdMap[resolvedIconName]) {
        // Check if there's a version with numbered suffixes (e.g., Route Number/1, Route Number/2)
        for (let i = 1; i <= 7; i++) {
            const numberedIconName = resolvedIconName.replace(/\{\w+\}/, i); // Replace placeholder with a number
            if (iconIdMap[numberedIconName]) {
                return numberedIconName; // Return the first valid numbered icon
            }
        }
        // If no numbered icon found, fallback to default icon
        return 'default_icon';
    }

    return resolvedIconName;
}

function mapLabel(layer, sheet, iconIdMap) {
    if (layer.type === 'symbol') {
        if (layer.layout["icon-image"]) {
//            let iconName = layer.layout["icon-image"];
//            const resolvedIconName = resolveIconName(iconName, layer.layout, iconIdMap);  // Resolve any placeholders
//
//            // Use the resolved icon name if it exists in iconIdMap
//            const generatedId = iconIdMap[resolvedIconName] || 'default_icon';  // Fallback to 'default_icon' if undefined
//
//            return `new protomapsL.IconSymbolizer({ name: '${generatedId}', sheet: sheet })`;
        } else {
            const fontSize = getFontSize(layer.layout["text-size"]);
            return `new protomapsL.CenteredTextSymbolizer({
                labelProps: ['${layer.layout["text-field"] || "_name"}'],
                fill: '${layer.paint["text-color"] || "#000000"}',
                halo: '${layer.paint["text-halo-color"] || "#FFFFFF"}',
                haloWidth: ${fixSymbolizerValue(layer.paint["text-halo-width"] || 1)},
                font: '${layer.layout["text-font"] || "Arial"} ${fontSize}px'
            })`;
        }
    }
    return null;
}




// Helper function to extract font size from stops or provide a default value
function getFontSize(size) {
    if (typeof size === 'object' && size.stops) {
        const maxStop = size.stops[size.stops.length - 1];
        return maxStop ? Math.round(maxStop[1]) : 12;
    }
    return Math.round(size || 12);
}

function mapFilter(filter) {
    if (!filter) return null;
    if (filter[0] === '==') {
        return `(z, f) => f.props.${filter[1]} === ${JSON.stringify(filter[2])}`;
    }
    return null;
}

function generateRules(layers, sheet, iconIdMap) {
    const paintRules = [];
    const labelRules = [];

    layers.forEach((layer, index) => {
        const dataLayer = layer["source-layer"];
        const filter = mapFilter(layer.filter);
        const symbolizer = layer.type === 'symbol' ? mapLabel(layer, sheet, iconIdMap) : mapPaint(layer);

        if (symbolizer) {
            const rule = `{
                dataLayer: '${dataLayer}',
                symbolizer: ${symbolizer},
                minZoom: ${layer.minzoom || 0},
                maxZoom: ${layer.maxzoom || 24}${filter ? `,\n                filter: ${filter}` : ''}
            }`;

            if (layer.type === 'symbol') {
                labelRules.push(rule);
            } else {
                paintRules.push(rule);
            }
        }
    });

    return { paintRules, labelRules };
}

async function generatePmtilesRules(inputFile, outputFile) {
    const mapboxStyle = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
    const { svgSheet, iconIdMap } = await generateIconSheet();

    const sheetDefinition = `
const sheet = new protomapsL.Sheet(\`${svgSheet}\`); 

const pmtilesRulesReady = sheet.load().then(() => {
  const pmtilesRules = new Map();
  
  pmtilesRules.set(
    'https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer/tile/{z}/{y}/{x}.pbf',
    {
      sheet: sheet,
      rules: {
        PAINT_RULES: [
          ${generateRules(mapboxStyle.layers, "sheet", iconIdMap).paintRules.join(',\n          ')}
        ],
        LABEL_RULES: [
          ${generateRules(mapboxStyle.layers, "sheet", iconIdMap).labelRules.join(',\n          ')}
        ]
      }
    }
  );
  return pmtilesRules;
});
export { pmtilesRulesReady };
`;

    fs.writeFileSync(outputFile, sheetDefinition);
    console.log('pmtilesRules.js generated successfully');
}

// Run the script
generatePmtilesRules('mapbox.json', 'pmtilesRules.js');
