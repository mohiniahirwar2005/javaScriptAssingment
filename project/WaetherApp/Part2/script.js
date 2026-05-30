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

  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
  )

    .then(function(response) {
      return response.json();
    })

    .then(function(geoData) {

      if (geoData.length === 0) {
        alert("City Not Found");
        return;
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;

      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
    })

    .then(function(response) {

      if (!response) {
        return;
      }

      return response.json();
    })

    .then(function(data) {

      if (!data) {
        return;
      }

      document
        .getElementById("weatherResult")
        .classList.remove("d-none");

      document.getElementById("city").innerText =
        data.name;

      document.getElementById("temp").innerText =
        "🌡 Temperature: " +
        data.main.temp +
        " °C";

      document.getElementById("description").innerText =
        "☁ Weather: " +
        data.weather[0].description;

      document.getElementById("humidity").innerText =
        "💧 Humidity: " +
        data.main.humidity +
        "%";

      document.getElementById("wind").innerText =
        "🌬 Wind Speed: " +
        data.wind.speed +
        " m/s";

      document.getElementById("icon").src =
        "https://openweathermap.org/img/wn/" +
        data.weather[0].icon +
        "@2x.png";
    })

    .catch(function(error) {
      console.log(error);
      alert("Something Went Wrong");
    });
}