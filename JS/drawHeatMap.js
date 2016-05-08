var GazeMap = h337.create({
	"element":document.getElementById("GazeMap"), 
	"radius":2, 
	"visible":true
});

var ipc = require('electron').ipcRenderer;
ipc.on("Gaze", function(event, arg) {
	GazeMap.store.addDataPoint(arg[0] * 240 / 1920 , arg[1] * 135 / 1080);
});