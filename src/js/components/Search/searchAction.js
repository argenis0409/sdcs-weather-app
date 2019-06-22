import axios from 'axios';



export function getWeatherInfo(city) {
  return {
    type: 'GET_WEATHER_INFO',
    payload: axios.get(`/weather/${city}`)
  }
}

export function updateCitySearch(city) {
  return {
    type: 'UPDATE_CITY_SEARCH',
    payload: city

  };
}