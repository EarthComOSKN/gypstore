webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/features/product/ProductSection.tsx":
/*!*************************************************!*\
  !*** ./src/features/product/ProductSection.tsx ***!
  \*************************************************/
/*! exports provided: ProductSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSection", function() { return ProductSection; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");

var _jsxFileName = "/Users/puwong/Developer/senior/gypstore/frontend/src/features/product/ProductSection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2rem;\n  background-color: white;\n  background-image: url(\"/assets/logo-without-text.png\");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  background-color: black;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1px;\n  grid-template-areas:\n    \"bg bg . .\"\n    \"bg bg . .\";\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 35rem;\n  width: 100%;\n  padding: 3rem 10rem;\n  margin-bottom: 4rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ProductContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var ProductCardWide = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.bigcard && "grid-area: bg;";
});
var ProductSection = function ProductSection(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "ฝ้าเพดานหินอ่อน" : _props$title;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, title), __jsx(ProductContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(ProductCardWide, {
    bigcard: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(ProductCardWide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(ProductCardWide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(ProductCardWide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(ProductCardWide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.0814a9e5d5bd346afcfe.hot-update.js.map