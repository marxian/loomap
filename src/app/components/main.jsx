/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var Toggle = mui.Toggle;
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var LeftNav = require('./left-nav.jsx');

var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {

    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title="LooMap"
          zDepth={0}>
        </AppBar>
        <LeftNav ref="leftNav" />
        <RouteHandler />      
      </AppCanvas>
    );
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }
  
});

module.exports = Main;