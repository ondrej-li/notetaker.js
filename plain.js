var portNo = process.env.C9_PORT ? process.env.C9_PORT : process.env.PORT ? process.env.PORT : 80;
var address = process.env.C9_PORT || process.env.PORT ? "0.0.0.0" : "127.0.0.1";

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(portNo, address);
console.log('Server running at http://' + address + ":" + portNo);