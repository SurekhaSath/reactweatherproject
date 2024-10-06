import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setcity] = useState(props.defaultcity);
  function handleresponse(response) {
    console.log(response);
    setweatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconurl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function search() {
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=b437574c1146da7t8a94bof1824f6cc0&units=metric`;
    axios.get(apiurl).then(handleresponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setcity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}></WeatherInfo>
      </div>
    );
  } else {
    search();
    return <p>Loading..</p>;
  }
}
