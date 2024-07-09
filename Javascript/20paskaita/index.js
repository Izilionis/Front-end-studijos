
setTimeout(() => {
    console.log("Labas");
}, 2000);

let x = 10;

x += 10;

console.log(x);




const pr = new Promise( (resolve, reject) => {
    const user = {
        name: "Vardas",
        age: 20
    }
// resolve(user)

    reject("Rejectinam")
});

pr.then((data) => {
    console.log("Resolved", data);
})
.then((data) => {
    console.log("THEN 2");
})
.then((data) => {
    console.log("THEN 3");
})
.catch((err) => {
    console.log("Catch", err);
})
.finally((x) => {
    console.log("Finally", x);
})



























