"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bbq.jpg */ "./src/bbq.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bangers&family=Playfair+Display&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 100vh;\n}\n\n#headerBar {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1vh;\n    height: 10vh;\n    opacity: 2;\n    background-color: rgba(0, 0, 0, .9);\n    padding: 1%;\n    border-radius: 4px;\n}\n\n.RestaurantTitle {\n    color: white;\n    font-family: 'Bangers', cursive;\n    font-size: 4vw;\n    padding: 3%\n}\n\n#mainSection {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 5vh;\n    height: max-content;\n    margin-bottom: 5%;\n    opacity: 2;\n    background-color: rgba(0, 0, 0, .9);\n    padding: 1%;\n    border-radius: 4px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.headerLi {\n    font-family: 'Bangers', cursive;\n    cursor: pointer;\n    font-size: 3vw;\n\n}\n\n.headerLi:hover {\n    color: #F14C0B !important;\n}\n\n#homeLeftDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 10%;\n    padding: 2%;\n    margin-top: 4%;\n    justify-content: flex-start;\n    align-content: stretch;\n    width: 50%;\n    height: fit-content;\n}\n\n.slogan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 3.25vw;\n}\n\n.subSlogan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n}\n\n#menuDiv {\n    padding: 2%;\n}\n\n#menuSectionDiv {\n    color: #F14C0B;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.75vw;\n    height: 2vh;\n    margin-bottom: 2%;\n}\n\n.menuGrid {\n    display: grid;\n    grid-template: auto auto / 15% 75% 10%;\n    align-items: center;\n    align-content: center;\n}\n\n#itemName {\n    color: white;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5vw;\n\n}\n\n#itemDescription {\n    color: white;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1vw;\n\n}\n\n#itemPrice {\n    color: white;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n    text-align: right;\n}\n\n#aboutDiv {\n    padding: 2%;\n    height: max-content;\n    display: flex;\n    gap: 1%;\n\n}\n\n#aboutLeftDiv {\n    display: grid;\n    gap: 15px;\n    width: 50%;\n    grid-template: 30vh 30vh / 20vw 20vw;\n    position: relative;\n}\n\n\n#1_Box {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#2_Box {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#3_Box {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2\n}\n\n#4_Box {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n\nimg {\n    min-width: 50%;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n}\n\n\n\n#aboutRightDiv {\n    width: 50%;\n    height: fit-content;\n    padding: 2%;\n    display: grid;\n    grid-template: auto auto / auto;\n}\n\n.aboutGrid {\n    display: grid;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    align-items: flex-start;\n\n}\n\n#aboutSpan,\n#hourSpan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 2vw;\n\n}\n\n#aboutContent {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n    text-align: justify;\n\n}\n\n.hoursDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 4%;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2;\n\n}\n\n.hoursGrid {\n    display: flex;\n    flex-direction: column;\n}\n\n.dayGrid>span,\n.dayGrid>p {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5vw;\n}\n\n.dayGrid {\n    display: grid;\n    align-items: center;\n    text-align: left;\n    grid-template: 4vh / 15vw 5vw 5vw;\n}\n\n#dayName {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#open {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#close {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 3;\n    grid-column-end: 4;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Playfair+Display&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap');\n\nbody {\n    margin: 0px;\n    background-image: url(./bbq.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 100vh;\n}\n\n#headerBar {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1vh;\n    height: 10vh;\n    opacity: 2;\n    background-color: rgba(0, 0, 0, .9);\n    padding: 1%;\n    border-radius: 4px;\n}\n\n.RestaurantTitle {\n    color: white;\n    font-family: 'Bangers', cursive;\n    font-size: 4vw;\n    padding: 3%\n}\n\n#mainSection {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 5vh;\n    height: max-content;\n    margin-bottom: 5%;\n    opacity: 2;\n    background-color: rgba(0, 0, 0, .9);\n    padding: 1%;\n    border-radius: 4px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.headerLi {\n    font-family: 'Bangers', cursive;\n    cursor: pointer;\n    font-size: 3vw;\n\n}\n\n.headerLi:hover {\n    color: #F14C0B !important;\n}\n\n#homeLeftDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 10%;\n    padding: 2%;\n    margin-top: 4%;\n    justify-content: flex-start;\n    align-content: stretch;\n    width: 50%;\n    height: fit-content;\n}\n\n.slogan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 3.25vw;\n}\n\n.subSlogan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n}\n\n#menuDiv {\n    padding: 2%;\n}\n\n#menuSectionDiv {\n    color: #F14C0B;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.75vw;\n    height: 2vh;\n    margin-bottom: 2%;\n}\n\n.menuGrid {\n    display: grid;\n    grid-template: auto auto / 15% 75% 10%;\n    align-items: center;\n    align-content: center;\n}\n\n#itemName {\n    color: white;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5vw;\n\n}\n\n#itemDescription {\n    color: white;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1vw;\n\n}\n\n#itemPrice {\n    color: white;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n    text-align: right;\n}\n\n#aboutDiv {\n    padding: 2%;\n    height: max-content;\n    display: flex;\n    gap: 1%;\n\n}\n\n#aboutLeftDiv {\n    display: grid;\n    gap: 15px;\n    width: 50%;\n    grid-template: 30vh 30vh / 20vw 20vw;\n    position: relative;\n}\n\n\n#1_Box {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#2_Box {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#3_Box {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2\n}\n\n#4_Box {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n\nimg {\n    min-width: 50%;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n}\n\n\n\n#aboutRightDiv {\n    width: 50%;\n    height: fit-content;\n    padding: 2%;\n    display: grid;\n    grid-template: auto auto / auto;\n}\n\n.aboutGrid {\n    display: grid;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    align-items: flex-start;\n\n}\n\n#aboutSpan,\n#hourSpan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 2vw;\n\n}\n\n#aboutContent {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n    text-align: justify;\n\n}\n\n.hoursDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 4%;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2;\n\n}\n\n.hoursGrid {\n    display: flex;\n    flex-direction: column;\n}\n\n.dayGrid>span,\n.dayGrid>p {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5vw;\n}\n\n.dayGrid {\n    display: grid;\n    align-items: center;\n    text-align: left;\n    grid-template: 4vh / 15vw 5vw 5vw;\n}\n\n#dayName {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#open {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#close {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 3;\n    grid-column-end: 4;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutSection)
/* harmony export */ });
/* harmony import */ var _about1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about1.jpg */ "./src/about1.jpg");
/* harmony import */ var _about2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about2.jpg */ "./src/about2.jpg");
/* harmony import */ var _about3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about3.jpg */ "./src/about3.jpg");
/* harmony import */ var _about4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about4.jpg */ "./src/about4.jpg");





