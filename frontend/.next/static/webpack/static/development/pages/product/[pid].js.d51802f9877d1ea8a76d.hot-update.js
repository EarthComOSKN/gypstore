webpackHotUpdate("static/development/pages/product/[pid].js",{

/***/ "./src/features/product/ProductDetailPage.tsx":
/*!****************************************************!*\
  !*** ./src/features/product/ProductDetailPage.tsx ***!
  \****************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Footer */ "./src/component/Footer.tsx");
/* harmony import */ var _navigation_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/Navbar */ "./src/features/navigation/Navbar.tsx");
/* harmony import */ var _navigation_NavBreadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/NavBreadcrumb */ "./src/features/navigation/NavBreadcrumb.tsx");
/* harmony import */ var _ProductDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductDetail */ "./src/features/product/ProductDetail.tsx");
/* harmony import */ var _ProductRelated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductRelated */ "./src/features/product/ProductRelated.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gql */ "./src/features/product/gql.ts");

var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/product/ProductDetailPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 3rem 0rem;\n  width: 100%;\n  margin: auto;\n  background-color: #ececec;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ProductDetailPage = function ProductDetailPage() {
  var _router$query;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var productId = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.pid;
  console.log(router);

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(_gql__WEBPACK_IMPORTED_MODULE_10__["GET_PRODUCT_DETAIL"], {
    variables: {
      id: productId
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  if (!router) return null;
  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Loading...");
  console.log(data);
  var product = data.productItem;
  var nav = [{
    link: '/',
    icon: 'home',
    text: 'Home'
  }, {
    link: "/category/".concat(product.category.name),
    text: product.category.name
  }, {
    link: "/product/".concat(product.id),
    text: product.name
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_navigation_Navbar__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_navigation_NavBreadcrumb__WEBPACK_IMPORTED_MODULE_5__["NavBreadcrumb"], {
    nav: nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(_ProductDetail__WEBPACK_IMPORTED_MODULE_6__["ProductDetail"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_ProductRelated__WEBPACK_IMPORTED_MODULE_7__["ProductRelated"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=[pid].js.d51802f9877d1ea8a76d.hot-update.js.map