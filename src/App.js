import { Provider } from "react-redux";
import { store } from "./store/store";
import Trips from "./components/trips/trips";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>Weather Forecast</div>
        <Trips />
      </div>
    </Provider>
  );
}

export default App;
