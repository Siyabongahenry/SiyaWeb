/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://code/./node_modules/@fortawesome/fontawesome-free/css/all.css?");

/***/ }),

/***/ "./src/sass/webstyles.css":
/*!********************************!*\
  !*** ./src/sass/webstyles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://code/./src/sass/webstyles.css?");

/***/ }),

/***/ "./src/Javascript/menu.js":
/*!********************************!*\
  !*** ./src/Javascript/menu.js ***!
  \********************************/
/***/ (() => {

eval("//Expansion of side menu\r\nvar sideMenuBtn = document.getElementById(\"btn-side-menu\");\r\nsideMenuBtn.addEventListener(\"click\",function(){\r\n\tresizeMenu(this,this.getAttribute(\"data-menu-id\"));\r\n});\r\nfunction resizeMenu(btn,menuId){\r\n\tbtn.style.animation=\"none\";\r\n \tvar menu = document.getElementById(menuId);\r\n\tif(menu.classList.contains(\"side-menu-ml\")){\r\n\t\tmenu.classList.remove(\"side-menu-ml\");\r\n\t\tbtn.innerHTML=\"<i class='fa fa-angle-left'></i>\";\r\n\t}\r\n\telse{\r\n\t\tmenu.classList.add(\"side-menu-ml\");\r\n\t\tbtn.innerHTML=\"<i class='fa fa-bars'></i>\";\r\n\t}\r\n}\r\n//Close Menu On When a Link Is Clicked\r\ncloseOnLinkClick();\r\nfunction closeOnLinkClick(){\r\n\tvar links = document.querySelectorAll(\".side-menu a\");\r\n\tfor(let i=0;i<links.length;i++){\r\n\t\tlinks[i].addEventListener(\"click\",function(){\r\n\t\t\tresizeMenu(sideMenuBtn,sideMenuBtn.getAttribute(\"data-menu-id\"));\r\n\t\t});\r\n\t}\r\n}\r\n//Contact menu view\r\ndocument.getElementById(\"btn-contact\").addEventListener(\"click\",function(){ displayContact(this);})\r\nfunction displayContact(btn){\r\n\tvar soundWave = btn.getElementsByClassName(\"sound-wave\")[0];\r\n\tif(soundWave != null)\r\n\t{\r\n\t\tbtn.removeChild(soundWave);\r\n\t}\r\n\tvar contact = document.getElementById(\"contact\");\r\n\tif(contact.style.display ==\"\" || contact.style.display ==\"none\"){\r\n\t\tcontact.style.display=\"initial\";\r\n\t}\r\n\telse{\r\n\t\tcontact.style.display =\"none\";\r\n\t}\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/menu.js?");

/***/ }),

/***/ "./src/Javascript/site.js":
/*!********************************!*\
  !*** ./src/Javascript/site.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/Javascript/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide */ \"./src/Javascript/slide.js\");\n/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slide__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n/*Print welcome message*/\r\nconst welcomeText = \"Hi, welcome to Siyaweb. You came at the right place to know about me. Feel free to use the navigation on the left hand side.\"+ \r\n\"\\n\\nThank you have a great journey.\";\r\nvar i=1;\r\nvar typingAlert = document.getElementsByClassName(\"typing-alert\")[0];\r\nsetTimeout(()=>{typingAlert.classList.remove(\"typing-alert-anim\");writeWelcomeMSG();},2000);\r\nfunction writeWelcomeMSG(){\r\n\tvar messageBox = document.getElementById(\"welcomeMSG\");\r\n\tmessageBox.classList.add(\"message-box\");\r\n\tmessageBox.innerText=welcomeText.substr(0,i);\r\n\ti++;\r\n\tif(messageBox.innerText.length != welcomeText.length){\r\n\t\tsetTimeout(writeWelcomeMSG,50);\r\n\t}\r\n\telse{\t\r\n\t\tsetTimeout(()=>{messageBox.parentNode.removeChild(messageBox);},1000*600);\r\n\t}\r\n}\r\n\r\n/*hide or show content*/\r\naddEventsToContentViewBtns();\r\nfunction addEventsToContentViewBtns()\r\n{\r\n\tconst contentViewBtn = document.getElementsByClassName(\"content-view-btn\");\r\n\tfor(let i=0;i < contentViewBtn.length;i++){\r\n\t\tcontentViewBtn[i].addEventListener(\"click\",function(){\r\n\t\t\texpandContent(this,this.getAttribute(\"data-btn-newText\"),this.getAttribute(\"data-content-id\"));\r\n\t\t});\r\n\t}\r\n}\r\nfunction expandContent(btn,newText,contentId){\r\n\tvar content = document.getElementById(contentId);\r\n\tif(content.style.height != \"0px\" && content.style.height !=\"\")\r\n\t{\r\n\t\tcontent.style.height=\"0px\";\r\n\t\tbtn.innerHTML = newText + \" <i class='fa fa-caret-down'></i>\";\r\n\t}\r\n\telse\r\n\t{\r\n\t\tcontent.style.height=\"initial\";\r\n\t\tbtn.innerHTML = newText + \" <i class='fa fa-caret-up'></i>\";\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://code/./src/Javascript/site.js?");

