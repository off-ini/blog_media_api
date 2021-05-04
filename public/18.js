(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/components/components/breadcrumb/index.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/components/components/breadcrumb/index.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return breadcrumbs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");




function breadcrumbs(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/",
    color: "inherit"
  }, "Home"), data.map(function (d, i) {
    if (i < data.length - 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        to: d.url,
        color: "inherit",
        key: i
      }, d.name);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: "textPrimary",
        key: i
      }, d.name);
    }
  }));
}

/***/ }),

/***/ "./resources/js/components/store/actions/AlbumActions.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/store/actions/AlbumActions.js ***!
  \***************************************************************/
/*! exports provided: index, padding, get, show, store, edit, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var index = function index() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/albums");
};
var padding = function padding(pageNumber, elementNumber) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/albums/padding/".concat(elementNumber, "?page=").concat(pageNumber));
};
var get = function get(search) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/albums" + search);
};
var show = function show(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/albums/" + id);
};
var store = function store(params) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/albums", params);
};
var edit = function edit(id, data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/albums/" + id, data);
};
var remove = function remove(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"](_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/albums/" + id);
};

/***/ }),

/***/ "./resources/js/components/store/actions/CategorieActions.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/store/actions/CategorieActions.js ***!
  \*******************************************************************/
/*! exports provided: index, padding, get, show, store, edit, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var index = function index() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/categories");
};
var padding = function padding(pageNumber, elementNumber) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/categories/padding/".concat(elementNumber, "?page=").concat(pageNumber));
};
var get = function get(search) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/categories" + search);
};
var show = function show(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/categories/" + id);
};
var store = function store(params) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/categories", params);
};
var edit = function edit(id, data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/categories/" + id, data);
};
var remove = function remove(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"](_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/categories/" + id);
};

/***/ }),

/***/ "./resources/js/components/store/actions/ImageActions.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/store/actions/ImageActions.js ***!
  \***************************************************************/
/*! exports provided: index, padding, get, show, store, edit, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var index = function index() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/images");
};
var padding = function padding(pageNumber, elementNumber) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/images/padding/".concat(elementNumber, "?page=").concat(pageNumber));
};
var get = function get(search) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/images" + search);
};
var show = function show(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/images/" + id);
};
var store = function store(params) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/images", params);
};
var edit = function edit(id, data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/images/" + id, data);
};
var remove = function remove(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"](_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/images/" + id);
};

/***/ }),

/***/ "./resources/js/components/store/actions/TagActions.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/store/actions/TagActions.js ***!
  \*************************************************************/
/*! exports provided: index, padding, get, show, store, edit, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var index = function index() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/tags");
};
var padding = function padding(pageNumber, elementNumber) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/tags/padding/".concat(elementNumber, "?page=").concat(pageNumber));
};
var get = function get(search) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/tags" + search);
};
var show = function show(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/tags/" + id);
};
var store = function store(params) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/tags", params);
};
var edit = function edit(id, data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/tags/" + id, data);
};
var remove = function remove(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"](_core__WEBPACK_IMPORTED_MODULE_0__["default"].HOST + "/tags/" + id);
};

/***/ }),

/***/ "./resources/js/components/utils/errors.js":
/*!*************************************************!*\
  !*** ./resources/js/components/utils/errors.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/type */ "./resources/js/components/store/actions/type.js");



var errorHandler = function errorHandler(error, dispatch, history) {
  var response = error.response;

  if (response) {
    if (response.status === 401) {
      dispatch({
        type: _store_actions_type__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]
      });

      if (history) {
        history.push('/login');
      }

      return;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (errorHandler);

/***/ }),

/***/ "./resources/js/components/utils/message.js":
/*!**************************************************!*\
  !*** ./resources/js/components/utils/message.js ***!
  \**************************************************/
