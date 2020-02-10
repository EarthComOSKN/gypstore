webpackHotUpdate("static/development/pages/shopping-cart.js",{

/***/ "./src/features/navigation/gql.ts":
/*!****************************************!*\
  !*** ./src/features/navigation/gql.ts ***!
  \****************************************/
/*! exports provided: GET_ME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ME", function() { return GET_ME; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    me {\n      id\n      name\n      email\n      phone\n      shoppingCart {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_ME = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());

/***/ })

})
//# sourceMappingURL=shopping-cart.js.7d0323340f4ed799a87b.hot-update.js.map