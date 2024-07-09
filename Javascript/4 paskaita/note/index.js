const array1 = [2,3,4];

array1.unshift(1);

console.log(array1);

console.log("===============================================");


const array2 = [1,2,2,3,3,3,4];

const uniqueElements = []; 

for (let i = 0; i < array2.length; i++){
    if (!uniqueElements.includes(array2[i])){
        uniqueElements.push(array2[i])
    }
}

console.log(uniqueElements.length);

console.log("===============================================");


const array3 = [-3, 1, -2, 4, -5, 6];

const teigiami = [];

for (let i = 0; i < array3.length; i++){
    if (array3[i] >= 0){
        teigiami.push(array3[i])
    }
}

console.log(teigiami);

console.log("===============================================");


const arr = [1, 2, 3, 4, 3, 5];
const element = 3;

const doesRepeat = arr.indexOf(element) !== arr.lastIndexOf(element);

console.log(doesRepeat);

console.log("===============================================");


const array4 = [1, 2, 3, 4, 5];

const ats = []

for (let i = 0; i < array4.length; i++){
    if ( array4[i] % 2 === 0){
        ats.push(array4[i] / 2)
    }else{
        ats.push(array4[i] * 3)
    }
}

console.log(array4);
console.log(ats);















