const API = "5f8bd5df4a8f994029aefd3fa0b2efe6",
  currentWeatherItemsEl = document.getElementById("current-weather"),
  timeZoneEL = document.getElementById("time-zone"),
  countryEL = document.getElementById("country"),
  weeklyForcastEl = document.getElementById("weekly-forcast"),
  currentTempEl = document.getElementById("current-temp"),
  inputField = document.querySelector("input"),
  loactionBtn = document.querySelector("button"),
  textError = document.querySelector(".error-text"),
  errContainer = document.querySelector(".error-container"),
  container = document.querySelector(".container"),
  weatherIcon = document.querySelector(".icon"),
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",],
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
let api;
inputField.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && inputField.value != "") {
    requestApi(inputField.value);
  }
});
function requestApi(city) {
  console.log(city);
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=7&appid=${API}`;
  fetchData();
}
loactionBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser does not support geoloaction api");
  }
});
function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&units=metric&appid=${API}`;
  fetchData();
}
function onError(error) {
  textError.innerText = error.message;
  textError.classList.add("error");
}
function fetchData() {
  textError.innerText = "Getting weather info. Please wait...";
  textError.classList.add("wait");
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));
}
function weatherDetails(info) {
  textError.classList.replace("wait", "error");
  if (info.cod == "404") {
    textError.innerText = `"${inputField.value}" isn't a valid city name`;
  } else {
    const city = info.name,
      timezone = info.timezone,
      { country } = info.sys,
      { description, icon } = info.weather[0],
      { humidity, temp, temp_max, temp_min } = info.main, speed = info.wind;
      console.log(city)
    container.querySelector(".place .time-zone").innerText = city;
    container.querySelector(".place .country").innerText = country;
    container.querySelector("#min-temp").innerText = temp_min;
    container.querySelector("#max_temp"), (innerText = temp_max);
    container.querySelector("#humidity"), (innerText = humidity);
    container.querySelector("#wind-speed"), (innerText = speed);
    container.querySelector(".weather-condition-container .description").innerText = description;
    container.querySelector(".weather-condition-container .condition span").innerText = temp;
   

    let iconImg = document.createElement("img");
    iconImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    iconImg.alt = "weather-icon";
    weatherIcon.appendChild(iconImg);
    textError.classList.remove("wait", "error");
    container.classList.add("active");
    console.log(info);
    console.log(timezone);
    function dispalyTime() {
      let utcHours = timezone / 360 / 10;
      const d = new Date();
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const getTime = utc + 3600000 * utcHours;
      const getTimeNow = new Date(getTime);
      const hrs = getTimeNow.getHours();
      const min = getTimeNow.getMinutes();
      const month = getTimeNow.getMonth();
      const date = getTimeNow.getDate();
      const day = getTimeNow.getDay();
      document.getElementById("day").innerHTML = days[day];
      document.getElementById("month").innerHTML = months[month];
      document.getElementById("date-today").innerHTML = date;
      if (min < 10) {
        document.getElementById("minutes").innerHTML = "0" + min;
      } else {
        document.getElementById("minutes").innerHTML = min;
      }

      if (hrs < 10) {
        document.getElementById("hours").innerHTML = "0" + hrs;
      } else {
        document.getElementById("hours").innerHTML = hrs;
      }
    }
    setInterval(dispalyTime, 100);
  }

}

