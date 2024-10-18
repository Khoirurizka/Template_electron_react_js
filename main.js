const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
const { Console } = require('console');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'test electron',
        width: 1000,
        height: 600
    });

    // Open DevTools for debugging
    //mainWindow.webContents.openDevTools();

    // Set startUrl to localhost:3000
    const startUrl = 'http://localhost:3000';
    
    mainWindow.loadURL(startUrl);
}

app.whenReady().then(() => {
    createMainWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });