// Feature 1
let dateElement = document.querySelector("#date");
let now = new Date();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  ,
];
day = days[now.getDay()];
let date = now.getDate();
let month = now.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
month = months[now.getMonth()];
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
dateElement.innerHTML = `${day} ${date} ${month} ${year} <br /> ${hour}:${minutes}`;

//In your project, when a user searches for a city (example: New York), it
// should display the name of the city on the result page and the current
// temperature of the city.

function showTemp(response) {
  let temperature = document.querySelector("#temp");
  let currentTemp = Math.round(response.data.main.temp);
  temperature.innerHTML = `${currentTemp}`;
}

function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("#currentCity");
  let cityInput = document.querySelector("#searchInput");
  h1.innerHTML = searchInput.value;
  let apiKey = "04e480f984b14d3f0dbf5d951987bdf6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", search);

//Bonus Feature
//Add a Current Location button. When clicking on it, it uses the
//Geolocation API to get your GPS coordinates and display and the
//city and current temperature using the OpenWeather API.
