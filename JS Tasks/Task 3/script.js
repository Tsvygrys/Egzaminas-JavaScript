/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btn = document.getElementById('btn');
const containerGrid = document.querySelector('#output');

btn.addEventListener('click', loadData);

function loadData() {

fetch('https://api.github.com/users')
.then((response) => {
if (response.ok) {
    return response.json();
} else {
    console.log('something went wrong' + response.status);
}
})
.then((data) => {
  console.log(data)
showData(data)
})
.catch((error) => {
    console.log(error);
});
}

function showData(data) {
    const msg = document.getElementById('message');
    msg.classList.add('d-none');

    data.forEach(function (single) {
        const cardContainer = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('p');
        cardContainer.classList.add('card');
        img.src = single.avatar_url;
        title.textContent = single.login;
        cardContainer.appendChild(title);
        cardContainer.appendChild(img);
        containerGrid.appendChild(cardContainer);
    });
}
