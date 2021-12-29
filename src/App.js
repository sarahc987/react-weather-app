import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brisbane" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/sarah-cox-127b6b134/"
            target="_blank"
            rel="noreferrer"
          >
            Sarah Cox
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sarahc987/react-weather-app/commit/899d05c9578dea499338f27128e192939185aff3"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
