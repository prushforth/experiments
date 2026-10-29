/*
 * Render an inline, base64-encoded GeoTIFF as <map-tile> children of a
 * <map-layer>, using geotiff.js loaded by reference from a CDN.
 *
 * Implementation-neutral: it uses only the <mapml-viewer> DOM API (zoom,
 * extent, whenReady, map-moveend) and <map-tile>, whose src may be a blob: URL
 * of a canvas painted here. The raster is EPSG:3857, the PCRS of OSMTILE, so
 * tile -> raster is a pure affine.
 */
import { fromArrayBuffer } from 'https://cdn.jsdelivr.net/npm/geotiff@2.1.3/+esm';

const NODATA = -9999;
const OPACITY = 217;

// The OSMTILE tile grid.
const TILE = 256;
const ORIGIN_X = -20037508.342787;
const ORIGIN_Y = 20037508.342787;
const resolution = (z) => 156543.0339 / 2 ** z;

const STOPS = [
  { t: 0.0, color: [0, 0, 160] },
  { t: 0.15, color: [0, 0, 255] },
  { t: 0.35, color: [0, 220, 255] },
  { t: 0.5, color: [80, 255, 160] },
  { t: 0.65, color: [220, 255, 0] },
  { t: 0.78, color: [255, 230, 0] },
  { t: 0.88, color: [255, 140, 0] },
  { t: 0.96, color: [255, 0, 0] },
  { t: 1.0, color: [180, 0, 0] }
];

const LUT = (() => {
  const lut = new Uint8ClampedArray(256 * 3);
  for (let i = 0; i < 256; i++) {
    const t = i / 255;
    let s = 0;
    while (s < STOPS.length - 2 && t > STOPS[s + 1].t) s++;
    const lo = STOPS[s];
    const hi = STOPS[s + 1];
    const f = (t - lo.t) / (hi.t - lo.t);
    for (let c = 0; c < 3; c++) {
      lut[i * 3 + c] = lo.color[c] + (hi.color[c] - lo.color[c]) * f;
    }
  }
  return lut;
})();

export async function renderGeoTIFF(layer, dataElement) {
  const buffer = await (await fetch(dataElement.textContent.trim())).arrayBuffer();
  const image = await (await fromArrayBuffer(buffer)).getImage();
  const width = image.getWidth();
  const height = image.getHeight();
  const [rxmin, rymin, rxmax, rymax] = image.getBoundingBox();
  const resX = (rxmax - rxmin) / width;
  const resY = (rymax - rymin) / height;
  const samples = (await image.readRasters())[0];

  let vmin = Infinity;
  let vmax = -Infinity;
  for (const v of samples) {
    if (v === NODATA || !Number.isFinite(v)) continue;
    if (v < vmin) vmin = v;
    if (v > vmax) vmax = v;
  }
  const vrange = vmax - vmin || 1;

  // Paint one tile, or return null when it holds no data.
  function renderTile(z, col, row) {
    const res = resolution(z);
    const xmin = ORIGIN_X + col * TILE * res;
    const ymax = ORIGIN_Y - row * TILE * res;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = TILE;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(TILE, TILE);
    const px = imageData.data;
    let painted = false;

    for (let ty = 0; ty < TILE; ty++) {
      const sy = Math.floor((rymax - (ymax - (ty + 0.5) * res)) / resY);
      if (sy < 0 || sy >= height) continue;
      for (let tx = 0; tx < TILE; tx++) {
        const sx = Math.floor((xmin + (tx + 0.5) * res - rxmin) / resX);
        if (sx < 0 || sx >= width) continue;
        const v = samples[sy * width + sx];
        if (v === NODATA || !Number.isFinite(v)) continue;
        const t = Math.min(255, Math.max(0, Math.round((255 * (v - vmin)) / vrange)));
        const o = (ty * TILE + tx) * 4;
        px[o] = LUT[t * 3];
        px[o + 1] = LUT[t * 3 + 1];
        px[o + 2] = LUT[t * 3 + 2];
        px[o + 3] = OPACITY;
        painted = true;
      }
    }
    if (!painted) return null;
    ctx.putImageData(imageData, 0, 0);
    return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
  }

  const viewer = layer.closest('mapml-viewer');
  await customElements.whenDefined('mapml-viewer');
  await viewer.whenReady();

  const live = new Map(); // "z:col:row" -> <map-tile>
  const blank = new Set(); // keys known to hold no data
  let generation = 0;

  async function refresh() {
    const token = ++generation;
    const zoom = Math.round(viewer.zoom);
    const { topLeft, bottomRight } = viewer.extent;
    const span = TILE * resolution(zoom);
    const xmin = Math.max(topLeft.pcrs.horizontal, rxmin);
    const xmax = Math.min(bottomRight.pcrs.horizontal, rxmax);
    const ymin = Math.max(bottomRight.pcrs.vertical, rymin);
    const ymax = Math.min(topLeft.pcrs.vertical, rymax);

    const needed = new Set();
    if (xmin < xmax && ymin < ymax) {
      const minCol = Math.floor((xmin - ORIGIN_X) / span);
      const maxCol = Math.floor((xmax - ORIGIN_X) / span);
      const minRow = Math.floor((ORIGIN_Y - ymax) / span);
      const maxRow = Math.floor((ORIGIN_Y - ymin) / span);
      for (let col = minCol; col <= maxCol; col++) {
        for (let row = minRow; row <= maxRow; row++) {
          needed.add(`${zoom}:${col}:${row}`);
        }
      }
    }

    // Evict first, synchronously, so a superseded refresh never leaves stale tiles.
    for (const [key, tile] of live) {
      if (needed.has(key)) continue;
      URL.revokeObjectURL(tile.getAttribute('src'));
      tile.remove();
      live.delete(key);
    }

    for (const key of needed) {
      if (live.has(key) || blank.has(key)) continue;
      const [z, col, row] = key.split(':').map(Number);
      const blob = await renderTile(z, col, row);
      if (token !== generation) return;
      if (!blob) {
        blank.add(key);
        continue;
      }
      const tile = document.createElement('map-tile');
      tile.setAttribute('zoom', z);
      tile.setAttribute('col', col);
      tile.setAttribute('row', row);
      tile.setAttribute('src', URL.createObjectURL(blob));
      live.set(key, tile);
      layer.appendChild(tile);
    }
  }

  await refresh();
  viewer.addEventListener('map-moveend', refresh);
}
