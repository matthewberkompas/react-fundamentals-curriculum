const React = require('react');
const Day = require('../components/Day');

const DayContainer = React.createClass({
  render: function(props) {
    return (
      <div>
        {props.location.weather.list.map(function(day){ return <Day key={day.dt} day={day} /> })}
      </div>
    )
  }
});

module.exports = DayContainer;
