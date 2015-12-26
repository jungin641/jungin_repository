var fs = require('fs');
var http = require('http');
var socket = require('socket.io');

var server = http.createServer(function (request, response) {

	fs.readFile('chat.html', 'utf8', function (error, data) {
	
		response.writeHead(200, { 'Content-Type' : 'text/html' });
		response.end(data);
	});
});


var io = socket.listen(server.listen(8080));
io.sockets.on('connection', function (socket) {

	socket.on('message', function (message) {
	
		io.sockets.emit('message', message);
	});
});