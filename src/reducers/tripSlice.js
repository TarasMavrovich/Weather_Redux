import { createSelector, createSlice } from "@reduxjs/toolkit";

const trips =
  localStorage.getItem("tripItems") !== null
    ? JSON.parse(localStorage.getItem("tripItems"))
    : [];

const selectedTrip =
  localStorage.getItem("selectedTrip") !== null
    ? JSON.parse(localStorage.getItem("selectedTrip"))
    : null;

const selectedSearchTrip =
  localStorage.getItem("selectedSearchTrip") !== null
    ? JSON.parse(localStorage.getItem("selectedSearchTrip"))
    : null;

const selectedTripOneDay =
  localStorage.getItem("selectedTripOneDay") !== null
    ? JSON.parse(localStorage.getItem("selectedTripOneDay"))
    : null;

const selectedTripForecast =
  localStorage.getItem("selectedTripForecast") !== null
    ? JSON.parse(localStorage.getItem("selectedTripForecast"))
    : null;

const setItemFunc = (
  trip,
  selectedTrip,
  selectedSearchTrip,
  selectedTripOneDay,
  selectedTripForecast
) => {
  localStorage.setItem("tripItems", JSON.stringify(trip));
  localStorage.setItem("selectedTrip", JSON.stringify(selectedTrip));
  localStorage.setItem(
    "selectedSearchTrip",
    JSON.stringify(selectedSearchTrip)
  );
  localStorage.setItem(
    "selectedTripOneDay",
    JSON.stringify(selectedTripOneDay)
  );
  localStorage.setItem(
    "selectedTripForecast",
    JSON.stringify(selectedTripForecast)
  );
};

// const mockTrip = {
//   id: Date.now(),
//   destination: "Tokyo",
//   startDate: "2024-01-01",
//   endDate: "2024-01-02",
// };

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
      setItemFunc(
        state.trips,
        state.selectedTrip,
        state.selectedSearchTrip,
        state.selectedTripOneDay,
        state.selectedTripForecast
      );
    },
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
      setItemFunc(
        state.trips,
        state.selectedTrip,
        state.selectedSearchTrip,
        state.selectedTripOneDay,
        state.selectedTripForecast
      );
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
