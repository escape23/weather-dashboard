import axios from "axios";

const API_KEY = "956815f19e148a3871899b9c3134b32c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (location) => {
  // location can be "London" or "10001,us"
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: location,
      appid: API_KEY,
      units: "metric", // or 'imperial'
    },
  });
  return response.data;
};

export const fetchForecast = async (location) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: location,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};
