import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Thursday</div>
            <div className="Forecast-icon">
              <WeatherIcon code="01d" size={36} />
            </div>
            <div className="Forecast-temperatures">
              <span className="Forecast-maximum">24°</span>
              <span className="Forecast-minimum">17°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3def0561d3e06af25dd72c96c23230ff";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
