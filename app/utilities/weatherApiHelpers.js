const axios = require('axios');

const helpers = {
  // Gets FIVE DAY forecast
  getFiveDayForecast: function (location) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=143b157c46cd4da374cbb155d2a5c174&cnt=5`)
    .then(function (weather) {
      return weather.data;
    }).catch(function (err) {
        console.log('ERROR', err);
    })
  }

// Gets CURRENT(today's) forecast
  // getCurrentForecast: function (location) {
  //   return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=143b157c46cd4da374cbb155d2a5c174`)
  //     .then(function (weather) {
  //       return {
  //         main: weather.data.main,
  //         weather: weather.data.weather[0],
  //         locationName: weather.data.name,
  //       }
  //     }).catch(function (err) {
  //         console.log('ERROR', err);
  //     })
  // }
}

module.exports = helpers;
