import React from "react";

function Body() {
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
                <h1 id="city">Kyiv</h1>
                <ul style={{ "list-style": "none" }}>
                  <li id="dateMon">23 September</li>
                  <li id="time">17:39</li>
                  <li id="description"></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="d-flex weather-temperature">
                <img
                  src="http://openweathermap.org/img/wn/04n@2x.png"
                  alt="Clear"
                  id="icon"
                  class="float-left"
                />
                <div class="float-left">
                  <strong id="temperature">9</strong>
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
                  Wind: <span id="wind">9</span> m/h
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
}

export default Body;
