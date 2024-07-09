
const h1 = document.getElementById("teskstas");
console.log(h1);

const elementsByClassName = document.getElementsByClassName("testas");
console.log(elementsByClassName);


const firstPar = document.querySelector(".testas")
console.log(firstPar);

const par = document.querySelector("p")
console.log(par);

const allPar = document.querySelectorAll("p")
console.log(allPar);
console.log(allPar[0]);

const allParArr = [...allPar];
console.log(allParArr);

const div = document.querySelector("div");
const prevSib = div.previousElementSibling;
const nextSib = div.nextElementSibling;
const firstChild = div.firstElementChild;
console.log(firstChild);
console.log(nextSib);
console.log(prevSib);

console.log(div.parentNode);

const h3 = document.querySelector(".text");
console.log(h3.style.color);
h3.style.color = "green"

console.log(h3.classList);


h3.classList.add("bigText")
h3.classList.remove("text")

console.log(h3.classList.contains("text"));

const a = document.createElement("a")
a.classList.add("bigText")
a.textContent = "sitas elementas sukurtas JS"
a.id = "ManoID";
console.log(a);

div.appendChild(a)


const p = document.createElement("p");;
p.textContent = "KOKOKOKO";

div.append(p)

div.removeChild(p)

div.append("asdasd", "asdasdas")




const products = ["pienas", "alus", "bulka"]

const productListElement = document.querySelector("ul") 

products.forEach((pr) => {
    const li = document.createElement("li");
    li.textContent = pr;

    productListElement.append(li)
})









