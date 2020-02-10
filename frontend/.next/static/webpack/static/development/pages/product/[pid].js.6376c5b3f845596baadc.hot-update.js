webpackHotUpdate("static/development/pages/product/[pid].js",{

/***/ "./src/features/product/ProductInformation.tsx":
/*!*****************************************************!*\
  !*** ./src/features/product/ProductInformation.tsx ***!
  \*****************************************************/
/*! exports provided: ProductInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInformation", function() { return ProductInformation; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _component_AmountInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/AmountInput */ "./src/component/AmountInput.tsx");
/* harmony import */ var _navigation_gql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/gql */ "./src/features/navigation/gql.ts");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gql */ "./src/features/product/gql.ts");



var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/product/ProductInformation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 15rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  background-color: #ff8e0a;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  font-size: 16px;\n  & > h4 {\n    margin-bottom: 2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var AddCartButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject2());
var StyledAmountInput = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_component_AmountInput__WEBPACK_IMPORTED_MODULE_6__["AmountInput"])(_templateObject3());
var ProductInformation = function ProductInformation(props) {
  var _me$shoppingCart;

  var product = props.product;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      amount = _useState2[0],
      setAmount = _useState2[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_navigation_gql__WEBPACK_IMPORTED_MODULE_7__["GET_ME"]),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var me = data === null || data === void 0 ? void 0 : data.me;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_9__["ADD_PRODUCT_TO_CART"]),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      addProductToCard = _useMutation2[0];

  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Loading ...");
  var name = product.name,
      description = product.description,
      brand = product.brand,
      productAmount = product.amount,
      unitType = product.unitType;
  var shid = me === null || me === void 0 ? void 0 : (_me$shoppingCart = me.shoppingCart) === null || _me$shoppingCart === void 0 ? void 0 : _me$shoppingCart.id;

  var addToCart = function addToCart() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addToCart$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(addProductToCard({
              variables: {
                pid: product.id,
                amount: amount,
                shid: shid,
                key: "".concat(product.id).concat(shid)
              }
            }));

          case 4:
            antd__WEBPACK_IMPORTED_MODULE_4__["message"].success("\u0E40\u0E1E\u0E34\u0E48\u0E21 ".concat(product.name, " \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"));
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            antd__WEBPACK_IMPORTED_MODULE_4__["message"].error("".concat(_context.t0));

          case 10:
            _context.prev = 10;
            setLoading(false);
            return _context.finish(10);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 7, 10, 13]]);
  };

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, name), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, description), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, brand), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, productAmount, " ", unitType)), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07\u0E44\u0E14\u0E49\u0E20\u0E32\u0E22\u0E43\u0E19 1-3 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 (", unitType, ")"), __jsx(StyledAmountInput, {
    amount: amount,
    onChange: setAmount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(AddCartButton, {
    disabled: isLoading,
    onClick: addToCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    type: "shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19"));
};

/***/ })

})
//# sourceMappingURL=[pid].js.6376c5b3f845596baadc.hot-update.js.map