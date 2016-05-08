'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var influx = require("influx");
var fs = require("fs");

const serverInfo = JSON.parse(fs.readFileSync("serverInfo.json" , "utf-8"));
var client = influx(serverInfo);

//require('crash-reporter').start();

var mainWindow = null;
app.commandLine.appendSwitch('enable-unsafe-es3-apis');

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  setInterval(function(){
    client.query("select HeartRate , Temparture from testData",function(err , result){
      mainWindow.webContents.send("influx" , result[0][0].HeartRate);
    });
  },1000);

  mainWindow.on('closed', function() {
  mainWindow = null;
  });
});
