import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
  name: "trip",
  initialState: {
    trips: {},
    selectedTrip: null,
    selectedTripForecast: null,
  },
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
    },
    setSelectedTripForecast: (state, action) => {
      state.selectedTripForecast = action.payload;
    },
  },
});

export const { addTrip, setSelectedTrip } = tripSlice.actions;
export const selectTrips = (state) => state.trip;
export const selectSelectedTrip = (state) => state.trip.selectedTrip;
export const selectSelectedTripForecast = (state) =>
  state.trip.selectedTripForecast;

export default tripSlice.reducer;
