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
/* harmony export */   "createHoursList": () => (/* binding */ createHoursList)
/* harmony export */ });
function createHoursList(info, infoCards) {
  // make the div and ul
  let hoursCard = document.createElement("div");

  let ul = document.createElement("ul");

  // Loop through the `info` array and create a list item for each day
  for (let i = 0; i < info.length; i++) {
    let li = document.createElement("li");

    li.innerText = info[i].day + ": " + info[i].open + " - " + info[i].close;

    ul.appendChild(li);
  }
  hoursCard.appendChild(ul);
  console.log(hoursCard);
  console.log(infoCards);
  infoCards.append(hoursCard);

  return hoursCard;
}




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
let info = {
  hours: {
    monday: {
      day: "Monday",
      open: "8",
      close: "8",
    },
    tuesday: {
      day: "Tuesday",
      open: "8",
      close: "8",
    },
    wednesday: {
      day: "Wednesday",
      open: "8",
      close: "8",
    },
    thursday: {
      day: "Thursday",
      open: "8",
      close: "8",
    },
    friday: {
      day: "Friday",
      open: "8",
      close: "10",
    },
    saturday: {
      day: "Saturday",
      open: "6",
      close: "8",
    },
    sunday: {
      day: "Sunday",
      open: "8",
      close: "8",
    },
  },
};




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

  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHoursList)(_info_js__WEBPACK_IMPORTED_MODULE_0__.info);
}

// function createMenuPage() {}

function main() {
  createMainPage();
}

main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7OztBQ3RCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFZ0I7Ozs7Ozs7VUN4Q2hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ2dCOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw4REFBZSxDQUFDLDBDQUFJO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2MvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2MvLi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIb3Vyc0xpc3QoaW5mbywgaW5mb0NhcmRzKSB7XG4gIC8vIG1ha2UgdGhlIGRpdiBhbmQgdWxcbiAgbGV0IGhvdXJzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYGluZm9gIGFycmF5IGFuZCBjcmVhdGUgYSBsaXN0IGl0ZW0gZm9yIGVhY2ggZGF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxpLmlubmVyVGV4dCA9IGluZm9baV0uZGF5ICsgXCI6IFwiICsgaW5mb1tpXS5vcGVuICsgXCIgLSBcIiArIGluZm9baV0uY2xvc2U7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgaG91cnNDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgY29uc29sZS5sb2coaG91cnNDYXJkKTtcbiAgY29uc29sZS5sb2coaW5mb0NhcmRzKTtcbiAgaW5mb0NhcmRzLmFwcGVuZChob3Vyc0NhcmQpO1xuXG4gIHJldHVybiBob3Vyc0NhcmQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhvdXJzTGlzdCB9O1xuIiwibGV0IGluZm8gPSB7XG4gIGhvdXJzOiB7XG4gICAgbW9uZGF5OiB7XG4gICAgICBkYXk6IFwiTW9uZGF5XCIsXG4gICAgICBvcGVuOiBcIjhcIixcbiAgICAgIGNsb3NlOiBcIjhcIixcbiAgICB9LFxuICAgIHR1ZXNkYXk6IHtcbiAgICAgIGRheTogXCJUdWVzZGF5XCIsXG4gICAgICBvcGVuOiBcIjhcIixcbiAgICAgIGNsb3NlOiBcIjhcIixcbiAgICB9LFxuICAgIHdlZG5lc2RheToge1xuICAgICAgZGF5OiBcIldlZG5lc2RheVwiLFxuICAgICAgb3BlbjogXCI4XCIsXG4gICAgICBjbG9zZTogXCI4XCIsXG4gICAgfSxcbiAgICB0aHVyc2RheToge1xuICAgICAgZGF5OiBcIlRodXJzZGF5XCIsXG4gICAgICBvcGVuOiBcIjhcIixcbiAgICAgIGNsb3NlOiBcIjhcIixcbiAgICB9LFxuICAgIGZyaWRheToge1xuICAgICAgZGF5OiBcIkZyaWRheVwiLFxuICAgICAgb3BlbjogXCI4XCIsXG4gICAgICBjbG9zZTogXCIxMFwiLFxuICAgIH0sXG4gICAgc2F0dXJkYXk6IHtcbiAgICAgIGRheTogXCJTYXR1cmRheVwiLFxuICAgICAgb3BlbjogXCI2XCIsXG4gICAgICBjbG9zZTogXCI4XCIsXG4gICAgfSxcbiAgICBzdW5kYXk6IHtcbiAgICAgIGRheTogXCJTdW5kYXlcIixcbiAgICAgIG9wZW46IFwiOFwiLFxuICAgICAgY2xvc2U6IFwiOFwiLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgeyBpbmZvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluZm8gfSBmcm9tIFwiLi9pbmZvLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVIb3Vyc0xpc3QgfSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcblxuY29uc29sZS5sb2coXCJpdHMgd29ya2luZ2VnYWVnXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluUGFnZSgpIHtcbiAgbGV0IGFib3V0VGV4dCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdXNjaXBpdCBhdHF1ZSBuZXF1ZSBudWxsYSBhdXQgcXVpc3F1YW0gc29sdXRhLiBPZGl0IHN1bnQgZG9sb3JlIG5vbiBiZWF0YWUgYWNjdXNhbnRpdW0gYWxpcXVhbSBlb3MgcmVwZWxsYXQsIGFzcGVyaW9yZXMsIHJlaWNpZW5kaXMsIGVzc2UgcXVvcyBudW1xdWFtIGVuaW0/XCI7XG5cbiAgLy8gY3JlYXRlIHRoZSBtYWluIGRpdnMgZm9yIHRoZSBjb250ZW50LlxuICAvLyBjcmVhdGUgZWFjaCBlbGVtZW50c1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLFxuICAgIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGxvZ29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBpbmZvQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGFib3V0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgYWJvdXRDYXJkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIC8vIGFkZCB0aGUgY29ycmVjdCBjbGFzcyB0byBlYWNoIGRpdlxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgbG9nb05hbWUuY2xhc3NMaXN0LmFkZChcImxvZ28tbmFtZVwiKTtcbiAgaW5mb0NhcmRzLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRzXCIpO1xuICBhYm91dENhcmQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIsIFwiY2FyZFwiKTtcblxuICAvLyBhZGQgY29udGVudCB0byB0aGUgZGl2c1xuICBsb2dvTmFtZS5pbm5lckhUTUwgPSBcIlBpdCBTdG9wIENhZmVcIjtcbiAgYWJvdXRDYXJkUC5pbm5lckhUTUwgPSBhYm91dFRleHQ7XG5cbiAgLy8gYXBwZW5kIHRvIHRoZSBjb3JyZWN0IGRpdnNcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQobG9nb05hbWUpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChpbmZvQ2FyZHMpO1xuICBjb250ZW50LmFwcGVuZChtYWluQ29udGFpbmVyKTtcbiAgYWJvdXRDYXJkLmFwcGVuZChhYm91dENhcmRQKTtcbiAgaW5mb0NhcmRzLmFwcGVuZChhYm91dENhcmQpO1xuXG4gIGNyZWF0ZUhvdXJzTGlzdChpbmZvKTtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7fVxuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjcmVhdGVNYWluUGFnZSgpO1xufVxuXG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=