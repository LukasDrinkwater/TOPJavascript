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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRTFEO0FBQ0EsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSx1Q0FBdUM7QUFDM0MsSUFBSSx5Q0FBeUM7QUFDN0MsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxzQ0FBc0M7QUFDMUM7O0FBRUE7QUFDQSxJQUFJLDRCQUE0QjtBQUNoQyxJQUFJLGdDQUFnQztBQUNwQyxJQUFJLGdEQUFnRDtBQUNwRDs7QUFFQTtBQUNBLElBQUksNkJBQTZCO0FBQ2pDLElBQUksZ0NBQWdDO0FBQ3BDLElBQUkscUNBQXFDO0FBQ3pDOztBQUVBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxxQ0FBcUM7QUFDekMsSUFBSSxtQ0FBbUM7QUFDdkM7O0FBRWlEOzs7Ozs7O1VDNUJqRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rRTtBQUNjOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNERBQWE7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw2REFBYyxZQUFZLDhDQUFRLEVBQUUsZ0RBQVUsRUFBRSwrQ0FBUztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDhEQUFlLFlBQVksMENBQUk7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVudUZvb2QsIG1lbnVEcmlua3MsIG1lbnVDYWtlcyB9IGZyb20gXCIuL2luZm8uanNcIjtcblxuZnVuY3Rpb24gY2hlY2tQYWdlRGl2cyhjdXJyZW50UGFnZSkge1xuICBpZiAoY3VycmVudFBhZ2UgIT0gXCJtZW51XCIpIHtcbiAgICBjb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tY2FyZHNcIik7XG4gICAgY29uc29sZS5sb2coaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuXG4gICAgd2hpbGUgKGluZm9DYXJkcy5maXJzdENoaWxkKSB7XG4gICAgICBpbmZvQ2FyZHMucmVtb3ZlQ2hpbGQoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc0xpc3QoaW5mb0NhcmRzLCBpbmZvKSB7XG4gIC8vIG1ha2UgdGhlIGRpdiBhbmQgdWxcbiAgbGV0IGhvdXJzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYGluZm9gIGFycmF5IGFuZCBjcmVhdGUgYSBsaXN0IGl0ZW0gZm9yIGVhY2ggZGF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGkuaW5uZXJUZXh0ID0gaW5mb1tpXS5kYXkgKyBcIjogXCIgKyBpbmZvW2ldLm9wZW4gKyBcIiAtIFwiICsgaW5mb1tpXS5jbG9zZTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICBob3Vyc0NhcmQuYXBwZW5kQ2hpbGQodWwpO1xuICBob3Vyc0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm9DYXJkcy5hcHBlbmQoaG91cnNDYXJkKTtcblxuICByZXR1cm4gaG91cnNDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdChpbmZvQ2FyZHMsIG1lbnVDYWtlcywgbWVudURyaW5rcywgbWVudUZvb2QpIHtcbiAgY29uc29sZS5sb2coXCJpbnRzIGluIGNyZWF0ZU1lbnVMaXN0XCIpO1xuICAvLyBjcmVhdGUgdGhlIGNhcmQgZGl2cyBhbmQgZWxlbWVudHMgZm9yIHRoZSBtZW51XG4gIGNvbnN0IGZvb2RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBmb29kQ2FyZEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpLFxuICAgIGRyaW5rc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGRyaW5rc0NhcmRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSxcbiAgICBjYWtlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2FrZUNhcmRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAvLyBhZGQgdGhlIGNvcnJlY3QgY2xhc3MgdG8gZWFjaCBkaXZcbiAgZm9vZENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGZvb2RDYXJkSDEuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZC1oMVwiKTtcbiAgZHJpbmtzQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgZHJpbmtzQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmQtaDFcIik7XG4gIGNha2VDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjYWtlQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmQtaDFcIik7XG5cbiAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIC8vIGxvb3AgdGhyb3VnaCBlYWNoIG1lbnUgYXJyYXkgYW5kIGFkZCB0aGUgaW5mbyB0byBhIG5ldyBjYXJkXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGkuaW5uZXJUZXh0ID0gbWVudURyaW5rc1tpXS5wcmljZSArIFwiIC0gXCIgKyBtZW51RHJpbmtzW2ldLml0ZW07XG4gICAgZm9vZENhcmQuYXBwZW5kQ2hpbGQoZm9vZENhcmRIMSk7XG4gICAgZm9vZENhcmQuYXBwZW5kQ2hpbGQobGkpO1xuICAgIGluZm9DYXJkcy5hcHBlbmQoZm9vZENhcmQpO1xuICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhvdXJzTGlzdCwgY3JlYXRlTWVudUxpc3QsIGNoZWNrUGFnZURpdnMgfTtcbiIsImxldCBpbmZvID0gW1xuICB7IGRheTogXCJNb25kYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJUdWVzZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiV2VkbmVzZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiVGh1cnNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJGcmlkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJTYXR1cmRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlN1bmRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG5dO1xuXG5sZXQgbWVudUZvb2QgPSBbXG4gIHsgcHJpY2U6IFwiwqMyXCIsIGl0ZW06IFwiVG9hc3RcIiB9LFxuICB7IHByaWNlOiBcIjRcIiwgaXRlbTogXCJCYWNvbiBiYXJtXCIgfSxcbiAgeyBwcmljZTogXCLCozYuNTBcIiwgaXRlbTogXCJGdWxsIEVuZ2xpc2ggYnJlYWtmYXN0XCIgfSxcbl07XG5cbmxldCBtZW51RHJpbmtzID0gW1xuICB7IHByaWNlOiBcIsKjMS41MFwiLCBpdGVtOiBcIlRlYVwiIH0sXG4gIHsgaXRlbTogXCJDb2ZmZWVcIiwgcHJpY2U6IFwiwqMyLjAwXCIgfSxcbiAgeyBwcmljZTogXCLCozIuNTBcIiwgaXRlbTogXCJTb2Z0IGRyaW5rc1wiIH0sXG5dO1xuXG5sZXQgbWVudUNha2VzID0gW1xuICB7IHByaWNlOiBcIsKjMy4wMFwiLCBpdGVtOiBcIkNob2NvbGF0ZSBjYWtlXCIgfSxcbiAgeyBwcmljZTogXCLCozIuNjBcIiwgaXRlbTogXCJTcG9uZ2UgQ2FrZVwiIH0sXG4gIHsgcHJpY2U6IFwiwqMyLjUwXCIsIGl0ZW06IFwiSWNlIGNyZWFtXCIgfSxcbl07XG5cbmV4cG9ydCB7IGluZm8sIG1lbnVGb29kLCBtZW51RHJpbmtzLCBtZW51Q2FrZXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5mbywgbWVudUZvb2QsIG1lbnVEcmlua3MsIG1lbnVDYWtlcyB9IGZyb20gXCIuL2luZm8uanNcIjtcbmltcG9ydCB7IGNoZWNrUGFnZURpdnMsIGNyZWF0ZUhvdXJzTGlzdCwgY3JlYXRlTWVudUxpc3QgfSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcblxubGV0IGN1cnJlbnRQYWdlO1xuY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcblxuLy8gYWRkIGEgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSAzIGhlYWRlciBidXR0b25zLlxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG59KTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjcmVhdGVNZW51UGFnZSgpO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjb25zb2xlLmxvZyhcIm1lbnUgYnV0dG9uIGNsaWNrXCIpO1xuXG4gIC8vIGNoZWNrcyB0byBzZWUgaWYgdGhlIGluZm8tY2FycyBjb250YWluZXIgaGFzIGFueSBjaGlsZCBlbGVtZW50cyB0aGVuIHJlbW92ZXNcbiAgLy8gdGhlbSBpZiBpdCBkb2VzLlxuICBjaGVja1BhZ2VEaXZzKGN1cnJlbnRQYWdlKTtcbiAgLy8gaWYgKGN1cnJlbnRQYWdlICE9IFwibWVudVwiKSB7XG4gIC8vICAgY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWNhcmRzXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKGluZm9DYXJkcy5maXJzdENoaWxkKTtcblxuICAvLyAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAvLyAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBjcmVhdGVNZW51TGlzdChpbmZvQ2FyZHMsIG1lbnVGb29kLCBtZW51RHJpbmtzLCBtZW51Q2FrZXMpO1xuICBjdXJyZW50UGFnZSA9IFwibWVudVwiO1xuICAvLyBhZGRlZCB0aGVtIHRvIHRoZSB0aGUgY3JlYXRlTWVudUxpc3QgZnVuY3Rpb24gaW4gZnVuY3Rpb25zXG4gIC8vIC8vIGNyZWF0ZSB0aGUgY2FyZCBkaXZzIGZvciB0aGUgbWVudVxuICAvLyBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gIC8vICAgZHJpbmtzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gIC8vICAgY2FrZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIC8vIGFkZCB0aGUgY29ycmVjdCBjbGFzcyB0byBlYWNoIGRpdlxuICAvLyBmb29kQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaW5mby1jYXJkXCIpO1xuICAvLyBkcmlua3NDYXJkLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRcIik7XG4gIC8vIGNha2VDYXJkLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBpZiAoY3VycmVudFBhZ2UgPT09IHVuZGVmaW5lZCkge1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlICE9IFwiaG9tZVwiKSB7XG4gICAgY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWNhcmRzXCIpO1xuICAgIGNvbnNvbGUubG9nKGluZm9DYXJkcy5maXJzdENoaWxkKTtcblxuICAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhcImhvbWUgYnV0dG9uIGNsaWNrXCIsIGN1cnJlbnRQYWdlKTtcblxuICBsZXQgYWJvdXRUZXh0ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1c2NpcGl0IGF0cXVlIG5lcXVlIG51bGxhIGF1dCBxdWlzcXVhbSBzb2x1dGEuIE9kaXQgc3VudCBkb2xvcmUgbm9uIGJlYXRhZSBhY2N1c2FudGl1bSBhbGlxdWFtIGVvcyByZXBlbGxhdCwgYXNwZXJpb3JlcywgcmVpY2llbmRpcywgZXNzZSBxdW9zIG51bXF1YW0gZW5pbT9cIjtcblxuICBpZiAoY3VycmVudFBhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICBsb2dvTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nby1uYW1lXCIpO1xuICAgIGxvZ29OYW1lLmlubmVySFRNTCA9IFwiUGl0IFN0b3AgQ2FmZVwiO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobG9nb05hbWUpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGluZm9DYXJkcyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgIT0gXCJob21lXCIpIHtcbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG5cbiAgLy8gY3JlYXRlIHRoZSBtYWluIGRpdnMgZm9yIHRoZSBjb250ZW50LlxuICAvLyBjcmVhdGUgZWFjaCBlbGVtZW50c1xuICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAvLyBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgLy8gbG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICBjb25zdCBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhYm91dENhcmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG5cbiAgLy8gbG9nb05hbWUuY2xhc3NMaXN0LmFkZChcImxvZ28tbmFtZVwiKTtcbiAgLy8gbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gIC8vIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgaW5mb0NhcmRzLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRzXCIpO1xuICBpbmZvQ2FyZHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmZvLWNhcmRzXCIpO1xuICBhYm91dENhcmQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIsIFwiY2FyZFwiKTtcblxuICAvLyBhZGQgY29udGVudCB0byB0aGUgZGl2c1xuICAvLyBsb2dvTmFtZS5pbm5lckhUTUwgPSBcIlBpdCBTdG9wIENhZmVcIjtcbiAgYWJvdXRDYXJkUC5pbm5lckhUTUwgPSBhYm91dFRleHQ7XG5cbiAgLy8gYXBwZW5kIHRvIHRoZSBjb3JyZWN0IGRpdnNcbiAgLy8gbWFpbkNvbnRhaW5lci5hcHBlbmQobG9nb05hbWUpO1xuICAvLyBtYWluQ29udGFpbmVyLmFwcGVuZChpbmZvQ2FyZHMpO1xuICAvLyBjb250ZW50LmFwcGVuZChtYWluQ29udGFpbmVyKTtcbiAgYWJvdXRDYXJkLmFwcGVuZChhYm91dENhcmRQKTtcbiAgaW5mb0NhcmRzLmFwcGVuZChhYm91dENhcmQpO1xuXG4gIGNyZWF0ZUhvdXJzTGlzdChpbmZvQ2FyZHMsIGluZm8pO1xufVxuXG5mdW5jdGlvbiBtYWluKCkge1xuICAvLyBjdXJyZW50UGFnZSA9IFwiaG9tZVwiO1xuICBjcmVhdGVIb21lUGFnZSgpO1xufVxuXG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=