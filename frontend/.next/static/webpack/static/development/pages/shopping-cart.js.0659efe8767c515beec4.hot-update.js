webpackHotUpdate("static/development/pages/shopping-cart.js",{

/***/ "./src/features/shopping-cart/ShoppingCart.tsx":
/*!*****************************************************!*\
  !*** ./src/features/shopping-cart/ShoppingCart.tsx ***!
  \*****************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _product_ProductCardTall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/ProductCardTall */ "./src/features/product/ProductCardTall.tsx");
/* harmony import */ var _component_AmountInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/AmountInput */ "./src/component/AmountInput.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _navigation_gql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/gql */ "./src/features/navigation/gql.ts");

var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/shopping-cart/ShoppingCart.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #ff8e0a;\n  font-size: 1rem;\n  padding: 0rem 2rem;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: 1fr 3fr;\n  padding: 1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  background-color: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: 3fr 1fr 1fr 1fr;\n  grid-gap: 1.5rem;\n  background-color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-rows: 1fr;\n  background-color: rgb(236, 236, 236);\n  grid-gap: 1px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: white;\n  width: 90%;\n  margin: 2rem auto;\n  padding: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var CartTable = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var CartRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var CartSumRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var Product = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var Price = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var Amount = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(Price)(_templateObject7());
var ProductName = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(Price)(_templateObject8());
var StyledButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"])(_templateObject9());
var ShoppingCart = function ShoppingCart() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(_navigation_gql__WEBPACK_IMPORTED_MODULE_7__["GET_ME"]),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Lodaing...");
  console.log(data, error);
  var me = data.me;
  var shoppingCart = me.shoppingCart;
  var shoppingCartItems = shoppingCart.productItems;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (", shoppingCartItems.length, ")"), __jsx(CartTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(CartRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u0E23\u0E32\u0E04\u0E32"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21")), shoppingCartItems.map(function (item) {
    var product = item.product,
        amount = item.amount;
    return __jsx(CartRow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(Product, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(_product_ProductCardTall__WEBPACK_IMPORTED_MODULE_3__["ProductCardTall"], {
      buyable: false,
      onlyImage: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx(ProductName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, product.name)), __jsx(Price, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, product.salePrice, " \u0E1A\u0E32\u0E17 / ", product.unitType), __jsx(Amount, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(_component_AmountInput__WEBPACK_IMPORTED_MODULE_4__["AmountInput"], {
      onChange: function onChange(e) {
        return null;
      },
      amount: amount,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })), __jsx(Price, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, (+product.salePrice * amount).toLocaleString(), " \u0E1A\u0E32\u0E17"));
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(CartSumRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21 (", shoppingCartItems.length, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23)"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, shoppingCartItems.reduce(function (prv, cur) {
    return prv + cur.amount * +cur.product.salePrice;
  }, 0).toLocaleString(), "&lnsp; \u0E1A\u0E32\u0E17")), __jsx(CartSumRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E43\u0E1A\u0E40\u0E2A\u0E19\u0E2D\u0E23\u0E32\u0E04\u0E32"), __jsx(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "\u0E16\u0E31\u0E14\u0E44\u0E1B")))));
};

/***/ })

})
//# sourceMappingURL=shopping-cart.js.0659efe8767c515beec4.hot-update.js.map