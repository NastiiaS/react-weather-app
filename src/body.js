import React, { useState } from "react";
import axios from "axios";

function Body() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Wednesday 07:00",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/04n@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="body">
        <body>
          <div className="weatherbody">
            <form id="search-form">
              <div className="form-group fg--search">
                <input
                  type="text"
                  placeholder="Enter your city"
                  id="search-city-input"
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>

            <div className="WeatherInfo">
              <div className="row">
                <div className="col-6">
                  <h1 id="city">{weatherData.city}</h1>
                  <ul style={{ "list-style": "none" }}>
                    <li id="dateMon">{weatherData.date}</li>
                    <li id="time">17:39</li>
                    <li id="description" className="text-capitalize">
                      {weatherData.description}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="d-flex weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    id="icon"
                    class="float-left"
                  />
                  <div class="float-left">
                    <strong id="temperature">
                      {Math.round(weatherData.temperature)}
                    </strong>
                    <span class="units"> °C</span>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <ul style={{ "list-style": "none" }}>
                  <li>
                    Humidity: <span id="humidity">20</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherData.wind}</span> m/h
                  </li>
                </ul>
              </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>

            <small id="open-source">
              <a href="https://github.com/NastiiaS/new-project">
                Open-source code,
              </a>
              by Anastasiia Salenko
            </small>
          </div>
        </body>
      </div>
    );
  } else {
    const apiKey = "daf11acdf17cf256d0449be959aa2959";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

export default Body;
