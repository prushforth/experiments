import { defineConfig } from 'vite';

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

export default defineConfig({
  // multi-page static site: 404 on a bad link instead of falling back to /index.html
  appType: 'mpa',
  plugins: [mapmlContentTypes],
  server: {
    port: 8080
  }
});
