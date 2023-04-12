import { menuFood, menuDrinks, menuCakes } from "./info.js";

function checkPageDivs(currentPage) {
  if (currentPage != "menu") {
    const infoCards = document.getElementById("info-cards");
    console.log(infoCards.firstChild);

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  }
}

function createHoursList(infoCards, info) {
  // make the div and ul
  let hoursCard = document.createElement("div");

  let ul = document.createElement("ul");

  // Loop through the `info` array and create a list item for each day
  for (let i = 0; i < 7; i++) {
    let li = document.createElement("li");

    li.innerText = info[i].day + ": " + info[i].open + " - " + info[i].close;

    ul.appendChild(li);
  }
  hoursCard.appendChild(ul);
  hoursCard.classList.add("card");
  infoCards.append(hoursCard);

  return hoursCard;
}

function createMenuList(infoCards, menuCakes, menuDrinks, menuFood) {
  console.log("ints in createMenuList");
  // create the card divs and elements for the menu
  const foodCard = document.createElement("div"),
    foodCardH1 = document.createElement("h1"),
    drinksCard = document.createElement("div"),
    drinksCardH1 = document.createElement("h1"),
    cakeCard = document.createElement("div"),
    cakeCardH1 = document.createElement("h1");

  // add the correct class to each div
  foodCard.classList.add("card");
  foodCardH1.classList.add("info-card-h1");
  drinksCard.classList.add("card");
  drinksCardH1.classList.add("info-card-h1");
  cakeCard.classList.add("card");
  cakeCardH1.classList.add("info-card-h1");

  let ul = document.createElement("ul");

  // loop through each menu array and add the info to a new card
  for (let i = 0; i < 3; i++) {
    let li = document.createElement("li");

    li.innerText = menuDrinks[i].price + " - " + menuDrinks[i].item;
    foodCard.appendChild(foodCardH1);
    foodCard.appendChild(li);
    infoCards.append(foodCard);
  }
}

export { createHoursList, createMenuList, checkPageDivs };
