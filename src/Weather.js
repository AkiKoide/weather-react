import React from "react";
import Search from "./Search.js";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 15,
    date: "Sunday 14:00",
    description: "Few clouds",
    imgUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    humidity: 65,
    wind: 2,
  };

  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <div className="Weather">
          <Search />

          <hr />
          <div className="row">
            <div className="col-6">
              <h1 className="city-name">{weatherData.city}</h1>
            </div>
            <div className="col-6">
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
            </div>
            <hr />

            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperatire">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    id="icon"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong className={weatherData.temperature}></strong>
                    <span className="units">
                      <h1 className="temperature">{weatherData.temperature}</h1>
                      °C
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul className="humidity-wind">
                  <li>
                    Humidity: <span>{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{weatherData.wind}</span>km/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/AkiKoide/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source codes
        </a>
        by Aki Koide
      </small>
    </div>
  );
}
