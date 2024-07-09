

const fruits = ["Apple", "Orange", "Pear", "asdasd"];

const amountOfFruit = fruits.length

fruits[3] = "Banana"

fruits.splice(2,1, "peper")

console.log(fruits);
console.log(fruits[1]);
console.log(amountOfFruit);


const cars = ["Audi", "Bmw", "Volvo", "Citroen"];

//Slice padaro elementu kopija ir neliece orginalo
const smallerArray = cars.slice(1,3)

//Concat nekeicia orginalo
const additionalCars = smallerArray.concat("Kazkas papildomai", 8, 3, true)

console.log(smallerArray);
console.log(additionalCars);


// console.log(smallerArray);
// console.log(cars);


const array1 = [1,165,123,5478,3218,64]

//prie orginalo galo prideda reiksme
array1.push(777,888)
array1.unshift("Reisme pradzioje")

console.log(array1);



const array2 = [1,531,1,6,51,6351,351]

const lastNumberOfArray = array2.pop()
const firstNumberOfArray = array2.shift()

console.log(lastNumberOfArray);
console.log(firstNumberOfArray);
console.log(array2);

console.log("-----------------------------------------------");

const myArray = [1,2,3,4,5,6]
myArray[2] = "Nauja reikme"
console.log(myArray);

const myArrayCopy = [...myArray]
myArrayCopy[2] = "Vel kazkoks pakeitinmas"
console.log(myArrayCopy);



//iskonsolinti kiekvieba array reiksme

const testArray1 = [true, "String", 6541, [1,5]]

for(let index = 0; index < testArray1.length; index++){
    console.log(testArray1[index]);
}

//Surasti suvi array elementu suma

const testArray2 = [1,5 ,-5, 22];

let suma = 0;

for(let index = 0; index < testArray1.length; index++){
    suma += testArray2[index];
}
console.log(suma);

//Isfiltruoti neigiamas reiksmes is array (orginalo nepakeisti)
console.log("----------------------------------------------");
const testArray3 = [5, -5, 7, 0];
const positiveArray = [];

for(let index = 0; index < testArray3.length; index++){
    if(testArray3[index] >= 0){
        positiveArray.push(testArray3[index]);
    }
}
console.log(positiveArray);

console.log("------------------------------");

//reverse an array

const testArray4 = [1,2,3];

const reversed = [];

for (let i = testArray4.length - 1; i >= 0; i--){
    console.log(i);
    reversed.push (testArray4[i])
}
console.log(reversed);

const reverse2 = testArray4.reverse()
console.log(reverse2);

























