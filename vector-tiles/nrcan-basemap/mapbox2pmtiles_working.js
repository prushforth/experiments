const fs = require('fs');

// Load the mapbox.json file
const mapboxFilePath = 'mapbox.json';
const pmtilesFilePath = 'pmtilesRules.js';

// Read mapbox.json file
const mapboxData = JSON.parse(fs.readFileSync(mapboxFilePath, 'utf8'));

// Initialize pmtilesRules content
let pmtilesRulesContent = `
const pmtilesRules = new Map();

pmtilesRules.set(
    'https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer/tile/{z}/{y}/{x}.pbf',
    {
        theme: { theme: 'light' },
        rules: {
            PAINT_RULES: [
`;

let labelRulesContent = `            LABEL_RULES: [
`;

// Function to resolve width or size properties that may be objects with stops
function resolveSize(value) {
    if (typeof value === 'object') {
        if (value.stops && Array.isArray(value.stops)) {
            const sizes = value.stops.map(stop => stop[1]);
            return sizes.reduce((a, b) => a + b, 0) / sizes.length;
        }
        return 12; // Default font size if no stops
    }
    return value || 12;
}

// Function to map Mapbox style properties to protomaps-leaflet symbolizers
function mapSymbolizer(style) {
    try {
        if (style.type === 'fill') {
            return `new protomapsL.PolygonSymbolizer({ fill: '${style.paint["fill-color"]}'${style.paint["fill-outline-color"] ? `, outlineColor: '${style.paint["fill-outline-color"]}'` : ''} })`;
        } else if (style.type === 'line') {
            const width = resolveSize(style.paint["line-width"]);
            return `new protomapsL.LineSymbolizer({ color: '${style.paint["line-color"]}', width: ${width} })`;
        } else if (style.type === 'symbol' && style.layout['text-field']) {
            const fontSize = resolveSize(style.layout["text-size"]);
            return {
                type: 'label',
                symbolizer: `new protomapsL.CenteredTextSymbolizer({
                            labelProps: ['${style.layout["text-field"].replace(/{|}/g, '')}'],
                            fill: '${style.paint["text-color"] || "#000"}',
                            halo: '${style.paint["text-halo-color"] || "#FFF"}',
                            haloWidth: ${style.paint["text-halo-width"] || 1},
                            font: '${style.layout["text-font"] ? style.layout["text-font"][0] : "sans-serif"} ${fontSize}px'
                        })`
            };
        } else if (style.paint["circle-color"] || style.paint["icon-color"] || style.type === 'circle') {
            const radius = resolveSize(style.paint["circle-radius"] || 6);
            return `new protomapsL.CircleSymbolizer({
                        color: '${style.paint["circle-color"] || style.paint["icon-color"] || "#000"}',
                        radius: ${radius}
                    })`;
        } else if (style.type === 'background') {
            console.warn(`Ignoring background style type in layer ${style.id}`);
            return null;
        }
        console.warn(`Unsupported style type: ${style.type} in layer ${style.id}`);
        return null;
    } catch (error) {
        console.error(`Error mapping symbolizer for layer ${style.id}:`, error);
        return `new protomapsL.PolygonSymbolizer({ fill: '#FF0000' })`;
    }
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

// Process each layer in mapbox.json
mapboxData.layers.forEach((layer, index) => {
    const symbolizerObj = mapSymbolizer(layer);
    const filter = mapFilter(layer.filter);
    
    if (symbolizerObj && symbolizerObj.type === 'label') {
        // Add to LABEL_RULES
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
        // Add to PAINT_RULES
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
    }
});

// Close PAINT_RULES array and add LABEL_RULES
pmtilesRulesContent += `
            ],
`;
labelRulesContent += `
            ]
        }
    }
);

export { pmtilesRules };
`;

// Combine paint rules and label rules
pmtilesRulesContent += labelRulesContent;

// Write the content to pmtilesRules.js
fs.writeFileSync(pmtilesFilePath, pmtilesRulesContent);

console.log('Transformation complete! Check pmtilesRules.js for output.');
