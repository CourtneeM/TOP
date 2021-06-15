import API_KEY from './keys.js';
let currentTemp;
let cityName = 'Beaumont';


async function getWeatherData() {
  try {
    const plainWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`);
    const weatherData = await plainWeatherData.json();
    currentTemp = weatherData.main.temp;
    console.log(`Current Temperature: ${currentTemp}\xB0F`);
  } catch (error) {
    return 'Something went wrong: ' + error;
  }
}

getWeatherData();
