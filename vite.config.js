import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// QueryHandler only parses a query response whose Content-Type starts with
// text/mapml, and the static file server has no mapping for these extensions.
const mapmlContentTypes = {
  name: 'mapml-content-types',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const path = req.url?.split('?')[0] ?? '';
      if (path.endsWith('.mapml')) {
        res.setHeader('Content-Type', 'text/mapml;charset=UTF-8');
      } else if (path.endsWith('.pmtiles')) {
        res.setHeader('Content-Type', 'application/pmtiles');
      } else if (path.endsWith('.mvt')) {
        res.setHeader('Content-Type', 'application/vnd.mapbox-vector-tile');
      }
      next();
    });
  }
};

// Serve these scripts byte-for-byte rather than letting Vite transform them:
// - /projections/*.js carry an `integrity` attribute, which Vite's inline
//   sourcemap would break.
// - /dist/** are prebuilt library bundles. Transforming them buys nothing and
//   makes vite:import-analysis warn about the runtime `import(variable)` calls
//   the bundles legitimately contain.
// Either way, local dev then matches the static server that publishes these pages.
const rawScripts = {
  name: 'raw-scripts',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url?.split('?')[0] ?? '';
      if (!/^\/dist\/.+\.js$/.test(url) && !/\/projections\/[^/]+\.js$/.test(url))
        return next();
      const root = path.resolve(server.config.root);
      const file = path.resolve(root, '.' + path.posix.normalize(decodeURIComponent(url)));
      if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) return next();
      res.setHeader('Content-Type', 'text/javascript');
      res.setHeader('Cache-Control', 'no-cache');
      res.end(fs.readFileSync(file));
    });
  }
};

export default defineConfig({
  // multi-page static site: 404 on a bad link instead of falling back to /index.html
  appType: 'mpa',
  plugins: [mapmlContentTypes, rawScripts],
  server: {
    port: 8080
  }
});
