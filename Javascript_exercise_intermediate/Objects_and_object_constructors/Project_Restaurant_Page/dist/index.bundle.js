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

  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHoursList)(infoCards, _info_js__WEBPACK_IMPORTED_MODULE_0__.info);
}

// function createMenuPage() {}

function main() {
  createMainPage();
}

main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7O0FDckIzQjtBQUNBLElBQUksc0NBQXNDO0FBQzFDLElBQUksdUNBQXVDO0FBQzNDLElBQUkseUNBQXlDO0FBQzdDLElBQUksd0NBQXdDO0FBQzVDLElBQUksc0NBQXNDO0FBQzFDLElBQUksd0NBQXdDO0FBQzVDLElBQUksc0NBQXNDO0FBQzFDOztBQUVnQjs7Ozs7OztVQ1ZoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNnQjs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsOERBQWUsWUFBWSwwQ0FBSTtBQUNqQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSG91cnNMaXN0KGluZm9DYXJkcywgaW5mbykge1xuICAvLyBtYWtlIHRoZSBkaXYgYW5kIHVsXG4gIGxldCBob3Vyc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGBpbmZvYCBhcnJheSBhbmQgY3JlYXRlIGEgbGlzdCBpdGVtIGZvciBlYWNoIGRheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxpLmlubmVyVGV4dCA9IGluZm9baV0uZGF5ICsgXCI6IFwiICsgaW5mb1tpXS5vcGVuICsgXCIgLSBcIiArIGluZm9baV0uY2xvc2U7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgaG91cnNDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgaG91cnNDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvQ2FyZHMuYXBwZW5kKGhvdXJzQ2FyZCk7XG5cbiAgcmV0dXJuIGhvdXJzQ2FyZDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG91cnNMaXN0IH07XG4iLCJsZXQgaW5mbyA9IFtcbiAgeyBkYXk6IFwiTW9uZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiVHVlc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIldlZG5lc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlRodXJzZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiRnJpZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiU2F0dXJkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJTdW5kYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuXTtcblxuZXhwb3J0IHsgaW5mbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbmZvIH0gZnJvbSBcIi4vaW5mby5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlSG91cnNMaXN0IH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XG5cbmNvbnNvbGUubG9nKFwiaXRzIHdvcmtpbmdlZ2FlZ1wiKTtcblxuZnVuY3Rpb24gY3JlYXRlTWFpblBhZ2UoKSB7XG4gIGxldCBhYm91dFRleHQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VzY2lwaXQgYXRxdWUgbmVxdWUgbnVsbGEgYXV0IHF1aXNxdWFtIHNvbHV0YS4gT2RpdCBzdW50IGRvbG9yZSBub24gYmVhdGFlIGFjY3VzYW50aXVtIGFsaXF1YW0gZW9zIHJlcGVsbGF0LCBhc3BlcmlvcmVzLCByZWljaWVuZGlzLCBlc3NlIHF1b3MgbnVtcXVhbSBlbmltP1wiO1xuXG4gIC8vIGNyZWF0ZSB0aGUgbWFpbiBkaXZzIGZvciB0aGUgY29udGVudC5cbiAgLy8gY3JlYXRlIGVhY2ggZWxlbWVudHNcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKSxcbiAgICBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaW5mb0NhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGFib3V0Q2FyZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBhZGQgdGhlIGNvcnJlY3QgY2xhc3MgdG8gZWFjaCBkaXZcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gIGxvZ29OYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2dvLW5hbWVcIik7XG4gIGluZm9DYXJkcy5jbGFzc0xpc3QuYWRkKFwiaW5mby1jYXJkc1wiKTtcbiAgYWJvdXRDYXJkLmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiLCBcImNhcmRcIik7XG5cbiAgLy8gYWRkIGNvbnRlbnQgdG8gdGhlIGRpdnNcbiAgbG9nb05hbWUuaW5uZXJIVE1MID0gXCJQaXQgU3RvcCBDYWZlXCI7XG4gIGFib3V0Q2FyZFAuaW5uZXJIVE1MID0gYWJvdXRUZXh0O1xuXG4gIC8vIGFwcGVuZCB0byB0aGUgY29ycmVjdCBkaXZzXG4gIG1haW5Db250YWluZXIuYXBwZW5kKGxvZ29OYW1lKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQoaW5mb0NhcmRzKTtcbiAgY29udGVudC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG4gIGFib3V0Q2FyZC5hcHBlbmQoYWJvdXRDYXJkUCk7XG4gIGluZm9DYXJkcy5hcHBlbmQoYWJvdXRDYXJkKTtcblxuICBjcmVhdGVIb3Vyc0xpc3QoaW5mb0NhcmRzLCBpbmZvKTtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7fVxuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjcmVhdGVNYWluUGFnZSgpO1xufVxuXG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=