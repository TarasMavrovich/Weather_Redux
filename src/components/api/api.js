const api = {
  key: process.env.REACT_APP_API,
  base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
};

async function checkWeather(city, firstDate, lastDate) {
  const response = await fetch(
    `${api.base}/${city}/${firstDate}/${lastDate}?unitGroup=metric&include=days&key=${api.key}&contentType=json`
  );
  const data = await response.json();

  return data;
}

async function checkOneDayWeather(city) {
  const response = await fetch(
    `${api.base}/${city}/today?unitGroup=metric&include=days&key=${api.key}&contentType=json`
  );
  const data = await response.json();

  return data;
}

export { checkWeather, checkOneDayWeather };
