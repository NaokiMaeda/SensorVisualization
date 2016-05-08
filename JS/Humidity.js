var HLabel = ["Humidity"];
var HValue = [10 , 90];
var Humidity = document.getElementById("Humidity").getContext("2d");
var HData = {
	labels		: HLabel , 
	datasets	: [{
	    	labels 	: "Humidity" , 
	    	data 	: HValue , 
	    	backgroundColor: [
            	"#1E88E5",
                "#FFFFFF"
            ],
            hoverBackgroundColor: [
        		"#1E88E5",
        	    "#FFFFFF"
            ]
	}]
};

var HumidityChart = new Chart(Humidity , {
	type : "doughnut" , 
	data : HData
});

var ipc = require('electron').ipcRenderer;
ipc.on("Humidity", function(event, arg) {
    HumidityChart.data.datasets[0].data[0] = arg;
    HumidityChart.data.datasets[0].data[1] = 100 - arg;
    HumidityChart.update();
});