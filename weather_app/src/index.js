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
      return weatherData;
    } catch (error) {
      return 'Something went wrong: ' + error;
    }
  }

  const specificWeatherData = (async () => {
    try {
      const weatherData = await getWeatherData();
      console.log(weatherData.message);
      
      const currentTemp = `${weatherData.main.temp}\xB0F`;
      const highTemp = `${weatherData.main.temp_max}\xB0F`;
      const lowTemp = `${weatherData.main.temp_min}\xB0F`;
      const feelsLike = `${weatherData.main.feels_like}\xB0F`;
      const weatherConditions = weatherData.weather.map(condition => condition.main);

      return {
        currentTemp,
        highTemp,
        lowTemp,
        feelsLike,
        weatherConditions,
      }
    } catch (error) {
      console.log('Something went wrong: ' + error);
    }
  })();

  specificWeatherData.then(response => {
    const { currentTemp, highTemp, lowTemp, feelsLike, weatherConditions } = response;

    cityNameH1.textContent = cityName;
    weatherConditionP.textContent = weatherConditions;
    currentTempP.textContent = currentTemp;
    highTempP.textContent = highTemp;
    lowTempP.textContent = lowTemp;
    feelsLikeP.textContent = feelsLike;
  }).catch(error => {
    console.log('Something went wrong: ' + error);
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
  