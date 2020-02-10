webpackHotUpdate("static/development/pages/product/[pid].js",{

/***/ "./src/features/product/gql.ts":
/*!*************************************!*\
  !*** ./src/features/product/gql.ts ***!
  \*************************************/
/*! exports provided: GET_PRODUCT, GET_PRODUCT_DETAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT", function() { return GET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_DETAIL", function() { return GET_PRODUCT_DETAIL; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($id: ID) {\n    productItem(where: { id: $id }) {\n      id\n      name\n      price\n      brand\n      unitType\n      description\n      MenuDetail\n      category {\n        name\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($pName: String) {\n    productItems(where: { category: { name: $pName } }) {\n      id\n      name\n      price\n      brand\n      unitType\n      description\n      MenuDetail\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_PRODUCT = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var GET_PRODUCT_DETAIL = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());

/***/ })

})
//# sourceMappingURL=[pid].js.8b8f6cc54b503ddb675e.hot-update.js.map