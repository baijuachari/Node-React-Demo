var express = require('express');
var app = express();

var products = require('./products.js');
var orders = require('./orders.js');


app.use('/products', products);
app.use('/orders', orders);

app.listen(3000);
console.log('Server listening on port 3000.....');
