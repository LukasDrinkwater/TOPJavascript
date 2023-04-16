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
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage),
/* harmony export */   "createHoursList": () => (/* binding */ createHoursList),
/* harmony export */   "createMenuList": () => (/* binding */ createMenuList)
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

function checkPageDivs(currentPage) {
  if (currentPage != "menu") {
    const infoCards = document.getElementById("info-cards");

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

// // create the card divs and elements for the menu
// const foodCard = document.createElement("div"),
//   foodCardH1 = document.createElement("h1"),
//   drinksCard = document.createElement("div"),
//   drinksCardH1 = document.createElement("h1"),
//   cakeCard = document.createElement("div"),
//   cakeCardH1 = document.createElement("h1");

// // add the correct class to each div
// foodCard.classList.add("card");
// foodCardH1.classList.add("card-h1");
// drinksCard.classList.add("card");
// drinksCardH1.classList.add("card-h1");
// cakeCard.classList.add("card");
// cakeCardH1.classList.add("card-h1");

// // let ul = document.createElement("ul");

// // loop through each menu array and add the info to a new card
// for (let i = 0; i < allMenus.length; i++) {
//   let menu = allMenus[i];
//   let headingText;
//   let ul = document.createElement("ul");
//   let menuCard = document.createElement("div");
//   let menuCardh1 = document.createElement("h1");
//   menuCard.classList.add("card");
//   menuCardh1.classList.add("card-h1");

//   if (i === 0) {
//     headingText = "Breakfast";
//   } else if (i === 1) {
//     headingText = "Drinks";
//   } else if (i === 2) {
//     headingText = "Desserts";
//   }

//   for (let j = 0; j < 3; j++) {
//     let currentMenu = menu[j];

//     let li = document.createElement("li");

//     li.innerText = currentMenu.price + " - " + currentMenu.item;
//     menuCardh1.innerText = headingText;
//     menuCard.append(menuCardh1);
//     ul.append(li);
//     menuCard.appendChild(ul);
//     infoCards.append(menuCard);
//     }
//   }
// }

function createContactPage() {}




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
const infoCards = document.createElement("div");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

// add a event listener for the 3 header buttons.

homeButton.addEventListener("click", function () {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)(currentPage, infoCards, _info_js__WEBPACK_IMPORTED_MODULE_0__.info);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNERBQWE7QUFDZjs7QUFFQSxFQUFFLDZEQUFjLGNBQWMsOENBQVE7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw2REFBYyx5QkFBeUIsMENBQUk7O0FBRTdDO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5mbywgYWxsTWVudXMgfSBmcm9tIFwiLi9pbmZvLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKGN1cnJlbnRQYWdlLCBpbmZvQ2FyZHMsIGluZm8pIHtcbiAgaWYgKGN1cnJlbnRQYWdlID09PSB1bmRlZmluZWQpIHtcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSAhPSBcImhvbWVcIikge1xuICAgIGNvbnN0IGluZm9DYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1jYXJkc1wiKTtcblxuICAgIHdoaWxlIChpbmZvQ2FyZHMuZmlyc3RDaGlsZCkge1xuICAgICAgaW5mb0NhcmRzLnJlbW92ZUNoaWxkKGluZm9DYXJkcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPT09IFwiaG9tZVwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJob21lIGJ1dHRvbiBjbGlja1wiLCBjdXJyZW50UGFnZSk7XG5cbiAgbGV0IGFib3V0VGV4dCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdXNjaXBpdCBhdHF1ZSBuZXF1ZSBudWxsYSBhdXQgcXVpc3F1YW0gc29sdXRhLiBPZGl0IHN1bnQgZG9sb3JlIG5vbiBiZWF0YWUgYWNjdXNhbnRpdW0gYWxpcXVhbSBlb3MgcmVwZWxsYXQsIGFzcGVyaW9yZXMsIHJlaWNpZW5kaXMsIGVzc2UgcXVvcyBudW1xdWFtIGVuaW0/XCI7XG5cbiAgaWYgKGN1cnJlbnRQYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250YWluZXJcIik7XG4gICAgbG9nb05hbWUuY2xhc3NMaXN0LmFkZChcImxvZ28tbmFtZVwiKTtcbiAgICBsb2dvTmFtZS5pbm5lckhUTUwgPSBcIlBpdCBTdG9wIENhZmVcIjtcblxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW5Db250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGxvZ29OYW1lKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChpbmZvQ2FyZHMpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlICE9IFwiaG9tZVwiKSB7XG4gICAgd2hpbGUgKGluZm9DYXJkcy5maXJzdENoaWxkKSB7XG4gICAgICBpbmZvQ2FyZHMucmVtb3ZlQ2hpbGQoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuICBjdXJyZW50UGFnZSA9IFwiaG9tZVwiO1xuXG4gIGNvbnN0IGFib3V0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFib3V0Q2FyZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBhZGQgdGhlIGNvcnJlY3QgY2xhc3MgdG8gZWFjaCBkaXZcblxuICBpbmZvQ2FyZHMuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZHNcIik7XG4gIGluZm9DYXJkcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZm8tY2FyZHNcIik7XG4gIGFib3V0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIiwgXCJjYXJkXCIpO1xuXG4gIC8vIGFkZCBjb250ZW50IHRvIHRoZSBkaXZzXG4gIC8vIGxvZ29OYW1lLmlubmVySFRNTCA9IFwiUGl0IFN0b3AgQ2FmZVwiO1xuICBhYm91dENhcmRQLmlubmVySFRNTCA9IGFib3V0VGV4dDtcblxuICBhYm91dENhcmQuYXBwZW5kKGFib3V0Q2FyZFApO1xuICBpbmZvQ2FyZHMuYXBwZW5kKGFib3V0Q2FyZCk7XG5cbiAgY3JlYXRlSG91cnNMaXN0KGluZm9DYXJkcywgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUGFnZURpdnMoY3VycmVudFBhZ2UpIHtcbiAgaWYgKGN1cnJlbnRQYWdlICE9IFwibWVudVwiKSB7XG4gICAgY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWNhcmRzXCIpO1xuXG4gICAgd2hpbGUgKGluZm9DYXJkcy5maXJzdENoaWxkKSB7XG4gICAgICBpbmZvQ2FyZHMucmVtb3ZlQ2hpbGQoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc0xpc3QoaW5mb0NhcmRzLCBpbmZvKSB7XG4gIC8vIG1ha2UgdGhlIGRpdiBhbmQgdWxcbiAgbGV0IGhvdXJzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYGluZm9gIGFycmF5IGFuZCBjcmVhdGUgYSBsaXN0IGl0ZW0gZm9yIGVhY2ggZGF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgbGkuaW5uZXJUZXh0ID0gaW5mb1tpXS5kYXkgKyBcIjogXCIgKyBpbmZvW2ldLm9wZW4gKyBcIiAtIFwiICsgaW5mb1tpXS5jbG9zZTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICBob3Vyc0NhcmQuYXBwZW5kQ2hpbGQodWwpO1xuICBob3Vyc0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm9DYXJkcy5hcHBlbmQoaG91cnNDYXJkKTtcblxuICByZXR1cm4gaG91cnNDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdChjdXJyZW50UGFnZSwgYWxsTWVudXMpIHtcbiAgaWYgKGN1cnJlbnRQYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgIT0gXCJtZW51XCIpIHtcbiAgICBjb25zdCBpbmZvQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm8tY2FyZHNcIik7XG5cbiAgICB3aGlsZSAoaW5mb0NhcmRzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm9DYXJkcy5yZW1vdmVDaGlsZChpbmZvQ2FyZHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSB0aGUgY2FyZCBkaXZzIGFuZCBlbGVtZW50cyBmb3IgdGhlIG1lbnVcbiAgICBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICBmb29kQ2FyZEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpLFxuICAgICAgZHJpbmtzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICBkcmlua3NDYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXG4gICAgICBjYWtlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICBjYWtlQ2FyZEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG4gICAgZm9vZENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgZm9vZENhcmRIMS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oMVwiKTtcbiAgICBkcmlua3NDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGRyaW5rc0NhcmRIMS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1oMVwiKTtcbiAgICBjYWtlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjYWtlQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuXG4gICAgLy8gbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggbWVudSBhcnJheSBhbmQgYWRkIHRoZSBpbmZvIHRvIGEgbmV3IGNhcmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbWVudSA9IGFsbE1lbnVzW2ldO1xuICAgICAgbGV0IGhlYWRpbmdUZXh0O1xuICAgICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgbGV0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBtZW51Q2FyZGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgICBtZW51Q2FyZGgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuXG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBoZWFkaW5nVGV4dCA9IFwiQnJlYWtmYXN0XCI7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgaGVhZGluZ1RleHQgPSBcIkRyaW5rc1wiO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgIGhlYWRpbmdUZXh0ID0gXCJEZXNzZXJ0c1wiO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBsZXQgY3VycmVudE1lbnUgPSBtZW51W2pdO1xuXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICBsaS5pbm5lclRleHQgPSBjdXJyZW50TWVudS5wcmljZSArIFwiIC0gXCIgKyBjdXJyZW50TWVudS5pdGVtO1xuICAgICAgICBtZW51Q2FyZGgxLmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xuICAgICAgICBtZW51Q2FyZC5hcHBlbmQobWVudUNhcmRoMSk7XG4gICAgICAgIHVsLmFwcGVuZChsaSk7XG4gICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgaW5mb0NhcmRzLmFwcGVuZChtZW51Q2FyZCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBcIm1lbnVcIikge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyAvLyBjcmVhdGUgdGhlIGNhcmQgZGl2cyBhbmQgZWxlbWVudHMgZm9yIHRoZSBtZW51XG4vLyBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4vLyAgIGZvb2RDYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXG4vLyAgIGRyaW5rc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuLy8gICBkcmlua3NDYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiksXG4vLyAgIGNha2VDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbi8vICAgY2FrZUNhcmRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuLy8gLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG4vLyBmb29kQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbi8vIGZvb2RDYXJkSDEuY2xhc3NMaXN0LmFkZChcImNhcmQtaDFcIik7XG4vLyBkcmlua3NDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuLy8gZHJpbmtzQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuLy8gY2FrZUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4vLyBjYWtlQ2FyZEgxLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWgxXCIpO1xuXG4vLyAvLyBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbi8vIC8vIGxvb3AgdGhyb3VnaCBlYWNoIG1lbnUgYXJyYXkgYW5kIGFkZCB0aGUgaW5mbyB0byBhIG5ldyBjYXJkXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVzLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGxldCBtZW51ID0gYWxsTWVudXNbaV07XG4vLyAgIGxldCBoZWFkaW5nVGV4dDtcbi8vICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuLy8gICBsZXQgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBsZXQgbWVudUNhcmRoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbi8vICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4vLyAgIG1lbnVDYXJkaDEuY2xhc3NMaXN0LmFkZChcImNhcmQtaDFcIik7XG5cbi8vICAgaWYgKGkgPT09IDApIHtcbi8vICAgICBoZWFkaW5nVGV4dCA9IFwiQnJlYWtmYXN0XCI7XG4vLyAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuLy8gICAgIGhlYWRpbmdUZXh0ID0gXCJEcmlua3NcIjtcbi8vICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4vLyAgICAgaGVhZGluZ1RleHQgPSBcIkRlc3NlcnRzXCI7XG4vLyAgIH1cblxuLy8gICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuLy8gICAgIGxldCBjdXJyZW50TWVudSA9IG1lbnVbal07XG5cbi8vICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbi8vICAgICBsaS5pbm5lclRleHQgPSBjdXJyZW50TWVudS5wcmljZSArIFwiIC0gXCIgKyBjdXJyZW50TWVudS5pdGVtO1xuLy8gICAgIG1lbnVDYXJkaDEuaW5uZXJUZXh0ID0gaGVhZGluZ1RleHQ7XG4vLyAgICAgbWVudUNhcmQuYXBwZW5kKG1lbnVDYXJkaDEpO1xuLy8gICAgIHVsLmFwcGVuZChsaSk7XG4vLyAgICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQodWwpO1xuLy8gICAgIGluZm9DYXJkcy5hcHBlbmQobWVudUNhcmQpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHt9XG5cbmV4cG9ydCB7IGNyZWF0ZUhvdXJzTGlzdCwgY3JlYXRlTWVudUxpc3QsIGNoZWNrUGFnZURpdnMsIGNyZWF0ZUhvbWVQYWdlIH07XG4iLCJ2YXIgaW5mbyA9IFtcbiAgeyBkYXk6IFwiTW9uZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiVHVlc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIldlZG5lc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlRodXJzZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiRnJpZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiU2F0dXJkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJTdW5kYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuXTtcblxubGV0IGFsbE1lbnVzID0gW1xuICBbXG4gICAgeyBwcmljZTogXCLCozJcIiwgaXRlbTogXCJUb2FzdFwiIH0sXG4gICAgeyBwcmljZTogXCI0XCIsIGl0ZW06IFwiQmFjb24gYmFybVwiIH0sXG4gICAgeyBwcmljZTogXCLCozYuNTBcIiwgaXRlbTogXCJGdWxsIEVuZ2xpc2ggYnJlYWtmYXN0XCIgfSxcbiAgXSxcbiAgW1xuICAgIHsgcHJpY2U6IFwiwqMxLjUwXCIsIGl0ZW06IFwiVGVhXCIgfSxcbiAgICB7IGl0ZW06IFwiQ29mZmVlXCIsIHByaWNlOiBcIsKjMi4wMFwiIH0sXG4gICAgeyBwcmljZTogXCLCozIuNTBcIiwgaXRlbTogXCJTb2Z0IGRyaW5rc1wiIH0sXG4gIF0sXG4gIFtcbiAgICB7IHByaWNlOiBcIsKjMy4wMFwiLCBpdGVtOiBcIkNob2NvbGF0ZSBjYWtlXCIgfSxcbiAgICB7IHByaWNlOiBcIsKjMi42MFwiLCBpdGVtOiBcIlNwb25nZSBDYWtlXCIgfSxcbiAgICB7IHByaWNlOiBcIsKjMi41MFwiLCBpdGVtOiBcIkljZSBjcmVhbVwiIH0sXG4gIF0sXG5dO1xuXG5leHBvcnQgeyBpbmZvLCBhbGxNZW51cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbmZvLCBhbGxNZW51cyB9IGZyb20gXCIuL2luZm8uanNcIjtcbmltcG9ydCB7XG4gIGNoZWNrUGFnZURpdnMsXG4gIGNyZWF0ZUhvdXJzTGlzdCxcbiAgY3JlYXRlTWVudUxpc3QsXG4gIGNyZWF0ZUhvbWVQYWdlLFxufSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcblxuLy8gdmFyIHBhZ2VTdGF0ZSA9IHtcbi8vICAgY3VycmVudFBhZ2U6IG51bGwsXG4vLyB9O1xudmFyIGN1cnJlbnRQYWdlO1xuY29uc3QgaW5mb0NhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcblxuLy8gYWRkIGEgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSAzIGhlYWRlciBidXR0b25zLlxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNyZWF0ZUhvbWVQYWdlKGN1cnJlbnRQYWdlLCBpbmZvQ2FyZHMsIGluZm8pO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3JlYXRlTWVudVBhZ2UoKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc29sZS5sb2coXCJtZW51IGJ1dHRvbiBjbGlja1wiKTtcblxuICAvLyBjaGVja3MgdG8gc2VlIGlmIHRoZSBpbmZvLWNhcnMgY29udGFpbmVyIGhhcyBhbnkgY2hpbGQgZWxlbWVudHMgdGhlbiByZW1vdmVzXG4gIC8vIHRoZW0gaWYgaXQgZG9lcy5cbiAgY2hlY2tQYWdlRGl2cyhjdXJyZW50UGFnZSk7XG4gIC8vXG5cbiAgY3JlYXRlTWVudUxpc3QoY3VycmVudFBhZ2UsIGFsbE1lbnVzKTtcbiAgY3VycmVudFBhZ2UgPSBcIm1lbnVcIjtcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgLy8gY3VycmVudFBhZ2UgPSBcImhvbWVcIjtcbiAgY3JlYXRlSG9tZVBhZ2UoY3VycmVudFBhZ2UsIGluZm9DYXJkcywgaW5mbyk7XG5cbiAgY3VycmVudFBhZ2UgPSBcImhvbWVcIjtcbn1cblxubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9