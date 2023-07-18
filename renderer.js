// const { ipcRenderer } = require('electron');

// document.querySelector('#test')
//     .addEventListener('click', () => {
//         ipcRenderer.send('page-test');
//     });

// ! GESTION des clics pour changer de page
document.querySelector('#ad')
    .addEventListener('click', () => {
        ipcRenderer.send('page-ad');
    });

// ! GESTION des clics
document.querySelector('#page_3')
.addEventListener('click', () => {
    ipcRenderer.send('page_3');
});

ipcRenderer.on('getAd', (event, token) => {
    getAd(token); // Appel de la fonction getAd() avec le token en tant que paramètre
});