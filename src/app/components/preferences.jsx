var React = require('react');
var mui = require('material-ui');

var Preferences = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {

    return (
    	<div className="mui-app-content-canvas">
	      Preferences
	    </div>
    );
  }
  
});

module.exports = Preferences;