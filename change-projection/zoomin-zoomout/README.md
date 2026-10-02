# Notes — change projection on zoom change

Working notes from an investigation on 2 October 2026, kept here so the ideas
survive until there is time to (a) raise them as issues and (b) implement them.
Nothing here has been acted on; the experiment is unchanged apart from a note in
the MapML.js column of the comparison pages.

## What the experiment does

Four layers, each good for a different projection and a different band of zoom
levels, declared in the layer's `media` attribute:

| layer | projection | zoom band |
|---|---|---|
| Arctic SDI | EPSG3573 | 0–3 |
| Atlas of Canada | ATLAS_POLAR_MAP | 4–5 |
| Canada Base Map | CBMTILE | 6–8 |
| Web Mercator base map | OSMTILE | 9–18 |

The page itself only picks the projection, in a `zoomend` handler keyed on the
zoom number. Which layer draws then follows from the `media` attributes.

## The defect: MapML.js never settles at the 5/6 boundary

Zoom in from ATLAS_POLAR_MAP z5 to z6 and the map oscillates forever. Observed
event log (MapML.js / Leaflet, all three variants — inline, remote, and both
root elements):

| event | zoom | projection | |
|---|---|---|---|
| zoomend | 6 | ATLAS_POLAR_MAP | handler sets CBMTILE |
| zoomend | 5 | CBMTILE | handler sets ATLAS (5 ≤ 5) |
| zoomend | 6 | ATLAS_POLAR_MAP | handler sets CBMTILE |
| … | | | forever |

No layer is enabled at any point during the spin (`disabled` on all four), so
the map is blank while it thrashes, and the zoom-in button goes disabled at 6.

**Root cause.** The projection change does not preserve the zoom number: it
comes out one level lower going to CBMTILE and one level higher going back, and
those two zooms sit on opposite sides of the 5/6 boundary. A clean 2-cycle.

It is *not* scale matching — ATLAS z6 is 516.8 m/px and CBMTILE z5 is 2645.8
m/px; a scale-matched landing would have been CBMTILE z8 (529.2). The zoom
number is being shifted and clamped, not re-derived from the resolution.
`getMinZoom()`/`getMaxZoom()` stay at ATLAS's `0`/`6` throughout, even while the
projection reads CBMTILE, which is why `zoomTo(lat, lon, 6)` cannot restore
anything stable. MapML.js's own code comment at `mapml-viewer.js`
`case 'projection'` acknowledges that Leaflet fights the CRS swap
(Leaflet issue 2553).

**OpenLayers does not loop.** Full ladder 8→7→6→5→4→3 and back up to 9: the
asked zoom is always the zoom you get, exactly one `zoomend` per step with none
afterwards, and exactly one layer enabled at every step, in both directions.

OpenLayers has its own wart though: it preserves the zoom *number*, not the
ground resolution, so the view jumps about 3× at the ATLAS/CBMTILE boundary
(517 → 1588 m/px). That matches what MapML.js says it intends, so the port is
faithful, but it is a design choice rather than an obviously right answer.

### Reproducing

Serve the experiments site and open
`change-projection/zoomin-zoomout/inline/leaflet/`. Get to zoom 5, then zoom in
one step.

Testing gotcha: the OpenLayers viewer dispatches `map-moveend`/`zoomend` off the
render loop, so a **backgrounded tab fires nothing** — `zoomTo()` moves the view
but the zoom attribute goes stale, the media queries never re-evaluate and the
projection never changes. It looks like a much worse bug than it is. Leaflet is
unaffected (its `setView`/`zoomend` are synchronous). Make the page active
before believing a probe.

## Idea 1 — two thresholds instead of one (author-side workaround)

The partition is exhaustive and adjacent, so any drift across a boundary
immediately satisfies the neighbour. The classic fix is hysteresis — a Schmitt
trigger, or a thermostat that turns the heat on at 19° and off at 21° rather
than both at 20°. Overlap the ranges and only change projection when the zoom
leaves the range of the projection *currently in use*:

```js
const RANGES = {
  EPSG3573: [0, 4], ATLAS_POLAR_MAP: [3, 6], CBMTILE: [5, 9], OSMTILE: [8, 18]
};
map.addEventListener('zoomend', () => {
  const [lo, hi] = RANGES[map.projection];
  if (map.zoom >= lo && map.zoom <= hi) return;  // the drift lands inside: stay put
  map.projection = pick(map.zoom);
});
```

The band only has to be wider than the disturbance; since the switch perturbs by
one zoom level, one level of overlap each side is enough. The `media` attributes
would widen to match.

The structural point: this makes the rule **stateful**. Today it is a pure
function `zoom → projection`, and a pure function cannot be stable when applying
it changes its own argument. The fixed version is
`(zoom, current projection) → projection`.

