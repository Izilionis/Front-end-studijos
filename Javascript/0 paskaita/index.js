const sk = document.getElementById("sk");
const h1 = document.getElementById("text");

function ar (e){
    e.preventDefault();
    const sks = Number(sk.value);

    if (sks % 2 === 0) {
        h1.textContent = "Lyginis"
    }else{
        h1.textContent = "Nelyginis"
    }
}

ar();






















