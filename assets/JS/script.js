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
var historyClickers = document.getElementById("history");
var historyArr = [];
var inputEl = document.querySelector(".custom-input");
var today = document.querySelector(".custom-today");
var tomorrow = document.getElementById("tomorrow");
var twoDaysOut = document.getElementById("twoDaysOut");
var threeDaysOut = document.getElementById("threeDaysOut");
var fourDaysOut = document.getElementById("fourDaysOut");
var fiveDaysOut = document.getElementById("fiveDaysOut");
var currentDate = moment().format("MM/DD/YYYY");
var datePlusOne = moment().add(1,'day').format("MM/DD/YYYY");
var datePlusTwo = moment().add(2,'day').format("MM/DD/YYYY");
var datePlusThree = moment().add(3,'day').format("MM/DD/YYYY");
var datePlusFour = moment().add(4,'day').format("MM/DD/YYYY");
var datePlusFive = moment().add(5,'day').format("MM/DD/YYYY");
var geoCode;



//client types in city as input
//write listen to SearchCityBtn

// write function transfering city into lon lat coordinates
function receiveLatLon(){
    geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=" + inputEl.value.trim() + "&limit=5&appid=c7da76dff8b1bd8f228c32b1196cf664";
    fetch (geoCode)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            lat = data[0].lat
            console.log(lat);
            lon = data[0].lon
        })
            }

//write function fetches correct information
function receiveWeatherData(){
    desiredCity = inputEl.value.trim()
    geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=" + desiredCity + "&limit=5&appid=c7da76dff8b1bd8f228c32b1196cf664";
    fetch (geoCode)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            //console.log(data)
            lat = data[0].lat
            //console.log(lat);
            lon = data[0].lon
        })
            .then(function(){
                weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&limit=5&appid=c7da76dff8b1bd8f228c32b1196cf664";
                fetch(weatherUrl)
                    .then(function(response){
                        //console.log(response)
                            return response.json()
                             })
                            .then(function(data){
                         console.log(data)
                         console.log(data.city.name)
                         cityName = data.city.name
                         todayIcon = data.list[0].weather[0].icon;
                         todayIconUrl = "http://openweathermap.org/img/w/" + todayIcon + ".png";
                         todayTemp = data.list[0].main.temp;
                         todayWind = data.list[0].wind.speed;
                         todayHumidity = data.list[0].main.humidity;
                         tomorrowIcon = data.list[7].weather[0].icon;
                         tomorrowIconUrl = "http://openweathermap.org/img/w/" + tomorrowIcon + ".png";
                         tomorrowTemp = data.list[7].main.temp;
                         tomorrowWind = data.list[7].wind.speed;
                         tomorrowHumidity = data.list[7].main.humidity;
                         dayPlus2Icon = data.list[14].weather[0].icon;
                         plus2IconUrl = "http://openweathermap.org/img/w/" + dayPlus2Icon + ".png";
                         dayPlus2Temp = data.list[14].main.temp;
                         dayPlus2Wind = data.list[14].wind.speed;
                         dayPlus2Humidity = data.list[14].main.humidity;
                         dayPlus3Icon = data.list[23].weather[0].icon;
                         plus3IconUrl = "http://openweathermap.org/img/w/" + dayPlus3Icon + ".png";
                         dayPlus3Temp = data.list[23].main.temp;
                         dayPlus3Wind = data.list[23].wind.speed;
                         dayPlus3Humidity = data.list[23].main.humidity;
                         dayPlus4Icon = data.list[31].weather[0].icon;
                         plus4IconUrl = "http://openweathermap.org/img/w/" + dayPlus4Icon + ".png";
                         dayPlus4Temp = data.list[31].main.temp;
                         dayPlus4Wind = data.list[31].wind.speed;
                         dayPlus4Humidity = data.list[31].main.humidity;
                         dayPlus5Icon = data.list[39].weather[0].icon;
                         plus5IconUrl = "http://openweathermap.org/img/w/" + dayPlus5Icon + ".png";
                         dayPlus5Temp = data.list[39].main.temp;
                         dayPlus5Wind = data.list[39].wind.speed;
                         dayPlus5Humidity = data.list[39].main.humidity;
                         
                         
                         displayWeatherInfo();


                         })
                                    })
                                }
