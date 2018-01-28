// Require modules
const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
const setupIwc = require('../');

// Data
const windows = {};

// Utils
const createWindow = (name, options) => {
  const win = new BrowserWindow(options);
  win.setTitle(name);

  win.once('ready-to-show', win.show);

  const file = url.format({
    pathname: path.join(__dirname, 'windows', name, 'index.html'),
    protocol: 'file:',
    slashes: true
  });
  win.loadURL(file);

  windows[name] = win;
};

// App setup
app.on('ready', () => {
  setupIwc();

  createWindow('win1', {x: 200, y: 250});
  createWindow('win2', {x: 1000, y: 250});
});

app.on('window-all-closed', () => {
  app.quit();
});
