'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin')
    app.quit();
});
app.on('ready', function () {

  mainWindow = new BrowserWindow({
    width: 400,
    height: 60,
    minWidth: 150,
    minHeight: 60,
    maxWidth: 400,
    maxHeight: 80,
    resizable: true,
    frame: false
  });
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');

  // (2)現在のウィンドウのサイズと位置（座標）を取得するスクリプトを追加
  var setWin = require("./setWin.json");
  mainWindow.setPosition(setWin["x"], setWin["y"]);
  mainWindow.setSize(setWin["width"], setWin["height"]);

  // (3)現在のウィンドウのサイズと位置（座標）を保存するスクリプトを追加
  var path = require('path').join(__dirname, 'setWin.json');
  mainWindow.on('close', function () {
    var fs = require('fs');
    var item = JSON.stringify(mainWindow.getBounds());
    fs.writeFileSync(path, item);
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

});