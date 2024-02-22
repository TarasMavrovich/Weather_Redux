import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "../reducers/tripSlice";

export const store = configureStore({
  reducer: {
    trip: tripReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import tripReducer from "../reducers/tripSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import localStorage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage: localStorage,
// };

// const persistedReducer = persistReducer(persistConfig, tripReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultNormalizer) => {
//     return getDefaultNormalizer({
//       serializableMiddleware: false,
//     });
//   },
// });

// export const persistor = persistStore(store);
