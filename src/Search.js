import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showDetails(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = `894e4351564af1e154dfd159576448c5`;
    let unit = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`;
    axios.get(url).then(showDetails);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <h1>City</h1>
        <ul>
          <li>Day, time</li>
          <li>Description: {weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />
            <p>Description: {weather.description}</p>
          </div>
          <div className="col-6">
            {" "}
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}°C</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
