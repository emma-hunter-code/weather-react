import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <WeatherIcon data={props.data.condition.icon_url} />
      </div>
      <div className="forecast-temps">
        <span className="forecast-maxtemp">{maxTemp()}</span>
        <span className="forecast-mintemp">{minTemp()}</span>
      </div>
    </div>
  );
}
