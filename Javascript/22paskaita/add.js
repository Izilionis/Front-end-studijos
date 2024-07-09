
const robosUrl = "https://robust-safe-crafter.glitch.me/";


const list = document.querySelector("#list");

async function getRobos() {
    const response = await fetch(robosUrl);
    const data = await response.json();

    return data;
}

const robos = await getRobos();

async function addRobosList(array) {
    const todosList = array.map((robo) => {
        const div = document.createElement("div");
        const image = document.createElement("img");
        const price = document.createElement("h2");
        const city = document.createElement("h3");
        const description = document.createElement("p");

        div.classList.add("divdiv")
        image.src = robo.image;
        image.classList.add("image");
        price.textContent = robo.price;
        price.classList.add("price");
        city.textContent = robo.city;
        city.classList.add("city");
        description.textContent = robo.description;
        description.classList.add("description");

        div.append(image, price, city, description);

        return div;
    })

    list.append(...todosList)

}

addRobosList(robos);



const vilnius = document.querySelector("#vilnius");

vilnius.addEventListener("click", async () => {
   const getRoboss = await getRobos();

   const vilniuss = getRoboss.filter( (x) => x.city === "Vilnius" );
   
    list.innerHTML = "";

   addRobosList(vilniuss);

});


const kaunas = document.querySelector("#kaunas");

kaunas.addEventListener("click", async () => {
    const getRoboss = await getRobos();

    const kaunass = getRoboss.filter( (x) => x.city === "Kaunas" );
   
    list.innerHTML = "";

   addRobosList(kaunass);
})


const klaipeda = document.querySelector("#klaipeda");

klaipeda.addEventListener("click", async () => {
    const getRoboss = await getRobos();

    const klaipedaa = getRoboss.filter( (x) => x.city === "Klaipeda" );
   
    list.innerHTML = "";

   addRobosList(klaipedaa);
})

























