import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  trips,
  selectedTrip,
  selectedSearchTrip,
  selectedTripOneDay,
  selectedTripForecast,
  setItemFunc,
} from "../components/storage/localStorage";

const mockTrip = {
  id: Date.now(),
  destination: "Tokyo",
  startDate: "2024-01-01",
  endDate: "2024-01-02",
};

export const tripSlice = createSlice({
  name: "trip",
  initialState: {
    trips: trips,
    selectedTrip: selectedTrip,
    selectedSearchTrip: selectedSearchTrip,
    selectedTripOneDay: selectedTripOneDay,
    selectedTripForecast: selectedTripForecast,
  },

  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
    },
    setSelectedSearchTrip: (state, action) => {
      state.selectedSearchTrip = action.payload;
      setItemFunc(
        state.trips,
        state.selectedTrip,
        state.selectedSearchTrip,
        state.selectedTripOneDay,
        state.selectedTripForecast
      );
    },
    setSelectedTripOndeDay: (state, action) => {
      state.selectedTripOneDay = action.payload;
      setItemFunc(
        state.trips,
        state.selectedTrip,
        state.selectedSearchTrip,
        state.selectedTripOneDay,
        state.selectedTripForecast
      );
    },
    setSelectedTripForecast: (state, action) => {
      state.selectedTripForecast = action.payload;
      setItemFunc(
        state.trips,
        state.selectedTrip,
        state.selectedSearchTrip,
        state.selectedTripOneDay,
        state.selectedTripForecast
      );
    },
  },
});

export const {
  addTrip,
  setSelectedTrip,
  setSelectedSearchTrip,
  setSelectedTripOndeDay,
  setSelectedTripForecast,
} = tripSlice.actions;
export const selectTrips = (state) => state.trip.trips;
export const selectSelectedTrip = (state) => state.trip.selectedTrip;
export const selectSelectedSearchTrip = (state) =>
  state.trip.selectedSearchTrip;
export const selectSelectedTripOneDay = (state) =>
  state.trip.selectedTripOneDay;
export const selectSelectedTripForecast = (state) =>
  state.trip.selectedTripForecast;

export const selectForecast = createSelector(
  [selectSelectedTripForecast],
  (forecast) => forecast
);

export const selectOndeDay = createSelector(
  [selectSelectedTripOneDay],
  (forecast) => forecast
);

export default tripSlice.reducer;
