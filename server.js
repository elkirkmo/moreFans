//eventually this will be driven off of node.js and mongo, for now, I'll get the prototype up using json instead
var express = require('express')
var app = express();
var bp = require('body-parser');
var mg = require('mongoose');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'))
app.use('/scripts', express.static(__dirname + '/node_modules'))
app.use('/data', express.static(__dirname + '/data'))

var server = app.listen(app.get('port'), function(){
  console.log('listening on port ', app.get('port'))
});