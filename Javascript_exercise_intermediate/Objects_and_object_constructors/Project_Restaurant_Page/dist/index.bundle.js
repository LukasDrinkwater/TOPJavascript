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
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage),
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage),
/* harmony export */   "createHoursList": () => (/* binding */ createHoursList),
/* harmony export */   "createMenuList": () => (/* binding */ createMenuList),
/* harmony export */   "highlightCurrentPage": () => (/* binding */ highlightCurrentPage)
/* harmony export */ });
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.js */ "./src/info.js");


function createHomePage(currentPage, infoCards, info) {
  if (currentPage === undefined) {
  } else if (currentPage != "home") {
    const infoCards = document.getElementById("info-cards");

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  } else if (currentPage === "home") {
    return;
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

function createMenuList(currentPage, allMenus) {
  if (currentPage === undefined) {
    return;
  } else if (currentPage != "menu") {
    const infoCards = document.getElementById("info-cards");

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
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
  } else if (currentPage === "menu") {
    return;
  }
}

function createContactPage(currentPage, infoCards, contactInfo) {
  if (currentPage === undefined) {
  } else if (currentPage != "contact") {
    const infoCards = document.getElementById("info-cards");

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  } else if (currentPage === "contact") {
    return;
  }

  createContactList(infoCards, contactInfo);
}

function createContactList(infoCards, contactInfo) {
  // make the div and ul
  let contactCard = document.createElement("div");
  let ul = document.createElement("ul");

  // loop through the contactInfo array and create a list for the contact info

  for (let i = 0; i < contactInfo.length; i++) {
    let li = document.createElement("li");

    li.innerText = contactInfo[i].contactType + ": " + contactInfo[i].detail;

    ul.appendChild(li);
  }

  contactCard.appendChild(ul);
  contactCard.classList.add("card");
  infoCards.append(contactCard);

  return contactCard;
  // // make the div and ul
  // let hoursCard = document.createElement("div");

  // let ul = document.createElement("ul");

  // // Loop through the `info` array and create a list item for each day
  // for (let i = 0; i < 7; i++) {
  //   let li = document.createElement("li");

  //   li.innerText = info[i].day + ": " + info[i].open + " - " + info[i].close;

  //   ul.appendChild(li);
  // }
  // hoursCard.appendChild(ul);
  // hoursCard.classList.add("card");
  // infoCards.append(hoursCard);

  // return hoursCard;
}

function checkPageDivs(currentPage) {
  if (currentPage != "menu") {
    const infoCards = document.getElementById("info-cards");

    while (infoCards.firstChild) {
      infoCards.removeChild(infoCards.firstChild);
    }
  }
}

function highlightCurrentPage(currentPageDiv, previousPageDiv) {
  let clickedMenuButtons = document.getElementsByClassName(
    "menu-button-clicked"
  );

  for (let i = 0; i < clickedMenuButtons.length; i++) {
    let element = clickedMenuButtons[i];
    element.classList.remove("menu-button-clicked");
  }

  currentPageDiv.classList.add("menu-button-clicked");
  // if (currentPageDiv.classList.length === 1) {
  //   currentPageDiv.classList.add("menu-button-clicked");
  //   previousPageDiv = currentPageDiv;
  // } else if (currentPageDiv.classList.length === 2) {
  //   console.log(previousPageDiv);
  //   previousPageDiv.classList.remove("menu-button-clicked");
  // }
  // return previousPageDiv;
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
/* harmony export */   "contactInfo": () => (/* binding */ contactInfo),
/* harmony export */   "info": () => (/* binding */ info)
/* harmony export */ });
var info = [
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

let contactInfo = [
  { contactType: "Phone", detail: "07511 231485" },
  { contactType: "Email", detail: "pitstockcafe@cafe.com" },
  { contactType: "Twitter", detail: "@pitstopcafe" },
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

  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.highlightCurrentPage)(currentPageDiv, previousPageDiv);
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)(currentPage, infoCards, _info_js__WEBPACK_IMPORTED_MODULE_0__.info);
  currentPage = "home";
});

menuButton.addEventListener("click", function () {
  currentPageDiv = menuButton;
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.highlightCurrentPage)(currentPageDiv, previousPageDiv);
  createMenuPage();
});

contactButton.addEventListener("click", function () {
  currentPageDiv = contactButton;
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.highlightCurrentPage)(currentPageDiv, previousPageDiv);
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createContactPage)(currentPage, infoCards, _info_js__WEBPACK_IMPORTED_MODULE_0__.contactInfo);
});

