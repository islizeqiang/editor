/* eslint-disable import/no-extraneous-dependencies */
import { app, BrowserWindow } from 'electron';
import FileOperator from './file';

interface CustomApp extends Electron.App {
  FileOperator?: any;
}

const customApp: CustomApp = app;

const isDev = process.env.NODE_ENV === 'development';

customApp.FileOperator = FileOperator;

let mainWindow: Electron.BrowserWindow | null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    // resizable: false,
    // fullscreen: true,
    // frame: false,
    // titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
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

customApp.on('ready', createWindow);

customApp.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    customApp.quit();
  }
});

customApp.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
