var express = require('express');
var route = express.Router();


route.get('/getOrder', function(req, res){
  res.json([{name: 'order1'}, {name: 'order2'}]);
});

route.put('/updateOrder/:orderId', function(req, res){
  res.send('order updated successfully');
});
module.exports = route;
