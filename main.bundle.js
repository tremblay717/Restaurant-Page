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
    const sunday    = new Day('Sunday', "11:00", "22:00");
    const monday    = new Day('Monday', "10:00", "22:00");
    const tuesday   = new Day('Tuesday', "10:00", "22:00");
    const wednesday = new Day('Wednesday', "10:00", "22:00");
    const thursday  = new Day('Thursday', "10:00", "22:00");
    const friday    = new Day('Friday', "10:00", "22:00");
    const saturday  = new Day('Sunday', "11:00", "22:00");

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
    const homeLi = document.getElementById('headerLiHome')
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

        const appetizerGrid = document.createElement('div')
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
    const onion = new AppetizerItem('Onion Rings', "Good ol' onions rings deep fried in a beer flavoured batter.", 8)
    const mozza = new AppetizerItem('Mozzarella Sticks', 'Deep fried mozzarella sticks with italian seasonned crumbs, served with a spicy marinara sauce.', 14)

    // Main course section
    const mainCourse = document.createElement('div');
    mainCourse.id = 'menuSectionDiv'
    mainCourse.textContent = 'Main Course';
    menuDiv.appendChild(mainCourse)

    function MainCourseItem(name, description, price) {

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

    const clasicHamburger = new MainCourseItem('Classic Hamburger', 'Enjoy a traditionnal hamburger with different toppings, including lettuce, sliced tomato, ketchup, mayo. Comes with french fries or salad', 15)
    const steakFrites = new MainCourseItem('Steak Frites', 'Dish consisting of steak paired with French fries. It is commonly served in European brasseries, and is considered by some to be the national dish of Belgium, which claims to be the place of its invention.', 30)
    const garlicButterSteak = new MainCourseItem('Garlic-Butter Steak', 'Made in a skillet, this garlic butter steak is one our old time classics! Comes with a generous portion of mashed potatoes', 25);
    const caesarSalad = new MainCourseItem('Caesar Salad', 'For a lighter course, we suggest you try our homemade Caesar Salad, made with fresh roman lettuce, bacon, bread crumbs.', 18)
    const ribeye = new MainCourseItem('Grilled Marinated Ribeye', "Our regulars' favorite meal! We let sit, from local beef producers, ribeyes, in tangy, barbecue-inspired marinade overnight. We grill up the ribeye to your convenience. Comes with french fries or a salad.", 35)


    // Drink sections
    const drinks = document.createElement('div');
    drinks.id = 'menuSectionDiv'
    drinks.textContent = 'Drinks';
    menuDiv.appendChild(drinks)

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

    const softDrinks = new DrinkItem('Soft Drinks', "Various selection of soft drinks : Coca-Cola, Pepsi, Sprite, Doctor Pepper, etc.", 1.25)
    const budweiser = new DrinkItem('Budweiser', "For the tasteless person.", 5);
    const busch = new DrinkItem('Busch', 'Start your morning with a fresh Busch Latte.', 5);
    const samuelAdams = new DrinkItem('Samuel Adams', "For the American Patriot!", 6)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sTUFBTSxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFB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IndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYnEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYW5nZXJzJmZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcblxcbn1cXG5cXG4jaGVhZGVyQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBvcGFjaXR5OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLlJlc3RhdXJhbnRUaXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIHBhZGRpbmc6IDMlXFxufVxcblxcbiNtYWluU2VjdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgb3BhY2l0eTogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyTGkge1xcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcblxcbn1cXG5cXG4uaGVhZGVyTGk6aG92ZXIge1xcbiAgICBjb2xvcjogI0YxNEMwQiAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZUxlZnREaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbi10b3A6IDQlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzLjI1dnc7XFxufVxcblxcbi5zdWJTbG9nYW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxufVxcblxcbiNtZW51RGl2IHtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbiNtZW51U2VjdGlvbkRpdiB7XFxuICAgIGNvbG9yOiAjRjE0QzBCO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xcbiAgICBoZWlnaHQ6IDJ2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbi5tZW51R3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIDE1JSA3NSUgMTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNpdGVtTmFtZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcblxcbn1cXG5cXG4jaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcblxcbn1cXG5cXG4jaXRlbVByaWNlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI2Fib3V0RGl2IHtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMSU7XFxuXFxufVxcblxcbiNhYm91dExlZnREaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDMwdmggMzB2aCAvIDIwdncgMjB2dztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4jMV9Cb3gge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jMl9Cb3gge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jM19Cb3gge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyXFxufVxcblxcbiM0X0JveCB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcblxcbmltZyB7XFxuICAgIG1pbi13aWR0aDogNTAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcblxcbiNhYm91dFJpZ2h0RGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIGF1dG87XFxufVxcblxcbi5hYm91dEdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG59XFxuXFxuI2Fib3V0U3BhbixcXG4jaG91clNwYW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuXFxufVxcblxcbiNhYm91dENvbnRlbnQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuXFxufVxcblxcbi5ob3Vyc0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNCU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuXFxufVxcblxcbi5ob3Vyc0dyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGF5R3JpZD5zcGFuLFxcbi5kYXlHcmlkPnAge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG59XFxuXFxuLmRheUdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBncmlkLXRlbXBsYXRlOiA0dmggLyAxNXZ3IDV2dyA1dnc7XFxufVxcblxcbiNkYXlOYW1lIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxuI29wZW4ge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksV0FBVztJQUNYLHlEQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUNBQW1DO0lB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QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFuZ2VycyZmYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDEsNTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmJxLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGhlaWdodDogYXV0bztcXG5cXG59XFxuXFxuI2hlYWRlckJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgb3BhY2l0eTogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5SZXN0YXVyYW50VGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiAzJVxcbn1cXG5cXG4jbWFpblNlY3Rpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIG9wYWNpdHk6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmhlYWRlckxpIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDN2dztcXG5cXG59XFxuXFxuLmhlYWRlckxpOmhvdmVyIHtcXG4gICAgY29sb3I6ICNGMTRDMEIgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWVMZWZ0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW4tdG9wOiA0JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uc2xvZ2FuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMy4yNXZ3O1xcbn1cXG5cXG4uc3ViU2xvZ2FuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cXG4jbWVudURpdiB7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4jbWVudVNlY3Rpb25EaXYge1xcbiAgICBjb2xvcjogI0YxNEMwQjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNzV2dztcXG4gICAgaGVpZ2h0OiAydmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG5cXG4ubWVudUdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gLyAxNSUgNzUlIDEwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaXRlbU5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjV2dztcXG5cXG59XFxuXFxuI2l0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDF2dztcXG5cXG59XFxuXFxuI2l0ZW1QcmljZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbiNhYm91dERpdiB7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDElO1xcblxcbn1cXG5cXG4jYWJvdXRMZWZ0RGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBncmlkLXRlbXBsYXRlOiAzMHZoIDMwdmggLyAyMHZ3IDIwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuIzFfQm94IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxuIzJfQm94IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuIzNfQm94IHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMlxcbn1cXG5cXG4jNF9Cb3gge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG5cXG5pbWcge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG5cXG4jYWJvdXRSaWdodERpdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gLyBhdXRvO1xcbn1cXG5cXG4uYWJvdXRHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxufVxcblxcbiNhYm91dFNwYW4sXFxuI2hvdXJTcGFuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcblxcbn1cXG5cXG4jYWJvdXRDb250ZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcblxcbn1cXG5cXG4uaG91cnNEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcblxcbn1cXG5cXG4uaG91cnNHcmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRheUdyaWQ+c3BhbixcXG4uZGF5R3JpZD5wIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41dnc7XFxufVxcblxcbi5kYXlHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNHZoIC8gMTV2dyA1dncgNXZ3O1xcbn1cXG5cXG4jZGF5TmFtZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiNvcGVuIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI2Nsb3NlIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBBYm91dDEgZnJvbSAnLi9hYm91dDEuanBnJztcbmltcG9ydCBBYm91dDIgZnJvbSAnLi9hYm91dDIuanBnJztcbmltcG9ydCBBYm91dDMgZnJvbSAnLi9hYm91dDMuanBnJztcbmltcG9ydCBBYm91dDQgZnJvbSAnLi9hYm91dDQuanBnJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFNlY3Rpb24oKSB7XG5cbiAgICAvLyBDaGFuZ2luZyBBYm91dCBDb2xvciB0byBPcmFuZ2U7IFxuICAgIGNvbnN0IGFib3V0TGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyTGlBYm91dCcpO1xuICAgIGFib3V0TGkuc3R5bGUuY29sb3IgPSAnI0YxNEMwQic7XG5cbiAgICAvLyBDcmVhdGluZyBhIERpdiBcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RGl2LmlkID0gXCJhYm91dERpdlwiO1xuXG4gICAgLy8gQ3JlYXRpbmcgYSBsZWZ0IERpdiBmb3IgcmFuZG9tIHBpY3R1cmVzO1xuXG4gICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGVmdERpdi5pZCA9ICdhYm91dExlZnREaXYnO1xuXG4gICAgY29uc3QgYWJvdXRPbmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBhYm91dE9uZS5zcmMgPSBBYm91dDE7XG5cbiAgICBjb25zdCBhYm91dFR3byA9IG5ldyBJbWFnZSgpO1xuICAgIGFib3V0VHdvLnNyYyA9IEFib3V0MjtcblxuICAgIGNvbnN0IGFib3V0VGhyZWUgPSBuZXcgSW1hZ2UoKTtcbiAgICBhYm91dFRocmVlLnNyYyA9IEFib3V0MztcblxuICAgIGNvbnN0IGFib3V0Rm91ciA9IG5ldyBJbWFnZSgpO1xuICAgIGFib3V0Rm91ci5zcmMgPSBBYm91dDQ7XG5cbiAgICBjb25zdCBpbWFnZUFycmF5ID0gW2Fib3V0T25lLCBhYm91dFR3bywgYWJvdXRUaHJlZSwgYWJvdXRGb3VyXTtcblxuICAgIGxldCBpID0gMFxuICAgIHdoaWxlIChpIDwgNCkgeyAvLyBDcmVhdGluZyBib3hlcyBhbmQgYXBwZW5kaW5nIGFuIGltYWdlIGludG8gZWFjaCBib3hcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm94Jyk7XG4gICAgICAgIGJveC5pZCA9IChpICsgMSkgKyBcIl9Cb3hcIjtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGltYWdlQXJyYXlbaV0pO1xuICAgICAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcblxuICAgIC8vIENyZWF0aW5nIGEgcmlnaHQgRGl2XG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodERpdi5pZCA9ICdhYm91dFJpZ2h0RGl2JztcblxuICAgIC8vIEFib3V0IHRleHRcbiAgICBjb25zdCBhYm91dEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEdyaWQuY2xhc3NOYW1lID0gXCJhYm91dEdyaWRcIjtcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChhYm91dEdyaWQpXG5cbiAgICBjb25zdCBhYm91dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWJvdXRTcGFuLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuXG4gICAgYWJvdXRTcGFuLmlkID0gJ2Fib3V0U3Bhbic7XG4gICAgYWJvdXRHcmlkLmFwcGVuZENoaWxkKGFib3V0U3Bhbik7XG5cbiAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRDb250ZW50LmlkID0gJ2Fib3V0Q29udGVudCc7XG4gICAgYWJvdXRDb250ZW50LnRleHRDb250ZW50ID0gXCJBdCBlcmF0IHBlbGxlbnRlc3F1ZSBhZGlwaXNjaW5nIGNvbW1vZG8gZWxpdCBhdCBpbXBlcmRpZXQgZHVpLiBVcm5hIG51bmMgaWQgY3Vyc3VzIG1ldHVzIGFsaXF1YW0gZWxlaWZlbmQgbWkgaW4uIFZpdmVycmEgYWRpcGlzY2luZyBhdCBpbiB0ZWxsdXMgaW50ZWdlciBmZXVnaWF0IHNjZWxlcmlzcXVlIHZhcml1cyBtb3JiaS4gVm9sdXRwYXQgZGlhbSB1dCB2ZW5lbmF0aXMgdGVsbHVzIGluLiBTdXNwZW5kaXNzZSBpbnRlcmR1bSBjb25zZWN0ZXR1ciBsaWJlcm8gaWQgZmF1Y2lidXMgbmlzbCB0aW5jaWR1bnQuIFV0IGV1IHNlbSBpbnRlZ2VyIHZpdGFlIGp1c3RvIGVnZXQgbWFnbmEgZmVybWVudHVtLlwiO1xuICAgIGFib3V0R3JpZC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuXG4gICAgLy8gSG91cnMgb2Ygb3BlcmF0aW9uIHNlY3Rpb25cbiAgICBjb25zdCBob3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzRGl2LmNsYXNzTmFtZSA9ICdob3Vyc0RpdidcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChob3Vyc0Rpdik7XG5cbiAgICBjb25zdCBob3VyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBob3VyU3Bhbi5pZCA9ICdob3VyU3Bhbic7XG4gICAgaG91clNwYW4udGV4dENvbnRlbnQgPSBcIkhvdXJzIG9mIG9wZXJhdGlvblwiO1xuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKGhvdXJTcGFuKTtcblxuICAgIC8vIFRoaXMgZGl2J3MgY2hpbGRyZW4gd2lsbCBjb25zaXN0IG9mIGV2ZXJ5IGRheSB0aGUgcmVzdGF1cmFudCBpcyBvcGVuIFxuICAgIGNvbnN0IGhvdXJzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzR3JpZC5jbGFzc05hbWUgPSAnaG91cnNHcmlkJztcblxuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKGhvdXJzR3JpZCk7XG5cbiAgICAvLyBDcmVhdGluZyBhIG9iamVjdCBmb3IgdGhlIG9wZXJhdGluZ3MgZGF5cyBcbiAgICBmdW5jdGlvbiBEYXkobmFtZSwgb3BlbiwgY2xvc2UpIHtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG5cbiAgICAgICAgY29uc3QgZGF5R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRheUdyaWQuY2xhc3NOYW1lID0gJ2RheUdyaWQnO1xuXG4gICAgICAgIGNvbnN0IGRheU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRheU5hbWUuaWQgPSAnZGF5TmFtZSc7XG4gICAgICAgIGRheU5hbWUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgY29uc3Qgb3BlbkRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb3BlbkRheS5pZCA9ICdvcGVuJztcbiAgICAgICAgb3BlbkRheS50ZXh0Q29udGVudCA9IHRoaXMub3BlbjtcblxuICAgICAgICBjb25zdCBjbG9zZURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2xvc2VEYXkuaWQgPSAnY2xvc2UnO1xuICAgICAgICBjbG9zZURheS50ZXh0Q29udGVudCA9IHRoaXMuY2xvc2U7XG5cblxuICAgICAgICBjb25zdCBkYXlJdGVtcyA9IFtkYXlOYW1lLCBvcGVuRGF5LCBjbG9zZURheV07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF5R3JpZC5hcHBlbmRDaGlsZChkYXlJdGVtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGhvdXJzR3JpZC5hcHBlbmRDaGlsZChkYXlHcmlkKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGluZyBkYXkgb2JqZWN0c1xuICAgIGNvbnN0IHN1bmRheSAgICA9IG5ldyBEYXkoJ1N1bmRheScsIFwiMTE6MDBcIiwgXCIyMjowMFwiKTtcbiAgICBjb25zdCBtb25kYXkgICAgPSBuZXcgRGF5KCdNb25kYXknLCBcIjEwOjAwXCIsIFwiMjI6MDBcIik7XG4gICAgY29uc3QgdHVlc2RheSAgID0gbmV3IERheSgnVHVlc2RheScsIFwiMTA6MDBcIiwgXCIyMjowMFwiKTtcbiAgICBjb25zdCB3ZWRuZXNkYXkgPSBuZXcgRGF5KCdXZWRuZXNkYXknLCBcIjEwOjAwXCIsIFwiMjI6MDBcIik7XG4gICAgY29uc3QgdGh1cnNkYXkgID0gbmV3IERheSgnVGh1cnNkYXknLCBcIjEwOjAwXCIsIFwiMjI6MDBcIik7XG4gICAgY29uc3QgZnJpZGF5ICAgID0gbmV3IERheSgnRnJpZGF5JywgXCIxMDowMFwiLCBcIjIyOjAwXCIpO1xuICAgIGNvbnN0IHNhdHVyZGF5ICA9IG5ldyBEYXkoJ1N1bmRheScsIFwiMTE6MDBcIiwgXCIyMjowMFwiKTtcblxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcblxuICAgIHJldHVybiBhYm91dERpdjtcblxufSIsImltcG9ydCBTdGVha0ltZyBmcm9tICcuL3N0ZWFrLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVTZWN0aW9uKCkge1xuXG4gICAgLy8gQ2hhbmdpbmcgSG9tZSBDb2xvciB0byBPcmFuZ2U7IFxuICAgIGNvbnN0IGhvbWVMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJMaUhvbWUnKVxuICAgIGhvbWVMaS5zdHlsZS5jb2xvciA9ICcjRjE0QzBCJztcblxuICAgIC8vIENyZWF0aW5nIGEgRGl2IFxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4OycpO1xuICAgIGhvbWVEaXYuaWQgPSAnaG9tZURpdic7XG5cbiAgICAvLyBMZWZ0IFBhcnQgb2YgSG9tZSBTZWN0aW9uXG4gICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnREaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDo1MCU7Jyk7XG4gICAgbGVmdERpdi5pZCA9ICdob21lTGVmdERpdic7XG5cbiAgICBjb25zdCBzbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2xvZ2FuLmNsYXNzTmFtZSA9ICdzbG9nYW4nO1xuICAgIHNsb2dhbi50ZXh0Q29udGVudCA9IFwiRW5qb3kgb3VyIGV4Y2VsbGVudCBncmlsbHNcIjtcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKHNsb2dhbik7XG5cbiAgICBjb25zdCBzdWJTbG9nYW5PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3ViU2xvZ2FuT25lLmNsYXNzTmFtZSA9ICdzdWJTbG9nYW4nO1xuICAgIHN1YlNsb2dhbk9uZS50ZXh0Q29udGVudCA9IFwiRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCI7XG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChzdWJTbG9nYW5PbmUpO1xuXG4gICAgY29uc3Qgc3ViU2xvZ2FuVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN1YlNsb2dhblR3by5jbGFzc05hbWUgPSAnc3ViU2xvZ2FuJztcbiAgICBzdWJTbG9nYW5Ud28udGV4dENvbnRlbnQgPSBcIkZ1c2NlIHV0IHBsYWNlcmF0IG9yY2kgbnVsbGEgcGVsbGVudGVzcXVlIGRpZ25pc3NpbSBlbmltIHNpdC4gT3JuYXJlIHN1c3BlbmRpc3NlIHNlZCBuaXNpIGxhY3VzIHNlZCB2aXZlcnJhLiBVcm5hIG5lYyB0aW5jaWR1bnQgcHJhZXNlbnQgc2VtcGVyIGZldWdpYXQgbmliaCBzZWQgcHVsdmluYXIuIEVuaW0gZXUgdHVycGlzIGVnZXN0YXMgcHJldGl1bSBhZW5lYW4uIEVzdCBhbnRlIGluIG5pYmggbWF1cmlzIGN1cnN1cyBtYXR0aXMgbW9sZXN0aWUgYVwiO1xuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoc3ViU2xvZ2FuVHdvKTtcblxuICAgIC8vIFJpZ2h0IFBhcnQgb2YgSG9tZSBTZWN0aW9uXG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjUwJTtwYWRkaW5nOiAyJTsnKTtcbiAgICByaWdodERpdi5pZCA9ICdob21lUmlnaHREaXYnO1xuXG4gICAgY29uc3Qgc3RlYWsgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdGVhay5zcmMgPSBTdGVha0ltZztcblxuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHN0ZWFrKTtcblxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChyaWdodERpdik7XG5cbiAgICByZXR1cm4gaG9tZURpdjtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBCYnEgZnJvbSAnLi9iYnEuanBnJ1xuaW1wb3J0IGhvbWVTZWN0aW9uIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudVNlY3Rpb24gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBhYm91dFNlY3Rpb24gZnJvbSAnLi9hYm91dC5qcyc7XG5cbi8vU2V0dGluZyB1cCB0aGUgaHRtbCBcblxuLy8gVGhpcyBpcyB0aGUgaGVhZGVyIGJhciAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5jb25zdCBoZWFkZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlckJhci5pZCA9ICdoZWFkZXJCYXInO1xuXG5jb25zdCBsZWZ0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZWZ0SGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6NTAlJylcblxuY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xucmVzdGF1cmFudFRpdGxlLmNsYXNzTmFtZSA9ICdSZXN0YXVyYW50VGl0bGUnO1xucmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gXCJBbCdzIFN0ZWFrSG91c2VcIjtcbmxlZnRIZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcblxuY29uc3QgcmlnaHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnJpZ2h0SGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NTAlJylcblxuY29uc3QgaGVhZGVyVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuaGVhZGVyVUwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOnJvdztjb2xvcjp3aGl0ZTtnYXA6NSU7Jyk7XG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuaG9tZS5jbGFzc05hbWUgPSAnaGVhZGVyTGknO1xuaG9tZS5pZCA9ICdoZWFkZXJMaUhvbWUnO1xuaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5tZW51LmNsYXNzTmFtZSA9ICdoZWFkZXJMaSc7XG5tZW51LmlkID0gJ2hlYWRlckxpTWVudSc7XG5tZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5hYm91dC5jbGFzc05hbWUgPSAnaGVhZGVyTGknO1xuYWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuYWJvdXQuaWQgPSAnaGVhZGVyTGlBYm91dCc7XG5cbmNvbnN0IG1lbnVMaXN0ID0gW2hvbWUsIG1lbnUsIGFib3V0XTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51TGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGhlYWRlclVMLmFwcGVuZENoaWxkKG1lbnVMaXN0W2ldKTtcbn1cbnJpZ2h0SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclVMKTtcblxuLy8gQmFja2dyb3VuZCBJbWFnZSBmb3IgdGhlIGxhbmRpbmcgcGFnZVxuY29uc3QgYmJxID0gbmV3IEltYWdlKCk7XG5iYnEuc3JjID0gQmJxO1xuXG5oZWFkZXJCYXIuYXBwZW5kQ2hpbGQobGVmdEhlYWRlcik7XG5oZWFkZXJCYXIuYXBwZW5kQ2hpbGQocmlnaHRIZWFkZXIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJCYXIpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gTWFpbiBzZWN0aW9uXG5cbmNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcblxuLy8gQnkgZGVmYXVsdCwgd2UgcG9wdWxhdGUgdGhlIG1haW4gc2VjdGlvbiB3aXRoIHRoZSBob21lIHBhZ2UgXG5tYWluU2VjdGlvbi5hcHBlbmRDaGlsZChob21lU2VjdGlvbigpKTtcblxuaG9tZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gbWFpblNlY3Rpb24uY2hpbGRyZW47XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lRGl2JykgPT09IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlbaV0uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKCkpO1xuICAgIH0gZWxzZSByZXR1cm47XG59XG5cbm1lbnUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IG1haW5TZWN0aW9uLmNoaWxkcmVuO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudURpdicpID09PSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpW2ldLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKCkpO1xuICAgIH0gZWxzZSByZXR1cm47XG59XG5cbmFib3V0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBtYWluU2VjdGlvbi5jaGlsZHJlbjtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0RGl2JykgPT09IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlbaV0uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKCkpO1xuICAgIH0gZWxzZSByZXR1cm47XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVNlY3Rpb24oKSB7XG5cbiAgICAvLyBDaGFuZ2luZyBIb21lIENvbG9yIHRvIE9yYW5nZTsgXG4gICAgY29uc3QgaG9tZUxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckxpTWVudScpO1xuICAgIGhvbWVMaS5zdHlsZS5jb2xvciA9ICcjRjE0QzBCJztcblxuICAgIC8vIENyZWF0aW5nIGEgRGl2IFxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGl2LmlkID0gJ21lbnVEaXYnO1xuXG4gICAgLy8gQXBwZXRpemVyIHNlY3Rpb25cbiAgICBjb25zdCBhcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwZXRpemVycy5pZCA9ICdtZW51U2VjdGlvbkRpdidcbiAgICBhcHBldGl6ZXJzLnRleHRDb250ZW50ID0gJ0FwcGV0aXplcnMnO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYXBwZXRpemVycylcblxuICAgIGZ1bmN0aW9uIEFwcGV0aXplckl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG5cbiAgICAgICAgY29uc3QgYXBwZXRpemVyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGFwcGV0aXplckdyaWQuY2xhc3NOYW1lID0gJ21lbnVHcmlkJztcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaXRlbU5hbWUuaWQgPSAnaXRlbU5hbWUnO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pZCA9ICdpdGVtRGVzY3JpcHRpb24nO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaXRlbVByaWNlLmlkID0gJ2l0ZW1QcmljZSc7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IFwiJCBcIiArIHRoaXMucHJpY2U7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW2l0ZW1OYW1lLCBpdGVtRGVzY3JpcHRpb24sIGl0ZW1QcmljZV07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFwcGV0aXplckdyaWQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYXBwZXRpemVyR3JpZCk7XG5cblxuICAgIH1cblxuICAgIGNvbnN0IG5hY2hvcyA9IG5ldyBBcHBldGl6ZXJJdGVtKCdOYWNob3MnLCAnQSBib3dsIG9mIHRvcnRpbGxhIGNoaXBzIHdpdGggYSBnZW5lcm91cyBwb3J0aW9uIG9mIHF1ZXNvIGNoZWVzZSwgamFsYXBlbm9zIGFuZCByZWQgc2Fsc2EuJywgMTApO1xuICAgIGNvbnN0IG9uaW9uID0gbmV3IEFwcGV0aXplckl0ZW0oJ09uaW9uIFJpbmdzJywgXCJHb29kIG9sJyBvbmlvbnMgcmluZ3MgZGVlcCBmcmllZCBpbiBhIGJlZXIgZmxhdm91cmVkIGJhdHRlci5cIiwgOClcbiAgICBjb25zdCBtb3p6YSA9IG5ldyBBcHBldGl6ZXJJdGVtKCdNb3p6YXJlbGxhIFN0aWNrcycsICdEZWVwIGZyaWVkIG1venphcmVsbGEgc3RpY2tzIHdpdGggaXRhbGlhbiBzZWFzb25uZWQgY3J1bWJzLCBzZXJ2ZWQgd2l0aCBhIHNwaWN5IG1hcmluYXJhIHNhdWNlLicsIDE0KVxuXG4gICAgLy8gTWFpbiBjb3Vyc2Ugc2VjdGlvblxuICAgIGNvbnN0IG1haW5Db3Vyc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ291cnNlLmlkID0gJ21lbnVTZWN0aW9uRGl2J1xuICAgIG1haW5Db3Vyc2UudGV4dENvbnRlbnQgPSAnTWFpbiBDb3Vyc2UnO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZSlcblxuICAgIGZ1bmN0aW9uIE1haW5Db3Vyc2VJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuXG4gICAgICAgIGNvbnN0IG1lbnVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUdyaWQuY2xhc3NOYW1lID0gJ21lbnVHcmlkJztcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaXRlbU5hbWUuaWQgPSAnaXRlbU5hbWUnO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pZCA9ICdpdGVtRGVzY3JpcHRpb24nO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaXRlbVByaWNlLmlkID0gJ2l0ZW1QcmljZSc7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IFwiJCBcIiArIHRoaXMucHJpY2U7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW2l0ZW1OYW1lLCBpdGVtRGVzY3JpcHRpb24sIGl0ZW1QcmljZV07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnVJdGVtc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVHcmlkKTtcblxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNpY0hhbWJ1cmdlciA9IG5ldyBNYWluQ291cnNlSXRlbSgnQ2xhc3NpYyBIYW1idXJnZXInLCAnRW5qb3kgYSB0cmFkaXRpb25uYWwgaGFtYnVyZ2VyIHdpdGggZGlmZmVyZW50IHRvcHBpbmdzLCBpbmNsdWRpbmcgbGV0dHVjZSwgc2xpY2VkIHRvbWF0bywga2V0Y2h1cCwgbWF5by4gQ29tZXMgd2l0aCBmcmVuY2ggZnJpZXMgb3Igc2FsYWQnLCAxNSlcbiAgICBjb25zdCBzdGVha0ZyaXRlcyA9IG5ldyBNYWluQ291cnNlSXRlbSgnU3RlYWsgRnJpdGVzJywgJ0Rpc2ggY29uc2lzdGluZyBvZiBzdGVhayBwYWlyZWQgd2l0aCBGcmVuY2ggZnJpZXMuIEl0IGlzIGNvbW1vbmx5IHNlcnZlZCBpbiBFdXJvcGVhbiBicmFzc2VyaWVzLCBhbmQgaXMgY29uc2lkZXJlZCBieSBzb21lIHRvIGJlIHRoZSBuYXRpb25hbCBkaXNoIG9mIEJlbGdpdW0sIHdoaWNoIGNsYWltcyB0byBiZSB0aGUgcGxhY2Ugb2YgaXRzIGludmVudGlvbi4nLCAzMClcbiAgICBjb25zdCBnYXJsaWNCdXR0ZXJTdGVhayA9IG5ldyBNYWluQ291cnNlSXRlbSgnR2FybGljLUJ1dHRlciBTdGVhaycsICdNYWRlIGluIGEgc2tpbGxldCwgdGhpcyBnYXJsaWMgYnV0dGVyIHN0ZWFrIGlzIG9uZSBvdXIgb2xkIHRpbWUgY2xhc3NpY3MhIENvbWVzIHdpdGggYSBnZW5lcm91cyBwb3J0aW9uIG9mIG1hc2hlZCBwb3RhdG9lcycsIDI1KTtcbiAgICBjb25zdCBjYWVzYXJTYWxhZCA9IG5ldyBNYWluQ291cnNlSXRlbSgnQ2Flc2FyIFNhbGFkJywgJ0ZvciBhIGxpZ2h0ZXIgY291cnNlLCB3ZSBzdWdnZXN0IHlvdSB0cnkgb3VyIGhvbWVtYWRlIENhZXNhciBTYWxhZCwgbWFkZSB3aXRoIGZyZXNoIHJvbWFuIGxldHR1Y2UsIGJhY29uLCBicmVhZCBjcnVtYnMuJywgMTgpXG4gICAgY29uc3QgcmliZXllID0gbmV3IE1haW5Db3Vyc2VJdGVtKCdHcmlsbGVkIE1hcmluYXRlZCBSaWJleWUnLCBcIk91ciByZWd1bGFycycgZmF2b3JpdGUgbWVhbCEgV2UgbGV0IHNpdCwgZnJvbSBsb2NhbCBiZWVmIHByb2R1Y2VycywgcmliZXllcywgaW4gdGFuZ3ksIGJhcmJlY3VlLWluc3BpcmVkIG1hcmluYWRlIG92ZXJuaWdodC4gV2UgZ3JpbGwgdXAgdGhlIHJpYmV5ZSB0byB5b3VyIGNvbnZlbmllbmNlLiBDb21lcyB3aXRoIGZyZW5jaCBmcmllcyBvciBhIHNhbGFkLlwiLCAzNSlcblxuXG4gICAgLy8gRHJpbmsgc2VjdGlvbnNcbiAgICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmlua3MuaWQgPSAnbWVudVNlY3Rpb25EaXYnXG4gICAgZHJpbmtzLnRleHRDb250ZW50ID0gJ0RyaW5rcyc7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChkcmlua3MpXG5cbiAgICBmdW5jdGlvbiBEcmlua0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG5cbiAgICAgICAgY29uc3QgbWVudUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51R3JpZC5jbGFzc05hbWUgPSAnbWVudUdyaWQnO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpdGVtTmFtZS5pZCA9ICdpdGVtTmFtZSc7XG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlkID0gJ2l0ZW1EZXNjcmlwdGlvbic7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpdGVtUHJpY2UuaWQgPSAnaXRlbVByaWNlJztcbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gXCIkIFwiICsgdGhpcy5wcmljZTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbXMgPSBbaXRlbU5hbWUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVByaWNlXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUdyaWQpO1xuXG4gICAgfVxuXG4gICAgY29uc3Qgc29mdERyaW5rcyA9IG5ldyBEcmlua0l0ZW0oJ1NvZnQgRHJpbmtzJywgXCJWYXJpb3VzIHNlbGVjdGlvbiBvZiBzb2Z0IGRyaW5rcyA6IENvY2EtQ29sYSwgUGVwc2ksIFNwcml0ZSwgRG9jdG9yIFBlcHBlciwgZXRjLlwiLCAxLjI1KVxuICAgIGNvbnN0IGJ1ZHdlaXNlciA9IG5ldyBEcmlua0l0ZW0oJ0J1ZHdlaXNlcicsIFwiRm9yIHRoZSB0YXN0ZWxlc3MgcGVyc29uLlwiLCA1KTtcbiAgICBjb25zdCBidXNjaCA9IG5ldyBEcmlua0l0ZW0oJ0J1c2NoJywgJ1N0YXJ0IHlvdXIgbW9ybmluZyB3aXRoIGEgZnJlc2ggQnVzY2ggTGF0dGUuJywgNSk7XG4gICAgY29uc3Qgc2FtdWVsQWRhbXMgPSBuZXcgRHJpbmtJdGVtKCdTYW11ZWwgQWRhbXMnLCBcIkZvciB0aGUgQW1lcmljYW4gUGF0cmlvdCFcIiwgNilcblxuXG4gICAgcmV0dXJuIG1lbnVEaXY7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9