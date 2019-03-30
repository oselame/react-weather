import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import GoogleMap from './GoogleMap';

class WeatherList extends Component {

  renderWeather(cityData) {
    const { name } = cityData.city;
    const { lat, lon } = cityData.city.coord;

    const temps = cityData.list.map(weather => weather.main.temp);
    const presures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
            <GoogleMap lat={lat} lng={lon} name={name} />
        </td>
        <td>
          <Chart data={temps} color="red" units="K" />
        </td>
        <td>
          <Chart data={presures} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
      </tr>
    )
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (k)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }     
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);