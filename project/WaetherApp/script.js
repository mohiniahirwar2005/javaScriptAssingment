const apiKey = "038b0d5b83adb9cdaab0e11f16d40445";

document
  .getElementById("searchBtn")
  .addEventListener("click", getWeather);

function getWeather() {

  const city = document
    .getElementById("cityInput")
    .value
    .trim();

  if (city === "") {
    alert("Please Enter City Name");
    return;
  }

  // Geocoding API
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},IN&limit=5&appid=${apiKey}`
  )
    .then(response => response.json())

    .then(geoData => {

      if (!geoData || geoData.length === 0) {
        alert("City Not Found");
        return;
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;

      // Weather API
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
    })

    .then(response => {

      if (!response) return;

      return response.json();
    })

    .then(data => {

      if (!data) return;

      document
        .getElementById("weatherResult")
        .classList.remove("d-none");

      document.getElementById("city").innerText =
        data.name;

      document.getElementById("temp").innerText =
        `🌡 Temperature: ${data.main.temp} °C`;

      document.getElementById("humidity").innerText =
        `💧 Humidity: ${data.main.humidity}%`;

      document.getElementById("description").innerText =
        `☁ Weather: ${data.weather[0].description}`;

      document.getElementById("wind").innerText =
        `🌬 Wind Speed: ${data.wind.speed} m/s`;

      document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("icon").alt =
        data.weather[0].description;
    })

    .catch(error => {
      console.log(error);
      alert("Weather data load nahi ho paya.");
    });
}