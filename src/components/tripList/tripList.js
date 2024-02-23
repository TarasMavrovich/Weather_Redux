import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectForecast,
  selectSelectedSearchTrip,
  selectSelectedTrip,
  selectTrips,
  setSelectedTrip,
} from "../../reducers/tripSlice";
import TripItem from "../item/item";
import style from "./style.module.css";
import WeatherForecast from "../weatherWeek/weatherWeek";

const TripList = () => {
  const dispatch = useDispatch();
  const trips = useSelector(selectTrips);
  const search = useSelector(selectSelectedSearchTrip) || "";
  const selectedTrip = useSelector(selectSelectedTrip);
  const selectedTripForecast = useSelector(selectForecast);

  const handleSelectTrip = (trip) => {
    dispatch(setSelectedTrip(trip));
  };

  const filteredTrips = trips.filter((trip) =>
    trip.destination.toLowerCase().includes(search.toLowerCase())
  );

  const horizontalScrollRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    horizontalScrollRef.current.scrollLeft += event.deltaY;
  };

  return (
    <div className={style.trip_list}>
      <div
        className={style.horizontalScroll}
        ref={horizontalScrollRef}
        onWheel={handleWheel}
      >
        {!search ? (
          <div className={style.trips}>
            {trips.map((trip) => (
              <TripItem
                key={trip.id}
                trip={trip}
                onSelectTrip={handleSelectTrip}
              />
            ))}
          </div>
        ) : (
          <div className={style.trips}>
            {filteredTrips.map((trip) => (
              <TripItem
                key={trip.id}
                trip={trip}
                onSelectTrip={handleSelectTrip}
              />
            ))}
          </div>
        )}
      </div>
      {selectedTrip && <WeatherForecast forecast={selectedTripForecast} />}
    </div>
  );
};

export default TripList;
