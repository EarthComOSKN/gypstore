webpackHotUpdate("static/development/pages/category/[cid].js",{

/***/ "./src/features/product/gql.ts":
/*!*************************************!*\
  !*** ./src/features/product/gql.ts ***!
  \*************************************/
/*! exports provided: GET_PRODUCT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT", function() { return GET_PRODUCT; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($pName: String) {\n    productItems(where: { category: { name: $pName } }) {\n      id\n      name\n      price\n      brand\n      unitType\n      description\n      MenuDetail\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_PRODUCT = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());

/***/ })

})
//# sourceMappingURL=[cid].js.d9b349ad769d2dcda29f.hot-update.js.map