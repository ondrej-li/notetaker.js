var portNo = process.env.C9_PORT;
var address = "0.0.0.0";
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(portNo, address);
console.log('Server running at http://' + address + ":" + portNo);