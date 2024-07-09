
console.log("This is before setTimeout");

setTimeout(() => {
    console.log("This is a callback function");
}, 2000)


console.log("This is after setTimeout");



function logSomething () {
    console.log("Cia yra paprasta funkcija");
}


setTimeout(logSomething, 2000)


// setInterval(() => console.log("Praejo dar viena sekunde"), 1000)

const numbers = [1,2,3,5];

for (i = 0; i < numbers.length; i++){
    console.log(numbers[i] * 2);
}

numbers.forEach((num) => {
    console.log(num * 2);
    
})





// function myForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback (arr[i])
        
//     }
// }

// myForEach(numbers, (num) => {
//     console.log("vidus for each callbacko" + num);
// })



const strings = ["labas", "krabas", "bananas"];

for (let i = 0; i < strings.length; i++) {
   let newStrings = strings[i][0].toUpperCase();
   newStrings += strings[i].slice(1, strings[i].length)
   console.log(newStrings);
    
}

strings.forEach((str) => {
    let newStrings = str[0].toUpperCase();
    newStrings += str.slice(1, str.length)

    console.log(newStrings);
})


const doubleNumbersArray = numbers.map((num) => {
    return num * 2;
})

console.log(doubleNumbersArray);


const doubleNumbersArray2  = [];
for(let i = 0; i < numbers.length; i++) {
    doubleNumbersArray2.push(numbers[i] * 2)
}
console.log(doubleNumbersArray2);


const strings2 = ["lala", "lalallalaa", "ljasbndlakndm", "asd"];

const shortString = [];

for (let i = 0; i < strings2.length; i++) {
    if (strings2[i].length < 5) {
        shortString.push(strings2[i])
    }
    
}

console.log(shortString);


const shortString2 = strings2.filter( (str)=> str.length < 5 )

console.log(shortString2);



const numbers3 = [2, 8, 9, 6];

const res = numbers3.map ((x) => x * x ).filter((x) => x < 50);

console.log(res);


















