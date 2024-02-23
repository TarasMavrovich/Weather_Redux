import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTrip,
  selectSelectedTrip,
  setSelectedTripForecast,
} from "../../reducers/tripSlice";
import TripList from "../tripList/tripList";
import CreateTripModal from "../createTrip/createTrip";
import style from "./style.module.css";
import { checkWeather } from "../api/api";
import Button from "../Button/button";

const Trips = () => {
  const dispatch = useDispatch();
  const selectedTrip = useSelector(selectSelectedTrip);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedTrip) {
      const fetchTripForecast = async () => {
        try {
          const { destination, startDate, endDate } = selectedTrip;
          const forecast = await checkWeather(destination, startDate, endDate);
          dispatch(setSelectedTripForecast(forecast));
        } catch (error) {
          console.error("Error fetching trip forecast: ", error);
          setError(error.message || "An error occurred while fetching data");
        } finally {
          setLoading(false);
        }
      };
      fetchTripForecast();
    }
  }, [dispatch, selectedTrip]);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };

  const handleAddTrip = (newTrip) => {
    dispatch(addTrip(newTrip));
  };

  return (
    <div className={style.trips}>
      <div className={style.trip_list}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && <TripList />}
        <Button handleShowModal={handleShowModal} />
        {modalVisible && (
          <CreateTripModal onAddTrip={handleAddTrip} onHide={handleHideModal} />
        )}
      </div>
    </div>
  );
};

export default Trips;
