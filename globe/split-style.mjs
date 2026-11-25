// Refresh this folder's MapLibre styles from the tile service's own style.
//
//   node globe/split-style.mjs            (from the experiments folder)
//
// Writes root.json (the service's style, URLs made absolute), and
// root-en.json / root-fr.json (the same, keeping only one language's label
// layers). See README.md.
import { writeFileSync } from 'node:fs';

const SERVICE =
  'https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT_CBCT_3857_V_OSM/VectorTileServer';
const STYLE_URL = `${SERVICE}/resources/styles/root.json`;

// Resolve a style URL against the style's own URL, keeping its {…}
// placeholders, which URL() would percent-encode.
function absolute(url) {
  if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) return url;
  const placeholders = [];
  const marked = url.replace(/\{[^}]+\}/g, (m) => {
    placeholders.push(m);
    return `__PH_${placeholders.length - 1}__`;
  });
  return new URL(marked, STYLE_URL).href
    .replace(/\/$/, '')
    .replace(/__PH_(\d+)__/g, (_m, i) => placeholders[i]);
}

// A label layer for one language: its id has a standalone `EN`/`FR` token
// (e.g. ".../label/FR", ".../label/10 EN") or the word English/French.
const LANGUAGE = {
  en: /(?<![A-Za-z])EN(?![A-Za-z])|English/,
  fr: /(?<![A-Za-z])FR(?![A-Za-z])|French/
};

const response = await fetch(STYLE_URL);
if (!response.ok) throw new Error(`${STYLE_URL}: HTTP ${response.status}`);
const style = await response.json();

style.sprite = absolute(style.sprite);
style.glyphs = absolute(style.glyphs);
for (const source of Object.values(style.sources)) {
  if (source.url) source.url = absolute(source.url);
}

const folder = new URL('./', import.meta.url);
const write = (name, s) => {
  writeFileSync(new URL(name, folder), JSON.stringify(s, null, 2) + '\n');
  console.log(`${name}: ${s.layers.length} layers`);
};
const without = (other) => ({
  ...style,
  layers: style.layers.filter((l) => !LANGUAGE[other].test(l.id))
});

write('root.json', style);
write('root-en.json', without('fr'));
write('root-fr.json', without('en'));
