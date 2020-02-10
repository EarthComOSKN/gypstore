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

var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/product/ProductList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2rem 4rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Meta = antd__WEBPACK_IMPORTED_MODULE_5__["Card"].Meta;
var ProductContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
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
      lineNumber: 24
    },
    __self: this
  }, "'Loading...'");
  var productItems = data.productItems;
  console.log(data);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, category), __jsx(ProductContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, productItems.map(function (p) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      hoverable: true,
      style: {
        width: 200
      },
      cover: __jsx("img", {
        alt: "example",
        src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(Meta, {
      title: p.name,
      description: p.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }));
  })));
};

/***/ })

})
//# sourceMappingURL=[cid].js.f1051ad9cc1557f8af5d.hot-update.js.map