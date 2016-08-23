const React = require('react');
const Router = require('react-router');

  // function spit(object) {
  //   return <pre>{JSON.stringify(object, null, ' ')}</pre>
  // }

function WeatherDetails (props) {
  return (
    <div>
      {console.log(props)}
      <h2>City Name</h2>
    </div>
  )
}


module.exports = WeatherDetails;
