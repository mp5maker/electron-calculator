const { ipcRenderer } = require('electron')

/* Notification */
const notificationElement = document.querySelector('.notification-button')
notificationElement.addEventListener('click', () => {
    const myNotification = new Notification('Title', {
        body: "Notification from the Renderer Process"
    })

    myNotification.onclick = () => {
        console.log('Notfication clicked')
    }
})

/* Simple Alert */
const offlineOnlineElement = document.querySelector(".offline-online-button");
offlineOnlineElement.addEventListener('click', () => {
    const alertOnlineStatus = () => {
        window.alert(navigator.onLine ? "online" : "offline");
    };

    window.addEventListener("online", alertOnlineStatus);
    window.addEventListener("offline", alertOnlineStatus);
    alertOnlineStatus();
})


/* Change Theme */
const themeElement = document.querySelector('.theme-button')
themeElement.addEventListener('click', async () => {
    await ipcRenderer.invoke('dark-mode', { serious: 'secret' })
})