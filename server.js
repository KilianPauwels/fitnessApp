var path = require('path');
var express = require('express');
var logger = require('morgan');
var portnumber = 4000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(portnumber);
console.log('listening on port ' + portnumber);