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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: auto;\n\n}\n\n#headerBar {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1vh;\n    height: 10vh;\n    opacity: 2;\n    background-color: rgba(0, 0, 0, .9);\n    padding: 1%;\n    border-radius: 4px;\n}\n\n.RestaurantTitle {\n    color: white;\n    font-family: 'Bangers', cursive;\n    font-size: 4vw;\n    padding: 3%\n}\n\n#mainSection {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 5vh;\n    height: max-content;\n    margin-bottom: 5%;\n    opacity: 2;\n    background-color: rgba(0, 0, 0, .9);\n    padding: 1%;\n    border-radius: 4px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.headerLi {\n    font-family: 'Bangers', cursive;\n    cursor: pointer;\n    font-size: 3vw;\n\n}\n\n.headerLi:hover {\n    color: #F14C0B !important;\n}\n\n#homeLeftDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 10%;\n    padding: 2%;\n    margin-top: 4%;\n    justify-content: flex-start;\n    align-content: stretch;\n    width: 50%;\n    height: fit-content;\n}\n\n.slogan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 3.25vw;\n}\n\n.subSlogan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n}\n\n#menuDiv {\n    padding: 2%;\n}\n\n#menuSectionDiv {\n    color: #F14C0B;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.75vw;\n    height: 2vh;\n    margin-bottom: 2%;\n}\n\n.menuGrid {\n    display: grid;\n    grid-template: auto auto / 15% 75% 10%;\n    align-items: center;\n    align-content: center;\n}\n\n#itemName {\n    color: white;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5vw;\n\n}\n\n#itemDescription {\n    color: white;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1vw;\n\n}\n\n#itemPrice {\n    color: white;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n    text-align: right;\n}\n\n#aboutDiv {\n    padding: 2%;\n    height: max-content;\n    display: flex;\n    gap: 1%;\n\n}\n\n#aboutLeftDiv {\n    display: grid;\n    gap: 15px;\n    width: 50%;\n    grid-template: 30vh 30vh / 20vw 20vw;\n    position: relative;\n}\n\n\n#1_Box {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#2_Box {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#3_Box {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2\n}\n\n#4_Box {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n\nimg {\n    min-width: 50%;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n}\n\n\n\n#aboutRightDiv {\n    width: 50%;\n    height: fit-content;\n    padding: 2%;\n    display: grid;\n    grid-template: auto auto / auto;\n}\n\n.aboutGrid {\n    display: grid;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    align-items: flex-start;\n\n}\n\n#aboutSpan,\n#hourSpan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 2vw;\n\n}\n\n#aboutContent {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n    text-align: justify;\n\n}\n\n.hoursDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 4%;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2;\n\n}\n\n.hoursGrid {\n    display: flex;\n    flex-direction: column;\n}\n\n.dayGrid>span,\n.dayGrid>p {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5vw;\n}\n\n.dayGrid {\n    display: grid;\n    align-items: center;\n    text-align: left;\n    grid-template: 4vh / 15vw 5vw 5vw;\n}\n\n#dayName {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#open {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#close {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 3;\n    grid-column-end: 4;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Playfair+Display&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap');\n\nbody {\n    margin: 0px;\n    background-image: url(./bbq.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: auto;\n\n}\n\n#headerBar {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 1vh;\n    height: 10vh;\n    opacity: 2;\n    background-color: rgba(0, 0, 0, .9);\n    padding: 1%;\n    border-radius: 4px;\n}\n\n.RestaurantTitle {\n    color: white;\n    font-family: 'Bangers', cursive;\n    font-size: 4vw;\n    padding: 3%\n}\n\n#mainSection {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 5vh;\n    height: max-content;\n    margin-bottom: 5%;\n    opacity: 2;\n    background-color: rgba(0, 0, 0, .9);\n    padding: 1%;\n    border-radius: 4px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.headerLi {\n    font-family: 'Bangers', cursive;\n    cursor: pointer;\n    font-size: 3vw;\n\n}\n\n.headerLi:hover {\n    color: #F14C0B !important;\n}\n\n#homeLeftDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 10%;\n    padding: 2%;\n    margin-top: 4%;\n    justify-content: flex-start;\n    align-content: stretch;\n    width: 50%;\n    height: fit-content;\n}\n\n.slogan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 3.25vw;\n}\n\n.subSlogan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n}\n\n#menuDiv {\n    padding: 2%;\n}\n\n#menuSectionDiv {\n    color: #F14C0B;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.75vw;\n    height: 2vh;\n    margin-bottom: 2%;\n}\n\n.menuGrid {\n    display: grid;\n    grid-template: auto auto / 15% 75% 10%;\n    align-items: center;\n    align-content: center;\n}\n\n#itemName {\n    color: white;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5vw;\n\n}\n\n#itemDescription {\n    color: white;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1vw;\n\n}\n\n#itemPrice {\n    color: white;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n    text-align: right;\n}\n\n#aboutDiv {\n    padding: 2%;\n    height: max-content;\n    display: flex;\n    gap: 1%;\n\n}\n\n#aboutLeftDiv {\n    display: grid;\n    gap: 15px;\n    width: 50%;\n    grid-template: 30vh 30vh / 20vw 20vw;\n    position: relative;\n}\n\n\n#1_Box {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#2_Box {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#3_Box {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2\n}\n\n#4_Box {\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n\nimg {\n    min-width: 50%;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n}\n\n\n\n#aboutRightDiv {\n    width: 50%;\n    height: fit-content;\n    padding: 2%;\n    display: grid;\n    grid-template: auto auto / auto;\n}\n\n.aboutGrid {\n    display: grid;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    align-items: flex-start;\n\n}\n\n#aboutSpan,\n#hourSpan {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 2vw;\n\n}\n\n#aboutContent {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.25vw;\n    text-align: justify;\n\n}\n\n.hoursDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 4%;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    grid-column-start: 1;\n    grid-column-end: 2;\n\n}\n\n.hoursGrid {\n    display: flex;\n    flex-direction: column;\n}\n\n.dayGrid>span,\n.dayGrid>p {\n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5vw;\n}\n\n.dayGrid {\n    display: grid;\n    align-items: center;\n    text-align: left;\n    grid-template: 4vh / 15vw 5vw 5vw;\n}\n\n#dayName {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#open {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#close {\n    grid-row-start: 1;\n    grid-row-end: 2;\n    grid-column-start: 3;\n    grid-column-end: 4;\n}"],"sourceRoot":""}]);
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






