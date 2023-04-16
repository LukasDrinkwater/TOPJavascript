import { info, allMenus } from "./info.js";
import {
  checkPageDivs,
  createHoursList,
  createMenuList,
  createHomePage,
} from "./functions.js";

// var pageState = {
//   currentPage: null,
// };
var currentPage;
const infoCards = document.createElement("div");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

// add a event listener for the 3 header buttons.

homeButton.addEventListener("click", function () {
  createHomePage(currentPage, infoCards, info);
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

  createMenuList(currentPage, allMenus);
  currentPage = "menu";
}

function main() {
  // currentPage = "home";
  createHomePage(currentPage, infoCards, info);

  currentPage = "home";
}

main();
