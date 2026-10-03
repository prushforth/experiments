# Notes — layer that stays visible when the projection changes

Working notes from 3 October 2026, kept here so the ideas survive until there
is time to raise them as issues. Nothing here has been acted on; the experiment
itself is unchanged apart from giving MapML-MapLibre a real map in each
comparison instead of a "draws Web Mercator only" note.

## What the MapLibre column proves

MapML-MapLibre can only draw Web Mercator. Press **Lambert Conformal Conic** in
its frame and the map keeps drawing anyway: it logs

> MapML projection "CBMTILE" is not supported by the MapLibre renderer; falling
> back to OSMTILE. Provide a `<map-link rel="alternate" projection="OSMTILE"
> href="…">` for a Mercator equivalent.

and carries on painting the layer's OSMTILE `<map-extent>`. That is the whole
point of giving the layer one extent per projection — a renderer that cannot do
what the page asked for picks the extent it *can* draw rather than going blank.
Both the inline and the remote variants behave this way.

Note that the **Web Mercator** button stays pressed afterwards, because
`map.projection` still reads `OSMTILE`. Which raises the question below.

## Should the viewer throw when a script sets an unusable projection?

The page sets the projection with `map.projection = 'CBMTILE'`. MapLibre cannot
honour that. A console warning is the only trace. Should the setter throw
instead, so the script actually finds out?

**No — but a console warning alone is not enough either.** Three reasons not to
throw:

1. **It would break attribute/property parity.** `map.projection = 'CBMTILE'`
   is sugar for `setAttribute('projection','CBMTILE')`, and `setAttribute`
   cannot throw for a well-formed name. If the property setter threw, the same
   authoring act would behave differently depending on which spelling was used.
   Reflected IDL attributes in HTML never throw on an unsupported value —
   `input.type = 'nonsense'`, `img.loading = 'nonsense'` and
   `a.referrerPolicy = 'nonsense'` all quietly resolve to the invalid-value
   default.

2. **Forward compatibility.** `CBMTILE` is not malformed; it is a projection
   MapML defines and this renderer cannot paint. If unsupported means throw,
   every value added later becomes a hard error in every viewer already
   shipped.

3. **Interop, which is what this repo is for.** One author script should keep
   working across all three implementations and degrade visibly, rather than
   exploding on the weakest renderer. An exception makes the implementation
   with the smallest capability the one that breaks the page.

Throwing belongs to *malformed* input to an imperative-only API — registering a
custom projection with bad parameters deserves a `TypeError`. "Valid vocabulary,
absent capability" is a different category, and the platform's answer to it is
feature detection plus graceful degradation.

## What to do instead

- **Make the getter report the projection actually in effect.** MapLibre
  already does this: `isMapmlProjection('CBMTILE')` is false there, so the
  getter returns `OSMTILE`. That gives a script a synchronous check —
  `map.projection = 'CBMTILE'; if (map.projection !== 'CBMTILE') { … }` — which
  is also exactly why the button in the frame stays on Web Mercator.

- **Add feature detection,** so an author can ask before committing. The
  closest precedent is `HTMLMediaElement.canPlayType()`: a shared vocabulary,
  support that varies per implementation, and a query that never throws. Also
  `CSS.supports()` and `MediaRecorder.isTypeSupported()`. Something like
  `supportsProjection(name)`, or a read-only list of supported projections.

- **Fire the event whenever a change is requested,** carrying both values —
  `{ requested: 'CBMTILE', effective: 'OSMTILE' }`. Today
  `map-projectionchange` does not fire when the effective projection did not
  move, so a listener learns nothing at all. This is the `<video>` / `<source>`
  model: the element falls through to what it can play, and says so.

- **Keep the console warning.** Developer-time diagnostics alongside
  programmatic fallback is correct practice — content security policy
  violations, deprecations and mixed content all work this way. It is just not
  a substitute for the three points above.

The declarative mechanisms stay primary: several `<map-extent>` elements in one
layer, as this experiment uses, and `<map-link rel="alternate">` as the warning
suggests. Script is the escape hatch, not the contract.

## The three implementations disagree today

| | getter returns | setter on an unusable value |
|---|---|---|
| MapML.js (Leaflet) | the attribute verbatim, so `CBMTILE` | async, "throws" (see below) |
| MapML-OpenLayers | the attribute verbatim, so `CBMTILE` | same as MapML.js (ported 1:1) |
| MapML-MapLibre | the effective value, so `OSMTILE` | sets the attribute, warns, falls back |

So the two halves of the API behave oppositely across implementations. A single
rule worth writing down: *the setter never throws, the getter returns the
effective value, and the event reports requested versus effective.*

## A real defect found on the way

MapML.js's setter looks like it throws, and does not:

```js
set projection(val) {
  if (val) {
    this.whenProjectionDefined(val)
      .then(() => { this.setAttribute('projection', val); })
      .catch(() => { throw new Error('Undefined projection: ' + val); });
  }
}
```

The `throw` is inside a promise `.catch`, so it becomes an unhandled rejection:
`try { map.projection = 'BOGUS' } catch (e) { … }` will never catch it. The
assignment is also asynchronous, so the attribute lands a microtask after the
line that set it. MapML-OpenLayers ports this verbatim
(`src/mapml-viewer.js`), so the fix belongs upstream and should come downstream
with it.

## Candidate issues

1. MapML.js and MapML-OpenLayers: the `projection` setter's `throw` sits inside
   a promise `.catch`, so it is an unhandled rejection rather than an exception
   the caller can catch, and the attribute is set a microtask late. Port the
   fix downstream once it is made upstream.
2. All three: agree one contract for an unusable `projection` value — the
   setter never throws, the getter returns the projection actually in effect,
   and the change event carries requested versus effective. Today MapML.js and
   MapML-OpenLayers return the attribute verbatim while MapML-MapLibre returns
   the effective value, so the same script reads differently per renderer.
   Cross-renderer; this experiment is the demonstration.
3. All three: add feature detection for projections, so a script can ask before
   it commits — a `canPlayType()`-shaped query, or a read-only list of
   supported projections. Only useful once 2 is settled.
4. MapML-MapLibre: `map-projectionchange` does not fire when a requested change
   is declined, so a script gets no programmatic signal at all — only a console
   warning. Covered by 2, but worth its own note since the behaviour is
   observable in this experiment today.
