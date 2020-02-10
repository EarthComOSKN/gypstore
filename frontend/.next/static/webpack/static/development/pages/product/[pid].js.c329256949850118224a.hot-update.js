webpackHotUpdate("static/development/pages/product/[pid].js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./src/features/product/ProductInformation.tsx":
/*!*****************************************************!*\
  !*** ./src/features/product/ProductInformation.tsx ***!
  \*****************************************************/
/*! exports provided: ProductInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInformation", function() { return ProductInformation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _component_AmountInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/AmountInput */ "./src/component/AmountInput.tsx");
/* harmony import */ var _navigation_gql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation/gql */ "./src/features/navigation/gql.ts");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gql */ "./src/features/product/gql.ts");


var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/product/ProductInformation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 15rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background-color: #ff8e0a;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  font-size: 16px;\n  & > h4 {\n    margin-bottom: 2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var AddCartButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"])(_templateObject2());
var StyledAmountInput = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(_component_AmountInput__WEBPACK_IMPORTED_MODULE_5__["AmountInput"])(_templateObject3());
var ProductInformation = function ProductInformation(props) {
  var _me$shoppingCart;

  var product = props.product;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      amount = _useState[0],
      setAmount = _useState[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_navigation_gql__WEBPACK_IMPORTED_MODULE_6__["GET_ME"]),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var me = data === null || data === void 0 ? void 0 : data.me;
  var shid = me === null || me === void 0 ? void 0 : (_me$shoppingCart = me.shoppingCart) === null || _me$shoppingCart === void 0 ? void 0 : _me$shoppingCart.id;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_8__["ADD_PRODUCT_TO_CART"]),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      addProductToCard = _useMutation2[0];

  var name = product.name,
      description = product.description,
      brand = product.brand,
      productAmount = product.amount,
      unitType = product.unitType;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, name), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, description), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, brand), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, productAmount, " ", unitType)), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07\u0E44\u0E14\u0E49\u0E20\u0E32\u0E22\u0E43\u0E19 1-3 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 (", unitType, ")"), __jsx(StyledAmountInput, {
    amount: amount,
    onChange: setAmount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(AddCartButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19"));
};

/***/ })

})
//# sourceMappingURL=[pid].js.c329256949850118224a.hot-update.js.map