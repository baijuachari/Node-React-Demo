var React = require('react');
var Griddle = require('griddle-react');
module.exports = React.createClass({

    getInitialState: function() {
        return { d: []};
    },

     componentDidMount: function() {
        $.ajax(
            {url: 'http://localhost:3000/cases', 
                success: function(data) {
                    this.setState({d: data}); 
                }.bind(this)
            }
        );
    },

	render: function(){

        console.log({this.state.d});
        
      return <Griddle 
        results={this.state.d} 
        resultsPerPage={this.state.externalResultsPerPage} 
        externalSortColumn={this.state.externalSortColumn} 
        externalSortAscending={this.state.externalSortAscending}
        showFilter={true} showSettings={true} />
    }
	
});