/*! exports provided: msgHandler, success, defaultSuccess, info, error, defaultError, is_msg, fildsMsgHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgHandler", function() { return msgHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSuccess", function() { return defaultSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultError", function() { return defaultError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_msg", function() { return is_msg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fildsMsgHandler", function() { return fildsMsgHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Zoom */ "./node_modules/@material-ui/core/esm/Zoom/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var msgHandler = function msgHandler(props, message, type, options) {
  props.enqueueSnackbar(message, _objectSpread({
    variant: type,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    TransitionComponent: _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, options));
};
var success = function success(props, msg) {
  msgHandler(props, msg, 'success');
};
var defaultSuccess = function defaultSuccess(props) {
  success(props, 'Traitement réussie');
};
var info = function info(props, msg) {
  msgHandler(props, msg, 'info');
};
var error = function error(props, msg) {
  msgHandler(props, msg, 'error');
};
var defaultError = function defaultError(props) {
  error(props, 'Erreur lors du traitement');
};
var is_msg = function is_msg(error, props) {
  if (error) {
    var response = error.response;
    var data = response.data;

    if (typeof data[props] != "undefined") {
      return true;
    }

    return false;
  }

  return false;
};
var fildsMsgHandler = function fildsMsgHandler(error, props) {
  try {
    if (error) {
      var response = error.response;
      var data = response.data;

      if (typeof data[props] != "undefined") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data[props].map(function (msg, idx) {
          return msg;
        }));
      }

      return null;
    }
  } catch (e) {
    return;
  }
};

/***/ }),

/***/ "./resources/js/components/views/image/edit.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/views/image/edit.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/type */ "./resources/js/components/store/actions/type.js");
/* harmony import */ var _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/ImageActions */ "./resources/js/components/store/actions/ImageActions.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/message */ "./resources/js/components/utils/message.js");
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/errors */ "./resources/js/components/utils/errors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















var Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, e.target.name, e.target.value), _defineProperty(_this$setState, "errors", null), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeLabelOver", function (data, e) {
      var _this$setState2;

      _this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, e.name, data), _defineProperty(_this$setState2, "errors", null), _this$setState2));
    });

    _defineProperty(_assertThisInitialized(_this), "handleNull", function () {
      _this.setState({
        title: '',
        album_id: null,
        categories: [],
        tags: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setValues", function (res) {
      _this.setState({
        title: res.title,
        album_id: res.album_id,
        categories: res.categories,
        tags: res.tags
      });
    });

    _defineProperty(_assertThisInitialized(_this), "get", function () {
      var _this$props = _this.props,
          images = _this$props.images,
          id = _this$props.id;

      if (id != null) {
        var reviver = images.find(function (v) {
          return v.id === id;
        });

        if (reviver) {
          _this.setValues(reviver);
        }
      } else {
        _this.handleNull();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      _this.setState({
        validing: true
      });

      var _this$props2 = _this.props,
          store = _this$props2.store,
          edit = _this$props2.edit,
          dispatch = _this$props2.dispatch,
          history = _this$props2.history,
          handleClose = _this$props2.handleClose,
          id = _this$props2.id;
      var categories = [];
      var tags = [];

      _this.state.categories.map(function (cat) {
        categories.push(cat.id);
      });

      _this.state.tags.map(function (tag) {
        tags.push(tag.id);
      });

      var options = {
        title: _this.state.title,
        album_id: _this.state.album_id,
        categories: categories,
        tags: tags
      };

      if (id != null) {
        edit(id, options).then(function (res) {
          dispatch({
            type: _store_actions_type__WEBPACK_IMPORTED_MODULE_13__["EDIT_IMAGE"],
            payload: res.data
          });

          _this.handleNull();

          _utils_message__WEBPACK_IMPORTED_MODULE_15__["defaultSuccess"](_this.props);
          handleClose(null);
        })["catch"](function (e) {
          Object(_utils_errors__WEBPACK_IMPORTED_MODULE_16__["default"])(e, dispatch, history);
          _utils_message__WEBPACK_IMPORTED_MODULE_15__["defaultError"](_this.props);

          _this.setState({
            errors: e
          });
        })["finally"](function () {
          return _this.setState({
            validing: false
          });
        });
      } else {
        store(options).then(function (res) {
          dispatch({
            type: _store_actions_type__WEBPACK_IMPORTED_MODULE_13__["CREATE_IMAGE"],
            payload: res.data
          });

          _this.handleNull();

          _utils_message__WEBPACK_IMPORTED_MODULE_15__["defaultSuccess"](_this.props);
          handleClose(null);
        })["catch"](function (e) {
          Object(_utils_errors__WEBPACK_IMPORTED_MODULE_16__["default"])(e, dispatch, history);
          _utils_message__WEBPACK_IMPORTED_MODULE_15__["defaultError"](_this.props);

          _this.setState({
            errors: e
          });
        })["finally"](function () {
          return _this.setState({
            validing: false
          });
        });
      }
    });

    _this.state = {
      title: '',
      album_id: null,
      categories: [],
      tags: [],
      loading: false,
      validing: false,
      errors: null
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.get();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.get();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          open = _this$props3.open,
          handleClose = _this$props3.handleClose,
          id = _this$props3.id,
          categories = _this$props3.categories,
          tags = _this$props3.tags,
          albums = _this$props3.albums;
      var _this$state = this.state,
          validing = _this$state.validing,
          errors = _this$state.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
        scroll: "body",
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        open: open,
        TransitionComponent: Transition,
        onClose: function onClose() {
          handleClose(null);
        },
        "aria-labelledby": "alert-dialog-slide-title",
        "aria-describedby": "alert-dialog-slide-description"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "alert-dialog-slide-title"
      }, id != null ? "Modifier Image" : "Ajouter un Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group has-float-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
        error: _utils_message__WEBPACK_IMPORTED_MODULE_15__["is_msg"](errors, 'title'),
        autoFocus: true,
        margin: "dense",
        label: "Titre",
        name: "title",
        type: "text",
        fullWidth: true,
        variant: "outlined",
        helperText: _utils_message__WEBPACK_IMPORTED_MODULE_15__["fildsMsgHandler"](errors, 'title'),
        value: this.state.title,
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group has-float-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isMulti: true,
        className: "react-select",
        classNamePrefix: "react-select",
        name: "categories",
        value: this.state.categories,
        onChange: this.handleChangeLabelOver,
        options: categories,
        placeholder: "Categories"
      }), _utils_message__WEBPACK_IMPORTED_MODULE_15__["fildsMsgHandler"](this.state.errors, 'categories'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group has-float-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isMulti: true,
        className: "react-select",
        classNamePrefix: "react-select",
        name: "tags",
        value: this.state.tags,
        onChange: this.handleChangeLabelOver,
        options: tags,
        placeholder: "Tags"
      }), _utils_message__WEBPACK_IMPORTED_MODULE_15__["fildsMsgHandler"](this.state.errors, 'tags'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group has-float-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
        error: _utils_message__WEBPACK_IMPORTED_MODULE_15__["is_msg"](errors, 'album_id'),
        margin: "dense",
        select: true,
        label: "Album",
        name: "album_id",
        type: "text",
        fullWidth: true,
        variant: "outlined",
        helperText: _utils_message__WEBPACK_IMPORTED_MODULE_15__["fildsMsgHandler"](errors, 'album_id'),
        value: this.state.album_id,
        onChange: this.handleChange
      }, albums.map(function (option) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: option.id,
          value: option.id
        }, option.title);
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          handleClose(null);
        },
        color: "info",
        outline: true
      }, "Retour"), validing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "primary",
        size: 30
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: this.handleSubmit,
        color: "primary"
      }, id != null ? 'Modifier' : 'Ajouter'))));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    images: state.ImageReducer.images,
    user: state.AuthReducer.user,
    albums: state.AlbumReducer.albums,
    categories: state.CategorieReducer.categories,
    tags: state.TagReducer.tags
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    store: function store(data) {
      return _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_14__["store"](data);
    },
    edit: function edit(id, data) {
      return _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_14__["edit"](id, data);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Edit)));

/***/ }),

