import { Provider } from "react-redux";
import { store } from "./store/store";
import Trips from "./components/trips/trips";
import Search from "./components/search/search";

function App() {
  console.log({ store });
  return (
    <Provider store={store}>
      <div className="App">
        <div>Weather Forecast</div>
        <Search onSearchTrip={(Search) => console.log(Search)} />
        <Trips />
      </div>
    </Provider>
  );
}

export default App;