function aboutSection() {

    // Changing About Color to Orange; 
    const aboutLi = document.getElementById('headerLiAbout');
    aboutLi.style.color = '#F14C0B';

    // Creating a Div 
    const aboutDiv = document.createElement('div');
    aboutDiv.id = "aboutDiv";

    // Creating a left Div for random pictures;

    const leftDiv = document.createElement('div')
    leftDiv.id = 'aboutLeftDiv';

    const aboutOne = new Image();
    aboutOne.src = _about1_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const aboutTwo = new Image();
    aboutTwo.src = _about2_jpg__WEBPACK_IMPORTED_MODULE_1__;

    const aboutThree = new Image();
    aboutThree.src = _about3_jpg__WEBPACK_IMPORTED_MODULE_2__;

    const aboutFour = new Image();
    aboutFour.src = _about4_jpg__WEBPACK_IMPORTED_MODULE_3__;

    const imageArray = [aboutOne, aboutTwo, aboutThree, aboutFour];

    let i = 0
    while (i < 4) { // Creating boxes and appending an image into each box
        const box = document.createElement('box');
        box.id = (i + 1) + "_Box";
        box.appendChild(imageArray[i]);
        leftDiv.appendChild(box);
        i++;
    }

    aboutDiv.appendChild(leftDiv);

    // Creating a right Div
    const rightDiv = document.createElement('div');
    rightDiv.id = 'aboutRightDiv';

    // About text
    const aboutGrid = document.createElement('div');
    aboutGrid.className = "aboutGrid";
    rightDiv.appendChild(aboutGrid)

    const aboutSpan = document.createElement('span');
    aboutSpan.textContent = "About Us";

    aboutSpan.id = 'aboutSpan';
    aboutGrid.appendChild(aboutSpan);

    const aboutContent = document.createElement('p');
    aboutContent.id = 'aboutContent';
    aboutContent.textContent = "At erat pellentesque adipiscing commodo elit at imperdiet dui. Urna nunc id cursus metus aliquam eleifend mi in. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Volutpat diam ut venenatis tellus in. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ut eu sem integer vitae justo eget magna fermentum.";
    aboutGrid.appendChild(aboutContent);

    // Hours of operation section
    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hoursDiv'
    rightDiv.appendChild(hoursDiv);

    const hourSpan = document.createElement('span');
    hourSpan.id = 'hourSpan';
    hourSpan.textContent = "Hours of operation";
    hoursDiv.appendChild(hourSpan);

    // This div's children will consist of every day the restaurant is open 
    const hoursGrid = document.createElement('div');
    hoursGrid.className = 'hoursGrid';

    hoursDiv.appendChild(hoursGrid);

    // Creating a object for the operatings days 
    function Day(name, open, close) {

        this.name = name;
        this.open = open;
        this.close = close;

        const dayGrid = document.createElement('div')
        dayGrid.className = 'dayGrid';

        const dayName = document.createElement('span');
        dayName.id = 'dayName';
        dayName.textContent = this.name;

        const openDay = document.createElement('p');
        openDay.id = 'open';
        openDay.textContent = this.open;

        const closeDay = document.createElement('p');
        closeDay.id = 'close';
        closeDay.textContent = this.close;


        const dayItems = [dayName, openDay, closeDay];

        for (let i = 0; i < dayItems.length; i++) {
            dayGrid.appendChild(dayItems[i]);
        }

        hoursGrid.appendChild(dayGrid);
    }

    // Creating day objects
    const sunday = new Day('Sunday', "11:00", "22:00");
    const monday = new Day('Monday', "10:00", "22:00");
    const tuesday = new Day('Tuesday', "10:00", "22:00");
    const wednesday = new Day('Wednesday', "10:00", "22:00");
    const thursday = new Day('Thursday', "10:00", "22:00");
    const friday = new Day('Friday', "10:00", "22:00");
    const saturday = new Day('Sunday', "11:00", "22:00");

    aboutDiv.appendChild(rightDiv);

    return aboutDiv;

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


function homeSection() {

    // Changing Home Color to Orange; 
    const homeLi = document.getElementById('headerLiHome');
    homeLi.style.color = '#F14C0B';

    // Creating a Div 
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('style', 'display:flex;');
    homeDiv.id = 'homeDiv';

    // Left Part of Home Section
    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('style', 'display:flex; flex-direction:column;width:50%;');
    leftDiv.id = 'homeLeftDiv';

    const slogan = document.createElement('span');
    slogan.className = 'slogan';
    slogan.textContent = "Enjoy our excellent grills";
    leftDiv.appendChild(slogan);

    const subSloganOne = document.createElement('p');
    subSloganOne.className = 'subSlogan';
    subSloganOne.textContent = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    leftDiv.appendChild(subSloganOne);

    const subSloganTwo = document.createElement('p');
    subSloganTwo.className = 'subSlogan';
    subSloganTwo.textContent = "Fusce ut placerat orci nulla pellentesque dignissim enim sit. Ornare suspendisse sed nisi lacus sed viverra. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Enim eu turpis egestas pretium aenean. Est ante in nibh mauris cursus mattis molestie a";
    leftDiv.appendChild(subSloganTwo);

    // Right Part of Home Section
    const rightDiv = document.createElement('div');
    rightDiv.setAttribute('style', 'display:flex; flex-direction:column;width:50%;padding: 2%;');
    rightDiv.id = 'homeRightDiv';

    const steak = new Image();
    steak.src = _steak_jpg__WEBPACK_IMPORTED_MODULE_0__;

    rightDiv.appendChild(steak);

    homeDiv.appendChild(leftDiv);
    homeDiv.appendChild(rightDiv);

    return homeDiv;
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






//Setting up the html 

// This is the header bar *****************************************************************************************************************************************************************

const headerBar = document.createElement('div');
headerBar.id = 'headerBar';

const leftHeader = document.createElement('div');
leftHeader.setAttribute('style', 'width:50%')

const restaurantTitle = document.createElement('span');
restaurantTitle.className = 'RestaurantTitle';
restaurantTitle.textContent = "Al's SteakHouse";
leftHeader.appendChild(restaurantTitle);

const rightHeader = document.createElement('div');
rightHeader.setAttribute('style', 'display:flex;justify-content:center;width:50%')

const headerUL = document.createElement('ul');
headerUL.setAttribute('style', 'display:flex; flex-direction:row;color:white;gap:5%;');

const home = document.createElement('li');
home.className = 'headerLi';
home.id = 'headerLiHome';
home.textContent = 'Home';

const menu = document.createElement('li');
menu.className = 'headerLi';
menu.id = 'headerLiMenu';
menu.textContent = 'Menu';

const about = document.createElement('li');
about.className = 'headerLi';
about.textContent = 'About';
about.id = 'headerLiAbout';

const menuList = [home, menu, about];

for (let i = 0; i < menuList.length; i++) {
    headerUL.appendChild(menuList[i]);
}
rightHeader.appendChild(headerUL);

// Background Image for the landing page
const bbq = new Image();
bbq.src = _bbq_jpg__WEBPACK_IMPORTED_MODULE_1__;

headerBar.appendChild(leftHeader);
headerBar.appendChild(rightHeader);
document.body.appendChild(headerBar);

/***************************************************************************************************************************************************************************************/
// Main section

const mainSection = document.createElement('div');
mainSection.id = 'mainSection';
document.body.appendChild(mainSection);

// By default, we populate the main section with the home page 
mainSection.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

home.onclick = function () {

    const li = document.querySelectorAll('li');
    const children = mainSection.children;
    if (document.getElementById('homeDiv') === null) {
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = 'white';
        }
        for (let i = 0; i < children.length; i++) {
            children[i].remove();
        }
        mainSection.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    } else return;
}

menu.onclick = function () {

    const li = document.querySelectorAll('li');
    const children = mainSection.children;
    if (document.getElementById('menuDiv') === null) {
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = 'white';
        }

        for (let i = 0; i < children.length; i++) {
            children[i].remove();
        }
        mainSection.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    } else return;
}