Caveat: this masks the MapML.js defect rather than fixing it, and the experiment
stops reporting the finding. Probably not what we want *here*, but it is the
right shape for an author facing the same thing.

## Idea 2 — a projection change should hold the scale steady

Rather than preserving the zoom number, land on the integer level in the new
projection whose resolution is nearest the current one. Measured resolutions
(m/px) from the live page:

```
EPSG3573        38197.9  19099.0  9549.5  4774.7  2387.4  1193.7   596.8
ATLAS_POLAR_MAP 33073.0  16536.5  8268.2  4134.1  2067.1  1033.5   516.8
CBMTILE         38364.7  22489.6 13229.2  7937.5  4630.2  2645.8  1587.5  926.0  529.2  317.5 …
OSMTILE        156543.0  78271.5 39135.8 19567.9  9783.9  4892.0  2446.0 1223.0  611.5  305.7 …
```

Nearest-level landings at this experiment's boundaries:

| leaving | m/px | nearest arriving level | error |
|---|---|---|---|
| ATLAS z5 | 1033.5 | CBMTILE z7 (926.0) | 10% |
| ATLAS z6 | 516.8 | CBMTILE z8 (529.2) | 2% |
| EPSG3573 z3 | 4774.7 | ATLAS z3 (4134.1) | 13% |
| CBMTILE z8 | 529.2 | OSMTILE z8 (611.5) | 16% |

Today MapML.js sends ATLAS z6 → CBMTILE z5 and OpenLayers sends it → CBMTILE z6
(both 1588 m/px, 3× out). Nearest-level would send it to z8 and the map would
barely move. Works in both engines, needs no fractional zoom, and keeps every
tile at its native size.

Note what the table also shows: the scale-correct zoom-number mapping is not
1:1 and not even constant — ATLAS→CBMTILE is +2 at one level and +1 at another.
An author writing integer zoom ranges per projection is being asked to do that
arithmetic by hand for every pair, and will get it wrong.

## Idea 3 — a `map-scale` media feature

Which is the argument for adding one. A scale breakpoint is the same number in
every CRS; a zoom number means a different thing in each. With `map-scale` the
author expresses *where* the content changes and the viewer picks the level.

Important pairing: keying off scale is only immune to the oscillation if the
projection change preserves scale. Neither implementation does today — whichever
quantity survives the switch is the one that is safe to key off. So `map-scale`
and Idea 2 belong together.

And even with nearest-level snapping the scale still moves by up to half a level
(about 1.4×), so a breakpoint sitting near where the snap lands could still
oscillate. The disturbance shrinks from "a full level, in the wrong direction,
every time" to "at most half a level, sometimes" — survivable rather than
impossible. Two thresholds would still be the safe way to author it.

## Idea 4 — relax the client to non-integer zoom

`<map-input type="zoom" min max>` describes the zoom levels a *server* has tiles
for. That is a statement about the resource, not about what the client is
allowed to display. Worth separating the two:

- Server side stays integer: tiles exist at discrete matrix levels.
- Client side could be continuous: let the map sit at any scale and resample the
  nearest available level, which is ordinary behaviour for OpenLayers and is
  available in Leaflet too (`zoomSnap: 0` with `zoomDelta`, since 1.0 — so this
  is not necessarily OpenLayers-only).

With a continuous client zoom, a projection change could hold the scale *exactly*
rather than within a few percent, and a `map-scale` media query would have a true
fixed point — the keyed quantity would not move at all across the switch. The
cost is that tiles get drawn at non-native size, so nearest-level snapping is
probably the better default with fractional as an opt-in.

## Candidate issues

1. MapML.js: a projection change loses the zoom, which can trap a page that
   chooses its projection from the zoom in an infinite switch loop. (This
   experiment is the reproduction.)
2. Both: decide what a projection change preserves — zoom number or scale — and
   say so. Proposal: nearest matching scale. Being taken up first in
   MapML-OpenLayers, where the `View` takes the view state as a constructor
   input so the intent can be stated declaratively.
3. Vocabulary: add a `map-scale` media feature alongside `map-zoom`. Separate
   issue, to be done across all three implementations if possible — it only
   makes sense once 2 is settled, since a rule is safe to key on a quantity
   only if the action the rule takes preserves that quantity.
4. Both: allow non-integer client zoom, decoupled from the integer tile matrix
   levels that `<map-input type="zoom">` describes.
5. MapML-OpenLayers: `_changeProjection` guards only on
   `newValue !== this._currentProjection`, assigned before
   `await Promise.allSettled(layersReady)`. A second change arriving mid-rebuild
   starts a second pass whose `removeChild`/`appendChild` interleaves with the
   first. Latent — nothing re-triggers it today because the zoom does not drift.
