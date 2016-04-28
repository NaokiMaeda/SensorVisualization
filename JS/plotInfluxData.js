
var testdata = [
	{key: "One", y: 5},
    {key: "Two", y: 2},
    {key: "Three", y: 9},
    {key: "Four", y: 7},
    {key: "Five", y: 4},
    {key: "Six", y: 3},
    {key: "Seven", y: 0.5}
];

var realData = [
	{key: "HeartRate", y: 77},
    {key: "Temperature", y: 23}
];

var width = 250;
var height = 250;

nv.addGraph(function(){
	return drawChart("#HeartRateGraph" , testdata , width , height);
});

nv.addGraph(function(){
	return drawChart("#TemperatureGraph" , realData , width , height);
});

function drawChart(id , data , width , height){
	var chart = nv.models.pieChart()
		.x(function(d){return d.key})
		.y(function(d){return d.y})
		// .width(width)
		// .height(height)
		.showLabels(true);

	d3.select(id + " svg")
		.datum(data)
		.transition().duration(350)
		// .attr("width" , width)
		// .attr("height" , height)
		.call(chart);

	return chart;
}