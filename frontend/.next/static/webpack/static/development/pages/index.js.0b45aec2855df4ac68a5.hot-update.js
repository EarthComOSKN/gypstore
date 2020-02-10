webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/features/product/ProductCardTall.tsx":
/*!**************************************************!*\
  !*** ./src/features/product/ProductCardTall.tsx ***!
  \**************************************************/
/*! exports provided: ProductCardTall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardTall", function() { return ProductCardTall; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var _jsxFileName = "/Users/nutchanonploypray/work/gypstore/frontend/src/features/product/ProductCardTall.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);\n  :hover {\n    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  top: 21px;\n  position: absolute;\n  background-color: rgb(241, 146, 56);\n  transform: rotate(-45deg);\n  width: 8rem;\n  display: flex;\n  justify-content: center;\n  left: -30px;\n  color: rgb(255, 255, 255);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  overflow: hidden;\n  position: relative;\n  & .ant-card-body {\n    ", "\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: center;\n  height: 4rem;\n  align-items: center;\n  > input {\n    border-top-left-radius: 8em;\n    border-bottom-left-radius: 8em;\n  }\n  > button {\n    border-radius: 1em;\n    width: 100%;\n    background-color: rgb(241, 146, 56);\n    border-color: rgb(241, 146, 56);\n    :hover {\n      background-color: rgba(241, 146, 56, 0.8);\n      border-color: rgba(241, 146, 56, 0.8);\n      color: white;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 2rem;\n  width: 100%;\n  > img {\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Meta = antd__WEBPACK_IMPORTED_MODULE_5__["Card"].Meta;
var ProductImageContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var CardDescription = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var BuyButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"])(_templateObject3());
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4(), function (props) {
  return props.onlyImage && 'display:none;';
});
var Tape = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
var StyledCard = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_5__["Card"])(_templateObject6());
var ProductCardTall = function ProductCardTall(props) {
  var isHotProduct = props.isHotProduct,
      _props$buyable = props.buyable,
      buyable = _props$buyable === void 0 ? true : _props$buyable,
      _props$onlyImage = props.onlyImage,
      onlyImage = _props$onlyImage === void 0 ? false : _props$onlyImage,
      restProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["isHotProduct", "buyable", "onlyImage"]);

  return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onlyImage: onlyImage
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("a", {
    href: "/product/test",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(StyledCard, {
    hoverable: true,
    cover: __jsx(ProductImageContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("img", {
      alt: "example",
      src: "/assets/logo-without-text.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, buyable && __jsx(Meta, {
    description: __jsx(CardDescription, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(BuyButton, {
      size: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), isHotProduct && __jsx(Tape, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E02\u0E32\u0E22\u0E14\u0E35"));
};

/***/ })

})
//# sourceMappingURL=index.js.0b45aec2855df4ac68a5.hot-update.js.map