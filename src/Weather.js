import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>{" "}
        </div>
      </form>
      <h1>Brisbane</h1>
      <ul>
        <li>Wednesday 10:00am</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-8">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"
          />
          <span className="temperature">25</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation: 50%</li>
            <li>Humidity: 70%</li>
            <li>13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
