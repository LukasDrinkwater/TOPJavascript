import { info, allMenus, contactInfo } from "./info.js";
import {
  checkPageDivs,
  createHoursList,
  createMenuList,
  createHomePage,
  createContactPage,
  highlightCurrentPage,
} from "./functions.js";

// var pageState = {
//   currentPage: null,
// };
var currentPage;
var currentPageDiv;
var previousPageDiv;
const infoCards = document.createElement("div");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

// add a event listener for the 3 header buttons.

homeButton.addEventListener("click", function () {
  currentPageDiv = homeButton;

  highlightCurrentPage(currentPageDiv, previousPageDiv);
  createHomePage(currentPage, infoCards, info);
  currentPage = "home";
});

menuButton.addEventListener("click", function () {
  currentPageDiv = menuButton;
  highlightCurrentPage(currentPageDiv, previousPageDiv);
  createMenuPage();
});

contactButton.addEventListener("click", function () {
  currentPageDiv = contactButton;
  highlightCurrentPage(currentPageDiv, previousPageDiv);
  createContactPage(currentPage, infoCards, contactInfo);
});

function createMenuPage() {
  console.log("menu button click");

  // checks to see if the info-cars container has any child elements then removes
  // them if it does. bit redundant as I need to change it so there is another
  // variable which is the page that its trying to make so I can use the
  // checkPageDivs function no matter what page. At the moment it only works
  // on the when loading the menu page.
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
