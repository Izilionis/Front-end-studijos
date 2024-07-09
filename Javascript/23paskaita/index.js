const postsUrl = "https://jsonplaceholder.typicode.com/posts"

const button = document.querySelector("button");

async function postData() {
    const response = await fetch(postsUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Asdaasd",
            body: "kasd kasd",
            userId: 20
        })
    })

    const data = await response.json();

    console.log(data);
}

button.addEventListener("click", postData)

const h1 = document.querySelector("h1")

h1.addEventListener("dblclick", () => console.log("double clicked"))

h1.addEventListener("mousedown", (e) => {
    e.target.style.fontSize = "50px";
})

h1.addEventListener("mouseup", (e) => {
    e.target.style.fontSize = "20px";
})







document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("enter clicked");
    }
})

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
    //eventas padaro, nenueitu per visus tevinius html elementus
    e.stopPropagation()

    if (e.key === "Enter") {
        console.log(e.target.value);
    }
})


input.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        e.target.value = "";
    }
})









