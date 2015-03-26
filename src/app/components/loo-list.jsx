var React = require('react');
var mui = require('material-ui');
var Loo = require('./loo.jsx');

var LooList = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {

    return (
    	<div className="mui-app-content-canvas">
	      <ul>
	      	<li>
	      		<Loo />
			</li>
			<li>
	      		<Loo />
			</li>
	      </ul>
	    </div>
    );
  }
  
});

module.exports = LooList;