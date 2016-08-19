const React = require('react');
const GetWeather = require('../components/GetWeather');

const GetWeatherContainer = React.createClass({
  getInitialState: function () {
    return {
      location: ''
    }
  },

  handleSubmitLocation: function () {
    const location = this.state.location;
    this.setState({
      location: ''
    })
    console.log(location);
  },

  handleUpdateLocation: function (event) {
    // console.log(event.target.value);
    this.setState({ location: event.target.value });
  },

  render: function () {
    return (
      <GetWeather
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}
        location={this.state.location} />
    )
  }
})

module.exports = GetWeatherContainer;
