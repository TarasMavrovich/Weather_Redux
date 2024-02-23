export const trips =
  localStorage.getItem("tripItems") !== null
    ? JSON.parse(localStorage.getItem("tripItems"))
    : [];

export const selectedTrip =
  localStorage.getItem("selectedTrip") !== null
    ? JSON.parse(localStorage.getItem("selectedTrip"))
    : null;

export const selectedSearchTrip =
  localStorage.getItem("selectedSearchTrip") !== null
    ? JSON.parse(localStorage.getItem("selectedSearchTrip"))
    : null;

export const selectedTripOneDay =
  localStorage.getItem("selectedTripOneDay") !== null
    ? JSON.parse(localStorage.getItem("selectedTripOneDay"))
    : null;

export const selectedTripForecast =
  localStorage.getItem("selectedTripForecast") !== null
    ? JSON.parse(localStorage.getItem("selectedTripForecast"))
    : null;

export const setItemFunc = (
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
