// Adapted from https://openlayers.org/en/latest/examples/geojson.html
//          and https://openlayers.org/en/latest/examples/select-features.html

// Site-specific constants
const BASE_PATH = '/trekungen/';
const TREKUNGEN_GITHUB = 'https://github.com/jeffyactive/trekungen/tree/master/';
const TREKS = [ 'denvegaser', 'via603', 'sierraround', 'phoever', 'amtrak8',
                'via1' ];

// DOM elements
const offcanvasTitle = document.querySelector('#offcanvasTitle');
const trekTitle = document.querySelector('#trekTitle');
const trekYouTube = document.querySelector('#trekYouTube');
const trekWebPage = document.querySelector('#trekWebPage');
const trekGitHub = document.querySelector('#trekGitHub');
const offcanvas = new bootstrap.Offcanvas(document.querySelector('#offcanvas'));

// OpenLayers components
const GeoJSON = ol.format.GeoJSON;
const vectorSource = new ol.source.Vector({});

// Fetch the GeoJSON of each trek and add as features to the vector layer
for(const trek of TREKS) {
  fetch(BASE_PATH + trek + '/geojson/overview.geojson')
    .then((response) => response.json())
    .then((json) => vectorSource.addFeatures(new GeoJSON().readFeatures(json)));
}
const vectorLayer = new ol.layer.Vector({ source: vectorSource });

// Create the OpenStreetMap map with GeoJSON-friendly projection
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
    zoom: 3
  }),
});

// Enable selection of elements on the map
let select = new ol.interaction.Select();
select.on('select', handleSelect);
map.addInteraction(select);

// Handle a selection on the map
function handleSelect(e) {
  let isSomethingSelected = (e.selected.length > 0);

  if(isSomethingSelected) {
    let trek = e.selected[0].values_.trek;

    if(trek) {
      updateOffcanvas(trek);
    }
  }
  else {
    offcanvas.hide();
  }
}

// Update the offcanvas with the information about the trek
function updateOffcanvas(trek) {
  fetch(BASE_PATH + trek + '/overview.json')
      .then((response) => response.json())
      .then((json) => { trekTitle.textContent = json.title;
                        trekYouTube.src = json.youtube;
                        trekWebPage.href = document.location.href + trek,
                        trekWebPage.hidden = (json.hasWebPage !== true),
                        trekGitHub.href = TREKUNGEN_GITHUB + trek });
  offcanvasTitle.textContent = trek;
  offcanvas.show();
}
