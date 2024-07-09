const person = { 
    name: "Ignas",
    age: 21,

}

person.name = "Arte"
person.lastName = "Pavarde"

console.log(person["name"]);
console.log(person.name);

delete person.name

console.log(person);
console.log(person.name, person.age);




const people = [
    {name: "Tadas", age: 20},
    {name: "Juste", age: 30},
    {name: "Andrius", age: 25}
]

const peopleSortedByAge = people.sort((a, b) => a.age - b.age);

console.log(peopleSortedByAge);





const recipe = { 
    title: "Blynas",
    serves: 4,
    ingredients: ["miltai", "kiausinis", "pienas", "Cukrus"]
}

console.log(recipe.title);
console.log(`serves ${recipe.serves}`);

recipe.ingredients.forEach((item) => console.log(item))





const ignas = {
    name: "Ignas",
    age: 21,
    isWorking: true,
    pets: ["Kate", "Sou"],
    mom: {
        name: "Mana",
        age: 52
    },
    sayHello: () => {
        console.log("Hello");
    }
}


console.log(ignas.mom.age);
ignas.sayHello();


function changeName(obj) {
    const objCopy = {...obj}
    objCopy.name = "Kazkas kito"
}

console.log(ignas);

changeName(ignas);

console.log(ignas);


console.log("----------------------------------------");

const people1 = [
    {name: "Tadas", age: 20},
    {name: "Juste", age: 30},
    {name: "Andrius", age: 25},
    {name: "Ieva", age: 15},
    {name: "Tomas", age: 17},
];


const adults = people1.filter((p) => p.age >= 18);
console.log(adults);

console.log("----------------------------------------");

const adults1 = people1.filter((p) => p.age >= 18).map((p) => p.name);
console.log(adults1);

console.log("----------------------------------------");

const adults2 = people1.filter((p) => p.age >= 18).map((p) => p.name).sort((a, b) => a.localeCompare(b));
console.log(adults2);

console.log("----------------------------------------");

const prekes = [
    {Name: "Limonade", price: 50},
    {name: "Lime", price: 10},
]

function getCheapestAndMostExpensive(arr){
    const sorted = arr.sort((a, b) => a.price - b.price);
    const cheapest = sorted[0].name;
    const expensive = sorted[sorted.length - 1];

    const rezult = {
        brangiausiais: expensive,
        pigiausiais: cheapest,
    }

    return rezult;
}


const res = getCheapestAndMostExpensive(prekes);
console.log(res);


console.log("----------------------------------------");


const orders = [
    {id: 1, size: 5},
    {id: 2, size: 3},
    {id: 3, size: 8},
]

const optimizeQueue = (arr) => arr.sort((a, b) => a.size - b.size).map((o) => o.id);

console.log(optimizeQueue(orders));

console.log("----------------------------------------");

function findMostFrequent(arr) {
//     let mostFrequentNumber;
//     let mostFrequentAmount = 0;

//     arr.forEach((x) => {
//         const filtered = arr.filter((y) => y === x);
//         if (filtered.length > mostFrequentAmount) { 
//             mostFrequentNumber = x;
//             mostFrequentAmount = filtered.length;
//         }
//     })

//     return mostFrequentNumber;


const groupedNumbers = {};

arr.forEach((x) => {
    if (groupedNumbers[x]){
        groupedNumbers[x].push(x);
    }else{
        groupedNumbers[x] = [x];
    }
})

const allNumbers = Object.values(groupedNumbers).sort((a,b) => b.length - a.length)

console.log(allNumbers[0][0]);

}

console.log(findMostFrequent([3,7,3,1,3,7,1,1,1,1,3]));







