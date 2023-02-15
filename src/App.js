import React, { Component } from 'react'
import "./App.css"
import Location from "./components/Location"

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      canvasWidth: 360*3,
      canvasHeight: 180*3,
    };
    const getLocation = () => {
      fetch('http://api.open-notify.org/iss-now.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({latitude: data.iss_position.latitude,
                       longitude: data.iss_position.longitude});
      });
    }
    const getLocationRegularly = () => {
      setInterval(getLocation, 1000);
    };
    getLocationRegularly();
  }

  render() {
    return(
      <div className='tc' id="main_title">
        <h1 className='f1 tc yellow'>The Location of the International Satellite</h1>
        <Location longitude={this.state.longitude} latitude={this.state.latitude} 
                  canvasWidth={this.state.canvasWidth} canvasHeight={this.state.canvasHeight} />
      </div>
    )
  }
}

export default App;
