var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require("path")
app.use(express.static("public"))

io.on("connect", socket => {
	console.log("new connection")
	socket.on('line', data => {
		io.sockets.emit('newLine',data)
	})	
	socket.on('clear', data => {
		io.sockets.emit('clear',data)
	})	
})


app.get("/", (req,res) => {
	res.sendFile(path.join(__dirname,"/pages/index.html"))
})

server.listen(3000, () => console.log("Server on 3000 bruh"))
