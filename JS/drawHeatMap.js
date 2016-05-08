var xx = h337.create({
	"element":document.getElementById("gazemap"), 
	"radius":10, 
	"visible":true
});
xx.store.addDataPoint(10, 10);
setInterval(function(){
	xx.store.addDataPoint(100, 10);
} , 1000);