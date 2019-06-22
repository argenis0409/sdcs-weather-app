import React from 'react';
import { updateCitySearch } from './searchAction';
import { getWeatherInfo } from './searchAction';

export default class Search extends React.Component {
    constructor(props) {
        super(props);


        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleCityInfo = this.handleCityInfo.bind(this);
    }
    handleInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCitySearch(value));
    }

    handleSearch() {
        const { city, dispatch } = this.props;
        dispatch(getWeatherInfo(city));
    }

    handleCityInfo(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const { value } = event.target.dataset;
        dispatch(getWeatherInfo(value));
    }

    render() {
        const { value } = this.props;
        return (
            <form className='col-md-12'>
                <div className="row">
                    <div className='btn-group'>
                        <button className='btn btn-primary' data-value='San Diego' onClick={this.handleCityInfo}>San Diego</button>
                        <button className='btn btn-primary' data-value='New York' onClick={this.handleCityInfo}>New York</button>
                        <button className='btn btn-primary' data-value='Washington DC.' onClick={this.handleCityInfo}>Washington D.C.</button>
                        <button className='btn btn-primary' data-value='London' onClick={this.handleCityInfo}>London</button>
                        <button className='btn btn-primary' data-value='Tokyo' onClick={this.handleCityInfo}>Tokyo</button>
                    </div>
                </div>

                <div className="row">
                    <input
                        type='text'
                        className='form-control col-sm-11'
                        placeholder='type city you wish to search'
                        value={value}
                        onChange={this.handleInput} />

                    <button className='go col-sm-1' type='button' onClick={this.handleSearch}>Go!</button>
                </div>
            </form>
        );
    }

}