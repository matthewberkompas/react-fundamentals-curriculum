const React = require('react');
const Forecast = require('../components/Forecast');
const weatherApiHelpers = require('../utilities/weatherApiHelpers');

const ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      isLoading: true,
      location: {},
    }
  },

  componentDidMount: function () {
    weatherApiHelpers.getFiveDayForecast(this.props.params.search)
      .then(function (weather) {
        this.setState({
          isLoading: false,
          location: {weather}
        })
      }.bind(this));
  },

  handleClick: function () {
    this.setState({
      location: this.state.location
    })

    const city = this.state.location.weather.city.name;
    this.context.router.push({
      pathname: `/details/${city}`
    })
  },

  render: function () {
    return (
      <div>
        <Forecast
          isLoading={this.state.isLoading}
          location={this.state.location}
          onClick={this.handleClick}/>
      </div>
    )
  }
})

module.exports = ForecastContainer;
