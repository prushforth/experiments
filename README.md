# Experiments

![Sync Repositories](https://github.com/Maps4HTML/MapML.js/workflows/Sync%20Repositories/badge.svg)

Hosts experiments for the [Web Map Custom Element](https://github.com/Maps4HTML/MapML.js) polyfill.

Experiments are listed here: https://maps4html.org/experiments/index.html

## Findings to raise as issues

Some experiments carry a `README.md` of working notes: a defect or a design
question found while building the comparison, written down because the
experiment demonstrates it but cannot by itself report it. Each of those files
ends with a **Candidate issues** section.

**Review these before merging the `MapML-OpenLayers` branch,** and open the
issues then. Findings that cut across renderers belong in this repository, with
a link to the live experiment; ones that name a single implementation belong in
that implementation's repository, again linked back to the experiment here.

| Notes | Live experiment | What is waiting there |
|---|---|---|
| [change-projection/zoomin-zoomout](change-projection/zoomin-zoomout/README.md) | [zoom-driven projection change](https://maps4html.org/experiments/change-projection/zoomin-zoomout/inline/) | 5 candidates. MapML.js spins forever at a projection boundary because a projection change loses the zoom; what a projection change should preserve, zoom number or scale; a `map-scale` media feature; non-integer client zoom; a latent re-entrancy hole in MapML-OpenLayers' `_changeProjection`. |
| [change-projection/projection-extent-fallback](change-projection/projection-extent-fallback/README.md) | [layer that stays visible when the projection changes](https://maps4html.org/experiments/change-projection/projection-extent-fallback/inline/) | 4 candidates. The three implementations disagree on what `map.projection` does with a value the renderer cannot draw — whether the setter throws, what the getter then returns, and whether anything is dispatched. Includes a real defect: the setter's `throw` sits inside a promise `.catch`, so it is an uncatchable unhandled rejection in both MapML.js and MapML-OpenLayers. |

`api/pwa/file-handling/README.md` is deliberately not in this list — it is a
published article about that experiment, not working notes.
