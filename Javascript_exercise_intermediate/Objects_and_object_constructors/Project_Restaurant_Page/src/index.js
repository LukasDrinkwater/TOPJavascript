import { info } from "./info.js";
import { createHoursList } from "./functions.js";

let currentPage = "home";
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

console.log("its workingegaeg");

// add a event listener for the 3 header buttons.

homeButton.addEventListener("click", function () {
  createHomePage();
});

homeButton.addEventListener("click", function () {
  createMenuPage();
});

function createMenuPage() {
  console.log("menu button click");
  currentPage = "menu";

  if (currentPage != "menu") {
    const mainContainer = document.getElementById("myDivContainer");

    button.addEventListener("click", function () {
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      }
    });
  }
}

function createHomePage() {
  console.log("home button click");
  currentPage = "home";

  let aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque neque nulla aut quisquam soluta. Odit sunt dolore non beatae accusantium aliquam eos repellat, asperiores, reiciendis, esse quos numquam enim?";

  // if (currentPage != "home") {
  // create the main divs for the content.
  // create each elements
  const content = document.getElementById("content"),
    mainContainer = document.createElement("div"),
    logoName = document.createElement("div"),
    infoCards = document.createElement("div"),
    aboutCard = document.createElement("div"),
    aboutCardP = document.createElement("p");

  // add the correct class to each div
  mainContainer.classList.add("main-container");
  logoName.classList.add("logo-name");
  infoCards.classList.add("info-cards");
  aboutCard.classList.add("about", "card");

  // add content to the divs
  logoName.innerHTML = "Pit Stop Cafe";
  aboutCardP.innerHTML = aboutText;

  // append to the correct divs
  mainContainer.append(logoName);
  mainContainer.append(infoCards);
  content.append(mainContainer);
  aboutCard.append(aboutCardP);
  infoCards.append(aboutCard);

  createHoursList(infoCards, info);
}
// }

function main() {
  createHomePage();
}

main();
