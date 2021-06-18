export default (function render() {
  function initialRender(weatherElements) {
    const weatherContainer = document.createElement('section');

    weatherContainer.id = 'weather-container';
    weatherElements.forEach(element => weatherContainer.appendChild(element));

    document.querySelector('body').appendChild(weatherContainer);
  }

  function rerenderWeatherElements(weatherElements) {
    const weatherContainer = document.querySelector('#weather-container');

    weatherElements.forEach(element => weatherContainer.appendChild(element));
  }
  
  function generateWeatherElements() {
    const cityNameHeader = document.createElement('h2');
    const weatherConditionP = document.createElement('p');
    const currentTempP = document.createElement('p');
    const highTempP = document.createElement('p');
    const lowTempP = document.createElement('p');
    const feelsLikeP = document.createElement('p');

    cityNameHeader.id = 'city-name';
    weatherConditionP.id = 'weather-condition';
    currentTempP.id = 'current-temp';
    highTempP.id = 'high-temp';
    lowTempP.id = 'low-temp';
    feelsLikeP.id = 'feels-like';

    return [cityNameHeader, weatherConditionP, currentTempP, highTempP, lowTempP, feelsLikeP];
  }

  function assignWeatherElementValues(weatherValues) {
    const [cityName, weatherConditions, currentTemp, highTemp, lowTemp, feelsLike] = weatherValues;
    const [cityNameHeader, weatherConditionP, currentTempP, highTempP, lowTempP, feelsLikeP] = generateWeatherElements();

    cityNameHeader.textContent = cityName;
    weatherConditionP.textContent = weatherConditions;
    currentTempP.textContent = `Current Temperature: ${Math.round(currentTemp)}\xB0F`;
    highTempP.textContent = `High: ${Math.round(highTemp)}\xB0F`;
    lowTempP.textContent = `Low: ${Math.round(lowTemp)}\xB0F`;
    feelsLikeP.textContent = `Feels Like: ${Math.round(feelsLike)}\xB0F`;

    return [cityNameHeader, weatherConditionP, currentTempP, highTempP, lowTempP, feelsLikeP];
  }

  function clearWeatherContainer() {
    const weatherContainer = document.querySelector('#weather-container');
    
    while (weatherContainer.firstChild) {
      weatherContainer.removeChild(weatherContainer.firstChild);
    }
  }

  function renderErrorMessage(errorMessage) {
    const errorP = document.createElement('p');
    errorP.textContent = `Error: ${errorMessage}`;

    if (document.querySelector('#weather-container')) {
      clearWeatherContainer()
      document.querySelector('#weather-container').appendChild(errorP);
    } else {
      const weatherContainer = document.createElement('section');
      weatherContainer.id = 'weather-container';
      weatherContainer.appendChild(errorP);
      document.querySelector('body').appendChild(weatherContainer);
    }
  }

  return { initialRender, generateWeatherElements, rerenderWeatherElements, assignWeatherElementValues, clearWeatherContainer, renderErrorMessage }
})();