function createMenuPage() {
  console.log("menu button click");

  // checks to see if the info-cars container has any child elements then removes
  // them if it does. bit redundant as I need to change it so there is another
  // variable which is the page that its trying to make so I can use the
  // checkPageDivs function no matter what page. At the moment it only works
  // on the when loading the menu page.
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkPageDivs)(currentPage);
  //

  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createMenuList)(currentPage, _info_js__WEBPACK_IMPORTED_MODULE_0__.allMenus);
  currentPage = "menu";
}

function main() {
  // currentPage = "home";
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)(currentPage, infoCards, _info_js__WEBPACK_IMPORTED_MODULE_0__.info);

  currentPage = "home";
}

main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFRaEM7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxtRUFBb0I7QUFDdEIsRUFBRSw2REFBYyx5QkFBeUIsMENBQUk7QUFDN0M7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG1FQUFvQjtBQUN0QjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsbUVBQW9CO0FBQ3RCLEVBQUUsZ0VBQWlCLHlCQUF5QixpREFBVztBQUN2RCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNERBQWE7QUFDZjs7QUFFQSxFQUFFLDZEQUFjLGNBQWMsOENBQVE7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw2REFBYyx5QkFBeUIsMENBQUk7O0FBRTdDO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5mbywgYWxsTWVudXMsIGNvbnRhY3RJbmZvIH0gZnJvbSBcIi4vaW5mby5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZShjdXJyZW50UGFnZSwgaW5mb0NhcmRzLCBpbmZvKSB7XG4gIGlmIChjdXJyZW50UGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgIT0gXCJob21lXCIpIHtcbiAgICBjb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tY2FyZHNcIik7XG5cbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBcImhvbWVcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiaG9tZSBidXR0b24gY2xpY2tcIiwgY3VycmVudFBhZ2UpO1xuXG4gIGxldCBhYm91dFRleHQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VzY2lwaXQgYXRxdWUgbmVxdWUgbnVsbGEgYXV0IHF1aXNxdWFtIHNvbHV0YS4gT2RpdCBzdW50IGRvbG9yZSBub24gYmVhdGFlIGFjY3VzYW50aXVtIGFsaXF1YW0gZW9zIHJlcGVsbGF0LCBhc3BlcmlvcmVzLCByZWljaWVuZGlzLCBlc3NlIHF1b3MgbnVtcXVhbSBlbmltP1wiO1xuXG4gIGlmIChjdXJyZW50UGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxvZ29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gICAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICAgIGxvZ29OYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2dvLW5hbWVcIik7XG4gICAgbG9nb05hbWUuaW5uZXJIVE1MID0gXCJQaXQgU3RvcCBDYWZlXCI7XG5cbiAgICBjb250ZW50LmFwcGVuZChtYWluQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChsb2dvTmFtZSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoaW5mb0NhcmRzKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSAhPSBcImhvbWVcIikge1xuICAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbiAgY3VycmVudFBhZ2UgPSBcImhvbWVcIjtcblxuICBjb25zdCBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhYm91dENhcmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG5cbiAgaW5mb0NhcmRzLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRzXCIpO1xuICBpbmZvQ2FyZHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmZvLWNhcmRzXCIpO1xuICBhYm91dENhcmQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIsIFwiY2FyZFwiKTtcblxuICAvLyBhZGQgY29udGVudCB0byB0aGUgZGl2c1xuICAvLyBsb2dvTmFtZS5pbm5lckhUTUwgPSBcIlBpdCBTdG9wIENhZmVcIjtcbiAgYWJvdXRDYXJkUC5pbm5lckhUTUwgPSBhYm91dFRleHQ7XG5cbiAgYWJvdXRDYXJkLmFwcGVuZChhYm91dENhcmRQKTtcbiAgaW5mb0NhcmRzLmFwcGVuZChhYm91dENhcmQpO1xuXG4gIGNyZWF0ZUhvdXJzTGlzdChpbmZvQ2FyZHMsIGluZm8pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc0xpc3QoaW5mb0NhcmRzLCBpbmZvKSB7XG4gIC8vIG1ha2UgdGhlIGRpdiBhbmQgdWxcbiAgbGV0IGhvdXJzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYGluZm9gIGFycmF5IGFuZCBjcmVhdGUgYSBsaXN0IGl0ZW0gZm9yIGVhY2ggZGF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGkuaW5uZXJUZXh0ID0gaW5mb1tpXS5kYXkgKyBcIjogXCIgKyBpbmZvW2ldLm9wZW4gKyBcIiAtIFwiICsgaW5mb1tpXS5jbG9zZTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICBob3Vyc0NhcmQuYXBwZW5kQ2hpbGQodWwpO1xuICBob3Vyc0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm9DYXJkcy5hcHBlbmQoaG91cnNDYXJkKTtcblxuICByZXR1cm4gaG91cnNDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdChjdXJyZW50UGFnZSwgYWxsTWVudXMpIHtcbiAgaWYgKGN1cnJlbnRQYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgIT0gXCJtZW51XCIpIHtcbiAgICBjb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tY2FyZHNcIik7XG5cbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSB0aGUgY2FyZCBkaXZzIGFuZCBlbGVtZW50cyBmb3IgdGhlIG1lbnVcbiAgICBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICBmb29kQ2FyZEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpLFxuICAgICAgZHJpbmtzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICBkcmlua3NDYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXG4gICAgICBjYWtlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICBjYWtlQ2FyZEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG4gICAgZm9vZENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgZm9vZENhcmRIMS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oMVwiKTtcbiAgICBkcmlua3NDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGRyaW5rc0NhcmRIMS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oMVwiKTtcbiAgICBjYWtlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjYWtlQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuXG4gICAgLy8gbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggbWVudSBhcnJheSBhbmQgYWRkIHRoZSBpbmZvIHRvIGEgbmV3IGNhcmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbWVudSA9IGFsbE1lbnVzW2ldO1xuICAgICAgbGV0IGhlYWRpbmdUZXh0O1xuICAgICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgbGV0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBtZW51Q2FyZGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgICBtZW51Q2FyZGgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuXG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBoZWFkaW5nVGV4dCA9IFwiQnJlYWtmYXN0XCI7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgaGVhZGluZ1RleHQgPSBcIkRyaW5rc1wiO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgIGhlYWRpbmdUZXh0ID0gXCJEZXNzZXJ0c1wiO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBsZXQgY3VycmVudE1lbnUgPSBtZW51W2pdO1xuXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICBsaS5pbm5lclRleHQgPSBjdXJyZW50TWVudS5wcmljZSArIFwiIC0gXCIgKyBjdXJyZW50TWVudS5pdGVtO1xuICAgICAgICBtZW51Q2FyZGgxLmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xuICAgICAgICBtZW51Q2FyZC5hcHBlbmQobWVudUNhcmRoMSk7XG4gICAgICAgIHVsLmFwcGVuZChsaSk7XG4gICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgaW5mb0NhcmRzLmFwcGVuZChtZW51Q2FyZCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBcIm1lbnVcIikge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZShjdXJyZW50UGFnZSwgaW5mb0NhcmRzLCBjb250YWN0SW5mbykge1xuICBpZiAoY3VycmVudFBhZ2UgPT09IHVuZGVmaW5lZCkge1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlICE9IFwiY29udGFjdFwiKSB7XG4gICAgY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWNhcmRzXCIpO1xuXG4gICAgd2hpbGUgKGluZm9DYXJkcy5maXJzdENoaWxkKSB7XG4gICAgICBpbmZvQ2FyZHMucmVtb3ZlQ2hpbGQoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gXCJjb250YWN0XCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjcmVhdGVDb250YWN0TGlzdChpbmZvQ2FyZHMsIGNvbnRhY3RJbmZvKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdExpc3QoaW5mb0NhcmRzLCBjb250YWN0SW5mbykge1xuICAvLyBtYWtlIHRoZSBkaXYgYW5kIHVsXG4gIGxldCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyBsb29wIHRocm91Z2ggdGhlIGNvbnRhY3RJbmZvIGFycmF5IGFuZCBjcmVhdGUgYSBsaXN0IGZvciB0aGUgY29udGFjdCBpbmZvXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0SW5mby5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxpLmlubmVyVGV4dCA9IGNvbnRhY3RJbmZvW2ldLmNvbnRhY3RUeXBlICsgXCI6IFwiICsgY29udGFjdEluZm9baV0uZGV0YWlsO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG5cbiAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQodWwpO1xuICBjb250YWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mb0NhcmRzLmFwcGVuZChjb250YWN0Q2FyZCk7XG5cbiAgcmV0dXJuIGNvbnRhY3RDYXJkO1xuICAvLyAvLyBtYWtlIHRoZSBkaXYgYW5kIHVsXG4gIC8vIGxldCBob3Vyc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyAvLyBMb29wIHRocm91Z2ggdGhlIGBpbmZvYCBhcnJheSBhbmQgY3JlYXRlIGEgbGlzdCBpdGVtIGZvciBlYWNoIGRheVxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAvLyAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAvLyAgIGxpLmlubmVyVGV4dCA9IGluZm9baV0uZGF5ICsgXCI6IFwiICsgaW5mb1tpXS5vcGVuICsgXCIgLSBcIiArIGluZm9baV0uY2xvc2U7XG5cbiAgLy8gICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIC8vIH1cbiAgLy8gaG91cnNDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgLy8gaG91cnNDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAvLyBpbmZvQ2FyZHMuYXBwZW5kKGhvdXJzQ2FyZCk7XG5cbiAgLy8gcmV0dXJuIGhvdXJzQ2FyZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tQYWdlRGl2cyhjdXJyZW50UGFnZSkge1xuICBpZiAoY3VycmVudFBhZ2UgIT0gXCJtZW51XCIpIHtcbiAgICBjb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tY2FyZHNcIik7XG5cbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlRGl2LCBwcmV2aW91c1BhZ2VEaXYpIHtcbiAgbGV0IGNsaWNrZWRNZW51QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgXCJtZW51LWJ1dHRvbi1jbGlja2VkXCJcbiAgKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrZWRNZW51QnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBlbGVtZW50ID0gY2xpY2tlZE1lbnVCdXR0b25zW2ldO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYnV0dG9uLWNsaWNrZWRcIik7XG4gIH1cblxuICBjdXJyZW50UGFnZURpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tY2xpY2tlZFwiKTtcbiAgLy8gaWYgKGN1cnJlbnRQYWdlRGl2LmNsYXNzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgLy8gICBjdXJyZW50UGFnZURpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tY2xpY2tlZFwiKTtcbiAgLy8gICBwcmV2aW91c1BhZ2VEaXYgPSBjdXJyZW50UGFnZURpdjtcbiAgLy8gfSBlbHNlIGlmIChjdXJyZW50UGFnZURpdi5jbGFzc0xpc3QubGVuZ3RoID09PSAyKSB7XG4gIC8vICAgY29uc29sZS5sb2cocHJldmlvdXNQYWdlRGl2KTtcbiAgLy8gICBwcmV2aW91c1BhZ2VEaXYuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYnV0dG9uLWNsaWNrZWRcIik7XG4gIC8vIH1cbiAgLy8gcmV0dXJuIHByZXZpb3VzUGFnZURpdjtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlSG91cnNMaXN0LFxuICBjcmVhdGVNZW51TGlzdCxcbiAgY2hlY2tQYWdlRGl2cyxcbiAgY3JlYXRlSG9tZVBhZ2UsXG4gIGNyZWF0ZUNvbnRhY3RQYWdlLFxuICBoaWdobGlnaHRDdXJyZW50UGFnZSxcbn07XG4iLCJ2YXIgaW5mbyA9IFtcbiAgeyBkYXk6IFwiTW9uZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiVHVlc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIldlZG5lc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlRodXJzZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiRnJpZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiU2F0dXJkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJTdW5kYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuXTtcblxubGV0IGFsbE1lbnVzID0gW1xuICBbXG4gICAgeyBwcmljZTogXCLCozJcIiwgaXRlbTogXCJUb2FzdFwiIH0sXG4gICAgeyBwcmljZTogXCI0XCIsIGl0ZW06IFwiQmFjb24gYmFybVwiIH0sXG4gICAgeyBwcmljZTogXCLCozYuNTBcIiwgaXRlbTogXCJGdWxsIEVuZ2xpc2ggYnJlYWtmYXN0XCIgfSxcbiAgXSxcbiAgW1xuICAgIHsgcHJpY2U6IFwiwqMxLjUwXCIsIGl0ZW06IFwiVGVhXCIgfSxcbiAgICB7IGl0ZW06IFwiQ29mZmVlXCIsIHByaWNlOiBcIsKjMi4wMFwiIH0sXG4gICAgeyBwcmljZTogXCLCozIuNTBcIiwgaXRlbTogXCJTb2Z0IGRyaW5rc1wiIH0sXG4gIF0sXG4gIFtcbiAgICB7IHByaWNlOiBcIsKjMy4wMFwiLCBpdGVtOiBcIkNob2NvbGF0ZSBjYWtlXCIgfSxcbiAgICB7IHByaWNlOiBcIsKjMi42MFwiLCBpdGVtOiBcIlNwb25nZSBDYWtlXCIgfSxcbiAgICB7IHByaWNlOiBcIsKjMi41MFwiLCBpdGVtOiBcIkljZSBjcmVhbVwiIH0sXG4gIF0sXG5dO1xuXG5sZXQgY29udGFjdEluZm8gPSBbXG4gIHsgY29udGFjdFR5cGU6IFwiUGhvbmVcIiwgZGV0YWlsOiBcIjA3NTExIDIzMTQ4NVwiIH0sXG4gIHsgY29udGFjdFR5cGU6IFwiRW1haWxcIiwgZGV0YWlsOiBcInBpdHN0b2NrY2FmZUBjYWZlLmNvbVwiIH0sXG4gIHsgY29udGFjdFR5cGU6IFwiVHdpdHRlclwiLCBkZXRhaWw6IFwiQHBpdHN0b3BjYWZlXCIgfSxcbl07XG5cbmV4cG9ydCB7IGluZm8sIGFsbE1lbnVzLCBjb250YWN0SW5mbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbmZvLCBhbGxNZW51cywgY29udGFjdEluZm8gfSBmcm9tIFwiLi9pbmZvLmpzXCI7XG5pbXBvcnQge1xuICBjaGVja1BhZ2VEaXZzLFxuICBjcmVhdGVIb3Vyc0xpc3QsXG4gIGNyZWF0ZU1lbnVMaXN0LFxuICBjcmVhdGVIb21lUGFnZSxcbiAgY3JlYXRlQ29udGFjdFBhZ2UsXG4gIGhpZ2hsaWdodEN1cnJlbnRQYWdlLFxufSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcblxuLy8gdmFyIHBhZ2VTdGF0ZSA9IHtcbi8vICAgY3VycmVudFBhZ2U6IG51bGwsXG4vLyB9O1xudmFyIGN1cnJlbnRQYWdlO1xudmFyIGN1cnJlbnRQYWdlRGl2O1xudmFyIHByZXZpb3VzUGFnZURpdjtcbmNvbnN0IGluZm9DYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbi8vIGFkZCBhIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgMyBoZWFkZXIgYnV0dG9ucy5cblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjdXJyZW50UGFnZURpdiA9IGhvbWVCdXR0b247XG5cbiAgaGlnaGxpZ2h0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2VEaXYsIHByZXZpb3VzUGFnZURpdik7XG4gIGNyZWF0ZUhvbWVQYWdlKGN1cnJlbnRQYWdlLCBpbmZvQ2FyZHMsIGluZm8pO1xuICBjdXJyZW50UGFnZSA9IFwiaG9tZVwiO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3VycmVudFBhZ2VEaXYgPSBtZW51QnV0dG9uO1xuICBoaWdobGlnaHRDdXJyZW50UGFnZShjdXJyZW50UGFnZURpdiwgcHJldmlvdXNQYWdlRGl2KTtcbiAgY3JlYXRlTWVudVBhZ2UoKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGN1cnJlbnRQYWdlRGl2ID0gY29udGFjdEJ1dHRvbjtcbiAgaGlnaGxpZ2h0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2VEaXYsIHByZXZpb3VzUGFnZURpdik7XG4gIGNyZWF0ZUNvbnRhY3RQYWdlKGN1cnJlbnRQYWdlLCBpbmZvQ2FyZHMsIGNvbnRhY3RJbmZvKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc29sZS5sb2coXCJtZW51IGJ1dHRvbiBjbGlja1wiKTtcblxuICAvLyBjaGVja3MgdG8gc2VlIGlmIHRoZSBpbmZvLWNhcnMgY29udGFpbmVyIGhhcyBhbnkgY2hpbGQgZWxlbWVudHMgdGhlbiByZW1vdmVzXG4gIC8vIHRoZW0gaWYgaXQgZG9lcy4gYml0IHJlZHVuZGFudCBhcyBJIG5lZWQgdG8gY2hhbmdlIGl0IHNvIHRoZXJlIGlzIGFub3RoZXJcbiAgLy8gdmFyaWFibGUgd2hpY2ggaXMgdGhlIHBhZ2UgdGhhdCBpdHMgdHJ5aW5nIHRvIG1ha2Ugc28gSSBjYW4gdXNlIHRoZVxuICAvLyBjaGVja1BhZ2VEaXZzIGZ1bmN0aW9uIG5vIG1hdHRlciB3aGF0IHBhZ2UuIEF0IHRoZSBtb21lbnQgaXQgb25seSB3b3Jrc1xuICAvLyBvbiB0aGUgd2hlbiBsb2FkaW5nIHRoZSBtZW51IHBhZ2UuXG4gIGNoZWNrUGFnZURpdnMoY3VycmVudFBhZ2UpO1xuICAvL1xuXG4gIGNyZWF0ZU1lbnVMaXN0KGN1cnJlbnRQYWdlLCBhbGxNZW51cyk7XG4gIGN1cnJlbnRQYWdlID0gXCJtZW51XCI7XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIC8vIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG4gIGNyZWF0ZUhvbWVQYWdlKGN1cnJlbnRQYWdlLCBpbmZvQ2FyZHMsIGluZm8pO1xuXG4gIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG59XG5cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==