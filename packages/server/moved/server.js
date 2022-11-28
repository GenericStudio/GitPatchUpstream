// A tiny node http server that serves the application
// and proxies the api calls to the api server

var http = require('http');
var httpProxy = require('http-proxy');
var connect = require('connect');
var serveStatic = require('serve-static');

var apiProxy = httpProxy.createProxyServer();
var app = connect();

// Serve static files
app.use(serveStatic(__dirname + '/dist'));

// Proxy to API server
app.use('/api', function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:3000' });
});

// Create node.js http server and listen on port
http.createServer(app).listen(8080);
