import render from './render_controller';

const KEY = 'c4b669418ad101f305637ea342fa6e65';

async function getWeatherData(cityName) {
  const weatherDataFetch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}&units=imperial`);
  const weatherData = await weatherDataFetch.json();
  return weatherData;
}

function assignWeatherData(weatherData) {
  if (weatherData.cod !== 200) return weatherData;

  const cityName = weatherData.name;
  const weatherConditions = weatherData.weather.map(condition => condition.main).join(', ');
  const currentTemp = weatherData.main.temp;
  const highTemp = weatherData.main.temp_max;
  const lowTemp = weatherData.main.temp_min;
  const feelsLike = weatherData.main.feels_like;

  return [cityName, weatherConditions, currentTemp, highTemp, lowTemp, feelsLike];
}

document.querySelector('#search-btn').addEventListener('click', () => {
  const cityNameInput = document.querySelector('#city-name-input');
  let errorMessage = '';

  if (cityNameInput.value === '') return;

  getWeatherData(cityNameInput.value)
    .then(response => {
      let specificWeatherData = assignWeatherData(response);
      if (specificWeatherData.cod !== 200) errorMessage = specificWeatherData.message;

      let weatherElements = render.assignWeatherElementValues(specificWeatherData)
      
      if (document.querySelector('#weather-container')) {
        render.clearWeatherContainer();
        render.rerenderWeatherElements(weatherElements);
      } else { 
        render.initialRender(weatherElements);
      }
  }).catch(() => {
    render.renderErrorMessage(errorMessage);
  });

  cityNameInput.value = '';
});


