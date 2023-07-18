const { ipcRenderer } = require('electron');

document.querySelector('#test')
    .addEventListener('click', () => {
        ipcRenderer.send('page-test');
    });