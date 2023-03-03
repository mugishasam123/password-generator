/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media only screen and (max-width: 990px) {\\n    html body {\\n        background: #333;\\n    }\\n\\n    body .container {\\n        width: 100%;\\n        height: 100%;\\n        border: none;\\n        box-shadow: none;\\n    }\\n\\n    .container .result #btn-copy {\\n        margin: -25px auto 0 72.5%;\\n        border-radius: 50%;\\n        transform: scale(1.5);\\n    }\\n    \\n    .container .result:hover #btn-copy {\\n        transform: translate(0) scale(1.5);\\n    }\\n\\n    .container .result #btn-copy:active {\\n        transform: translate(0) scale(1);\\n    }\\n}\\n\\nbody {\\n    display: flex;\\n    min-width: 312px;\\n    width: 98%;\\n    height: 100%;\\n    justify-content: center;\\n    align-items: center;\\n    font-family: Poppins, sans-serif;\\n    background: #eee;\\n    color: #fafafa;\\n}\\n\\np {\\n    margin: 10px 0;\\n}\\n\\n.inline {\\n    display: inline-flex;\\n    align-items: center;\\n}\\n\\n/* Container box for all items */\\n.container {\\n    width: 300px;\\n    height: 560px;\\n    padding: 10px 30px;\\n    background: #333;\\n    border: 2px solid #007aff;\\n    border-radius: 25px;\\n    box-shadow: 0 0 5px #aaa;\\n}\\n\\n/* Password result section */\\n.field-title {\\n    color: #aaa;\\n}\\n\\n.result-viewbox {\\n    padding: 10px 0;\\n    width: 100%;\\n    height: 100%;\\n    text-align: center;\\n    background: #444;\\n    color: #aaa;\\n    border-radius: 10px;\\n}\\n\\n.result {\\n    margin-bottom: 36px;\\n}\\n\\n.result #btn-copy {\\n    position: absolute;\\n    top: var(y);\\n    left: var(x);\\n    width: 30px;\\n    height: 30px;\\n    border: 2px solid #333;\\n    border-radius: 50%;\\n    background: #aaa;\\n    opacity: 0;\\n    transform: translate(900%, -75%) scale(0);\\n    transition: all 150ms ease;\\n    cursor: pointer;\\n    z-index: 2;\\n}\\n\\n.result:hover #btn-copy {\\n    opacity: 1;\\n    transform: translate(900%, -75%) scale(1.5);\\n}\\n\\n.result #btn-copy:active {\\n    transform: translate(900%, -75%) scale(1);\\n}\\n\\n/* Password length slider section */\\n.length-viewbox {\\n    position: absolute;\\n    top: -25px;\\n    left: 0px;\\n}\\n\\n.range-slider {\\n    position: relative;\\n    width: 100%;\\n    height: 55px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background: #444;\\n    border-radius: 10px;\\n}\\n\\n/* Box slider content */\\n.range-slider {\\n    margin-bottom: 16px;\\n}\\n\\n.range-slider:before, .range-slider:after {\\n    position: absolute;\\n    color: #aaa;\\n}\\n\\n.range-slider:before {\\n    content: attr(data-min);\\n    left: 10px;\\n}\\n\\n.range-slider:after {\\n    content: attr(data-max);\\n    right: 10px;\\n}\\n\\n.range-slider .length-title:after {\\n    content: attr(data-length);\\n    position: absolute;\\n    right: -16px;\\n    font-variant-numeric: tabular-nums;\\n    color: #aaa;\\n}\\n\\n#slider {\\n    width: 75%;\\n    height: 2px;\\n    border-radius: 5px;\\n    background: #ddd;\\n    padding: 0;\\n    margin: 0;\\n    cursor: pointer;\\n}\\n\\n/* Password options section */\\n.settings {\\n    position: relative;\\n    display: flex;\\n    flex-direction: column;\\n    color: #eee;\\n}\\n\\n/* Toggle Switch for password options */\\n.btn-switch {\\n    position: relative;\\n    display: inline-block;\\n    margin-left: auto;\\n    width: 60px;\\n    height: 30px;\\n}\\n\\n.btn-switch input {\\n    opacity: 0;\\n    width: 0;\\n    height: 0;\\n}\\n\\n.btn-slider {\\n    position: absolute;\\n    cursor: pointer;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    border-radius: 30px;\\n    background: #444;\\n    border: 1px solid #007aff;\\n    transition: all 300ms ease;\\n}\\n\\n.btn-slider:before {\\n    position: absolute;\\n    content: \\\"\\\";\\n    height: 20px;\\n    width: 20px;\\n    bottom: 4px;\\n    left: 5px;\\n    border-radius: 50%;\\n    background: #007aff;\\n    transition: all 300ms ease;\\n}\\n\\ninput:checked + .btn-slider {\\n    background: #007aff;\\n}\\n  \\ninput:checked + .btn-slider:before {\\n    background: #fff;\\n    transform: translateX(28px);\\n}\\n\\n/* Generate Password button */\\n.btn.generate {\\n    position: relative;\\n    width: 100%;\\n    height: 50px;\\n    margin: 15px 0;\\n    border: none;\\n    border-radius: 30px;\\n    outline: none;\\n    background: #007aff;\\n    color: #fff;\\n    font-weight: bold;\\n    cursor: pointer;\\n    transition: all 150ms ease;\\n}\\n.btn.generate:active {\\n    transform: scale(0.8, 0.8);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://password-generator/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://password-generator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://password-generator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://password-generator/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/helpers/DisableCheckBox.js":
/*!*******************************************!*\
  !*** ./src/js/helpers/DisableCheckBox.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DisableCheckBox)\n/* harmony export */ });\nclass DisableCheckBox {\n    // function that handles the checkboxes state, so at least one needs to be selected. The last checkbox will be disabled.\n    disableOnlyCheckbox = () => {\n      // Checkboxes representing the options that is responsible to create differnt type of password based on user\n      const uppercaseEl = document.getElementById(\"uppercase\");\n      const lowercaseEl = document.getElementById(\"lowercase\");\n      const numberEl = document.getElementById(\"number\");\n      const symbolEl = document.getElementById(\"symbol\");\n  \n      let totalChecked = [uppercaseEl, lowercaseEl, numberEl, symbolEl].filter(\n        (el) => el.checked\n      );\n      totalChecked.forEach((el) => {\n        if (totalChecked.length == 1) {\n          el.disabled = true;\n        } else {\n          el.disabled = false;\n        }\n      });\n    };\n  }\n  \n\n//# sourceURL=webpack://password-generator/./src/js/helpers/DisableCheckBox.js?");

/***/ }),

