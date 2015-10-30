var express = require('express');
var route = express.Router();

route.get('/getcompany', function(req, res){
  res.json([{name: 'employee1'}, {name: 'employee2'}]);
});

route.put('/updateCompany/:orderId', function(req, res){
  res.send('order updated successfully', orderId);
});
module.exports = route;
