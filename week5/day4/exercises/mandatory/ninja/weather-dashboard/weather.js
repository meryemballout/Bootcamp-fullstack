// weather.js
const axios = require('axios');
const chalk = require('chalk');

const API_KEY = '1234'; // Remplace avec ta vraie clé API

async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          lang: 'fr'
        }
      }
    );

    const data = response.data;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const country = data.sys.country;

    console.log(chalk.blue.bold(`📍 ${city}, ${country}`));
    console.log(chalk.yellow(`🌡️ Température : ${temp}°C`));
    console.log(chalk.green(`🌤️ Description : ${description}`));
  } catch (error) {
    console.error(chalk.red(`❌ Erreur : ${error.response?.data?.message || error.message}`));
  }
}

module.exports = getWeather;
