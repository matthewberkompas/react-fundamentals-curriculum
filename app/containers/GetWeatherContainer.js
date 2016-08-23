const React = require('react');
const weatherApiHelpers = require('../utilities/weatherApiHelpers');
const GetWeather = require('../components/GetWeather');

const GetWeatherContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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

    this.context.router.push({
      pathname: `/forecast/${location}`
    })
  },

  handleUpdateLocation: function (event) {
    this.setState({ location: event.target.value });
  },

  render: function () {
    return (
      <GetWeather
        onUpdateLocation={this.handleUpdateLocation}
        onSubmitLocation={this.handleSubmitLocation}
        location={this.state.location} />
    )
  }
})

module.exports = GetWeatherContainer;
