import { info } from "./info.js";
import { createHoursList } from "./functions.js";

console.log("its workingegaeg");

function createMainPage() {
  let aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque neque nulla aut quisquam soluta. Odit sunt dolore non beatae accusantium aliquam eos repellat, asperiores, reiciendis, esse quos numquam enim?";

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

// function createMenuPage() {}

function main() {
  createMainPage();
}

main();
