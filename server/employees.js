//--------------employee.js------

var express = require('express');
var route = express.Router();


route.get('/:resourceId', function(req, res){
	console.log(req.params.resourceId);
  	res.send('The ID that you passed is ' +req.params.resourceId);
});

route.get('/', function (req, res) {	

	knex('baijuschema.employees').select('id', 'name', 'address').then(function(rows){	
		//employee_list.push(row);
		console.log("==============");
		console.log(rows);
		console.log("==============");
		res.status(200).json(rows);
	});  
	console.log('reached here.....');
	res.status(200).json({name: 'baiju - to test'});

});
module.exports = route;
