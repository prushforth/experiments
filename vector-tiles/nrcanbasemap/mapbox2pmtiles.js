const fs = require('fs');
const path = require('path');

// Mock protomapsL for Node.js environment
const protomapsL = {
  IconSymbolizer: class {
    constructor(options) {
      this.options = options;
    }
  },
  LineSymbolizer: class {
    constructor(options) {
      this.options = options;
    }
  },
  PolygonSymbolizer: class {
    constructor(options) {
      this.options = options;
    }
  },
  CenteredTextSymbolizer: class {
    constructor(options) {
      this.options = options;
    }
  },
  Sheet: class {
    constructor(svgContent) {
      this.svgContent = svgContent;
      this.loaded = false;
    }
    load() {
      return new Promise((resolve) => {
        // Simulate async loading
        setTimeout(() => {
          this.loaded = true;
          resolve();
        }, 100);
      });
    }
  }
};

// Helper function to extract numeric values from paint properties
function getNumericValue(property, defaultValue = 1) {
  if (typeof property === 'number') {
    return property;
  } else if (typeof property === 'object' && property.stops) {
    // Use the last stop value for simplicity
    return property.stops[property.stops.length - 1][1];
  }
  return defaultValue;
}

// Function to generate pmtilesRules.js from mapbox.json
const generatePmtilesRules = (layers, spriteJson, spriteSheetUrl) => {
  const sheetContent = Object.keys(spriteJson).map(key => {
    const { x, y, width, height } = spriteJson[key];
    return `
    <svg id="${key.replace(/[^a-zA-Z0-9_]/g, '_')}" width="${width}px" height="${height}px" xmlns="http://www.w3.org/2000/svg">
      <use href="${spriteSheetUrl}#${key}" x="${x}" y="${y}" width="${width}" height="${height}" />
    </svg>`;
  }).join('');

  const sheetDeclaration = `
const sheet = new protomapsL.Sheet(\`
<html>
  <body>
    ${sheetContent}
  </body>
</html>
\`);`;

  const paintRules = [];
  const labelRules = [];

  layers.forEach(layer => {
    const { filter, minzoom, maxzoom, layout, paint } = layer;

    // Determine which symbolizer to use
    let symbolizerExpr;
    if (layer.type === 'line') {
      const lineWidth = getNumericValue(paint['line-width'], 1);
      symbolizerExpr = `new protomapsL.LineSymbolizer({ color: '${paint['line-color']}', width: ${lineWidth} })`;
    } else if (layer.type === 'fill') {
      symbolizerExpr = `new protomapsL.PolygonSymbolizer({ fill: '${paint['fill-color']}', outlineColor: '${paint['fill-outline-color'] || '#000000'}' })`;
    } else if (layer.type === 'symbol' && layout['icon-image']) {
      const iconId = layout['icon-image'].replace(/[^a-zA-Z0-9_]/g, '_');
      symbolizerExpr = `new protomapsL.IconSymbolizer({ name: '${iconId}', sheet: sheet })`;
    } else if (layer.type === 'symbol' && layout['text-field']) {
      const fontSize = getNumericValue(layout['text-size'], 12);
      symbolizerExpr = `new protomapsL.CenteredTextSymbolizer({
        labelProps: ['${layout['text-field'].replace(/[{}]/g, '')}'],
        fill: '${paint['text-color'] || "#000000"}',
        halo: '${paint['text-halo-color'] || "#FFFFFF"}',
        haloWidth: ${getNumericValue(paint['text-halo-width'], 1)},
        font: '${layout['text-font'] ? layout['text-font'][0] : "Arial"} ${fontSize}px'
      })`;
    }

    if (symbolizerExpr) {
      const rule = `
        {
          dataLayer: '${layer['source-layer']}',
          symbolizer: ${symbolizerExpr},
          minZoom: ${minzoom || 0},
          maxZoom: ${maxzoom || 24}
        }`;
      if (layer.type === 'symbol') {
        labelRules.push(rule);
      } else {
        paintRules.push(rule);
      }
    }
  });

  // Generate the complete pmtilesRules.js content with promise-returning structure
  const output = `
${sheetDeclaration}

const pmtilesRules = new Map();
const pmtilesRulesReady = sheet.load().then(() => {
  pmtilesRules.set('https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer/tile/{z}/{y}/{x}.pbf', {
    sheet: sheet,
    rules: {
      PAINT_RULES: [
        ${paintRules.join(',\n        ')}
      ],
      LABEL_RULES: [
        ${labelRules.join(',\n        ')}
      ]
    }
  });
  return pmtilesRules;
});

export { pmtilesRules, pmtilesRulesReady };
`;

  return output;
};

// Main function to execute the script
async function main() {
  const mapboxFile = path.join(__dirname, 'mapbox.json');
  const spriteJsonFile = path.join(__dirname, 'sprite.json');
  const spritePngUrl = 'https://www.arcgis.com/sharing/rest/content/items/800d755712e8415aab301b9d55bc2800/resources/sprites/sprite-1728068500197.png';

  const mapboxData = JSON.parse(fs.readFileSync(mapboxFile, 'utf8'));
  const spriteJsonData = JSON.parse(fs.readFileSync(spriteJsonFile, 'utf8'));

  const output = generatePmtilesRules(mapboxData.layers, spriteJsonData, spritePngUrl);
  fs.writeFileSync(path.join(__dirname, 'pmtilesRules.js'), output);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
