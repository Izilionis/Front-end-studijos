const person ="Marius"

function sayHello (name){
    console.log("Hello World, " + name);
    console.log(name);
}

sayHello(person)

sayHello("Audrius")



function sum(number1, number2) {
    if (typeof number1 === 'number' && typeof number2 === 'number'){
        console.log(number1, number2);
        const rezult = number1 + number2;
        console.log(rezult);
    }else{
        console.log("Pakteikti argumentai negeri");
    }
}

sum(5, 4);
sum(7, -9);
sum(5)


const namoFunkcija = function (){
    console.log("Hello from anonimine funkcija");
}

namoFunkcija()


function doStuff(arg1) {
    arg1()
}

function sayBye() {
    console.log("GoodBye");
}

doStuff(sayBye)











function divide(num1, num2) {
    return num1 / num2;

    console.log("Kazkas kas vyksta uz return");
}

const divideResult = divide(2,2) + divide(10,5);
console.log(divideResult);



function returnLargerNumber(num1, num2){
    const kazkokrandomstring= "labaslabas"
    if (num1 > num2){
        return num1;
    }
    if ( num2 > num1){
        return num2;
    }
    if ( num2 === num1){
        return "Skaiciai yra lygus"
    }
}
console.log(returnLargerNumber(7,8));
console.log(returnLargerNumber(9,8));
console.log(returnLargerNumber(8,8));

// Create a function called isEven that takes a single number parameter and returns true if the number is even, otherwise false.


function isEven(number){
    if (number % 2){
        return false;
    }else{
        return true;
    }
}

console.log(isEven(5));
console.log(isEven(6));


// Write a function named truncateString that takes a string and a number as parameters. If the length of the string exceeds the specified number, truncate the string and append "..." to the end. Otherwise, return the original string.


function truncateString(string, maxLength){
    if (string.length > maxLength){
        let rezult = string.slice(0, maxLength);
        rezult += "...";
        return rezult;
        return string.slice(0, maxLength) + "...";
    }else{
        return string;
    }
}

console.log(truncateString("Labas labas", 5));
console.log(truncateString("Labas labas", 50));


// Create a function called findLongestWord that takes a string parameter consisting of words separated by spaces and returns the length of the longest word.


function findLongestWord(string){
    const words = string.split(" ");

    let longestWord = "";

    for ( let i = 0; i < words.length; i++){
        if ( longestWord.length < words[i].length){
            longestWord = words[i];
        }
    }
    
    return longestWord;
    
}

console.log(findLongestWord("ASDAS asd aklsmf a kamsd alksmd 6as dasdlm as;dlm asdma;sdma;sdm;amsd"));







