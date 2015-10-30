var express = require('express');
var app = express();

app.all('/*', function (req, res, next) {
  console.log('Accessing all the secret section ...');
  next(); // pass control to the next handler
});
 
app.get('/', function (req, res) {
  res.send('Hello World')
});
 
app.get('/employee', function (req, res) {	
	
	res.status(200).json([{name: 'myserver-employee1'}, {name: 'myserver-employee2'}]);
  
});

app.listen(3000);
console.log('MyServer is listening on http://localhost:3000.....');