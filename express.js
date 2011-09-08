var portNo = process.env.C9_PORT ? process.env.C9_PORT : (process.env.PORT ? process.env.PORT : 80);
var address = process.env.C9_PORT || process.env.PORT ? "0.0.0.0" : "127.0.0.1";

var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(portNo);