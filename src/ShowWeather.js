import React, { Component } from 'react';
import './ShowWeather.css';

class ShowWeather extends Component {

  constructor(props){
  super(props);
    this.state = {
      resultData: this.props.results
    }
  }

  render() {
    return (

    <div>
      <h1> Weather details of {this.props.results.name}</h1>
      <p>Humidity:  {this.props.results.main.humidity}</p>
      <p>Min Temp:  {this.props.results.main.temp_min}</p>
      <p>Max Temp:  {this.props.results.main.temp_max}</p>
      <p>Temperature:  {this.props.results.main.temp}</p>
      <p>Wind Speeds:  {this.props.results.wind.speed}</p>
      <p>Forecast:  {this.props.results.weather[0].description}</p>
    </div>
);
}
}

export default ShowWeather;
