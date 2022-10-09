/*GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city*/
var cities = document.getElementById("city-search");
var forecastEl = document.getElementById("forecast");
var searchBtn = document.getElementById("searchCityBtn");
var inputEl = document.querySelector(".custom-input");
var today = document.querySelector(".custom-today");
var tomorrow = document.getElementById("tomorrow");
var twoDaysOut = document.getElementById("twoDaysOut");
var threeDaysOut = document.getElementById("threeDaysOut");
var fourDaysOut = document.getElementById("fourDaysOut");
var fiveDaysOut = document.getElementById("fiveDaysOut");
var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=" + inputEl.value.trim() + "&limit=5&appid=c7da76dff8b1bd8f228c32b1196cf664"
var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=32.715736&lon=-117.161087&limit=5&appid=c7da76dff8b1bd8f228c32b1196cf664";

//client types in city as input

//write listen to SearchCityBtn
function test(){
    console.log(geoCode)
}

// write function transfering city into lon lat coordinates
function receiveLatLon(){
    fetch (geoCode)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })
            }

//write function fetches correct information
function receiveWeatherData(){
    
fetch(weatherUrl)
      .then(function(response){
          console.log(response)
          return response.json()
        })
        .then(function(data){
            console.log(data)
            
        })
            }
//write function that creates tags, texts content onto tags and appends onto parent
//function 
function displayWeatherInfo(data){
    //today.textContent = inputEl.value //<---information for today goes here
    forecastEl.append(today);

    var fiveDayTitle = document.createElement("h3");
    forecastEl.append(fiveDayTitle);
    fiveDayTitle.classList = "custom-five";
    fiveDayTitle.textContent = "5 Day Forecast:";

    var fiveDayRow = document.createElement("div");
    fiveDayRow.classList = "row row-cols-1 custom-nextFiveRow";
    forecastEl.append(fiveDayRow);
    console.log(data)
   
}

//save info to local storage




//create button with saved city


//attach listener to button to call back local storage items
searchBtn.addEventListener("click", receiveLatLon);


//function test(){

//}