about.onclick = function () {

    const li = document.querySelectorAll('li');
    const children = mainSection.children;
    if (document.getElementById('aboutDiv') === null) {
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = 'white';
        }

        for (let i = 0; i < children.length; i++) {
            children[i].remove();
        }
        mainSection.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    } else return;
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
function menuSection() {

    // Changing Home Color to Orange; 
    const homeLi = document.getElementById('headerLiMenu');
    homeLi.style.color = '#F14C0B';

    // Creating a Div 
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menuDiv';

    // Appetizer section
    const appetizers = document.createElement('div');
    appetizers.id = 'menuSectionDiv'
    appetizers.textContent = 'Appetizers';
    menuDiv.appendChild(appetizers)

    function AppetizerItem(name, description, price) {

        this.name = name;
        this.description = description;
        this.price = price;

        const appetizerGrid = document.createElement('div');
        appetizerGrid.className = 'menuGrid';

        const itemName = document.createElement('span');
        itemName.id = 'itemName';
        itemName.textContent = this.name;

        const itemDescription = document.createElement('p');
        itemDescription.id = 'itemDescription';
        itemDescription.textContent = this.description;

        const itemPrice = document.createElement('span');
        itemPrice.id = 'itemPrice';
        itemPrice.textContent = "$ " + this.price;

        const menuItems = [itemName, itemDescription, itemPrice];

        for (let i = 0; i < menuItems.length; i++) {
            appetizerGrid.appendChild(menuItems[i]);
        }

        menuDiv.appendChild(appetizerGrid);


    }

    const nachos = new AppetizerItem('Nachos', 'A bowl of tortilla chips with a generous portion of queso cheese, jalapenos and red salsa.', 10);
    const onion = new AppetizerItem('Onion Rings', "Good ol' onions rings deep fried in a beer flavoured batter.", 8);
    const mozza = new AppetizerItem('Mozzarella Sticks', 'Deep fried mozzarella sticks with italian seasonned crumbs, served with a spicy marinara sauce.', 14);

    // Main course section
    const mainCourse = document.createElement('div');
    mainCourse.id = 'menuSectionDiv';
    mainCourse.textContent = 'Main Course';
    menuDiv.appendChild(mainCourse);

    function MainCourseItem(name, description, price) {

        this.name = name;
        this.description = description;
        this.price = price;

        const menuGrid = document.createElement('div');
        menuGrid.className = 'menuGrid';

        const itemName = document.createElement('span');
        itemName.id = 'itemName';
        itemName.textContent = this.name;

        const itemDescription = document.createElement('p');
        itemDescription.id = 'itemDescription';
        itemDescription.textContent = this.description;

        const itemPrice = document.createElement('span');
        itemPrice.id = 'itemPrice';
        itemPrice.textContent = "$ " + this.price;

        const menuItems = [itemName, itemDescription, itemPrice];

        for (let i = 0; i < menuItems.length; i++) {
            menuGrid.appendChild(menuItems[i]);
        }

        menuDiv.appendChild(menuGrid);

    }

    const clasicHamburger = new MainCourseItem('Classic Hamburger', 'Enjoy a traditionnal hamburger with different toppings, including lettuce, sliced tomato, ketchup, mayo. Comes with french fries or salad', 15);
    const steakFrites = new MainCourseItem('Steak Frites', 'Dish consisting of steak paired with French fries. It is commonly served in European brasseries, and is considered by some to be the national dish of Belgium, which claims to be the place of its invention.', 30);
    const garlicButterSteak = new MainCourseItem('Garlic-Butter Steak', 'Made in a skillet, this garlic butter steak is one our old time classics! Comes with a generous portion of mashed potatoes', 25);
    const caesarSalad = new MainCourseItem('Caesar Salad', 'For a lighter course, we suggest you try our homemade Caesar Salad, made with fresh roman lettuce, bacon, bread crumbs.', 18)
    const ribeye = new MainCourseItem('Grilled Marinated Ribeye', "Our regulars' favorite meal! We let sit, from local beef producers, ribeyes, in tangy, barbecue-inspired marinade overnight. We grill up the ribeye to your convenience. Comes with french fries or a salad.", 35);


    // Drink sections
    const drinks = document.createElement('div');
    drinks.id = 'menuSectionDiv';
    drinks.textContent = 'Drinks';
    menuDiv.appendChild(drinks);

    function DrinkItem(name, description, price) {

        this.name = name;
        this.description = description;
        this.price = price;

        const menuGrid = document.createElement('div')
        menuGrid.className = 'menuGrid';

        const itemName = document.createElement('span');
        itemName.id = 'itemName';
        itemName.textContent = this.name;

        const itemDescription = document.createElement('p');
        itemDescription.id = 'itemDescription';
        itemDescription.textContent = this.description;

        const itemPrice = document.createElement('span');
        itemPrice.id = 'itemPrice';
        itemPrice.textContent = "$ " + this.price;

        const menuItems = [itemName, itemDescription, itemPrice];

        for (let i = 0; i < menuItems.length; i++) {
            menuGrid.appendChild(menuItems[i]);
        }

        menuDiv.appendChild(menuGrid);

    }

    const softDrinks = new DrinkItem('Soft Drinks', "Various selection of soft drinks : Coca-Cola, Pepsi, Sprite, Doctor Pepper, etc.", 1.25);
    const budweiser = new DrinkItem('Budweiser', "For the tasteless person.", 5);
    const busch = new DrinkItem('Busch', 'Start your morning with a fresh Busch Latte.', 5);
    const samuelAdams = new DrinkItem('Samuel Adams', "For the American Patriot!", 6);


    return menuDiv;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtGQUE0QjtBQUN4RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZJQUE2STtBQUM3SSxvSUFBb0k7QUFDcEkseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGdEQUFnRCxrQkFBa0Isd0VBQXdFLG1DQUFtQyw2QkFBNkIsbUJBQW1CLEtBQUssZ0JBQWdCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLHFDQUFxQyxzQkFBc0IsdUJBQXVCLHNCQUFzQixtQkFBbUIsaUJBQWlCLDBDQUEwQyxrQkFBa0IseUJBQXlCLEdBQUcsc0JBQXNCLG1CQUFtQixzQ0FBc0MscUJBQXFCLG9CQUFvQixrQkFBa0Isc0JBQXNCLHVCQUF1QixzQkFBc0IsMEJBQTBCLHdCQUF3QixpQkFBaUIsMENBQTBDLGtCQUFrQix5QkFBeUIsR0FBRyxRQUFRLDRCQUE0QixHQUFHLGVBQWUsc0NBQXNDLHNCQUFzQixxQkFBcUIsS0FBSyxxQkFBcUIsZ0NBQWdDLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsZUFBZSxrQkFBa0IscUJBQXFCLGtDQUFrQyw2QkFBNkIsaUJBQWlCLDBCQUEwQixHQUFHLGFBQWEsbUJBQW1CLHdDQUF3Qyx3QkFBd0IsR0FBRyxnQkFBZ0IsbUJBQW1CLHdDQUF3Qyx3QkFBd0IsR0FBRyxjQUFjLGtCQUFrQixHQUFHLHFCQUFxQixxQkFBcUIsd0NBQXdDLHdCQUF3QixrQkFBa0Isd0JBQXdCLEdBQUcsZUFBZSxvQkFBb0IsNkNBQTZDLDBCQUEwQiw0QkFBNEIsR0FBRyxlQUFlLG1CQUFtQix3QkFBd0Isc0JBQXNCLDJCQUEyQix5QkFBeUIsd0NBQXdDLHVCQUF1QixLQUFLLHNCQUFzQixtQkFBbUIsd0JBQXdCLHNCQUFzQix3QkFBd0Isc0JBQXNCLDJCQUEyQix5QkFBeUIsd0NBQXdDLHFCQUFxQixLQUFLLGdCQUFnQixtQkFBbUIsd0JBQXdCLHNCQUFzQiwyQkFBMkIseUJBQXlCLHdDQUF3Qyx3QkFBd0Isd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0IsMEJBQTBCLG9CQUFvQixjQUFjLEtBQUssbUJBQW1CLG9CQUFvQixnQkFBZ0IsaUJBQWlCLDJDQUEyQyx5QkFBeUIsR0FBRyxjQUFjLHdCQUF3QixzQkFBc0IsMkJBQTJCLHlCQUF5QixHQUFHLFlBQVksd0JBQXdCLHNCQUFzQiwyQkFBMkIseUJBQXlCLEdBQUcsWUFBWSx3QkFBd0Isc0JBQXNCLDJCQUEyQiwyQkFBMkIsWUFBWSx3QkFBd0Isc0JBQXNCLDJCQUEyQix5QkFBeUIsR0FBRyxXQUFXLHFCQUFxQixrQkFBa0IsbUJBQW1CLHlCQUF5QixHQUFHLHdCQUF3QixpQkFBaUIsMEJBQTBCLGtCQUFrQixvQkFBb0Isc0NBQXNDLEdBQUcsZ0JBQWdCLG9CQUFvQix3QkFBd0Isc0JBQXNCLDJCQUEyQix5QkFBeUIsOEJBQThCLEtBQUssNEJBQTRCLG1CQUFtQix3Q0FBd0MscUJBQXFCLEtBQUssbUJBQW1CLG1CQUFtQix3Q0FBd0Msd0JBQXdCLDBCQUEwQixLQUFLLGVBQWUsb0JBQW9CLDZCQUE2QixjQUFjLHdCQUF3QixzQkFBc0IsMkJBQTJCLHlCQUF5QixLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLEdBQUcsZ0NBQWdDLG1CQUFtQix3Q0FBd0MsdUJBQXVCLEdBQUcsY0FBYyxvQkFBb0IsMEJBQTBCLHVCQUF1Qix3Q0FBd0MsR0FBRyxjQUFjLHdCQUF3QixzQkFBc0IsMkJBQTJCLHlCQUF5QixHQUFHLFdBQVcsd0JBQXdCLHNCQUFzQiwyQkFBMkIseUJBQXlCLEdBQUcsWUFBWSx3QkFBd0Isc0JBQXNCLDJCQUEyQix5QkFBeUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sTUFBTSxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFB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cGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JicS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbmdlcnMmZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAxLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuXFxufVxcblxcbiNoZWFkZXJCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIG9wYWNpdHk6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uUmVzdGF1cmFudFRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgcGFkZGluZzogMyVcXG59XFxuXFxuI21haW5TZWN0aW9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBvcGFjaXR5OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5oZWFkZXJMaSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuXFxufVxcblxcbi5oZWFkZXJMaTpob3ZlciB7XFxuICAgIGNvbG9yOiAjRjE0QzBCICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lTGVmdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTAlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luLXRvcDogNCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnNsb2dhbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDMuMjV2dztcXG59XFxuXFxuLnN1YlNsb2dhbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuXFxuI21lbnVEaXYge1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuI21lbnVTZWN0aW9uRGl2IHtcXG4gICAgY29sb3I6ICNGMTRDMEI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XFxuICAgIGhlaWdodDogMnZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG59XFxuXFxuLm1lbnVHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gMTUlIDc1JSAxMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2l0ZW1OYW1lIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41dnc7XFxuXFxufVxcblxcbiNpdGVtRGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxdnc7XFxuXFxufVxcblxcbiNpdGVtUHJpY2Uge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jYWJvdXREaXYge1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxJTtcXG5cXG59XFxuXFxuI2Fib3V0TGVmdERpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMzB2aCAzMHZoIC8gMjB2dyAyMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbiMxX0JveCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiMyX0JveCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiMzX0JveCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDJcXG59XFxuXFxuIzRfQm94IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuXFxuaW1nIHtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuXFxuI2Fib3V0UmlnaHREaXYge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gYXV0bztcXG59XFxuXFxuLmFib3V0R3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbn1cXG5cXG4jYWJvdXRTcGFuLFxcbiNob3VyU3BhbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJ2dztcXG5cXG59XFxuXFxuI2Fib3V0Q29udGVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG5cXG59XFxuXFxuLmhvdXJzRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0JTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG5cXG59XFxuXFxuLmhvdXJzR3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kYXlHcmlkPnNwYW4sXFxuLmRheUdyaWQ+cCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcbn1cXG5cXG4uZGF5R3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDR2aCAvIDE1dncgNXZ3IDV2dztcXG59XFxuXFxuI2RheU5hbWUge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jb3BlbiB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiNjbG9zZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxXQUFXO0lBQ1gseURBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMs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QUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYW5nZXJzJmZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9iYnEuanBnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcblxcbn1cXG5cXG4jaGVhZGVyQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBvcGFjaXR5OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLlJlc3RhdXJhbnRUaXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIHBhZGRpbmc6IDMlXFxufVxcblxcbiNtYWluU2VjdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgb3BhY2l0eTogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyTGkge1xcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcblxcbn1cXG5cXG4uaGVhZGVyTGk6aG92ZXIge1xcbiAgICBjb2xvcjogI0YxNEMwQiAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZUxlZnREaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzLjI1dnc7XFxufVxcblxcbi5zdWJTbG9nYW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxufVxcblxcbiNtZW51RGl2IHtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbiNtZW51U2VjdGlvbkRpdiB7XFxuICAgIGNvbG9yOiAjRjE0QzBCO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xcbiAgICBoZWlnaHQ6IDJ2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbi5tZW51R3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIDE1JSA3NSUgMTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNpdGVtTmFtZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcblxcbn1cXG5cXG4jaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcblxcbn1cXG5cXG4jaXRlbVByaWNlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI2Fib3V0RGl2IHtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMSU7XFxuXFxufVxcblxcbiNhYm91dExlZnREaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDMwdmggMzB2aCAvIDIwdncgMjB2dztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4jMV9Cb3gge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jMl9Cb3gge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jM19Cb3gge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyXFxufVxcblxcbiM0X0JveCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcblxcbmltZyB7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcblxcbiNhYm91dFJpZ2h0RGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIGF1dG87XFxufVxcblxcbi5hYm91dEdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG59XFxuXFxuI2Fib3V0U3BhbixcXG4jaG91clNwYW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuXFxufVxcblxcbiNhYm91dENvbnRlbnQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuXFxufVxcblxcbi5ob3Vyc0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNCU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuXFxufVxcblxcbi5ob3Vyc0dyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGF5R3JpZD5zcGFuLFxcbi5kYXlHcmlkPnAge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG59XFxuXFxuLmRheUdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBncmlkLXRlbXBsYXRlOiA0dmggLyAxNXZ3IDV2dyA1dnc7XFxufVxcblxcbiNkYXlOYW1lIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxuI29wZW4ge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEFib3V0MSBmcm9tICcuL2Fib3V0MS5qcGcnO1xuaW1wb3J0IEFib3V0MiBmcm9tICcuL2Fib3V0Mi5qcGcnO1xuaW1wb3J0IEFib3V0MyBmcm9tICcuL2Fib3V0My5qcGcnO1xuaW1wb3J0IEFib3V0NCBmcm9tICcuL2Fib3V0NC5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0U2VjdGlvbigpIHtcblxuICAgIC8vIENoYW5naW5nIEFib3V0IENvbG9yIHRvIE9yYW5nZTsgXG4gICAgY29uc3QgYWJvdXRMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJMaUFib3V0Jyk7XG4gICAgYWJvdXRMaS5zdHlsZS5jb2xvciA9ICcjRjE0QzBCJztcblxuICAgIC8vIENyZWF0aW5nIGEgRGl2IFxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXREaXYuaWQgPSBcImFib3V0RGl2XCI7XG5cbiAgICAvLyBDcmVhdGluZyBhIGxlZnQgRGl2IGZvciByYW5kb20gcGljdHVyZXM7XG5cbiAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZWZ0RGl2LmlkID0gJ2Fib3V0TGVmdERpdic7XG5cbiAgICBjb25zdCBhYm91dE9uZSA9IG5ldyBJbWFnZSgpO1xuICAgIGFib3V0T25lLnNyYyA9IEFib3V0MTtcblxuICAgIGNvbnN0IGFib3V0VHdvID0gbmV3IEltYWdlKCk7XG4gICAgYWJvdXRUd28uc3JjID0gQWJvdXQyO1xuXG4gICAgY29uc3QgYWJvdXRUaHJlZSA9IG5ldyBJbWFnZSgpO1xuICAgIGFib3V0VGhyZWUuc3JjID0gQWJvdXQzO1xuXG4gICAgY29uc3QgYWJvdXRGb3VyID0gbmV3IEltYWdlKCk7XG4gICAgYWJvdXRGb3VyLnNyYyA9IEFib3V0NDtcblxuICAgIGNvbnN0IGltYWdlQXJyYXkgPSBbYWJvdXRPbmUsIGFib3V0VHdvLCBhYm91dFRocmVlLCBhYm91dEZvdXJdO1xuXG4gICAgbGV0IGkgPSAwXG4gICAgd2hpbGUgKGkgPCA0KSB7IC8vIENyZWF0aW5nIGJveGVzIGFuZCBhcHBlbmRpbmcgYW4gaW1hZ2UgaW50byBlYWNoIGJveFxuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3gnKTtcbiAgICAgICAgYm94LmlkID0gKGkgKyAxKSArIFwiX0JveFwiO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoaW1hZ2VBcnJheVtpXSk7XG4gICAgICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGxlZnREaXYpO1xuXG4gICAgLy8gQ3JlYXRpbmcgYSByaWdodCBEaXZcbiAgICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0RGl2LmlkID0gJ2Fib3V0UmlnaHREaXYnO1xuXG4gICAgLy8gQWJvdXQgdGV4dFxuICAgIGNvbnN0IGFib3V0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0R3JpZC5jbGFzc05hbWUgPSBcImFib3V0R3JpZFwiO1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGFib3V0R3JpZClcblxuICAgIGNvbnN0IGFib3V0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhYm91dFNwYW4udGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG5cbiAgICBhYm91dFNwYW4uaWQgPSAnYWJvdXRTcGFuJztcbiAgICBhYm91dEdyaWQuYXBwZW5kQ2hpbGQoYWJvdXRTcGFuKTtcblxuICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dENvbnRlbnQuaWQgPSAnYWJvdXRDb250ZW50JztcbiAgICBhYm91dENvbnRlbnQudGV4dENvbnRlbnQgPSBcIkF0IGVyYXQgcGVsbGVudGVzcXVlIGFkaXBpc2NpbmcgY29tbW9kbyBlbGl0IGF0IGltcGVyZGlldCBkdWkuIFVybmEgbnVuYyBpZCBjdXJzdXMgbWV0dXMgYWxpcXVhbSBlbGVpZmVuZCBtaSBpbi4gVml2ZXJyYSBhZGlwaXNjaW5nIGF0IGluIHRlbGx1cyBpbnRlZ2VyIGZldWdpYXQgc2NlbGVyaXNxdWUgdmFyaXVzIG1vcmJpLiBWb2x1dHBhdCBkaWFtIHV0IHZlbmVuYXRpcyB0ZWxsdXMgaW4uIFN1c3BlbmRpc3NlIGludGVyZHVtIGNvbnNlY3RldHVyIGxpYmVybyBpZCBmYXVjaWJ1cyBuaXNsIHRpbmNpZHVudC4gVXQgZXUgc2VtIGludGVnZXIgdml0YWUganVzdG8gZWdldCBtYWduYSBmZXJtZW50dW0uXCI7XG4gICAgYWJvdXRHcmlkLmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XG5cbiAgICAvLyBIb3VycyBvZiBvcGVyYXRpb24gc2VjdGlvblxuICAgIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNEaXYuY2xhc3NOYW1lID0gJ2hvdXJzRGl2J1xuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGhvdXJzRGl2KTtcblxuICAgIGNvbnN0IGhvdXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhvdXJTcGFuLmlkID0gJ2hvdXJTcGFuJztcbiAgICBob3VyU3Bhbi50ZXh0Q29udGVudCA9IFwiSG91cnMgb2Ygb3BlcmF0aW9uXCI7XG4gICAgaG91cnNEaXYuYXBwZW5kQ2hpbGQoaG91clNwYW4pO1xuXG4gICAgLy8gVGhpcyBkaXYncyBjaGlsZHJlbiB3aWxsIGNvbnNpc3Qgb2YgZXZlcnkgZGF5IHRoZSByZXN0YXVyYW50IGlzIG9wZW4gXG4gICAgY29uc3QgaG91cnNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNHcmlkLmNsYXNzTmFtZSA9ICdob3Vyc0dyaWQnO1xuXG4gICAgaG91cnNEaXYuYXBwZW5kQ2hpbGQoaG91cnNHcmlkKTtcblxuICAgIC8vIENyZWF0aW5nIGEgb2JqZWN0IGZvciB0aGUgb3BlcmF0aW5ncyBkYXlzIFxuICAgIGZ1bmN0aW9uIERheShuYW1lLCBvcGVuLCBjbG9zZSkge1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcblxuICAgICAgICBjb25zdCBkYXlHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGF5R3JpZC5jbGFzc05hbWUgPSAnZGF5R3JpZCc7XG5cbiAgICAgICAgY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGF5TmFtZS5pZCA9ICdkYXlOYW1lJztcbiAgICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgICAgICBjb25zdCBvcGVuRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvcGVuRGF5LmlkID0gJ29wZW4nO1xuICAgICAgICBvcGVuRGF5LnRleHRDb250ZW50ID0gdGhpcy5vcGVuO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjbG9zZURheS5pZCA9ICdjbG9zZSc7XG4gICAgICAgIGNsb3NlRGF5LnRleHRDb250ZW50ID0gdGhpcy5jbG9zZTtcblxuXG4gICAgICAgIGNvbnN0IGRheUl0ZW1zID0gW2RheU5hbWUsIG9wZW5EYXksIGNsb3NlRGF5XTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXlHcmlkLmFwcGVuZENoaWxkKGRheUl0ZW1zW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhvdXJzR3JpZC5hcHBlbmRDaGlsZChkYXlHcmlkKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGluZyBkYXkgb2JqZWN0c1xuICAgIGNvbnN0IHN1bmRheSA9IG5ldyBEYXkoJ1N1bmRheScsIFwiMTE6MDBcIiwgXCIyMjowMFwiKTtcbiAgICBjb25zdCBtb25kYXkgPSBuZXcgRGF5KCdNb25kYXknLCBcIjEwOjAwXCIsIFwiMjI6MDBcIik7XG4gICAgY29uc3QgdHVlc2RheSA9IG5ldyBEYXkoJ1R1ZXNkYXknLCBcIjEwOjAwXCIsIFwiMjI6MDBcIik7XG4gICAgY29uc3Qgd2VkbmVzZGF5ID0gbmV3IERheSgnV2VkbmVzZGF5JywgXCIxMDowMFwiLCBcIjIyOjAwXCIpO1xuICAgIGNvbnN0IHRodXJzZGF5ID0gbmV3IERheSgnVGh1cnNkYXknLCBcIjEwOjAwXCIsIFwiMjI6MDBcIik7XG4gICAgY29uc3QgZnJpZGF5ID0gbmV3IERheSgnRnJpZGF5JywgXCIxMDowMFwiLCBcIjIyOjAwXCIpO1xuICAgIGNvbnN0IHNhdHVyZGF5ID0gbmV3IERheSgnU3VuZGF5JywgXCIxMTowMFwiLCBcIjIyOjAwXCIpO1xuXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuXG4gICAgcmV0dXJuIGFib3V0RGl2O1xuXG59IiwiaW1wb3J0IFN0ZWFrSW1nIGZyb20gJy4vc3RlYWsuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVNlY3Rpb24oKSB7XG5cbiAgICAvLyBDaGFuZ2luZyBIb21lIENvbG9yIHRvIE9yYW5nZTsgXG4gICAgY29uc3QgaG9tZUxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckxpSG9tZScpO1xuICAgIGhvbWVMaS5zdHlsZS5jb2xvciA9ICcjRjE0QzBCJztcblxuICAgIC8vIENyZWF0aW5nIGEgRGl2IFxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4OycpO1xuICAgIGhvbWVEaXYuaWQgPSAnaG9tZURpdic7XG5cbiAgICAvLyBMZWZ0IFBhcnQgb2YgSG9tZSBTZWN0aW9uXG4gICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnREaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDo1MCU7Jyk7XG4gICAgbGVmdERpdi5pZCA9ICdob21lTGVmdERpdic7XG5cbiAgICBjb25zdCBzbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2xvZ2FuLmNsYXNzTmFtZSA9ICdzbG9nYW4nO1xuICAgIHNsb2dhbi50ZXh0Q29udGVudCA9IFwiRW5qb3kgb3VyIGV4Y2VsbGVudCBncmlsbHNcIjtcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKHNsb2dhbik7XG5cbiAgICBjb25zdCBzdWJTbG9nYW5PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3ViU2xvZ2FuT25lLmNsYXNzTmFtZSA9ICdzdWJTbG9nYW4nO1xuICAgIHN1YlNsb2dhbk9uZS50ZXh0Q29udGVudCA9IFwiRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCI7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChzdWJTbG9nYW5PbmUpO1xuXG4gICAgY29uc3Qgc3ViU2xvZ2FuVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN1YlNsb2dhblR3by5jbGFzc05hbWUgPSAnc3ViU2xvZ2FuJztcbiAgICBzdWJTbG9nYW5Ud28udGV4dENvbnRlbnQgPSBcIkZ1c2NlIHV0IHBsYWNlcmF0IG9yY2kgbnVsbGEgcGVsbGVudGVzcXVlIGRpZ25pc3NpbSBlbmltIHNpdC4gT3JuYXJlIHN1c3BlbmRpc3NlIHNlZCBuaXNpIGxhY3VzIHNlZCB2aXZlcnJhLiBVcm5hIG5lYyB0aW5jaWR1bnQgcHJhZXNlbnQgc2VtcGVyIGZldWdpYXQgbmliaCBzZWQgcHVsdmluYXIuIEVuaW0gZXUgdHVycGlzIGVnZXN0YXMgcHJldGl1bSBhZW5lYW4uIEVzdCBhbnRlIGluIG5pYmggbWF1cmlzIGN1cnN1cyBtYXR0aXMgbW9sZXN0aWUgYVwiO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoc3ViU2xvZ2FuVHdvKTtcblxuICAgIC8vIFJpZ2h0IFBhcnQgb2YgSG9tZSBTZWN0aW9uXG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjUwJTtwYWRkaW5nOiAyJTsnKTtcbiAgICByaWdodERpdi5pZCA9ICdob21lUmlnaHREaXYnO1xuXG4gICAgY29uc3Qgc3RlYWsgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdGVhay5zcmMgPSBTdGVha0ltZztcblxuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHN0ZWFrKTtcblxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChyaWdodERpdik7XG5cbiAgICByZXR1cm4gaG9tZURpdjtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBCYnEgZnJvbSAnLi9iYnEuanBnJ1xuaW1wb3J0IGhvbWVTZWN0aW9uIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudVNlY3Rpb24gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBhYm91dFNlY3Rpb24gZnJvbSAnLi9hYm91dC5qcyc7XG5cbi8vU2V0dGluZyB1cCB0aGUgaHRtbCBcblxuLy8gVGhpcyBpcyB0aGUgaGVhZGVyIGJhciAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5jb25zdCBoZWFkZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlckJhci5pZCA9ICdoZWFkZXJCYXInO1xuXG5jb25zdCBsZWZ0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZWZ0SGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6NTAlJylcblxuY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xucmVzdGF1cmFudFRpdGxlLmNsYXNzTmFtZSA9ICdSZXN0YXVyYW50VGl0bGUnO1xucmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gXCJBbCdzIFN0ZWFrSG91c2VcIjtcbmxlZnRIZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcblxuY29uc3QgcmlnaHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnJpZ2h0SGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NTAlJylcblxuY29uc3QgaGVhZGVyVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuaGVhZGVyVUwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOnJvdztjb2xvcjp3aGl0ZTtnYXA6NSU7Jyk7XG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuaG9tZS5jbGFzc05hbWUgPSAnaGVhZGVyTGknO1xuaG9tZS5pZCA9ICdoZWFkZXJMaUhvbWUnO1xuaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5tZW51LmNsYXNzTmFtZSA9ICdoZWFkZXJMaSc7XG5tZW51LmlkID0gJ2hlYWRlckxpTWVudSc7XG5tZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5hYm91dC5jbGFzc05hbWUgPSAnaGVhZGVyTGknO1xuYWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuYWJvdXQuaWQgPSAnaGVhZGVyTGlBYm91dCc7XG5cbmNvbnN0IG1lbnVMaXN0ID0gW2hvbWUsIG1lbnUsIGFib3V0XTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51TGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGhlYWRlclVMLmFwcGVuZENoaWxkKG1lbnVMaXN0W2ldKTtcbn1cbnJpZ2h0SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclVMKTtcblxuLy8gQmFja2dyb3VuZCBJbWFnZSBmb3IgdGhlIGxhbmRpbmcgcGFnZVxuY29uc3QgYmJxID0gbmV3IEltYWdlKCk7XG5iYnEuc3JjID0gQmJxO1xuXG5oZWFkZXJCYXIuYXBwZW5kQ2hpbGQobGVmdEhlYWRlcik7XG5oZWFkZXJCYXIuYXBwZW5kQ2hpbGQocmlnaHRIZWFkZXIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJCYXIpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gTWFpbiBzZWN0aW9uXG5cbmNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcblxuLy8gQnkgZGVmYXVsdCwgd2UgcG9wdWxhdGUgdGhlIG1haW4gc2VjdGlvbiB3aXRoIHRoZSBob21lIHBhZ2UgXG5tYWluU2VjdGlvbi5hcHBlbmRDaGlsZChob21lU2VjdGlvbigpKTtcblxuaG9tZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gbWFpblNlY3Rpb24uY2hpbGRyZW47XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lRGl2JykgPT09IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlbaV0uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKCkpO1xuICAgIH0gZWxzZSByZXR1cm47XG59XG5cbm1lbnUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IG1haW5TZWN0aW9uLmNoaWxkcmVuO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudURpdicpID09PSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpW2ldLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKCkpO1xuICAgIH0gZWxzZSByZXR1cm47XG59XG5cbmFib3V0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBtYWluU2VjdGlvbi5jaGlsZHJlbjtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0RGl2JykgPT09IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlbaV0uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKCkpO1xuICAgIH0gZWxzZSByZXR1cm47XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVNlY3Rpb24oKSB7XG5cbiAgICAvLyBDaGFuZ2luZyBIb21lIENvbG9yIHRvIE9yYW5nZTsgXG4gICAgY29uc3QgaG9tZUxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckxpTWVudScpO1xuICAgIGhvbWVMaS5zdHlsZS5jb2xvciA9ICcjRjE0QzBCJztcblxuICAgIC8vIENyZWF0aW5nIGEgRGl2IFxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGl2LmlkID0gJ21lbnVEaXYnO1xuXG4gICAgLy8gQXBwZXRpemVyIHNlY3Rpb25cbiAgICBjb25zdCBhcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwZXRpemVycy5pZCA9ICdtZW51U2VjdGlvbkRpdidcbiAgICBhcHBldGl6ZXJzLnRleHRDb250ZW50ID0gJ0FwcGV0aXplcnMnO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYXBwZXRpemVycylcblxuICAgIGZ1bmN0aW9uIEFwcGV0aXplckl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG5cbiAgICAgICAgY29uc3QgYXBwZXRpemVyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcHBldGl6ZXJHcmlkLmNsYXNzTmFtZSA9ICdtZW51R3JpZCc7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGl0ZW1OYW1lLmlkID0gJ2l0ZW1OYW1lJztcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uaWQgPSAnaXRlbURlc2NyaXB0aW9uJztcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pZCA9ICdpdGVtUHJpY2UnO1xuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBcIiQgXCIgKyB0aGlzLnByaWNlO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtpdGVtTmFtZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtUHJpY2VdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcHBldGl6ZXJHcmlkLmFwcGVuZENoaWxkKG1lbnVJdGVtc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKGFwcGV0aXplckdyaWQpO1xuXG5cbiAgICB9XG5cbiAgICBjb25zdCBuYWNob3MgPSBuZXcgQXBwZXRpemVySXRlbSgnTmFjaG9zJywgJ0EgYm93bCBvZiB0b3J0aWxsYSBjaGlwcyB3aXRoIGEgZ2VuZXJvdXMgcG9ydGlvbiBvZiBxdWVzbyBjaGVlc2UsIGphbGFwZW5vcyBhbmQgcmVkIHNhbHNhLicsIDEwKTtcbiAgICBjb25zdCBvbmlvbiA9IG5ldyBBcHBldGl6ZXJJdGVtKCdPbmlvbiBSaW5ncycsIFwiR29vZCBvbCcgb25pb25zIHJpbmdzIGRlZXAgZnJpZWQgaW4gYSBiZWVyIGZsYXZvdXJlZCBiYXR0ZXIuXCIsIDgpO1xuICAgIGNvbnN0IG1venphID0gbmV3IEFwcGV0aXplckl0ZW0oJ01venphcmVsbGEgU3RpY2tzJywgJ0RlZXAgZnJpZWQgbW96emFyZWxsYSBzdGlja3Mgd2l0aCBpdGFsaWFuIHNlYXNvbm5lZCBjcnVtYnMsIHNlcnZlZCB3aXRoIGEgc3BpY3kgbWFyaW5hcmEgc2F1Y2UuJywgMTQpO1xuXG4gICAgLy8gTWFpbiBjb3Vyc2Ugc2VjdGlvblxuICAgIGNvbnN0IG1haW5Db3Vyc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ291cnNlLmlkID0gJ21lbnVTZWN0aW9uRGl2JztcbiAgICBtYWluQ291cnNlLnRleHRDb250ZW50ID0gJ01haW4gQ291cnNlJztcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1haW5Db3Vyc2UpO1xuXG4gICAgZnVuY3Rpb24gTWFpbkNvdXJzZUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG5cbiAgICAgICAgY29uc3QgbWVudUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUdyaWQuY2xhc3NOYW1lID0gJ21lbnVHcmlkJztcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaXRlbU5hbWUuaWQgPSAnaXRlbU5hbWUnO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pZCA9ICdpdGVtRGVzY3JpcHRpb24nO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaXRlbVByaWNlLmlkID0gJ2l0ZW1QcmljZSc7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IFwiJCBcIiArIHRoaXMucHJpY2U7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW2l0ZW1OYW1lLCBpdGVtRGVzY3JpcHRpb24sIGl0ZW1QcmljZV07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnVJdGVtc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVHcmlkKTtcblxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNpY0hhbWJ1cmdlciA9IG5ldyBNYWluQ291cnNlSXRlbSgnQ2xhc3NpYyBIYW1idXJnZXInLCAnRW5qb3kgYSB0cmFkaXRpb25uYWwgaGFtYnVyZ2VyIHdpdGggZGlmZmVyZW50IHRvcHBpbmdzLCBpbmNsdWRpbmcgbGV0dHVjZSwgc2xpY2VkIHRvbWF0bywga2V0Y2h1cCwgbWF5by4gQ29tZXMgd2l0aCBmcmVuY2ggZnJpZXMgb3Igc2FsYWQnLCAxNSk7XG4gICAgY29uc3Qgc3RlYWtGcml0ZXMgPSBuZXcgTWFpbkNvdXJzZUl0ZW0oJ1N0ZWFrIEZyaXRlcycsICdEaXNoIGNvbnNpc3Rpbmcgb2Ygc3RlYWsgcGFpcmVkIHdpdGggRnJlbmNoIGZyaWVzLiBJdCBpcyBjb21tb25seSBzZXJ2ZWQgaW4gRXVyb3BlYW4gYnJhc3NlcmllcywgYW5kIGlzIGNvbnNpZGVyZWQgYnkgc29tZSB0byBiZSB0aGUgbmF0aW9uYWwgZGlzaCBvZiBCZWxnaXVtLCB3aGljaCBjbGFpbXMgdG8gYmUgdGhlIHBsYWNlIG9mIGl0cyBpbnZlbnRpb24uJywgMzApO1xuICAgIGNvbnN0IGdhcmxpY0J1dHRlclN0ZWFrID0gbmV3IE1haW5Db3Vyc2VJdGVtKCdHYXJsaWMtQnV0dGVyIFN0ZWFrJywgJ01hZGUgaW4gYSBza2lsbGV0LCB0aGlzIGdhcmxpYyBidXR0ZXIgc3RlYWsgaXMgb25lIG91ciBvbGQgdGltZSBjbGFzc2ljcyEgQ29tZXMgd2l0aCBhIGdlbmVyb3VzIHBvcnRpb24gb2YgbWFzaGVkIHBvdGF0b2VzJywgMjUpO1xuICAgIGNvbnN0IGNhZXNhclNhbGFkID0gbmV3IE1haW5Db3Vyc2VJdGVtKCdDYWVzYXIgU2FsYWQnLCAnRm9yIGEgbGlnaHRlciBjb3Vyc2UsIHdlIHN1Z2dlc3QgeW91IHRyeSBvdXIgaG9tZW1hZGUgQ2Flc2FyIFNhbGFkLCBtYWRlIHdpdGggZnJlc2ggcm9tYW4gbGV0dHVjZSwgYmFjb24sIGJyZWFkIGNydW1icy4nLCAxOClcbiAgICBjb25zdCByaWJleWUgPSBuZXcgTWFpbkNvdXJzZUl0ZW0oJ0dyaWxsZWQgTWFyaW5hdGVkIFJpYmV5ZScsIFwiT3VyIHJlZ3VsYXJzJyBmYXZvcml0ZSBtZWFsISBXZSBsZXQgc2l0LCBmcm9tIGxvY2FsIGJlZWYgcHJvZHVjZXJzLCByaWJleWVzLCBpbiB0YW5neSwgYmFyYmVjdWUtaW5zcGlyZWQgbWFyaW5hZGUgb3Zlcm5pZ2h0LiBXZSBncmlsbCB1cCB0aGUgcmliZXllIHRvIHlvdXIgY29udmVuaWVuY2UuIENvbWVzIHdpdGggZnJlbmNoIGZyaWVzIG9yIGEgc2FsYWQuXCIsIDM1KTtcblxuXG4gICAgLy8gRHJpbmsgc2VjdGlvbnNcbiAgICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmlua3MuaWQgPSAnbWVudVNlY3Rpb25EaXYnO1xuICAgIGRyaW5rcy50ZXh0Q29udGVudCA9ICdEcmlua3MnO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcblxuICAgIGZ1bmN0aW9uIERyaW5rSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcblxuICAgICAgICBjb25zdCBtZW51R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lbnVHcmlkLmNsYXNzTmFtZSA9ICdtZW51R3JpZCc7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGl0ZW1OYW1lLmlkID0gJ2l0ZW1OYW1lJztcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uaWQgPSAnaXRlbURlc2NyaXB0aW9uJztcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pZCA9ICdpdGVtUHJpY2UnO1xuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBcIiQgXCIgKyB0aGlzLnByaWNlO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtpdGVtTmFtZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtUHJpY2VdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51SXRlbXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51R3JpZCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzb2Z0RHJpbmtzID0gbmV3IERyaW5rSXRlbSgnU29mdCBEcmlua3MnLCBcIlZhcmlvdXMgc2VsZWN0aW9uIG9mIHNvZnQgZHJpbmtzIDogQ29jYS1Db2xhLCBQZXBzaSwgU3ByaXRlLCBEb2N0b3IgUGVwcGVyLCBldGMuXCIsIDEuMjUpO1xuICAgIGNvbnN0IGJ1ZHdlaXNlciA9IG5ldyBEcmlua0l0ZW0oJ0J1ZHdlaXNlcicsIFwiRm9yIHRoZSB0YXN0ZWxlc3MgcGVyc29uLlwiLCA1KTtcbiAgICBjb25zdCBidXNjaCA9IG5ldyBEcmlua0l0ZW0oJ0J1c2NoJywgJ1N0YXJ0IHlvdXIgbW9ybmluZyB3aXRoIGEgZnJlc2ggQnVzY2ggTGF0dGUuJywgNSk7XG4gICAgY29uc3Qgc2FtdWVsQWRhbXMgPSBuZXcgRHJpbmtJdGVtKCdTYW11ZWwgQWRhbXMnLCBcIkZvciB0aGUgQW1lcmljYW4gUGF0cmlvdCFcIiwgNik7XG5cblxuICAgIHJldHVybiBtZW51RGl2O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==