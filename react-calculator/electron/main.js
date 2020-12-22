const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow;
const isDevelopment = process.env.ELECTRON_START_DEVELOPMENT ? true : false;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    const startURL = isDevelopment ? 'http://localhost:3000'
        : url.format({
            pathname: path.join(__dirname, '..', 'build/index.html'),
            protocol: 'file:',
            slashes: true
        })
    mainWindow.loadURL(startURL)
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function() {
        mainWindow = null
    })
}


app.whenReady().then(async() => {
    await createWindow()
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
    if (mainWindow === null) createWindow()
})