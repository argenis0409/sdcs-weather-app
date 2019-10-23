import moment from 'moment';

const defaultState = {
  search: '',
  name: {},
  history: [],
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CITY_SEARCH': {
      return {
        ...state,
        city: payload
      };
    }

    case 'GET_WEATHER_INFO_FULFILLED': {
      return {
        ...state,
        name: payload.data,

        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        temp_min: payload.data.main.temp_min,
        temp_max: payload.data.main.temp_max,
        wind: payload.data.wind.speed,

        history: [...state.history, [payload.data.name, moment().format('MMMM Do YYYY, h:mm:ss a')]]
      };
    }

    default: {
      return state;
    }
  }
}
