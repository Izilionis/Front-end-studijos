/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const searchBar = document.querySelector("#search");
const submitButton = document.querySelector("#submit-btn");
const svaraiText = document.querySelector("#svaraiText");
const gramaiText = document.querySelector("#gramaiText");
const uncijosText = document.querySelector("#uncijosText");

let kg;
let lb;
let oz;
let g;

function kilogramToSvarai() {
  kg = searchBar.value;
  lb = kg * 2.2046;
  svaraiText.textContent = `Svarai:  ${lb}`;
}

function kilogramToGramai() {
  kg = searchBar.value;
  g = kg / 0.001;
  gramaiText.textContent = `Gramai: ${g}`;
}

function kilogramToUncijos() {
  kg = searchBar.value;
  oz = kg * 35.274;
  uncijosText.textContent = `Uncijos: ${oz}`;
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  kilogramToSvarai();
  kilogramToGramai();
  kilogramToUncijos();
});
