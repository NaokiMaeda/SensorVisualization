var TLabel = ["user1"];
var TValue = [10 , 90];
var Temperature = document.getElementById("Temperature").getContext("2d");
var TData = {
	labels		: TLabel ,
	datasets	: [{
		labels 	: "user1" ,
		data 	: TValue ,
		backgroundColor: [
			"#C2185B",
			"#FFFFFF"
		],
		hoverBackgroundColor: [
			"#C2185B",
			"#FFFFFF"
		]
	}]
};

var TemperatureChart = new Chart(Temperature , {
	type : "doughnut" ,
	data : TData
});

var ipc = require("electron").ipcRenderer;
ipc.on("Temperature", function(event, arg) {
	TemperatureChart.data.datasets[0].data[0] = arg;
	TemperatureChart.data.datasets[0].data[1] = 100 - arg;
	TemperatureChart.update();
});
