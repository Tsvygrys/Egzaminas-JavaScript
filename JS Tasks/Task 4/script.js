/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const btn = document.getElementById('btn');
const containerGrid = document.querySelector('.output-cointainer');

loadPhotos();

function loadPhotos() {

fetch('./cars.json', 
{
    method: "GET", 
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    }
}
)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
}
// function showData(data) {
//     data.forEach(function (single) {
//         const cardContainer = document.createElement('div');
//         const img = document.createElement('img');
//         const title = document.createElement('p');
//         cardContainer.classList.add('card');
//         img.src = single.avatar_url;
//         title.textContent = single.login;
//         cardContainer.appendChild(title);
//         cardContainer.appendChild(img);
//         containerGrid.appendChild(cardContainer);
//     });
// }