function aboutSection () {
  // Changing About Color to Orange;
  const aboutLi = document.getElementById('headerLiAbout')
  aboutLi.style.color = '#F14C0B'

  // Creating a Div
  const aboutDiv = document.createElement('div')
  aboutDiv.id = 'aboutDiv'

  // Creating a left Div for random pictures;

  const leftDiv = document.createElement('div')
  leftDiv.id = 'aboutLeftDiv'

  const aboutOne = new Image()
  aboutOne.src = _about1_jpg__WEBPACK_IMPORTED_MODULE_0__

  const aboutTwo = new Image()
  aboutTwo.src = _about2_jpg__WEBPACK_IMPORTED_MODULE_1__

  const aboutThree = new Image()
  aboutThree.src = _about3_jpg__WEBPACK_IMPORTED_MODULE_2__

  const aboutFour = new Image()
  aboutFour.src = _about4_jpg__WEBPACK_IMPORTED_MODULE_3__

  const imageArray = [aboutOne, aboutTwo, aboutThree, aboutFour]

  let i = 0
  while (i < 4) { // Creating boxes and appending an image into each box
    const box = document.createElement('box')
    box.id = (i + 1) + '_Box'
    box.appendChild(imageArray[i])
    leftDiv.appendChild(box)
    i++
  }

  aboutDiv.appendChild(leftDiv)

  // Creating a right Div
  const rightDiv = document.createElement('div')
  rightDiv.id = 'aboutRightDiv'

  // About text
  const aboutGrid = document.createElement('div')
  aboutGrid.className = 'aboutGrid'
  rightDiv.appendChild(aboutGrid)

  const aboutSpan = document.createElement('span')
  aboutSpan.textContent = 'About Us'

  aboutSpan.id = 'aboutSpan'
  aboutGrid.appendChild(aboutSpan)

  const aboutContent = document.createElement('p')
  aboutContent.id = 'aboutContent'
  aboutContent.textContent = 'At erat pellentesque adipiscing commodo elit at imperdiet dui. Urna nunc id cursus metus aliquam eleifend mi in. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Volutpat diam ut venenatis tellus in. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ut eu sem integer vitae justo eget magna fermentum.'
  aboutGrid.appendChild(aboutContent)

  // Hours of operation section
  const hoursDiv = document.createElement('div')
  hoursDiv.className = 'hoursDiv'
  rightDiv.appendChild(hoursDiv)

  const hourSpan = document.createElement('span')
  hourSpan.id = 'hourSpan'
  hourSpan.textContent = 'Hours of operation'
  hoursDiv.appendChild(hourSpan)

  // This div's children will consist of every day the restaurant is open
  const hoursGrid = document.createElement('div')
  hoursGrid.className = 'hoursGrid'

  hoursDiv.appendChild(hoursGrid)

  // Creating a object for the operatings days
  function Day (name, open, close) {
    this.name = name
    this.open = open
    this.close = close

    const dayGrid = document.createElement('div')
    dayGrid.className = 'dayGrid'

    const dayName = document.createElement('span')
    dayName.id = 'dayName'
    dayName.textContent = this.name

    const openDay = document.createElement('p')
    openDay.id = 'open'
    openDay.textContent = this.open

    const closeDay = document.createElement('p')
    closeDay.id = 'close'
    closeDay.textContent = this.close

    const dayItems = [dayName, openDay, closeDay]

    for (let i = 0; i < dayItems.length; i++) {
      dayGrid.appendChild(dayItems[i])
    }

    hoursGrid.appendChild(dayGrid)
  }

  // Creating day objects
  const sunday = new Day('Sunday', '11:00', '22:00')
  const monday = new Day('Monday', '10:00', '22:00')
  const tuesday = new Day('Tuesday', '10:00', '22:00')
  const wednesday = new Day('Wednesday', '10:00', '22:00')
  const thursday = new Day('Thursday', '10:00', '22:00')
  const friday = new Day('Friday', '10:00', '22:00')
  const saturday = new Day('Sunday', '11:00', '22:00')

  aboutDiv.appendChild(rightDiv)

  return aboutDiv
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeSection)
/* harmony export */ });
/* harmony import */ var _steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steak.jpg */ "./src/steak.jpg");


function homeSection () {
  // Changing Home Color to Orange;
  const homeLi = document.getElementById('headerLiHome')
  homeLi.style.color = '#F14C0B'

  // Creating a Div
  const homeDiv = document.createElement('div')
  homeDiv.setAttribute('style', 'display:flex;')
  homeDiv.id = 'homeDiv'

  // Left Part of Home Section
  const leftDiv = document.createElement('div')
  leftDiv.setAttribute('style', 'display:flex; flex-direction:column;width:50%;')
  leftDiv.id = 'homeLeftDiv'

  const slogan = document.createElement('span')
  slogan.className = 'slogan'
  slogan.textContent = 'Enjoy our excellent grills'
  leftDiv.appendChild(slogan)

  const subSloganOne = document.createElement('p')
  subSloganOne.className = 'subSlogan'
  subSloganOne.textContent = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  leftDiv.appendChild(subSloganOne)

  const subSloganTwo = document.createElement('p')
  subSloganTwo.className = 'subSlogan'
  subSloganTwo.textContent = 'Fusce ut placerat orci nulla pellentesque dignissim enim sit. Ornare suspendisse sed nisi lacus sed viverra. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Enim eu turpis egestas pretium aenean. Est ante in nibh mauris cursus mattis molestie a'
  leftDiv.appendChild(subSloganTwo)

  // Right Part of Home Section
  const rightDiv = document.createElement('div')
  rightDiv.setAttribute('style', 'display:flex; flex-direction:column;width:50%;padding: 2%;')
  rightDiv.id = 'homeRightDiv'

  const steak = new Image()
  steak.src = _steak_jpg__WEBPACK_IMPORTED_MODULE_0__

  rightDiv.appendChild(steak)

  homeDiv.appendChild(leftDiv)
  homeDiv.appendChild(rightDiv)

  return homeDiv
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _bbq_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbq.jpg */ "./src/bbq.jpg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");






// Setting up the html

// This is the header bar *****************************************************************************************************************************************************************

const headerBar = document.createElement('div')
headerBar.id = 'headerBar'

const leftHeader = document.createElement('div')
leftHeader.setAttribute('style', 'width:50%')

const restaurantTitle = document.createElement('span')
restaurantTitle.className = 'RestaurantTitle'
restaurantTitle.textContent = "Al's SteakHouse"
leftHeader.appendChild(restaurantTitle)

const rightHeader = document.createElement('div')
rightHeader.setAttribute('style', 'display:flex;justify-content:center;width:50%;')

const headerUL = document.createElement('ul')
headerUL.setAttribute('style', 'display:flex; flex-direction:row;color:white;gap:5%;')

const home = document.createElement('li')
home.className = 'headerLi'
home.id = 'headerLiHome'
home.textContent = 'Home'

const menu = document.createElement('li')
menu.className = 'headerLi'
menu.id = 'headerLiMenu'
menu.textContent = 'Menu'

