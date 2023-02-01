/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/categories/пестициды.svg
const _namespaceObject = __webpack_require__.p + "assets/пестициды.svg";
;// CONCATENATED MODULE: ./src/images/categories/культуры.svg
const images_categories_namespaceObject = __webpack_require__.p + "assets/культуры.svg";
;// CONCATENATED MODULE: ./src/images/categories/вредители.svg
const src_images_categories_namespaceObject_0 = __webpack_require__.p + "assets/вредители.svg";
;// CONCATENATED MODULE: ./src/images/categories/соединения.svg
const src_images_categories_namespaceObject_2 = __webpack_require__.p + "assets/соединения.svg";
;// CONCATENATED MODULE: ./src/images/categories/circle.svg
const circle_namespaceObject = __webpack_require__.p + "assets/circle.svg";
;// CONCATENATED MODULE: ./src/images/categories/_hover/пестициды_.svg
const _hover_namespaceObject = __webpack_require__.p + "assets/пестициды_.svg";
;// CONCATENATED MODULE: ./src/images/categories/_hover/культуры_.svg
const images_categories_hover_namespaceObject = __webpack_require__.p + "assets/культуры_.svg";
;// CONCATENATED MODULE: ./src/images/categories/_hover/вредители_.svg
const src_images_categories_hover_namespaceObject_0 = __webpack_require__.p + "assets/вредители_.svg";
;// CONCATENATED MODULE: ./src/images/categories/_hover/соединения_.svg
const src_images_categories_hover_namespaceObject_2 = __webpack_require__.p + "assets/соединения_.svg";
;// CONCATENATED MODULE: ./src/js/constants/constants.js









var imagesSrcIsHover = {
  pesticides_: _hover_namespaceObject,
  crops_: images_categories_hover_namespaceObject,
  vermins_: src_images_categories_hover_namespaceObject_0,
  composition_: src_images_categories_hover_namespaceObject_2
};
var imagesSrc = {
  pesticides: _namespaceObject,
  crops: images_categories_namespaceObject,
  vermins: src_images_categories_namespaceObject_0,
  composition: src_images_categories_namespaceObject_2
};
var cards = Array.from(document.querySelectorAll('.card'));
var cardAnimationConfig = {
  cardsArray: cards,
  cardIsHoverSelector: 'card_hover',
  cardImageSelector: '.card__image',
  circleBgSelector: '.card__circles',
  startAnimationSelector: 'card__circles_play',
  srcIfHover: imagesSrcIsHover,
  src: imagesSrc
};

;// CONCATENATED MODULE: ./src/js/components/enableCardsAnimation.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function enableCardsAnimation(config) {
  var _config = _objectSpread({}, config),
    cardsArray = _config.cardsArray,
    cardImageSelector = _config.cardImageSelector,
    src = _config.src;
  cardsArray.forEach(function (card) {
    var img = card.querySelector(cardImageSelector);
    img.src = src[img.id];
    enableListeners(config, card, img);
  });
}
function enableListeners(config, card, img) {
  var _config2 = _objectSpread({}, config),
    cardIsHoverSelector = _config2.cardIsHoverSelector,
    circleBgSelector = _config2.circleBgSelector,
    startAnimationSelector = _config2.startAnimationSelector,
    srcIfHover = _config2.srcIfHover,
    src = _config2.src;
  card.addEventListener('mouseenter', function (e) {
    hoverHandler(img.id + '_', img, circleBgSelector, cardIsHoverSelector, card, startAnimationSelector, srcIfHover);
  });
  card.addEventListener('mouseleave', function (e) {
    mouseLeaveHandler(img.id, img, circleBgSelector, cardIsHoverSelector, card, startAnimationSelector, src);
  });
}
function hoverHandler(key, img, circleBgSelector, cardIsHoverSelector, card, startAnimationSelector, imagesSrcIsHover) {
  setTimeout(function () {
    img.src = imagesSrcIsHover[key];
    var hoverAnimation = card.querySelector(circleBgSelector);
    card.classList.toggle(cardIsHoverSelector);
    hoverAnimation.classList.toggle(startAnimationSelector);
  }, 300);
}
function mouseLeaveHandler(key, img, circleBgSelector, cardIsHoverSelector, card, startAnimationSelector, imagesSrc) {
  setTimeout(function () {
    img.src = imagesSrc[key];
    var hoverAnimation = card.querySelector(circleBgSelector);
    card.classList.remove(cardIsHoverSelector);
    hoverAnimation.classList.remove(startAnimationSelector);
  }, 300);
}
;// CONCATENATED MODULE: ./src/index.js



enableCardsAnimation(cardAnimationConfig);
/******/ })()
;