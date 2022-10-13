/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */



document.querySelector('#submit-btn').addEventListener('click', function(event){
  event.preventDefault();

  let inputValue = document.querySelector( "#search" ).value;

  let weightInLb = inputValue * 2.2046;
  let weightInG = inputValue * 0.0010000;
  let weightInOz = inputValue * 35.274;

  let lbVal = document.querySelector('#lb-value');
  let gramVal = document.querySelector('#g-value');
  let ozVal = document.querySelector('#oz-value');

  lbVal.innerHTML = weightInG;
  gramVal.innerHTML = weightInLb;
  ozVal.innerHTML = weightInLb;
})