/***/ "./resources/js/components/views/image/index.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/views/image/index.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/breadcrumb */ "./resources/js/components/components/breadcrumb/index.jsx");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "./node_modules/@material-ui/core/esm/GridListTileBar/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../store/actions/type */ "./resources/js/components/store/actions/type.js");
/* harmony import */ var _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../store/actions/ImageActions */ "./resources/js/components/store/actions/ImageActions.js");
/* harmony import */ var _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../store/actions/AlbumActions */ "./resources/js/components/store/actions/AlbumActions.js");
/* harmony import */ var _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../store/actions/CategorieActions */ "./resources/js/components/store/actions/CategorieActions.js");
/* harmony import */ var _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../store/actions/TagActions */ "./resources/js/components/store/actions/TagActions.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../utils/message */ "./resources/js/components/utils/message.js");
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../utils/errors */ "./resources/js/components/utils/errors.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./edit */ "./resources/js/components/views/image/edit.jsx");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./show */ "./resources/js/components/views/image/show.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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










































var navLinks = [{
  name: "Images",
  url: "/images"
}];

var styles = function styles(theme) {
  return {
    gridList: {
      width: 'auto',
      height: 650
    },
    icon: {
      color: 'rgba(100, 100, 100, 0.54)'
    },
    list: {
      listStyle: 'none'
    },
    title: {
      color: theme.palette.primary
    },
    titleBar: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    }
  };
};