/***/ }),

/***/ "./src/Javascript/slide.js":
/*!*********************************!*\
  !*** ./src/Javascript/slide.js ***!
  \*********************************/
/***/ (() => {

eval("/*pre for previous*/\r\nvar slideContainers = document.getElementsByClassName(\"slide-container\");\r\nvar pauseFirstSlide =[]\r\naddEventsToSlideBtns();\r\naddEventListenerToPauseBtns();\r\nfunction addEventsToSlideBtns(){\r\n\tvar prevBtnsCollection = document.getElementsByClassName(\"btn-prev-slide\");\r\n\tvar nextBtnsCollection = document.getElementsByClassName(\"btn-next-slide\");\r\n\tfor(let i=0;i< prevBtnsCollection.length;i++){\r\n\t\tprevBtnsCollection[i].addEventListener(\"click\",function(){\r\n\t\t\t/*Get first slide only*/\t\r\n\t\t\tprevSlide(i);\r\n\t\t});\r\n\t\tnextBtnsCollection[i].addEventListener(\"click\",function(){\r\n\t\t\t/*Get all the slides to find length*/\r\n\t\t\tnextSlide(i);\r\n\t\t});\t\t\r\n\t}\r\n}\r\nfunction addEventListenerToPauseBtns(){\r\n\tvar pauseBtnsCollection = document.getElementsByClassName(\"btn-pause-slide\");\r\n\tif(pauseBtnsCollection != null)\r\n\t{\r\n\t\tfor(let i=0;i<pauseBtnsCollection.length;i++)\r\n\t\t{\r\n\t\t\tpauseBtnsCollection[i].addEventListener(\"click\",function(){\r\n\t\t\t\tvar progressCollection = slideContainers[i].getElementsByClassName(\"progress\");\r\n\t\t\t\t/*Get all the slides to find length*/\r\n\t\t\t\tif(pauseFirstSlide[i]==undefined || pauseFirstSlide[i] ==false)\r\n\t\t\t\t{\r\n\t\t\t\t\tpauseFirstSlide[i]=true;\r\n\t\t\t\t\tthis.innerHTML =\"<i class='fa fa fa-play-circle'></i>\"\r\n\t\t\t\t}\r\n\t\t\t\telse{\r\n\t\t\t\t\tpauseFirstSlide[i]=false;\r\n\t\t\t\t\tthis.innerHTML =\"<i class='fa fa-pause-circle'></i>\"\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\t\r\n\t}\r\n}\r\nfunction prevSlide(slideContainerNo){\r\n\t/*increment margin of first slide to move to previous slide*/\r\n\tvar slideCollection =slideContainers[slideContainerNo].getElementsByClassName (\"slide-element\");\r\n\tvar progressCollection = slideContainers[slideContainerNo].getElementsByClassName(\"progress\");\r\n\tvar pageNoElement = slideContainers[slideContainerNo].querySelector(\".page-number\");\r\n\tclearProgressAnim(progressCollection);\r\n\tif(slideCollection[0].style.marginLeft !=\"\")\r\n\t{\r\n\t\tvar slideML = parseInt((slideCollection[0].style.marginLeft).replace(\"%\",\"\"));\r\n\t\tif(slideML < 0)\r\n\t\t{\r\n\t\t\tslideML += 100;\r\n\t\t\tslideCollection[0].style.marginLeft = slideML +\"%\";\r\n\t\t\tlet mL =  parseInt((slideCollection[0].style.marginLeft).replace(\"%\",\"\"));\r\n\t\t\taddProgressAnim(progressCollection,-1*slideML/100);\r\n\t\t\tif(pageNoElement != null){\r\n\t\t\t\tpageNoElement.innerText =(-1*slideML/100)+1;\r\n\t\t\t}\r\n\t\t}\r\n\t\telse{\r\n\t\t\taddProgressAnim(progressCollection,0);\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\nfunction nextSlide(slideContainerNo){\r\n\tvar slideCollection =slideContainers[slideContainerNo].getElementsByClassName (\"slide-element\");\r\n\tvar progressCollection = slideContainers[slideContainerNo].getElementsByClassName(\"progress\");\r\n\tvar pageNoElement = slideContainers[slideContainerNo].querySelector(\".page-number\");\r\n\tclearProgressAnim(progressCollection);\r\n\t/*decrement margin of first slide to move to next slide*/\r\n\tif(slideCollection[0].style.marginLeft ==\"\" || slideCollection[0].style.marginLeft ==\"0%\"){\r\n\t\tslideCollection[0].style.marginLeft =\"-100%\";\r\n\t\taddProgressAnim(progressCollection,1);\r\n\t\tif(pageNoElement != null)\r\n\t\t{\r\n\t\t\tpageNoElement.innerText = 2;\r\n\t\t}\r\n\t\treturn true;\r\n\t}\r\n\telse{\r\n\t\tvar slideML = parseInt((slideCollection[0].style.marginLeft).replace(\"%\",\"\"));\r\n\t\tif(slideML > (-1 * slideCollection.length*100 + 100))\r\n\t\t{\r\n\r\n\t\t\tslideML -= 100;\r\n\t\t\tslideCollection[0].style.marginLeft = slideML +\"%\";\r\n\t\t\taddProgressAnim(progressCollection,-1*slideML/100);\r\n\t\t\tif(pageNoElement != null)\r\n\t\t\t{\r\n\t\t\t\tpageNoElement.innerText = (-1*slideML/100)+1;\r\n\t\t\t}\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\telse{\r\n\t\t\taddProgressAnim(progressCollection,-1*slideML/100);\r\n\t\t\treturn false;\r\n\t\t}\r\n\t}\r\n}\r\nfunction addProgressAnim(progressCollection,progressIndex){\r\n\tif(progressCollection.length > 0 && !progressCollection[progressIndex].classList.contains(\"progress-anim\")){\r\n\t\tprogressCollection[progressIndex].classList.add(\"progress-anim\");\r\n\t}\r\n}\r\nfunction clearProgressAnim(progressCollection){\r\n\tif(progressCollection.length > 0){\r\n\t\tfor(let i=0;i<progressCollection.length;i++){\r\n\t\t\tif(progressCollection[i].classList.contains(\"progress-anim\"))\r\n\t\t\t{\r\n\t\t\t\tprogressCollection[i].classList.remove(\"progress-anim\");\r\n\t\t\t\tif(progressCollection[i].classList.contains(\"width\"))\r\n\t\t\t\t{\r\n\t\t\t\t\tprogressCollection[i].style.width =\"0%\";\r\n\t\t\t\t}\r\n\t\t\t\telse if(progressCollection[i].classList.contains(\"height\")){\r\n\t\t\t\t\tprogressCollection[i].style.height =\"0%\";\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n/*Animate slide*/\r\n/*First Slide Animatiom*/\r\nanimateCLSlide(0,1000);\r\nfunction animateCLSlide(slideContainerNo,time)\r\n{\r\n\tif(!pauseFirstSlide[slideContainerNo])\r\n\t{\t\t\r\n\t\tlet progress = slideContainers[slideContainerNo].querySelector(\".progress-anim\");\r\n\t\tif(progress !=null && progress.style.width != \"100%\"){\r\n\t\t\tlet width = parseFloat((progress.style.width).replace(\"%\",\"\"));\r\n\t\t\twidth +=0.1;\r\n\t\t\tprogress.style.width = width+\"%\";\r\n\t\t}\r\n\t\telse{\r\n\t\t\tif(!nextSlide(0)){\r\n\t\t\t\tslideContainers[slideContainerNo].querySelector(\".slide-element\").style.marginLeft =\"0%\";\r\n\t\t\t\tslideContainers[slideContainerNo].querySelector(\".progress\").classList.add(\"progress-anim\");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tsetTimeout(()=>{\r\n\t\tanimateCLSlide(slideContainerNo,time/1000);\t\r\n\t},time/1000);\r\n}\n\n//# sourceURL=webpack://code/./src/Javascript/slide.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_webstyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/webstyles.css */ \"./src/sass/webstyles.css\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _Javascript_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Javascript/site */ \"./src/Javascript/site.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://code/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;