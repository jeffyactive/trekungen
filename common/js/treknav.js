// DOM elements
const navSection = document.querySelector('#navSection');
const trekYouTube = document.querySelector('#trekYouTube');

let sections;

// Retrieve the trek sections for navigation
fetch(document.location.href + 'treknav.json')
    .then((response) => response.json())
    .then((json) => createNav(json));

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
}

// Update the selected section/nav
function handleNavClick(index) {
  navSection.childNodes.forEach((nav, navIndex) => {
    nav.className = (index === navIndex) ? 'nav-link active' : 'nav-link';
  });

  trekYouTube.setAttribute('src', sections[index].youtube || '');
}