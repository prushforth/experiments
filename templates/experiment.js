/*
 * Shared bootstrap for the experiment page templates (see templates/).
 *
 * A page includes exactly ONE relative path — this script:
 *
 *   <script src="../../templates/experiment.js" data-impl="openlayers"></script>
 *
 * Everything else (global.css, experiment.css, the MapML library) is resolved
 * from this script's own URL, so the depth of the example in the folder tree
 * only ever needs to be fixed up in that one `src`.
 *
 * data-impl (or a ?impl= query parameter, which wins) selects the library:
 *   leaflet | openlayers | maplibre
 *
 * The script also progressively enhances every `.example` block with a
 * View/Hide code + Copy code toolbar. `.example-map` holds either an inline
 * `<mapml-viewer>` (its authored markup is snapshotted before the custom
 * elements upgrade) or an `<iframe>` pointing at another page — which is how
 * several implementations are compared side by side, since each one defines
 * its own `<mapml-viewer>` and needs a separate browsing context. For an
 * iframe the code panel shows the framed page's own source, either the part
 * between `<!-- code -->` and `<!-- /code -->` or its map element.
 *
 * Inside a frame the toolbar is suppressed: the framing page provides it.
 */
(function () {
  'use strict';

  const script = document.currentScript;
  const projectRoot = new URL('../', script.src);

  const LIBRARIES = {
    leaflet: {
      label: 'MapML.js (Leaflet)',
      src: 'dist/MapML.js/dist/mapml.js'
    },
    openlayers: {
      label: 'MapML-OpenLayers',
      src: 'dist/MapML-OpenLayers/dist/mapml-ol.js'
    },
    maplibre: {
      label: 'MapML-MapLibre',
      src: 'dist/MapML-MapLibre/dist/mapml-maplibre.js'
    }
  };
  const ALIASES = {
    'mapml.js': 'leaflet',
    mapml: 'leaflet',
    ol: 'openlayers',
    'mapml-ol': 'openlayers',
    'mapml-openlayers': 'openlayers',
    'mapml-maplibre': 'maplibre'
  };

  const requested = (
    new URLSearchParams(location.search).get('impl') ||
    script.dataset.impl ||
    'leaflet'
  )
    .trim()
    .toLowerCase();
  const implKey = LIBRARIES[requested]
    ? requested
    : ALIASES[requested] || 'leaflet';
  const library = LIBRARIES[implKey];

  document.documentElement.dataset.impl = implKey;

  // Appended while <head> is still parsing, so they are render blocking and
  // there is no flash of unstyled content.
  ['global.css', 'templates/experiment.css'].forEach(function (href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL(href, projectRoot).href;
    document.head.appendChild(link);
  });

  function dedent(text) {
    const lines = text.replace(/\t/g, '  ').split('\n');
    const indents = lines
      .slice(1)
      .filter(function (line) {
        return line.trim();
      })
      .map(function (line) {
        return line.match(/^ */)[0].length;
      });
    const shift = indents.length ? Math.min.apply(null, indents) : 0;
    return lines
      .map(function (line, i) {
        return i === 0 ? line : line.slice(shift);
      })
      .join('\n')
      .trim();
  }

  function sourceOf(example) {
    const marked = example.querySelectorAll('[data-code]');
    const nodes = marked.length
      ? marked
      : example.querySelectorAll('.example-map > *');
    return Array.prototype.map
      .call(nodes, function (node) {
        return dedent(node.outerHTML);
      })
      .join('\n\n');
  }

  // The framed page's own source text, so what is shown is what was authored
  // rather than a re-serialization of the parsed DOM.
  function extractSource(text) {
    const marked = text.match(/<!--\s*code\s*-->([\s\S]*?)<!--\s*\/code\s*-->/i);
    if (marked) return dedent(marked[1]);
    const open = /<(mapml-viewer|map)(?=[\s>])/i.exec(text);
    if (!open) return '';
    const close = '</' + open[1].toLowerCase() + '>';
    const end = text.toLowerCase().lastIndexOf(close);
    if (end === -1) return '';
    return dedent(text.slice(open.index, end + close.length));
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // http:// origins other than localhost have no async clipboard.
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok ? Promise.resolve() : Promise.reject(new Error('copy failed'));
  }

  let uid = 0;

  function enhance(example) {
    // A cell of the comparison an implementation does not support: a note, not a map.
    if (example.hasAttribute('data-unavailable')) return;

    const frame = example.querySelector('.example-map iframe');
    let source = frame ? '' : sourceOf(example);
    if (!frame && !source) return;

    const id = 'example-code-' + ++uid;

    const actions = document.createElement('div');
    actions.className = 'example-actions';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'example-button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', id);
    toggle.textContent = 'View code';

    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'example-button';
    copyButton.textContent = 'Copy code';

    const status = document.createElement('span');
    status.className = 'example-status';
    status.setAttribute('role', 'status');

    actions.append(toggle, copyButton, status);

    if (frame) {
      const open = document.createElement('a');
      open.className = 'example-link';
      open.href = frame.src;
      open.target = '_blank';
      open.rel = 'noopener';
      open.textContent = 'Open full page';
      actions.append(open);
    }

    const pre = document.createElement('pre');
    pre.className = 'example-code';
    pre.id = id;
    pre.hidden = true;
    pre.tabIndex = 0;
    const code = document.createElement('code');
    code.textContent = source;
    pre.appendChild(code);

    const map = example.querySelector('.example-map');
    (map || example).after(actions, pre);

    if (frame) {
      code.textContent = 'Loading source…';
      fetch(frame.src)
        .then(function (response) {
          if (!response.ok) throw new Error(response.status);
          return response.text();
        })
        .then(function (text) {
          source = extractSource(text);
          code.textContent = source || 'No map markup found in ' + frame.src;
        })
        .catch(function () {
          code.textContent = 'Could not read ' + frame.src;
        });
    }

    toggle.addEventListener('click', function () {
      pre.hidden = !pre.hidden;
      toggle.setAttribute('aria-expanded', String(!pre.hidden));
      toggle.textContent = pre.hidden ? 'View code' : 'Hide code';
      if (!pre.hidden) pre.focus();
    });

    let timer;
    copyButton.addEventListener('click', function () {
      (source ? copy(source) : Promise.reject(new Error('no source'))).then(
        function () {
          status.textContent = 'Code copied!';
        },
        function () {
          status.textContent = 'Copy failed — select the code and copy it.';
        }
      );
      clearTimeout(timer);
      timer = setTimeout(function () {
        status.textContent = '';
      }, 3000);
    });
  }

  function ready() {
    document.querySelectorAll('a[data-home]').forEach(function (a) {
      a.href = new URL('index.html', projectRoot).href;
    });
    document.querySelectorAll('[data-impl-name]').forEach(function (el) {
      el.textContent = library.label;
    });
    document.querySelectorAll('[data-impl-switcher]').forEach(function (el) {
      Object.keys(LIBRARIES).forEach(function (key) {
        const url = new URL(location.href);
        url.searchParams.set('impl', key);
        const a = document.createElement('a');
        a.href = url.href;
        a.textContent = LIBRARIES[key].label;
        if (key === implKey) a.setAttribute('aria-current', 'true');
        el.appendChild(a);
      });
    });

    // Snapshot the authored markup BEFORE the library defines the custom
    // elements, so the code panel shows what the author wrote rather than the
    // element state (lat/lon/zoom etc.) after upgrade.
    if (window.top === window.self) {
      document.querySelectorAll('.example').forEach(enhance);
    }

    // A page that only frames other pages (an implementation comparison) has no
    // map element of its own and needs no library.
    const needsLibrary =
      !!document.querySelector('mapml-viewer, [is="web-map"]') ||
      !!script.dataset.impl ||
      new URLSearchParams(location.search).has('impl');
    if (!needsLibrary) return;

    // A module <script> element rather than a dynamic import(): Vite's dev
    // server rewrites dynamic imports in a classic script into a static one.
    const lib = document.createElement('script');
    lib.type = 'module';
    lib.src = new URL(library.src, projectRoot).href;
    lib.addEventListener('error', function () {
      console.error('Failed to load ' + library.label + ' from ' + lib.src);
    });
    document.head.appendChild(lib);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
