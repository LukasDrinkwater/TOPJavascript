import { info, allMenus } from "./info.js";
import { checkPageDivs, createHoursList, createMenuList } from "./functions.js";

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
  checkPageDivs(currentPage);
  //

  createMenuList(infoCards, allMenus);
  currentPage = "menu";
}

function createHomePage() {
  if (currentPage === undefined) {
  } else if (currentPage != "home") {
    const infoCards = document.getElementById("info-cards");
    console.log(infoCards.firstChild);

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  }

  console.log("home button click", currentPage);

  let aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque neque nulla aut quisquam soluta. Odit sunt dolore non beatae accusantium aliquam eos repellat, asperiores, reiciendis, esse quos numquam enim?";

  if (currentPage === undefined) {
    var mainContainer = document.createElement("div");
    const logoName = document.createElement("div");
    const content = document.getElementById("content");

    mainContainer.classList.add("main-container");
    mainContainer.setAttribute("id", "main-container");
    logoName.classList.add("logo-name");
    logoName.innerHTML = "Pit Stop Cafe";

    content.append(mainContainer);
    mainContainer.append(logoName);
    mainContainer.append(infoCards);
  } else if (currentPage != "home") {
    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  }
  currentPage = "home";

  const aboutCard = document.createElement("div");
  const aboutCardP = document.createElement("p");

  // add the correct class to each div

  infoCards.classList.add("info-cards");
  infoCards.setAttribute("id", "info-cards");
  aboutCard.classList.add("about", "card");

  // add content to the divs
  // logoName.innerHTML = "Pit Stop Cafe";
  aboutCardP.innerHTML = aboutText;

  aboutCard.append(aboutCardP);
  infoCards.append(aboutCard);

  createHoursList(infoCards, info);
}

function main() {
  // currentPage = "home";
  createHomePage();
}

main();
