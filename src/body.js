import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

function Body(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "daf11acdf17cf256d0449be959aa2959";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="body">
        <body>
          <div className="weatherbody">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="form-group fg--search">
                <input
                  type="text"
                  placeholder="Enter your city"
                  id="search-city-input"
                  onChange={handleCityChange}
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
            <WeatherInfo data={weatherData} />

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
    search();
    return "Loading...";
  }
}

export default Body;
