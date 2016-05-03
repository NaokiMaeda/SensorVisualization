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
var height = 200;

nv.addGraph(function(){
	return drawPieChart("#HeartRateGraph" , testdata , width , height);
});

nv.addGraph(function(){
	return drawPieChart("#TemperatureGraph" , realData , width , height);
});

nv.addGraph(function() {
  var chart = nv.models.lineChart();
  chart.useInteractiveGuideline(true); //We want nice looking tooltips and a guideline!

  chart.xAxis     //Chart x-axis settings
      .axisLabel('Time (ms)')
      .tickFormat(d3.format(',r'));

  chart.yAxis     //Chart y-axis settings
      .axisLabel('Voltage (v)')
      .tickFormat(d3.format('.02f'));

  /* Done setting the chart up? Time to render it!*/
  var myData = sinAndCos();   //You need data...

  d3.select('#LineGraph svg')    //Select the <svg> element you want to render the chart in.   
      .datum(sinAndCos())         //Populate the <svg> element with chart data...
      .transition().duration(350)
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update()});
  return chart;
});

function sinAndCos() {
  var sin = [] , sin2 = [] , cos = [];
  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
    cos.push({x: i, y: .5 * Math.cos(i/10)});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: sin,      //values - represents the array of {x,y} data points
      key: 'Sine Wave', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c'
    },
    {
      values: sin2,
      key: 'Another sine wave',
      color: '#7777ff',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }
  ];
}

function drawPieChart(id , data , width , height){
	var chart = nv.models.pieChart()
		.x(function(d){return d.key})
		.y(function(d){return d.y})
    .width(width)
		.height(height)
		.showLabels(true);

	d3.select(id + " svg")
		.datum(data)
		.transition().duration(350)
		.call(chart);

	return chart;
}