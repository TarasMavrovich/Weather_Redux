import React, { useEffect, useState } from "react";
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

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (selectedTrip) {
      const fetchTripOneDay = async () => {
        try {
          const { destination } = selectedTrip;
          const forecast = await checkOneDayWeather(destination);
          dispatch(setSelectedTripOndeDay(forecast));
        } catch (error) {
          console.error("Error fetching trip forecast: ", error);
        }
      };
      fetchTripOneDay();

      const calculateCountdown = () => {
        const currentDate = new Date();
        const startDate = new Date(selectedTrip.startDate);

        const timeDifference = startDate - currentDate;

        if (timeDifference > 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          setCountdown({ days, hours, minutes, seconds });
        } else {
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      };

      const intervalId = setInterval(calculateCountdown, 1000);

      return () => {
        clearInterval(intervalId);
      };
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
          <li>{countdown.days}</li>
          <li>DAYS</li>
        </ul>
        <ul>
          <li>{countdown.hours}</li>
          <li>HOURS</li>
        </ul>
        <ul>
          <li>{countdown.minutes}</li>
          <li>MINUTES</li>
        </ul>
        <ul>
          <li>{countdown.seconds}</li>
          <li>SECONDS</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherDay;
