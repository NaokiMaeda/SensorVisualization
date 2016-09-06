var MLabels = [];
var KValue = [];
for(var i = 0; i < 60; i++){
	MLabels.push("");
	KValue.push(0);
}
var KData = {
	labels: MLabels ,
	datasets: [{
		label: "user1",
		fill: false,
		lineTension: 0.1,
		backgroundColor: "rgba(255, 255, 255, 0.4)",
		borderColor: "rgba(255, 255, 255, 1)",
		borderCapStyle: "butt",
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: "miter",
		pointBorderColor: "rgba(255, 255, 255, 1)",
		pointBackgroundColor: "#fff",
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: "rgba(75,192,192,1)",
		pointHoverBorderColor: "rgba(220,220,220,1)",
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: KValue
	}
]
};

var KeyCount = document.getElementById("KeyCount").getContext("2d");

var KeyCountChart = new Chart(KeyCount, {
	type: "line",
	data: KData ,
	options: {
		legend : {
			labels : {
				fontColor : "#fff"
			}
		} ,
		scales : {
			yAxes : [{
				ticks : {
					min : 0 ,
					fontColor : "#fff"
				}
			}]
		}
	}
});

var ipc = require("electron").ipcRenderer;
ipc.on("KeyCount", function(event, arg) {
	KeyCountChart.data.datasets[0].data.shift();
	KeyCountChart.data.datasets[0].data.push(arg);
	KeyCountChart.update();
});
