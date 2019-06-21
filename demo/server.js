var express = require('express');
var app = express();
var http = require('http').Server(app);

// Serve static files
// Configure App
// app.use('/demos', express.static('demos'));

var jiff_instance = require('../jiff/lib/jiff-server').make_jiff(http, { logs:true });
var compute_instance = jiff_instance.compute('demo');

var computation = require('./computation.js');
computation.compute(compute_instance);

// Serve static files.
http.listen(8080, function () {
  console.log('listening on *:8080');
});

console.log('Direct your browser to *:8080/demos/sum/client.html.');
console.log('To run a node.js based party: node demos/sum/party <input>');
console.log();
