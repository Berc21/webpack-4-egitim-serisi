/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfetch('build-tools.json').then(function (resp) {\n      return resp.json();\n}).then(function (arr) {\n      var dataArray = arr.data;\n      dataArray.map(function (element) {\n\n            var templateMarkup = '\\n      <li style=\"list-style-type: none; padding: 16px 24px; margin: 16px; background: #EEF9FF; color:black; border-radius: 5px;\" \">\\n      <section style=\"display: flex;\">\\n        <header style=\"max-width: 200px; width:100%; padding: 24px 48px; margin-right: 40px; border-radius: 10px; margin-top: 20px; background: #1B78BF; \">\\n            <img style=\"max-width: 200px; width: 100%; max-height: 100px height: auto;\" src=\"' + element.logo + '\" alt=\"' + element.name + '\">\\n        </header>\\n\\n      <main>\\n          <h3 >' + element.name + '</h3>\\n          <p> ' + element.info + ' </p>\\n      </main>\\n      </section>\\n      <footer  style=\"text-align: center; margin-top: 20px;\" >\\n        <a  target=\"_blank\" style=\"color: inherit; text-decoration: none; padding: 10px 20px; border: 1px solid #1B78BF;\"  href=\"' + element.homepage + '\">Homepage</a>\\n      </footer>\\n\\n      </li>\\n      ';\n\n            document.getElementById('tool-list').insertAdjacentHTML('afterbegin', templateMarkup);\n      });\n});\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ })

/******/ });