import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';


function mapStoreToProps(store) {
    return {
        name: store.search.name,
        lon: store.search.lon,
        lat: store.search.lat,
        temp: store.search.temp,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        temp_min: store.search.temp_min,
        temp_max: store.search.temp_max,
        wind: store.search.wind
    };
}

export default connect(mapStoreToProps)(WeatherInfo);