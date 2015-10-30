var express = require('express');
var app = express();
var pg = require('pg');
var conString = "postgres://postgres:password@localhost/baijudemo";
var queryString = "select * from baijuschema.employees";



app.all('/*', function (req, res, next) {
  console.log('Accessing all the secret section ...');
  next(); // pass control to the next handler
});
 
app.get('/', function (req, res) {
  res.send('Hello World')
});
 
app.get('/employee', function (req, res) {	

	pg.connect(conString, function(err, client, done){
		if (err) {
			console.log("Error in connecting to database...");
			return;
		}
		client.query(queryString, function(err, result){
			if (err) {console.log('Error in executing query...'); return;}
			//console.log(result);
			res.status(200).json(result);

		});

		console.log("Successfully connected...");
	});
	
	//res.status(200).json([{name: 'myserver-employee1'}, {name: 'myserver-employee2'}]);
  
});

app.listen(3000);
console.log('MyServer is listening on http://localhost:3000.....');