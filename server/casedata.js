//--------------employee.js------

var express = require('express');
var route = express.Router();


route.get('/:caseId', function(req, res){
	console.log(req.params.resourceId);
  	res.send('The ID that you passed is ' +req.params.caseId);
});

route.get('/', function (req, res) {	

	knex('meaniets.case').select('fldr_num', 'case_num', 'cossn','fnm','mnm','lnm').then(function(rows){	
		console.log("==============");
		console.log(rows);
		console.log("==============");
		res.status(200).json(rows);
	});  
	console.log('reached here.....');
	res.status(200).json({name: 'baiju - to test'});

});
module.exports = route;
