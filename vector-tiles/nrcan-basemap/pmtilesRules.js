
const pmtilesRules = new Map();
const sheet = new protomapsL.Sheet(`
<html>
  <body>
    <svg id="hospital" width="32px" height="32px" viewBox="4 4 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;">
        <g transform="matrix(1,0,0,1,-143.475,-174.472)">
            <g transform="matrix(1,0,0,1,160.5,179.497)">
                <path d="M0,16L-8,16C-10.209,16 -12,14.209 -12,12L-12,4C-12,1.791 -10.209,0 -8,0L0,0C2.209,0 4,1.791 4,4L4,12C4,14.209 2.209,16 0,16Z" style="fill:rgb(239,216,217);fill-rule:nonzero;stroke:rgb(216,30,58);stroke-width:1px;"/>
            </g>
            <g transform="matrix(1,0,0,1,154.5,185.497)">
                <path d="M0,4L-3,4L-3,0L0,0L0,-3L4,-3L4,0L7,0L7,4L4,4L4,7L0,7L0,4Z" style="fill:rgb(234,101,107);fill-rule:nonzero;stroke:white;stroke-width:1px;"/>
            </g>
        </g>
    </svg>
  </body>
`);

// Load the sheet before setting up the rules

    pmtilesRules.set(
        'https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer/tile/{z}/{y}/{x}.pbf',
        {
            theme: { theme: 'light' },
            sheet: sheet,
            rules: {
                PAINT_RULES: [
    
                    // Layer 1: Background
                    {
                        dataLayer: 'undefined',
                        symbolizer: new protomapsL.CircleSymbolizer({ color: '#FF0000', radius: 5 }),
                        minZoom: 0,
                        maxZoom: 22
                    },
            
                    // Layer 2: World/Land/(1-7)/Polygon
                    {
                        dataLayer: 'Land/(1-7)/Polygon',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#EDEDED', outlineColor: '#BFE9FF' }),
                        minZoom: 0,
                        maxZoom: 7
                    },
            
                    // Layer 3: World/Lakes/(1-7)/Polygon
                    {
                        dataLayer: 'Lakes/(1-7)/Polygon',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 1,
                        maxZoom: 7
                    },
            
                    // Layer 4: Administrative Features/Geopolitical Region/(0-2)/Canada
                    {
                        dataLayer: 'Geopolitical Region/(0-2)/Canada',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#D9D9D9' }),
                        minZoom: 0,
                        maxZoom: 2
                    },
            
                    // Layer 5: Administrative Features/Geopolitical Region/(2-3)/Canada
                    {
                        dataLayer: 'Geopolitical Region/(2-3)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2', outlineColor: '#BBD4EE' }),
                        minZoom: 2,
                        maxZoom: 3,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 6: Administrative Features/Geopolitical Region/(2-3)/International; United States of America
                    {
                        dataLayer: 'Geopolitical Region/(2-3)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F5F5F5' }),
                        minZoom: 2,
                        maxZoom: 3,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 7: Administrative Features/Geopolitical Region/(3-4)/Canada
                    {
                        dataLayer: 'Geopolitical Region/(3-4)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2' }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 8: Administrative Features/Geopolitical Region/(3-4)/International; États-Unis d'Amérique
                    {
                        dataLayer: 'Geopolitical Region/(3-4)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 9: Administrative Features/Geopolitical Region/(4-7)/Canada
                    {
                        dataLayer: 'Geopolitical Region/(4-7)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2' }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 10: Administrative Features/Geopolitical Region/(4-7)/International
                    {
                        dataLayer: 'Geopolitical Region/(4-7)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 11: Administrative Features/Geopolitical Region/(7-9)/International
                    {
                        dataLayer: 'Geopolitical Region/(7-9)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 12: Administrative Features/Geopolitical Region/(7-9)/Canada
                    {
                        dataLayer: 'Geopolitical Region/(7-9)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 13: Administrative Features/Geopolitical Region/(9-24)/International
                    {
                        dataLayer: 'Geopolitical Region/(9-24)/International',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 14: Administrative Features/Geopolitical Region/(9-11)/Canada
                    {
                        dataLayer: 'Geopolitical Region/(9-11)/Canada',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2' }),
                        minZoom: 9,
                        maxZoom: 11
                    },
            
                    // Layer 15: Administrative Features/Geopolitical Boundary/(11-24)/Canada
                    {
                        dataLayer: 'Geopolitical Boundary/(11-24)/Canada',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2' }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 16: Land Features/Coastal Island/(4-7)/Canada
                    {
                        dataLayer: 'Coastal Island/(4-7)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FAFAF5' }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 17: Land Features/Coastal Island/(4-7)/International
                    {
                        dataLayer: 'Coastal Island/(4-7)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F5F5F5' }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 18: Land Features/Coastal Island/(7-9)/Canada
                    {
                        dataLayer: 'Coastal Island/(7-9)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 19: Land Features/Coastal Island/(7-9)/International
                    {
                        dataLayer: 'Coastal Island/(7-9)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 20: Land Features/Island/(9-11)/Canada
                    {
                        dataLayer: 'Island/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 21: Land Features/Island/(9-11)/International
                    {
                        dataLayer: 'Island/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 22: Land Features/International Island/(11-24)/International
                    {
                        dataLayer: 'International Island/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 23: Man-made Features/Commercial Institution Area/(13-24)/0
                    {
                        dataLayer: 'Man-made Features/Commercial Institution Area/(13-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FAEDEF' }),
                        minZoom: 13,
                        maxZoom: 22
                    },
            
                    // Layer 24: Land Features/Wooded Area/(9-24)
                    {
                        dataLayer: 'Land Features/Wooded Area/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#DBEFDC' }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 25: Man-made Features/Residential Area/(9-24)
                    {
                        dataLayer: 'Man-made Features/Residential Area/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FAFAE0' }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 26: Hydro Features/Permanent Snow and Ice/(4-9)/2
                    {
                        dataLayer: 'Permanent Snow and Ice/(4-9)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FAFAFA' }),
                        minZoom: 4,
                        maxZoom: 9
                    },
            
                    // Layer 27: Hydro Features/Permanent Snow and Ice/(4-9)/1
                    {
                        dataLayer: 'Permanent Snow and Ice/(4-9)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 4,
                        maxZoom: 9
                    },
            
                    // Layer 28: Hydro Features/Permanent Snow and Ice/(4-9)/0
                    {
                        dataLayer: 'Permanent Snow and Ice/(4-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#C8FAFF', width: 1.33333 }),
                        minZoom: 4,
                        maxZoom: 9
                    },
            
                    // Layer 29: Hydro Features/Permanent Snow and Ice/(9-24)/2
                    {
                        dataLayer: 'Permanent Snow and Ice/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FAFAFA' }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 30: Hydro Features/Permanent Snow and Ice/(9-24)/1
                    {
                        dataLayer: 'Permanent Snow and Ice/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 31: Hydro Features/Permanent Snow and Ice/(9-24)/0
                    {
                        dataLayer: 'Permanent Snow and Ice/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#C8FAFF', width: 1.33333 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 32: Hydro Features/International Waterbody/(4-24)/Waterbody
                    {
                        dataLayer: 'International Waterbody/(4-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 4,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 33: Hydro Features/Waterbody/(2-4)
                    {
                        dataLayer: 'Waterbody/(2-4)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 2,
                        maxZoom: 4
                    },
            
                    // Layer 34: Hydro Features/Waterbody/(3-4)
                    {
                        dataLayer: 'Waterbody/(3-4)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 3,
                        maxZoom: 4
                    },
            
                    // Layer 35: Hydro Features/Waterbody/(4-7)/Below
                    {
                        dataLayer: 'Waterbody/(4-7)/Below',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 36: Hydro Features/Waterbody/(7-9)/Below/Permanent_1
                    {
                        dataLayer: 'Waterbody/(7-9)/Below',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 37: Hydro Features/Waterbody/(7-9)/Below/Intermittent_1/2
                    {
                        dataLayer: 'Waterbody/(7-9)/Below',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 38: Hydro Features/Waterbody/(7-9)/Below/Intermittent_1/1
                    {
                        dataLayer: 'Waterbody/(7-9)/Below',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 39: Hydro Features/Waterbody/(7-9)/Below/Intermittent_1/0
                    {
                        dataLayer: 'Waterbody/(7-9)/Below',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 40: Hydro Features/Waterbody/(9-11)/Permanent
                    {
                        dataLayer: 'Waterbody/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 41: Hydro Features/Waterbody/(9-11)/Intermittent/2
                    {
                        dataLayer: 'Waterbody/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#EDFAFF' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 42: Hydro Features/Waterbody/(9-11)/Intermittent/1
                    {
                        dataLayer: 'Waterbody/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 43: Hydro Features/Waterbody/(9-11)/Intermittent/0
                    {
                        dataLayer: 'Waterbody/(9-11)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 44: Hydro Features/Waterbody/(11-24)/Liquid Waste
                    {
                        dataLayer: 'Waterbody/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF', outlineColor: '#96989A' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 45: Hydro Features/Waterbody/(11-24)/Permanent
                    {
                        dataLayer: 'Waterbody/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 46: Hydro Features/Waterbody/(11-24)/Intermittent/2
                    {
                        dataLayer: 'Waterbody/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#EDFAFF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 47: Hydro Features/Waterbody/(11-24)/Intermittent/1
                    {
                        dataLayer: 'Waterbody/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 48: Hydro Features/Waterbody/(11-24)/Intermittent/0
                    {
                        dataLayer: 'Waterbody/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 49: Hydro Features/Other Waterbody/(9-24)
                    {
                        dataLayer: 'Other Waterbody/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 50: Land Features/Island/(4-7)/Canada
                    {
                        dataLayer: 'Island/(4-7)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F8F7F2' }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 51: Land Features/Island/(4-7)/United States of America
                    {
                        dataLayer: 'Island/(4-7)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 52: Land Features/Island/(7-9)
                    {
                        dataLayer: 'Island/(7-9)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F7F8F8' }),
                        minZoom: 7,
                        maxZoom: 9
                    },
            
                    // Layer 53: Land Features/Island/(7-11)
                    {
                        dataLayer: 'Island/(7-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F3F4F4' }),
                        minZoom: 7,
                        maxZoom: 11
                    },
            
                    // Layer 54: Hydro Features/Waterbody/(4-7)/Above
                    {
                        dataLayer: 'Waterbody/(4-7)/Above',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 55: Hydro Features/Waterbody/(7-9)/Above/Permanent
                    {
                        dataLayer: 'Waterbody/(7-9)/Above',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 56: Hydro Features/Waterbody/(7-9)/Above/Intermittent/2
                    {
                        dataLayer: 'Waterbody/(7-9)/Above',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#EDFAFF' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 57: Hydro Features/Waterbody/(7-9)/Above/Intermittent/1
                    {
                        dataLayer: 'Waterbody/(7-9)/Above',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 58: Hydro Features/Waterbody/(7-9)/Above/Intermittent/0
                    {
                        dataLayer: 'Waterbody/(7-9)/Above',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 59: Land Features/Landform/(9-11)/Moraine/1
                    {
                        dataLayer: 'Landform/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 60: Land Features/Landform/(9-11)/Moraine/0
                    {
                        dataLayer: 'Landform/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 61: Land Features/Landform/(9-11)/Sand
                    {
                        dataLayer: 'Landform/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 62: Land Features/Landform/(9-11)/Tundra Polygon
                    {
                        dataLayer: 'Landform/(9-11)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 63: Land Features/Landform/(11-24)/Glacial Debris Undifferentiated/2
                    {
                        dataLayer: 'Landform/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#F2F2F2' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 64: Land Features/Landform/(11-24)/Glacial Debris Undifferentiated/1
                    {
                        dataLayer: 'Landform/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 65: Land Features/Landform/(11-24)/Glacial Debris Undifferentiated/0
                    {
                        dataLayer: 'Landform/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 66: Land Features/Landform/(11-24)/Moraine/1
                    {
                        dataLayer: 'Landform/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 67: Land Features/Landform/(11-24)/Moraine/0
                    {
                        dataLayer: 'Landform/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 68: Land Features/Landform/(11-24)/Sand
                    {
                        dataLayer: 'Landform/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 69: Land Features/Landform/(11-24)/Tundra Polygon
                    {
                        dataLayer: 'Landform/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 70: Land Features/Saturated Soil/(9-24)/Palsa Bog
                    {
                        dataLayer: 'Saturated Soil/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 71: Land Features/Saturated Soil/(9-24)/String Bog
                    {
                        dataLayer: 'Saturated Soil/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 72: Land Features/Saturated Soil/(9-24)/Tundra Pond
                    {
                        dataLayer: 'Saturated Soil/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 73: Land Features/Saturated Soil/(9-24)/Wetland
                    {
                        dataLayer: 'Saturated Soil/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 74: Man-made Features/Indian Reserves/(12-24)/1
                    {
                        dataLayer: 'Man-made Features/Indian Reserves/(12-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#FFEBBE', width: 4.66667 }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 75: Man-made Features/Indian Reserves/(12-24)/0
                    {
                        dataLayer: 'Man-made Features/Indian Reserves/(12-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D19E34', width: 0.56 }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 76: Man-made Features/Leisure Area/(12-24)/Park/1
                    {
                        dataLayer: 'Man-made Features/Leisure Area/(12-24)/Park',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#C6D9B8', width: 4.66667 }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 77: Man-made Features/Leisure Area/(12-24)/Park/0
                    {
                        dataLayer: 'Man-made Features/Leisure Area/(12-24)/Park',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#565759', width: 0.56 }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 78: Man-made Features/Leisure Area/(11-24)/Polygon/Campground
                    {
                        dataLayer: 'Man-made Features/Leisure Area/(11-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#A4B27D', width: 0.377952 }),
                        minZoom: 13.2095,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 79: Man-made Features/Leisure Area/(11-24)/Polygon/Golf Course
                    {
                        dataLayer: 'Man-made Features/Leisure Area/(11-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#A4B27D', width: 0.377952 }),
                        minZoom: 11.2096,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 80: Man-made Features/Leisure Area/(11-24)/Polygon/Lookout
                    {
                        dataLayer: 'Man-made Features/Leisure Area/(11-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#A4B27D', width: 0.377952 }),
                        minZoom: 11.3289,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 81: Man-made Features/Leisure Area/(11-24)/Polygon/Sports Track
                    {
                        dataLayer: 'Man-made Features/Leisure Area/(11-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#9A9A9A', width: 0.94488 }),
                        minZoom: 13.2095,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 82: Man-made Features/Dam/(9-24)/Polygon/3
                    {
                        dataLayer: 'Dam/(9-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#FFFFFF', width: 1.88976 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 83: Man-made Features/Dam/(9-24)/Polygon/2
                    {
                        dataLayer: 'Dam/(9-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#96989A', width: 0.230929 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 84: Man-made Features/Dam/(9-24)/Polygon/1
                    {
                        dataLayer: 'Dam/(9-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#96989A', width: 0.230929 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 86: Hydro Features/Intermittent Water/(11-24)/2
                    {
                        dataLayer: 'Intermittent Water/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#EDFAFF' }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 87: Hydro Features/Intermittent Water/(11-24)/1
                    {
                        dataLayer: 'Intermittent Water/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 88: Hydro Features/Intermittent Water/(11-24)/0
                    {
                        dataLayer: 'Intermittent Water/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 89: Hydro Features/Hydro Obstacle/(9-24)/Polygon/Rapids/1
                    {
                        dataLayer: 'Hydro Obstacle/(9-24)/Polygon',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#BFE9FF' }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 90: Hydro Features/Hydro Obstacle/(9-24)/Polygon/Rapids/0
                    {
                        dataLayer: 'Hydro Obstacle/(9-24)/Polygon',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 92: Transport Features/Nautical Facility/(11-24)/Slip or Wharf/Polygon
                    {
                        dataLayer: 'Transport Features/Nautical Facility/(11-24)/Slip or Wharf/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.377952 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 93: Man-made Features/Protection Structure/(11-13)/Breakwater
                    {
                        dataLayer: 'Protection Structure/(11-13)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#78CDFF', width: 0.800124 }),
                        minZoom: 11,
                        maxZoom: 13,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 94: Man-made Features/Protection Structure/(13-24)/Breakwater
                    {
                        dataLayer: 'Protection Structure/(13-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#78CDFF', width: 0.800124 }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 95: Man-made Features/Protection Structure/(13-24)/Not Identified
                    {
                        dataLayer: 'Protection Structure/(13-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.377952 }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 96: Resource Management Features/Transformer Station/(11-24)
                    {
                        dataLayer: 'Transformer Station/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#997DB2', width: 0.377952 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 97: Resource Management Features/Oil and Gas Site/(10-24)/Polygon
                    {
                        dataLayer: 'Oil and Gas Site/(10-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#997DB2', width: 0.377952 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 98: Man-made Features/Waste/(11-24)
                    {
                        dataLayer: 'Waste/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#997DB2', width: 0.377952 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 99: Man-made Features/Fort/(11-24)
                    {
                        dataLayer: 'Fort/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.566928 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 100: Man-made Features/Ritual and Cultural Area/Cemetery/(11-24)/Polygon
                    {
                        dataLayer: 'Ritual and Cultural Area/Cemetery/(11-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#A4B27D', width: 0.377952 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 101: Transport Features/Runway/(11-24)/Polygon/Official/2
                    {
                        dataLayer: 'Transport Features/Runway/(11-24)/Polygon',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#E0DFD2' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 102: Transport Features/Runway/(11-24)/Polygon/Official/1
                    {
                        dataLayer: 'Transport Features/Runway/(11-24)/Polygon',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#96989A', width: 0.377952 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 104: Transport Features/Runway/(11-24)/Polygon/Non Official/1
                    {
                        dataLayer: 'Transport Features/Runway/(11-24)/Polygon',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#E0DFD2' }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 106: Resource Management Features/Peat/(11-24)
                    {
                        dataLayer: 'Peat/(11-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: 'rgba(219,239,220,0.75)', outlineColor: '#B6BDB7' }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 107: Resource Management Features/Ore/(9-24)/1
                    {
                        dataLayer: 'Ore/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 108: Resource Management Features/Ore/(9-24)/0
                    {
                        dataLayer: 'Ore/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.453542 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 109: Resource Management Features/Quarry/(9-24)/3
                    {
                        dataLayer: 'Quarry/(9-24)',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#FFFFFF' }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 110: Resource Management Features/Quarry/(9-24)/1
                    {
                        dataLayer: 'Quarry/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#9C9C9C', width: 0.666667 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 111: Resource Management Features/Quarry/(9-24)/0
                    {
                        dataLayer: 'Quarry/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#9C9C9C', width: 1.33333 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 112: Resource Management Features/Aggregate/(9-24)/1
                    {
                        dataLayer: 'Aggregate/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#9C9C9C', width: 0.666667 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 113: Resource Management Features/Aggregate/(9-24)/0
                    {
                        dataLayer: 'Aggregate/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#9C9C9C', width: 2 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 114: Elevation Features/Contours/(9-11)/Elevation
                    {
                        dataLayer: 'Contours/(9-11)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BDB7B1', width: 0.566928 }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 115: Elevation Features/Contours/(9-11)/Derived/1
                    {
                        dataLayer: 'Contours/(9-11)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#C4C4C4', width: 0.377952 }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 117: Elevation Features/Contours/(11-24)/Other/Depression/1
                    {
                        dataLayer: 'Contours/(11-24)/Other',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9D2CB', width: 0.333333 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 119: Elevation Features/Contours/(11-24)/Other/Approximative Elevation
                    {
                        dataLayer: 'Contours/(11-24)/Other',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9D2CB', width: 0.333333 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 120: Elevation Features/Contours/(11-24)/Other/Elevation
                    {
                        dataLayer: 'Contours/(11-24)/Other',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9D2CB', width: 0.333333 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 121: Elevation Features/Contours/(11-24)/Index/Depression/1
                    {
                        dataLayer: 'Contours/(11-24)/Index',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BDB7B1', width: 0.533333 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 123: Elevation Features/Contours/(11-24)/Index/Approximative Elevation
                    {
                        dataLayer: 'Contours/(11-24)/Index',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BDB7B1', width: 0.533333 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 124: Elevation Features/Contours/(11-24)/Index/Elevation
                    {
                        dataLayer: 'Contours/(11-24)/Index',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BDB7B1', width: 0.533333 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 125: Man-made Features/Buildings/(11-24)/Polygon/Residential
                    {
                        dataLayer: 'Buildings/(11-24)/Polygon',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#C5CDD2' }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 126: Man-made Features/Buildings/(11-24)/Polygon/Other
                    {
                        dataLayer: 'Buildings/(11-24)/Polygon',
                        symbolizer: new protomapsL.PolygonSymbolizer({ fill: '#C5CDD2' }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 127: World/Boundaries/Countries/(1-2)
                    {
                        dataLayer: 'Countries/(1-2)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 1.50667 }),
                        minZoom: 1,
                        maxZoom: 2
                    },
            
                    // Layer 128: World/Boundaries/Countries/(2-7)/Line/Disputed
                    {
                        dataLayer: 'Countries/(2-7)/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 1.33333 }),
                        minZoom: 2,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 129: World/Boundaries/Countries/(2-7)/Line/Treaty
                    {
                        dataLayer: 'Countries/(2-7)/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 1.33333 }),
                        minZoom: 2,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 130: World/Boundaries/USA States/(3-7)
                    {
                        dataLayer: 'USA States/(3-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 1.33333 }),
                        minZoom: 3,
                        maxZoom: 7
                    },
            
                    // Layer 131: Hydro Features/World/Watercourse/(2-7)
                    {
                        dataLayer: 'World/Watercourse/(2-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 0.933333 }),
                        minZoom: 2,
                        maxZoom: 7
                    },
            
                    // Layer 132: Hydro Features/Watercourse/(2-4)
                    {
                        dataLayer: 'Watercourse/(2-4)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 2,
                        maxZoom: 4
                    },
            
                    // Layer 133: Hydro Features/Watercourse/(3-4)
                    {
                        dataLayer: 'Watercourse/(3-4)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 3,
                        maxZoom: 4
                    },
            
                    // Layer 134: Hydro Features/Watercourse/(4-5)
                    {
                        dataLayer: 'Watercourse/(4-5)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 4,
                        maxZoom: 5
                    },
            
                    // Layer 135: Hydro Features/Watercourse/(4-7)
                    {
                        dataLayer: 'Watercourse/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 136: Hydro Features/Watercourse/(7-9)/Permanent
                    {
                        dataLayer: 'Watercourse/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.6 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 137: Hydro Features/Watercourse/(7-9)/Intermittent
                    {
                        dataLayer: 'Watercourse/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 138: Hydro Features/Watercourse/(7-9)/Not Identified
                    {
                        dataLayer: 'Watercourse/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.33333 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 139: Hydro Features/Watercourse/(7-9)/International
                    {
                        dataLayer: 'Watercourse/(7-9)/International',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.6 }),
                        minZoom: 7,
                        maxZoom: 9
                    },
            
                    // Layer 140: Hydro Features/Watercourse/(9-24)
                    {
                        dataLayer: 'Watercourse/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.6 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 141: Hydro Features/Watercourse/(9-11)
                    {
                        dataLayer: 'Watercourse/(9-11)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.73333 }),
                        minZoom: 9,
                        maxZoom: 11
                    },
            
                    // Layer 142: Hydro Features/Watercourse/(11-24)
                    {
                        dataLayer: 'Watercourse/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BFE9FF', width: 1.6 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 143: Administrative Features/Geopolitical Boundary/(1-2)/International Boundary
                    {
                        dataLayer: 'Geopolitical Boundary/(1-2)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#FFFFFF', width: 1.50667 }),
                        minZoom: 1,
                        maxZoom: 2,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 144: Administrative Features/Geopolitical Boundary/(1-2)/Provincial or Territorial Boundary
                    {
                        dataLayer: 'Geopolitical Boundary/(1-2)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#FFFFFF', width: 1.50667 }),
                        minZoom: 1,
                        maxZoom: 2,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 145: Administrative Features/Geopolitical Boundary/(2-4)/International Boundary or Exclusive Economic Zone
                    {
                        dataLayer: 'Geopolitical Boundary/(2-4)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D6D7D8', width: 1.50667 }),
                        minZoom: 2,
                        maxZoom: 4,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 146: Administrative Features/Geopolitical Boundary/(2-4)/Provincial or Territorial Boundary
                    {
                        dataLayer: 'Geopolitical Boundary/(2-4)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D6D7D8', width: 1.50667 }),
                        minZoom: 2,
                        maxZoom: 4,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 147: Administrative Features/Geopolitical Boundary/(3-4)
                    {
                        dataLayer: 'Geopolitical Boundary/(3-4)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D6D7D8', width: 1.50667 }),
                        minZoom: 3,
                        maxZoom: 4
                    },
            
                    // Layer 148: Administrative Features/Geopolitical Boundary/(4-7)/State Boundary
                    {
                        dataLayer: 'Geopolitical Boundary/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 2.26667 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 149: Administrative Features/Geopolitical Boundary/(4-7)/Provincial or Territorial Boundary/1
                    {
                        dataLayer: 'Geopolitical Boundary/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D2D2D2', width: 1.73333 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 150: Administrative Features/Geopolitical Boundary/(4-7)/Provincial or Territorial Boundary/0
                    {
                        dataLayer: 'Geopolitical Boundary/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 1.33333 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 151: Administrative Features/Geopolitical Boundary/(4-7)/International Boundary or Exclusive Economic Zone/1
                    {
                        dataLayer: 'Geopolitical Boundary/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BDBFC1', width: 2.66683 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 152: Administrative Features/Geopolitical Boundary/(4-7)/International Boundary or Exclusive Economic Zone/0
                    {
                        dataLayer: 'Geopolitical Boundary/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#828282', width: 0.944933 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 153: Administrative Features/Geopolitical Boundary/(7-9)/State Boundary
                    {
                        dataLayer: 'Geopolitical Boundary/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 2.26667 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 154: Administrative Features/Geopolitical Boundary/(7-9)/Provincial or Territorial Boundary/1
                    {
                        dataLayer: 'Geopolitical Boundary/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D2D2D2', width: 1.73333 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 155: Administrative Features/Geopolitical Boundary/(7-9)/Provincial or Territorial Boundary/0
                    {
                        dataLayer: 'Geopolitical Boundary/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 1.33333 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 156: Administrative Features/Geopolitical Boundary/(7-9)/International Boundary or Exclusive Economic Zone/1
                    {
                        dataLayer: 'Geopolitical Boundary/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#BDBFC1', width: 2.66683 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 157: Administrative Features/Geopolitical Boundary/(7-9)/International Boundary or Exclusive Economic Zone/0
                    {
                        dataLayer: 'Geopolitical Boundary/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#828282', width: 0.944933 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 158: Administrative Features/Geopolitical Boundary/(9-24)/State Boundary
                    {
                        dataLayer: 'Geopolitical Boundary/(9-24)/State Boundary',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 2.26667 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 159: Administrative Features/Geopolitical Boundary/(9-24)/International Boundary or Exclusive Economic Zone/1
                    {
                        dataLayer: 'Geopolitical Boundary/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 3.77952 }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 160: Administrative Features/Geopolitical Boundary/(9-24)/International Boundary or Exclusive Economic Zone/0
                    {
                        dataLayer: 'Geopolitical Boundary/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.94488 }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 161: Administrative Features/Geopolitical Boundary/(9-24)/Province or Territory/1
                    {
                        dataLayer: 'Geopolitical Boundary/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: 2.26771 }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 162: Administrative Features/Geopolitical Boundary/(9-24)/Province or Territory/0
                    {
                        dataLayer: 'Geopolitical Boundary/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.755904 }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 163: Transport Features/Trail/(10-24)/Bridge/1
                    {
                        dataLayer: 'Trail/(10-24)/Bridge',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 0.680314 }),
                        minZoom: 14,
                        maxZoom: 22
                    },
            
                    // Layer 165: Transport Features/Trail/(10-24)/Short
                    {
                        dataLayer: 'Trail/(10-24)/Short',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 0.566928 }),
                        minZoom: 14,
                        maxZoom: 22
                    },
            
                    // Layer 166: Transport Features/Trail/(10-24)/Long
                    {
                        dataLayer: 'Trail/(10-24)/Long',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 0.566928 }),
                        minZoom: 10,
                        maxZoom: 22
                    },
            
                    // Layer 167: Transport Features/Road Ferry/(3-4)/2
                    {
                        dataLayer: 'Road Ferry/(3-4)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.453542 }),
                        minZoom: 3,
                        maxZoom: 4
                    },
            
                    // Layer 170: Transport Features/Road Ferry/(4-7)/2
                    {
                        dataLayer: 'Road Ferry/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.453542 }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 173: Transport Features/Road Ferry/(7-9)/2
                    {
                        dataLayer: 'Road Ferry/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.453542 }),
                        minZoom: 7,
                        maxZoom: 9
                    },
            
                    // Layer 176: Transport Features/Road Ferry/(9-24)/2
                    {
                        dataLayer: 'Road Ferry/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.453542 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 179: Transport Features/Rail Ferry/(9-24)/2
                    {
                        dataLayer: 'Rail Ferry/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.453542 }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 187: Hydro Features/Hydro Obstacle/(9-24)/Line/Ford/1
                    {
                        dataLayer: 'Hydro Obstacle/(9-24)/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.755904 }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 188: Hydro Features/Hydro Obstacle/(9-24)/Line/Ford/0
                    {
                        dataLayer: 'Hydro Obstacle/(9-24)/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.755904 }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 190: Man-made Features/Dam/(12-24)/Line/4
                    {
                        dataLayer: 'Dam/(12-24)/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#FFFFFF', width: {"stops":[[9,1.51181],[14,3.02362],[21.9904,3.02362]]} }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 193: Man-made Features/Dam/(12-24)/Line/1
                    {
                        dataLayer: 'Dam/(12-24)/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#828282', width: {"stops":[[9,0.377952],[14,0.755904],[21.9904,0.755904]]} }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 194: Man-made Features/Dam/(12-24)/Line/0
                    {
                        dataLayer: 'Dam/(12-24)/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#828282', width: {"stops":[[9,0.377952],[14,0.755904],[21.9904,0.755904]]} }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 195: Transport Features/Nautical Facility/(9-11)/Wharf
                    {
                        dataLayer: 'Nautical Facility/(9-11)/Wharf',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.755904 }),
                        minZoom: 9,
                        maxZoom: 11
                    },
            
                    // Layer 196: Transport Features/Nautical Facility/(11-24)/Slip or Wharf/Line
                    {
                        dataLayer: 'Nautical Facility/(11-24)/Slip or Wharf/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#808080', width: 0.94488 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 197: Transport Features/Nautical Facility/(11-24)/Lock Gate/Line
                    {
                        dataLayer: 'Nautical Facility/(11-24)/Lock Gate/Line',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#6C9BC4', width: 1.51181 }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 200: Man-made Features/Protection Structure/(9-11)/Dyke or Levee/1
                    {
                        dataLayer: 'Protection Structure/(9-11)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#AD9E8A', width: 0.377952 }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 201: Man-made Features/Protection Structure/(9-11)/Dyke or Levee/0
                    {
                        dataLayer: 'Protection Structure/(9-11)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#AD9E8A', width: 0.377952 }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 202: Man-made Features/Protection Structure/(9-11)/Breakwater
                    {
                        dataLayer: 'Protection Structure/(9-11)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#6C9BC4', width: 0.755904 }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 203: Man-made Features/Protection Structure/(11-24)/Dyke or Levee/4
                    {
                        dataLayer: 'Protection Structure/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#FFFFFF', width: 3.02362 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 206: Man-made Features/Protection Structure/(11-24)/Dyke or Levee/1
                    {
                        dataLayer: 'Protection Structure/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#AD9E8A', width: 0.755904 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 207: Man-made Features/Protection Structure/(11-24)/Dyke or Levee/0
                    {
                        dataLayer: 'Protection Structure/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#AD9E8A', width: 0.755904 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 208: Man-made Features/Protection Structure/(11-24)/Breakwater
                    {
                        dataLayer: 'Protection Structure/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#6C9BC4', width: 0.755904 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 209: Man-made Features/Protection Structure/(11-24)/Not Identified
                    {
                        dataLayer: 'Protection Structure/(11-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#96989A', width: 0.755904 }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 210: Resource Management Features/Pipeline/(9-24)/Aboveground/1
                    {
                        dataLayer: 'Pipeline/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: {"stops":[[9,2.66667],[15,4.66667],[21.9904,4.66667]]} }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 211: Resource Management Features/Pipeline/(9-24)/Aboveground/0
                    {
                        dataLayer: 'Pipeline/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#FFFFFF', width: {"stops":[[9,1.54839],[15,2.70968],[21.9904,2.70968]]} }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 212: Resource Management Features/Pipeline/(9-24)/Underground/1
                    {
                        dataLayer: 'Pipeline/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#CCCCCC', width: {"stops":[[9,2.66667],[15,4.66667],[21.9904,4.66667]]} }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 213: Resource Management Features/Pipeline/(9-24)/Underground/0
                    {
                        dataLayer: 'Pipeline/(9-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#FFFFFF', width: {"stops":[[9,1.54839],[15,2.70968],[21.9904,2.70968]]} }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 214: Transport Features/Road Segment/USA/(4-7)
                    {
                        dataLayer: 'Road Segment/USA/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9BE6D', width: 1.33333 }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 215: Transport Features/Road Segment/USA/(5-7)
                    {
                        dataLayer: 'Road Segment/USA/(5-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2D479', width: 1.33333 }),
                        minZoom: 5,
                        maxZoom: 7
                    },
            
                    // Layer 216: Transport Features/Road Segment/USA/(7-24)/Highway
                    {
                        dataLayer: 'Road Segment/USA/(7-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9BE6D', width: 2 }),
                        minZoom: 7,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 217: Transport Features/Road Segment/USA/(7-24)/Freeway
                    {
                        dataLayer: 'Road Segment/USA/(7-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9BE6D', width: 1.33333 }),
                        minZoom: 7,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 218: Transport Features/Road Segment/(2-4)
                    {
                        dataLayer: 'Road Segment/(2-4)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: 1.06667 }),
                        minZoom: 2,
                        maxZoom: 4
                    },
            
                    // Layer 219: Transport Features/Road Segment/(4-7)/Freeway
                    {
                        dataLayer: 'Road Segment/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: 2 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 220: Transport Features/Road Segment/(4-7)/Highway
                    {
                        dataLayer: 'Road Segment/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: 1.33333 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 221: Transport Features/Road Segment/(4-7)/Other
                    {
                        dataLayer: 'Road Segment/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#DEC761', width: 0.755904 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 222: Transport Features/Road Segment/(4-7)/Winter
                    {
                        dataLayer: 'Road Segment/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#DEC761', width: 1.86667 }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 223: Transport Features/Road Segment/(5-7)/Freeway
                    {
                        dataLayer: 'Road Segment/(5-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: 2 }),
                        minZoom: 5,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 224: Transport Features/Road Segment/(5-7)/Highway
                    {
                        dataLayer: 'Road Segment/(5-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: 1.33333 }),
                        minZoom: 5,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 225: Transport Features/Road Segment/(5-7)/Other
                    {
                        dataLayer: 'Road Segment/(5-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 0.755904 }),
                        minZoom: 5,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 226: Transport Features/Road Segment/(5-7)/Winter
                    {
                        dataLayer: 'Road Segment/(5-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 1.86667 }),
                        minZoom: 5,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 227: Transport Features/Road Segment/(7-9)/Freeway
                    {
                        dataLayer: 'Road Segment/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: 2 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 228: Transport Features/Road Segment/(7-9)/Highway
                    {
                        dataLayer: 'Road Segment/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: 1.33333 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 229: Transport Features/Road Segment/(7-9)/Other
                    {
                        dataLayer: 'Road Segment/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 0.755904 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 230: Transport Features/Road Segment/(7-9)/Winter
                    {
                        dataLayer: 'Road Segment/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 1.86667 }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 231: Transport Features/Road Segment/(9-15)/Road/Winter
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 2 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 8
                    },
            
                    // Layer 232: Transport Features/Road Segment/(9-15)/Road/Service Lane
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 1.33333 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 233: Transport Features/Road Segment/(9-15)/Road/Resource or Recreation
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 1.33333 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 234: Transport Features/Road Segment/(9-15)/Road/Ramp
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B600', width: {"stops":[[11,0.666667],[15,1.33333]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 235: Transport Features/Road Segment/(9-15)/Road/Local
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: {"stops":[[11,0.8],[15,1.33333]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 236: Transport Features/Road Segment/(9-15)/Road/Freeway
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: {"stops":[[9,1.86667],[15,2.33333]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 237: Transport Features/Road Segment/(9-15)/Road/Highway
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: 2.00012 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 238: Transport Features/Road Segment/(9-15)/Road/Arterial
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B600', width: 1.33333 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 239: Transport Features/Road Segment/(9-15)/Road/Collector
                    {
                        dataLayer: 'Road Segment/(9-15)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B600', width: {"stops":[[9,0.666667],[15,1.33333]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 240: Transport Features/Road Segment/(9-15)/Tunnel/Winter/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 2 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 8
                    },
            
                    // Layer 241: Transport Features/Road Segment/(9-15)/Tunnel/Service Lane/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 1.33333 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 242: Transport Features/Road Segment/(9-15)/Tunnel/Resource or Recreation/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 1.33333 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 243: Transport Features/Road Segment/(9-15)/Tunnel/Ramp/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B600', width: {"stops":[[11,0.666667],[15,1.33333]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 244: Transport Features/Road Segment/(9-15)/Tunnel/Local/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: {"stops":[[11,0.8],[15,2.26667]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 245: Transport Features/Road Segment/(9-15)/Tunnel/Freeway/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: {"stops":[[9,1.86667],[15,2.33333]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 246: Transport Features/Road Segment/(9-15)/Tunnel/Highway/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A300', width: {"stops":[[9,2.00012],[11,2.66667],[14,4.66667]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 247: Transport Features/Road Segment/(9-15)/Tunnel/Highway/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[9,1],[11,1.33325],[14,2.33319]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 248: Transport Features/Road Segment/(9-15)/Tunnel/Highway/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[9,1],[11,1.33325],[14,2.33319]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 249: Transport Features/Road Segment/(9-15)/Tunnel/Freeway/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[9,0.8],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 250: Transport Features/Road Segment/(9-15)/Tunnel/Freeway/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[9,0.8],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 251: Transport Features/Road Segment/(9-15)/Tunnel/Arterial/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B600', width: {"stops":[[9,1.33333],[15,4.4]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 252: Transport Features/Road Segment/(9-15)/Tunnel/Arterial/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[9,0.30303],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 253: Transport Features/Road Segment/(9-15)/Tunnel/Arterial/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[9,0.30303],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 254: Transport Features/Road Segment/(9-15)/Tunnel/Collector/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[9,0.5],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 255: Transport Features/Road Segment/(9-15)/Tunnel/Collector/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[9,0.5],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 256: Transport Features/Road Segment/(9-15)/Tunnel/Ramp/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[11,0.5],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 257: Transport Features/Road Segment/(9-15)/Tunnel/Ramp/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[11,0.5],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 258: Transport Features/Road Segment/(9-15)/Tunnel/Local/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[11,0.352941],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 259: Transport Features/Road Segment/(9-15)/Tunnel/Local/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[11,0.352941],[15,1]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 260: Transport Features/Road Segment/(9-15)/Tunnel/Resource or Recreation/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 261: Transport Features/Road Segment/(9-15)/Tunnel/Resource or Recreation/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 262: Transport Features/Road Segment/(9-15)/Tunnel/Service Lane/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 263: Transport Features/Road Segment/(9-15)/Tunnel/Service Lane/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 264: Transport Features/Road Segment/(9-15)/Tunnel/Winter/1
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 8
                    },
            
                    // Layer 265: Transport Features/Road Segment/(9-15)/Tunnel/Winter/0
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 8
                    },
            
                    // Layer 266: Transport Features/Road Segment/(9-15)/Tunnel/Collector/2
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B600', width: {"stops":[[9,0.666667],[15,1.33333]]} }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 267: Transport Features/Road Segment/(15-24)/Road/Winter
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 2 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 268: Transport Features/Road Segment/(15-24)/Road/Service Lane
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: {"stops":[[0,0.666667],[11,0.666667],[13,1.33333],[21.9904,1.33333]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 269: Transport Features/Road Segment/(15-24)/Road/Resource or Recreation
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 1.33333 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 270: Transport Features/Road Segment/(15-24)/Road/Ramp
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B500', width: {"stops":[[0,0.666667],[11,0.666667],[14,1.33333],[21.9904,1.33333]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 271: Transport Features/Road Segment/(15-24)/Road/Local
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: {"stops":[[0,0.666667],[11,0.666667],[13,1.33333],[21.9904,2.26667]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 272: Transport Features/Road Segment/(15-24)/Road/Collector
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B500', width: {"stops":[[0,1.33333],[11,1.33333],[13,2.26667],[21.9904,2.26667]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 273: Transport Features/Road Segment/(15-24)/Road/Arterial
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B600', width: {"stops":[[0,2.66667],[11,2.66667],[15,4.4],[21.9904,4.66667]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 274: Transport Features/Road Segment/(15-24)/Road/Highway/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A200', width: {"stops":[[11,6.66667],[15,10.6667],[21.9904,10.6667]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 275: Transport Features/Road Segment/(15-24)/Road/Highway/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Road',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F8F7F2', width: {"stops":[[11,3.33333],[15,5.33333],[21.9904,5.33333]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 276: Transport Features/Road Segment/(15-24)/Tunnel/Winter/2
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 2 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 277: Transport Features/Road Segment/(15-24)/Tunnel/Service Lane/2
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: {"stops":[[0,0.666667],[11,0.666667],[13,1.33333],[21.9904,1.33333]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 278: Transport Features/Road Segment/(15-24)/Tunnel/Resource or Recreation/2
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: 1.33333 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 279: Transport Features/Road Segment/(15-24)/Tunnel/Ramp/2
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B500', width: {"stops":[[0,0.666667],[11,0.666667],[14,1.33333],[21.9904,1.33333]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 280: Transport Features/Road Segment/(15-24)/Tunnel/Local/2
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2C749', width: {"stops":[[0,0.666667],[11,0.666667],[13,1.33333],[21.9904,2.26667]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 281: Transport Features/Road Segment/(15-24)/Tunnel/Collector/2
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B500', width: {"stops":[[0,1.33333],[11,1.33333],[13,2.26667],[21.9904,2.26667]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 282: Transport Features/Road Segment/(15-24)/Tunnel/Highway/2
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F8F7F2', width: {"stops":[[11,3.33333],[15,5.33333],[21.9904,5.33333]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 283: Transport Features/Road Segment/(15-24)/Tunnel/Arterial/2
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#F2B600', width: {"stops":[[0,2.66667],[11,2.66667],[15,4.4],[21.9904,4.66667]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 284: Transport Features/Road Segment/(15-24)/Tunnel/Arterial/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.40404],[11,0.40404],[15,0.666667],[21.9904,0.707071]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 285: Transport Features/Road Segment/(15-24)/Tunnel/Arterial/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.40404],[11,0.40404],[15,0.666667],[21.9904,0.707071]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 286: Transport Features/Road Segment/(15-24)/Tunnel/Highway/3
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#D9A200', width: {"stops":[[11,6.66667],[15,10.6667],[21.9904,10.6667]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 287: Transport Features/Road Segment/(15-24)/Tunnel/Highway/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[11,0.625],[15,1],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 288: Transport Features/Road Segment/(15-24)/Tunnel/Highway/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[11,0.625],[15,1],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 289: Transport Features/Road Segment/(15-24)/Tunnel/Collector/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.588235],[11,0.588235],[13,1],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 290: Transport Features/Road Segment/(15-24)/Tunnel/Collector/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.588235],[11,0.588235],[13,1],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 291: Transport Features/Road Segment/(15-24)/Tunnel/Ramp/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.5],[11,0.5],[14,1],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 292: Transport Features/Road Segment/(15-24)/Tunnel/Ramp/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.5],[11,0.5],[14,1],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 293: Transport Features/Road Segment/(15-24)/Tunnel/Local/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.294118],[11,0.294118],[13,0.588235],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 294: Transport Features/Road Segment/(15-24)/Tunnel/Local/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.294118],[11,0.294118],[13,0.588235],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 295: Transport Features/Road Segment/(15-24)/Tunnel/Resource or Recreation/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 296: Transport Features/Road Segment/(15-24)/Tunnel/Resource or Recreation/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 297: Transport Features/Road Segment/(15-24)/Tunnel/Service Lane/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.5],[11,0.5],[13,1],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 298: Transport Features/Road Segment/(15-24)/Tunnel/Service Lane/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: {"stops":[[0,0.5],[11,0.5],[13,1],[21.9904,1]]} }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 299: Transport Features/Road Segment/(15-24)/Tunnel/Winter/1
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 300: Transport Features/Road Segment/(15-24)/Tunnel/Winter/0
                    {
                        dataLayer: 'Road Segment/(15-24)/Tunnel',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#666666', width: 1 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 301: Transport Features/Track Structure-Line/Tunnel/(9-15)/1
                    {
                        dataLayer: 'Track Structure-Line/Tunnel/(9-15)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.755904 }),
                        minZoom: 9,
                        maxZoom: 15
                    },
            
                    // Layer 302: Transport Features/Track Structure-Line/Tunnel/(9-15)/0
                    {
                        dataLayer: 'Track Structure-Line/Tunnel/(9-15)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.755904 }),
                        minZoom: 9,
                        maxZoom: 15
                    },
            
                    // Layer 303: Transport Features/Track Structure-Line/Tunnel/(15-24)/1
                    {
                        dataLayer: 'Track Structure-Line/Tunnel/(15-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.755904 }),
                        minZoom: 15,
                        maxZoom: 22
                    },
            
                    // Layer 304: Transport Features/Track Structure-Line/Tunnel/(15-24)/0
                    {
                        dataLayer: 'Track Structure-Line/Tunnel/(15-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.755904 }),
                        minZoom: 15,
                        maxZoom: 22
                    },
            
                    // Layer 305: Transport Features/Track Segment/Track/(2-3)/1
                    {
                        dataLayer: 'Track/(2-3)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.680314 }),
                        minZoom: 2,
                        maxZoom: 3
                    },
            
                    // Layer 307: Transport Features/Track Segment/Track/(3-4)/1
                    {
                        dataLayer: 'Track/(3-4)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.680314 }),
                        minZoom: 3,
                        maxZoom: 4
                    },
            
                    // Layer 309: Transport Features/Track Segment/Track/(6-7)/1
                    {
                        dataLayer: 'Track/(6-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.680314 }),
                        minZoom: 6,
                        maxZoom: 7
                    },
            
                    // Layer 311: Transport Features/Track Segment/Track/(5-7)/1
                    {
                        dataLayer: 'Track/(5-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.680267 }),
                        minZoom: 5,
                        maxZoom: 7
                    },
            
                    // Layer 313: Transport Features/Track Segment/Track/(4-7)/1
                    {
                        dataLayer: 'Track/(4-7)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.680314 }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 315: Transport Features/Track Segment/Track/(7-9)/1
                    {
                        dataLayer: 'Track/(7-9)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.680314 }),
                        minZoom: 7,
                        maxZoom: 9
                    },
            
                    // Layer 317: Transport Features/Track Segment/Track/(9-15)/Not Identified/1
                    {
                        dataLayer: 'Track/(9-15)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.777501 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 319: Transport Features/Track Segment/Track/(9-15)/Discontinued/1
                    {
                        dataLayer: 'Track/(9-15)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 1.06667 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 321: Transport Features/Track Segment/Track/(9-15)/Operational/1
                    {
                        dataLayer: 'Track/(9-15)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.777501 }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 323: Transport Features/Track Segment/Other/(10-15)/1
                    {
                        dataLayer: 'Other/(10-15)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.777501 }),
                        minZoom: 10,
                        maxZoom: 15
                    },
            
                    // Layer 325: Transport Features/Track Segment/Track/(15-24)/Not Identified/1
                    {
                        dataLayer: 'Track/(15-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.777501 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 327: Transport Features/Track Segment/Track/(15-24)/Discontinued/1
                    {
                        dataLayer: 'Track/(15-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 1.06667 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 329: Transport Features/Track Segment/Track/(15-24)/Operational/1
                    {
                        dataLayer: 'Track/(15-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.777501 }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 331: Transport Features/Track Segment/Other/(15-24)/1
                    {
                        dataLayer: 'Other/(15-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 0.777501 }),
                        minZoom: 15,
                        maxZoom: 22
                    },
            
                    // Layer 333: Transport Features/Aerial Cableway/(13-24)/1
                    {
                        dataLayer: 'Aerial Cableway/(13-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#999999', width: 1.33341 }),
                        minZoom: 13,
                        maxZoom: 22
                    },
            
                    // Layer 336: Resource Management Features/Power Line/(12-24)/Underground/Underwater/1
                    {
                        dataLayer: 'Power Line/(12-24)',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#7F7F7F', width: 0.4 }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 364: Hydro Features/Hydro Obstacle/(13-24)/Point/Dyke or Levee
                    {
                        dataLayer: 'Hydro Obstacle/(13-24)/Point',
                        symbolizer: new protomapsL.CircleSymbolizer({ color: '#FF0000', radius: 5 }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 391: World/Populated Places/(4-5)/French/label/Lignes FR
                    {
                        dataLayer: 'Populated Places/(4-5)/French/label/Lignes FR',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#B2B2B2', width: 1.33333 }),
                        minZoom: 4,
                        maxZoom: 5
                    },
            
                    // Layer 392: World/Populated Places/(5-6)/French/label/Lignes FR
                    {
                        dataLayer: 'Populated Places/(5-6)/French/label/Lignes FR',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#B2B2B2', width: 1.33333 }),
                        minZoom: 5,
                        maxZoom: 6
                    },
            
                    // Layer 393: World/Populated Places/(6-7)/French/label/Lignes FR
                    {
                        dataLayer: 'Populated Places/(6-7)/French/label/Lignes FR',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#B2B2B2', width: 1.33333 }),
                        minZoom: 6,
                        maxZoom: 7
                    },
            
                    // Layer 394: World/Populated Places/(4-5)/English/label/Lines EN
                    {
                        dataLayer: 'Populated Places/(4-5)/English/label/Lines EN',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#B2B2B2', width: 1.33333 }),
                        minZoom: 4,
                        maxZoom: 5
                    },
            
                    // Layer 395: World/Populated Places/(5-6)/English/label/Lines EN
                    {
                        dataLayer: 'Populated Places/(5-6)/English/label/Lines EN',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#B3B3B3', width: 1.33333 }),
                        minZoom: 5,
                        maxZoom: 6
                    },
            
                    // Layer 396: World/Populated Places/(6-7)/English/label/Lines EN
                    {
                        dataLayer: 'Populated Places/(6-7)/English/label/Lines EN',
                        symbolizer: new protomapsL.LineSymbolizer({ color: '#B2B2B2', width: 1.33333 }),
                        minZoom: 6,
                        maxZoom: 7
                    },
            
                    // Layer 397: Toponymic Features/Named Feature/USA Places/(7-18)
                    {
                        dataLayer: 'USA Places/(7-18)',
                        symbolizer: new protomapsL.CircleSymbolizer({ color: '#FF0000', radius: 5 }),
                        minZoom: 7,
                        maxZoom: 18
                    },
            
                    // Layer 400: Toponymic Features/Named Feature/Places/(5-18)
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CircleSymbolizer({ color: '#FF0000', radius: 5 }),
                        minZoom: 5,
                        maxZoom: 18
                    },
            
                    // Layer 404: Elevation Features/Contours/(11-24)/Other/label/Label FR
                    {
                        dataLayer: 'Contours/(11-24)/Other/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#686868',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Italic 9.33333px'
                    }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 405: Elevation Features/Contours/(11-24)/Other/label/Label EN
                    {
                        dataLayer: 'Contours/(11-24)/Other/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#686868',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Italic 9.33333px'
                    }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 406: Elevation Features/Contours/(11-24)/Index/label/Index 12 FR
                    {
                        dataLayer: 'Contours/(11-24)/Index/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#606060',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Italic 9.33333px'
                    }),
                        minZoom: 11,
                        maxZoom: 13,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 407: Elevation Features/Contours/(11-24)/Index/label/Index 12 EN
                    {
                        dataLayer: 'Contours/(11-24)/Index/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#606060',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Italic 9.33333px'
                    }),
                        minZoom: 11,
                        maxZoom: 13,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 408: Elevation Features/Contours/(11-24)/Index/label/Index 14 FR
                    {
                        dataLayer: 'Contours/(11-24)/Index/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#606060',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 409: Elevation Features/Contours/(11-24)/Index/label/Index 14 EN
                    {
                        dataLayer: 'Contours/(11-24)/Index/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#606060',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 410: Toponymic Features/Named Feature/Railway Feature/label/Label FR
                    {
                        dataLayer: 'Railway Feature',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 11,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 411: Toponymic Features/Named Feature/Railway Feature/label/Label EN
                    {
                        dataLayer: 'Railway Feature',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 11,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 412: Toponymic Features/Named Feature/Craters and Springs/label/Label FR
                    {
                        dataLayer: 'Craters and Springs',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 413: Toponymic Features/Named Feature/Craters and Springs/label/Label EN
                    {
                        dataLayer: 'Craters and Springs',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 414: Toponymic Features/Named Feature/Cave and Marine Navigation and Hydraulic Construction/label/Label FR
                    {
                        dataLayer: 'Cave and Marine Navigation and Hydraulic Construction',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 415: Toponymic Features/Named Feature/Cave and Marine Navigation and Hydraulic Construction/label/Label EN
                    {
                        dataLayer: 'Cave and Marine Navigation and Hydraulic Construction',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 416: Toponymic Features/Named Feature/Natural Resources Site/label/Label FR
                    {
                        dataLayer: 'Natural Resources Site',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 12,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 417: Toponymic Features/Named Feature/Natural Resources Site/label/Label EN
                    {
                        dataLayer: 'Natural Resources Site',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 12,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 418: Toponymic Features/Named Feature/Forest/label/Label FR
                    {
                        dataLayer: 'Forest',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#558000',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 419: Toponymic Features/Named Feature/Forest/label/Label EN
                    {
                        dataLayer: 'Forest',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#558000',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 420: Toponymic Features/Named Feature/Shoals/label/Label FR
                    {
                        dataLayer: 'Shoals',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#2B9BA6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 421: Toponymic Features/Named Feature/Shoals/label/Label EN
                    {
                        dataLayer: 'Shoals',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2B9BA6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 422: Toponymic Features/Named Feature/Falls or Rapids/label/Label FR
                    {
                        dataLayer: 'Falls or Rapids',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 423: Toponymic Features/Named Feature/Falls or Rapids/label/Label EN
                    {
                        dataLayer: 'Falls or Rapids',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 424: Toponymic Features/Named Feature/Channel/label/Label FR
                    {
                        dataLayer: 'Channel',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 11,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 425: Toponymic Features/Named Feature/Channel/label/Label EN
                    {
                        dataLayer: 'Channel',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 11,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 426: Toponymic Features/Named Feature/Vegetation/label/50000 FR
                    {
                        dataLayer: 'Vegetation',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#558000',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 12,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 427: Toponymic Features/Named Feature/Vegetation/label/50000 EN
                    {
                        dataLayer: 'Vegetation',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#558000',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 12,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 428: Toponymic Features/Named Feature/Vegetation/label/250000 FR
                    {
                        dataLayer: 'Vegetation',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#558000',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 429: Toponymic Features/Named Feature/Vegetation/label/250000 EN
                    {
                        dataLayer: 'Vegetation',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#558000',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 430: Toponymic Features/Named Feature/Vegetation/label/1200000 FR
                    {
                        dataLayer: 'Vegetation',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#558000',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 431: Toponymic Features/Named Feature/Vegetation/label/1200000 EN
                    {
                        dataLayer: 'Vegetation',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#6A8040',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 432: Toponymic Features/Named Feature/Glacier/label/5000 et moins FR
                    {
                        dataLayer: 'Glacier',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#5C9399',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 15,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 433: Toponymic Features/Named Feature/Glacier/label/5000 and less EN
                    {
                        dataLayer: 'Glacier',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#5C9399',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 15,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 434: Toponymic Features/Named Feature/Glacier/label/250000 FR
                    {
                        dataLayer: 'Glacier',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#5C9399',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 435: Toponymic Features/Named Feature/Glacier/label/250000 EN
                    {
                        dataLayer: 'Glacier',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#5C9399',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 436: Toponymic Features/Named Feature/Glacier/label/Plus 1000000 FR
                    {
                        dataLayer: 'Glacier',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#5C9399',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 437: Toponymic Features/Named Feature/Glacier/label/Over 1000000 EN
                    {
                        dataLayer: 'Glacier',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5C9399',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 438: Toponymic Features/Named Feature/Beach/label/Label FR
                    {
                        dataLayer: 'Beach',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 439: Toponymic Features/Named Feature/Beach/label/Label EN
                    {
                        dataLayer: 'Beach',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 440: Toponymic Features/Named Feature/Mountain/label/250000 FR
                    {
                        dataLayer: 'Mountain',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Regular 11.3333px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 441: Toponymic Features/Named Feature/Mountain/label/250000 EN
                    {
                        dataLayer: 'Mountain',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Regular 11.3333px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 442: Toponymic Features/Named Feature/Mountain/label/1000000 FR
                    {
                        dataLayer: 'Mountain',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Regular 11.3333px'
                    }),
                        minZoom: 9,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 443: Toponymic Features/Named Feature/Mountain/label/1000000 EN
                    {
                        dataLayer: 'Mountain',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Regular 11.3333px'
                    }),
                        minZoom: 9,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 444: Elevation Features/Elevation Point/(10-12)/label/Label FR
                    {
                        dataLayer: 'Elevation Features/Elevation Point/(10-12)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#848688',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 12,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 445: Elevation Features/Elevation Point/(10-12)/label/Label EN
                    {
                        dataLayer: 'Elevation Features/Elevation Point/(10-12)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#848688',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 12,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 446: Toponymic Features/Named Feature/Military and Miscellaneous/label/Label FR
                    {
                        dataLayer: 'Military and Miscellaneous',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 447: Toponymic Features/Named Feature/Military and Miscellaneous/label/Label EN
                    {
                        dataLayer: 'Military and Miscellaneous',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 13,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 448: Toponymic Features/Named Feature/Transport/label/Transport moins de 250000 FR
                    {
                        dataLayer: 'Transport',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#A68042',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 449: Man-made Features/Leisure Area/(12-24)/Park/label/Label FR
                    {
                        dataLayer: 'Man-made Features/Leisure Area/(12-24)/Park/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#708C5B',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 450: Toponymic Features/Named Feature/Transport/label/Transport plus 250000 FR
                    {
                        dataLayer: 'Transport',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#A68042',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 451: Toponymic Features/Named Feature/Transport/label/Transport less than 250000 EN
                    {
                        dataLayer: 'Transport',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#A68042',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 452: Man-made Features/Leisure Area/(12-24)/Park/label/Label EN
                    {
                        dataLayer: 'Man-made Features/Leisure Area/(12-24)/Park/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#708C5B',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 453: Toponymic Features/Named Feature/Transport/label/Transport over 250000 EN
                    {
                        dataLayer: 'Transport',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#A68042',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 454: Toponymic Features/Named Feature/Island/Polygon/label/10 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 10px'
                    }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 19
                    },
            
                    // Layer 455: Toponymic Features/Named Feature/Island/Polygon/label/10 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 10px'
                    }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 9
                    },
            
                    // Layer 456: Toponymic Features/Named Feature/Island/Polygon/label/9 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 10px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 18
                    },
            
                    // Layer 457: Toponymic Features/Named Feature/Island/Polygon/label/9 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 10px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 8
                    },
            
                    // Layer 458: Toponymic Features/Named Feature/Island/Polygon/label/8 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 10.6667px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 17
                    },
            
                    // Layer 459: Toponymic Features/Named Feature/Island/Polygon/label/8 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 10.6667px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 7
                    },
            
                    // Layer 460: Toponymic Features/Named Feature/Island/Polygon/label/7 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,10.6667],[8.2096,10.6667],[9.2096,11.3333],[22.2094,11.3333]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 16
                    },
            
                    // Layer 461: Toponymic Features/Named Feature/Island/Polygon/label/7 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,10.6667],[8.2096,10.6667],[9.2096,11.3333],[22.2094,11.3333]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 6
                    },
            
                    // Layer 462: Toponymic Features/Named Feature/Island/Polygon/label/6 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 15
                    },
            
                    // Layer 463: Toponymic Features/Named Feature/Island/Polygon/label/6 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 464: Toponymic Features/Named Feature/Island/Polygon/label/5 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,12],[8.2096,12],[9.2096,13.3333],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 14
                    },
            
                    // Layer 465: Toponymic Features/Named Feature/Island/Polygon/label/5 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,12],[8.2096,12],[9.2096,13.3333],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 466: Toponymic Features/Named Feature/Island/Polygon/label/4 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 13.3333px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 13
                    },
            
                    // Layer 467: Toponymic Features/Named Feature/Island/Polygon/label/4 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 13.3333px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 468: Toponymic Features/Named Feature/Island/Polygon/label/3 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,13.3333],[8.2096,13.3333],[9.2096,16],[22.2094,16]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 12
                    },
            
                    // Layer 469: Toponymic Features/Named Feature/Island/Polygon/label/3 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,13.3333],[8.2096,13.3333],[9.2096,16],[22.2094,16]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 470: Toponymic Features/Named Feature/Island/Polygon/label/2 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,14.6667],[8.2096,14.6667],[9.2096,18.6667],[22.2094,18.6667]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 11
                    },
            
                    // Layer 471: Toponymic Features/Named Feature/Island/Polygon/label/2 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,14.6667],[8.2096,14.6667],[9.2096,18.6667],[22.2094,18.6667]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 472: Toponymic Features/Named Feature/Island/Polygon/label/1 FR
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,21.3333],[8.2096,21.3333],[9.2096,24],[22.2094,24]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 10
                    },
            
                    // Layer 473: Toponymic Features/Named Feature/Island/Polygon/label/1 EN
                    {
                        dataLayer: 'Island/Polygon/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,21.3333],[8.2096,21.3333],[9.2096,24],[22.2094,24]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 474: Hydro Features/Watercourse/(11-24)/label/Label FR
                    {
                        dataLayer: 'Watercourse/(11-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 475: Hydro Features/Watercourse/(11-24)/label/Label EN
                    {
                        dataLayer: 'Watercourse/(11-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 476: Hydro Features/Waterbody/(11-24)/label/Cours d'eau FR
                    {
                        dataLayer: 'Waterbody/(11-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 11.3333px'
                    }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 477: Hydro Features/Waterbody/(11-24)/label/Watercourse EN
                    {
                        dataLayer: 'Waterbody/(11-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 11.3333px'
                    }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 478: Toponymic Features/Named Feature/Waterbody/label/Cours d'eau FR
                    {
                        dataLayer: 'Waterbody/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 9.2096,
                        maxZoom: 11.2096,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 479: Toponymic Features/Named Feature/Waterbody/label/Watercourse EN
                    {
                        dataLayer: 'Waterbody/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 9.2096,
                        maxZoom: 11.2096,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 480: Hydro Features/Waterbody/(11-24)/label/Grand FR
                    {
                        dataLayer: 'Waterbody/(11-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 11.3333px'
                    }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 481: Hydro Features/Waterbody/(11-24)/label/Large EN
                    {
                        dataLayer: 'Waterbody/(11-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 11.3333px'
                    }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 482: Toponymic Features/Named Feature/Waterbody/label/Grand FR
                    {
                        dataLayer: 'Waterbody/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 9.2096,
                        maxZoom: 11.2096,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 483: Toponymic Features/Named Feature/Waterbody/label/Large EN
                    {
                        dataLayer: 'Waterbody/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 9.2096,
                        maxZoom: 11.2096,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 484: Toponymic Features/Named Feature/Cape/label/Label FR
                    {
                        dataLayer: 'Cape',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 485: Toponymic Features/Named Feature/Cape/label/Label EN
                    {
                        dataLayer: 'Cape',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 486: Toponymic Features/Named Feature/Airport/label/Label FR
                    {
                        dataLayer: 'Airport',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#A68753',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold Italic 13.3333px'
                    }),
                        minZoom: 11,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 487: Toponymic Features/Named Feature/Airport/label/Label EN
                    {
                        dataLayer: 'Airport',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#A68753',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold Italic 13.3333px'
                    }),
                        minZoom: 11,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 488: Toponymic Features/Named Feature/Bay/label/250000 et moins FR
                    {
                        dataLayer: 'Bay',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 12,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 489: Toponymic Features/Named Feature/Bay/label/250000 and less EN
                    {
                        dataLayer: 'Bay',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 12,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 490: Toponymic Features/Named Feature/Bay/label/Plus 1000000 FR
                    {
                        dataLayer: 'Bay',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 491: Toponymic Features/Named Feature/Bay/label/Over 1000000 EN
                    {
                        dataLayer: 'Bay',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 492: Toponymic Features/Named Feature/Island/Point/label/50000 FR
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name9'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 12,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class9 === 9
                    },
            
                    // Layer 493: Toponymic Features/Named Feature/Island/Point/label/50000 EN
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 12,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 494: Toponymic Features/Named Feature/Island/Point/label/250000 FR
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 495: Toponymic Features/Named Feature/Island/Point/label/250000 EN
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 496: Toponymic Features/Named Feature/Island/Point/label/1000000 FR
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 497: Toponymic Features/Named Feature/Island/Point/label/1000000 EN
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 498: Toponymic Features/Named Feature/Island/Point/label/2000000 FR
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 499: Toponymic Features/Named Feature/Island/Point/label/2000000 EN
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 500: Toponymic Features/Named Feature/Island/Point/label/Plus 5000000 FR
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 501: Toponymic Features/Named Feature/Island/Point/label/Over 5000000 EN
                    {
                        dataLayer: 'Island/Point',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 502: Toponymic Features/Named Feature/Watercourse/label/50000 et moins FR
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name9'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 15,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class9 === 9
                    },
            
                    // Layer 503: Toponymic Features/Named Feature/Watercourse/label/50000 and less EN
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 15,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 504: Toponymic Features/Named Feature/Watercourse/label/2000000 FR
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 505: Toponymic Features/Named Feature/Watercourse/label/2000000 EN
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 506: Toponymic Features/Named Feature/Watercourse/label/1000000 FR
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 507: Toponymic Features/Named Feature/Watercourse/label/1000000 EN
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 508: Toponymic Features/Named Feature/Watercourse/label/250000 FR
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 509: Toponymic Features/Named Feature/Watercourse/label/250000 EN
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 510: Toponymic Features/Named Feature/Watercourse/label/5000000 FR
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 511: Toponymic Features/Named Feature/Watercourse/label/5000000 EN
                    {
                        dataLayer: 'Watercourse',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 512: Toponymic Features/Named Feature/Lake/label/5000 et moins FR
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name9'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 16,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class9 === 9
                    },
            
                    // Layer 513: Toponymic Features/Named Feature/Lake/label/5000 and less EN
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 16,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 514: Toponymic Features/Named Feature/Lake/label/250000 FR
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 515: Toponymic Features/Named Feature/Lake/label/250000 EN
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 516: Toponymic Features/Named Feature/Lake/label/1000000 FR
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 517: Toponymic Features/Named Feature/Lake/label/1000000 EN
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 518: Toponymic Features/Named Feature/Lake/label/2000000 FR
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 519: Toponymic Features/Named Feature/Lake/label/2000000 EN
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 520: Toponymic Features/Named Feature/Lake/label/5000000 FR
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 521: Toponymic Features/Named Feature/Lake/label/5000000 EN
                    {
                        dataLayer: 'Lake',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 10,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 522: Toponymic Features/Atlas Named Feature/Peninsula/label/10 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 19
                    },
            
                    // Layer 523: Toponymic Features/Atlas Named Feature/Peninsula/label/10 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 9
                    },
            
                    // Layer 524: Toponymic Features/Atlas Named Feature/Peninsula/label/9 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 18
                    },
            
                    // Layer 525: Toponymic Features/Atlas Named Feature/Peninsula/label/9 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 8
                    },
            
                    // Layer 526: Toponymic Features/Atlas Named Feature/Peninsula/label/8 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 17
                    },
            
                    // Layer 527: Toponymic Features/Atlas Named Feature/Peninsula/label/8 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 7
                    },
            
                    // Layer 528: Toponymic Features/Atlas Named Feature/Peninsula/label/7 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 16
                    },
            
                    // Layer 529: Toponymic Features/Atlas Named Feature/Peninsula/label/7 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 6
                    },
            
                    // Layer 530: Toponymic Features/Atlas Named Feature/Peninsula/label/6 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 15
                    },
            
                    // Layer 531: Toponymic Features/Atlas Named Feature/Peninsula/label/6 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 8,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 532: Toponymic Features/Atlas Named Feature/Peninsula/label/5 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 14
                    },
            
                    // Layer 533: Toponymic Features/Atlas Named Feature/Peninsula/label/5 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 12px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 534: Toponymic Features/Atlas Named Feature/Peninsula/label/4 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 13.3333px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 13
                    },
            
                    // Layer 535: Toponymic Features/Atlas Named Feature/Peninsula/label/4 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 13.3333px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 536: Toponymic Features/Atlas Named Feature/Peninsula/label/3 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 15.3333px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 12
                    },
            
                    // Layer 537: Toponymic Features/Atlas Named Feature/Peninsula/label/3 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 15.3333px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 538: Toponymic Features/Atlas Named Feature/Peninsula/label/2 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 18.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 11
                    },
            
                    // Layer 539: Toponymic Features/Atlas Named Feature/Peninsula/label/2 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 18.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 540: Toponymic Features/Atlas Named Feature/Peninsula/label/1 FR
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 22.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 10
                    },
            
                    // Layer 541: Toponymic Features/Atlas Named Feature/Peninsula/label/1 EN
                    {
                        dataLayer: 'Atlas Named Feature/Peninsula/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#997C61',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 22.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 11,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 542: Toponymic Features/Atlas Named Feature/Cape/label/Label FR
                    {
                        dataLayer: 'Atlas Named Feature/Cape',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 8,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 543: Toponymic Features/Atlas Named Feature/Cape/label/Label EN
                    {
                        dataLayer: 'Atlas Named Feature/Cape',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#8F451F',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Italic 10.6667px'
                    }),
                        minZoom: 8,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 544: Toponymic Features/Named Feature/Places/(5-18)/label/23-35 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name28'],
                        fill: '#343434',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,12],[12.2096,12],[13.2095,12.6667],[14.2096,14],[22.2094,14]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class28 === 28
                    },
            
                    // Layer 545: Toponymic Features/Named Feature/Places/(5-18)/label/23-35 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name13'],
                        fill: '#343434',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,12],[12.2096,12],[13.2095,12.6667],[14.2096,14],[22.2094,14]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class13 === 13
                    },
            
                    // Layer 546: Toponymic Features/Named Feature/Places/(5-18)/label/21-22 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name27'],
                        fill: '#343434',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,12],[8.2096,12],[9.2096,12.6667],[12.2096,12.6667],[13.2095,13.3333],[14.2096,14.6667],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class27 === 27
                    },
            
                    // Layer 547: Toponymic Features/Named Feature/Places/(5-18)/label/21-22 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name12'],
                        fill: '#343434',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,12],[8.2096,12],[9.2096,12.6667],[12.2096,12.6667],[13.2095,13.3333],[14.2096,14.6667],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class12 === 12
                    },
            
                    // Layer 548: Toponymic Features/Named Feature/Places/(5-18)/label/36 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name29'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[6.2096,15.3333],[7.2096,12.6667],[8.2096,12.6667],[9.2096,13.3333],[12.2096,13.3333],[13.2095,14],[14.2096,15.3333],[22.2094,15.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class29 === 29
                    },
            
                    // Layer 549: Toponymic Features/Named Feature/Places/(5-18)/label/36 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name14'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[6.2096,15.3333],[7.2096,12.6667],[8.2096,12.6667],[9.2096,13.3333],[12.2096,13.3333],[13.2095,14],[14.2096,15.3333],[22.2094,15.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class14 === 14
                    },
            
                    // Layer 550: Toponymic Features/Named Feature/Places/(5-18)/label/18-20 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name26'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,12],[8.2096,12],[9.2096,13.3333],[12.2096,13.3333],[13.2095,14],[14.2096,15.3333],[22.2094,15.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class26 === 26
                    },
            
                    // Layer 551: Toponymic Features/Named Feature/Places/(5-18)/label/18-20 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name11'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,12],[8.2096,12],[9.2096,13.3333],[12.2096,13.3333],[13.2095,14],[14.2096,15.3333],[22.2094,15.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class11 === 11
                    },
            
                    // Layer 552: Toponymic Features/Named Feature/Places/(5-18)/label/15-17 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name25'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,12.6667],[8.2096,12.6667],[9.2096,13.3333],[12.2096,13.3333],[13.2095,14],[14.2096,15.3333],[22.2094,15.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class25 === 25
                    },
            
                    // Layer 553: Toponymic Features/Named Feature/Places/(5-18)/label/15-17 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name10'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,12.6667],[8.2096,12.6667],[9.2096,13.3333],[12.2096,13.3333],[13.2095,14],[14.2096,15.3333],[22.2094,15.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class10 === 10
                    },
            
                    // Layer 554: Toponymic Features/Named Feature/Places/(5-18)/label/14 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name24'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,13.3333],[8.2096,13.3333],[9.2096,14],[12.2096,14],[13.2095,14.6667],[14.2096,15.3333],[22.2094,15.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class24 === 24
                    },
            
                    // Layer 555: Toponymic Features/Named Feature/Places/(5-18)/label/14 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name9'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,13.3333],[8.2096,13.3333],[9.2096,14],[12.2096,14],[13.2095,14.6667],[14.2096,15.3333],[22.2094,15.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class9 === 9
                    },
            
                    // Layer 556: Transport Features/Road Segment/(9-15)/Road/label/Artériel FR
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,13.3333],[22.2094,16]]}px'
                    }),
                        minZoom: 11,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 6
                    },
            
                    // Layer 557: Transport Features/Road Segment/(9-15)/Road/label/Arterial EN
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,13.3333],[22.2094,16]]}px'
                    }),
                        minZoom: 11,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 558: Transport Features/Road Segment/(9-15)/Tunnel/label/Artériel FR
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,13.3333],[22.2094,16]]}px'
                    }),
                        minZoom: 11,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 6
                    },
            
                    // Layer 559: Transport Features/Road Segment/(9-15)/Tunnel/label/Arterial EN
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,13.3333],[22.2094,16]]}px'
                    }),
                        minZoom: 11,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 560: Transport Features/Road Segment/(15-24)/Road/label/Artériel FR
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,13.3333],[22.2094,16]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 8
                    },
            
                    // Layer 561: Transport Features/Road Segment/(15-24)/Road/label/Arterial EN
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,13.3333],[22.2094,16]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 562: Transport Features/Road Segment/(9-15)/Road/label/Collectionneur FR
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,12],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 11,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 7
                    },
            
                    // Layer 563: Transport Features/Road Segment/(9-15)/Road/label/Collector EN
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,12],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 11,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 564: Transport Features/Road Segment/(9-15)/Tunnel/label/Collectionneur FR
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,12],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 11,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 7
                    },
            
                    // Layer 565: Transport Features/Road Segment/(9-15)/Tunnel/label/Collector EN
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,12],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 11,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 566: Transport Features/Road Segment/(15-24)/Road/label/Collectionneur FR
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,13.3333],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 9
                    },
            
                    // Layer 567: Transport Features/Road Segment/(15-24)/Road/label/Collector EN
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,12],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 568: Transport Features/Road Segment/(9-15)/Road/label/Local FR
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,12]]}px'
                    }),
                        minZoom: 13,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 8
                    },
            
                    // Layer 569: Transport Features/Road Segment/(9-15)/Road/label/Local EN
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,12]]}px'
                    }),
                        minZoom: 13,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 570: Transport Features/Road Segment/(9-15)/Tunnel/label/Local FR
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,12]]}px'
                    }),
                        minZoom: 13,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 8
                    },
            
                    // Layer 571: Transport Features/Road Segment/(9-15)/Tunnel/label/Local EN
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,12]]}px'
                    }),
                        minZoom: 13,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 572: Transport Features/Road Segment/(15-24)/Road/label/Local FR
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,12]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 10
                    },
            
                    // Layer 573: Transport Features/Road Segment/(15-24)/Road/label/Local EN
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,12]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 574: Transport Features/Road Segment/(15-24)/Road/label/Ressource FR
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 11
                    },
            
                    // Layer 575: Transport Features/Road Segment/(15-24)/Road/label/Resource EN
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 576: Transport Features/Road Segment/(15-24)/Road/label/Hiver FR
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 12
                    },
            
                    // Layer 577: Transport Features/Road Segment/(15-24)/Road/label/Winter EN
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#736350',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[11.2096,10.6667],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 6
                    },
            
                    // Layer 578: Transport Features/Road Segment/(9-15)/Road/label/Autoroute nommée FR
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2.66667,
                        font: 'Aboriginal Sans Italic {"stops":[[11.2096,14.6667],[22.2094,16]]}px'
                    }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 579: Transport Features/Road Segment/(9-15)/Road/label/Named Highway EN
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2.66667,
                        font: 'Aboriginal Sans Italic {"stops":[[11.2096,14.6667],[22.2094,16]]}px'
                    }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 580: Transport Features/Road Segment/(9-15)/Tunnel/label/Autoroute nommée FR
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2.66667,
                        font: 'Aboriginal Sans Italic {"stops":[[11.2096,14.6667],[22.2094,16]]}px'
                    }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 581: Transport Features/Road Segment/(9-15)/Tunnel/label/Named Highway EN
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2.66667,
                        font: 'Aboriginal Sans Italic {"stops":[[11.2096,14.6667],[22.2094,16]]}px'
                    }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 582: Transport Features/Road Segment/(15-24)/Road/label/Autoroute nommée FR
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2.66667,
                        font: 'Aboriginal Sans Italic {"stops":[[11.2096,14.6667],[22.2094,16]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 7
                    },
            
                    // Layer 583: Transport Features/Road Segment/(15-24)/Road/label/Named Highway EN
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#735025',
                        halo: '#F8F7F2',
                        haloWidth: 2.66667,
                        font: 'Aboriginal Sans Italic {"stops":[[11.2096,14.6667],[22.2094,16]]}px'
                    }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 587: Toponymic Features/Named Feature/Places/(5-18)/label/13 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name23'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,13.3333],[8.2096,13.3333],[9.2096,14],[12.2096,14],[13.2095,14.6667],[14.2096,16],[22.2094,16]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class23 === 23
                    },
            
                    // Layer 588: Toponymic Features/Named Feature/Places/(5-18)/label/13 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,13.3333],[8.2096,13.3333],[9.2096,14],[12.2096,14],[13.2095,14.6667],[14.2096,16],[22.2094,16]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 589: Toponymic Features/Named Feature/Places/(5-18)/label/12 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name22'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,13.3333],[8.2096,13.3333],[9.2096,14.6667],[13.2095,14.6667],[14.2096,16],[22.2094,16]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class22 === 22
                    },
            
                    // Layer 590: Toponymic Features/Named Feature/Places/(5-18)/label/12 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,13.3333],[8.2096,13.3333],[9.2096,14.6667],[13.2095,14.6667],[14.2096,16],[22.2094,16]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 591: Toponymic Features/Named Feature/Places/(5-18)/label/9-11 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name21'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,14],[8.2096,14],[9.2096,14.6667],[12.2096,14.6667],[13.2095,15.3333],[14.2096,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class21 === 21
                    },
            
                    // Layer 592: Toponymic Features/Named Feature/Places/(5-18)/label/9-11 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,14],[8.2096,14],[9.2096,14.6667],[12.2096,14.6667],[13.2095,15.3333],[14.2096,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 593: Toponymic Features/Named Feature/Places/(5-18)/label/8 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name20'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,14],[8.2096,14],[9.2096,15.3333],[15.2096,15.3333],[16.2094,16],[17.2094,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class20 === 20
                    },
            
                    // Layer 594: Toponymic Features/Named Feature/Places/(5-18)/label/8 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,14],[8.2096,14],[9.2096,15.3333],[15.2096,15.3333],[16.2094,16],[17.2094,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 595: Toponymic Features/Named Feature/Places/(5-18)/label/7 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name19'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,14.6667],[8.2096,14.6667],[9.2096,16],[12.2096,16],[13.2095,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class19 === 19
                    },
            
                    // Layer 596: Toponymic Features/Named Feature/Places/(5-18)/label/7 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,14.6667],[8.2096,14.6667],[9.2096,16],[12.2096,16],[13.2095,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 597: Toponymic Features/Named Feature/Places/(5-18)/label/6 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name18'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,14.6667],[8.2096,14.6667],[9.2096,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class18 === 18
                    },
            
                    // Layer 598: Toponymic Features/Named Feature/Places/(5-18)/label/6 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,14.6667],[8.2096,14.6667],[9.2096,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 599: Toponymic Features/Named Feature/Places/(5-18)/label/5 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name17'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,15.3333],[8.2096,15.3333],[9.2096,17.3333],[22.2094,17.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class17 === 17
                    },
            
                    // Layer 600: Toponymic Features/Named Feature/Places/(5-18)/label/5 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,15.3333],[8.2096,15.3333],[9.2096,17.3333],[22.2094,17.3333]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 601: Toponymic Features/Named Feature/Places/(5-18)/label/4 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name16'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,16],[8.2096,16],[9.2096,18],[22.2094,18]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class16 === 16
                    },
            
                    // Layer 602: Toponymic Features/Named Feature/Places/(5-18)/label/4 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[6.2096,11.3333],[7.2096,16],[8.2096,16],[9.2096,18],[22.2094,18]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 603: Toponymic Features/Named Feature/Places/(5-18)/label/3 FR
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name15'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[4.2096,11.3333],[6.2096,11.3333],[7.2096,16.6667],[8.2096,16.6667],[9.2096,18.6667],[22.2094,18.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class15 === 15
                    },
            
                    // Layer 604: Toponymic Features/Named Feature/Places/(5-18)/label/3 EN
                    {
                        dataLayer: 'Places/(5-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Aboriginal Sans Regular {"stops":[[0,11.3333],[4.2096,11.3333],[6.2096,11.3333],[7.2096,16.6667],[8.2096,16.6667],[9.2096,18.6667],[22.2094,18.6667]]}px'
                    }),
                        minZoom: 5,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 605: Toponymic Features/Named Feature/USA Places/(7-18)/label/Label FR
                    {
                        dataLayer: 'USA Places/(7-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Regular 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 606: Toponymic Features/Named Feature/USA Places/(7-18)/label/Label EN
                    {
                        dataLayer: 'USA Places/(7-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Regular 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 607: Toponymic Features/Named Feature/USA Capitals/(7-18)/label/Washington FR
                    {
                        dataLayer: 'USA Capitals/(7-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#A17367',
                        halo: '#F3F4F4',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 14.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 608: Toponymic Features/Named Feature/USA Capitals/(7-18)/label/Washington EN
                    {
                        dataLayer: 'USA Capitals/(7-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#A17367',
                        halo: '#F3F4F4',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular 14.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 609: Toponymic Features/Named Feature/USA Capitals/(7-18)/label/Capitale de l'Etat FR
                    {
                        dataLayer: 'USA Capitals/(7-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[3.2096,12],[4.2096,12],[5.2096,13.3333],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 610: Toponymic Features/Named Feature/USA Capitals/(7-18)/label/State Capitals EN
                    {
                        dataLayer: 'USA Capitals/(7-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Regular {"stops":[[3.2096,12],[4.2096,12],[5.2096,13.3333],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 611: Hydro Features/International Waterbody/(4-24)/label/Noms des É.-U.A. FR
                    {
                        dataLayer: 'International Waterbody/(4-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F3F4F4',
                        haloWidth: 2,
                        font: 'Aboriginal Serif Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 612: Hydro Features/International Waterbody/(4-24)/label/USA Names EN
                    {
                        dataLayer: 'International Waterbody/(4-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F3F4F4',
                        haloWidth: 2,
                        font: 'Aboriginal Serif Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 613: Toponymic Features/Atlas Named Feature/Hydro Features/label/S FR
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 9,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 614: Toponymic Features/Atlas Named Feature/Hydro Features/label/S EN
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 9,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 615: Toponymic Features/Atlas Named Feature/Hydro Features/label/M FR
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 13.3333px'
                    }),
                        minZoom: 8,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 6
                    },
            
                    // Layer 616: Toponymic Features/Atlas Named Feature/Hydro Features/label/M EN
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 13.3333px'
                    }),
                        minZoom: 8,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 617: Toponymic Features/Atlas Named Feature/Hydro Features/label/L FR
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Italic 14.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 7
                    },
            
                    // Layer 618: Toponymic Features/Atlas Named Feature/Hydro Features/label/L EN
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Italic 14.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 619: Toponymic Features/Atlas Named Feature/Hydro Features/label/XXL FR
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Italic {"stops":[[0,13.3333],[6.2096,13.3333],[7.2096,14.6667],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 9
                    },
            
                    // Layer 620: Toponymic Features/Atlas Named Feature/Hydro Features/label/XL FR
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Italic 14.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 8
                    },
            
                    // Layer 621: Toponymic Features/Atlas Named Feature/Hydro Features/label/XXL EN
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Italic {"stops":[[0,13.3333],[6.2096,13.3333],[7.2096,14.6667],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 622: Toponymic Features/Atlas Named Feature/Hydro Features/label/XL EN
                    {
                        dataLayer: 'Hydro Features/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Italic 14.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 623: Hydro Features/Waterbody/(7-9)/Below/label/XXS FR
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 7
                    },
            
                    // Layer 624: Hydro Features/Waterbody/(7-9)/Below/label/XXS EN
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 625: Hydro Features/Waterbody/(7-9)/Below/label/XS FR
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 8
                    },
            
                    // Layer 626: Hydro Features/Waterbody/(7-9)/Below/label/XS EN
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 9,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 627: Hydro Features/Waterbody/(7-9)/Below/label/S FR
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 9
                    },
            
                    // Layer 628: Hydro Features/Waterbody/(7-9)/Below/label/S EN
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 629: Hydro Features/Waterbody/(7-9)/Below/label/M FR
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 10
                    },
            
                    // Layer 630: Hydro Features/Waterbody/(7-9)/Below/label/M EN
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 631: Hydro Features/Waterbody/(7-9)/Below/label/L FR
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 11
                    },
            
                    // Layer 632: Hydro Features/Waterbody/(7-9)/Below/label/L EN
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 633: Hydro Features/Waterbody/(7-9)/Below/label/XL FR
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 12
                    },
            
                    // Layer 634: Hydro Features/Waterbody/(7-9)/Below/label/XL EN
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 635: Hydro Features/Waterbody/(7-9)/Below/label/XXL FR
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 13
                    },
            
                    // Layer 636: Hydro Features/Waterbody/(7-9)/Below/label/XXL EN
                    {
                        dataLayer: 'Waterbody/(7-9)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 7,
                        maxZoom: 10,
                        filter: (z, f) => f.props._label_class === 6
                    },
            
                    // Layer 637: Hydro Features/International Waterbody/(4-24)/label/S FR
                    {
                        dataLayer: 'International Waterbody/(4-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 638: Hydro Features/International Waterbody/(4-24)/label/S EN
                    {
                        dataLayer: 'International Waterbody/(4-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 639: Hydro Features/Waterbody/(4-7)/Below/label/S FR
                    {
                        dataLayer: 'Waterbody/(4-7)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 640: Hydro Features/Waterbody/(4-7)/Below/label/S EN
                    {
                        dataLayer: 'Waterbody/(4-7)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 641: Hydro Features/International Waterbody/(4-24)/label/M FR
                    {
                        dataLayer: 'International Waterbody/(4-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 6
                    },
            
                    // Layer 642: Hydro Features/International Waterbody/(4-24)/label/M EN
                    {
                        dataLayer: 'International Waterbody/(4-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 643: Hydro Features/Waterbody/(4-7)/Below/label/M FR
                    {
                        dataLayer: 'Waterbody/(4-7)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 4
                    },
            
                    // Layer 644: Hydro Features/Waterbody/(4-7)/Below/label/M EN
                    {
                        dataLayer: 'Waterbody/(4-7)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 645: Hydro Features/Waterbody/(4-7)/Below/label/L FR
                    {
                        dataLayer: 'Waterbody/(4-7)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 646: Hydro Features/Waterbody/(4-7)/Below/label/L EN
                    {
                        dataLayer: 'Waterbody/(4-7)/Below/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 647: Hydro Features/International Waterbody/(4-24)/label/L FR
                    {
                        dataLayer: 'International Waterbody/(4-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 7
                    },
            
                    // Layer 648: Hydro Features/International Waterbody/(4-24)/label/L EN
                    {
                        dataLayer: 'International Waterbody/(4-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 12px'
                    }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 3
                    },
            
                    // Layer 649: Toponymic Features/Named Feature/USA State Names/(3-7)/label/Label FR
                    {
                        dataLayer: 'USA State Names/(3-7)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold 10.6667px'
                    }),
                        minZoom: 3,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 650: Toponymic Features/Named Feature/USA State Names/(3-7)/label/Label EN
                    {
                        dataLayer: 'USA State Names/(3-7)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Bold 10.6667px'
                    }),
                        minZoom: 3,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 651: Toponymic Features/Named Feature/International/(7-18)/label/International FR
                    {
                        dataLayer: 'International/(7-18)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold 14.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 652: Toponymic Features/Named Feature/International/(7-18)/label/International EN
                    {
                        dataLayer: 'International/(7-18)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold 14.6667px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 653: Toponymic Features/Named Feature/USA State Names/(7-18)/label/É.-U.A. FR
                    {
                        dataLayer: 'USA State Names/(7-18)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold 13.3333px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 654: Toponymic Features/Named Feature/USA State Names/(7-18)/label/USA EN
                    {
                        dataLayer: 'USA State Names/(7-18)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold 13.3333px'
                    }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 655: Toponymic Features/Atlas Named Feature/Country Name/(2-4)/label/International FR
                    {
                        dataLayer: 'Country Name/(2-4)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.33333,
                        font: 'Aboriginal Sans Regular 10.6667px'
                    }),
                        minZoom: 2,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 656: Toponymic Features/Atlas Named Feature/Country Name/(2-4)/label/International EN
                    {
                        dataLayer: 'Country Name/(2-4)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.33333,
                        font: 'Aboriginal Sans Regular 10.6667px'
                    }),
                        minZoom: 2,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 657: Toponymic Features/Atlas Named Feature/Country Name/(2-4)/label/Noms É.-U.A. FR
                    {
                        dataLayer: 'Country Name/(2-4)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.33333,
                        font: 'Aboriginal Sans Regular 10.6667px'
                    }),
                        minZoom: 2,
                        maxZoom: 3,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 658: Toponymic Features/Atlas Named Feature/Country Name/(2-4)/label/USA Names EN
                    {
                        dataLayer: 'Country Name/(2-4)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#848688',
                        halo: '#F3F4F4',
                        haloWidth: 1.33333,
                        font: 'Aboriginal Sans Regular 10.6667px'
                    }),
                        minZoom: 2,
                        maxZoom: 3,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 659: Toponymic Features/Named Feature/Provincial Capitals/(2-18)/label/Label FR
                    {
                        dataLayer: 'Provincial Capitals/(2-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Arial Bold {"stops":[[0,11.3333],[5.2096,11.3333],[6.2096,12],[7.2096,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 660: Toponymic Features/Named Feature/Provincial Capitals/(2-18)/label/Label EN
                    {
                        dataLayer: 'Provincial Capitals/(2-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#000001',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Arial Bold {"stops":[[0,11.3333],[5.2096,11.3333],[6.2096,12],[7.2096,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 661: Toponymic Features/Atlas Named Feature/Ocean/label/L FR
                    {
                        dataLayer: 'Ocean',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#5B81A2',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic {"stops":[[0,10.6667],[2.2096,10.6667],[3.2096,13.3333],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 662: Toponymic Features/Atlas Named Feature/Ocean/label/L EN
                    {
                        dataLayer: 'Ocean',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#5B81A2',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic {"stops":[[0,10.6667],[2.2096,10.6667],[3.2096,13.3333],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 663: Toponymic Features/Atlas Named Feature/Ocean/label/M FR
                    {
                        dataLayer: 'Ocean',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#5B81A2',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic {"stops":[[0,11.3333],[2.2096,11.3333],[3.2096,14.6667],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 664: Toponymic Features/Atlas Named Feature/Ocean/label/M EN
                    {
                        dataLayer: 'Ocean',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#5B81A2',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic {"stops":[[0,11.3333],[2.2096,11.3333],[3.2096,14.6667],[22.2094,14.6667]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 665: Toponymic Features/Atlas Named Feature/Ocean/label/S FR
                    {
                        dataLayer: 'Ocean',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#5B81A2',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic {"stops":[[0,10.6667],[2.2096,10.6667],[3.2096,13.3333],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 666: Toponymic Features/Atlas Named Feature/Ocean/label/S EN
                    {
                        dataLayer: 'Ocean',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic {"stops":[[0,10.6667],[2.2096,10.6667],[3.2096,13.3333],[22.2094,13.3333]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 667: Toponymic Features/Atlas Named Feature/Provinces and International/(2-7)/label/Province (5-8) FR
                    {
                        dataLayer: 'Provinces and International/(2-7)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#848688',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Bold 13.3333px'
                    }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 668: Toponymic Features/Atlas Named Feature/Provinces and International/(2-7)/label/Province (5-8) EN
                    {
                        dataLayer: 'Provinces and International/(2-7)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#848688',
                        halo: '#F8F7F2',
                        haloWidth: 2,
                        font: 'Aboriginal Sans Bold 13.3333px'
                    }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 669: Toponymic Features/Atlas Named Feature/Provinces and International/(2-7)/label/Provinces (3-5) FR
                    {
                        dataLayer: 'Provinces and International/(2-7)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#686868',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Regular {"stops":[[0,10.6667],[2.2096,10.6667],[3.2096,12.6667],[22.2094,12.6667]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 670: Toponymic Features/Atlas Named Feature/Provinces and International/(2-7)/label/Provinces (3-5) EN
                    {
                        dataLayer: 'Provinces and International/(2-7)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#686868',
                        halo: '#F8F7F2',
                        haloWidth: 1.6,
                        font: 'Aboriginal Sans Regular {"stops":[[0,10.6667],[2.2096,10.6667],[3.2096,12.6667],[22.2094,12.6667]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 671: Toponymic Features/Named Feature/Ottawa/(2-18)/label/Label FR
                    {
                        dataLayer: 'Ottawa/(2-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#732600',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Arial Bold {"stops":[[0,11.3333],[5.2096,11.3333],[6.2096,12],[7.2096,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 672: Toponymic Features/Named Feature/Ottawa/(2-18)/label/Label EN
                    {
                        dataLayer: 'Ottawa/(2-18)',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#732600',
                        halo: '#F8F7F2',
                        haloWidth: 1.86667,
                        font: 'Arial Bold {"stops":[[0,11.3333],[5.2096,11.3333],[6.2096,12],[7.2096,16.6667],[22.2094,16.6667]]}px'
                    }),
                        minZoom: 2,
                        maxZoom: 18,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 673: Hydro Features/Waterbody/(11-24)/label/Petit FR
                    {
                        dataLayer: 'Waterbody/(11-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 11.3333px'
                    }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 674: Hydro Features/Waterbody/(11-24)/label/Small EN
                    {
                        dataLayer: 'Waterbody/(11-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#2174A6',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Serif Bold Italic 11.3333px'
                    }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                    // Layer 675: Man-made Features/Indian Reserves/(12-24)/label/Label FR
                    {
                        dataLayer: 'Man-made Features/Indian Reserves/(12-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#D19E34',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 1
                    },
            
                    // Layer 676: Man-made Features/Indian Reserves/(12-24)/label/Label EN
                    {
                        dataLayer: 'Man-made Features/Indian Reserves/(12-24)/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#D19E34',
                        halo: '#F8F7F2',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 677: World/Populated Places/(4-5)/French/label/55 Roman: 10.0 FR
                    {
                        dataLayer: 'Populated Places/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 13.3333px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 678: World/Populated Places/(4-5)/French/label/55 Roman: 8.0 FR
                    {
                        dataLayer: 'Populated Places/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 10.6667px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 679: World/Populated Places/(5-6)/French/label/55 Roman: 12.0 FR
                    {
                        dataLayer: 'Populated Places/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 12px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 680: World/Populated Places/(5-6)/French/label/55 Roman: 10.0 FR
                    {
                        dataLayer: 'Populated Places/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 13.3333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 681: World/Populated Places/(5-6)/French/label/55 Roman: 8.0 FR
                    {
                        dataLayer: 'Populated Places/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 682: World/Populated Places/(6-7)/French/label/55 Roman: 12.0 FR
                    {
                        dataLayer: 'Populated Places/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 12px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 683: World/Populated Places/(6-7)/French/label/55 Roman: 10.0 FR
                    {
                        dataLayer: 'Populated Places/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 13.3333px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 684: World/Populated Places/(6-7)/French/label/55 Roman: 8.0 FR
                    {
                        dataLayer: 'Populated Places/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 685: World/Populated Places/(4-5)/English/label/55 Roman: 10.0 EN
                    {
                        dataLayer: 'Populated Places/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 13.3333px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 686: World/Populated Places/(4-5)/English/label/55 Roman: 8.0 EN
                    {
                        dataLayer: 'Populated Places/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 10.6667px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 687: World/Populated Places/(5-6)/English/label/55 Roman: 9.0 EN
                    {
                        dataLayer: 'Populated Places/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 12px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 688: World/Populated Places/(5-6)/English/label/55 Roman: 12.0 EN
                    {
                        dataLayer: 'Populated Places/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 12px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 689: World/Populated Places/(5-6)/English/label/55 Roman: 10.0 EN
                    {
                        dataLayer: 'Populated Places/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 13.3333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 690: World/Populated Places/(5-6)/English/label/55 Roman: 8.0 EN
                    {
                        dataLayer: 'Populated Places/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 691: World/Populated Places/(6-7)/English/label/55 Roman: 12.0 EN
                    {
                        dataLayer: 'Populated Places/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 12px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 692: World/Populated Places/(6-7)/English/label/55 Roman: 10.0 EN
                    {
                        dataLayer: 'Populated Places/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 13.3333px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 693: World/Populated Places/(6-7)/English/label/55 Roman: 8.0 EN
                    {
                        dataLayer: 'Populated Places/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 55 Roman 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 694: World/Countries/(3-4)/French/label/65 Medium: 6.0 FR
                    {
                        dataLayer: 'Countries/(3-4)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 8px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 695: World/Countries/(3-4)/French/label/57 Condensed: 12.0 FR
                    {
                        dataLayer: 'Countries/(3-4)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 12px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 696: World/Countries/(3-4)/French/label/65 Medium: 8.0 FR
                    {
                        dataLayer: 'Countries/(3-4)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 10.6667px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 697: World/Countries/(3-4)/French/label/65 Medium: 12.0 FR
                    {
                        dataLayer: 'Countries/(3-4)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 12px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 698: World/Countries/(3-4)/French/label/57 Condensed: 23.0 FR
                    {
                        dataLayer: 'Countries/(3-4)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 30.6667px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 699: World/Countries/(3-4)/French/label/57 Condensed: 36.0 FR
                    {
                        dataLayer: 'Countries/(3-4)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 48px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 700: World/Countries/(3-4)/French/label/57 Condensed: 48.0 FR
                    {
                        dataLayer: 'Countries/(3-4)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 64px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 701: World/Countries/(4-5)/French/label/57 Condensed: 10.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 13.3333px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 702: World/Countries/(4-5)/French/label/57 Condensed: 18.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 24px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 703: World/Countries/(4-5)/French/label/57 Condensed: 23.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 30.6667px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 704: World/Countries/(4-5)/French/label/65 Medium: 10.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 13.3333px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 705: World/Countries/(4-5)/French/label/65 Medium: 8.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 10.6667px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 706: World/Countries/(4-5)/French/label/65 Medium: 6.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 8px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 707: World/Countries/(4-5)/French/label/85 Heavy: 14.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 18.6667px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 708: World/Countries/(4-5)/French/label/57 Condensed: 36.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 48px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 709: World/Countries/(4-5)/French/label/57 Condensed: 48.0 FR
                    {
                        dataLayer: 'Countries/(4-5)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 64px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 710: World/Countries/(5-6)/French/label/85 Heavy: 7.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name15'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 9.33333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class15 === 15
                    },
            
                    // Layer 711: World/Countries/(5-6)/French/label/65 Medium: 7.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name14'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 9.33333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class14 === 14
                    },
            
                    // Layer 712: World/Countries/(5-6)/French/label/77 Bold Condensed: 23.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name13'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 30.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class13 === 13
                    },
            
                    // Layer 713: World/Countries/(5-6)/French/label/77 Bold Condensed: 36.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name12'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 48px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class12 === 12
                    },
            
                    // Layer 714: World/Countries/(5-6)/French/label/85 Heavy: 12.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name11'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 12px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class11 === 11
                    },
            
                    // Layer 715: World/Countries/(5-6)/French/label/85 Heavy: 10.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name10'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 13.3333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class10 === 10
                    },
            
                    // Layer 716: World/Countries/(5-6)/French/label/77 Bold Condensed: 14.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name9'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 18.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class9 === 9
                    },
            
                    // Layer 717: World/Countries/(5-6)/French/label/77 Bold Condensed: 12.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 12px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 718: World/Countries/(5-6)/French/label/77 Bold Condensed: 24.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 32px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 719: World/Countries/(5-6)/French/label/77 Bold Condensed: 18.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 24px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 720: World/Countries/(5-6)/French/label/85 Heavy: 8.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 721: World/Countries/(5-6)/French/label/77 Bold Condensed: 10.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 13.3333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 722: World/Countries/(5-6)/French/label/65 Medium: 8.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 723: World/Countries/(5-6)/French/label/85 Heavy: 16.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 21.3333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 724: World/Countries/(5-6)/French/label/77 Bold Condensed: 72.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 96px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 725: World/Countries/(5-6)/French/label/77 Bold Condensed: 48.0 FR
                    {
                        dataLayer: 'Countries/(5-6)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 64px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 726: World/Countries/(6-7)/French/label/85 Heavy: 8.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name13'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class13 === 13
                    },
            
                    // Layer 727: World/Countries/(6-7)/French/label/77 Bold Condensed: 96.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name12'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 128px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class12 === 12
                    },
            
                    // Layer 728: World/Countries/(6-7)/French/label/85 Heavy: 16.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name11'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 21.3333px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class11 === 11
                    },
            
                    // Layer 729: World/Countries/(6-7)/French/label/85 Heavy: 12.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name10'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 12px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class10 === 10
                    },
            
                    // Layer 730: World/Countries/(6-7)/French/label/77 Bold Condensed: 12.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name9'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 12px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class9 === 9
                    },
            
                    // Layer 731: World/Countries/(6-7)/French/label/77 Bold Condensed: 24.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 32px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 732: World/Countries/(6-7)/French/label/77 Bold Condensed: 23.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 30.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 733: World/Countries/(6-7)/French/label/77 Bold Condensed: 48.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 64px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 734: World/Countries/(6-7)/French/label/77 Bold Condensed: 36.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 48px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 735: World/Countries/(6-7)/French/label/65 Medium: 8.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 736: World/Countries/(6-7)/French/label/85 Heavy: 10.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 13.3333px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 737: World/Countries/(6-7)/French/label/77 Bold Condensed: 10.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 13.3333px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 738: World/Countries/(6-7)/French/label/85 Heavy: 18.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 24px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 739: World/Countries/(6-7)/French/label/77 Bold Condensed: 108.0 FR
                    {
                        dataLayer: 'Countries/(6-7)/French',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 144px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 740: World/Countries/(3-4)/English/label/65 Medium: 6.0 EN
                    {
                        dataLayer: 'Countries/(3-4)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 8px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 741: World/Countries/(3-4)/English/label/77 Bold Condensed: 12.0 EN
                    {
                        dataLayer: 'Countries/(3-4)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 12px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 742: World/Countries/(3-4)/English/label/77 Bold Condensed: 24.0 EN
                    {
                        dataLayer: 'Countries/(3-4)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 32px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 743: World/Countries/(3-4)/English/label/65 Medium: 8.0 EN
                    {
                        dataLayer: 'Countries/(3-4)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 10.6667px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 744: World/Countries/(3-4)/English/label/57 Condensed: 24.0 EN
                    {
                        dataLayer: 'Countries/(3-4)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 32px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 745: World/Countries/(3-4)/English/label/57 Condensed: 36.0 EN
                    {
                        dataLayer: 'Countries/(3-4)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 48px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 746: World/Countries/(3-4)/English/label/65 Medium: 12.0 EN
                    {
                        dataLayer: 'Countries/(3-4)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 12px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 747: World/Countries/(3-4)/English/label/57 Condensed: 48.0 EN
                    {
                        dataLayer: 'Countries/(3-4)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 64px'
                    }),
                        minZoom: 3,
                        maxZoom: 4,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 748: World/Countries/(4-5)/English/label/57 Condensed: 10.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 13.3333px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 749: World/Countries/(4-5)/English/label/57 Condensed: 18.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 24px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 750: World/Countries/(4-5)/English/label/57 Condensed: 24.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 32px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 751: World/Countries/(4-5)/English/label/65 Medium: 10.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 13.3333px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 752: World/Countries/(4-5)/English/label/65 Medium: 8.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 10.6667px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 753: World/Countries/(4-5)/English/label/65 Medium: 6.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 8px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 754: World/Countries/(4-5)/English/label/57 Condensed: 36.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 48px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 755: World/Countries/(4-5)/English/label/85 Heavy: 14.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 18.6667px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 756: World/Countries/(4-5)/English/label/57 Condensed: 48.0 EN
                    {
                        dataLayer: 'Countries/(4-5)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 57 Condensed 64px'
                    }),
                        minZoom: 4,
                        maxZoom: 5,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 757: World/Countries/(5-6)/English/label/77 Bold Condensed: 12.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name15'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 12px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class15 === 15
                    },
            
                    // Layer 758: World/Countries/(5-6)/English/label/85 Heavy: 7.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name14'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 9.33333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class14 === 14
                    },
            
                    // Layer 759: World/Countries/(5-6)/English/label/65 Medium: 7.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name13'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 9.33333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class13 === 13
                    },
            
                    // Layer 760: World/Countries/(5-6)/English/label/77 Bold Condensed: 23.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name12'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 30.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class12 === 12
                    },
            
                    // Layer 761: World/Countries/(5-6)/English/label/77 Bold Condensed: 36.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name11'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 48px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class11 === 11
                    },
            
                    // Layer 762: World/Countries/(5-6)/English/label/85 Heavy: 12.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name10'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 12px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class10 === 10
                    },
            
                    // Layer 763: World/Countries/(5-6)/English/label/85 Heavy: 10.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name9'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 13.3333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class9 === 9
                    },
            
                    // Layer 764: World/Countries/(5-6)/English/label/77 Bold Condensed: 14.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 18.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 765: World/Countries/(5-6)/English/label/77 Bold Condensed: 24.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 32px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 766: World/Countries/(5-6)/English/label/77 Bold Condensed: 18.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 24px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 767: World/Countries/(5-6)/English/label/85 Heavy: 8.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 768: World/Countries/(5-6)/English/label/77 Bold Condensed: 10.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 13.3333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 769: World/Countries/(5-6)/English/label/65 Medium: 8.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 10.6667px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 770: World/Countries/(5-6)/English/label/85 Heavy: 16.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 21.3333px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 771: World/Countries/(5-6)/English/label/77 Bold Condensed: 72.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 96px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 772: World/Countries/(5-6)/English/label/77 Bold Condensed: 48.0 EN
                    {
                        dataLayer: 'Countries/(5-6)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 64px'
                    }),
                        minZoom: 5,
                        maxZoom: 6,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 773: World/Countries/(6-7)/English/label/65 Medium: 8.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name14'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 65 Medium 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class14 === 14
                    },
            
                    // Layer 774: World/Countries/(6-7)/English/label/85 Heavy: 10.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name13'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 13.3333px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class13 === 13
                    },
            
                    // Layer 775: World/Countries/(6-7)/English/label/77 Bold Condensed: 96.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name12'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 128px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class12 === 12
                    },
            
                    // Layer 776: World/Countries/(6-7)/English/label/85 Heavy: 16.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name11'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 21.3333px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class11 === 11
                    },
            
                    // Layer 777: World/Countries/(6-7)/English/label/85 Heavy: 12.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name10'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 12px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class10 === 10
                    },
            
                    // Layer 778: World/Countries/(6-7)/English/label/77 Bold Condensed: 23.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name9'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 30.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class9 === 9
                    },
            
                    // Layer 779: World/Countries/(6-7)/English/label/77 Bold Condensed: 24.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name8'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 32px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class8 === 8
                    },
            
                    // Layer 780: World/Countries/(6-7)/English/label/77 Bold Condensed: 48.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name7'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 64px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class7 === 7
                    },
            
                    // Layer 781: World/Countries/(6-7)/English/label/77 Bold Condensed: 12.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name6'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 12px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class6 === 6
                    },
            
                    // Layer 782: World/Countries/(6-7)/English/label/85 Heavy: 36.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name5'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 48px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class5 === 5
                    },
            
                    // Layer 783: World/Countries/(6-7)/English/label/77 Bold Condensed: 36.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name4'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 48px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class4 === 4
                    },
            
                    // Layer 784: World/Countries/(6-7)/English/label/85 Heavy: 8.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name3'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 10.6667px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class3 === 3
                    },
            
                    // Layer 785: World/Countries/(6-7)/English/label/77 Bold Condensed: 10.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name2'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 13.3333px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class2 === 2
                    },
            
                    // Layer 786: World/Countries/(6-7)/English/label/85 Heavy: 18.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name1'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Arial Regular 24px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class1 === 1
                    },
            
                    // Layer 787: World/Countries/(6-7)/English/label/77 Bold Condensed: 108.0 EN
                    {
                        dataLayer: 'Countries/(6-7)/English',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#828282',
                        halo: '#FFFFFF',
                        haloWidth: 1.33333,
                        font: 'Helvetica Neue LT Pro 77 Bold Condensed 144px'
                    }),
                        minZoom: 6,
                        maxZoom: 7,
                        filter: (z, f) => f.props._label_class === 0
                    },
            
                    // Layer 788: Toponymic Features/Named Feature/Waterbody/label/Petit FR
                    {
                        dataLayer: 'Waterbody/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 11.2096,
                        maxZoom: 11.2096,
                        filter: (z, f) => f.props._label_class === 5
                    },
            
                    // Layer 789: Toponymic Features/Named Feature/Waterbody/label/Small EN
                    {
                        dataLayer: 'Waterbody/label',
                        symbolizer: new protomapsL.CenteredTextSymbolizer({
                        labelProps: ['_name'],
                        fill: '#5B81A2',
                        halo: '#FFFFFF',
                        haloWidth: 1.73333,
                        font: 'Aboriginal Sans Bold Italic 11.3333px'
                    }),
                        minZoom: 11.2096,
                        maxZoom: 11.2096,
                        filter: (z, f) => f.props._label_class === 2
                    },
            
                ],
                LABEL_RULES: [
    
                    // Layer 85: Man-made Features/Dam/(9-24)/Polygon/0
                    {
                        dataLayer: 'Dam/(9-24)/Polygon',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 91: Hydro Features/Hydro Obstacle/(9-24)/Polygon/Reef or Rocks
                    {
                        dataLayer: 'Hydro Obstacle/(9-24)/Polygon',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 103: Transport Features/Runway/(11-24)/Polygon/Official/0
                    {
                        dataLayer: 'Transport Features/Runway/(11-24)/Polygon',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 105: Transport Features/Runway/(11-24)/Polygon/Non Official/0
                    {
                        dataLayer: 'Transport Features/Runway/(11-24)/Polygon',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 116: Elevation Features/Contours/(9-11)/Derived/0
                    {
                        dataLayer: 'Contours/(9-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 118: Elevation Features/Contours/(11-24)/Other/Depression/0
                    {
                        dataLayer: 'Contours/(11-24)/Other',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 122: Elevation Features/Contours/(11-24)/Index/Depression/0
                    {
                        dataLayer: 'Contours/(11-24)/Index',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 164: Transport Features/Trail/(10-24)/Bridge/0
                    {
                        dataLayer: 'Trail/(10-24)/Bridge',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 14,
                        maxZoom: 22
                    },
            
                    // Layer 168: Transport Features/Road Ferry/(3-4)/1
                    {
                        dataLayer: 'Road Ferry/(3-4)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 3,
                        maxZoom: 4
                    },
            
                    // Layer 169: Transport Features/Road Ferry/(3-4)/0
                    {
                        dataLayer: 'Road Ferry/(3-4)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 3,
                        maxZoom: 4
                    },
            
                    // Layer 171: Transport Features/Road Ferry/(4-7)/1
                    {
                        dataLayer: 'Road Ferry/(4-7)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 172: Transport Features/Road Ferry/(4-7)/0
                    {
                        dataLayer: 'Road Ferry/(4-7)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 174: Transport Features/Road Ferry/(7-9)/1
                    {
                        dataLayer: 'Road Ferry/(7-9)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 7,
                        maxZoom: 9
                    },
            
                    // Layer 175: Transport Features/Road Ferry/(7-9)/0
                    {
                        dataLayer: 'Road Ferry/(7-9)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 7,
                        maxZoom: 9
                    },
            
                    // Layer 177: Transport Features/Road Ferry/(9-24)/1
                    {
                        dataLayer: 'Road Ferry/(9-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 178: Transport Features/Road Ferry/(9-24)/0
                    {
                        dataLayer: 'Road Ferry/(9-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 180: Transport Features/Rail Ferry/(9-24)/1
                    {
                        dataLayer: 'Rail Ferry/(9-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 181: Transport Features/Rail Ferry/(9-24)/0
                    {
                        dataLayer: 'Rail Ferry/(9-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 22
                    },
            
                    // Layer 182: Land Features/Esker/(9-11)/1
                    {
                        dataLayer: 'Esker/(9-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 11
                    },
            
                    // Layer 183: Land Features/Esker/(9-11)/0
                    {
                        dataLayer: 'Esker/(9-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 11
                    },
            
                    // Layer 184: Land Features/Esker/(11-24)/1
                    {
                        dataLayer: 'Esker/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 185: Land Features/Esker/(11-24)/0
                    {
                        dataLayer: 'Esker/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 186: Hydro Features/Hydro Obstacle/(9-24)/Line/Falls/0
                    {
                        dataLayer: 'Hydro Obstacle/(9-24)/Line',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 189: Hydro Features/Hydro Obstacle/(9-24)/Line/Rapids/0
                    {
                        dataLayer: 'Hydro Obstacle/(9-24)/Line',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 191: Man-made Features/Dam/(12-24)/Line/3
                    {
                        dataLayer: 'Dam/(12-24)/Line',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 192: Man-made Features/Dam/(12-24)/Line/2
                    {
                        dataLayer: 'Dam/(12-24)/Line',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22
                    },
            
                    // Layer 198: Man-made Features/Protection Structure/(9-11)/Dyke or Levee/3
                    {
                        dataLayer: 'Protection Structure/(9-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 199: Man-made Features/Protection Structure/(9-11)/Dyke or Levee/2
                    {
                        dataLayer: 'Protection Structure/(9-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 204: Man-made Features/Protection Structure/(11-24)/Dyke or Levee/3
                    {
                        dataLayer: 'Protection Structure/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 205: Man-made Features/Protection Structure/(11-24)/Dyke or Levee/2
                    {
                        dataLayer: 'Protection Structure/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 306: Transport Features/Track Segment/Track/(2-3)/0
                    {
                        dataLayer: 'Track/(2-3)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 2,
                        maxZoom: 3
                    },
            
                    // Layer 308: Transport Features/Track Segment/Track/(3-4)/0
                    {
                        dataLayer: 'Track/(3-4)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 3,
                        maxZoom: 4
                    },
            
                    // Layer 310: Transport Features/Track Segment/Track/(6-7)/0
                    {
                        dataLayer: 'Track/(6-7)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 6,
                        maxZoom: 7
                    },
            
                    // Layer 312: Transport Features/Track Segment/Track/(5-7)/0
                    {
                        dataLayer: 'Track/(5-7)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 5,
                        maxZoom: 7
                    },
            
                    // Layer 314: Transport Features/Track Segment/Track/(4-7)/0
                    {
                        dataLayer: 'Track/(4-7)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 4,
                        maxZoom: 7
                    },
            
                    // Layer 316: Transport Features/Track Segment/Track/(7-9)/0
                    {
                        dataLayer: 'Track/(7-9)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 7,
                        maxZoom: 9
                    },
            
                    // Layer 318: Transport Features/Track Segment/Track/(9-15)/Not Identified/0
                    {
                        dataLayer: 'Track/(9-15)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 320: Transport Features/Track Segment/Track/(9-15)/Discontinued/0
                    {
                        dataLayer: 'Track/(9-15)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 322: Transport Features/Track Segment/Track/(9-15)/Operational/0
                    {
                        dataLayer: 'Track/(9-15)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 15,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 324: Transport Features/Track Segment/Other/(10-15)/0
                    {
                        dataLayer: 'Other/(10-15)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 10,
                        maxZoom: 15
                    },
            
                    // Layer 326: Transport Features/Track Segment/Track/(15-24)/Not Identified/0
                    {
                        dataLayer: 'Track/(15-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 328: Transport Features/Track Segment/Track/(15-24)/Discontinued/0
                    {
                        dataLayer: 'Track/(15-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 330: Transport Features/Track Segment/Track/(15-24)/Operational/0
                    {
                        dataLayer: 'Track/(15-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 15,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 332: Transport Features/Track Segment/Other/(15-24)/0
                    {
                        dataLayer: 'Other/(15-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 15,
                        maxZoom: 22
                    },
            
                    // Layer 334: Transport Features/Aerial Cableway/(13-24)/0
                    {
                        dataLayer: 'Aerial Cableway/(13-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22
                    },
            
                    // Layer 335: Resource Management Features/Power Line/(12-24)/Aboveground
                    {
                        dataLayer: 'Power Line/(12-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 337: Resource Management Features/Power Line/(12-24)/Underground/Underwater/0
                    {
                        dataLayer: 'Power Line/(12-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 338: World/Populated Places/Point/(4-7)/Capital
                    {
                        dataLayer: 'World/Populated Places/Point/(4-7)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 339: World/Populated Places/Point/(4-7)/Regional Capital
                    {
                        dataLayer: 'World/Populated Places/Point/(4-7)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 340: World/Populated Places/Point/(4-7)/Populated place
                    {
                        dataLayer: 'World/Populated Places/Point/(4-7)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 4,
                        maxZoom: 7,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 341: Land Features/Pingo/(10-24)
                    {
                        dataLayer: 'Land Features/Pingo/(10-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 10,
                        maxZoom: 22
                    },
            
                    // Layer 342: Man-made Features/Protection Structure/(12-24)/Fish Ladder
                    {
                        dataLayer: 'Protection Structure/(12-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 343: Man-made Features/Protection Structure/(12-24)/Not Identified
                    {
                        dataLayer: 'Protection Structure/(12-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 344: Man-made Features/Chimney/(10-11)
                    {
                        dataLayer: 'Chimney/(10-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 10,
                        maxZoom: 11
                    },
            
                    // Layer 345: Man-made Features/Buildings/(11-12)
                    {
                        dataLayer: 'Buildings/(11-12)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 12
                    },
            
                    // Layer 346: Man-made Features/Buildings/(11-24)/Point/Coast Guard Station
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 347: Man-made Features/Buildings/(11-24)/Point/Fire Station
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 348: Man-made Features/Buildings/(11-24)/Point/Hospital
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 349: Man-made Features/Buildings/(11-24)/Point/Medical Centre
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 350: Man-made Features/Buildings/(11-24)/Point/Police Station
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 351: Man-made Features/Buildings/(11-24)/Point/Religious Building
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 14,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 352: Man-made Features/Buildings/(11-24)/Point/Customs Post
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 353: Man-made Features/Buildings/(11-24)/Point/Educational Building
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 14,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 354: Man-made Features/Buildings/(11-24)/Point/Municipal Hall
                    {
                        dataLayer: 'Buildings/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 8
                    },
            
                    // Layer 355: Man-made Features/Tower/(13-24)/Water
                    {
                        dataLayer: 'Tower/(13-24)/Water',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 356: Man-made Features/Tower/(11-13)
                    {
                        dataLayer: 'Tower/(11-13)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 13
                    },
            
                    // Layer 357: Man-made Features/Tower/(13-24)/Communication
                    {
                        dataLayer: 'Tower/(13-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 358: Man-made Features/Tower/(13-24)/Control
                    {
                        dataLayer: 'Tower/(13-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 359: Man-made Features/Tower/(13-24)/Fire
                    {
                        dataLayer: 'Tower/(13-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 360: Man-made Features/Tower/(13-24)/Lookout
                    {
                        dataLayer: 'Tower/(13-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 361: Man-made Features/Tower/(13-24)/Power
                    {
                        dataLayer: 'Tower/(13-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 362: Man-made Features/Tower/(13-24)/Not Identified
                    {
                        dataLayer: 'Tower/(13-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 363: Man-made Features/Dam/(9-24)/Point
                    {
                        dataLayer: 'Dam/(9-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 10,
                        maxZoom: 22
                    },
            
                    // Layer 365: Hydro Features/Hydro Obstacle/(13-24)/Point/Exposed Shipwreck
                    {
                        dataLayer: 'Hydro Obstacle/(13-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 366: Hydro Features/Hydro Obstacle/(13-24)/Point/Falls
                    {
                        dataLayer: 'Hydro Obstacle/(13-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 367: Hydro Features/Hydro Obstacle/(13-24)/Point/Ford
                    {
                        dataLayer: 'Hydro Obstacle/(13-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 3
                    },
            
                    // Layer 368: Hydro Features/Hydro Obstacle/(13-24)/Point/Not Identified
                    {
                        dataLayer: 'Hydro Obstacle/(13-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 4
                    },
            
                    // Layer 369: Hydro Features/Hydro Obstacle/(13-24)/Point/Rapids
                    {
                        dataLayer: 'Hydro Obstacle/(13-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 5
                    },
            
                    // Layer 370: Hydro Features/Hydro Obstacle/(13-24)/Point/Rocks
                    {
                        dataLayer: 'Hydro Obstacle/(13-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 6
                    },
            
                    // Layer 371: Hydro Features/Hydro Obstacle/(13-24)/Point/Sink
                    {
                        dataLayer: 'Hydro Obstacle/(13-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 7
                    },
            
                    // Layer 372: Transport Features/Runway/(10-11)/Other
                    {
                        dataLayer: 'Runway/(10-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 373: Transport Features/Runway/(10-11)/Hydroaerodrome
                    {
                        dataLayer: 'Runway/(10-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 374: Transport Features/Runway/(10-11)/Heliport
                    {
                        dataLayer: 'Runway/(10-11)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 10,
                        maxZoom: 11,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 375: Transport Features/Runway/(11-24)/Point/Airport
                    {
                        dataLayer: 'Runway/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 376: Transport Features/Runway/(11-24)/Point/Seaplane Base
                    {
                        dataLayer: 'Runway/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 377: Transport Features/Runway/(11-24)/Point/Heliport
                    {
                        dataLayer: 'Runway/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 378: Transport Features/Navigational Aid/(11-24)/Navigation Beacon
                    {
                        dataLayer: 'Navigational Aid/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 379: Transport Features/Navigational Aid/(11-24)/Navigation Light
                    {
                        dataLayer: 'Navigational Aid/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 380: Transport Features/Marina/(11-24)
                    {
                        dataLayer: 'Marina/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 381: Transport Features/Nautical Facility/(11-24)/Lock Gate/Point
                    {
                        dataLayer: 'Nautical Facility/(11-24)/Lock Gate/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22
                    },
            
                    // Layer 382: Resource Management Features/Electric Power Station/(13-24)
                    {
                        dataLayer: 'Electric Power Station/(13-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 13,
                        maxZoom: 22
                    },
            
                    // Layer 383: Resource Management Features/Ore/(11-24)
                    {
                        dataLayer: 'Ore/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 384: Resource Management Features/Oil and Gas Site/(10-24)/Point
                    {
                        dataLayer: 'Oil and Gas Site/(10-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 10,
                        maxZoom: 22
                    },
            
                    // Layer 385: Resource Management Features/Wind-operated device/(11-24)
                    {
                        dataLayer: 'Wind-operated device/(11-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 386: Man-made Features/Ritual and Cultural Area/Cemetery/(11-24)/Point
                    {
                        dataLayer: 'Ritual and Cultural Area/Cemetery/(11-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 11,
                        maxZoom: 22
                    },
            
                    // Layer 387: Man-made Features/Leisure Area/(12-24)/Point/Campground
                    {
                        dataLayer: 'Leisure Area/(12-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 388: Man-made Features/Leisure Area/(12-24)/Point/Ski Centre
                    {
                        dataLayer: 'Leisure Area/(12-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 389: Man-made Features/Leisure Area/(12-24)/Point/Golf Course
                    {
                        dataLayer: 'Leisure Area/(12-24)/Point',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 12,
                        maxZoom: 22,
                        filter: (z, f) => f.props._symbol === 2
                    },
            
                    // Layer 390: Man-made Features/Landmark Feature/Lookout/(14-24)
                    {
                        dataLayer: 'Landmark Feature/Lookout/(14-24)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 14,
                        maxZoom: 22
                    },
            
                    // Layer 398: Toponymic Features/Named Feature/USA Capitals/(7-18)/Washington
                    {
                        dataLayer: 'USA Capitals/(7-18)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._symbol === 0
                    },
            
                    // Layer 399: Toponymic Features/Named Feature/USA Capitals/(7-18)/State Capital
                    {
                        dataLayer: 'USA Capitals/(7-18)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 7,
                        maxZoom: 18,
                        filter: (z, f) => f.props._symbol === 1
                    },
            
                    // Layer 401: Toponymic Features/Named Feature/Provincial Capitals/(2-18)
                    {
                        dataLayer: 'Provincial Capitals/(2-18)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 2,
                        maxZoom: 18
                    },
            
                    // Layer 402: Toponymic Features/Named Feature/Ottawa/(2-18)
                    {
                        dataLayer: 'Ottawa/(2-18)',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 2,
                        maxZoom: 18
                    },
            
                    // Layer 403: Transport Features/Road Segment/(7-9)/label/Numbered
                    {
                        dataLayer: 'Road Segment/(7-9)/label',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 7,
                        maxZoom: 9,
                        filter: (z, f) => f.props.$type === "Point"
                    },
            
                    // Layer 584: Transport Features/Road Segment/(9-15)/Road/label/Route Number
                    {
                        dataLayer: 'Road Segment/(9-15)/Road/label',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 15
                    },
            
                    // Layer 585: Transport Features/Road Segment/(9-15)/Tunnel/label/Route Number
                    {
                        dataLayer: 'Road Segment/(9-15)/Tunnel/label',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 9,
                        maxZoom: 15
                    },
            
                    // Layer 586: Transport Features/Road Segment/(15-24)/Road/label/Route Number
                    {
                        dataLayer: 'Road Segment/(15-24)/Road/label',
                        symbolizer: new protomapsL.IconSymbolizer({
                            name: 'hospital',
                            sheet: sheet
                        }),
                        minZoom: 15,
                        maxZoom: 22
                    },
            
            ]
        }
    });


export { pmtilesRules };
    