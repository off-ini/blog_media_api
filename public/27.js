(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/@material-ui/icons/Add.js":
/*!************************************************!*\
  !*** ./node_modules/@material-ui/icons/Add.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Delete.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Delete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Edit.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Edit.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');

exports.default = _default;

/***/ }),

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

/***/ "./resources/js/components/views/album/create.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/views/album/create.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/type */ "./resources/js/components/store/actions/type.js");
/* harmony import */ var _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/AlbumActions */ "./resources/js/components/store/actions/AlbumActions.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/message */ "./resources/js/components/utils/message.js");
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/errors */ "./resources/js/components/utils/errors.js");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

var Create = /*#__PURE__*/function (_Component) {
  _inherits(Create, _Component);

  var _super = _createSuper(Create);

  function Create(props) {
    var _this;

    _classCallCheck(this, Create);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleNull", function () {
      _this.setState({
        title: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, e.target.name, e.target.value), _defineProperty(_this$setState, "errors", null), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_this), "setValues", function (res) {
      _this.setState({
        title: res.title
      });
    });

    _defineProperty(_assertThisInitialized(_this), "get", function () {
      var _this$props = _this.props,
          albums = _this$props.albums,
          id = _this$props.id;

      if (id != null) {
        var reviver = albums.find(function (v) {
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
      var options = {
        title: _this.state.title
      };

      if (id != null) {
        edit(id, options).then(function (res) {
          dispatch({
            type: _store_actions_type__WEBPACK_IMPORTED_MODULE_11__["EDIT_ALBUM"],
            payload: res.data
          });

          _this.handleNull();

          _utils_message__WEBPACK_IMPORTED_MODULE_13__["defaultSuccess"](_this.props);
          handleClose(null);
        })["catch"](function (e) {
          Object(_utils_errors__WEBPACK_IMPORTED_MODULE_14__["default"])(e, dispatch, history);
          _utils_message__WEBPACK_IMPORTED_MODULE_13__["defaultError"](_this.props);

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
            type: _store_actions_type__WEBPACK_IMPORTED_MODULE_11__["CREATE_ALBUM"],
            payload: res.data
          });

          _this.handleNull();

          _utils_message__WEBPACK_IMPORTED_MODULE_13__["defaultSuccess"](_this.props);
          handleClose(null);
        })["catch"](function (e) {
          Object(_utils_errors__WEBPACK_IMPORTED_MODULE_14__["default"])(e, dispatch, history);
          _utils_message__WEBPACK_IMPORTED_MODULE_13__["defaultError"](_this.props);

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
      loading: false,
      validing: false,
      errors: null
    };
    return _this;
  }

  _createClass(Create, [{
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
          id = _this$props3.id;
      var _this$state = this.state,
          validing = _this$state.validing,
          errors = _this$state.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        open: open,
        TransitionComponent: Transition,
        onClose: function onClose() {
          handleClose(null);
        },
        "aria-labelledby": "alert-dialog-slide-title",
        "aria-describedby": "alert-dialog-slide-description"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "alert-dialog-slide-title"
      }, id != null ? "Modifier Album" : "Ajouter un Album"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        error: _utils_message__WEBPACK_IMPORTED_MODULE_13__["is_msg"](errors, 'title'),
        autoFocus: true,
        margin: "dense",
        label: "Titre",
        name: "title",
        type: "text",
        fullWidth: true,
        variant: "outlined",
        helperText: _utils_message__WEBPACK_IMPORTED_MODULE_13__["fildsMsgHandler"](errors, 'title'),
        value: this.state.title,
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          handleClose(null);
        },
        color: "info",
        outline: true
      }, "Retour"), validing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "primary",
        size: 30
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: this.handleSubmit,
        color: "primary"
      }, id != null ? 'Modifier' : 'Ajouter'))));
    }
  }]);

  return Create;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    albums: state.AlbumReducer.albums,
    user: state.AuthReducer.user
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    store: function store(data) {
      return _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_12__["store"](data);
    },
    edit: function edit(id, data) {
      return _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_12__["edit"](id, data);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Create)));

/***/ }),

