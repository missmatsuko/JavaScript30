/* Variables */
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

/* Functions */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function highlightWrap(text) {
  return `<span class='hl'>${text}</span>`;
}

function findMatches(wordToMatch, citiesArray) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);

  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');

    /* Bart's stuff starts */
    const cityMatch = place.city.match(regex);
    const stateMatch = place.state.match(regex);
    let cityName = place.city;
    let stateName = place.state;
    if (cityMatch) {
      cityName = place.city.replace(cityMatch[0], highlightWrap(cityMatch[0]));
    }
    if (stateMatch) {
      stateName = place.state.replace(stateMatch[0], highlightWrap(stateMatch[0]));
    }
    /* Bart's stuff ends */

    return `
      <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='population'>${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = html;
}

/* Main */
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
