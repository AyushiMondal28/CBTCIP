const weatherForm = document.getElementById('weatherInfo');
const cityInput = document.getElementById('cityInput');
const weatherResults = document.getElementById('weatherResult');
const btn=document.getElementById('btn');

const API_KEY = '4ddbae85aa34f3df490d6e81001fa1ce'; // Replace with your API key

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    const weatherData = await response.json();
    showWeather(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherResults.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
  }
}

function showWeather(data) {
  const cityName = data.name;
  const country = data.sys.country;
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  weatherResults.style.display="block";
  weatherResults.innerHTML = `
    <h2>${cityName}, ${country}</h2>
    <p><strong>Temperature:</strong> ${temperature} &deg;C</p>
    <p><strong>Description:</strong> ${description}</p>
  `;
}
