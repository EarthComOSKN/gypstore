webpackHotUpdate("static/development/pages/product/[pid].js",{

/***/ "./src/component/AmountInput.tsx":
/*!***************************************!*\
  !*** ./src/component/AmountInput.tsx ***!
  \***************************************/
/*! exports provided: AmountInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountInput", function() { return AmountInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");



var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/component/AmountInput.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: white;\n  :hover {\n    background-color: rgb(238, 237, 233);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin: 2rem 0;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);\n  display: grid;\n  width: 100%;\n  grid-template-columns: 1fr 3fr 1fr;\n  height: 2rem;\n  grid-gap: 1px;\n  background-color: black;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var ChangeButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var AmountInput = function AmountInput(props) {
  var onChange = props.onChange,
      amount = props.amount,
      restProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange", "amount"]);

  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(ChangeButton, {
    onClick: function onClick() {
      return onChange(amount - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "-"), __jsx(ChangeButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, amount), __jsx(ChangeButton, {
    onClick: function onClick() {
      return onChange(amount + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "+"));
};

/***/ }),

/***/ "./src/features/product/ProductAmountInput.tsx":
false,

/***/ "./src/features/product/ProductInformation.tsx":
/*!*****************************************************!*\
  !*** ./src/features/product/ProductInformation.tsx ***!
  \*****************************************************/
/*! exports provided: ProductInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInformation", function() { return ProductInformation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _component_AmountInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/AmountInput */ "./src/component/AmountInput.tsx");

var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/product/ProductInformation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #ff8e0a;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 16px;\n  & > h4 {\n    margin-bottom: 2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var AddCartButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject2());
var ProductInformation = function ProductInformation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      amount = _useState[0],
      setAmount = _useState[1];

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\u0E41\u0E1C\u0E48\u0E19\u0E22\u0E34\u0E1A\u0E0B\u0E31\u0E21\u0E1A\u0E2D\u0E23\u0E4C\u0E14 \u0E40\u0E2D\u0E2A\u0E0B\u0E35\u0E08\u0E35 SCG \u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19 9 \u0E21\u0E21. \u0E02\u0E2D\u0E1A\u0E25\u0E32\u0E14 \u0E0A\u0E19\u0E34\u0E14\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E40\u0E1A\u0E32\u0E01\u0E27\u0E48\u0E32\u0E41\u0E1C\u0E48\u0E19\u0E22\u0E34\u0E1B\u0E0B\u0E31\u0E21\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E15\u0E01\u0E41\u0E15\u0E48\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E19\u0E35\u0E22\u0E1A"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2D\u0E38\u0E15\u0E2A\u0E2B\u0E01\u0E23\u0E23\u0E21 (\u0E21\u0E2D\u0E01.)")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07\u0E44\u0E14\u0E49\u0E20\u0E32\u0E22\u0E43\u0E19 1-3 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 (\u0E41\u0E1C\u0E48\u0E19)"), __jsx(_component_AmountInput__WEBPACK_IMPORTED_MODULE_4__["AmountInput"], {
    amount: amount,
    onChange: setAmount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(AddCartButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19"));
};

/***/ })

})
//# sourceMappingURL=[pid].js.d59a05d9fdd63c5f09c8.hot-update.js.map