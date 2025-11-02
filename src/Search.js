import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import WeatherInfo from "./WeatherInfo";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showDetails(response) {
    setLoaded(true);
    setWeather({
      name: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const key = `a2ab500f41eaff40b9aat33a8a92f8ao`;
    let unit = `metric`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${unit}`;
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
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <button type="Submit" className="btn btn-primary w-100">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="weather-wrap">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
