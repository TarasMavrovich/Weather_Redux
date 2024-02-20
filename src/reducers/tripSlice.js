import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
  name: "trip",
  initialState: {
    trips: [],
    selectedTrip: null,
  },
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
    },
  },
});

export const { addTrip, setSelectedTrip } = tripSlice.actions;
export const selectTrips = (state) => state.trip.trips;
export const selectSelectedTrip = (state) => state.trip.selectedTrip;

export default tripSlice.reducer;