/***/ "./src/js/helpers/GeneratePassword.js":
/*!********************************************!*\
  !*** ./src/js/helpers/GeneratePassword.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GeneratePassword)\n/* harmony export */ });\n/* harmony import */ var _helpers_RandomGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/RandomGenerator.js */ \"./src/js/helpers/RandomGenerator.js\");\n\n\nclass GeneratePassword {\n  // Function responsible to generate password and then returning it.\n  generatePassword = (length, lower, upper, number, symbol) => {\n    const randomGenerator = new _helpers_RandomGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    // Object of all the function names that we will use to create random letters of password\n    const randomFunc = {\n      lower: randomGenerator.getRandomLower,\n      upper: randomGenerator.getRandomUpper,\n      number: randomGenerator.getRandomNumber,\n      symbol: randomGenerator.getRandomSymbol,\n    };\n    let generatedPassword = \"\";\n    const typesCount = lower + upper + number + symbol;\n    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(\n      (item) => Object.values(item)[0]\n    );\n    if (typesCount === 0) {\n      return \"\";\n    }\n    for (let i = 0; i < length; i++) {\n      typesArr.forEach((type) => {\n        const funcName = Object.keys(type)[0];\n        generatedPassword += randomFunc[funcName]();\n      });\n    }\n    return generatedPassword.slice(0, length);\n  };\n}\n\n\n//# sourceURL=webpack://password-generator/./src/js/helpers/GeneratePassword.js?");

/***/ }),

/***/ "./src/js/helpers/RandomGenerator.js":
/*!*******************************************!*\
  !*** ./src/js/helpers/RandomGenerator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RandomGenerator)\n/* harmony export */ });\n/* harmony import */ var _RandomSecure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomSecure.js */ \"./src/js/helpers/RandomSecure.js\");\n\n\nclass RandomGenerator {\n  // Generator Functions\n  // All the functions that are responsible to return a random value taht we will use to create password.\n  getRandomLower = () => {\n    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);\n  };\n  getRandomUpper = () => {\n    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);\n  };\n  getRandomNumber = () => {\n    const randomSecure = new _RandomSecure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    return String.fromCharCode(\n      Math.floor(randomSecure.secureMathRandom() * 10) + 48\n    );\n  };\n  getRandomSymbol = () => {\n   const symbols = '~!@#$%^&*()_+{}\":?><;.,';\n    return symbols[Math.floor(Math.random() * symbols.length)];\n  };\n}\n\n\n//# sourceURL=webpack://password-generator/./src/js/helpers/RandomGenerator.js?");

