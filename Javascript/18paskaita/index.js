
const button = document.querySelector("button");
const input = document.querySelector("input")

button.addEventListener("click", (e) => {
    console.log(e.target);
    console.log("Mygtukas paspaustas");
})

button.addEventListener("mouseover", () => {
    console.log("Pele virs mygtuko");
})

button.addEventListener("mouseleave", () => {
    console.log("Pelyte isejo");
})


const h1 = document.querySelector("h1");

input.addEventListener("input", (e) => {
    console.log(e.target.value);
    h1.textContent = e.target.value;
})


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submit happened");
})


function showTooltip(event, text) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = text;
    tooltip.style.top = event.pageY + 10 + "px";
    tooltip.style.left = event.pageX + 10 + "px";
    document.body.appendChild(tooltip);
  }
  function hideTooltip() {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  }



  const a = document.querySelector(`#aHover`);

  a.addEventListener("mouseover", (e) => {
    const tooltip = document.createElement("div");

    tooltip.textContent = "Kazkoks tekstas";
    tooltip.style.top = `${e.pageY}px`;
    tooltip.style.left = `${e.pageX}px`;
    tooltip.style.position = "absolute";
    tooltip.classList.add("tooltip");

    document.body.append(tooltip)
  })

a.addEventListener("mouseleave", () => {
    const tooltip = document.querySelector(".tooltip");
    tooltip.remove();
})


const counterP = document.querySelector("p");
const decrementButton = document.querySelector("#decrementButton");
const incrementButton = document.querySelector("#incrementButton");

decrementButton.addEventListener("click", () => {
    counterP.textContent = +counterP.textContent - 1;
})

incrementButton.addEventListener("click", () => {
    counterP.textContent = +counterP.textContent + 1;
})



const imageSources = ["https://th.bing.com/th/id/OIP.UmQlynMptL0oLuBCpV3qxAHaEu?w=305&h=195&c=7&r=0&o=5&dpr=1.1&pid=1.7", "https://th.bing.com/th/id/OIP.ehhVSOYriHtA30bF4-_jCAHaFj?w=249&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7", "https://th.bing.com/th/id/OIP.cKwwzk4MDzy1uaZmkW6AawHaE7?w=280&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7"];


const nextImageButton = document.querySelector("#next");
const previousImageButton = document.querySelector("#previous");
const image = document.querySelector("img");

let currentImageIndex = 0;

nextImageButton.addEventListener("click", () => {
    currentImageIndex++;

    if (currentImageIndex > imageSources.length - 1) {
        currentImageIndex = 0;
    }


    image.src = imageSources[currentImageIndex];
});

previousImageButton.addEventListener("click", () => {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = imageSources.length - 1;
    }
    image.src = imageSources[currentImageIndex];
});


