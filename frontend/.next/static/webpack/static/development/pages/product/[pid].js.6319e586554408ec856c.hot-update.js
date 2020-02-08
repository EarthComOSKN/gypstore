webpackHotUpdate("static/development/pages/product/[pid].js",{

/***/ "./src/features/navigation/Navbar.tsx":
/*!********************************************!*\
  !*** ./src/features/navigation/Navbar.tsx ***!
  \********************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./src/hooks/useResponsive.tsx");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_lib_input_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/Search */ "./node_modules/antd/lib/input/Search.js");
/* harmony import */ var antd_lib_input_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gql */ "./src/features/navigation/gql.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/puwong/Developer/senior/gypstore/frontend/src/features/navigation/Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  :hover {\n    color: white;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5rem;\n  width: 5rem;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > i {\n    cursor: pointer;\n    :hover {\n      color: rgb(100, 100, 100);\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 15rem;\n  margin-right: 3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > div {\n    cursor: pointer;\n    :hover {\n      color: rgb(100, 100, 100);\n    }\n  }\n  a:hover {\n    color: rgb(100, 100, 100);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 1;\n  margin: 0 4rem;\n  & .ant-input-wrapper > input {\n    border-top-left-radius: 8em;\n    border-bottom-left-radius: 8em;\n  }\n  & .ant-input-group-addon > button {\n    border-top-right-radius: 8em;\n    border-bottom-right-radius: 8em;\n    background-color: rgb(241, 146, 56);\n    border-color: rgb(241, 146, 56);\n    :hover {\n      background-color: rgba(241, 146, 56, 0.8);\n      border-color: rgba(241, 146, 56, 0.8);\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  /* justify-content: space-between; */\n  background-color: white;\n  height: 80px;\n  padding: 0px 30px;\n  color: black;\n  box-shadow: 0 4px 8px -2px gray;\n\n  img {\n    max-height: 50px;\n    align-items: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  height: 40px;\n  background-color: #ff8e0a;\n  padding: 0px 30px;\n\n  a {\n    color: black;\n    font-size: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    color: black;\n  }\n\n  a:hover {\n    color: #fff;\n  }\n  img {\n    height: 40px;\n    width: auto;\n    align-items: center;\n    padding: 10px 10px;\n    align-items: center;\n    justify-content: flex-end;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 120px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  a {\n    color: black;\n  }\n  a:hover {\n    color: #fff;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Header = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var SubHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var MainHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
var SearchContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
var NavigateList = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
var ButtonList = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());
var Username = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject7());
var Logout = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].span(_templateObject8());
var Navbar = function Navbar() {
  var _useResponsive = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__["useResponsive"])(),
      isDesktop = _useResponsive.isDesktop;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_gql__WEBPACK_IMPORTED_MODULE_8__["GET_ME"], {
    fetchPolicy: 'network-only'
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var user = data === null || data === void 0 ? void 0 : data.me;

  var logout = function logout() {
    localStorage.removeItem('userToken');
    router.push('/signin');
  };

  var SubMenu = antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].SubMenu;

  var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "\u0E41\u0E1C\u0E48\u0E19\u0E22\u0E34\u0E1B\u0E0B\u0E31\u0E21"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E39\u0E14\u0E0B\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "\u0E42\u0E04\u0E23\u0E07\u0E04\u0E23\u0E48\u0E32\u0E27\u0E1D\u0E49\u0E32\u0E40\u0E1E\u0E14\u0E32\u0E19\u0E41\u0E25\u0E30\u0E1C\u0E19\u0E31\u0E07\u0E22\u0E34\u0E1B\u0E0B\u0E31\u0E21"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "\u0E42\u0E04\u0E23\u0E07\u0E04\u0E23\u0E48\u0E32\u0E27\u0E41\u0E25\u0E30\u0E41\u0E1C\u0E48\u0E19\u0E1D\u0E49\u0E32\u0E40\u0E1E\u0E14\u0E32\u0E19\u0E17\u0E35\u0E1A\u0E32\u0E23\u0E4C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "\u0E1B\u0E39\u0E19\u0E09\u0E32\u0E1A\u0E22\u0E34\u0E1B\u0E0B\u0E31\u0E21"), __jsx(SubMenu, {
    title: "\u0E0A\u0E34\u0E49\u0E19\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E23\u0E39\u0E1B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "\u0E0A\u0E48\u0E2D\u0E07\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E27\u0E34\u0E2A\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E23\u0E39\u0E1B"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "\u0E2A\u0E40\u0E15\u0E1B\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E23\u0E39\u0E1B")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E40\u0E2A\u0E23\u0E34\u0E21"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E0A\u0E48\u0E32\u0E07"));

  return __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(SubHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, loading ? 'Loading' : user ? __jsx(Username, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35 ", user.name, " | \xA0", ' ', __jsx(Logout, {
    onClick: function onClick() {
      return logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Logout")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")), __jsx("img", {
    alt: "separate-icon",
    src: "/assets/separate-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")))), __jsx(MainHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, ' ', isDesktop ? __jsx("img", {
    className: "logo",
    alt: "gypstore-logo",
    src: "/assets/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }) : __jsx("img", {
    className: "logo",
    alt: "gypstore-logo",
    src: "/assets/logo-without-text.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), __jsx(SearchContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(antd_lib_input_Search__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      width: 300
    },
    placeholder: "search",
    onSearch: function onSearch(value) {
      return console.log(value);
    },
    enterButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx(NavigateList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    overlay: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("a", {
    className: "ant-dropdown-link",
    href: "/categories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ", __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    type: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E2A\u0E30\u0E2A\u0E21")), __jsx(ButtonList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("a", {
    href: "/quotation-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    type: "file-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  })), __jsx("a", {
    href: "/shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    type: "shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })))));
};

/***/ })

})
//# sourceMappingURL=[pid].js.6319e586554408ec856c.hot-update.js.map