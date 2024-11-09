const pmtilesRules = new Map();

pmtilesRules.set(
  'https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer/tile/{z}/{y}/{x}.pbf',
  {
    rules: {
      PAINT_RULES: [
        {
          dataLayer: 'Countries/(2-7)/Line',
          symbolizer: new protomapsL.LineSymbolizer({
            color: '#CCCCCC',   // Use line color from Mapbox JSON
            width: 1.33333      // Use line width from Mapbox JSON
          }),
          filter: (feature) => feature._symbol === 0 // Filter for 'Disputed' type as per your Mapbox JSON
        },
        {
          dataLayer: 'Countries/(2-7)/Line',
          symbolizer: new protomapsL.LineSymbolizer({
            color: '#CCCCCC',   // Use line color for Treaty boundary
            width: 1.33333
          }),
          filter: (feature) => feature._symbol === 1 // Filter for 'Treaty' type as per Mapbox JSON
        }
      ],
      LABEL_RULES: [
        {
          dataLayer: 'Countries/(2-7)/Line',
          symbolizer: new protomapsL.CenteredTextSymbolizer({
            labelProps: ['name'],    // Display feature name if available
            fill: 'black',
            font: '600 12px sans-serif'
          }),
          filter: (z, f) => f.props.name && f.props.name.length > 0 // Only label named features
        }
      ]
    }
  }
);

export { pmtilesRules };
   