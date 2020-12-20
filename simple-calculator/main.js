const { app, BrowserWindow, globalShortcut, Notification, Menu, ipcMain } = require('electron')

/* Global Shorcuts */
function createShortcuts() {
    globalShortcut.register("Control+A", () => {
        console.log("Electron loves global shortcuts!");
    });
}

/* Window */
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    win.webContents.on("before-input-event", (event, input) => {
        if (input.control && input.key.toLowerCase() === "i") {
            console.log("Pressed Control+I");
        }
    });

    ipcMain.handle('dark-mode', (event, data) => {
        console.log('dark-mode')
        console.log(event)
        console.log(data)
    })
}

/* Notification */
function showNotification() {
    const notification = {
        title: 'Basic Notification',
        body: 'Notification from the Main process'
    }
    new Notification(notification).show()
}


/* Set Application Menu */
function setApplicationMenu() {
    const isMac = process.platform === "darwin";
    const template = [
        // { role: 'appMenu' }
        ...(isMac
            ? [
                {
                label: app.name,
                submenu: [
                    { role: "about" },
                    { type: "separator" },
                    { role: "services" },
                    { type: "separator" },
                    { role: "hide" },
                    { role: "hideothers" },
                    { role: "unhide" },
                    { type: "separator" },
                    { role: "quit" },
                ],
                },
            ]
            : []),
        // { role: 'fileMenu' }
        {
            label: "File",
            submenu: [
                {
                    role: 'help',
                    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
                    click: () => { console.log('Electron rocks!') }
                },
                ...(isMac ? [{ role: "close" }] : [{ role: "quit" }])
            ],
        },
        // { role: 'editMenu' }
        {
            label: "Edit",
            submenu: [
                { role: "undo" },
                { role: "redo" },
                { type: "separator" },
                { role: "cut" },
                { role: "copy" },
                { role: "paste" },
                ...(isMac
                    ? [
                        { role: "pasteAndMatchStyle" },
                        { role: "delete" },
                        { role: "selectAll" },
                        { type: "separator" },
                        {
                        label: "Speech",
                        submenu: [
                            { role: "startSpeaking" },
                            { role: "stopSpeaking" },
                        ],
                        },
                    ]
                    : [
                        { role: "delete" },
                        { type: "separator" },
                        { role: "selectAll" },
                    ]),
            ],
        },
        // { role: 'viewMenu' }
        {
            label: "View",
            submenu: [
                { role: "reload" },
                { role: "forceReload" },
                { role: "toggleDevTools" },
                { type: "separator" },
                { role: "resetZoom" },
                { role: "zoomIn" },
                { role: "zoomOut" },
                { type: "separator" },
                { role: "togglefullscreen" },
            ],
        },
        // { role: 'windowMenu' }
        {
            label: "Window",
            submenu: [
                { role: "minimize" },
                { role: "zoom" },
                ...(isMac
                    ? [
                        { type: "separator" },
                        { role: "front" },
                        { type: "separator" },
                        { role: "window" },
                    ]
                    : [{ role: "close" }]),
            ],
        },
        {
            role: "help",
            submenu: [
                {
                    label: "Learn More",
                    click: async () => {
                    const { shell } = require("electron");
                    await shell.openExternal("https://electronjs.org");
                    },
                },
            ],
        },
        ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(async () => {
    await createShortcuts()
    await createWindow()
    await showNotification()
    await setApplicationMenu()
})

const allWindowClosed = () => {
    if (process.platform !== 'darwin') app.quit()
}
app.on('window-all-closed', allWindowClosed)

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length == 0) createWindow()
})