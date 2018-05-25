import React, { Component } from 'react';
import './App.css';
import DateTime from 'react-datetime'
import axios from 'axios'
import ShowWeather from './ShowWeather'

class App extends Component {
  constructor(){
    super()
    this.state = {
        username: "Type your name here",
        showUserName: false,
        show: false,
        resultData: {},
        date: '',
        city: ''
      }

  }

  _handleChange( event ){
    this.setState({
      username: event.target.value,
      showUserName: false
  })
  }//_handleChange

  _handleSubmit( event ){
    var date = new Date().getDate();
    console.log(date);
    this.setState({
      showUserName: true,
      date: date
    })
  }//_handleSubmit

  _fetchData( event ){
    this.setState({
      city: event.target.value
    })


  }//_fetchData


    _showData( event ){
      let result = {};
      // Make a request for a user with a given ID

// api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=xxxxxxxxxxx`)
      .then( result => this.setState({ resultData: result.data, show: true }) )
      .catch(function (error) {
        console.log('Error',error);
      });
      console.log('here is the result*********', result);


    }//_showData


  render() {
    return (
      <div className="App">
        <h1> Weather App </h1>
        <p> Please Type in your name below: </p>
        <input type="text" placeholder="Enter your name" onChange={this._handleChange.bind(this)}></input>
        <button type="submit" onClick={this._handleSubmit.bind(this)}>Submit</button>

        <h3> Welcome {this.state.showUserName ? this.state.username : 'Guest User' }</h3>

        <input type="text" placeholder="Enter City name" onChange={this._fetchData.bind(this)}></input>
        <button type="submit" onClick={this._showData.bind(this)}>Enter the city name</button>

        { this.state.show ? <ShowWeather results={this.state.resultData}/> : '....' }

        </div>
    );
  }
}

export default App;
