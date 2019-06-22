import React from 'react';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Origin Weather Application</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>

        <Search />
        <br />

        <div className='row'>
          <WeatherInfo />
          <History />
        </div>
      </div>
    );
  }
}
