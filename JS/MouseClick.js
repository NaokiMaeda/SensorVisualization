var MCLabel = ["Left" , "Right"];
var MCValue = [1 , 1];
var MouseClick = document.getElementById("MouseClick").getContext("2d");
var MCData = {
	labels		: MCLabel , 
	datasets	: [{
		labels 	: "MouseClick" , 
		data 	: MCValue , 
		backgroundColor: [
        	"#FF6384",
        	"#36A2EB",
        	"#FFCE56"
        ],
        hoverBackgroundColor: [
        	"#FF6384",
        	"#36A2EB",
        	"#FFCE56"
        ]
	}]
};

var ClickChart = new Chart(MouseClick , {
	type : "pie" , 
	data : MCData
});

var ipc = require('electron').ipcRenderer;
ipc.on("Click", function(event, arg) {
        ClickChart.data.datasets[0].data[0] = arg[0];
        ClickChart.data.datasets[0].data[1] = arg[1];
        ClickChart.update();
});