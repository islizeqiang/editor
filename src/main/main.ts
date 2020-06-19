/* eslint-disable import/no-extraneous-dependencies */
import { app, BrowserWindow } from 'electron';
import FileOperator from './reader';

const isDev = process.env.NODE_ENV === 'development';

app.FileOperator = FileOperator;

let mainWindow: Electron.BrowserWindow | null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    // resizable: false,
    // fullscreen: true,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    },
  });
  if (isDev) {
    mainWindow.loadURL('http://localhost:8011/');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(`file://${__dirname}/index.html`);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});