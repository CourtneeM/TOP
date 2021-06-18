const KEY = 'c4b669418ad101f305637ea342fa6e65';

async function getWeatherData(cityName) {
  const weatherDataFetch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}&units=imperial`);
  const weatherData = await weatherDataFetch.json();
  return weatherData;
}

const render = (() => {
  function initialRender(elements, weatherValues) {
    const [weatherContainer, cityNameHeader, weatherConditionP, currentTempP, highTempP, lowTempP, feelsLikeP] = elements;
    const [cityName, weatherConditions, currentTemp, highTemp, lowTemp, feelsLike] = weatherValues;

    cityNameHeader.textContent = cityName;
    weatherConditionP.textContent = weatherConditions;
    currentTempP.textContent = `Current Temperature: ${currentTemp}`;
    highTempP.textContent = `High: ${highTemp}`;
    lowTempP.textContent = `Low: ${lowTemp}`;
    feelsLikeP.textContent = `Feels Like: ${feelsLike}`;

    weatherContainer.appendChild(cityNameHeader);
    weatherContainer.appendChild(weatherConditionP);
    weatherContainer.appendChild(currentTempP);
    weatherContainer.appendChild(highTempP);
    weatherContainer.appendChild(lowTempP);
    weatherContainer.appendChild(feelsLikeP);

    document.querySelector('body').appendChild(weatherContainer);
  }

  function generateInitialSearch() {
    const input = document.createElement('input');
    const searchBtn = document.createElement('button');
  
    input.setAttribute('placeholder', 'Enter city name');
    searchBtn.textContent = 'Search';
  }
  
  function generateWeatherElements() {
    const weatherContainer = document.createElement('section');
    const cityNameHeader = document.createElement('h2');
    const weatherConditionP = document.createElement('p');
    const currentTempP = document.createElement('p');
    const highTempP = document.createElement('p');
    const lowTempP = document.createElement('p');
    const feelsLikeP = document.createElement('p');

    weatherContainer.id = 'weather-container';
    cityNameHeader.id = 'city-name';
    weatherConditionP.id = 'weather-condition';
    currentTempP.id = 'current-temp';
    highTempP.id = 'high-temp';
    lowTempP.id = 'low-temp';
    feelsLikeP.id = 'feels-like';

    return [weatherContainer, cityNameHeader, weatherConditionP, currentTempP, highTempP, lowTempP, feelsLikeP];
  }

  function updateWeatherElements(weatherValues) {
    const [cityName, weatherConditions, currentTemp, highTemp, lowTemp, feelsLike] = weatherValues;
    const cityNameHeader = document.querySelector('#city-name');
    const weatherConditionP = document.querySelector('#weather-condition');
    const currentTempP = document.querySelector('#current-temp');
    const highTempP = document.querySelector('#high-temp');
    const lowTempP = document.querySelector('#low-temp');
    const feelsLikeP = document.querySelector('#feels-like');

    cityNameHeader.textContent = cityName;
    weatherConditionP.textContent = weatherConditions;
    currentTempP.textContent = `Current Temperature: ${currentTemp}`;
    highTempP.textContent = `High: ${highTemp}`;
    lowTempP.textContent = `Low: ${lowTemp}`;
    feelsLikeP.textContent = `Feels Like: ${feelsLike}`;
  }

  function clearWeatherContainer() {
    const weatherContainer = document.querySelector('#weather-container');
    
    while (weatherContainer.firstChild) {
      weatherContainer.removeChild(weatherContainer.firstChild);
    }
  }

  return { initialRender, generateInitialSearch, generateWeatherElements, updateWeatherElements }
})();


function assignWeatherData(weatherData) {
  const cityName = weatherData.name;
  const weatherConditions = weatherData.weather.map(condition => condition.main);
  const currentTemp = weatherData.main.temp;
  const highTemp = weatherData.main.temp_max;
  const lowTemp = weatherData.main.temp_min;
  const feelsLike = weatherData.main.feels_like;

  return [cityName, weatherConditions, currentTemp, highTemp, lowTemp, feelsLike];
}

document.querySelector('#search-btn').addEventListener('click', () => {
  const cityNameInput = document.querySelector('#city-name-input');

  if (document.querySelector('#weather-container')) {
    getWeatherData(cityNameInput.value)
      .then(response => {
        render.updateWeatherElements(assignWeatherData(response));
      });
  } else { 
    getWeatherData(cityNameInput.value)
    .then(response => {
      render.initialRender(render.generateWeatherElements(), assignWeatherData(response));
    });
  }

  cityNameInput.value = '';
});


