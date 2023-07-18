const { ipcRenderer } = require('electron');

document.querySelector('#home')
    .addEventListener('click', () => {
        ipcRenderer.send('page-home');
    });
