/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const output = document.querySelector("#output");
const messagePlaceholder = document.querySelector("#message");
const button = document.querySelector("#btn");

async function getInfo() {
  const response = await fetch("https://api.github.com/users");
  const info = response.json();
  return info;
}

async function showInfo() {
  const info = await getInfo();

  messagePlaceholder.remove();

  info.forEach((id) => {
    const infoHolder = document.createElement("div");
    output.append(infoHolder);
    infoHolder.classList.add("infoHolder");

    const login = document.createElement("p");
    infoHolder.append(login);
    login.classList.add("login");
    login.textContent = `Login: ${id.login}`;

    const avatar = document.createElement("p");
    infoHolder.append(avatar);
    avatar.classList.add("avatar");
    avatar.textContent = `Avarat_url: ${id.avatar_url}`;
  });
}

button.addEventListener("click", showInfo);
