function changeCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
  
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${searchInput.value}`;
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", changeCity);
  
  let now = new Date();
  
  let h2 = document.querySelector("h2");
  
  let date = now.getDate();
  
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[now.getDay()];
  
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  
  let month = months[now.getMonth()];
  
  h2.innerHTML = `${day} ${month} ${date}`;
  
  function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  
  function search(event) {
    event.preventDefault();
    let apiKey = "992d7235141d10f80430a5d56ab46aad";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
  }
  