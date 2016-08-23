const React = require('react');
const WeatherDetails = require('../components/WeatherDetails');

const WeatherDetailsContainer = React.createClass({

  render: function () {
    return (
      <div>
        {console.log()}
        <WeatherDetails />
      </div>
    )
  }
})

module.exports = WeatherDetailsContainer;
