//-----app.js-----------------

var express = require('express');
var app = express();

var casedata = require('./casedata.js');
var knex;

//middle ware
app.use(function(req, res, next){
	
	console.log("Request received at : ", new Date());
	var knex = require('knex')({
		client: 'pg',
		connection: {
		    host     : '127.0.0.1',
		    user     : 'postgres',
		    password : 'password',
		    database : 'meaniedemo'
		}
	});

  	next();
});

app.use('/casedata', casedata);

app.listen(3000);
console.log('Server listening on port 3000.....');
