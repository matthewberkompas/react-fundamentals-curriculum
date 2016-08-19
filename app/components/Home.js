const React = require('react');
const styles = require('../styles/index');
const GetWeatherContainer = require('../containers/GetWeatherContainer');

const Home = React.createClass({
  render: function() {
    return (
      <div style={styles.backgroundCoverImage}>
        <GetWeatherContainer />
      </div>
    )
  }
});

module.exports = Home;
