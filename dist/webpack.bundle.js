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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: siteTitle, b, c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"siteTitle\", function() { return siteTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\n// config.js\nconst siteTitle = \"Atlantida Aluminio\";\nconst b = 2;\nconst c = 3;\n\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/engine/get-content.js":
/*!***********************************!*\
  !*** ./src/engine/get-content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getContent = (pageName, callback) => {\n  // object containnig the pages to include\n  // let pages = {\n  //   home: 'teste',\n  //   about: 'about'\n  // }\n  // callback(pages[pageName]);\n  // the above is same as using property name access:   // return contentPages.home ,  but i cant use a variable to navigate the object\n\n  // creating a new ajax request for fetching the html with the content\n  let request = new XMLHttpRequest();\n\n  // call the callack with the content loaded from the file\n  request.onload = () => {\n    callback(request.responseText);\n  };\n\n  // fetch the content of html file based on the name extracted from the fragmentId\n  request.open('GET', pageName + '.html');\n  request.send(null);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getContent);\n\n\n//# sourceURL=webpack:///./src/engine/get-content.js?");

/***/ }),

/***/ "./src/engine/navigate.js":
/*!********************************!*\
  !*** ./src/engine/navigate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _set_active_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-active-link.js */ \"./src/engine/set-active-link.js\");\n/* harmony import */ var _get_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-content.js */ \"./src/engine/get-content.js\");\n\n\n\n\n// function to navigate to content based on location.hash\nconst navigate = () => {\n  // sets the default location.hash if none is selected\n  if (!location.hash) {\n    location.hash = '#home';\n  }\n  let contentPane = document.getElementById('content');\n  // uses substring to remove the hash character (#) from the location\n  let pageName = location.hash.substr(1);\n  contentPane.innerHTML = Object(_get_content_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pageName, () => {});\n  // set activeLink for current location\n  Object(_set_active_link_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pageName);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigate);\n\n\n//# sourceURL=webpack:///./src/engine/navigate.js?");

/***/ }),

/***/ "./src/engine/set-active-link.js":
/*!***************************************!*\
  !*** ./src/engine/set-active-link.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// sets the \"active\" class on the active navigation link\nconst setActiveLink = (fragmentId) => {\n  let links = document.querySelectorAll('#navbar ul li a'),\n      i, link, pageName;\n\n  for(let i = 0; i < links.lenght; i++) {\n    link = links[i];\n    pageName = link.getAttribute('href').substr(1);\n    if (pageName === fragmentId) {\n      link.setAttribute('class', 'isActive');\n    }\n    else {\n      link.removeAttribute('class');\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setActiveLink);\n\n\n//# sourceURL=webpack:///./src/engine/set-active-link.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _engine_navigate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/navigate.js */ \"./src/engine/navigate.js\");\n\n\n\n\n\n\n//  defining the template\nlet renderedPage;\n\nrenderedPage += `\n\n  <header>\n    ${_config_js__WEBPACK_IMPORTED_MODULE_0__[\"siteTitle\"]}\n  </header>\n\n  <nav id='navbar' class='navbar'>\n    <ul class='menu'>\n      <li><a href='#home'>Home</a></li>\n      <li><a href='#about'>About</a></li>\n    </ul>\n  </nav>\n\n  <section id='content' class='container'>\n    <p>Content Page</p>\n  </section>\n\n  <aside id='menu'>\n    Menu lateral\n  </aside>\n\n  <footer id='footer'>\n    Rodape\n  </footer>\n\n`; // end template string\n\ndocument.getElementById('app').innerHTML = renderedPage;\n\n// navigate once to the current location hash\nObject(_engine_navigate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nwindow.addEventListener('hashchange', _engine_navigate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });