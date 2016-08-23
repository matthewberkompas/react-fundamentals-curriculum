const React = require('react');
const utils = require('../helpers/utilities');
const getDate = utils.getDate;
const styles = require('../styles/index');
const Loading = require('./Loading');

function Day (props) {
  const icon = props.day.weather[0].icon;
  const date = getDate(props.day.dt);

  return (
    <div
      className='col-md-3'
      style={{marginBottom: '40px'}}>
      <div>
        <img src={`./app/images/weather-icons/${icon}.svg`} style={styles.iconStyles}/>
      </div>
      <h3 style={styles.text}>{date}</h3>
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div onClick={props.onClick}>
      <h1 style={styles.cityHeader}>{props.location.weather.city.name}</h1>
      <h2 style={{marginBottom: '75px', fontFamily: 'Courier new', textAlign: 'center'}}>Select a Day</h2>
      <div className='col-sm-10 col-sm-offset-1'
           style={{cursor: 'pointer'}}>
        {props.location.weather.list.map(function(day)
          { return <Day key={day.dt} day={day} /> }
        )}
      </div>
    </div>
  )
}

function Forecast (props) {
  return props.isLoading === true
  ? <Loading speed={400} text='Loading forecast' />
  : <ForecastUI
      location={props.location}
      onClick={props.onClick} />
}


module.exports = Forecast;
