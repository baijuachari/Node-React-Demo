var express = require('express');
var app = express();
//var pg = require('pg');

var knex = require('knex')({
		client: 'pg',
		connection: {
	    host     : '127.0.0.1',
	    user     : 'postgres',
	    password : 'password',
	    database : 'baijudemo'
	}
});

var conString = "postgres://postgres:password@localhost/baijudemo";

var queryString = knex.select('id', 'name', 'address').from('baijuschema.employees');

app.all('/*', function (req, res, next) {
  console.log('Accessing all the secret section ...');
  next(); // pass control to the next handler
});
 
app.get('/', function (req, res) {
  res.send('Hello World')
});
 
app.get('/employee', function (req, res) {	

	
	//var employee_list = [];
	knex('baijuschema.employees').select('id', 'name', 'address').then(function(rows){	
		//employee_list.push(row);
		console.log("==============");
		console.log(rows);
		console.log("==============");
		res.status(200).json(rows);
	});  
});

app.listen(3000);
console.log('MyServer is listening on http://localhost:3000.....');