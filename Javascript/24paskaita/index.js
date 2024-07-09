
const postForm = document.querySelector("#postForm");
const titleInput = document.querySelector("#titleInput");
const bodyInput = document.querySelector("#bodyInput");

const statusElement = document.querySelector("#statusText")
const bodyStatusElement = document.querySelector("#bodyStatus");

bodyInput.addEventListener("input", (e) => {
    const value =  e.target.value;

    if (value.length < 5) {
        bodyStatusElement.textContent = "Body is to short"
    }else if (value.length > 10){
        bodyStatusElement.textContent = "Body is too long"
    }else {
        bodyStatusElement.textContent = ""
    }
})

titleInput.addEventListener("focus", (e) => {
    e.target.style.width = "250px"
})
titleInput.addEventListener("blur", (e) => {
    e.target.style.width = "auto"
})

postForm.addEventListener("reset", (e) => {
    e.preventDefault();
    titleInput.value = "Pavysdine reiksme";
    bodyInput.value = ""
})

postForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const titleValue = titleInput.value;
    const bodyValue = bodyInput.value;

    try{

        statusElement.textContent = "Loading..."
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "ontent-type": "application/json",
            },
            body: JSON.stringify({
                title: titleValue,
                body: bodyValue,
                userId: 1
            })
        })
        if (response.ok){
            statusElement.textContent = "Success"
        }else {
            statusElement.textContent = "Please try again later"
        }

        console.log(response);

    }catch (error) {
        statusElement.textContent = "Please try again later"
    }

})






















