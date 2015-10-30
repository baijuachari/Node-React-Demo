var express = require('express');
var route = express.Router();

//middle ware
route.use(function(req, res, next){
  console.log("Request received at : ", new Date());
  next();
});

route.get('/', function(req, res){
  res.json({name: 'product1'}, {name: 'product2'});
});

module.exports = route;
