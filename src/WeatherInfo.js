import React from "react";
import FormattedDate from "./FormattedDate";
import ConvertTemperature from "./ConvertTemperature";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.name}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          Description: {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon data={props.data.icon} />
            </div>
            <div className="float-left">
              <ConvertTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          {" "}
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      <WeatherForecast data={props.data.icon} />
    </div>
  );
}
