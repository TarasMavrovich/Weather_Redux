import { configureStore } from "@reduxjs/toolkit";
import { tripSlice } from "../reducers/tripSlice";

export const store = configureStore({
  reducer: {
    trip: tripSlice,
  },
});
