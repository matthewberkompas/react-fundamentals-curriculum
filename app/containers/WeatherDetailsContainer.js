const React = require('react');
const WeatherDetails = require('../components/WeatherDetails');

const WeatherDetailsContainer = React.createClass({
  render: function () {
    return (
      <div>
        <WeatherDetails info={this.props.location.query}/>
      </div>
    )
  }
})

module.exports = WeatherDetailsContainer;
