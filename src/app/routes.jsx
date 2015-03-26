var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Main = require('./components/main.jsx');
var LooList = require('./components/loo-list.jsx')
var Preferences = require('./components/preferences.jsx')

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>
    <Route name="loolist" path="/loos" handler={LooList}/>
    <Route name="preferences" path="/preferences" handler={Preferences}/>
    <DefaultRoute handler={LooList}/>
  </Route>
);

module.exports = AppRoutes;
