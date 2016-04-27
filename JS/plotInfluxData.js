var testdata = [
	{key: "One", y: 5},
    {key: "Two", y: 2},
    {key: "Three", y: 9},
    {key: "Four", y: 7},
    {key: "Five", y: 4},
    {key: "Six", y: 3},
    {key: "Seven", y: 0.5}
];

var width = 500;
var height = 500;

nv.addGraph(function(){
	var chart = nv.models.pieChart()
		.x(function(d){return d.key})
		.y(function(d){return d.y})
		.width(width)
		.height(height)
		.showLabels(true);

	d3.select("#testGraph")
		.datum(testdata)
		.transition().duration(350)
		.attr("width" , width)
		.attr("height" , height)
		.call(chart);

	return chart;
});