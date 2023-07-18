const { ipcRenderer } = require('electron');

// document.querySelector('#home')
//     .addEventListener('click', () => {
//         ipcRenderer.send('page-home');
//     });


console.log('====>  ad/renderer js  <====  ')

document.querySelector('#home')
    .addEventListener('click', () => {
        ipcRenderer.send('page-home');
    });


function getAd() {
    const token = localStorage.getItem('token');
    console.log("token: " + token)
    fetch( 'https://localhost:8000/api/annonces/1',{
        headers: {
            'Accept': 'application/json',
            'Content': 'application/json',
            'Authorization': 'bearer ' + token
        }

    }).then((response) => {
        return response.json();

    }).then((data) => {

        console.log(data.title)
        console.log(data.description)

        let title = document.querySelector('#title')
        title.innerHTML = data.title
        let description = document.querySelector('#description')
        description.innerHTML = data.description
        let degree = document.querySelector('#degree')
        degree.innerHTML = data.degree
        
    })
    .then((data) => {
        console.log(data);
        // localStorage.setItem('token', data.token);
        // ipcRenderer.send('token', data.token); // Envoie du token à la fenêtre de rendu principale
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}


getAd();

