// TripList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTrips, setSelectedTrip } from "../../reducers/tripSlice";
import TripItem from "../item/item";

const TripList = () => {
  const dispatch = useDispatch();
  const trips = useSelector(selectTrips);

  const handleSelectTrip = (trip) => {
    dispatch(setSelectedTrip(trip));
  };

  return (
    <div>
      <h2>Trip List</h2>
      {trips.map((trip) => (
        <TripItem key={trip.id} trip={trip} onSelectTrip={handleSelectTrip} />
      ))}
    </div>
  );
};

export default TripList;
