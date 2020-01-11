document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
var socket = io();
socket.on("newLine", data => {
	console.log("hi")
	if (data.query == location.search) {
		line(data.mouseX, data.mouseY, data.pmouseX, data.pmouseY);
	}
})
socket.on("clear", (data)=> {
	if (data.query == location.search) {
		clear();
	}
})
var setup = () => {
	var canvas = createCanvas(500, 500);
	canvas.parent("canvas")
}
var draw = () => {
	if (mouseIsPressed) {
		socket.emit('line',{"query":location.search,"mouseX":mouseX,"mouseY":mouseY,"pmouseX":pmouseX,"pmouseY":pmouseY})
	}
}
document.getElementById("clear").onclick = () => {
	socket.emit("clear",{"query":location.search})
}

document.getElementById("save").onclick = () => {
	saveCanvas(canvas,"canvas.png");
}
