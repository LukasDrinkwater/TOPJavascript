/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkPageDivs": () => (/* binding */ checkPageDivs),
/* harmony export */   "createHoursList": () => (/* binding */ createHoursList),
/* harmony export */   "createMenuList": () => (/* binding */ createMenuList)
/* harmony export */ });
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.js */ "./src/info.js");


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
  foodCardH1.classList.add("card-h1");
  drinksCard.classList.add("card");
  drinksCardH1.classList.add("card-h1");
  cakeCard.classList.add("card");
  cakeCardH1.classList.add("card-h1");

  let ul = document.createElement("ul");

  // loop through each menu array and add the info to a new card
  for (let i = 0; i < 3; i++) {
    let li = document.createElement("li");

    li.innerText = menuDrinks[i].price + " - " + menuDrinks[i].item;
    foodCardH1.innerText = "Drinks";
    foodCard.append(foodCardH1);
    ul.append(li);
    foodCard.appendChild(ul);
    infoCards.append(foodCard);
  }
}




/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "info": () => (/* binding */ info),
/* harmony export */   "menuCakes": () => (/* binding */ menuCakes),
/* harmony export */   "menuDrinks": () => (/* binding */ menuDrinks),
/* harmony export */   "menuFood": () => (/* binding */ menuFood)
/* harmony export */ });
let info = [
  { day: "Monday", open: "8", close: "8" },
  { day: "Tuesday", open: "8", close: "8" },
  { day: "Wednesday", open: "8", close: "8" },
  { day: "Thursday", open: "8", close: "8" },
  { day: "Friday", open: "8", close: "8" },
  { day: "Saturday", open: "8", close: "8" },
  { day: "Sunday", open: "8", close: "8" },
];

let menuFood = [
  { price: "£2", item: "Toast" },
  { price: "4", item: "Bacon barm" },
  { price: "£6.50", item: "Full English breakfast" },
];

let menuDrinks = [
  { price: "£1.50", item: "Tea" },
  { item: "Coffee", price: "£2.00" },
  { price: "£2.50", item: "Soft drinks" },
];

let menuCakes = [
  { price: "£3.00", item: "Chocolate cake" },
  { price: "£2.60", item: "Sponge Cake" },
  { price: "£2.50", item: "Ice cream" },
];




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.js */ "./src/info.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");



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
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkPageDivs)(currentPage);
  // if (currentPage != "menu") {
  //   const infoCards = document.getElementById("info-cards");
  //   console.log(infoCards.firstChild);

  //   while (infoCards.firstChild) {
  //     infoCards.removeChild(infoCards.firstChild);
  //   }
  // }

  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createMenuList)(infoCards, _info_js__WEBPACK_IMPORTED_MODULE_0__.menuFood, _info_js__WEBPACK_IMPORTED_MODULE_0__.menuDrinks, _info_js__WEBPACK_IMPORTED_MODULE_0__.menuCakes);
  currentPage = "menu";
  // added them to the the createMenuList function in functions
  // // create the card divs for the menu
  // const foodCard = document.createElement("div"),
  //   drinksCard = document.createElement("div"),
  //   cakeCard = document.createElement("div");

  // // add the correct class to each div
  // foodCard.classList.add("info-card");
  // drinksCard.classList.add("info-card");
  // cakeCard.classList.add("info-card");
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

  // create the main divs for the content.
  // create each elements
  // const content = document.getElementById("content");
  // mainContainer = document.createElement("div"),
  // logoName = document.createElement("div"),
  const aboutCard = document.createElement("div");
  const aboutCardP = document.createElement("p");

  // add the correct class to each div

  // logoName.classList.add("logo-name");
  // mainContainer.classList.add("main-container");
  // mainContainer.setAttribute("id", "main-container");
  infoCards.classList.add("info-cards");
  infoCards.setAttribute("id", "info-cards");
  aboutCard.classList.add("about", "card");

  // add content to the divs
  // logoName.innerHTML = "Pit Stop Cafe";
  aboutCardP.innerHTML = aboutText;

  // append to the correct divs
  // mainContainer.append(logoName);
  // mainContainer.append(infoCards);
  // content.append(mainContainer);
  aboutCard.append(aboutCardP);
  infoCards.append(aboutCard);

  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHoursList)(infoCards, _info_js__WEBPACK_IMPORTED_MODULE_0__.info);
}

