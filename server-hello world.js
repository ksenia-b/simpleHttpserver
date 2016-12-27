/**
 * Created by Ксюша on 27.12.2016.
 */
var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 1489;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

server.listen(port);

console.log('>> Server is running');

var io = require('socket.io')(server,{});
io.sockets.on('connection', function(socket){
	socket.on('msg', function(data){
		console.log('chat'+data);
	});
});