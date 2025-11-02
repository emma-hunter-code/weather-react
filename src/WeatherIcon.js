import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img src={props.data} alt="Weather Icon" />
    </div>
  );
}