const about = document.createElement('li')
about.className = 'headerLi'
about.textContent = 'About'
about.id = 'headerLiAbout'

const menuList = [home, menu, about]

for (let i = 0; i < menuList.length; i++) {
  headerUL.appendChild(menuList[i])
}
rightHeader.appendChild(headerUL)

// Background Image for the landing page
const bbq = new Image()
bbq.src = _bbq_jpg__WEBPACK_IMPORTED_MODULE_1__

headerBar.appendChild(leftHeader)
headerBar.appendChild(rightHeader)
document.body.appendChild(headerBar)

/***************************************************************************************************************************************************************************************/
// Main section

const mainSection = document.createElement('div')
mainSection.id = 'mainSection'
document.body.appendChild(mainSection)

// By default, we populate the main section with the home page
mainSection.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])())

home.onclick = function () {
  const li = document.querySelectorAll('li')
  const children = mainSection.children
  if (document.getElementById('homeDiv') === null) {
    for (let i = 0; i < li.length; i++) {
      li[i].style.color = 'white'
    }
    for (let i = 0; i < children.length; i++) {
      children[i].remove()
    }
    mainSection.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
  }
}

menu.onclick = function () {
  const li = document.querySelectorAll('li')
  const children = mainSection.children
  if (document.getElementById('menuDiv') === null) {
    for (let i = 0; i < li.length; i++) {
      li[i].style.color = 'white'
    }

    for (let i = 0; i < children.length; i++) {
      children[i].remove()
    }
    mainSection.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])())
  }
}

about.onclick = function () {
  const li = document.querySelectorAll('li')
  const children = mainSection.children
  if (document.getElementById('aboutDiv') === null) {
    for (let i = 0; i < li.length; i++) {
      li[i].style.color = 'white'
    }

    for (let i = 0; i < children.length; i++) {
      children[i].remove()
    }
    mainSection.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])())
  }
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuSection)
/* harmony export */ });
function menuSection () {
    // Changing Home Color to Orange;
    const homeLi = document.getElementById('headerLiMenu')
    homeLi.style.color = '#F14C0B'
  
    // Creating a Div
    const menuDiv = document.createElement('div')
    menuDiv.id = 'menuDiv'
  
    // Appetizer section
    const appetizers = document.createElement('div')
    appetizers.id = 'menuSectionDiv'
    appetizers.textContent = 'Appetizers'
    menuDiv.appendChild(appetizers)
  
    function AppetizerItem (name, description, price) {
      this.name = name
      this.description = description
      this.price = price
  
      const appetizerGrid = document.createElement('div')
      appetizerGrid.className = 'menuGrid'
  
      const itemName = document.createElement('span')
      itemName.id = 'itemName'
      itemName.textContent = this.name
  
      const itemDescription = document.createElement('p')
      itemDescription.id = 'itemDescription'
      itemDescription.textContent = this.description
  
      const itemPrice = document.createElement('span')
      itemPrice.id = 'itemPrice'
      itemPrice.textContent = '$ ' + this.price
  
      const menuItems = [itemName, itemDescription, itemPrice]
  
      for (let i = 0; i < menuItems.length; i++) {
        appetizerGrid.appendChild(menuItems[i])
      }
  
      menuDiv.appendChild(appetizerGrid)
    }
  
    const nachos = new AppetizerItem('Nachos', 'A bowl of tortilla chips with a generous portion of queso cheese, jalapenos and red salsa.', 10)
    const onion = new AppetizerItem('Onion Rings', "Good ol' onions rings deep fried in a beer flavoured batter.", 8)
    const mozza = new AppetizerItem('Mozzarella Sticks', 'Deep fried mozzarella sticks with italian seasonned crumbs, served with a spicy marinara sauce.', 14)
  
    // Main course section
    const mainCourse = document.createElement('div')
    mainCourse.id = 'menuSectionDiv'
    mainCourse.textContent = 'Main Course'
    menuDiv.appendChild(mainCourse)
  
    function MainCourseItem (name, description, price) {
      this.name = name
      this.description = description
      this.price = price
  
      const menuGrid = document.createElement('div')
      menuGrid.className = 'menuGrid'
  
      const itemName = document.createElement('span')
      itemName.id = 'itemName'
      itemName.textContent = this.name
  
      const itemDescription = document.createElement('p')
      itemDescription.id = 'itemDescription'
      itemDescription.textContent = this.description
  
      const itemPrice = document.createElement('span')
      itemPrice.id = 'itemPrice'
      itemPrice.textContent = '$ ' + this.price
  
      const menuItems = [itemName, itemDescription, itemPrice]
  
      for (let i = 0; i < menuItems.length; i++) {
        menuGrid.appendChild(menuItems[i])
      }
  
      menuDiv.appendChild(menuGrid)
    }
  
    const clasicHamburger = new MainCourseItem('Classic Hamburger', 'Enjoy a traditionnal hamburger with different toppings, including lettuce, sliced tomato, ketchup, mayo. Comes with french fries or salad', 15)
    const steakFrites = new MainCourseItem('Steak Frites', 'Dish consisting of steak paired with French fries. It is commonly served in European brasseries, and is considered by some to be the national dish of Belgium, which claims to be the place of its invention.', 30)
    const garlicButterSteak = new MainCourseItem('Garlic-Butter Steak', 'Made in a skillet, this garlic butter steak is one our old time classics! Comes with a generous portion of mashed potatoes', 25)
    const caesarSalad = new MainCourseItem('Caesar Salad', 'For a lighter course, we suggest you try our homemade Caesar Salad, made with fresh roman lettuce, bacon, bread crumbs.', 18)
    const ribeye = new MainCourseItem('Grilled Marinated Ribeye', "Our regulars' favorite meal! We let sit, from local beef producers, ribeyes, in tangy, barbecue-inspired marinade overnight. We grill up the ribeye to your convenience. Comes with french fries or a salad.", 35)
  
    // Drink sections
    const drinks = document.createElement('div')
    drinks.id = 'menuSectionDiv'
    drinks.textContent = 'Drinks'
    menuDiv.appendChild(drinks)
  
    function DrinkItem (name, description, price) {
      this.name = name
      this.description = description
      this.price = price
  
      const menuGrid = document.createElement('div')
      menuGrid.className = 'menuGrid'
  
      const itemName = document.createElement('span')
      itemName.id = 'itemName'
      itemName.textContent = this.name
  
      const itemDescription = document.createElement('p')
      itemDescription.id = 'itemDescription'
      itemDescription.textContent = this.description
  
      const itemPrice = document.createElement('span')
      itemPrice.id = 'itemPrice'
      itemPrice.textContent = '$ ' + this.price
  
      const menuItems = [itemName, itemDescription, itemPrice]
  
      for (let i = 0; i < menuItems.length; i++) {
        menuGrid.appendChild(menuItems[i])
      }
  
      menuDiv.appendChild(menuGrid)
    }
  
    const softDrinks = new DrinkItem('Soft Drinks', 'Various selection of soft drinks : Coca-Cola, Pepsi, Sprite, Doctor Pepper, etc.', 1.25)
    const budweiser = new DrinkItem('Budweiser', 'For the tasteless person.', 5)
    const busch = new DrinkItem('Busch', 'Start your morning with a fresh Busch Latte.', 5)
    const samuelAdams = new DrinkItem('Samuel Adams', 'For the American Patriot!', 6)
  
    return menuDiv
  }
  

