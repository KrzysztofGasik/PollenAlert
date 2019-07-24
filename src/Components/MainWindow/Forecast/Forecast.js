import React, { Component } from "react";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      long: "",
      pollenData: [],
      show: false,
      error: false
    };
  }

  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude.toFixed(2);
      const longitude = position.coords.longitude.toFixed(2);
      this.setState(
        {
          lat: latitude,
          long: longitude
        },
        () => {
          if (this.state.lat != "" && this.state.long != "") {
            this.getWeather(this.state.lat, this.state.long);
          }
        }
      );
    });
  };

  getWeather = (lat, long) => {
    fetch(
      `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${long}&key=c8fdd7c73bd04b69858b41aaaaa4e2d1&features=types_information,plants_information&days=1`
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data.data[0].plants);
        const Cxx = data.data[0].plants;
        for (let iterator of Cxx) {
          console.log(iterator)
        }


        this.setState({
          pollenData: data.data[0].plants,
          show: !this.state.show
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Error - no pollen data, please try again</h1>
          <button className="btn__weather" onClick={this.getCoordinates}>
            Check pollen at your destination
          </button>
        </div>
      );
    }
    return (
      <>
        <h2 className="home">Forecast</h2>
        <button className="btn__weather" onClick={this.getCoordinates}>
          {this.state.show
            ? "Hide pollen forecast"
            : "Check pollen at your destination"}
        </button>
        {this.state.show && 
          
          "XXX"
      }
      </>
    );
  }

};

export { Forecast };