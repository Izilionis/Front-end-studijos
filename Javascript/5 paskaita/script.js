// 1. i = 0, 0 < 5 
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// for (let i = 100; i >= 10; i-=10) {

//     console.log(i);
// }

// let j = 0;

// while (j < 5) {
//     j++
//     console.log(j);
// }

// let k = 0;

// do {
//     k++;
//     console.log(k);
// }while (k < 5)


// for (let i = 1; i < 11; i++){
//     console.log(i);
// }
///////////////////////////////////////////////////////////////////
// for (let i = 2; i <= 20; i +=2){
//     console.log(i);
// }
/////////////////////////////////////////////////////////////////
// let sum = 0;

// for (let i=1; i<=10; i++){
//     sum +=i;
// }

// console.log(sum);
/////////////////////////////////////////////////////////////////
let isUserInputValid = false;

do {
    const userInput = prompt("Iveskite koki zodi");
    if (userInput){ 
        isUserInputValid = true;
        let reverseString = ""
        
        for (let i = userInput.length - 1; i >= 0; i--){
            reverseString += userInput[i]
        }
        
        console.log(reverseString);
    }else{
        alert("Neissidirbinek")
    }
}while(!isUserInputValid);
    
    


























