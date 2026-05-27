const citySelect = document.getElementById("city-select");
const weatherBtn = document.getElementById("get-weather-btn");

const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationElement = document.getElementById("location");

// Fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

// Display weather data
async function showWeather(city) {

  const data = await getWeather(city);

  // Handle errors
  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  const weather = data.weather?.[0] || {};
  const main = data.main || {};
  const windData = data.wind || {};

  weatherIcon.src = weather.icon || "";
  weatherIcon.alt = weather.main || "Weather Icon";

  weatherMain.textContent = weather.main || "N/A";

  locationElement.textContent = data.name || "N/A";

  mainTemperature.textContent =
    `Temperature: ${
      main.temp !== undefined ? main.temp + " °C" : "N/A"
    }`;

  feelsLike.textContent =
    `Feels Like: ${
      main.feels_like !== undefined
        ? main.feels_like + " °C"
        : "N/A"
    }`;

  humidity.textContent =
    `Humidity: ${
      main.humidity !== undefined
        ? main.humidity + "%"
        : "N/A"
    }`;

  wind.textContent =
    `Wind Speed: ${
      windData.speed !== undefined
        ? windData.speed + " m/s"
        : "N/A"
    }`;

  windGust.textContent =
    `Wind Gust: ${
      windData.gust !== undefined
        ? windData.gust + " m/s"
        : "N/A"
    }`;
}

// Button event
weatherBtn.addEventListener("click", () => {

  const city = citySelect.value;

  // Do nothing if empty
  if (!city) {
    return;
  }

  showWeather(city);
});
