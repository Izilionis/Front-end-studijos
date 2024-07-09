import defaultStuff, { divideNumbers, PI } from "./utility/mathFunction.js"
import defaultValueFromMathFunctions from "./utility/mathFunction.js"

import * as mathStuff from "./utility/mathFunction.js"
console.log(mathStuff.default());
console.log(defaultStuff());


console.log(divideNumbers(2,6))
console.log(PI);



function sayName(name = "Vardas") {
    console.log("My name is: ", name);
}

sayName("Augustina")

sayName()




function addTwoNumber(a, b) {
    return a + b;
}

const someString = `dvieju skaiciu suma yra:  ${addTwoNumber(1, 2)}    ${2 + 5}`

console.log(someString);


const longString = `lksndfsdf
ldsfknsdf
dlsfnsdf
sd;fm`

console.log(longString);

// const longString2 = "kjsdbfn
// alsjnf
// alfn"

const someArray = [1, 3, 8]

const arr2 = [8, 7, ...someArray];

console.log(arr2);




function addAllNumbers(x, ...args) {
    console.log(args);
    console.log(x);
    return args.reduce((prev, current) => prev + current)
}

console.log(addAllNumbers(1000, 5, 4, 8, 7));




const obj1 = {
    name: "Vardas",
    age: 23
}

const obj2 = {
    address: "Adresas",
    name: "Vardas 2",
    ...obj1
}

console.log(obj2);




const person = {
    name: "Antanas",
    lastName: "Pavardenis",
    age: 52,
};

// const name = person.name;
// const age = person.age;
// console.log(name, age);


const name = "person.name";
const age = "person.age";


const { name: personsName, age: personsAge } = person;

console.log(name, age);

console.log(personsName, personsAge);






const arr3 = ["Labas", "ate", "asdasd", 8];

const value1 = arr3[0];
const value2 = arr3[1];

console.log(value1, value2);

//trunpinys

const [x1, x2, x3] = arr3;

console.log(x1, x2, x3);




function multiplyTwoNumbers(x, y) {
    return x * y;
}

const multiplyTwoNumbersArrow = (x, y) => x * y;

const someObj = {
    fn1: () => console.log(this),
    fn2: function () {
        console.log(this);
    }
}

someObj.fn1();
someObj.fn2();

// console.log(multiplyTwoNumbersArrow(2,2));






















