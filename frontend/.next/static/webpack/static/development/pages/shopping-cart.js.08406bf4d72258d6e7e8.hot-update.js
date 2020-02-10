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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _product_ProductCardTall__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../product/ProductCardTall */ "./src/features/product/ProductCardTall.tsx");
/* harmony import */ var _component_AmountInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../component/AmountInput */ "./src/component/AmountInput.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gql */ "./src/features/shopping-cart/gql.ts");
/* harmony import */ var _navigation_gql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../navigation/gql */ "./src/features/navigation/gql.ts");











var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/shopping-cart/ShoppingCart.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  cursor: pointer;\n  & svg {\n    fill: red;\n  }\n  margin-left: 1rem;\n  font-size: 1.25rem;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  background-color: #ff8e0a;\n  font-size: 1rem;\n  padding: 0rem 2rem;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: 1fr 3fr;\n  padding: 1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  background-color: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  display: grid;\n  grid-template-columns: 3fr 1fr 1fr 1fr;\n  grid-gap: 1.5rem;\n  background-color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  display: grid;\n  grid-template-rows: 1fr;\n  background-color: rgb(236, 236, 236);\n  grid-gap: 1px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  background-color: white;\n  width: 90%;\n  margin: 2rem auto;\n  padding: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var confirm = antd__WEBPACK_IMPORTED_MODULE_15__["Modal"].confirm;
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject());
var CartTable = _emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject2());
var CartRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject3());
var CartSumRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject4());
var Product = _emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject5());
var Price = _emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject6());
var Amount = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"])(Price)(_templateObject7());
var ProductName = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"])(Price)(_templateObject8());
var StyledButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"])(antd__WEBPACK_IMPORTED_MODULE_15__["Button"])(_templateObject9());
var DeleteIcon = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_12__["default"])(antd__WEBPACK_IMPORTED_MODULE_15__["Icon"])(_templateObject10());
var ShoppingCart = function ShoppingCart() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_16__["useQuery"])(_navigation_gql__WEBPACK_IMPORTED_MODULE_18__["GET_ME"]),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_16__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_17__["DELETE_ITEM"], {
    update: function update(cache, mutationResult) {
      var _cache$readQuery = cache.readQuery({
        query: _navigation_gql__WEBPACK_IMPORTED_MODULE_18__["GET_ME"]
      }),
          me = _cache$readQuery.me;

      var user = me;

      var oldShoppingItems = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(user.shoppingCart.productItems);

      console.log('old', oldShoppingItems);
      var newShoppingItems = oldShoppingItems.filter(function (i) {
        return i.id !== mutationResult.data.deleteShoppingCartItem.id;
      });
      console.log('new', newShoppingItems);

      var newUser = _objectSpread({}, user);

      newUser.shoppingCart.productItems = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(newShoppingItems);
      console.log(newUser, mutationResult); // cache.writeData(newUser)
    }
  }),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_useMutation, 1),
      deleteProductItem = _useMutation2[0];

  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Lodaing...");
  var me = data.me;
  var shoppingCart = me.shoppingCart;
  var shoppingCartItems = shoppingCart.productItems;

  var showDeleteConfirm = function showDeleteConfirm(key) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function showDeleteConfirm$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            confirm({
              title: "Are you sure delete this ".concat(key, "?"),
              content: 'Some descriptions',
              okText: 'Yes',
              okType: 'danger',
              cancelText: 'No',
              onOk: function onOk() {
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function onOk$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(deleteItem(key));

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              },
              onCancel: function onCancel() {
                console.log('Cancel');
              }
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  var deleteItem = function deleteItem(key) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function deleteItem$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(deleteProductItem({
              variables: {
                key: key
              }
            }));

          case 3:
            antd__WEBPACK_IMPORTED_MODULE_15__["message"].success('รบรายการ สำเร็จ');
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            antd__WEBPACK_IMPORTED_MODULE_15__["message"].error('error has occur');

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 6]]);
  };

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (", shoppingCartItems.length, ")"), __jsx(CartTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(CartRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\u0E23\u0E32\u0E04\u0E32"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21")), shoppingCartItems.map(function (item) {
    var product = item.product,
        amount = item.amount;
    return __jsx(CartRow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(Product, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx(_product_ProductCardTall__WEBPACK_IMPORTED_MODULE_13__["ProductCardTall"], {
      buyable: false,
      onlyImage: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), __jsx(ProductName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, product.name, __jsx(DeleteIcon, {
      onClick: function onClick() {
        return showDeleteConfirm("".concat(product.id).concat(shoppingCart.id));
      },
      type: "delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }))), __jsx(Price, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, product.salePrice, " \u0E1A\u0E32\u0E17 / ", product.unitType), __jsx(Amount, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx(_component_AmountInput__WEBPACK_IMPORTED_MODULE_14__["AmountInput"], {
      onChange: function onChange(e) {
        return null;
      },
      amount: amount,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    })), __jsx(Price, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, (+product.salePrice * amount).toLocaleString(), " \u0E1A\u0E32\u0E17"));
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(CartSumRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21 (", shoppingCartItems.length, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23)"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, shoppingCartItems.reduce(function (prv, cur) {
    return prv + cur.amount * +cur.product.salePrice;
  }, 0).toLocaleString(), ' ', "\u0E1A\u0E32\u0E17")), __jsx(CartSumRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E43\u0E1A\u0E40\u0E2A\u0E19\u0E2D\u0E23\u0E32\u0E04\u0E32"), __jsx(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "\u0E16\u0E31\u0E14\u0E44\u0E1B")))));
};

/***/ })

})
//# sourceMappingURL=shopping-cart.js.08406bf4d72258d6e7e8.hot-update.js.map