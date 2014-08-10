var http = require('http');
//var gzippo = require('gzippo');
var express = require('express');
//var logger = require('morgan');
var app = express();

//app.use(logger('dev'));
//app.use(gzippo.staticGzip('' + __dirname + '/dist'));
var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
