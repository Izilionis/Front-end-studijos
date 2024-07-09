console.log("-------------Teksto elemento kūrimas-----------");

// Susikurkite projektą, be jokių HTML elementų <body> viduje. 

// Sukurkite funkciją createTextElement, kuri sukuria ir grąžina naują DOM elementą p su pateiktu tekstu  ir pridėkite į <body>


function vakaras (text) {
    const p = document.createElement(`p`); 
    p.textContent = (text);
    return p;
}

document.body.append(vakaras("lalala"))


console.log("-----------------Elemento atnaujinimas-----------------");

// Sukurkite HTML faile <h1> žymą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .


const name1 = "John"
document.getElementById(`name`).textContent = name1;


console.log("------------------Klaida DOM e-----------------");

// Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':

document.querySelector(".bluetext > span").textContent = "blue";

console.log("------------------Prekių sąrašas-----------------");


function createList(item) {
    const ul = document.createElement(`ul`);
    item.forEach(item => {
        const li = document.createElement(`li`);
        li.textContent = item;
        ul.appendChild(li);
    });
    return ul;
}

document.body.appendChild(createList(["pienas", "Duonas", "Kiausiniai"]));


console.log("------------Tic-Tac-Toe laimėtojo nustatymas-------------");


function highlightWinner () { 
    const board = document.querySelectorAll(`#tictactoe tr`);
    const matrix = Array.from(board, row => Array.from(row.cells, cell => cell.textContent));

    function chechAndHighlight(cells, indices) {
        if(cells[0] !== `` && new Set(cells).size === 1){
            indices.forEach(([row, col]) => board[row].cells[col].style.backgroundColor = `lightgreen`);
            return true;
        }
        return false;
    }

    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        const row = matrix[i];
        const col = matrix.map(row => row[i]);

        if (chechAndHighlight(row, [[i, 0 ], [i, 1], [i, 2]])) return;
        if (chechAndHighlight(col, [[0, i], [1, i], [2, i]]))
        return;
    }

    // Check diagonals
    const diag1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
    const diag2 = [matrix[0][2], matrix[1][1], matrix[2][0]];

    if (chechAndHighlight(diag1, [[0, 0], [1, 1], [2, 2]])) return;
    if(chechAndHighlight(diag2, [[0, 2], [1, 1], [2, 0]])) return;

}

highlightWinner();








