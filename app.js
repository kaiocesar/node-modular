var http = require('http')
	, db = require('./config/db')
	, Controller = require('./controller');

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});

	var url = req.url;
	var method = req.method;

	console.log('URL: ', url);
	console.log('METHOD: ', method);

	if (url === '/beers/retrieve' && method === 'GET') {
		Controller.retrieve(req, res);
	} else {
		res.end('Route not found');
	}

}).listen(3000);

console.log('Server running at http://localhost:3000');