function main() {
  // currentPage = "home";
  createHomePage();
}

main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkUxRDtBQUNBLElBQUksc0NBQXNDO0FBQzFDLElBQUksdUNBQXVDO0FBQzNDLElBQUkseUNBQXlDO0FBQzdDLElBQUksd0NBQXdDO0FBQzVDLElBQUksc0NBQXNDO0FBQzFDLElBQUksd0NBQXdDO0FBQzVDLElBQUksc0NBQXNDO0FBQzFDOztBQUVBO0FBQ0EsSUFBSSw0QkFBNEI7QUFDaEMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7QUFDQSxJQUFJLDZCQUE2QjtBQUNqQyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLHFDQUFxQztBQUN6Qzs7QUFFQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDLElBQUkscUNBQXFDO0FBQ3pDLElBQUksbUNBQW1DO0FBQ3ZDOztBQUVpRDs7Ozs7OztVQzVCakQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0U7QUFDYzs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDREQUFhO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsNkRBQWMsWUFBWSw4Q0FBUSxFQUFFLGdEQUFVLEVBQUUsK0NBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw4REFBZSxZQUFZLDBDQUFJO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYy8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYy8uL3NyYy9pbmZvLmpzIiwid2VicGFjazovL2Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbnVGb29kLCBtZW51RHJpbmtzLCBtZW51Q2FrZXMgfSBmcm9tIFwiLi9pbmZvLmpzXCI7XG5cbmZ1bmN0aW9uIGNoZWNrUGFnZURpdnMoY3VycmVudFBhZ2UpIHtcbiAgaWYgKGN1cnJlbnRQYWdlICE9IFwibWVudVwiKSB7XG4gICAgY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWNhcmRzXCIpO1xuICAgIGNvbnNvbGUubG9nKGluZm9DYXJkcy5maXJzdENoaWxkKTtcblxuICAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnNMaXN0KGluZm9DYXJkcywgaW5mbykge1xuICAvLyBtYWtlIHRoZSBkaXYgYW5kIHVsXG4gIGxldCBob3Vyc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGBpbmZvYCBhcnJheSBhbmQgY3JlYXRlIGEgbGlzdCBpdGVtIGZvciBlYWNoIGRheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxpLmlubmVyVGV4dCA9IGluZm9baV0uZGF5ICsgXCI6IFwiICsgaW5mb1tpXS5vcGVuICsgXCIgLSBcIiArIGluZm9baV0uY2xvc2U7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgaG91cnNDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgaG91cnNDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvQ2FyZHMuYXBwZW5kKGhvdXJzQ2FyZCk7XG5cbiAgcmV0dXJuIGhvdXJzQ2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUxpc3QoaW5mb0NhcmRzLCBtZW51Q2FrZXMsIG1lbnVEcmlua3MsIG1lbnVGb29kKSB7XG4gIGNvbnNvbGUubG9nKFwiaW50cyBpbiBjcmVhdGVNZW51TGlzdFwiKTtcbiAgLy8gY3JlYXRlIHRoZSBjYXJkIGRpdnMgYW5kIGVsZW1lbnRzIGZvciB0aGUgbWVudVxuICBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgZm9vZENhcmRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSxcbiAgICBkcmlua3NDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBkcmlua3NDYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXG4gICAgY2FrZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNha2VDYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG4gIGZvb2RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBmb29kQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuICBkcmlua3NDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBkcmlua3NDYXJkSDEuY2xhc3NMaXN0LmFkZChcImNhcmQtaDFcIik7XG4gIGNha2VDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjYWtlQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuXG4gIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyBsb29wIHRocm91Z2ggZWFjaCBtZW51IGFycmF5IGFuZCBhZGQgdGhlIGluZm8gdG8gYSBuZXcgY2FyZFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxpLmlubmVyVGV4dCA9IG1lbnVEcmlua3NbaV0ucHJpY2UgKyBcIiAtIFwiICsgbWVudURyaW5rc1tpXS5pdGVtO1xuICAgIGZvb2RDYXJkSDEuaW5uZXJUZXh0ID0gXCJEcmlua3NcIjtcbiAgICBmb29kQ2FyZC5hcHBlbmQoZm9vZENhcmRIMSk7XG4gICAgdWwuYXBwZW5kKGxpKTtcbiAgICBmb29kQ2FyZC5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaW5mb0NhcmRzLmFwcGVuZChmb29kQ2FyZCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlSG91cnNMaXN0LCBjcmVhdGVNZW51TGlzdCwgY2hlY2tQYWdlRGl2cyB9O1xuIiwibGV0IGluZm8gPSBbXG4gIHsgZGF5OiBcIk1vbmRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlR1ZXNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJXZWRuZXNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJUaHVyc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIkZyaWRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlNhdHVyZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiU3VuZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbl07XG5cbmxldCBtZW51Rm9vZCA9IFtcbiAgeyBwcmljZTogXCLCozJcIiwgaXRlbTogXCJUb2FzdFwiIH0sXG4gIHsgcHJpY2U6IFwiNFwiLCBpdGVtOiBcIkJhY29uIGJhcm1cIiB9LFxuICB7IHByaWNlOiBcIsKjNi41MFwiLCBpdGVtOiBcIkZ1bGwgRW5nbGlzaCBicmVha2Zhc3RcIiB9LFxuXTtcblxubGV0IG1lbnVEcmlua3MgPSBbXG4gIHsgcHJpY2U6IFwiwqMxLjUwXCIsIGl0ZW06IFwiVGVhXCIgfSxcbiAgeyBpdGVtOiBcIkNvZmZlZVwiLCBwcmljZTogXCLCozIuMDBcIiB9LFxuICB7IHByaWNlOiBcIsKjMi41MFwiLCBpdGVtOiBcIlNvZnQgZHJpbmtzXCIgfSxcbl07XG5cbmxldCBtZW51Q2FrZXMgPSBbXG4gIHsgcHJpY2U6IFwiwqMzLjAwXCIsIGl0ZW06IFwiQ2hvY29sYXRlIGNha2VcIiB9LFxuICB7IHByaWNlOiBcIsKjMi42MFwiLCBpdGVtOiBcIlNwb25nZSBDYWtlXCIgfSxcbiAgeyBwcmljZTogXCLCozIuNTBcIiwgaXRlbTogXCJJY2UgY3JlYW1cIiB9LFxuXTtcblxuZXhwb3J0IHsgaW5mbywgbWVudUZvb2QsIG1lbnVEcmlua3MsIG1lbnVDYWtlcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbmZvLCBtZW51Rm9vZCwgbWVudURyaW5rcywgbWVudUNha2VzIH0gZnJvbSBcIi4vaW5mby5qc1wiO1xuaW1wb3J0IHsgY2hlY2tQYWdlRGl2cywgY3JlYXRlSG91cnNMaXN0LCBjcmVhdGVNZW51TGlzdCB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xuXG5sZXQgY3VycmVudFBhZ2U7XG5jb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuXG4vLyBhZGQgYSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIDMgaGVhZGVyIGJ1dHRvbnMuXG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3JlYXRlSG9tZVBhZ2UoKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNyZWF0ZU1lbnVQYWdlKCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKFwibWVudSBidXR0b24gY2xpY2tcIik7XG5cbiAgLy8gY2hlY2tzIHRvIHNlZSBpZiB0aGUgaW5mby1jYXJzIGNvbnRhaW5lciBoYXMgYW55IGNoaWxkIGVsZW1lbnRzIHRoZW4gcmVtb3Zlc1xuICAvLyB0aGVtIGlmIGl0IGRvZXMuXG4gIGNoZWNrUGFnZURpdnMoY3VycmVudFBhZ2UpO1xuICAvLyBpZiAoY3VycmVudFBhZ2UgIT0gXCJtZW51XCIpIHtcbiAgLy8gICBjb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tY2FyZHNcIik7XG4gIC8vICAgY29uc29sZS5sb2coaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuXG4gIC8vICAgd2hpbGUgKGluZm9DYXJkcy5maXJzdENoaWxkKSB7XG4gIC8vICAgICBpbmZvQ2FyZHMucmVtb3ZlQ2hpbGQoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNyZWF0ZU1lbnVMaXN0KGluZm9DYXJkcywgbWVudUZvb2QsIG1lbnVEcmlua3MsIG1lbnVDYWtlcyk7XG4gIGN1cnJlbnRQYWdlID0gXCJtZW51XCI7XG4gIC8vIGFkZGVkIHRoZW0gdG8gdGhlIHRoZSBjcmVhdGVNZW51TGlzdCBmdW5jdGlvbiBpbiBmdW5jdGlvbnNcbiAgLy8gLy8gY3JlYXRlIHRoZSBjYXJkIGRpdnMgZm9yIHRoZSBtZW51XG4gIC8vIGNvbnN0IGZvb2RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgLy8gICBkcmlua3NDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgLy8gICBjYWtlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG4gIC8vIGZvb2RDYXJkLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRcIik7XG4gIC8vIGRyaW5rc0NhcmQuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZFwiKTtcbiAgLy8gY2FrZUNhcmQuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZFwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gIGlmIChjdXJyZW50UGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgIT0gXCJob21lXCIpIHtcbiAgICBjb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tY2FyZHNcIik7XG4gICAgY29uc29sZS5sb2coaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuXG4gICAgd2hpbGUgKGluZm9DYXJkcy5maXJzdENoaWxkKSB7XG4gICAgICBpbmZvQ2FyZHMucmVtb3ZlQ2hpbGQoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiaG9tZSBidXR0b24gY2xpY2tcIiwgY3VycmVudFBhZ2UpO1xuXG4gIGxldCBhYm91dFRleHQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VzY2lwaXQgYXRxdWUgbmVxdWUgbnVsbGEgYXV0IHF1aXNxdWFtIHNvbHV0YS4gT2RpdCBzdW50IGRvbG9yZSBub24gYmVhdGFlIGFjY3VzYW50aXVtIGFsaXF1YW0gZW9zIHJlcGVsbGF0LCBhc3BlcmlvcmVzLCByZWljaWVuZGlzLCBlc3NlIHF1b3MgbnVtcXVhbSBlbmltP1wiO1xuXG4gIGlmIChjdXJyZW50UGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxvZ29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIGxvZ29OYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2dvLW5hbWVcIik7XG4gICAgbG9nb05hbWUuaW5uZXJIVE1MID0gXCJQaXQgU3RvcCBDYWZlXCI7XG5cbiAgICBjb250ZW50LmFwcGVuZChtYWluQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChsb2dvTmFtZSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoaW5mb0NhcmRzKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSAhPSBcImhvbWVcIikge1xuICAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbiAgY3VycmVudFBhZ2UgPSBcImhvbWVcIjtcblxuICAvLyBjcmVhdGUgdGhlIG1haW4gZGl2cyBmb3IgdGhlIGNvbnRlbnQuXG4gIC8vIGNyZWF0ZSBlYWNoIGVsZW1lbnRzXG4gIC8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIC8vIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAvLyBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gIGNvbnN0IGFib3V0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFib3V0Q2FyZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBhZGQgdGhlIGNvcnJlY3QgY2xhc3MgdG8gZWFjaCBkaXZcblxuICAvLyBsb2dvTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nby1uYW1lXCIpO1xuICAvLyBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgLy8gbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICBpbmZvQ2FyZHMuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZHNcIik7XG4gIGluZm9DYXJkcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZm8tY2FyZHNcIik7XG4gIGFib3V0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIiwgXCJjYXJkXCIpO1xuXG4gIC8vIGFkZCBjb250ZW50IHRvIHRoZSBkaXZzXG4gIC8vIGxvZ29OYW1lLmlubmVySFRNTCA9IFwiUGl0IFN0b3AgQ2FmZVwiO1xuICBhYm91dENhcmRQLmlubmVySFRNTCA9IGFib3V0VGV4dDtcblxuICAvLyBhcHBlbmQgdG8gdGhlIGNvcnJlY3QgZGl2c1xuICAvLyBtYWluQ29udGFpbmVyLmFwcGVuZChsb2dvTmFtZSk7XG4gIC8vIG1haW5Db250YWluZXIuYXBwZW5kKGluZm9DYXJkcyk7XG4gIC8vIGNvbnRlbnQuYXBwZW5kKG1haW5Db250YWluZXIpO1xuICBhYm91dENhcmQuYXBwZW5kKGFib3V0Q2FyZFApO1xuICBpbmZvQ2FyZHMuYXBwZW5kKGFib3V0Q2FyZCk7XG5cbiAgY3JlYXRlSG91cnNMaXN0KGluZm9DYXJkcywgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIC8vIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG59XG5cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==