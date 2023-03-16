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
  console.log(info);
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
  console.log(hoursCard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7QUN0QjNCO0FBQ0EsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSx1Q0FBdUM7QUFDM0MsSUFBSSx5Q0FBeUM7QUFDN0MsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxzQ0FBc0M7QUFDMUMsSUFBSSx3Q0FBd0M7QUFDNUMsSUFBSSxzQ0FBc0M7QUFDMUM7O0FBRWdCOzs7Ozs7O1VDVmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ2dCOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw4REFBZSxZQUFZLDBDQUFJO0FBQ2pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2MvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2MvLi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly9jL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIb3Vyc0xpc3QoaW5mb0NhcmRzLCBpbmZvKSB7XG4gIGNvbnNvbGUubG9nKGluZm8pO1xuICAvLyBtYWtlIHRoZSBkaXYgYW5kIHVsXG4gIGxldCBob3Vyc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGBpbmZvYCBhcnJheSBhbmQgY3JlYXRlIGEgbGlzdCBpdGVtIGZvciBlYWNoIGRheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxpLmlubmVyVGV4dCA9IGluZm9baV0uZGF5ICsgXCI6IFwiICsgaW5mb1tpXS5vcGVuICsgXCIgLSBcIiArIGluZm9baV0uY2xvc2U7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgaG91cnNDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgY29uc29sZS5sb2coaG91cnNDYXJkKTtcbiAgaW5mb0NhcmRzLmFwcGVuZChob3Vyc0NhcmQpO1xuXG4gIHJldHVybiBob3Vyc0NhcmQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhvdXJzTGlzdCB9O1xuIiwibGV0IGluZm8gPSBbXG4gIHsgZGF5OiBcIk1vbmRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlR1ZXNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJXZWRuZXNkYXlcIiwgb3BlbjogXCI4XCIsIGNsb3NlOiBcIjhcIiB9LFxuICB7IGRheTogXCJUaHVyc2RheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIkZyaWRheVwiLCBvcGVuOiBcIjhcIiwgY2xvc2U6IFwiOFwiIH0sXG4gIHsgZGF5OiBcIlNhdHVyZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbiAgeyBkYXk6IFwiU3VuZGF5XCIsIG9wZW46IFwiOFwiLCBjbG9zZTogXCI4XCIgfSxcbl07XG5cbmV4cG9ydCB7IGluZm8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5mbyB9IGZyb20gXCIuL2luZm8uanNcIjtcbmltcG9ydCB7IGNyZWF0ZUhvdXJzTGlzdCB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xuXG5jb25zb2xlLmxvZyhcIml0cyB3b3JraW5nZWdhZWdcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5QYWdlKCkge1xuICBsZXQgYWJvdXRUZXh0ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1c2NpcGl0IGF0cXVlIG5lcXVlIG51bGxhIGF1dCBxdWlzcXVhbSBzb2x1dGEuIE9kaXQgc3VudCBkb2xvcmUgbm9uIGJlYXRhZSBhY2N1c2FudGl1bSBhbGlxdWFtIGVvcyByZXBlbGxhdCwgYXNwZXJpb3JlcywgcmVpY2llbmRpcywgZXNzZSBxdW9zIG51bXF1YW0gZW5pbT9cIjtcblxuICAvLyBjcmVhdGUgdGhlIG1haW4gZGl2cyBmb3IgdGhlIGNvbnRlbnQuXG4gIC8vIGNyZWF0ZSBlYWNoIGVsZW1lbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIiksXG4gICAgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgbG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGluZm9DYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgYWJvdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBhYm91dENhcmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgLy8gYWRkIHRoZSBjb3JyZWN0IGNsYXNzIHRvIGVhY2ggZGl2XG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuICBsb2dvTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nby1uYW1lXCIpO1xuICBpbmZvQ2FyZHMuY2xhc3NMaXN0LmFkZChcImluZm8tY2FyZHNcIik7XG4gIGFib3V0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIiwgXCJjYXJkXCIpO1xuXG4gIC8vIGFkZCBjb250ZW50IHRvIHRoZSBkaXZzXG4gIGxvZ29OYW1lLmlubmVySFRNTCA9IFwiUGl0IFN0b3AgQ2FmZVwiO1xuICBhYm91dENhcmRQLmlubmVySFRNTCA9IGFib3V0VGV4dDtcblxuICAvLyBhcHBlbmQgdG8gdGhlIGNvcnJlY3QgZGl2c1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChsb2dvTmFtZSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKGluZm9DYXJkcyk7XG4gIGNvbnRlbnQuYXBwZW5kKG1haW5Db250YWluZXIpO1xuICBhYm91dENhcmQuYXBwZW5kKGFib3V0Q2FyZFApO1xuICBpbmZvQ2FyZHMuYXBwZW5kKGFib3V0Q2FyZCk7XG5cbiAgY3JlYXRlSG91cnNMaXN0KGluZm9DYXJkcywgaW5mbyk7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge31cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgY3JlYXRlTWFpblBhZ2UoKTtcbn1cblxubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9