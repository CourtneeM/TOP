import API_KEY from './keys.js';
const cityInput = document.querySelector('#city-name-input');
const searchBtn = document.querySelector('button');
let cityName = 'Branson'

const render = () => {
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
      console.log(weatherData);
      
      const currentTemp = `The current temperature is: ${weatherData.main.temp}\xB0F`;
      const highTemp = `The high today is: ${weatherData.main.temp_max}\xB0F`;
      const lowTemp = `The low today is: ${weatherData.main.temp_min}\xB0F`;
      const feelsLike = weatherData.main.feels_like;
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

  specificWeatherData.then(res => {
    const { currentTemp, highTemp, lowTemp, feelsLike, weatherConditions } = res;
    console.log(weatherConditions);
  }).catch(error => {
    console.log('Something went wrong: ' + error);
  });
}

render();

searchBtn.addEventListener('click', () => {
  cityName = cityInput.value;
  render();
  cityInput.value = '';
});
