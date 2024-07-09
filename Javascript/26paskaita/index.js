

document.cookie = "name=ignas; expires=" + new Date(2025, 4, 10).toUTCString()

console.log(new Date(2024, 4, 10).toUTCString());

document.cookie = "lastName=Pavarde"

console.log(document.cookie);

function getCookie(key) {
    const cookies = document.cookie.split(";")

    for(let i = 0; i < cookies.length; i++){
        const keyValue = cookies[i].trim().split("=")
        console.log(keyValue);
        if (keyValue[0] === key) {
            return keyValue[1]
        }
    }

    console.log(cookies);
}

console.log(getCookie("name"));


localStorage.setItem("name", "Marius")
console.log(localStorage.getItem("name"));
localStorage.removeItem("name")



sessionStorage.setItem("sessionStorageName", "IGNGING")

const button = document.querySelector("button")
button.addEventListener("click", () => {
    localStorage.setItem("labas", "labutis")
})

window.addEventListener(`storege`, function(event) {
    console.log(`The value for `+ event.key+` changes from `+event.oldValue+` to `+event.newValue);
})







