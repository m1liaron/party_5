/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {

function myModule(){
    this.hello = function(){
        console.log('hello');
    };
    this.goodbye = function(){
        console.log('bye!');
    };
}

module.exports = myModule;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js");

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

// galp - планировщик задач с помощью него можно делать таски которые выполняются при каких-то обстоятельствах
// всё что он умеет это подключать в себя какие-то модули и запускать определённые задачи когда надо

// они умеет комбинировоться вместе тоесть при помощи galpa можно запускать webpack

// webpack - это сборщик модулей мы его настраиваем и запускаем для того чтобы он собирал проект и выполнял основную задачу

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map