var Image = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleAddClose", function (id) {
      _this.setState({
        id: id
      }, function () {
        _this.setState({
          openAdd: !_this.state.openAdd
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowClose", function (id) {
      _this.setState({
        index: id
      }, function () {
        _this.setState({
          openShow: !_this.state.openShow
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelClose", function (id) {
      _this.setState({
        id: id
      }, function () {
        _this.setState({
          openDel: !_this.state.openDel
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActive", function (id) {
      _this.setState({
        loading: true
      });

      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          history = _this$props.history;
      axios.get(_core__WEBPACK_IMPORTED_MODULE_36__["default"].HOST + "/images/active/" + id).then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_31__["EDIT_IMAGE"],
          payload: res.data
        });
      })["catch"](function (e) {
        Object(_utils_errors__WEBPACK_IMPORTED_MODULE_38__["default"])(e, dispatch, history);
        _utils_message__WEBPACK_IMPORTED_MODULE_37__["defaultError"](_this.props);
      })["finally"](function () {
        return _this.setState({
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function (id) {
      _this.setState({
        deleting: true
      });

      var _this$props2 = _this.props,
          remove = _this$props2.remove,
          dispatch = _this$props2.dispatch,
          history = _this$props2.history;
      remove(id).then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_31__["DELETE_IMAGE"],
          payload: res.data.id
        });
        _utils_message__WEBPACK_IMPORTED_MODULE_37__["defaultSuccess"](_this.props);

        _this.handleDelClose(null);
      })["catch"](function (e) {
        Object(_utils_errors__WEBPACK_IMPORTED_MODULE_38__["default"])(e, dispatch, history);
        _utils_message__WEBPACK_IMPORTED_MODULE_37__["defaultError"](_this.props);
      })["finally"](function () {
        _this.setState({
          deleting: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageChange", function (event, pageNumber) {
      var _this$props3 = _this.props,
          all = _this$props3.all,
          dispatch = _this$props3.dispatch,
          history = _this$props3.history;
      all(pageNumber + 1).then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_31__["ALL_IMAGES"],
          payload: res.data.data
        });

        _this.setState({
          activePage: res.data.meta.current_page - 1,
          itemsCountPerPage: res.data.meta.per_page,
          totalItemsCount: res.data.meta.total
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_38__["default"])(e, dispatch, history);
      });
    });

    _this.state = {
      loading: false,
      deleting: false,
      openAdd: false,
      openShow: false,
      openDel: false,
      id: null,
      index: 0,
      activePage: 0,
      itemsCountPerPage: 0,
      totalItemsCount: 1
    };
    return _this;
  }

  _createClass(Image, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.all();
      this.all_cat();
      this.all_tag();
      this.all_album();
    }
  }, {
    key: "all",
    value: function all() {
      var _this2 = this;

      var _this$props4 = this.props,
          all = _this$props4.all,
          dispatch = _this$props4.dispatch,
          history = _this$props4.history;
      all().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_31__["ALL_IMAGES"],
          payload: res.data.data
        });

        _this2.setState({
          activePage: res.data.meta.current_page - 1,
          itemsCountPerPage: res.data.meta.per_page,
          totalItemsCount: res.data.meta.total
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_38__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "all_cat",
    value: function all_cat() {
      var _this$props5 = this.props,
          all_cat = _this$props5.all_cat,
          dispatch = _this$props5.dispatch,
          history = _this$props5.history;
      all_cat().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_31__["ALL_CATEGORIES"],
          payload: res.data.data
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_38__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "all_tag",
    value: function all_tag() {
      var _this$props6 = this.props,
          all_tag = _this$props6.all_tag,
          dispatch = _this$props6.dispatch,
          history = _this$props6.history;
      all_tag().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_31__["ALL_TAGS"],
          payload: res.data.data
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_38__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "all_album",
    value: function all_album() {
      var _this$props7 = this.props,
          all_album = _this$props7.all_album,
          dispatch = _this$props7.dispatch,
          history = _this$props7.history;
      all_album().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_31__["ALL_ALBUMS"],
          payload: res.data.data
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_38__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props8 = this.props,
          images = _this$props8.images,
          classes = _this$props8.classes;
      var _this$state = this.state,
          deleting = _this$state.deleting,
          activePage = _this$state.activePage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: navLinks
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/images/add"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        outline: true,
        color: "info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-plus"
      }), " Ajouter")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        outline: true,
        color: "success",
        onClick: function onClick() {
          _this3.all();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-refresh"
      }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, images.map(function (image, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          xs: "6",
          md: "2",
          key: i,
          style: {
            padding: 2
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_25__["default"], {
          className: classes.root
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_26__["default"], {
          onClick: function onClick() {
            _this3.handleShowClose(i);
          }
        }, image.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "".concat(_core__WEBPACK_IMPORTED_MODULE_36__["default"].IMAGES_URL, "/").concat(image.url),
          alt: image.title,
          height: 200,
          width: "100%"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_15__["default"], {
          variant: "rect",
          height: 200
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_27__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_30__["default"], {
          gutterBottom: true,
          variant: "h5",
          component: "h2",
          noWrap: true
        }, image.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onClick: function onClick() {
            _this3.handleAddClose(image.id);
          },
          "aria-label": "info about ".concat(image.title),
          className: classes.icon
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23___default.a, null)), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onClick: function onClick() {
            _this3.handleDelClose(image.id);
          },
          "aria-label": "info about ".concat(image.title),
          className: classes.icon
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24___default.a, null)))));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_21__["default"], {
        rowsPerPageOptions: [9],
        component: "div",
        count: this.state.totalItemsCount,
        rowsPerPage: this.state.itemsCountPerPage,
        page: this.state.activePage,
        onChangePage: this.handlePageChange,
        onChangeRowsPerPage: this.handlePageChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_edit__WEBPACK_IMPORTED_MODULE_39__["default"], {
        open: this.state.openAdd,
        handleClose: this.handleAddClose,
        id: this.state.id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_show__WEBPACK_IMPORTED_MODULE_40__["default"], {
        open: this.state.openShow,
        handleClose: this.handleShowClose,
        index: this.state.index,
        page: activePage + 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
        open: this.state.openDel,
        onClose: function onClose() {
          _this3.handleDelClose(null);
        },
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "alert-dialog-title"
      }, "Confirmer la suppression"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "alert-dialog-description"
      }, "Etes-vous certain de vouloir supprimer cet enregistrement ?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: function onClick() {
          _this3.handleDelClose(null);
        },
        color: "dedault"
      }, "Retour"), deleting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__["default"], {
        color: "secondary",
        size: 30
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: function onClick() {
          _this3.handleDelete(_this3.state.id);
        },
        color: "danger",
        autoFocus: true
      }, "Supprimer"))));
    }
  }]);

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.AuthReducer.user,
    images: state.ImageReducer.images
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    all_album: function all_album() {
      return _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_33__["index"]();
    },
    all_cat: function all_cat() {
      return _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_34__["index"]();
    },
    all_tag: function all_tag() {
      return _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_35__["index"]();
    },
    all: function all(n) {
      return _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_32__["padding"](n, 60);
    },
    remove: function remove(id) {
      return _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_32__["remove"](id);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles, {
  withTheme: true
})(Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Image))));