/***/ }),

/***/ "./src/js/helpers/RandomSecure.js":
/*!****************************************!*\
  !*** ./src/js/helpers/RandomSecure.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RandomSecure)\n/* harmony export */ });\nclass RandomSecure {\n    // Random more secure value\n    secureMathRandom = () => {\n      return (\n        window.crypto.getRandomValues(new Uint32Array(1))[0] /\n        (Math.pow(2, 32) - 1)\n      );\n    };\n  }\n  \n\n//# sourceURL=webpack://password-generator/./src/js/helpers/RandomSecure.js?");

/***/ }),

/***/ "./src/js/helpers/SliderFill.js":
/*!**************************************!*\
  !*** ./src/js/helpers/SliderFill.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SliderFill)\n/* harmony export */ });\nclass SliderFill {\n    // This function is responsible to create the trailing color and setting the fill.\n    applyFill = (slider) => {\n      // Range Slider Properties.\n      // Fill : The trailing color that you see when you drag the slider.\n      // background : Default Range Slider Background\n      const sliderProps = {\n        fill: \"#0B1EDF\",\n        background: \"rgba(255, 255, 255, 0.214)\",\n      };\n  \n      // Text which will show the value of the range slider.\n      const sliderValue = document.querySelector(\".length-title\");\n  \n      const percentage =\n        (100 * (slider.value - slider.min)) / (slider.max - slider.min);\n      const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${\n        sliderProps.background\n      } ${percentage + 0.1}%)`;\n      slider.style.background = bg;\n      sliderValue.setAttribute(\"data-length\", slider.value);\n    };\n  }\n  \n\n//# sourceURL=webpack://password-generator/./src/js/helpers/SliderFill.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _helpers_SliderFill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/SliderFill.js */ \"./src/js/helpers/SliderFill.js\");\n/* harmony import */ var _helpers_DisableCheckBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/DisableCheckBox.js */ \"./src/js/helpers/DisableCheckBox.js\");\n/* harmony import */ var _listeners_EventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/EventListeners.js */ \"./src/js/listeners/EventListeners.js\");\n\n\n\n\n\nconst sliderFill = new _helpers_SliderFill_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst disableCheckBox = new _helpers_DisableCheckBox_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst eventListeners = new _listeners_EventListeners_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n// Checkboxes representing the options that is responsible to create differnt type of password based on user\nconst uppercaseEl = document.getElementById(\"uppercase\");\nconst lowercaseEl = document.getElementById(\"lowercase\");\nconst numberEl = document.getElementById(\"number\");\nconst symbolEl = document.getElementById(\"symbol\");\n\n// Selecting the Range Slider container which will effect the LENGTH property of the password.\nconst slider = document.querySelector(\".range-slider\");\n\n// Selecting the range input and passing it in the applyFill func.\nsliderFill.applyFill(slider.querySelector(\"input\"));\neventListeners.addEventListener();\n\n[uppercaseEl, lowercaseEl, numberEl, symbolEl].forEach((el) => {\n  el.addEventListener(\"click\", () => {\n    disableCheckBox.disableOnlyCheckbox();\n  });\n});\n\n\n//# sourceURL=webpack://password-generator/./src/js/index.js?");

/***/ }),

