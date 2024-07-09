 numbers = [ 12, 8, -9, 0, 0]

console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b- a));


const words  = ["labas", "adata", "zebras"]

console.log(words.sort((a, b) => a.localeCompare(b)));
console.log(words.sort((a, b) => -a.localeCompare(b)));


const arrayOfArrays = [
    [1, 6],
    [2, 9],
    [-8, 7],
]

console.log(arrayOfArrays.sort((a, b) => a[1] - b[1]));


const numbers2 = [12, 8, -92, 0, 0, 8, 2]

let sum = 0;

for(let i = 0; i < numbers2.length; i++){
    sum += numbers2[i];
}

console.log(sum);


const sum1 = numbers2.reduce((accumulated, current) => {
    return accumulated + current;
} )

console.log(sum1);


const wordsCombined = words.reduce((acc, cur) => {
    return acc + cur;
}, "labas, ")

console.log(wordsCombined);



function alertName(name) {
    alert(name);
}

function consoleName (name) {
    console.log(name);
}


function corefunction (name, callback) {
    const capitalizedName = name[0].toUpperCase() + name.slice(1, name.length);
    callback(capitalizedName)
}

corefunction("asdasd", consoleName)


cars = ["BMW", "VW", "Audi"]

cars.forEach((car, i) => console.log(`${i}: ${car} `))


const names = ["Petras", "Jonas", "aNTanas"]

const fixedNames = names.map(
    (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
)

console.log(fixedNames);




const ages = [1, 8, 85, 47, 18]

const adults = ages.filter((age) => age >= 18)

console.log(adults);




const cities = ["Vilnius", "Kaunas", "kaunas"];

const citiesStartingWtihK = cities.find((city) => city[0] === "K");
console.log(citiesStartingWtihK);


const areSome = cities.some((city) => city[0] === city[0].toLowerCase());

console.log(areSome);


const









































