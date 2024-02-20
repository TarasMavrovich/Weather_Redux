// Trips.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTrip,
  selectTrips,
  setSelectedTrip,
  selectSelectedTrip,
  selectSelectedTripForecast,
} from "../../reducers/tripSlice";
import TripList from "../tripList/tripList";
import CreateTripModal from "../createTrip/createTrip";
import style from "./style.module.css";
import { checkWeather } from "../api/api";
import WeatherForecast from "../weatherWeek/weatherWeek";

const Trips = () => {
  const dispatch = useDispatch();
  //   const trips = useSelector(selectTrips);
  //   const selectedTrip = useSelector(selectSelectedTrip);
  //   const selectedTripForecast = useSelector(selectSelectedTripForecast);
  const [modalVisible, setModalVisible] = useState(false);

  //   useEffect(() => {
  //     const fetchTripForecast = async () => {
  //       if (selectedTrip) {
  //         try {
  //           const { destination, startDate, endDate } = selectedTrip;
  //           const forecast = await checkWeather(destination, startDate, endDate);
  //           dispatch(setSelectedTripForecast(forecast));
  //         } catch (error) {
  //           console.error("Error fetching trip forecast: ", error);
  //         }
  //       }
  //     };

  //     fetchTripForecast();
  //   }, [dispatch, selectedTrip]);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };

  const handleAddTrip = (newTrip) => {
    console.log(dispatch(addTrip(newTrip)));
    dispatch(addTrip(newTrip));
  };

  const handleSelectTrip = (selectedTrip) => {
    dispatch(setSelectedTrip(selectedTrip));
  };

  return (
    <div>
      {/* <TripList trips={trips} onSelectTrip={handleSelectTrip} /> */}
      <button className={style.button} onClick={handleShowModal}>
        <p style={{ fontSize: "20px" }}>+</p>
        <p>Add Trip</p>
      </button>
      {modalVisible && (
        <CreateTripModal onAddTrip={handleAddTrip} onHide={handleHideModal} />
      )}
      {/* {selectedTrip && <WeatherForecast forecast={selectedTripForecast} />} */}
    </div>
  );
};

export default Trips;
