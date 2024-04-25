// DOM elements
const navSection = document.querySelector('#navSection');
const trekYouTube = document.querySelector('#trekYouTube');

// OpenLayers components
const GeoJSON = ol.format.GeoJSON;
const vectorSource = new ol.source.Vector({});
const vectorLayer = new ol.layer.Vector({ source: vectorSource });

let sections;

// Retrieve the trek sections for navigation
fetch(document.location.href + 'treknav.json')
    .then((response) => response.json())
    .then((json) => createNav(json));

// Create the OpenStreetMap map with GeoJSON-friendly projection
const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    vectorLayer
  ],
  target: 'map'
});

// Create the nav elements
function createNav(items) {
  if(!Array.isArray(items) || (items.length === 0)) {
    return;
  }

  items.forEach((item, index) => {
    let a = document.createElement('a');
    a.setAttribute('class', (index > 0) ? 'nav-link' : 'nav-link active');
    a.textContent = item.title;
    a.addEventListener('click', (event) => { handleNavClick(index); });
    navSection.appendChild(a);
  });

  sections = items;
  trekYouTube.setAttribute('src', sections[0].youtube || '');
  updateSection(0);
}

// Update the selected section/nav
function handleNavClick(index) {
  navSection.childNodes.forEach((nav, navIndex) => {
    nav.className = (index === navIndex) ? 'nav-link active' : 'nav-link';
  });

  trekYouTube.setAttribute('src', sections[index].youtube || '');
  updateSection(index);
}

// Update the section
function updateSection(index) {
  fetch(document.location.href + '/geojson/' + sections[index].geojson)
    .then((response) => response.json())
    .then((json) => { updateMap(json); });
}

// Update the map to fit the current features
function updateMap(json) {
  vectorSource.clear();
  vectorSource.addFeatures(new GeoJSON().readFeatures(json));

  let extent = vectorSource.getExtent();
  let center = ol.extent.getCenter(extent);
  let view = new ol.View({
      projection: 'EPSG:4326',
      showFullExtent: true,
      extent: extent,
      center: center,
      zoom: 6
  });

  map.setView(view);
}