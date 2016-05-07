var data = {
    labels: ["1月","2月","3月","4月","5月","6月","7月"],//X軸のラベル
     datasets: [{
        label: "My First dataset",//項目名
        fillColor: "rgba(220,220,220,0.5)",//塗りつぶす色
        strokeColor: "rgba(220,220,220,0.8)",//枠線の色
        highlightFill: "rgba(220,220,220,0.75)",//マウスオーバー時塗りつぶす色
        highlightStroke: "rgba(220,220,220,1)",//マウスオーバー時枠線の色
    data: [65, 59, 80, 81, 56, 55, 40]//値
    }]
};

var ctx = document.getElementById("canvas").getContext("2d");

new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        xAxes: [{
            display: false
        }]
    }
});