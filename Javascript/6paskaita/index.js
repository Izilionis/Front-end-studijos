

for (let i = 0; i <= 5; i++){
    console.log(i);
}

console.log("===============================");

let i =1;

let sum = 0;

while (i <= 5) {
    sum += i;
    i++;
}console.log(sum);

console.log("===============================");


for(let i = 0; i <= 10; i++){
    if (i % 2 ===0){
        console.log(i);
    }
}

console.log("===============================");

for (let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("===============================");

let devide3 = 0;

let nuo = 1;

while (nuo <= 20){ 
    if(nuo % 3 === 0){
        devide3++;
    }
    nuo++;
}

console.log(devide3);

console.log("===============================");

const sk = [1,51,52,4,6,4,5,9]

let max = sk [0];

for (let i = 1; i < sk.length; i++){
    if(sk[i] > max){
        max = sk[i];
    }
}
console.log(max);

console.log("===============================");

let num = 15;;

for (let i = 1; i <= 15; i++){
    if(num % i === 0){
        console.log(i);
    }
}

console.log("===============================");

const masyvai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = [];

for (let i = 0; i < masyvai.length; i ++){
    if(masyvai[i] % 2 !== 0){
        oddNumbers.push(masyvai[i])
    }
}
console.log(oddNumbers);

console.log("===============================");

for (let i = 1; i <= 20; i++){
    let isPrime = true;
    if(i > 1){
        for (let j = 2; j < i; j++){
            if (i % j ===0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            console.log(i);
        }
    }
}

console.log("===============================");

let n1 = 0, n2 = 1, nextTerm;

for ( let i = 1; i <= 10; i++){
    nextTerm = n1 +n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(nextTerm);
}










