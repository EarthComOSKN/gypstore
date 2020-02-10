webpackHotUpdate("static/development/pages/category/[cid].js",{

/***/ "./src/features/category/CategoryTag.tsx":
/*!***********************************************!*\
  !*** ./src/features/category/CategoryTag.tsx ***!
  \***********************************************/
/*! exports provided: CategoryTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTag", function() { return CategoryTag; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/category/CategoryTag.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n  width: 100%;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 60px;\n  width: auto;\n  margin-right: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  & .ant-card-body {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);\n  :hover {\n    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledCard = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"])(_templateObject());
var CategoryLogo = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject2());
var CategoryName = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject3());
var CategoryTag = function CategoryTag(props) {
  var title = props.title;
  return __jsx("a", {
    href: "/category/".concat(title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(CategoryLogo, {
    src: "/assets/logo-without-text.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(CategoryName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, title)));
};

/***/ })

})
//# sourceMappingURL=[cid].js.4bcb1fb41c4ffa72de40.hot-update.js.map