/***/ }),

/***/ "./src/about1.jpg":
/*!************************!*\
  !*** ./src/about1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc4823f887d83f42e334.jpg";

/***/ }),

/***/ "./src/about2.jpg":
/*!************************!*\
  !*** ./src/about2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a5fc3b48d0ec4cb09dd.jpg";

/***/ }),

/***/ "./src/about3.jpg":
/*!************************!*\
  !*** ./src/about3.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0bd3dbaa62f10afcb5e.jpg";

/***/ }),

/***/ "./src/about4.jpg":
/*!************************!*\
  !*** ./src/about4.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35b361d006c349dd4e47.jpg";

/***/ }),

/***/ "./src/bbq.jpg":
/*!*********************!*\
  !*** ./src/bbq.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da8afefe8e796fffcd5a.jpg";

/***/ }),

/***/ "./src/steak.jpg":
/*!***********************!*\
  !*** ./src/steak.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49c001c891dc00bba58a.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sTUFBTSxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JicS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbmdlcnMmZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAxLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRlckJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgb3BhY2l0eTogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5SZXN0YXVyYW50VGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiAzJVxcbn1cXG5cXG4jbWFpblNlY3Rpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIG9wYWNpdHk6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmhlYWRlckxpIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDN2dztcXG5cXG59XFxuXFxuLmhlYWRlckxpOmhvdmVyIHtcXG4gICAgY29sb3I6ICNGMTRDMEIgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWVMZWZ0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW4tdG9wOiA0JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uc2xvZ2FuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMy4yNXZ3O1xcbn1cXG5cXG4uc3ViU2xvZ2FuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cXG4jbWVudURpdiB7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4jbWVudVNlY3Rpb25EaXYge1xcbiAgICBjb2xvcjogI0YxNEMwQjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNzV2dztcXG4gICAgaGVpZ2h0OiAydmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG5cXG4ubWVudUdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gLyAxNSUgNzUlIDEwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaXRlbU5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG5cXG59XFxuXFxuI2l0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDF2dztcXG5cXG59XFxuXFxuI2l0ZW1QcmljZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbiNhYm91dERpdiB7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDElO1xcblxcbn1cXG5cXG4jYWJvdXRMZWZ0RGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBncmlkLXRlbXBsYXRlOiAzMHZoIDMwdmggLyAyMHZ3IDIwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuIzFfQm94IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxuIzJfQm94IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuIzNfQm94IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMlxcbn1cXG5cXG4jNF9Cb3gge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG5cXG5pbWcge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG5cXG4jYWJvdXRSaWdodERpdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gLyBhdXRvO1xcbn1cXG5cXG4uYWJvdXRHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxufVxcblxcbiNhYm91dFNwYW4sXFxuI2hvdXJTcGFuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcblxcbn1cXG5cXG4jYWJvdXRDb250ZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcblxcbn1cXG5cXG4uaG91cnNEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcblxcbn1cXG5cXG4uaG91cnNHcmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRheUdyaWQ+c3BhbixcXG4uZGF5R3JpZD5wIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41dnc7XFxufVxcblxcbi5kYXlHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNHZoIC8gMTV2dyA1dncgNXZ3O1xcbn1cXG5cXG4jZGF5TmFtZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiNvcGVuIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI2Nsb3NlIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLFdBQVc7SUFDWCx5REFBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lB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ZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYW5nZXJzJmZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9iYnEuanBnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXJCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIG9wYWNpdHk6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uUmVzdGF1cmFudFRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgcGFkZGluZzogMyVcXG59XFxuXFxuI21haW5TZWN0aW9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBvcGFjaXR5OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5oZWFkZXJMaSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuXFxufVxcblxcbi5oZWFkZXJMaTpob3ZlciB7XFxuICAgIGNvbG9yOiAjRjE0QzBCICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lTGVmdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luLXRvcDogNCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnNsb2dhbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDMuMjV2dztcXG59XFxuXFxuLnN1YlNsb2dhbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuXFxuI21lbnVEaXYge1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuI21lbnVTZWN0aW9uRGl2IHtcXG4gICAgY29sb3I6ICNGMTRDMEI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XFxuICAgIGhlaWdodDogMnZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG59XFxuXFxuLm1lbnVHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gMTUlIDc1JSAxMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2l0ZW1OYW1lIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41dnc7XFxuXFxufVxcblxcbiNpdGVtRGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxdnc7XFxuXFxufVxcblxcbiNpdGVtUHJpY2Uge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jYWJvdXREaXYge1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxJTtcXG5cXG59XFxuXFxuI2Fib3V0TGVmdERpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMzB2aCAzMHZoIC8gMjB2dyAyMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbiMxX0JveCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiMyX0JveCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiMzX0JveCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDJcXG59XFxuXFxuIzRfQm94IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuXFxuaW1nIHtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuXFxuI2Fib3V0UmlnaHREaXYge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gYXV0bztcXG59XFxuXFxuLmFib3V0R3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbn1cXG5cXG4jYWJvdXRTcGFuLFxcbiNob3VyU3BhbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJ2dztcXG5cXG59XFxuXFxuI2Fib3V0Q29udGVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG5cXG59XFxuXFxuLmhvdXJzRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0JTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG5cXG59XFxuXFxuLmhvdXJzR3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kYXlHcmlkPnNwYW4sXFxuLmRheUdyaWQ+cCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcbn1cXG5cXG4uZGF5R3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDR2aCAvIDE1dncgNXZ3IDV2dztcXG59XFxuXFxuI2RheU5hbWUge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jb3BlbiB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiNjbG9zZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQWJvdXQxIGZyb20gJy4vYWJvdXQxLmpwZydcbmltcG9ydCBBYm91dDIgZnJvbSAnLi9hYm91dDIuanBnJ1xuaW1wb3J0IEFib3V0MyBmcm9tICcuL2Fib3V0My5qcGcnXG5pbXBvcnQgQWJvdXQ0IGZyb20gJy4vYWJvdXQ0LmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRTZWN0aW9uICgpIHtcbiAgLy8gQ2hhbmdpbmcgQWJvdXQgQ29sb3IgdG8gT3JhbmdlO1xuICBjb25zdCBhYm91dExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckxpQWJvdXQnKVxuICBhYm91dExpLnN0eWxlLmNvbG9yID0gJyNGMTRDMEInXG5cbiAgLy8gQ3JlYXRpbmcgYSBEaXZcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBhYm91dERpdi5pZCA9ICdhYm91dERpdidcblxuICAvLyBDcmVhdGluZyBhIGxlZnQgRGl2IGZvciByYW5kb20gcGljdHVyZXM7XG5cbiAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxlZnREaXYuaWQgPSAnYWJvdXRMZWZ0RGl2J1xuXG4gIGNvbnN0IGFib3V0T25lID0gbmV3IEltYWdlKClcbiAgYWJvdXRPbmUuc3JjID0gQWJvdXQxXG5cbiAgY29uc3QgYWJvdXRUd28gPSBuZXcgSW1hZ2UoKVxuICBhYm91dFR3by5zcmMgPSBBYm91dDJcblxuICBjb25zdCBhYm91dFRocmVlID0gbmV3IEltYWdlKClcbiAgYWJvdXRUaHJlZS5zcmMgPSBBYm91dDNcblxuICBjb25zdCBhYm91dEZvdXIgPSBuZXcgSW1hZ2UoKVxuICBhYm91dEZvdXIuc3JjID0gQWJvdXQ0XG5cbiAgY29uc3QgaW1hZ2VBcnJheSA9IFthYm91dE9uZSwgYWJvdXRUd28sIGFib3V0VGhyZWUsIGFib3V0Rm91cl1cblxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCA0KSB7IC8vIENyZWF0aW5nIGJveGVzIGFuZCBhcHBlbmRpbmcgYW4gaW1hZ2UgaW50byBlYWNoIGJveFxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JveCcpXG4gICAgYm94LmlkID0gKGkgKyAxKSArICdfQm94J1xuICAgIGJveC5hcHBlbmRDaGlsZChpbWFnZUFycmF5W2ldKVxuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoYm94KVxuICAgIGkrK1xuICB9XG5cbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQobGVmdERpdilcblxuICAvLyBDcmVhdGluZyBhIHJpZ2h0IERpdlxuICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHJpZ2h0RGl2LmlkID0gJ2Fib3V0UmlnaHREaXYnXG5cbiAgLy8gQWJvdXQgdGV4dFxuICBjb25zdCBhYm91dEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBhYm91dEdyaWQuY2xhc3NOYW1lID0gJ2Fib3V0R3JpZCdcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoYWJvdXRHcmlkKVxuXG4gIGNvbnN0IGFib3V0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBhYm91dFNwYW4udGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnXG5cbiAgYWJvdXRTcGFuLmlkID0gJ2Fib3V0U3BhbidcbiAgYWJvdXRHcmlkLmFwcGVuZENoaWxkKGFib3V0U3BhbilcblxuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgYWJvdXRDb250ZW50LmlkID0gJ2Fib3V0Q29udGVudCdcbiAgYWJvdXRDb250ZW50LnRleHRDb250ZW50ID0gJ0F0IGVyYXQgcGVsbGVudGVzcXVlIGFkaXBpc2NpbmcgY29tbW9kbyBlbGl0IGF0IGltcGVyZGlldCBkdWkuIFVybmEgbnVuYyBpZCBjdXJzdXMgbWV0dXMgYWxpcXVhbSBlbGVpZmVuZCBtaSBpbi4gVml2ZXJyYSBhZGlwaXNjaW5nIGF0IGluIHRlbGx1cyBpbnRlZ2VyIGZldWdpYXQgc2NlbGVyaXNxdWUgdmFyaXVzIG1vcmJpLiBWb2x1dHBhdCBkaWFtIHV0IHZlbmVuYXRpcyB0ZWxsdXMgaW4uIFN1c3BlbmRpc3NlIGludGVyZHVtIGNvbnNlY3RldHVyIGxpYmVybyBpZCBmYXVjaWJ1cyBuaXNsIHRpbmNpZHVudC4gVXQgZXUgc2VtIGludGVnZXIgdml0YWUganVzdG8gZWdldCBtYWduYSBmZXJtZW50dW0uJ1xuICBhYm91dEdyaWQuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KVxuXG4gIC8vIEhvdXJzIG9mIG9wZXJhdGlvbiBzZWN0aW9uXG4gIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaG91cnNEaXYuY2xhc3NOYW1lID0gJ2hvdXJzRGl2J1xuICByaWdodERpdi5hcHBlbmRDaGlsZChob3Vyc0RpdilcblxuICBjb25zdCBob3VyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBob3VyU3Bhbi5pZCA9ICdob3VyU3BhbidcbiAgaG91clNwYW4udGV4dENvbnRlbnQgPSAnSG91cnMgb2Ygb3BlcmF0aW9uJ1xuICBob3Vyc0Rpdi5hcHBlbmRDaGlsZChob3VyU3BhbilcblxuICAvLyBUaGlzIGRpdidzIGNoaWxkcmVuIHdpbGwgY29uc2lzdCBvZiBldmVyeSBkYXkgdGhlIHJlc3RhdXJhbnQgaXMgb3BlblxuICBjb25zdCBob3Vyc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBob3Vyc0dyaWQuY2xhc3NOYW1lID0gJ2hvdXJzR3JpZCdcblxuICBob3Vyc0Rpdi5hcHBlbmRDaGlsZChob3Vyc0dyaWQpXG5cbiAgLy8gQ3JlYXRpbmcgYSBvYmplY3QgZm9yIHRoZSBvcGVyYXRpbmdzIGRheXNcbiAgZnVuY3Rpb24gRGF5IChuYW1lLCBvcGVuLCBjbG9zZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLm9wZW4gPSBvcGVuXG4gICAgdGhpcy5jbG9zZSA9IGNsb3NlXG5cbiAgICBjb25zdCBkYXlHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkYXlHcmlkLmNsYXNzTmFtZSA9ICdkYXlHcmlkJ1xuXG4gICAgY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGRheU5hbWUuaWQgPSAnZGF5TmFtZSdcbiAgICBkYXlOYW1lLnRleHRDb250ZW50ID0gdGhpcy5uYW1lXG5cbiAgICBjb25zdCBvcGVuRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgb3BlbkRheS5pZCA9ICdvcGVuJ1xuICAgIG9wZW5EYXkudGV4dENvbnRlbnQgPSB0aGlzLm9wZW5cblxuICAgIGNvbnN0IGNsb3NlRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY2xvc2VEYXkuaWQgPSAnY2xvc2UnXG4gICAgY2xvc2VEYXkudGV4dENvbnRlbnQgPSB0aGlzLmNsb3NlXG5cbiAgICBjb25zdCBkYXlJdGVtcyA9IFtkYXlOYW1lLCBvcGVuRGF5LCBjbG9zZURheV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRheUdyaWQuYXBwZW5kQ2hpbGQoZGF5SXRlbXNbaV0pXG4gICAgfVxuXG4gICAgaG91cnNHcmlkLmFwcGVuZENoaWxkKGRheUdyaWQpXG4gIH1cblxuICAvLyBDcmVhdGluZyBkYXkgb2JqZWN0c1xuICBjb25zdCBzdW5kYXkgPSBuZXcgRGF5KCdTdW5kYXknLCAnMTE6MDAnLCAnMjI6MDAnKVxuICBjb25zdCBtb25kYXkgPSBuZXcgRGF5KCdNb25kYXknLCAnMTA6MDAnLCAnMjI6MDAnKVxuICBjb25zdCB0dWVzZGF5ID0gbmV3IERheSgnVHVlc2RheScsICcxMDowMCcsICcyMjowMCcpXG4gIGNvbnN0IHdlZG5lc2RheSA9IG5ldyBEYXkoJ1dlZG5lc2RheScsICcxMDowMCcsICcyMjowMCcpXG4gIGNvbnN0IHRodXJzZGF5ID0gbmV3IERheSgnVGh1cnNkYXknLCAnMTA6MDAnLCAnMjI6MDAnKVxuICBjb25zdCBmcmlkYXkgPSBuZXcgRGF5KCdGcmlkYXknLCAnMTA6MDAnLCAnMjI6MDAnKVxuICBjb25zdCBzYXR1cmRheSA9IG5ldyBEYXkoJ1N1bmRheScsICcxMTowMCcsICcyMjowMCcpXG5cbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpXG5cbiAgcmV0dXJuIGFib3V0RGl2XG59XG4iLCJpbXBvcnQgU3RlYWtJbWcgZnJvbSAnLi9zdGVhay5qcGcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVTZWN0aW9uICgpIHtcbiAgLy8gQ2hhbmdpbmcgSG9tZSBDb2xvciB0byBPcmFuZ2U7XG4gIGNvbnN0IGhvbWVMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJMaUhvbWUnKVxuICBob21lTGkuc3R5bGUuY29sb3IgPSAnI0YxNEMwQidcblxuICAvLyBDcmVhdGluZyBhIERpdlxuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDsnKVxuICBob21lRGl2LmlkID0gJ2hvbWVEaXYnXG5cbiAgLy8gTGVmdCBQYXJ0IG9mIEhvbWUgU2VjdGlvblxuICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGVmdERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjUwJTsnKVxuICBsZWZ0RGl2LmlkID0gJ2hvbWVMZWZ0RGl2J1xuXG4gIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzbG9nYW4uY2xhc3NOYW1lID0gJ3Nsb2dhbidcbiAgc2xvZ2FuLnRleHRDb250ZW50ID0gJ0Vuam95IG91ciBleGNlbGxlbnQgZ3JpbGxzJ1xuICBsZWZ0RGl2LmFwcGVuZENoaWxkKHNsb2dhbilcblxuICBjb25zdCBzdWJTbG9nYW5PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgc3ViU2xvZ2FuT25lLmNsYXNzTmFtZSA9ICdzdWJTbG9nYW4nXG4gIHN1YlNsb2dhbk9uZS50ZXh0Q29udGVudCA9ICdEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS4nXG4gIGxlZnREaXYuYXBwZW5kQ2hpbGQoc3ViU2xvZ2FuT25lKVxuXG4gIGNvbnN0IHN1YlNsb2dhblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBzdWJTbG9nYW5Ud28uY2xhc3NOYW1lID0gJ3N1YlNsb2dhbidcbiAgc3ViU2xvZ2FuVHdvLnRleHRDb250ZW50ID0gJ0Z1c2NlIHV0IHBsYWNlcmF0IG9yY2kgbnVsbGEgcGVsbGVudGVzcXVlIGRpZ25pc3NpbSBlbmltIHNpdC4gT3JuYXJlIHN1c3BlbmRpc3NlIHNlZCBuaXNpIGxhY3VzIHNlZCB2aXZlcnJhLiBVcm5hIG5lYyB0aW5jaWR1bnQgcHJhZXNlbnQgc2VtcGVyIGZldWdpYXQgbmliaCBzZWQgcHVsdmluYXIuIEVuaW0gZXUgdHVycGlzIGVnZXN0YXMgcHJldGl1bSBhZW5lYW4uIEVzdCBhbnRlIGluIG5pYmggbWF1cmlzIGN1cnN1cyBtYXR0aXMgbW9sZXN0aWUgYSdcbiAgbGVmdERpdi5hcHBlbmRDaGlsZChzdWJTbG9nYW5Ud28pXG5cbiAgLy8gUmlnaHQgUGFydCBvZiBIb21lIFNlY3Rpb25cbiAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjUwJTtwYWRkaW5nOiAyJTsnKVxuICByaWdodERpdi5pZCA9ICdob21lUmlnaHREaXYnXG5cbiAgY29uc3Qgc3RlYWsgPSBuZXcgSW1hZ2UoKVxuICBzdGVhay5zcmMgPSBTdGVha0ltZ1xuXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHN0ZWFrKVxuXG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQobGVmdERpdilcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChyaWdodERpdilcblxuICByZXR1cm4gaG9tZURpdlxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBCYnEgZnJvbSAnLi9iYnEuanBnJ1xuaW1wb3J0IGhvbWVTZWN0aW9uIGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCBtZW51U2VjdGlvbiBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgYWJvdXRTZWN0aW9uIGZyb20gJy4vYWJvdXQuanMnXG5cbi8vIFNldHRpbmcgdXAgdGhlIGh0bWxcblxuLy8gVGhpcyBpcyB0aGUgaGVhZGVyIGJhciAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5jb25zdCBoZWFkZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVhZGVyQmFyLmlkID0gJ2hlYWRlckJhcidcblxuY29uc3QgbGVmdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5sZWZ0SGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6NTAlJylcblxuY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5yZXN0YXVyYW50VGl0bGUuY2xhc3NOYW1lID0gJ1Jlc3RhdXJhbnRUaXRsZSdcbnJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudCA9IFwiQWwncyBTdGVha0hvdXNlXCJcbmxlZnRIZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKVxuXG5jb25zdCByaWdodEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5yaWdodEhlYWRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjUwJTsnKVxuXG5jb25zdCBoZWFkZXJVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbmhlYWRlclVMLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpyb3c7Y29sb3I6d2hpdGU7Z2FwOjUlOycpXG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5ob21lLmNsYXNzTmFtZSA9ICdoZWFkZXJMaSdcbmhvbWUuaWQgPSAnaGVhZGVyTGlIb21lJ1xuaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJ1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxubWVudS5jbGFzc05hbWUgPSAnaGVhZGVyTGknXG5tZW51LmlkID0gJ2hlYWRlckxpTWVudSdcbm1lbnUudGV4dENvbnRlbnQgPSAnTWVudSdcblxuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5hYm91dC5jbGFzc05hbWUgPSAnaGVhZGVyTGknXG5hYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCdcbmFib3V0LmlkID0gJ2hlYWRlckxpQWJvdXQnXG5cbmNvbnN0IG1lbnVMaXN0ID0gW2hvbWUsIG1lbnUsIGFib3V0XVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gIGhlYWRlclVMLmFwcGVuZENoaWxkKG1lbnVMaXN0W2ldKVxufVxucmlnaHRIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVUwpXG5cbi8vIEJhY2tncm91bmQgSW1hZ2UgZm9yIHRoZSBsYW5kaW5nIHBhZ2VcbmNvbnN0IGJicSA9IG5ldyBJbWFnZSgpXG5iYnEuc3JjID0gQmJxXG5cbmhlYWRlckJhci5hcHBlbmRDaGlsZChsZWZ0SGVhZGVyKVxuaGVhZGVyQmFyLmFwcGVuZENoaWxkKHJpZ2h0SGVhZGVyKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJCYXIpXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBNYWluIHNlY3Rpb25cblxuY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubWFpblNlY3Rpb24uaWQgPSAnbWFpblNlY3Rpb24nXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKVxuXG4vLyBCeSBkZWZhdWx0LCB3ZSBwb3B1bGF0ZSB0aGUgbWFpbiBzZWN0aW9uIHdpdGggdGhlIGhvbWUgcGFnZVxubWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZVNlY3Rpb24oKSlcblxuaG9tZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcbiAgY29uc3QgY2hpbGRyZW4gPSBtYWluU2VjdGlvbi5jaGlsZHJlblxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVEaXYnKSA9PT0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpW2ldLnN0eWxlLmNvbG9yID0gJ3doaXRlJ1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5yZW1vdmUoKVxuICAgIH1cbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChob21lU2VjdGlvbigpKVxuICB9XG59XG5cbm1lbnUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXG4gIGNvbnN0IGNoaWxkcmVuID0gbWFpblNlY3Rpb24uY2hpbGRyZW5cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51RGl2JykgPT09IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaVtpXS5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5yZW1vdmUoKVxuICAgIH1cbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtZW51U2VjdGlvbigpKVxuICB9XG59XG5cbmFib3V0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKVxuICBjb25zdCBjaGlsZHJlbiA9IG1haW5TZWN0aW9uLmNoaWxkcmVuXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXREaXYnKSA9PT0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpW2ldLnN0eWxlLmNvbG9yID0gJ3doaXRlJ1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLnJlbW92ZSgpXG4gICAgfVxuICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbigpKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51U2VjdGlvbiAoKSB7XG4gICAgLy8gQ2hhbmdpbmcgSG9tZSBDb2xvciB0byBPcmFuZ2U7XG4gICAgY29uc3QgaG9tZUxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckxpTWVudScpXG4gICAgaG9tZUxpLnN0eWxlLmNvbG9yID0gJyNGMTRDMEInXG4gIFxuICAgIC8vIENyZWF0aW5nIGEgRGl2XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudURpdi5pZCA9ICdtZW51RGl2J1xuICBcbiAgICAvLyBBcHBldGl6ZXIgc2VjdGlvblxuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFwcGV0aXplcnMuaWQgPSAnbWVudVNlY3Rpb25EaXYnXG4gICAgYXBwZXRpemVycy50ZXh0Q29udGVudCA9ICdBcHBldGl6ZXJzJ1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYXBwZXRpemVycylcbiAgXG4gICAgZnVuY3Rpb24gQXBwZXRpemVySXRlbSAobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgIHRoaXMucHJpY2UgPSBwcmljZVxuICBcbiAgICAgIGNvbnN0IGFwcGV0aXplckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYXBwZXRpemVyR3JpZC5jbGFzc05hbWUgPSAnbWVudUdyaWQnXG4gIFxuICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGl0ZW1OYW1lLmlkID0gJ2l0ZW1OYW1lJ1xuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWVcbiAgXG4gICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pZCA9ICdpdGVtRGVzY3JpcHRpb24nXG4gICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uXG4gIFxuICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBpdGVtUHJpY2UuaWQgPSAnaXRlbVByaWNlJ1xuICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gJyQgJyArIHRoaXMucHJpY2VcbiAgXG4gICAgICBjb25zdCBtZW51SXRlbXMgPSBbaXRlbU5hbWUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVByaWNlXVxuICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFwcGV0aXplckdyaWQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zW2ldKVxuICAgICAgfVxuICBcbiAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYXBwZXRpemVyR3JpZClcbiAgICB9XG4gIFxuICAgIGNvbnN0IG5hY2hvcyA9IG5ldyBBcHBldGl6ZXJJdGVtKCdOYWNob3MnLCAnQSBib3dsIG9mIHRvcnRpbGxhIGNoaXBzIHdpdGggYSBnZW5lcm91cyBwb3J0aW9uIG9mIHF1ZXNvIGNoZWVzZSwgamFsYXBlbm9zIGFuZCByZWQgc2Fsc2EuJywgMTApXG4gICAgY29uc3Qgb25pb24gPSBuZXcgQXBwZXRpemVySXRlbSgnT25pb24gUmluZ3MnLCBcIkdvb2Qgb2wnIG9uaW9ucyByaW5ncyBkZWVwIGZyaWVkIGluIGEgYmVlciBmbGF2b3VyZWQgYmF0dGVyLlwiLCA4KVxuICAgIGNvbnN0IG1venphID0gbmV3IEFwcGV0aXplckl0ZW0oJ01venphcmVsbGEgU3RpY2tzJywgJ0RlZXAgZnJpZWQgbW96emFyZWxsYSBzdGlja3Mgd2l0aCBpdGFsaWFuIHNlYXNvbm5lZCBjcnVtYnMsIHNlcnZlZCB3aXRoIGEgc3BpY3kgbWFyaW5hcmEgc2F1Y2UuJywgMTQpXG4gIFxuICAgIC8vIE1haW4gY291cnNlIHNlY3Rpb25cbiAgICBjb25zdCBtYWluQ291cnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQ291cnNlLmlkID0gJ21lbnVTZWN0aW9uRGl2J1xuICAgIG1haW5Db3Vyc2UudGV4dENvbnRlbnQgPSAnTWFpbiBDb3Vyc2UnXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtYWluQ291cnNlKVxuICBcbiAgICBmdW5jdGlvbiBNYWluQ291cnNlSXRlbSAobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgIHRoaXMucHJpY2UgPSBwcmljZVxuICBcbiAgICAgIGNvbnN0IG1lbnVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIG1lbnVHcmlkLmNsYXNzTmFtZSA9ICdtZW51R3JpZCdcbiAgXG4gICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgaXRlbU5hbWUuaWQgPSAnaXRlbU5hbWUnXG4gICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZVxuICBcbiAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgaXRlbURlc2NyaXB0aW9uLmlkID0gJ2l0ZW1EZXNjcmlwdGlvbidcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb25cbiAgXG4gICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGl0ZW1QcmljZS5pZCA9ICdpdGVtUHJpY2UnXG4gICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSAnJCAnICsgdGhpcy5wcmljZVxuICBcbiAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtpdGVtTmFtZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtUHJpY2VdXG4gIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zW2ldKVxuICAgICAgfVxuICBcbiAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUdyaWQpXG4gICAgfVxuICBcbiAgICBjb25zdCBjbGFzaWNIYW1idXJnZXIgPSBuZXcgTWFpbkNvdXJzZUl0ZW0oJ0NsYXNzaWMgSGFtYnVyZ2VyJywgJ0Vuam95IGEgdHJhZGl0aW9ubmFsIGhhbWJ1cmdlciB3aXRoIGRpZmZlcmVudCB0b3BwaW5ncywgaW5jbHVkaW5nIGxldHR1Y2UsIHNsaWNlZCB0b21hdG8sIGtldGNodXAsIG1heW8uIENvbWVzIHdpdGggZnJlbmNoIGZyaWVzIG9yIHNhbGFkJywgMTUpXG4gICAgY29uc3Qgc3RlYWtGcml0ZXMgPSBuZXcgTWFpbkNvdXJzZUl0ZW0oJ1N0ZWFrIEZyaXRlcycsICdEaXNoIGNvbnNpc3Rpbmcgb2Ygc3RlYWsgcGFpcmVkIHdpdGggRnJlbmNoIGZyaWVzLiBJdCBpcyBjb21tb25seSBzZXJ2ZWQgaW4gRXVyb3BlYW4gYnJhc3NlcmllcywgYW5kIGlzIGNvbnNpZGVyZWQgYnkgc29tZSB0byBiZSB0aGUgbmF0aW9uYWwgZGlzaCBvZiBCZWxnaXVtLCB3aGljaCBjbGFpbXMgdG8gYmUgdGhlIHBsYWNlIG9mIGl0cyBpbnZlbnRpb24uJywgMzApXG4gICAgY29uc3QgZ2FybGljQnV0dGVyU3RlYWsgPSBuZXcgTWFpbkNvdXJzZUl0ZW0oJ0dhcmxpYy1CdXR0ZXIgU3RlYWsnLCAnTWFkZSBpbiBhIHNraWxsZXQsIHRoaXMgZ2FybGljIGJ1dHRlciBzdGVhayBpcyBvbmUgb3VyIG9sZCB0aW1lIGNsYXNzaWNzISBDb21lcyB3aXRoIGEgZ2VuZXJvdXMgcG9ydGlvbiBvZiBtYXNoZWQgcG90YXRvZXMnLCAyNSlcbiAgICBjb25zdCBjYWVzYXJTYWxhZCA9IG5ldyBNYWluQ291cnNlSXRlbSgnQ2Flc2FyIFNhbGFkJywgJ0ZvciBhIGxpZ2h0ZXIgY291cnNlLCB3ZSBzdWdnZXN0IHlvdSB0cnkgb3VyIGhvbWVtYWRlIENhZXNhciBTYWxhZCwgbWFkZSB3aXRoIGZyZXNoIHJvbWFuIGxldHR1Y2UsIGJhY29uLCBicmVhZCBjcnVtYnMuJywgMTgpXG4gICAgY29uc3QgcmliZXllID0gbmV3IE1haW5Db3Vyc2VJdGVtKCdHcmlsbGVkIE1hcmluYXRlZCBSaWJleWUnLCBcIk91ciByZWd1bGFycycgZmF2b3JpdGUgbWVhbCEgV2UgbGV0IHNpdCwgZnJvbSBsb2NhbCBiZWVmIHByb2R1Y2VycywgcmliZXllcywgaW4gdGFuZ3ksIGJhcmJlY3VlLWluc3BpcmVkIG1hcmluYWRlIG92ZXJuaWdodC4gV2UgZ3JpbGwgdXAgdGhlIHJpYmV5ZSB0byB5b3VyIGNvbnZlbmllbmNlLiBDb21lcyB3aXRoIGZyZW5jaCBmcmllcyBvciBhIHNhbGFkLlwiLCAzNSlcbiAgXG4gICAgLy8gRHJpbmsgc2VjdGlvbnNcbiAgICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRyaW5rcy5pZCA9ICdtZW51U2VjdGlvbkRpdidcbiAgICBkcmlua3MudGV4dENvbnRlbnQgPSAnRHJpbmtzJ1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzKVxuICBcbiAgICBmdW5jdGlvbiBEcmlua0l0ZW0gKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICB0aGlzLnByaWNlID0gcHJpY2VcbiAgXG4gICAgICBjb25zdCBtZW51R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBtZW51R3JpZC5jbGFzc05hbWUgPSAnbWVudUdyaWQnXG4gIFxuICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGl0ZW1OYW1lLmlkID0gJ2l0ZW1OYW1lJ1xuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWVcbiAgXG4gICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pZCA9ICdpdGVtRGVzY3JpcHRpb24nXG4gICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uXG4gIFxuICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBpdGVtUHJpY2UuaWQgPSAnaXRlbVByaWNlJ1xuICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gJyQgJyArIHRoaXMucHJpY2VcbiAgXG4gICAgICBjb25zdCBtZW51SXRlbXMgPSBbaXRlbU5hbWUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVByaWNlXVxuICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnVJdGVtc1tpXSlcbiAgICAgIH1cbiAgXG4gICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVHcmlkKVxuICAgIH1cbiAgXG4gICAgY29uc3Qgc29mdERyaW5rcyA9IG5ldyBEcmlua0l0ZW0oJ1NvZnQgRHJpbmtzJywgJ1ZhcmlvdXMgc2VsZWN0aW9uIG9mIHNvZnQgZHJpbmtzIDogQ29jYS1Db2xhLCBQZXBzaSwgU3ByaXRlLCBEb2N0b3IgUGVwcGVyLCBldGMuJywgMS4yNSlcbiAgICBjb25zdCBidWR3ZWlzZXIgPSBuZXcgRHJpbmtJdGVtKCdCdWR3ZWlzZXInLCAnRm9yIHRoZSB0YXN0ZWxlc3MgcGVyc29uLicsIDUpXG4gICAgY29uc3QgYnVzY2ggPSBuZXcgRHJpbmtJdGVtKCdCdXNjaCcsICdTdGFydCB5b3VyIG1vcm5pbmcgd2l0aCBhIGZyZXNoIEJ1c2NoIExhdHRlLicsIDUpXG4gICAgY29uc3Qgc2FtdWVsQWRhbXMgPSBuZXcgRHJpbmtJdGVtKCdTYW11ZWwgQWRhbXMnLCAnRm9yIHRoZSBBbWVyaWNhbiBQYXRyaW90IScsIDYpXG4gIFxuICAgIHJldHVybiBtZW51RGl2XG4gIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9