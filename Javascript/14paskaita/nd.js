// Inventoriaus valdymas

// Sukurkite funkciją updateInventory, kuri priima esamą inventoriaus objektą ir pakeitimų masyvą. Kiekvienas pakeitimas yra objektas su item (prekės pavadinimu), change (kaitos kiekiu; gali būti neigiamas, jei prekė yra šalinama) ir action ("add" arba "remove"). Funkcija turėtų atnaujinti inventorių pagal pateiktus pakeitimus.


const inventory = { apples: 5, bananas: 8};

const changes = [
    { item: "apples", change: 3, action: "add" },
    { item: "bananas", change: 2, action: "remove" },
]

function updateInventory(inventory, changes) {
    const inventoryCopy = { ...inventory}

    changes.forEach ((ch) => {
        if (ch.action === "add") {
            inventoryCopy[ch.item] += ch.change;
        }
        if (ch.action === "remove") {
            inventoryCopy[ch.item] -= ch.change;
        }
    })

    return inventoryCopy;
}


const update = updateInventory(inventory, changes);

console.log(update);



// Studentų grupių balai

// Jūsų užduotis - sukurti funkciją countAverages, kuri priima objektą, turintį studentų grupių pavadinimus kaip raktus ir studentų egzaminų balų masyvus kaip reikšmes. Funkcija turėtų grąžinti naują objektą su kiekvienos grupės vidurkiu.


const groups = { "Group A": [80, 90, 100], "Group B": [70, 80, 90] };

function countAverages(group) {
    const groupsCopy = {...group};
    const keys = Object.keys(groupsCopy)

    keys.forEach((key) => {
        groupsCopy[key] = groupsCopy[key].reduce((acc, cur) => acc + cur) / groupsCopy[key].length;
    });

    return groupsCopy;
}

console.log(countAverages(groups));



// Knygų paieška

// Parašykite funkciją surastiKnygasPagalPavadinima, kuri ieško visų knygų, kurių pavadinimai atitinka (arba dalinai atitinka) nurodytą paieškos terminą. Paieška taip pat turėtų būti case-insensitive. Knygos yra pateiktos kaip objektų masyvas su savybėmis title ir author. Funkcija priima knygos pavadinimo paieškos terminą kaip argumentą ir grąžina visas atitinkamas knygas.


const books = [
    { title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" },
    { title: "Hobitas", author: "J.R.R. Tolkien" },
];

function findBook(bookArr, search) {
    return bookArr.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));

}

console.log(findBook(books, "poteris"));


// Darbuotojų ataskaita

// Sukurkite funkciją printEmployeeInfo, kuri priima objektą, kuriame yra darbuotojų vardai kaip raktai ir jų pareigos kaip reikšmės. Funkcija turi atspausdinti kiekvieno darbuotojo vardą ir pareigas.

const employee = { "Jonas": "Engineer", "Petras": "Manager" };

function printEmployeeInfo(obj) {
    const entries = Object.entries(obj);
    entries.forEach((e) => {
        console.log(`name: ${e[0]}, Position: ${e[1]}`);
    })
}

printEmployeeInfo(employee)




























