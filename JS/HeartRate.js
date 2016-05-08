var HRLabels = [];
var HRValue = [];
for(var i = 0; i < 60; i++){
    HRLabels.push("");
    HRValue.push(0);
}
var data = {
    labels: HRLabels , 
    datasets: [{ 
        label: "HeartRate", 
        fill: false, 
        lineTension: 0.1, 
        backgroundColor: "rgba(75,192,192,0.4)", 
        borderColor: "rgba(75,192,192,1)", 
        borderCapStyle: 'butt', 
        borderDash: [], 
        borderDashOffset: 0.0, 
        borderJoinStyle: 'miter', 
        pointBorderColor: "rgba(75,192,192,1)", 
        pointBackgroundColor: "#fff", 
        pointBorderWidth: 1, 
        pointHoverRadius: 5, 
        pointHoverBackgroundColor: "rgba(75,192,192,1)", 
        pointHoverBorderColor: "rgba(220,220,220,1)", 
        pointHoverBorderWidth: 2, 
        pointRadius: 1, 
        pointHitRadius: 10, 
        data: HRValue
    }] 
};

var HeartRate = document.getElementById("HeartRate").getContext("2d");

var lineChart = new Chart(HeartRate, {
    type: 'line',
    data: data,
    options: {
        xAxes: [{
            display: false
        }]
    }
});

var ipc = require('electron').ipcRenderer;
ipc.on("HeartRate", function(event, arg) {
    lineChart.data.datasets[0].data.shift();
    lineChart.data.datasets[0].data.push(arg);
    lineChart.update();
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
