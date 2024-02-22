import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import Trips from "./components/trips/trips";
import Search from "./components/search/search";
import style from "./style.css";
import WeatherDay from "./components/weatherDay/weatherDay";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <div
        style={{
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "1200px",
            display: "flex",
            height: "650px",
            margin: "20px auto",
          }}
        >
          <div className={style.rols} style={{ width: "70%" }}>
            <h1>Weather Forecast</h1>
            <Search />
            <Trips />
          </div>
          <WeatherDay />
        </div>
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
