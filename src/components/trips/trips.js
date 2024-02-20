// Trips.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTrip,
  selectTrips,
  setSelectedTrip,
} from "../../reducers/tripSlice";
import TripList from "../tripList/tripList";
import CreateTripModal from "../createTrip/createTrip";

const Trips = () => {
  const dispatch = useDispatch();
  //   const trips = useSelector(selectTrips);

  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };

  const handleAddTrip = (newTrip) => {
    dispatch(addTrip(newTrip));
  };

  const handleSelectTrip = (selectedTrip) => {
    dispatch(setSelectedTrip(selectedTrip));
  };

  return (
    <div>
      {/* <TripList trips={trips} onSelectTrip={handleSelectTrip} /> */}
      <button onClick={handleShowModal}>
        <p>+</p>
        <p>Add Trip</p>
      </button>
      {modalVisible && (
        <CreateTripModal onAddTrip={handleAddTrip} onHide={handleHideModal} />
      )}
    </div>
  );
};

export default Trips;
