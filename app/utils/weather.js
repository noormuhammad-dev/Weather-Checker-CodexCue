import axios from "axios";

const API_KEY = "6ae1f9df62c44fab9ec134145240507";

export const getForecast = async (city) => {
  const res =
    await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=8&aqi=no&alerts=no
    `);
    
  return res.data;
};

export const getSearchRecommendation = async (searchQuery) => {
  const res =
    await axios.get(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${searchQuery}
  `);

  return res.data;
};
