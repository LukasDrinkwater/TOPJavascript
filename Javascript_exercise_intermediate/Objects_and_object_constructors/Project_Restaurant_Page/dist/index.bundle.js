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
/* harmony export */   "createHoursList": () => (/* binding */ createHoursList),
/* harmony export */   "createMenuList": () => (/* binding */ createMenuList)
/* harmony export */ });
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

function createMenuList(menuFood, menuDrinks, menuCakes) {}




/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "info": () => (/* binding */ info)
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
  { item: "Toast", price: "£2" },
  { item: "Bacon barm", price: "4" },
  { item: "Full English breakfast", price: "£6.50" },
];

let menuDrinks = [
  { item: "Tea", price: "£1.50" },
  { item: "Coffee", price: "£2.00" },
  { item: "Soft drinks", price: "£2.50" },
];

let menuCakes = [
  { item: "Chocolate cake", price: "£3.00" },
  { item: "Sponge Cake", price: "£2.60" },
  { item: "Ice cream", price: "£2.50" },
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
  console.log("home button click", currentPage);

  let aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque neque nulla aut quisquam soluta. Odit sunt dolore non beatae accusantium aliquam eos repellat, asperiores, reiciendis, esse quos numquam enim?";

  if (currentPage === undefined) {
    var mainContainer = document.createElement("div");
    console.log(mainContainer);
    const logoName = document.createElement("div");
    mainContainer.classList.add("main-container");
    mainContainer.setAttribute("id", "main-container");
    logoName.classList.add("logo-name");
    logoName.innerHTML = "Pit Stop Cafe";
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
  const content = document.getElementById("content"),
    // mainContainer = document.createElement("div"),
    // logoName = document.createElement("div"),
    aboutCard = document.createElement("div"),
    aboutCardP = document.createElement("p");

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
  content.append(mainContainer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFMkM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCM0M7QUFDQSxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHVDQUF1QztBQUMzQyxJQUFJLHlDQUF5QztBQUM3QyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLHNDQUFzQztBQUMxQzs7QUFFQTtBQUNBLElBQUksNEJBQTRCO0FBQ2hDLElBQUksZ0NBQWdDO0FBQ3BDLElBQUksZ0RBQWdEO0FBQ3BEOztBQUVBO0FBQ0EsSUFBSSw2QkFBNkI7QUFDakMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxxQ0FBcUM7QUFDekM7O0FBRUE7QUFDQSxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLHFDQUFxQztBQUN6QyxJQUFJLG1DQUFtQztBQUN2Qzs7QUFFZ0I7Ozs7Ozs7VUM1QmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ2dCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw4REFBZSxZQUFZLDBDQUFJO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYy8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYy8uL3NyYy9pbmZvLmpzIiwid2VicGFjazovL2Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhvdXJzTGlzdChpbmZvQ2FyZHMsIGluZm8pIHtcbiAgLy8gbWFrZSB0aGUgZGl2IGFuZCB1bFxuICBsZXQgaG91cnNDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBgaW5mb2AgYXJyYXkgYW5kIGNyZWF0ZSBhIGxpc3QgaXRlbSBmb3IgZWFjaCBkYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBsaS5pbm5lclRleHQgPSBpbmZvW2ldLmRheSArIFwiOiBcIiArIGluZm9baV0ub3BlbiArIFwiIC0gXCIgKyBpbmZvW2ldLmNsb3NlO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIGhvdXJzQ2FyZC5hcHBlbmRDaGlsZCh1bCk7XG4gIGhvdXJzQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mb0NhcmRzLmFwcGVuZChob3Vyc0NhcmQpO1xuXG4gIHJldHVybiBob3Vyc0NhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVMaXN0KG1lbnVGb29kLCBtZW51RHJpbmtzLCBtZW51Q2FrZXMpIHt9XG5cbmV4cG9ydCB7IGNyZWF0ZUhvdXJzTGlzdCwgY3JlYXRlTWVudUxpc3QgfTtcbiIsImxldCBpbmZvID0gW1xuICB7IGRheTogXCJNb25kYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJUdWVzZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiV2VkbmVzZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiVGh1cnNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJGcmlkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJTYXR1cmRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlN1bmRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG5dO1xuXG5sZXQgbWVudUZvb2QgPSBbXG4gIHsgaXRlbTogXCJUb2FzdFwiLCBwcmljZTogXCLCozJcIiB9LFxuICB7IGl0ZW06IFwiQmFjb24gYmFybVwiLCBwcmljZTogXCI0XCIgfSxcbiAgeyBpdGVtOiBcIkZ1bGwgRW5nbGlzaCBicmVha2Zhc3RcIiwgcHJpY2U6IFwiwqM2LjUwXCIgfSxcbl07XG5cbmxldCBtZW51RHJpbmtzID0gW1xuICB7IGl0ZW06IFwiVGVhXCIsIHByaWNlOiBcIsKjMS41MFwiIH0sXG4gIHsgaXRlbTogXCJDb2ZmZWVcIiwgcHJpY2U6IFwiwqMyLjAwXCIgfSxcbiAgeyBpdGVtOiBcIlNvZnQgZHJpbmtzXCIsIHByaWNlOiBcIsKjMi41MFwiIH0sXG5dO1xuXG5sZXQgbWVudUNha2VzID0gW1xuICB7IGl0ZW06IFwiQ2hvY29sYXRlIGNha2VcIiwgcHJpY2U6IFwiwqMzLjAwXCIgfSxcbiAgeyBpdGVtOiBcIlNwb25nZSBDYWtlXCIsIHByaWNlOiBcIsKjMi42MFwiIH0sXG4gIHsgaXRlbTogXCJJY2UgY3JlYW1cIiwgcHJpY2U6IFwiwqMyLjUwXCIgfSxcbl07XG5cbmV4cG9ydCB7IGluZm8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5mbyB9IGZyb20gXCIuL2luZm8uanNcIjtcbmltcG9ydCB7IGNyZWF0ZUhvdXJzTGlzdCB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xuXG5sZXQgY3VycmVudFBhZ2U7XG5jb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuXG4vLyBhZGQgYSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIDMgaGVhZGVyIGJ1dHRvbnMuXG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3JlYXRlSG9tZVBhZ2UoKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNyZWF0ZU1lbnVQYWdlKCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKFwibWVudSBidXR0b24gY2xpY2tcIik7XG5cbiAgLy8gY2hlY2tzIHRvIHNlZSBpZiB0aGUgaW5mby1jYXJzIGNvbnRhaW5lciBoYXMgYW55IGNoaWxkIGVsZW1lbnRzIHRoZW4gcmVtb3Zlc1xuICAvLyB0aGVtIGlmIGl0IGRvZXMuXG4gIGlmIChjdXJyZW50UGFnZSAhPSBcIm1lbnVcIikge1xuICAgIGNvbnN0IGluZm9DYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1jYXJkc1wiKTtcbiAgICBjb25zb2xlLmxvZyhpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG5cbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIC8vIGNyZWF0ZSB0aGUgY2FyZCBkaXZzIGZvciB0aGUgbWVudVxuICBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgZHJpbmtzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2FrZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIGFkZCB0aGUgY29ycmVjdCBjbGFzcyB0byBlYWNoIGRpdlxuICBmb29kQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaW5mby1jYXJkXCIpO1xuICBkcmlua3NDYXJkLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRcIik7XG4gIGNha2VDYXJkLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zb2xlLmxvZyhcImhvbWUgYnV0dG9uIGNsaWNrXCIsIGN1cnJlbnRQYWdlKTtcblxuICBsZXQgYWJvdXRUZXh0ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1c2NpcGl0IGF0cXVlIG5lcXVlIG51bGxhIGF1dCBxdWlzcXVhbSBzb2x1dGEuIE9kaXQgc3VudCBkb2xvcmUgbm9uIGJlYXRhZSBhY2N1c2FudGl1bSBhbGlxdWFtIGVvcyByZXBlbGxhdCwgYXNwZXJpb3JlcywgcmVpY2llbmRpcywgZXNzZSBxdW9zIG51bXF1YW0gZW5pbT9cIjtcblxuICBpZiAoY3VycmVudFBhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zb2xlLmxvZyhtYWluQ29udGFpbmVyKTtcbiAgICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIGxvZ29OYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2dvLW5hbWVcIik7XG4gICAgbG9nb05hbWUuaW5uZXJIVE1MID0gXCJQaXQgU3RvcCBDYWZlXCI7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobG9nb05hbWUpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGluZm9DYXJkcyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgIT0gXCJob21lXCIpIHtcbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG5cbiAgLy8gY3JlYXRlIHRoZSBtYWluIGRpdnMgZm9yIHRoZSBjb250ZW50LlxuICAvLyBjcmVhdGUgZWFjaCBlbGVtZW50c1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLFxuICAgIC8vIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIC8vIGxvZ29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGFib3V0Q2FyZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBhZGQgdGhlIGNvcnJlY3QgY2xhc3MgdG8gZWFjaCBkaXZcblxuICAvLyBsb2dvTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nby1uYW1lXCIpO1xuICAvLyBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgLy8gbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICBpbmZvQ2FyZHMuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZHNcIik7XG4gIGluZm9DYXJkcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZm8tY2FyZHNcIik7XG4gIGFib3V0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIiwgXCJjYXJkXCIpO1xuXG4gIC8vIGFkZCBjb250ZW50IHRvIHRoZSBkaXZzXG4gIC8vIGxvZ29OYW1lLmlubmVySFRNTCA9IFwiUGl0IFN0b3AgQ2FmZVwiO1xuICBhYm91dENhcmRQLmlubmVySFRNTCA9IGFib3V0VGV4dDtcblxuICAvLyBhcHBlbmQgdG8gdGhlIGNvcnJlY3QgZGl2c1xuICAvLyBtYWluQ29udGFpbmVyLmFwcGVuZChsb2dvTmFtZSk7XG4gIC8vIG1haW5Db250YWluZXIuYXBwZW5kKGluZm9DYXJkcyk7XG4gIGNvbnRlbnQuYXBwZW5kKG1haW5Db250YWluZXIpO1xuICBhYm91dENhcmQuYXBwZW5kKGFib3V0Q2FyZFApO1xuICBpbmZvQ2FyZHMuYXBwZW5kKGFib3V0Q2FyZCk7XG5cbiAgY3JlYXRlSG91cnNMaXN0KGluZm9DYXJkcywgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIC8vIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG59XG5cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==