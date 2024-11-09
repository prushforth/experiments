
const pmtilesRules = new Map();
pmtilesRules.set(
  'https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer/tile/{z}/{y}/{x}.pbf',
  {
    rules: {
      PAINT_RULES: [
        {
          dataLayer: 'Background',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#BFE9FF'
          })
        },
        {
          dataLayer: 'World/Land/(1-7)/Polygon',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#EDEDED',
            stroke: '#BFE9FF'
          })
        },
        {
          dataLayer: 'World/Lakes/(1-7)/Polygon',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#BFE9FF'
          })
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(0-2)/Canada',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#D9D9D9'
          })
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(2-3)/Canada',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F8F7F2',
            stroke: '#BBD4EE'
          }),
          filter: (feature) => feature._symbol === 0
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(2-3)/International; United States of America',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F5F5F5'
          }),
          filter: (feature) => feature._symbol === 1
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(3-4)/Canada',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F8F7F2'
          }),
          filter: (feature) => feature._symbol === 0
        },
        {
          dataLayer: "Administrative Features/Geopolitical Region/(3-4)/International; États-Unis d'Amérique",
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F3F4F4'
          }),
          filter: (feature) => feature._symbol === 1
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(4-7)/Canada',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F8F7F2'
          }),
          filter: (feature) => feature._symbol === 0
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(4-7)/International',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F3F4F4'
          }),
          filter: (feature) => feature._symbol === 1
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(7-9)/International',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F3F4F4'
          }),
          filter: (feature) => feature._symbol === 1
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(7-9)/Canada',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F8F7F2'
          }),
          filter: (feature) => feature._symbol === 0
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(9-24)/International',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F3F4F4'
          })
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(9-11)/Canada',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F8F7F2'
          })
        },
        {
          dataLayer: 'Administrative Features/Geopolitical Boundary/(11-24)/Canada',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: '#F8F7F2'
          })
        }
    ],
      LABEL_RULES: [
        {
          dataLayer: 'Administrative Features/Geopolitical Region/(9-24)/Province or Territory/1',
          symbolizer: new protomapsL.CenteredTextSymbolizer({
            labelProps: ['name'],
            fill: 'black',
            font: '600 16px sans-serif'
          }),
          filter: (z, f) => f.props.name && f.props.name.length > 0
        }
      ]
    }
  }
);

export { pmtilesRules };
