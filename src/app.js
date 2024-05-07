

function updateWeather(response){
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city")
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
}

function changeCity(city){
let apiKey = "00c99d472fbddtac3e3b2d017a4afdbo";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}units=metric`;
console.log(apiUrl)
 axios.get(apiUrl).then(updateWeather); 
}

function handleSearchSubmit(event){
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  changeCity(searchInput.value);

}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);

changeCity("Johannesburg");
