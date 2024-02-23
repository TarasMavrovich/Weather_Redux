import React, { useRef } from "react";
import style from "./style.module.css";

const formatDateTime = (datetime) => {
  const dateObj = new Date(datetime);
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(dateObj);
  return dayOfWeek;
};

const WeatherForecast = ({ forecast }) => {
  const horizontalScrollRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    horizontalScrollRef.current.scrollLeft += event.deltaY;
  };

  if (!forecast || !forecast.days) {
    return null;
  }

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
                <p>{formatDateTime(datetime)}</p>
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