//write function that creates tags, texts content onto tags and appends onto parent
//function 
function displayWeatherInfo(){
    //today.textContent = inputEl.value //<---information for today goes here
    var todayTitle = document.createElement("h2");
    today.append(todayTitle);
    todayTitle.textContent = cityName + " " + "(" + currentDate + ")";
    var dailyIcon1 = document.createElement("img");
    today.append(dailyIcon1);
    dailyIcon1.setAttribute("src", todayIconUrl);
    var todayTempEl = document.createElement("div");
    todayTitle.append(todayTempEl);
    todayTempEl.textContent = "Temp: " + todayTemp + " °F";
    var todayWindEl = document.createElement("div");
    todayTitle.append(todayWindEl);
    todayWindEl.textContent = "Wind: " + todayWind + " MPH";
    var todayHumidityEl = document.createElement("div");
    todayTitle.append(todayHumidityEl);
    todayHumidityEl.textContent = "Humidity: " + todayHumidity + " %";
    
    var tomDate = document.createElement("h5");
    tomorrow.append(tomDate);
    tomDate.textContent = datePlusOne;
    var dailyIcon2 = document.createElement("img");
    tomorrow.append(dailyIcon2);
    dailyIcon2.setAttribute("src", tomorrowIconUrl);
    var tomTempEl = document.createElement("p");
    tomorrow.append(tomTempEl);
    tomTempEl.textContent = "Temp: " + tomorrowTemp + " °F";
    var tomWindEl = document.createElement("p");
    tomorrow.append(tomWindEl);
    tomWindEl.textContent = "Wind: " + tomorrowWind + " MPH";
    var tomHumidityEl = document.createElement("p");
    tomorrow.append(tomHumidityEl);
    tomHumidityEl.textContent = "Humidity: " + tomorrowHumidity + " %";

    var thirdDayEl = document.createElement("h5");
    twoDaysOut.append(thirdDayEl);
    thirdDayEl.textContent = datePlusTwo;
    var dailyIcon3 = document.createElement("img");
    twoDaysOut.append(dailyIcon3);
    dailyIcon3.setAttribute("src", plus2IconUrl);
    var thirdTempEl = document.createElement("p");
    twoDaysOut.append(thirdTempEl);
    thirdTempEl.textContent = "Temp: " + dayPlus2Temp + " °F";
    var thirdWindEl = document.createElement("p");
    twoDaysOut.append(thirdWindEl);
    thirdWindEl.textContent = "Wind: " + dayPlus2Wind + " MPH";
    var thirdHumidityEl = document.createElement("p");
    twoDaysOut.append(thirdHumidityEl);
    thirdHumidityEl.textContent = "Humidity: " + dayPlus2Humidity + " %";
    
    var fourthDayEl = document.createElement("h5");
    threeDaysOut.append(fourthDayEl);
    fourthDayEl.textContent = datePlusThree;
    var dailyIcon4 = document.createElement("img");
    threeDaysOut.append(dailyIcon4);
    dailyIcon4.setAttribute("src", plus3IconUrl);
    var fourthTempEl = document.createElement("p");
    threeDaysOut.append(fourthTempEl);
    fourthTempEl.textContent = "Temp: " + dayPlus3Temp + " °F";
    var fourthWindEl = document.createElement("p");
    threeDaysOut.append(fourthWindEl);
    fourthWindEl.textContent = "Wind: " + dayPlus3Wind + " MPH";
    var fourthHumidityEl = document.createElement("p");
    threeDaysOut.append(fourthHumidityEl);
    fourthHumidityEl.textContent = "Humidity: " + dayPlus3Humidity + " %";
    
    var fifthDayEl = document.createElement("h5");
    fourDaysOut.append(fifthDayEl);
    fifthDayEl.textContent = datePlusFour;
    var dailyIcon5 = document.createElement("img");
    fourDaysOut.append(dailyIcon5);
    dailyIcon5.setAttribute("src", plus4IconUrl);
    var fifthTempEl = document.createElement("p");
    fourDaysOut.append(fifthTempEl);
    fifthTempEl.textContent = "Temp: " + dayPlus4Temp + " °F";
    var fifthWindEl = document.createElement("p");
    fourDaysOut.append(fifthWindEl);
    fifthWindEl.textContent = "Wind: " + dayPlus4Wind + " MPH";
    var fifthHumidityEl = document.createElement("p");
    fourDaysOut.append(fifthHumidityEl);
    fifthHumidityEl.textContent = "Humidity: " + dayPlus4Humidity + " %";
    
    var finalDayEl = document.createElement("h5");
    fiveDaysOut.append(finalDayEl);
    finalDayEl.textContent = datePlusFive;
    var dailyIcon5 = document.createElement("img");
    fiveDaysOut.append(dailyIcon5);
    dailyIcon5.setAttribute("src", plus5IconUrl);
    var finalTempEl = document.createElement("p");
    fiveDaysOut.append(finalTempEl);
    finalTempEl.textContent = "Temp: " + dayPlus5Temp + " °F";
    var finalWindEl = document.createElement("p");
    fiveDaysOut.append(finalWindEl);
    finalWindEl.textContent = "Wind: " + dayPlus5Wind + " MPH";
    var finalHumidityEl = document.createElement("p");
    fiveDaysOut.append(finalHumidityEl);
    finalHumidityEl.textContent = "Humidity: " + dayPlus5Humidity + " %";
    
    historyBtn()
    saveResults()
    /*forecastEl.append(today);
    

    var fiveDayTitle = document.createElement("h3");
    forecastEl.append(fiveDayTitle);
    fiveDayTitle.classList = "custom-five";
    fiveDayTitle.textContent = "5 Day Forecast:";

    var fiveDayRow = document.createElement("div");
    fiveDayRow.classList = "row row-cols-1 custom-nextFiveRow";
    forecastEl.append(fiveDayRow);
    console.log(data)*/
   console.log(inputEl.value)
}

function historyBtn(){
    var historyBtn = document.createElement("button");
    cities.appendChild(historyBtn);
    historyBtn.setAttribute("id", "history-Btn")
    historyBtn.textContent = inputEl.value.trim()
    historyArr.push(inputEl.value);
    localStorage.setItem(inputEl.value, JSON.stringify(inputEl.value));
    historyBtn.addEventListener("click", )
}
//save info to local storage




//create button with saved city


//attach listener to button to call back local storage items
searchBtn.addEventListener("click", receiveWeatherData)
       
        


//function test(){

//}