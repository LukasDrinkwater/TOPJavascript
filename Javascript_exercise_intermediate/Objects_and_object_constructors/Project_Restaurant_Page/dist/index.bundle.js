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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFMkM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCM0M7QUFDQSxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHVDQUF1QztBQUMzQyxJQUFJLHlDQUF5QztBQUM3QyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLHNDQUFzQztBQUMxQzs7QUFFQTtBQUNBLElBQUksNEJBQTRCO0FBQ2hDLElBQUksZ0NBQWdDO0FBQ3BDLElBQUksZ0RBQWdEO0FBQ3BEOztBQUVBO0FBQ0EsSUFBSSw2QkFBNkI7QUFDakMsSUFBSSxnQ0FBZ0M7QUFDcEMsSUFBSSxxQ0FBcUM7QUFDekM7O0FBRUE7QUFDQSxJQUFJLHdDQUF3QztBQUM1QyxJQUFJLHFDQUFxQztBQUN6QyxJQUFJLG1DQUFtQztBQUN2Qzs7QUFFZ0I7Ozs7Ozs7VUM1QmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ2dCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDhEQUFlLFlBQVksMENBQUk7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSG91cnNMaXN0KGluZm9DYXJkcywgaW5mbykge1xuICAvLyBtYWtlIHRoZSBkaXYgYW5kIHVsXG4gIGxldCBob3Vyc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGBpbmZvYCBhcnJheSBhbmQgY3JlYXRlIGEgbGlzdCBpdGVtIGZvciBlYWNoIGRheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxpLmlubmVyVGV4dCA9IGluZm9baV0uZGF5ICsgXCI6IFwiICsgaW5mb1tpXS5vcGVuICsgXCIgLSBcIiArIGluZm9baV0uY2xvc2U7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgaG91cnNDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgaG91cnNDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvQ2FyZHMuYXBwZW5kKGhvdXJzQ2FyZCk7XG5cbiAgcmV0dXJuIGhvdXJzQ2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUxpc3QobWVudUZvb2QsIG1lbnVEcmlua3MsIG1lbnVDYWtlcykge31cblxuZXhwb3J0IHsgY3JlYXRlSG91cnNMaXN0LCBjcmVhdGVNZW51TGlzdCB9O1xuIiwibGV0IGluZm8gPSBbXG4gIHsgZGF5OiBcIk1vbmRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlR1ZXNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJXZWRuZXNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJUaHVyc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIkZyaWRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlNhdHVyZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiU3VuZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbl07XG5cbmxldCBtZW51Rm9vZCA9IFtcbiAgeyBpdGVtOiBcIlRvYXN0XCIsIHByaWNlOiBcIsKjMlwiIH0sXG4gIHsgaXRlbTogXCJCYWNvbiBiYXJtXCIsIHByaWNlOiBcIjRcIiB9LFxuICB7IGl0ZW06IFwiRnVsbCBFbmdsaXNoIGJyZWFrZmFzdFwiLCBwcmljZTogXCLCozYuNTBcIiB9LFxuXTtcblxubGV0IG1lbnVEcmlua3MgPSBbXG4gIHsgaXRlbTogXCJUZWFcIiwgcHJpY2U6IFwiwqMxLjUwXCIgfSxcbiAgeyBpdGVtOiBcIkNvZmZlZVwiLCBwcmljZTogXCLCozIuMDBcIiB9LFxuICB7IGl0ZW06IFwiU29mdCBkcmlua3NcIiwgcHJpY2U6IFwiwqMyLjUwXCIgfSxcbl07XG5cbmxldCBtZW51Q2FrZXMgPSBbXG4gIHsgaXRlbTogXCJDaG9jb2xhdGUgY2FrZVwiLCBwcmljZTogXCLCozMuMDBcIiB9LFxuICB7IGl0ZW06IFwiU3BvbmdlIENha2VcIiwgcHJpY2U6IFwiwqMyLjYwXCIgfSxcbiAgeyBpdGVtOiBcIkljZSBjcmVhbVwiLCBwcmljZTogXCLCozIuNTBcIiB9LFxuXTtcblxuZXhwb3J0IHsgaW5mbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbmZvIH0gZnJvbSBcIi4vaW5mby5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlSG91cnNMaXN0IH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XG5cbmxldCBjdXJyZW50UGFnZTtcbmNvbnN0IGluZm9DYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbi8vIGFkZCBhIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgMyBoZWFkZXIgYnV0dG9ucy5cblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjcmVhdGVIb21lUGFnZSgpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3JlYXRlTWVudVBhZ2UoKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc29sZS5sb2coXCJtZW51IGJ1dHRvbiBjbGlja1wiKTtcblxuICAvLyBjaGVja3MgdG8gc2VlIGlmIHRoZSBpbmZvLWNhcnMgY29udGFpbmVyIGhhcyBhbnkgY2hpbGQgZWxlbWVudHMgdGhlbiByZW1vdmVzXG4gIC8vIHRoZW0gaWYgaXQgZG9lcy5cbiAgaWYgKGN1cnJlbnRQYWdlICE9IFwibWVudVwiKSB7XG4gICAgY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWNhcmRzXCIpO1xuICAgIGNvbnNvbGUubG9nKGluZm9DYXJkcy5maXJzdENoaWxkKTtcblxuICAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbiAgLy8gY3JlYXRlIHRoZSBjYXJkIGRpdnMgZm9yIHRoZSBtZW51XG4gIGNvbnN0IGZvb2RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBkcmlua3NDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBjYWtlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG4gIGZvb2RDYXJkLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRcIik7XG4gIGRyaW5rc0NhcmQuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZFwiKTtcbiAgY2FrZUNhcmQuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZFwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKFwiaG9tZSBidXR0b24gY2xpY2tcIik7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCBhYm91dFRleHQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VzY2lwaXQgYXRxdWUgbmVxdWUgbnVsbGEgYXV0IHF1aXNxdWFtIHNvbHV0YS4gT2RpdCBzdW50IGRvbG9yZSBub24gYmVhdGFlIGFjY3VzYW50aXVtIGFsaXF1YW0gZW9zIHJlcGVsbGF0LCBhc3BlcmlvcmVzLCByZWljaWVuZGlzLCBlc3NlIHF1b3MgbnVtcXVhbSBlbmltP1wiO1xuXG4gIGlmIChjdXJyZW50UGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ29OYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2dvLW5hbWVcIik7XG4gICAgbG9nb05hbWUuaW5uZXJIVE1MID0gXCJQaXQgU3RvcCBDYWZlXCI7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobG9nb05hbWUpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlICE9IFwiaG9tZVwiKSB7XG4gICAgd2hpbGUgKGluZm9DYXJkcy5maXJzdENoaWxkKSB7XG4gICAgICBpbmZvQ2FyZHMucmVtb3ZlQ2hpbGQoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuICBjdXJyZW50UGFnZSA9IFwiaG9tZVwiO1xuICAvLyBjcmVhdGUgdGhlIG1haW4gZGl2cyBmb3IgdGhlIGNvbnRlbnQuXG4gIC8vIGNyZWF0ZSBlYWNoIGVsZW1lbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIiksXG4gICAgLy8gbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgLy8gbG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGFib3V0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgYWJvdXRDYXJkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIC8vIGFkZCB0aGUgY29ycmVjdCBjbGFzcyB0byBlYWNoIGRpdlxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICAvLyBsb2dvTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nby1uYW1lXCIpO1xuICBpbmZvQ2FyZHMuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZHNcIik7XG4gIGluZm9DYXJkcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZm8tY2FyZHNcIik7XG4gIGFib3V0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIiwgXCJjYXJkXCIpO1xuXG4gIC8vIGFkZCBjb250ZW50IHRvIHRoZSBkaXZzXG4gIC8vIGxvZ29OYW1lLmlubmVySFRNTCA9IFwiUGl0IFN0b3AgQ2FmZVwiO1xuICBhYm91dENhcmRQLmlubmVySFRNTCA9IGFib3V0VGV4dDtcblxuICAvLyBhcHBlbmQgdG8gdGhlIGNvcnJlY3QgZGl2c1xuICAvLyBtYWluQ29udGFpbmVyLmFwcGVuZChsb2dvTmFtZSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKGluZm9DYXJkcyk7XG4gIGNvbnRlbnQuYXBwZW5kKG1haW5Db250YWluZXIpO1xuICBhYm91dENhcmQuYXBwZW5kKGFib3V0Q2FyZFApO1xuICBpbmZvQ2FyZHMuYXBwZW5kKGFib3V0Q2FyZCk7XG5cbiAgY3JlYXRlSG91cnNMaXN0KGluZm9DYXJkcywgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIC8vIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG59XG5cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==