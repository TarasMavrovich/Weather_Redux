import React, { useRef } from "react";
import style from "./style.module.css";

const WeatherForecast = ({ forecast }) => {
  const horizontalScrollRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    horizontalScrollRef.current.scrollLeft += event.deltaY;
  };

  return (
    <div className={style.weather}>
      <h3>Week</h3>
      <div
        className={style.horizontalScroll}
        ref={horizontalScrollRef}
        onWheel={handleWheel}
      >
        <div className={style.forecast}>
          {forecast.days.map(
            ({ datetimeEpoch, datetime, icon, tempmax, tempmin }) => (
              <div key={datetimeEpoch} className={style.item}>
                <p>{datetime}</p>
                <img
                  alt={icon}
                  src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${icon}.png`}
                />
                <p>
                  {tempmax.toFixed()}°/
                  {tempmin.toFixed()}°
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
