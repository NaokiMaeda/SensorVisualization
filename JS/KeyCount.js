var MLabels = [];
var KValue = [];
for(var i = 0; i < 60; i++){
	MLabels.push("");
	KValue.push(0);
}
var MData = {
	labels: MLabels ,
	datasets: [{
        label: "タイピング数",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#3F51B5",
        borderColor: "#3F51B5",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#3F51B5",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#3F51B5",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: KValue
    }
]
};

var Movement = document.getElementById("KeyCount").getContext("2d");

var MouseChart = new Chart(Movement, {
	type: "line",
	data: MData
});

var ipc = require("electron").ipcRenderer;
ipc.on("KeyCount", function(event, arg) {
	MouseChart.data.datasets[0].data.shift();
	MouseChart.data.datasets[0].data.push(arg);
	MouseChart.update();
});
