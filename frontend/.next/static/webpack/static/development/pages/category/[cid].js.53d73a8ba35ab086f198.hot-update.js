webpackHotUpdate("static/development/pages/category/[cid].js",{

/***/ "./src/features/product/ProductList.tsx":
/*!**********************************************!*\
  !*** ./src/features/product/ProductList.tsx ***!
  \**********************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gql */ "./src/features/product/gql.ts");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/product/ProductList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2rem 4rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Meta = antd__WEBPACK_IMPORTED_MODULE_5__["Card"].Meta;
var ProductContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var CoverImg = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject2());
var ProductList = function ProductList(props) {
  var _props$category = props.category,
      category = _props$category === void 0 ? '' : _props$category;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_gql__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT"], {
    variables: {
      pName: category
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "'Loading...'");
  var productItems = data.productItems;
  console.log(data);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, category), __jsx(ProductContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(productItems) && __jsx("h1", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E19\u0E35\u0E49\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49"), productItems.map(function (p) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      hoverable: true,
      style: {
        width: 250,
        margin: '0.5rem'
      },
      cover: __jsx(CoverImg, {
        alt: "example",
        src: "/assets/logo-without-text.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(Meta, {
      title: p.name,
      description: p.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }));
  })));
};

/***/ })

})
//# sourceMappingURL=[cid].js.53d73a8ba35ab086f198.hot-update.js.map