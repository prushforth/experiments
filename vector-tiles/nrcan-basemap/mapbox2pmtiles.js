const fs = require('fs');

// Load the mapbox.json file
const mapboxFilePath = 'mapbox.json';
const pmtilesFilePath = 'pmtilesRules.js';

// Refined SVG sheet with precise structure
const svgSheet = `
<html>
  <body>
    <svg id="test-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <circle cx="10" cy="10" r="8" fill="green" />
    </svg>
  </body>
</html>
`;

const ICON_SHEET = `const sheet = new protomapsL.Sheet(\`${svgSheet}\`);`;

// Helper function to log symbolizer creation for debugging
function logSymbolizer(type, layerId) {
    console.log(`Creating ${type} for layer: ${layerId}`);
}

// Helper function to ensure valid symbolizer values
function fixSymbolizerValue(value) {
    if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
    }
    return value;
}

async function generateRules() {
    const mapboxData = JSON.parse(fs.readFileSync(mapboxFilePath, 'utf8'));

    // Initialize pmtilesRules content
    let pmtilesRulesContent = `
const pmtilesRules = new Map();
${ICON_SHEET}

// Load the sheet before setting up the rules
sheet.load().then(() => {
    console.log("Sheet loaded successfully, setting up symbolizers.");

    pmtilesRules.set(
        'https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer/tile/{z}/{y}/{x}.pbf',
        {
            theme: { theme: 'light' },
            sheet: sheet,
            rules: {
                PAINT_RULES: [
    `;

    let labelRulesContent = `            LABEL_RULES: [
    `;

    // Function to map Mapbox style properties to protomaps-leaflet symbolizers
    function mapSymbolizer(style, layerId) {
        try {
            if (style.type === 'symbol') {
                if (style.layout && style.layout['icon-image']) {
                    // Use icon symbolizer only after confirming the sheet is loaded
                    logSymbolizer('IconSymbolizer', layerId);
                    return {
                        type: 'icon',
                        symbolizer: `new protomapsL.IconSymbolizer({
                            name: 'test-icon',
                            sheet: sheet
                        })`
                    };
                } else if (style.layout && style.layout['text-field']) {
                    // Text symbolizer for labels
                    logSymbolizer('CenteredTextSymbolizer', layerId);
                    return `new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['${style.layout['text-field'].replace(/[\{\}]/g, '')}'],
                        fill: '${fixSymbolizerValue(style.paint['text-color'] || '#000000')}',
                        halo: '${fixSymbolizerValue(style.paint['text-halo-color'] || '#FFFFFF')}',
                        haloWidth: ${fixSymbolizerValue(style.paint['text-halo-width'] || 1)},
                        font: '${style.layout['text-font'] ? style.layout['text-font'].join(' ') : 'sans-serif'} ${fixSymbolizerValue(style.layout['text-size'] || 12)}px'
                    })`;
                }
            } else if (style.type === 'fill') {
                // Polygon fill symbolizer
                logSymbolizer('PolygonSymbolizer', layerId);
                return `new protomapsL.PolygonSymbolizer({ fill: '${fixSymbolizerValue(style.paint["fill-color"] || '#FFFFFF')}'${style.paint["fill-outline-color"] ? `, outlineColor: '${fixSymbolizerValue(style.paint["fill-outline-color"])}'` : ''} })`;
            } else if (style.type === 'line') {
                // Line symbolizer
                const width = fixSymbolizerValue(style.paint["line-width"] || 1);
                logSymbolizer('LineSymbolizer', layerId);
                return `new protomapsL.LineSymbolizer({ color: '${fixSymbolizerValue(style.paint["line-color"] || '#000000')}', width: ${width} })`;
            } else {
                throw new Error(`Unsupported type '${style.type}' in layer '${layerId}'`);
            }
        } catch (error) {
            console.warn(`Error processing symbolizer for layer '${layerId}': ${error.message}. Defaulting to CircleSymbolizer.`);
            return `new protomapsL.CircleSymbolizer({ color: '#FF0000', radius: 5 })`;
        }
    }

    mapboxData.layers.forEach((layer, index) => {
        const symbolizerObj = mapSymbolizer(layer, layer.id);
        const filter = mapFilter(layer.filter);

        if (symbolizerObj && symbolizerObj.type === 'icon') {
            labelRulesContent += `
                    // Layer ${index + 1}: ${layer.id}
                    {
                        dataLayer: '${layer["source-layer"]}',
                        symbolizer: ${symbolizerObj.symbolizer},
                        minZoom: ${layer.minzoom || 0},
                        maxZoom: ${layer.maxzoom || 22}${filter ? `,
                        filter: ${filter}` : ''}
                    },
            `;
        } else if (symbolizerObj) {
            pmtilesRulesContent += `
                    // Layer ${index + 1}: ${layer.id}
                    {
                        dataLayer: '${layer["source-layer"]}',
                        symbolizer: ${symbolizerObj},
                        minZoom: ${layer.minzoom || 0},
                        maxZoom: ${layer.maxzoom || 22}${filter ? `,
                        filter: ${filter}` : ''}
                    },
            `;
        } else {
            pmtilesRulesContent += `
                    // Layer ${index + 1}: ${layer.id} (fallback)
                    {
                        dataLayer: '${layer["source-layer"]}',
                        symbolizer: new protomapsL.CircleSymbolizer({ color: '#FF0000', radius: 5 }),
                        minZoom: ${layer.minzoom || 0},
                        maxZoom: ${layer.maxzoom || 22}
                    },
            `;
        }
    });

    pmtilesRulesContent += `
                ],
    `;
    labelRulesContent += `
            ]
        }
    });
}).catch(error => {
    console.error("Error loading icon sheet:", error);
});

export { pmtilesRules };
    `;

    pmtilesRulesContent += labelRulesContent;
    fs.writeFileSync(pmtilesFilePath, pmtilesRulesContent);

    console.log('Transformation complete! Check pmtilesRules.js for output.');
}

// Function to map Mapbox filters to JS filter functions
function mapFilter(filter) {
    if (Array.isArray(filter) && filter.length === 3) {
        const [operator, property, value] = filter;
        switch (operator) {
            case '==':
                return `(z, f) => f.props.${property} === ${JSON.stringify(value)}`;
            case '!=':
                return `(z, f) => f.props.${property} !== ${JSON.stringify(value)}`;
            case '>':
                return `(z, f) => f.props.${property} > ${JSON.stringify(value)}`;
            case '<':
                return `(z, f) => f.props.${property} < ${JSON.stringify(value)}`;
        }
    }
    return null;
}

generateRules();
