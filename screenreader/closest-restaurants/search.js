/*
 * Shared by every frame of the "closest restaurants" experiment.
 *
 * A place search that moves the map, and a button that adds a layer of
 * restaurants to whatever the map is now showing. Everything it does to the map
 * it does through the DOM: it builds a <map-layer> from GeoJSON with
 * M.geojson2mapml, appends it, and asks it to zoom to itself. The map element
 * is found by the selector that matches both root elements, so the same script
 * drives <mapml-viewer> and <map is="web-map">.
 */
(function () {
  'use strict';

  const GEONAMES = 'https://geogratis.gc.ca/services/geoname/en/geonames.json';
  const LICENSE =
    'https://www.nrcan.gc.ca/maps-tools-and-publications/maps/geographical-names-canada/application-programming-interface-api/9249';

  const map = document.querySelector('mapml-viewer, map[is="web-map"]');
  const form = document.querySelector('.place-search');
  const input = document.getElementById('query');
  const results = document.getElementById('results');
  const count = document.getElementById('results-count');
  const addRestaurants = document.getElementById('add-restaurants');
  const template = document.getElementById('restaurant-layer');

  let places = [];

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    search(input.value.trim());
  });

  addRestaurants.addEventListener('click', function () {
    if (map.querySelector('#restaurants')) return;
    map.appendChild(template.content.cloneNode(true));
    addRestaurants.disabled = true;
  });

  async function search(term) {
    if (!term) return;
    count.textContent = 'Searching…';
    const response = await fetch(
      GEONAMES + '?q=' + encodeURIComponent(term) + '*&num=10'
    );
    const json = await response.json();
    places = json.items || [];
    render();
  }

  function render() {
    results.replaceChildren();
    count.textContent =
      places.length === 1 ? '1 place found' : places.length + ' places found';

    places.forEach(function (place, index) {
      const description = document.createElement('span');
      description.className = 'result-description';
      description.textContent = place.concise.code + ' (' + place.decision + ')';

      const button = document.createElement('button');
      button.type = 'button';
      button.append(place.name, description);
      button.addEventListener('click', function () {
        show(index);
      });

      const item = document.createElement('li');
      item.appendChild(button);
      results.appendChild(item);
    });
  }

  async function show(index) {
    const place = places[index];
    const response = await fetch(place.feature.links.self.href + '.geojson');
    const geojson = await response.json();
    if (place.bbox) geojson.bbox = place.bbox;

    results.replaceChildren();

    const previous = map.querySelector('#place');
    if (previous) previous.remove();

    const layer = M.geojson2mapml(geojson, { caption: 'label_en' });
    layer.setAttribute('id', 'place');
    layer.setAttribute('label', geojson.properties.label_en);

    const license = document.createElement('map-link');
    license.setAttribute('rel', 'license');
    license.setAttribute('title', 'NRCan Geoname Service');
    license.setAttribute('href', LICENSE);
    layer.appendChild(license);

    map.appendChild(layer);
    if (layer.whenReady) {
      try {
        await layer.whenReady();
      } catch {
        /* a layer that never becomes ready is still worth zooming to */
      }
    }
    layer.zoomTo();
    // A single point zooms to the maximum zoom, which is too close to see what
    // is around it — the whole point of the next step.
    if (Number(map.zoom) > 16) map.zoomTo(map.lat, map.lon, 16);

    count.textContent = 'Showing ' + place.name;
    map.focus();
  }
})();
