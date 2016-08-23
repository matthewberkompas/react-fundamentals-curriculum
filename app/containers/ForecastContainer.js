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

  handleDayClick: function (index) {
    console.log("HANDLEDAYCLICK", index);
    console.log(this.props);
    this.context.router.push({
      pathname: `${this.props.location.pathname}/details/${index}`
    })
  },

  render: function () {
    return (
      <div>
        <Forecast
          isLoading={this.state.isLoading}
          location={this.state.location}
          onDayClick={this.handleDayClick}/>
      </div>
    )
  }
})

module.exports = ForecastContainer;
