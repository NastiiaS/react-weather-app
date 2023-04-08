import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">
            <h1 id="city">{props.data.city}</h1>
            <ul style={{ "list-style": "none" }}>
              <li id="dateMon">
                <FormattedDate date={props.data.date} />
              </li>

              <li id="description" className="text-capitalize">
                {props.data.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="d-flex weather-temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              id="icon"
              class="float-left"
            />
            <div class="float-left">
              <strong id="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span class="units"> °C</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <ul style={{ "list-style": "none" }}>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind"> {Math.round(props.data.wind)}</span> m/h
            </li>
          </ul>
        </div>
      </div>
      <div class="weather-forecast" id="forecast"></div>
    </div>
  );
}
