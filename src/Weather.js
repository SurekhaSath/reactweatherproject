import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setweatherData] = useState({ ready: false });
  function handleresponse(response) {
    console.log(response);
    setweatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Wed 7:00",
      description: response.data.condition.description,
      iconurl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=b437574c1146da7t8a94bof1824f6cc0&units=metric`;
  axios.get(apiurl).then(handleresponse);

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
          />
          <input
            type="Submit"
            value="Search"
            className="btn btn-primary"
          ></input>
        </form>
        <h1>{weatherData.city} </h1>
        <ul>
          <li>Wed 17:00</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-9">
            <img src={weatherData.iconurl} alt="current condition icon"></img>
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">C</span>
          </div>
          <div className="col-3">
            <ul>
              <li>Humidity:{weatherData.humidity}</li>
              <li>Wind:{weatherData.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading..</p>;
  }
}
