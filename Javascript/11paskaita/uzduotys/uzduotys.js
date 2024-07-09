function alertName(text) {
    alert(text)
}

function consoleName (text){
    console.log(text);
}

function coreFunction(name, callback) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    callback(capitalizedName)
}

coreFunction("peTras", consoleName)

////////////////////////////////////////////////////////////////

const cars = ["BMW", "VW", "Audi"]

cars.forEach((v) => console.log(v))

////////////////////////////////////////////////////////////////

cars.forEach((v, i) => console.log(i+ ": " + v))
 
////////////////////////////////////////////////////////////////

const names = ["petras", "Jonas", "AlGis"]

const newNames = names.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());

console.log(newNames);

////////////////////////////////////////////////////////////////

const age = [1, 20, 25, 35, 8, 7, 45, 18, 19, 2]

console.log(age.filter(x => x >= 18));

////////////////////////////////////////////////////////////////

const city = ["Vilnius", "Kaunas", "klaipeda"]

console.log(city.find((x) => x.charAt(0) === "K"));

////////////////////////////////////////////////////////////////

console.log(city.some( x => x.charAt(0) === x.charAt(0).toLowerCase()));

////////////////////////////////////////////////////////////////

console.log(city.every(x => x.charAt(0) === x.charAt(0).toUpperCase()));

















