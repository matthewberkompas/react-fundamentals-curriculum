const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;
const Main = require('../containers/Main');
const Home = require('../components/Home');
const ForecastContainer = require('../containers/ForecastContainer');
const WeatherDetailsContainer = require('../containers/WeatherDetailsContainer');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/forecast/:search' component={ForecastContainer}>
        <Route path='/details/:city' component={WeatherDetailsContainer} />
      </Route>
    </Route>
  </Router>
);

module.exports = routes;
