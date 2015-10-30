var React = require('react');
var Griddle = require('griddle-react');

module.exports = React.createClass({

	render: function() {
		return(
			<div className="baijuHeader">
				<div>
					<h1> Meanie App Development</h1>
				</div>
				<div>
					<ul className="nav nav-pills">
						<li role="presentation" className="active"><a href="/home"><span className="glyphicon glyphicon-star" aria-hidden="true"></span></a></li>
						<li role="presentation"><a href="/settings"><span className="glyphicon glyphicon-cloud" aria-hidden="true"></span></a></li>
						<li role="presentation"><a href="/cases"><span className="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span></a></li>
						<li role="presentation"><a href="/caselists"><span className="glyphicon glyphicon glyphicon-euro" aria-hidden="true"></span></a></li>
					</ul>
				</div>
			</div>
		);
	}		
});