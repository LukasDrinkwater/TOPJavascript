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

function createMenuList(infoCards, allMenus) {
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

  // let ul = document.createElement("ul");

  // loop through each menu array and add the info to a new card
  for (let i = 0; i < allMenus.length; i++) {
    let menu = allMenus[i];
    let headingText;
    let ul = document.createElement("ul");
    let menuCard = document.createElement("div");
    let menuCardh1 = document.createElement("h1");
    menuCard.classList.add("card");
    menuCardh1.classList.add("card-h1");

    if (i === 0) {
      headingText = "Breakfast";
    } else if (i === 1) {
      headingText = "Drinks";
    } else if (i === 2) {
      headingText = "Desserts";
    }

    for (let j = 0; j < 3; j++) {
      let currentMenu = menu[j];

      let li = document.createElement("li");

      li.innerText = currentMenu.price + " - " + currentMenu.item;
      menuCardh1.innerText = headingText;
      menuCard.append(menuCardh1);
      ul.append(li);
      menuCard.appendChild(ul);
      infoCards.append(menuCard);
    }
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
/* harmony export */   "allMenus": () => (/* binding */ allMenus),
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

let allMenus = [
  [
    { price: "£2", item: "Toast" },
    { price: "4", item: "Bacon barm" },
    { price: "£6.50", item: "Full English breakfast" },
  ],
  [
    { price: "£1.50", item: "Tea" },
    { item: "Coffee", price: "£2.00" },
    { price: "£2.50", item: "Soft drinks" },
  ],
  [
    { price: "£3.00", item: "Chocolate cake" },
    { price: "£2.60", item: "Sponge Cake" },
    { price: "£2.50", item: "Ice cream" },
  ],
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
  //

  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createMenuList)(infoCards, _info_js__WEBPACK_IMPORTED_MODULE_0__.allMenus);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsTWVudXMgfSBmcm9tIFwiLi9pbmZvLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBpZiAoY3VycmVudFBhZ2UgPT09IHVuZGVmaW5lZCkge1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlICE9IFwiaG9tZVwiKSB7XG4gICAgY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWNhcmRzXCIpO1xuICAgIGNvbnNvbGUubG9nKGluZm9DYXJkcy5maXJzdENoaWxkKTtcblxuICAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhcImhvbWUgYnV0dG9uIGNsaWNrXCIsIGN1cnJlbnRQYWdlKTtcblxuICBsZXQgYWJvdXRUZXh0ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1c2NpcGl0IGF0cXVlIG5lcXVlIG51bGxhIGF1dCBxdWlzcXVhbSBzb2x1dGEuIE9kaXQgc3VudCBkb2xvcmUgbm9uIGJlYXRhZSBhY2N1c2FudGl1bSBhbGlxdWFtIGVvcyByZXBlbGxhdCwgYXNwZXJpb3JlcywgcmVpY2llbmRpcywgZXNzZSBxdW9zIG51bXF1YW0gZW5pbT9cIjtcblxuICBpZiAoY3VycmVudFBhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICBsb2dvTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nby1uYW1lXCIpO1xuICAgIGxvZ29OYW1lLmlubmVySFRNTCA9IFwiUGl0IFN0b3AgQ2FmZVwiO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobG9nb05hbWUpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGluZm9DYXJkcyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgIT0gXCJob21lXCIpIHtcbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG5cbiAgY29uc3QgYWJvdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWJvdXRDYXJkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIC8vIGFkZCB0aGUgY29ycmVjdCBjbGFzcyB0byBlYWNoIGRpdlxuXG4gIGluZm9DYXJkcy5jbGFzc0xpc3QuYWRkKFwiaW5mby1jYXJkc1wiKTtcbiAgaW5mb0NhcmRzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5mby1jYXJkc1wiKTtcbiAgYWJvdXRDYXJkLmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiLCBcImNhcmRcIik7XG5cbiAgLy8gYWRkIGNvbnRlbnQgdG8gdGhlIGRpdnNcbiAgLy8gbG9nb05hbWUuaW5uZXJIVE1MID0gXCJQaXQgU3RvcCBDYWZlXCI7XG4gIGFib3V0Q2FyZFAuaW5uZXJIVE1MID0gYWJvdXRUZXh0O1xuXG4gIGFib3V0Q2FyZC5hcHBlbmQoYWJvdXRDYXJkUCk7XG4gIGluZm9DYXJkcy5hcHBlbmQoYWJvdXRDYXJkKTtcblxuICBjcmVhdGVIb3Vyc0xpc3QoaW5mb0NhcmRzLCBpbmZvKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQYWdlRGl2cyhjdXJyZW50UGFnZSkge1xuICBpZiAoY3VycmVudFBhZ2UgIT0gXCJtZW51XCIpIHtcbiAgICBjb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tY2FyZHNcIik7XG4gICAgY29uc29sZS5sb2coaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuXG4gICAgd2hpbGUgKGluZm9DYXJkcy5maXJzdENoaWxkKSB7XG4gICAgICBpbmZvQ2FyZHMucmVtb3ZlQ2hpbGQoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc0xpc3QoaW5mb0NhcmRzLCBpbmZvKSB7XG4gIC8vIG1ha2UgdGhlIGRpdiBhbmQgdWxcbiAgbGV0IGhvdXJzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYGluZm9gIGFycmF5IGFuZCBjcmVhdGUgYSBsaXN0IGl0ZW0gZm9yIGVhY2ggZGF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGkuaW5uZXJUZXh0ID0gaW5mb1tpXS5kYXkgKyBcIjogXCIgKyBpbmZvW2ldLm9wZW4gKyBcIiAtIFwiICsgaW5mb1tpXS5jbG9zZTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICBob3Vyc0NhcmQuYXBwZW5kQ2hpbGQodWwpO1xuICBob3Vyc0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm9DYXJkcy5hcHBlbmQoaG91cnNDYXJkKTtcblxuICByZXR1cm4gaG91cnNDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdChpbmZvQ2FyZHMsIGFsbE1lbnVzKSB7XG4gIGNvbnNvbGUubG9nKFwiaW50cyBpbiBjcmVhdGVNZW51TGlzdFwiKTtcbiAgLy8gY3JlYXRlIHRoZSBjYXJkIGRpdnMgYW5kIGVsZW1lbnRzIGZvciB0aGUgbWVudVxuICBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgZm9vZENhcmRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSxcbiAgICBkcmlua3NDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBkcmlua3NDYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXG4gICAgY2FrZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNha2VDYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG4gIGZvb2RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBmb29kQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuICBkcmlua3NDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBkcmlua3NDYXJkSDEuY2xhc3NMaXN0LmFkZChcImNhcmQtaDFcIik7XG4gIGNha2VDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjYWtlQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuXG4gIC8vIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyBsb29wIHRocm91Z2ggZWFjaCBtZW51IGFycmF5IGFuZCBhZGQgdGhlIGluZm8gdG8gYSBuZXcgY2FyZFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG1lbnUgPSBhbGxNZW51c1tpXTtcbiAgICBsZXQgaGVhZGluZ1RleHQ7XG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxldCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IG1lbnVDYXJkaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgbWVudUNhcmRoMS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oMVwiKTtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBoZWFkaW5nVGV4dCA9IFwiQnJlYWtmYXN0XCI7XG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICBoZWFkaW5nVGV4dCA9IFwiRHJpbmtzXCI7XG4gICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICBoZWFkaW5nVGV4dCA9IFwiRGVzc2VydHNcIjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgbGV0IGN1cnJlbnRNZW51ID0gbWVudVtqXTtcblxuICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICBsaS5pbm5lclRleHQgPSBjdXJyZW50TWVudS5wcmljZSArIFwiIC0gXCIgKyBjdXJyZW50TWVudS5pdGVtO1xuICAgICAgbWVudUNhcmRoMS5pbm5lclRleHQgPSBoZWFkaW5nVGV4dDtcbiAgICAgIG1lbnVDYXJkLmFwcGVuZChtZW51Q2FyZGgxKTtcbiAgICAgIHVsLmFwcGVuZChsaSk7XG4gICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICBpbmZvQ2FyZHMuYXBwZW5kKG1lbnVDYXJkKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlSG91cnNMaXN0LCBjcmVhdGVNZW51TGlzdCwgY2hlY2tQYWdlRGl2cyB9O1xuIiwibGV0IGluZm8gPSBbXG4gIHsgZGF5OiBcIk1vbmRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlR1ZXNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJXZWRuZXNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJUaHVyc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIkZyaWRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlNhdHVyZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiU3VuZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbl07XG5cbmxldCBhbGxNZW51cyA9IFtcbiAgW1xuICAgIHsgcHJpY2U6IFwiwqMyXCIsIGl0ZW06IFwiVG9hc3RcIiB9LFxuICAgIHsgcHJpY2U6IFwiNFwiLCBpdGVtOiBcIkJhY29uIGJhcm1cIiB9LFxuICAgIHsgcHJpY2U6IFwiwqM2LjUwXCIsIGl0ZW06IFwiRnVsbCBFbmdsaXNoIGJyZWFrZmFzdFwiIH0sXG4gIF0sXG4gIFtcbiAgICB7IHByaWNlOiBcIsKjMS41MFwiLCBpdGVtOiBcIlRlYVwiIH0sXG4gICAgeyBpdGVtOiBcIkNvZmZlZVwiLCBwcmljZTogXCLCozIuMDBcIiB9LFxuICAgIHsgcHJpY2U6IFwiwqMyLjUwXCIsIGl0ZW06IFwiU29mdCBkcmlua3NcIiB9LFxuICBdLFxuICBbXG4gICAgeyBwcmljZTogXCLCozMuMDBcIiwgaXRlbTogXCJDaG9jb2xhdGUgY2FrZVwiIH0sXG4gICAgeyBwcmljZTogXCLCozIuNjBcIiwgaXRlbTogXCJTcG9uZ2UgQ2FrZVwiIH0sXG4gICAgeyBwcmljZTogXCLCozIuNTBcIiwgaXRlbTogXCJJY2UgY3JlYW1cIiB9LFxuICBdLFxuXTtcblxuZXhwb3J0IHsgaW5mbywgYWxsTWVudXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5mbywgYWxsTWVudXMgfSBmcm9tIFwiLi9pbmZvLmpzXCI7XG5pbXBvcnQgeyBjaGVja1BhZ2VEaXZzLCBjcmVhdGVIb3Vyc0xpc3QsIGNyZWF0ZU1lbnVMaXN0IH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XG5cbmxldCBjdXJyZW50UGFnZTtcbmNvbnN0IGluZm9DYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbi8vIGFkZCBhIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgMyBoZWFkZXIgYnV0dG9ucy5cblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjcmVhdGVIb21lUGFnZSgpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3JlYXRlTWVudVBhZ2UoKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc29sZS5sb2coXCJtZW51IGJ1dHRvbiBjbGlja1wiKTtcblxuICAvLyBjaGVja3MgdG8gc2VlIGlmIHRoZSBpbmZvLWNhcnMgY29udGFpbmVyIGhhcyBhbnkgY2hpbGQgZWxlbWVudHMgdGhlbiByZW1vdmVzXG4gIC8vIHRoZW0gaWYgaXQgZG9lcy5cbiAgY2hlY2tQYWdlRGl2cyhjdXJyZW50UGFnZSk7XG4gIC8vXG5cbiAgY3JlYXRlTWVudUxpc3QoaW5mb0NhcmRzLCBhbGxNZW51cyk7XG4gIGN1cnJlbnRQYWdlID0gXCJtZW51XCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBpZiAoY3VycmVudFBhZ2UgPT09IHVuZGVmaW5lZCkge1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlICE9IFwiaG9tZVwiKSB7XG4gICAgY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWNhcmRzXCIpO1xuICAgIGNvbnNvbGUubG9nKGluZm9DYXJkcy5maXJzdENoaWxkKTtcblxuICAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhcImhvbWUgYnV0dG9uIGNsaWNrXCIsIGN1cnJlbnRQYWdlKTtcblxuICBsZXQgYWJvdXRUZXh0ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1c2NpcGl0IGF0cXVlIG5lcXVlIG51bGxhIGF1dCBxdWlzcXVhbSBzb2x1dGEuIE9kaXQgc3VudCBkb2xvcmUgbm9uIGJlYXRhZSBhY2N1c2FudGl1bSBhbGlxdWFtIGVvcyByZXBlbGxhdCwgYXNwZXJpb3JlcywgcmVpY2llbmRpcywgZXNzZSBxdW9zIG51bXF1YW0gZW5pbT9cIjtcblxuICBpZiAoY3VycmVudFBhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICBsb2dvTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nby1uYW1lXCIpO1xuICAgIGxvZ29OYW1lLmlubmVySFRNTCA9IFwiUGl0IFN0b3AgQ2FmZVwiO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobG9nb05hbWUpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGluZm9DYXJkcyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgIT0gXCJob21lXCIpIHtcbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG5cbiAgY29uc3QgYWJvdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWJvdXRDYXJkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIC8vIGFkZCB0aGUgY29ycmVjdCBjbGFzcyB0byBlYWNoIGRpdlxuXG4gIGluZm9DYXJkcy5jbGFzc0xpc3QuYWRkKFwiaW5mby1jYXJkc1wiKTtcbiAgaW5mb0NhcmRzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5mby1jYXJkc1wiKTtcbiAgYWJvdXRDYXJkLmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiLCBcImNhcmRcIik7XG5cbiAgLy8gYWRkIGNvbnRlbnQgdG8gdGhlIGRpdnNcbiAgLy8gbG9nb05hbWUuaW5uZXJIVE1MID0gXCJQaXQgU3RvcCBDYWZlXCI7XG4gIGFib3V0Q2FyZFAuaW5uZXJIVE1MID0gYWJvdXRUZXh0O1xuXG4gIGFib3V0Q2FyZC5hcHBlbmQoYWJvdXRDYXJkUCk7XG4gIGluZm9DYXJkcy5hcHBlbmQoYWJvdXRDYXJkKTtcblxuICBjcmVhdGVIb3Vyc0xpc3QoaW5mb0NhcmRzLCBpbmZvKTtcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgLy8gY3VycmVudFBhZ2UgPSBcImhvbWVcIjtcbiAgY3JlYXRlSG9tZVBhZ2UoKTtcbn1cblxubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9