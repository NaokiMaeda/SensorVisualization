var MLabels = [];
var MValue = [];
var KValue = [];
for(var i = 0; i < 60; i++){
    MLabels.push("");
    MValue.push(0);
    KValue.push(0);
}
var MData = {
    labels: MLabels , 
    datasets: [{ 
        label: "MouseMovement", 
        fill: false, 
        lineTension: 0.1, 
        backgroundColor: "#8BC34A", 
        borderColor: "#8BC34A", 
        borderCapStyle: 'butt', 
        borderDash: [], 
        borderDashOffset: 0.0, 
        borderJoinStyle: 'miter', 
        pointBorderColor: "#8BC34A", 
        pointBackgroundColor: "#fff", 
        pointBorderWidth: 1, 
        pointHoverRadius: 5, 
        pointHoverBackgroundColor: "#8BC34A", 
        pointHoverBorderColor: "rgba(220,220,220,1)", 
        pointHoverBorderWidth: 2, 
        pointRadius: 1, 
        pointHitRadius: 10, 
        data: MValue
    },{ 
        label: "KeyCount", 
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
    }] 
};

var Movement = document.getElementById("Movement").getContext("2d");

var MouseChart = new Chart(Movement, {
    type: 'line',
    data: MData,
    options: {
        xAxes: [{
            display: false
        }]
    }
});

var ipc = require('electron').ipcRenderer;
ipc.on("Movement", function(event, arg) {
    MouseChart.data.datasets[0].data.shift();
    MouseChart.data.datasets[0].data.push(arg[0]);
    MouseChart.data.datasets[1].data.shift();
    MouseChart.data.datasets[1].data.push(arg[1]);
    MouseChart.update();
});

// var newData = [];
// setInterval(function(){
//     // lineChart.clear();
//     for(var i = 0; i < 100; i++){
//         newData[i] = Math.random(0) * 100;
//     }
//     //lineChart.data.datasets[0].data[0] = Math.random() * 100;
//     lineChart.data.datasets[0].data = newData;
//     //document.write(lineChart.data.datasets[0].data);
//     lineChart.update();
// } , 1000);
