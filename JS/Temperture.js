var TLabel = ["Temperture"];
var TValue = [10 , 90];
var Temperture = document.getElementById("Temperture").getContext("2d");
var TData = {
	labels		: TLabel , 
	datasets	: [{
	       labels 	: "Temperture" , 
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

var TempertureChart = new Chart(Temperture , {
	type : "doughnut" , 
	data : TData
});

var ipc = require('electron').ipcRenderer;
ipc.on("Temperture", function(event, arg) {
    TempertureChart.data.datasets[0].data[0] = arg;
    TempertureChart.data.datasets[0].data[1] = 100 - arg;
    TempertureChart.update();
});