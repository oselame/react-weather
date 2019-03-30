import React, { Component } from 'react';

import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
            <SearchBar />
            <WeatherList />
      </div>
    );
  }
}

export default App;
