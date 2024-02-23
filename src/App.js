import { Provider } from "react-redux";
import { store } from "./store/store";
import Trips from "./components/trips/trips";
import Search from "./components/search/search";
import style from "./style.css";
import WeatherDay from "./components/weatherDay/weatherDay";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
