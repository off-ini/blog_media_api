(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/js/components/assets/images/logo-icon.png":
/*!*************************************************************!*\
  !*** ./resources/js/components/assets/images/logo-icon.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-icon.png?0eb5cba81191426268a7b60c5e3fbb49";

/***/ }),

/***/ "./resources/js/components/assets/images/logo-light-icon.png":
/*!*******************************************************************!*\
  !*** ./resources/js/components/assets/images/logo-light-icon.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-light-icon.png?9ab9bea2d491ce676066003d30115a84";

/***/ }),

/***/ "./resources/js/components/assets/images/logo-light-text.png":
/*!*******************************************************************!*\
  !*** ./resources/js/components/assets/images/logo-light-text.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-light-text.png?b17f55d18d8abf703a98e0583bb2723a";

/***/ }),

/***/ "./resources/js/components/assets/images/logo-text.png":
/*!*************************************************************!*\
  !*** ./resources/js/components/assets/images/logo-text.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-text.png?54a59529524660cb35592aa9ae2a8fe3";

/***/ }),

/***/ "./resources/js/components/assets/images/users/avatar.png":
/*!****************************************************************!*\
  !*** ./resources/js/components/assets/images/users/avatar.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar.png?dc0548bf9200caeca95e1ed9848ae772";

/***/ }),

/***/ "./resources/js/components/components/footer/footer.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/components/components/footer/footer.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer text-center"
  }, "All Rights Reserved by ", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Media"), ".");
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./resources/js/components/components/header/header.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/components/components/header/header.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/type */ "./resources/js/components/store/actions/type.js");
/* harmony import */ var _store_actions_AuthActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/AuthActions */ "./resources/js/components/store/actions/AuthActions.js");
/* harmony import */ var _assets_images_logo_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/logo-icon.png */ "./resources/js/components/assets/images/logo-icon.png");
/* harmony import */ var _assets_images_logo_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_icon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_logo_light_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/logo-light-icon.png */ "./resources/js/components/assets/images/logo-light-icon.png");
/* harmony import */ var _assets_images_logo_light_icon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_light_icon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_logo_text_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/logo-text.png */ "./resources/js/components/assets/images/logo-text.png");
/* harmony import */ var _assets_images_logo_text_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_text_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_logo_light_text_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/logo-light-text.png */ "./resources/js/components/assets/images/logo-light-text.png");
/* harmony import */ var _assets_images_logo_light_text_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_light_text_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_users_avatar_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/users/avatar.png */ "./resources/js/components/assets/images/users/avatar.png");
/* harmony import */ var _assets_images_users_avatar_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_users_avatar_png__WEBPACK_IMPORTED_MODULE_10__);






/*--------------------------------------------------------------------------------*/

/* Import images which are need for the HEADER                                    */

/*--------------------------------------------------------------------------------*/







var Header = function Header(props) {
  var showMobilemenu = function showMobilemenu() {
    document.getElementById('main-wrapper').classList.toggle('show-sidebar');
  };
  /*--------------------------------------------------------------------------------*/

  /*To open Search Bar                                                              */

  /*--------------------------------------------------------------------------------*/


  var toggleMenu = function toggleMenu() {
    document.getElementById('search').classList.toggle('show-search');
  };

  var logout = function logout() {
    var dispach = props.dispach,
        logout = props.logout,
        history = props.history;
    logout().then(function (res) {
      dispach({
        type: _store_actions_type__WEBPACK_IMPORTED_MODULE_4__["LOGOUT"]
      });
      history.push('/login');
    })["catch"](function (err) {
      history.push('/login');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "topbar navbarbg",
    "data-navbarbg": "skin2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    className: "top-navbar",
    dark: true,
    expand: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-header",
    id: "logobg",
    "data-logobg": "skin2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-link nav-toggler d-block d-md-none text-white",
    onClick: function onClick() {
      return showMobilemenu();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ti-menu ti-close"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    className: "navbarbg",
    navbar: true,
    "data-navbarbg": "skin2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "ml-auto float-right",
    navbar: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    nav: true,
    caret: true,
    className: "pro-pic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_users_avatar_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "user",
    className: "rounded-circle",
    width: "31"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true,
    className: "user-dd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ti-user mr-1 ml-1"
  }), " My Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    className: "border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ti-settings mr-1 ml-1"
  }), " Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    onClick: logout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-power-off mr-1 ml-1"
  }), " Logout")))))));
};

var mapDispatchToProps = function mapDispatchToProps(dispach) {
  return {
    dispach: dispach,
    logout: function logout() {
      return _store_actions_AuthActions__WEBPACK_IMPORTED_MODULE_5__["logout"]();
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(Header)));

/***/ }),

