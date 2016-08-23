const React = require('react');
const styles = require('../styles/index');
const utils = require('../helpers/utilities');

  // function spit(object) {
  //   return <pre>{JSON.stringify(object, null, ' ')}</pre>
  // }

function WeatherDetails (props) {
  const date = utils.getDate(props.info.date);
  const icon = props.info.icon;
  const city = props.info.city;
  const description = props.info.description;
  const minTemp = Math.round(utils.convertTemp(props.info.min));
  const maxTemp = Math.round(utils.convertTemp(props.info.max));
  const humidity = `${props.info.humidity}%`;

  return (
    <div className='col-md-4 col-md-offset-4' style={{textAlign: 'center'}}>
      <img src={`./app/images/weather-icons/${icon}.svg`} style={styles.iconStyles} />
      <h1 style={{fontFamily: 'Courier new', marginBottom: '40px'}}>{date}</h1>

      <h2 style={{margin: '15px', fontFamily: 'Courier'}}>{city}</h2>
      <h3 style={{fontFamily: 'Courier new', fontSize: '24px'}}>{description}</h3>
      <ul style={{padding: '0'}}>
        <li style={{fontFamily: 'Courier new', fontSize: '24px', listStyle: 'none'}}>minTemp: {minTemp}</li>
        <li style={{fontFamily: 'Courier new', fontSize: '24px', listStyle: 'none'}}>maxTemp: {maxTemp}</li>
        <li style={{fontFamily: 'Courier new', fontSize: '24px', listStyle: 'none'}}>humidity: {humidity}</li>
      </ul>
    </div>
  )
}


module.exports = WeatherDetails;
