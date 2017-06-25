//eventually this will be driven off of node.js and mongo, for now, I'll get the prototype up using json instead
var express = require('express')
var app = express();
var bp = require('body-parser');
var mg = require('mongoose');

app.use(express.static(__dirname + '/app'))
app.use('/scripts', express.static(__dirname + '/node_modules'))


var server = app.listen(5000, function(){
  console.log('listening on port 5000')
});