/***/ "./resources/js/components/components/sidebar/sidebar.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/components/components/sidebar/sidebar.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);





var Sidebar = function Sidebar(props) {
  /*--------------------------------------------------------------------------------*/

  /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */

  /*--------------------------------------------------------------------------------*/
  var expandLogo = function expandLogo() {
    document.getElementById("logobg").classList.toggle("expand-logo");
  };
  /*--------------------------------------------------------------------------------*/

  /*Verifies if routeName is the one active (in browser input)                      */

  /*--------------------------------------------------------------------------------*/


  var activeRoute = function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: "left-sidebar",
    id: "sidebarbg",
    "data-sidebarbg": "skin1",
    onMouseEnter: expandLogo.bind(null),
    onMouseLeave: expandLogo.bind(null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scroll-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "sidebar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    id: "sidebarnav"
  }, props.routes.map(function (prop, key) {
    if (prop.icon) {
      if (prop.redirect) {
        return null;
      } else {
        return (
          /*#__PURE__*/

          /*--------------------------------------------------------------------------------*/

          /* Adding Sidebar Item                                                            */

          /*--------------------------------------------------------------------------------*/
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: activeRoute(prop.path) + (prop.pro ? ' active active-pro' : '') + ' sidebar-item',
            key: key
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            to: prop.path,
            className: "sidebar-link",
            activeClassName: "active"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: prop.icon
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "hide-menu"
          }, prop.name)))
        );
      }
    } else {
      return null;
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./resources/js/components/core/index.js":
/*!***********************************************!*\
  !*** ./resources/js/components/core/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var APIModel = function APIModel() {
  _classCallCheck(this, APIModel);
};

_defineProperty(APIModel, "BASE_URL", "http://127.0.0.1:8000");

_defineProperty(APIModel, "HOST", "".concat(APIModel.BASE_URL, "/api/v1"));

_defineProperty(APIModel, "ASSETS_URL", "".concat(APIModel.BASE_URL, "/assets"));

_defineProperty(APIModel, "IMAGES_URL", "".concat(APIModel.ASSETS_URL, "/images"));

_defineProperty(APIModel, "VIDEOS_URL", "".concat(APIModel.ASSETS_URL, "/videos"));

_defineProperty(APIModel, "THUMNAILS_VIDEO_URL", "".concat(APIModel.ASSETS_URL, "/thumnails/videos"));

/* harmony default export */ __webpack_exports__["default"] = (APIModel);

/***/ }),

/***/ "./resources/js/components/layouts/fulllayout.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/fulllayout.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_header_header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.jsx */ "./resources/js/components/components/header/header.jsx");
/* harmony import */ var _components_sidebar_sidebar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar/sidebar.jsx */ "./resources/js/components/components/sidebar/sidebar.jsx");
/* harmony import */ var _components_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer/footer.jsx */ "./resources/js/components/components/footer/footer.jsx");
/* harmony import */ var _routes_routing_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes/routing.jsx */ "./resources/js/components/routes/routing.jsx");
/* harmony import */ var _routes_privateRoute_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes/privateRoute.jsx */ "./resources/js/components/routes/privateRoute.jsx");
var _this = undefined;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Fulllayout = function Fulllayout(props) {
  /*--------------------------------------------------------------------------------*/

  /*Change the layout settings [HEADER,SIDEBAR && DARK LAYOUT] from here            */

  /*--------------------------------------------------------------------------------*/
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  props.history.listen(function (location, action) {
    if (window.innerWidth < 767 && document.getElementById('main-wrapper').className.indexOf('show-sidebar') !== -1) {
      document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }
  });
  /*--------------------------------------------------------------------------------*/

  /*Function that handles sidebar, changes when resizing App                        */

  /*--------------------------------------------------------------------------------*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var updateDimensions = function updateDimensions() {
      var element = document.getElementById('main-wrapper');
      setWidth(window.innerWidth);

      if (width < 1170) {
        element.setAttribute("data-sidebartype", "mini-sidebar");
        element.classList.add("mini-sidebar");
      } else {
        element.setAttribute("data-sidebartype", "full");
        element.classList.remove("mini-sidebar");
      }
    };

    if (document.readyState === "complete") {
      updateDimensions();
    }

    window.addEventListener("resize", updateDimensions.bind(_this));
    window.addEventListener("load", updateDimensions.bind(_this));
    return function () {
      window.removeEventListener("load", updateDimensions.bind(_this));
      window.removeEventListener("resize", updateDimensions.bind(_this));
    };
  }, [width]);
  /*--------------------------------------------------------------------------------*/

  /* Theme Setting && Layout Options wiil be Change From Here                       */

  /*--------------------------------------------------------------------------------*/

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-wrapper",
    "data-theme": "light",
    "data-layout": "vertical",
    "data-sidebartype": "full",
    "data-sidebar-position": "fixed",
    "data-header-position": "fixed",
    "data-boxed-layout": "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar_sidebar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    routes: _routes_routing_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-wrapper d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes_routing_jsx__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (prop, key) {
    if (prop.redirect) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        from: prop.path,
        to: prop.pathTo,
        key: key
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_privateRoute_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        path: prop.path,
        name: prop.name,
        component: prop.component,
        key: key
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Fulllayout);

