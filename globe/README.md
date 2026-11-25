# Globe experiment: styles

`index.html` draws the CBMT (Canada Base Map – Transportation) vector tiles
from Natural Resources Canada's ArcGIS tile service:

```
https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer
```

It paints them with a MapLibre style in this folder, chosen by the reader's
language:

```html
<map-link media="(prefers-lang: fr)" rel="stylesheet" type="application/vnd.maplibre-style+json" href="./root-fr.json"></map-link>
<map-link media="(prefers-lang: en)" rel="stylesheet" type="application/vnd.maplibre-style+json" href="./root-en.json"></map-link>
```

| File               | What it is                                                                     |
| ------------------ | ------------------------------------------------------------------------------ |
| `root.json`        | the service's own style, unchanged apart from its URLs (see below)             |
| `root-en.json`     | `root.json` without the French label layers                                    |
| `root-fr.json`     | `root.json` without the English label layers                                   |
| `split-style.mjs`  | makes all three from the service                                               |
| `svwd03style.json` | an older, unrelated style, kept for reference (commented out in `index.html`) |

## Refreshing them

When the service changes, its source layers change names, and a stale style
draws only the layers whose names still match. That is what "only partly
rendered" looks like: a white sea, no labels, some land. Refresh the styles
from the service:

```bash
cd experiments
node globe/split-style.mjs
```

It prints how many layers each file got (in November 2026: 1004, 826 and
831). Reload the page and check the oceans are blue and the labels appear in
one language.

## What the script does

1. **Fetches the service's style**, `VectorTileServer/resources/styles/root.json`.
   Take the style from the service itself, not from an ArcGIS Online item
   that points at it: an item's style is a copy, which falls behind when the
   service changes. (The previous files came from item
   `516e82031eee4e97a71652ebb0e94879`, and 79 of their 201 source layers had
   gone from the service, among them the oceans.)

2. **Makes its URLs absolute.** The service writes `sprite`, `glyphs` and the
   source's `url` relative to the style's own address:

   ```json
   "sprite": "../sprites/sprite",
   "glyphs": "../fonts/{fontstack}/{range}.pbf",
   "sources": { "esri": { "url": "../../" } }
   ```

   Served from this folder they would point at localhost, so the script
   resolves them against the service's style URL. `{fontstack}` and `{range}`
   must stay as they are: MapLibre fills them in.

3. **Splits the labels by language.** CBMT labels everything twice, once per
   official language, in separate layers. Drawn together they overprint each
   other, so each file keeps one language. A layer is a label layer for one
   language when its `id` contains a standalone `EN` or `FR` (for example
   `…/label/FR`, `…/label/10 EN`) or the word `English` or `French` (for
   example `…/label/Large_French`). `root-en.json` drops the French ones and
   `root-fr.json` the English ones. Everything else is kept in both,
   including the labels that are the same in both languages, such as route
   numbers and US state names.

The layers themselves are not edited, so the result can be compared with the
service's style layer for layer.

## Doing it by hand

If the script ever fails (the service moves, or changes its naming), the
same three steps work by hand:

- Download the style: the service's ArcGIS REST page lists it under
  "Styles", or append `/resources/styles/root.json` to the service URL.
- Check the top-level `sprite`, `glyphs` and `sources.*.url`, and make any
  relative one absolute.
- Look at the label layers' ids for how this version marks a language (the
  script's `LANGUAGE` patterns), and drop the other language's.

To check a style matches the service, compare its `source-layer` names with
the layers in a tile. A mismatch shows up as layers that never draw.

## Notes

- MapML-MapLibre reads `layers`, `glyphs` and `sprite` from the style. It
  ignores `sources`: the tiles come from the `<map-link rel="tile">`'s
  `tref`.
- Without the `sprite`, icon and pattern layers (road shields, ferry and
  rail symbols, ice) don't draw, and the console fills with
  `Image "…" could not be loaded` warnings.