/***/ }),

/***/ "./resources/js/components/views/image/show.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/views/image/show.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-gallery */ "./node_modules/react-image-gallery/build/image-gallery.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/type */ "./resources/js/components/store/actions/type.js");
/* harmony import */ var _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/ImageActions */ "./resources/js/components/store/actions/ImageActions.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/message */ "./resources/js/components/utils/message.js");
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/errors */ "./resources/js/components/utils/errors.js");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "./node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_14__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















var Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

var Show = /*#__PURE__*/function (_Component) {
  _inherits(Show, _Component);

  var _super = _createSuper(Show);

  function Show(props) {
    var _this;

    _classCallCheck(this, Show);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onSlide", function (currentIndex) {
      console.log(currentIndex);
      var _this$state = _this.state,
          activePage = _this$state.activePage,
          images = _this$state.images;

      _this.setState({
        index: currentIndex
      });

      if (currentIndex == images.length - 5) {
        _this.handlePageChange(null, activePage + 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageChange", function (event, pageNumber) {
      var _this$props = _this.props,
          all = _this$props.all,
          dispatch = _this$props.dispatch,
          history = _this$props.history;
      all(pageNumber + 1).then(function (res) {
        var d = res.data.data;
        var images = [];
        d.map(function (image) {
          images.push({
            original: "".concat(_core__WEBPACK_IMPORTED_MODULE_11__["default"].IMAGES_URL, "/").concat(image.url),
            thumbnail: "".concat(_core__WEBPACK_IMPORTED_MODULE_11__["default"].IMAGES_URL, "/").concat(image.url)
          });
        });
        var imgs = [].concat(_toConsumableArray(_this.state.images), images);

        _this.setState({
          images: imgs,
          activePage: res.data.meta.current_page - 1,
          itemsCountPerPage: res.data.meta.per_page,
          totalItemsCount: res.data.meta.total,
          last_page: res.data.meta.last_page
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_13__["default"])(e, dispatch, history);
      });
    });

    _this.state = {
      images: [],
      index: 0,
      activePage: 0,
      itemsCountPerPage: 0,
      totalItemsCount: 1,
      last_page: 1
    };
    return _this;
  }

  _createClass(Show, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.all();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.all();
    } // componentDidMount()
    // {
    //     this.all();
    // }

  }, {
    key: "all",
    value: function all() {
      var _this2 = this;

      var _this$props2 = this.props,
          all = _this$props2.all,
          dispatch = _this$props2.dispatch,
          history = _this$props2.history,
          page = _this$props2.page,
          index = _this$props2.index;
      all(page).then(function (res) {
        var d = res.data.data;
        var images = [];
        d.map(function (image) {
          images.push({
            original: "".concat(_core__WEBPACK_IMPORTED_MODULE_11__["default"].IMAGES_URL, "/").concat(image.url),
            thumbnail: "".concat(_core__WEBPACK_IMPORTED_MODULE_11__["default"].IMAGES_URL, "/").concat(image.url)
          });
        });

        _this2.setState({
          images: images,
          activePage: res.data.meta.current_page - 1,
          itemsCountPerPage: res.data.meta.per_page,
          totalItemsCount: res.data.meta.total,
          last_page: res.data.meta.last_page,
          index: index
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_13__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          open = _this$props3.open,
          handleClose = _this$props3.handleClose;
      var _this$state2 = this.state,
          images = _this$state2.images,
          index = _this$state2.index;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
        scroll: "body",
        open: open,
        TransitionComponent: Transition,
        onClose: function onClose() {
          handleClose(0);
        },
        "aria-labelledby": "alert-dialog-slide-title",
        "aria-describedby": "alert-dialog-slide-description"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_8___default.a, {
        items: images,
        startIndex: index,
        onSlide: this.onSlide
      }), ";"));
    }
  }]);

  return Show;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.AuthReducer.user
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    all: function all(n) {
      return _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_10__["padding"](n, 60);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Show)));

/***/ })

}]);