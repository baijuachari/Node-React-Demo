var React = require('react');
var Griddle = require('griddle-react');
var Header = require('./header');
var AppBody = require('./appbody');
var options = {
		title: "React Class",
		number: "12",
		imageUrl: "my URL",
		description: "Sample Desscription",
		heading: "my Heading"
};	


var MainApp = React.createClass({
	render: function() {
		return(
			<div>
				<Header />
				<AppBody />
			</div>
		);
	}		
});


var element = React.createElement(MainApp);
React.render(element, document.querySelector('.mainApp'));