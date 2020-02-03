webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/apollo-client.ts":
/*!******************************!*\
  !*** ./src/apollo-client.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");



var uri = true ? 'http://localhost:4000' : undefined;
var httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__["createHttpLink"])({
  uri: uri,
  fetch:  false && false
});
var authLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"](function (operation, forward) {
  // Retrieve the authorization token from local storage.
  var token = localStorage.getItem('userToken'); // Use the setContext method to set the HTTP headers.

  operation.setContext({
    headers: {
      authorization: token ? "Bearer ".concat(token) : ''
    }
  }); // Call the next link in the middleware chain.

  return forward(operation);
});
var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  link: authLink.concat(httpLink),
  // Chain it with the HttpLink
  cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]()
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ })

})
//# sourceMappingURL=_app.js.a88598e0c712cc44c6be.hot-update.js.map