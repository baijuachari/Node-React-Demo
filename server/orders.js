var express = require('express');
var route = express.Router();

//middle ware
route.use(function(req, res, next){
  console.log("Request received at : ", new Date());
  next();
});

route.get('/', function(req, res){
  res.send('root path of orders....');
});

route.get('/getOrder', function(req, res){
  res.json([{name: 'order1'}, {name: 'order2'}]);
});

module.exports = route;
