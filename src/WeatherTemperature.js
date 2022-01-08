import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="convertButton">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheitTemperature = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheitTemperature)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius} className="convertButton">
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