/***/ "./src/js/listeners/EventListeners.js":
/*!********************************************!*\
  !*** ./src/js/listeners/EventListeners.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventListeners)\n/* harmony export */ });\n/* harmony import */ var _helpers_GeneratePassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/GeneratePassword */ \"./src/js/helpers/GeneratePassword.js\");\n/* harmony import */ var _helpers_SliderFill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/SliderFill.js */ \"./src/js/helpers/SliderFill.js\");\n\n\n\nclass EventListeners {\n  addEventListener = () => {\n    const sliderFill = new _helpers_SliderFill_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n    // Result viewbox container\n    const resultContainer = document.querySelector(\".result\");\n    // Update Css Props of the COPY button\n    // Getting the bounds of the result viewbox container\n    let resultContainerBound = {\n      left: resultContainer.getBoundingClientRect().left,\n      top: resultContainer.getBoundingClientRect().top,\n    };\n\n    // Selecting the Range Slider container which will effect the LENGTH property of the password.\n    const slider = document.querySelector(\".range-slider\");\n    // Text which will show the value of the range slider.\n    const sliderValue = document.querySelector(\".length-title\");\n    // Text appear after copy button is clicked\n    const copiedInfo = document.querySelector(\".result-info.left\");\n    // Text info showed after generate button is clicked\n    const copyInfo = document.querySelector(\".result-info.right\");\n    // The Viewbox where the result will be shown\n    const resultEl = document.getElementById(\"result\");\n    const lengthEl = document.getElementById(\"slider\");\n    // Checkboxes representing the options that is responsible to create differnt type of password based on user\n    const uppercaseEl = document.getElementById(\"uppercase\");\n    const lowercaseEl = document.getElementById(\"lowercase\");\n    const numberEl = document.getElementById(\"number\");\n    const symbolEl = document.getElementById(\"symbol\");\n    // Button to copy the text\n    const copyBtn = document.getElementById(\"btn-copy\");\n\n    // if this variable is trye only then the copyBtn will appear, i.e. when the user first click generate the copyBth will interact.\n    let generatedPassword = false;\n    // Button to generate the password\n    const generateBtn = document.getElementById(\"generate\");\n\n    const passwordGenerator = new _helpers_GeneratePassword__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    // Copy Password in clipboard\n    copyBtn.addEventListener(\"click\", () => {\n      const textarea = document.createElement(\"textarea\");\n      const password = resultEl.innerText;\n      if (!password || password == \"CLICK GENERATE\") {\n        return;\n      }\n      textarea.value = password;\n      document.body.appendChild(textarea);\n      textarea.select();\n      document.execCommand(\"copy\");\n      textarea.remove();\n\n      copyInfo.style.transform = \"translateY(200%)\";\n      copyInfo.style.opacity = \"0\";\n      copiedInfo.style.transform = \"translateY(0%)\";\n      copiedInfo.style.opacity = \"0.75\";\n    });\n\n    // When Generate is clicked Password id generated.\n    generateBtn.addEventListener(\"click\", () => {\n      const length = +lengthEl.value;\n      const hasLower = lowercaseEl.checked;\n      const hasUpper = uppercaseEl.checked;\n      const hasNumber = numberEl.checked;\n      const hasSymbol = symbolEl.checked;\n      generatedPassword = true;\n      resultEl.innerText = passwordGenerator.generatePassword(\n        length,\n        hasLower,\n        hasUpper,\n        hasNumber,\n        hasSymbol\n      );\n      copyInfo.style.transform = \"translateY(0%)\";\n      copyInfo.style.opacity = \"0.75\";\n      copiedInfo.style.transform = \"translateY(200%)\";\n      copiedInfo.style.opacity = \"0\";\n    });\n\n    // Using Event Listener to apply the fill and also change the value of the text.\n    slider.querySelector(\"input\").addEventListener(\"input\", (event) => {\n      sliderValue.setAttribute(\"data-length\", event.target.value);\n      sliderFill.applyFill(event.target);\n    });\n\n    // This will update the position of the copy button based on mouse Position\n    resultContainer.addEventListener(\"mousemove\", (e) => {\n      resultContainerBound = {\n        left: resultContainer.getBoundingClientRect().left,\n        top: resultContainer.getBoundingClientRect().top,\n      };\n      if (generatedPassword) {\n        copyBtn.style.opacity = \"1\";\n        copyBtn.style.pointerEvents = \"all\";\n        copyBtn.style.setProperty(\n          \"--x\",\n          `${e.x - resultContainerBound.left}px`\n        );\n        copyBtn.style.setProperty(\"--y\", `${e.y - resultContainerBound.top}px`);\n      } else {\n        copyBtn.style.opacity = \"0\";\n        copyBtn.style.pointerEvents = \"none\";\n      }\n    });\n    window.addEventListener(\"resize\", (e) => {\n      resultContainerBound = {\n        left: resultContainer.getBoundingClientRect().left,\n        top: resultContainer.getBoundingClientRect().top,\n      };\n    });\n  };\n}\n\n\n//# sourceURL=webpack://password-generator/./src/js/listeners/EventListeners.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;