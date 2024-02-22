import React, { useEffect } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { checkOneDayWeather } from "../api/api";
import {
  selectOndeDay,
  selectSelectedTrip,
  setSelectedTripOndeDay,
} from "../../reducers/tripSlice";

const WeatherDay = () => {
  const dispatch = useDispatch();
  const selectedTrip = useSelector(selectSelectedTrip);
  const selectedTripOneDay = useSelector(selectOndeDay);

  useEffect(() => {
    if (selectedTrip) {
      const fetchTripOneDay = async () => {
        try {
          const { destination } = selectedTrip;
          console.log(destination);
          const forecast = await checkOneDayWeather(destination);
          console.log(forecast);
          dispatch(setSelectedTripOndeDay(forecast));
        } catch (error) {
          console.error("Error fetching trip forecast: ", error);
        }
      };
      fetchTripOneDay();
    }
  }, [dispatch, selectedTrip]);

  if (
    !selectedTripOneDay ||
    !selectedTripOneDay.days ||
    !selectedTripOneDay.days[0]
  ) {
    return null;
  }

  const { datetime, icon, temp } = selectedTripOneDay.days[0];

  const iconDay = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${icon}.png`;

  return (
    <div className={style.container}>
      <h1>Sunday</h1>
      <div className={style.center}>
        <div className={style.center_img}>
          <img src={iconDay} alt={icon} />
          <div>{temp.toFixed()}°C</div>
        </div>
        <div className={style.city}>{selectedTripOneDay.address}</div>
      </div>
      <div className={style.list}>
        <ul>
          <li>{datetime}</li>
          <li>DAYS</li>
        </ul>
        <ul>
          <li>15</li>
          <li>HOURS</li>
        </ul>
        <ul>
          <li>30</li>
          <li>MINUTES</li>
        </ul>
        <ul>
          <li>10</li>
          <li>SECONDS</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherDay;
