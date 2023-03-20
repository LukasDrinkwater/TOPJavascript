import { info } from "./info.js";
import { createHoursList } from "./functions.js";

let currentPage;
const infoCards = document.createElement("div");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

// add a event listener for the 3 header buttons.

homeButton.addEventListener("click", function () {
  createHomePage();
});

menuButton.addEventListener("click", function () {
  createMenuPage();
});

function createMenuPage() {
  console.log("menu button click");

  // checks to see if the info-cars container has any child elements then removes
  // them if it does.
  if (currentPage != "menu") {
    const infoCards = document.getElementById("info-cards");
    console.log(infoCards.firstChild);

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  }
  // create the card divs for the menu
  const foodCard = document.createElement("div"),
    drinksCard = document.createElement("div"),
    cakeCard = document.createElement("div");

  // add the correct class to each div
  foodCard.classList.add("info-card");
  drinksCard.classList.add("info-card");
  cakeCard.classList.add("info-card");
}

function createHomePage() {
  console.log("home button click");
  const mainContainer = document.createElement("div");

  let aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque neque nulla aut quisquam soluta. Odit sunt dolore non beatae accusantium aliquam eos repellat, asperiores, reiciendis, esse quos numquam enim?";

  if (currentPage === undefined) {
    const logoName = document.createElement("div");
    logoName.classList.add("logo-name");
    logoName.innerHTML = "Pit Stop Cafe";
    mainContainer.append(logoName);
  } else if (currentPage != "home") {
    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  }
  currentPage = "home";
  // create the main divs for the content.
  // create each elements
  const content = document.getElementById("content"),
    // mainContainer = document.createElement("div"),
    // logoName = document.createElement("div"),
    aboutCard = document.createElement("div"),
    aboutCardP = document.createElement("p");

  // add the correct class to each div
  mainContainer.classList.add("main-container");
  mainContainer.setAttribute("id", "main-container");
  // logoName.classList.add("logo-name");
  infoCards.classList.add("info-cards");
  infoCards.setAttribute("id", "info-cards");
  aboutCard.classList.add("about", "card");

  // add content to the divs
  // logoName.innerHTML = "Pit Stop Cafe";
  aboutCardP.innerHTML = aboutText;

  // append to the correct divs
  // mainContainer.append(logoName);
  mainContainer.append(infoCards);
  content.append(mainContainer);
  aboutCard.append(aboutCardP);
  infoCards.append(aboutCard);

  createHoursList(infoCards, info);
}

function main() {
  // currentPage = "home";
  createHomePage();
}

main();
