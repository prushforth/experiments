# GeoTIFF as `<map-tile>`

An inline, base64-encoded GeoTIFF is decoded in the page by
[geotiff.js](https://geotiffjs.github.io/geotiff.js/) (loaded by reference from
a CDN), painted onto a canvas, and handed to the map as `<map-tile>` children
of a `<map-layer>` — one tile per cell of the current view, regenerated as the
map moves.

The same page markup and the same adapter (`styles/geotiff-tiles.js`) are run
against all three implementations side by side:

| frame | GeoTIFF layer renders? |
| --- | --- |
| MapML.js (Leaflet) | yes |
| MapML-OpenLayers | yes |
| MapML-MapLibre | **no** — the OSM basemap draws, the GeoTIFF layer does not |

## Why this experiment exists

It demonstrates that a *polyfill-sized* library doesn't have to bundle a format
reader to support it. `<map-tile>`'s `src` is handed straight to an image, so
any URL an image can load works — including a `blob:` URL of a canvas the page
painted itself. That makes `<map-tile>` an extension point: an author can bring
their own decoder (GeoTIFF here, but equally NetCDF, Zarr, or anything else)
without the map implementation growing a dependency.

The adapter deliberately uses **only public API** — `viewer.zoom`,
`viewer.extent`, `viewer.whenReady()`, the `map-moveend` event, and `<map-tile>`
elements. No private properties, no engine internals. That is what lets one
unmodified adapter drive three different rendering engines, and it is why the
MapLibre frame being blank is a statement about the implementation rather than
about the adapter.

The raster is EPSG:3857, which is the PCRS of OSMTILE, so tile → raster is a
pure affine and no reprojection is needed. A raster in another CRS would need a
per-pixel inverse warp in the adapter; nothing else would change.

## Why the MapLibre frame is blank

`<map-tile>` *is* ported in MapML-MapLibre. What is missing is an **owner** for
inline authored tiles.

A `<map-tile>` registers on connect with the nearest ancestor implementing the
`MapTileRunOwner` interface (`registerMapTile` / `unregisterMapTile` /
`notifyMapTilesChanged`), walking across shadow boundaries to find one. In
MapML-MapLibre that interface is implemented **only by `<map-link>`**, to
support the GeoServer case where a `rel="features"` response carries a run of
`<map-tile>` elements that are grafted into the link's shadow root.

`<map-layer>` does not implement it. So a `<map-tile>` written as a direct child
of `<map-layer>`, as this experiment does, upgrades as an element, finds no
owner, installs no source, and renders nothing — silently, with no console
error. This is deferred scope, not a technical limitation: the interface's own
documentation names `<map-layer>` as a planned implementor ("optionally, by
`<map-layer>` (inline authored tiles)").

## Two tiers of fix

### Tier 1 — small: `<map-layer>` becomes a tile-run owner

`MapLayer` implements the three `MapTileRunOwner` methods and folds **all** of
its `<map-tile>` children into one MapLibre raster source, installed beneath its
aggregated feature source. The logic already exists for links, in
`MapLink.#rebuildTiles`, and would be mirrored almost verbatim: collect each
tile's `src` into a `z/x/y` → URL table, union the footprints for the source
bounds, hand the result to the `mapmltile://` protocol handler, and tear the
source down when the last tile leaves.

This is enough to make this experiment render.

Limitations:

- Tiles always paint **below** features in the same layer; `<map-tile>` and
  `<map-feature>` cannot interleave by document order.
- OSMTILE only, which is what `<map-tile>` already restricts itself to — fine
  for this experiment, but a CBMTILE or APSTILE raster would not work yet.

### Tier 2 — parity: DOM-ordered runs within a layer

Partition a layer's children into *contiguous runs* by document order, each run
becoming one renderer layer, so that paint order follows DOM order and tile and
feature runs interleave the way an author would expect:

```html
<map-layer checked>
  <map-tile .../>      <!-- run 1 -->
  <map-feature .../>   <!-- run 2, paints above run 1 -->
  <map-tile .../>      <!-- run 3, paints above run 2 -->
</map-layer>
```

This is how MapML.js and the OpenLayers port already behave. It is the larger
change, because MapML-MapLibre currently tracks a layer's features in a flat
`Set` that becomes a single aggregated GeoJSON source for the whole layer;
run partitioning means replacing that with position-keyed runs. The OL port's
fixture `test/fixtures/static-tiles.html` shows the target behaviour, laying out
`tile,tile | feature,feature | extent | tile` as four separately z-ordered runs.

Tier 1 is a reasonable stopping point: it unblocks script-generated tile
content, which is the use case this experiment represents. Tier 2 is only
needed once authors want to interleave raster and vector content within a single
layer.

## Where this is tracked

`TODO.md` in the **MapML-MapLibre** repository, in the `<map-tile> element`
entry (search for "`<map-tile>` element** — *partially done*"). That entry
describes both tiers and points back at this experiment and README.

## Files

- `index.html` — the three-way comparison page
- `leaflet/`, `ol/`, `maplibre/` — one framed page per implementation, each with
  identical map markup
- `styles/geotiff-tiles.js` — the shared, implementation-neutral adapter:
  decodes the GeoTIFF, paints tiles, keeps `<map-tile>` children in sync with
  the view
