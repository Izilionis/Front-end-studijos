/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.querySelector("#output");

async function getCarBrand() {
  const response = await fetch("./cars.json");
  const carBrand = await response.json();
  return carBrand;
}

async function showCarBrand() {
  const carBrand = await getCarBrand();
  console.log(carBrand);

  carBrand.forEach((car) => {
    const carCard = document.createElement("div");
    output.append(carCard);
    carCard.classList.add("carCard");

    const carBrand = document.createElement("h3");
    carCard.append(carBrand);
    carBrand.classList.add("carBrand");
    carBrand.textContent = car.brand;

    const carModel = document.createElement("p");
    carCard.append(carModel);
    carModel.classList.add("carModel");
    carModel.textContent = `Models: ${[...car.models]}`;
  });
}

window.onload = function () {
  showCarBrand();
};