/***/ "./resources/js/components/views/album/index.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/views/album/index.jsx ***!
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
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../store/actions/type */ "./resources/js/components/store/actions/type.js");
/* harmony import */ var _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../store/actions/AlbumActions */ "./resources/js/components/store/actions/AlbumActions.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../utils/message */ "./resources/js/components/utils/message.js");
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../utils/errors */ "./resources/js/components/utils/errors.js");
/* harmony import */ var _assets_images_users_avatar_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../assets/images/users/avatar.png */ "./resources/js/components/assets/images/users/avatar.png");
/* harmony import */ var _assets_images_users_avatar_png__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_assets_images_users_avatar_png__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./create */ "./resources/js/components/views/album/create.jsx");
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
  name: "Albums",
  url: "/albums"
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

var Album = /*#__PURE__*/function (_Component) {
  _inherits(Album, _Component);

  var _super = _createSuper(Album);

  function Album(props) {
    var _this;

    _classCallCheck(this, Album);

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
      axios.get(_core__WEBPACK_IMPORTED_MODULE_34__["default"].HOST + "/albums/active/" + id).then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_32__["EDIT_ALBUM"],
          payload: res.data
        });
      })["catch"](function (e) {
        Object(_utils_errors__WEBPACK_IMPORTED_MODULE_36__["default"])(e, dispatch, history);
        _utils_message__WEBPACK_IMPORTED_MODULE_35__["defaultError"](_this.props);
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
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_32__["DELETE_ALBUM"],
          payload: res.data.id
        });
        _utils_message__WEBPACK_IMPORTED_MODULE_35__["defaultSuccess"](_this.props);

        _this.handleDelClose(null);
      })["catch"](function (e) {
        Object(_utils_errors__WEBPACK_IMPORTED_MODULE_36__["default"])(e, dispatch, history);
        _utils_message__WEBPACK_IMPORTED_MODULE_35__["defaultError"](_this.props);
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
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_32__["ALL_ALBUMS"],
          payload: res.data.data
        });

        _this.setState({
          activePage: res.data.meta.current_page - 1,
          itemsCountPerPage: res.data.meta.per_page,
          totalItemsCount: res.data.meta.total
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_36__["default"])(e, dispatch, history);
      });
    });

    _this.state = {
      loading: false,
      deleting: false,
      openAdd: false,
      openDel: false,
      id: null,
      activePage: 0,
      itemsCountPerPage: 0,
      totalItemsCount: 1
    };
    return _this;
  }

  _createClass(Album, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.all();
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
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_32__["ALL_ALBUMS"],
          payload: res.data.data
        });

        _this2.setState({
          activePage: res.data.meta.current_page - 1,
          itemsCountPerPage: res.data.meta.per_page,
          totalItemsCount: res.data.meta.total
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_36__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          albums = _this$props5.albums,
          classes = _this$props5.classes;
      var deleting = this.state.deleting;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: navLinks
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        outline: true,
        color: "info",
        onClick: function onClick() {
          _this3.handleAddClose(null);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-plus"
      }), " Ajouter"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        outline: true,
        color: "success",
        onClick: function onClick() {
          _this3.all();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-refresh"
      }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, albums.map(function (album, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          xs: "12",
          md: "4",
          key: i,
          style: {
            paddingBottom: 15
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_26__["default"], {
          className: classes.root
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_27__["default"], {
          onClick: function onClick() {
            _this3.handleShowClose(i);
          }
        }, album.thumnail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "".concat(_core__WEBPACK_IMPORTED_MODULE_34__["default"].IMAGES_URL, "/").concat(album.thumnail),
          alt: album.title,
          height: 350,
          width: "100%"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_15__["default"], {
          variant: "rect",
          height: 350
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_28__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_31__["default"], {
          gutterBottom: true,
          variant: "h5",
          component: "h2",
          noWrap: true
        }, album.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: "/images/add/".concat(album.id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
          "aria-label": "info about ".concat(album.title),
          className: classes.icon
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_25___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onClick: function onClick() {
            _this3.handleAddClose(album.id);
          },
          "aria-label": "info about ".concat(album.title),
          className: classes.icon
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onClick: function onClick() {
            _this3.handleDelClose(album.id);
          },
          "aria-label": "info about ".concat(album.title),
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
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_create__WEBPACK_IMPORTED_MODULE_38__["default"], {
        open: this.state.openAdd,
        handleClose: this.handleAddClose,
        id: this.state.id
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

  return Album;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.AuthReducer.user,
    albums: state.AlbumReducer.albums
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    all: function all(n) {
      return _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_33__["padding"](n, 33);
    },
    remove: function remove(id) {
      return _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_33__["remove"](id);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles, {
  withTheme: true
})(Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Album))));

/***/ })

}]);