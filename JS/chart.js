var data = {
    labels: ["1月","2月","3月","4月","5月","6月","7月"],//X軸のラベル
    datasets: [{
        label: "My First dataset",
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
        data: [65, 59, 80, 81, 56, 55, 40]//値
    }]
};

var ctx = document.getElementById("canvas").getContext("2d");

var lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        xAxes: [{
            display: true
        }]
    }
});

var ipc = require('electron').ipcRenderer;
ipc.on('influx', function(event, arg) {
    lineChart.data.datasets[0].data[0] = arg;
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
