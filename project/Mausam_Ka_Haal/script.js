// API Key
const apiKey = "ebf5692cda366499b230e31cee1101ca";

// Button
const weatherBtn =
  document.getElementById("weatherBtn");

// Event
weatherBtn.addEventListener(
  "click",
  getWeather
);

async function getWeather() {

  const city = document
    .getElementById("city")
    .value
    .trim();

  const weatherResult =
    document.getElementById("weatherResult");

  if (city === "") {

    weatherResult.innerHTML = `
      <p class="error">
        Please enter city name
      </p>
    `;

    return;
  }

  try {

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response =
      await fetch(url);

    const data =
      await response.json();

    console.log(data);

    if (data.cod != 200) {

      weatherResult.innerHTML = `
        <p class="error">
          City not found
        </p>
      `;

      return;
    }

    weatherResult.innerHTML = `
      <h3>${data.name}</h3>

      <img
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        class="weather-icon"
      />

      <div class="temp">
        ${data.main.temp}°C
      </div>

      <p>
        ${data.weather[0].description}
      </p>

      <p>
        💧 Humidity:
        ${data.main.humidity}%
      </p>

      <p>
        🌬 Wind Speed:
        ${data.wind.speed} km/h
      </p>
    `;

  } catch (error) {

    console.log(error);

    weatherResult.innerHTML = `
      <p class="error">
        Something went wrong
      </p>
    `;
  }
}