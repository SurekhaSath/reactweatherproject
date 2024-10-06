import React from "react";
import FormatDate from "./FormatDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city} </h1>
      <ul>
        <li>
          <FormatDate date={props.data.date}></FormatDate>
        </li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-9">
          <img src={props.data.iconurl}></img>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <ul>
            <li>Humidity:{props.data.humidity}</li>
            <li>Wind:{props.data.wind}km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
