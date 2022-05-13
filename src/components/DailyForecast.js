import React from "react";

export default function DailyForecast() {
  return (
    <div>
      <div id="banner">
        <p className="currentWeather">Chicago</p>
        <p className="currentWeather">
          --
          <span className="currentWeather">--</span>
        </p>
        <p className="currentWeather">
          weather status
          <img src="#" alt="Weather Status Icon"></img>
        </p>
        <p className="currentWeather">temp</p>
        <p className="currentWeather">humidity</p>
        <p className="currentWeather">wind</p>
      </div>
    </div>
  );
}