/***/ }),

/***/ "./resources/js/components/routes/privateRoute.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/routes/privateRoute.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var PrivateRoute = /*#__PURE__*/function (_Component) {
  _inherits(PrivateRoute, _Component);

  var _super = _createSuper(PrivateRoute);

  function PrivateRoute() {
    var _this;

    _classCallCheck(this, PrivateRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "isAuthenticated", function () {
      return _this.props.user !== null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderComponentOrRedirect", function (props, C) {
      if (_this.isAuthenticated()) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, props);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/login"
      });
    });

    return _this;
  }

  _createClass(PrivateRoute, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          c = _this$props.component,
          rest = _objectWithoutProperties(_this$props, ["component"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
        render: function render(props) {
          return _this2.renderComponentOrRedirect(props, c);
        }
      }));
    }
  }]);

  return PrivateRoute;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.AuthReducer.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(PrivateRoute));

/***/ }),

/***/ "./resources/js/components/routes/routing.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/routes/routing.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/*--------------------------------------------------------------------------------*/

/*                                  starter                                    */

/*--------------------------------------------------------------------------------*/

var FirstDashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ../views/starter/starter.jsx */ "./resources/js/components/views/starter/starter.jsx"));
});
/*--------------------------------------------------------------------------------*/

/*                           Ui-components Dropdown                               */

/*--------------------------------------------------------------------------------*/

var Users = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ../views/users/index.jsx */ "./resources/js/components/views/users/index.jsx"));
});
var Categorie = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(8), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! ../views/categorie/index.jsx */ "./resources/js/components/views/categorie/index.jsx"));
});
var Album = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ../views/album/index.jsx */ "./resources/js/components/views/album/index.jsx"));
});
var Image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(17), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ../views/image/index.jsx */ "./resources/js/components/views/image/index.jsx"));
});
var ImageCreate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(9), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! ../views/image/create.jsx */ "./resources/js/components/views/image/create.jsx"));
});
var Video = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, /*! ../views/video/index.jsx */ "./resources/js/components/views/video/index.jsx"));
});
var VideoCreate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(9), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! ../views/video/create.jsx */ "./resources/js/components/views/video/create.jsx"));
});
var ThemeRoutes = [{
  path: '/dashboard',
  name: 'Dashboard',
  icon: 'mdi mdi-adjust',
  component: FirstDashboard
}, {
  path: '/videos/add',
  name: 'VideoCerate',
  component: VideoCreate
}, {
  path: '/videos',
  name: 'Videos',
  icon: 'mdi mdi-file-video',
  component: Video
}, {
  path: '/images/add/:album_id',
  name: 'ImageCerate',
  component: ImageCreate
}, {
  path: '/images/add',
  name: 'ImageCerate',
  component: ImageCreate
}, {
  path: '/images',
  name: 'Images',
  icon: 'mdi mdi-file-image',
  component: Image
}, {
  path: '/albums',
  name: 'Albums',
  icon: 'mdi mdi-image-filter',
  component: Album
}, {
  path: '/categories',
  name: 'Categories',
  icon: 'mdi mdi-ungroup',
  component: Categorie
}, {
  path: '/users',
  name: 'Users',
  icon: 'mdi mdi-account-multiple',
  component: Users
}, {
  path: '/',
  pathTo: '/dashboard',
  name: 'Dashboard',
  redirect: true
}];
/* harmony default export */ __webpack_exports__["default"] = (ThemeRoutes);

/***/ }),

/***/ "./resources/js/components/store/actions/AuthActions.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/store/actions/AuthActions.js ***!
  \**************************************************************/
/*! exports provided: login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var login = function login(params) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/auth/login", params
  /*,{
  'headers': {
  'Content-Type': 'application/json',
  'Accept':'application/json'
  }
  }*/
  );
};
var logout = function logout() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/auth/logout"
  /*,null,{
  'headers': {
  'Content-Type': 'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer '+token
  }
  }*/
  );
};

/***/ })

}]);