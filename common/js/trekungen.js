// Adapted from https://openlayers.org/en/latest/examples/geojson.html

const BASE_PATH = '/trekungen/';

const GeoJSON = ol.format.GeoJSON;

const vectorSource = new ol.source.Vector({});

fetch(BASE_PATH + 'denvegaser/geojson/overview.geojson')
    .then((response) => response.json())
    .then((json) => vectorSource.addFeatures(new GeoJSON().readFeatures(json)));

const vectorLayer = new ol.layer.Vector({ source: vectorSource });

const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    vectorLayer
  ],
  target: 'map',
  view: new ol.View({
    projection: 'EPSG:4326',
    center: [-73.55413, 45.50882],
    zoom: 2
  }),
});