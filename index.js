"use strict";

var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var influx = require("influx");
var fs = require("fs");

const serverInfo = JSON.parse(fs.readFileSync("serverInfo.json" , "utf-8"));
var client = influx(serverInfo);
const query = "select HeartRate , Temperature , Humidity , Movement , KeyCount from StressTest ORDER BY time DESC limit 1";
//require('crash-reporter').start();

var mainWindow = null;
app.commandLine.appendSwitch("enable-unsafe-es3-apis");

app.on("window-all-closed", function() {
	app.quit();
});

app.on("ready", function() {
	// ブラウザ(Chromium)の起動, 初期画面のロード
	mainWindow = new BrowserWindow({width: 1200, height: 750});
	mainWindow.loadURL("file://" + __dirname + "/index.html");

	setInterval(function(){
		client.query(query,function(err , result){
			console.log(result);
			var resultData = result[0][0];
			mainWindow.webContents.send("HeartRate" , resultData.HeartRate);
			mainWindow.webContents.send("Temperature" , resultData.Temperature);
			mainWindow.webContents.send("Humidity" , resultData.Humidity);
			mainWindow.webContents.send("Movement" , resultData.Movement);
			mainWindow.webContents.send("KeyCount" , resultData.KeyCount);
			// mainWindow.webContents.send("Gaze" , [resultData.gazeX , resultData.gazeY]);
			// mainWindow.webContents.send("Click" , [resultData.leftClick , resultData.rightClick]);
		});
	},1000);

	mainWindow.on("closed", function() {
		mainWindow = null;
	});
});
