'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

//require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

var data;

app.on('ready', function() {
  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  setInterval(function(){
    data = Math.random()*100;
    mainWindow.webContents.send("influx" , data);
    console.log(data);
  },1000);
  

  mainWindow.on('closed', function() {
  mainWindow = null;
  });
});
