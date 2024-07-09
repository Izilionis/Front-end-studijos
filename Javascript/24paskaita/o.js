const amzius = document.getElementById("amzius");
const form = document.querySelector("form");
const price = document.getElementById("price")

function apskaiciavimas (e) {
    e.preventDefault();
    const prices = 6;
    const age = Number(amzius.value);

    if (age >= 60) {
        price.textContent = ((1/3 * prices)*2).toFixed(2);
    }else if (age <= 16){
        price.textContent = (0.5 * prices).toFixed(2);
    }else {
        price.textContent = prices.toFixed(2);
    }
}

form.addEventListener("submit", apskaiciavimas)




const ageInput = document.getElementById("age");
const tInput = document.getElementById("input[type=checkbox]");
const form2 = document.getElementById("2");
const result = document.getElementById("result");

function arTinkamas (e){
    e.preventDefault();

    const age = Number(ageInput.value);
    const isConvicted = tInput.checked;

    if (age >= 18 &&  age <= 30 && !isConvicted){
        result.textContent = "Army's calling you"
    }else{
        result.textContent = "No army for you"
    }
}

addEventListener("submit", arTinkamas);



