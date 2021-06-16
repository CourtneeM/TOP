import API_KEY from './keys.js';
const intialSearchContainer = document.querySelector('#initial-search-container');
const initialCityInput = document.querySelector('#initial-city-name-input');
const header = document.querySelector('header');
const cityInput = document.querySelector('#city-name-input');
const searchBtns = [...document.querySelectorAll('button')];
const searchResultsContainer = document.querySelector('#search-results-container');
const cityNameH1 = document.querySelector('#location-name')
const weatherConditionP = document.querySelector('#weather-condition');
const currentTempP = document.querySelector('#current-temp');
const highTempP = document.querySelector('#high-temp');
const lowTempP = document.querySelector('#low-temp');
const feelsLikeP = document.querySelector('#feels-like');

const render = (cityName) => {
  async function getWeatherData() {
    try {
      const plainWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`);
      const weatherData = await plainWeatherData.json();
      console.log(weatherData);
      return weatherData;
    } catch (error) {
      return 'Something went wrong: ' + error;
    }
  }

  const weatherData = (async () => {
    try {  
      const weatherData = await getWeatherData();      
      return weatherData;
    } catch (error) {
      console.log('Something went wrong: ' + error);
    }
  })();

  weatherData.then(response => {
    try {
      cityNameH1.textContent = response.name;;
      weatherConditionP.textContent = response.weather.map(condition => condition.main);
      currentTempP.textContent = `${response.main.temp}\xB0F`;
      highTempP.textContent = `${response.main.temp_max}\xB0F`;
      lowTempP.textContent = `${response.main.temp_min}\xB0F`;
      feelsLikeP.textContent = `${response.main.feels_like}\xB0F`;
    } catch (error) {
      cityNameH1.textContent = 'Error: ' + response.message;
      console.log('Error: ' + error);
      weatherConditionP.textContent = '';
      currentTempP.textContent = '';
      highTempP.textContent = '';
      lowTempP.textContent = '';
      feelsLikeP.textContent = '';
    }
  });
}

searchBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    let cityName;
    
    if (!intialSearchContainer.style.display) {
      intialSearchContainer.style.display = 'none';
      cityName = initialCityInput.value;
      cityInput.value = '';
      header.style.display = 'flex';
      searchResultsContainer.style.display = 'block';
    } else {
      cityName = cityInput.value;
      cityInput.value = '';
    }
    
    render(cityName);
  });
});
  