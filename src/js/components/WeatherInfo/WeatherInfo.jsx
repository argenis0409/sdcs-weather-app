import React, { Component } from 'react';

class WeatherInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, lat, lon, temp, pressure, humidity, temp_min, temp_max, wind } = this.props;
        return (
            <div className="col-12 col-md-6 mb-4">
                <div className='card text-center' >
                    <h5 className='card-header alert alert-primary'>City Information</h5>
                    <div className='card-body'>

                        <h4>{name.name &&
                            <img src={`http://openweathermap.org/img/w/${name.weather[0].icon}.png`}
                                alt='Weather icon'
                                className='weather-icon' />}{name.name}</h4>


                        <p className='text-success'>Lon/Lat:{lon}, {lat}</p>
                        <hr className='bg-success' />

                        <div className='row'>
                            <div className='card-body'>
                                <h5>Temperature(F)</h5>
                                <p className='card-text text-success'>{temp}F</p>
                            </div>

                            <div className='card-body'>
                                <h5>Pressure</h5>
                                <p className='card-text text-success'>{pressure}inHg</p>
                            </div>

                            <div className='card-body'>
                                <h5>Humidity</h5>
                                <p className='card-text text-success'>{humidity}%</p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='card-body'>
                                <h5>Lowest Temp(F)</h5>
                                <p className='card-text text-success'>{temp_min}F</p>
                            </div>

                            <div className='card-body'>
                                <h5>Highest Temp(F)</h5>
                                <p className='card-text text-success'>{temp_max}F</p>
                            </div>

                            <div className='card-body'>
                                <h5>Wind Speed</h5>
                                <p className='card-text text-success'>{wind}mph</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default WeatherInfo;