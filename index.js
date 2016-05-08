'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

//require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.send("influx" , "data");
  console.log("sended");

  mainWindow.on('closed', function() {
  mainWindow = null;
  });
});
