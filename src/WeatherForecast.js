import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <WeatherIcon data={props.data} />
          </div>
          <div className="forecast-temps">
            <span className="forecast-maxtemp">19°C</span>
            <span className="forecast-mintemp">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
