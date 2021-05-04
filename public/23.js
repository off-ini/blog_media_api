(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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

/***/ "./resources/js/components/views/categorie/createCat.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/views/categorie/createCat.jsx ***!
  \***************************************************************/
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
/* harmony import */ var _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/CategorieActions */ "./resources/js/components/store/actions/CategorieActions.js");
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
        label: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, e.target.name, e.target.value), _defineProperty(_this$setState, "errors", null), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_this), "setValues", function (res) {
      _this.setState({
        label: res.label
      });
    });

    _defineProperty(_assertThisInitialized(_this), "get", function () {
      var _this$props = _this.props,
          categories = _this$props.categories,
          id = _this$props.id;

      if (id != null) {
        var reviver = categories.find(function (v) {
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
        label: _this.state.label
      };

      if (id != null) {
        edit(id, options).then(function (res) {
          dispatch({
            type: _store_actions_type__WEBPACK_IMPORTED_MODULE_11__["EDIT_CATEGORIE"],
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
            type: _store_actions_type__WEBPACK_IMPORTED_MODULE_11__["CREATE_CATEGORIE"],
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
      label: '',
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
      }, id != null ? "Modifier Catégorie" : "Ajouter une Catégorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        error: _utils_message__WEBPACK_IMPORTED_MODULE_13__["is_msg"](errors, 'label'),
        autoFocus: true,
        margin: "dense",
        label: "Libelle",
        name: "label",
        type: "text",
        fullWidth: true,
        variant: "outlined",
        helperText: _utils_message__WEBPACK_IMPORTED_MODULE_13__["fildsMsgHandler"](errors, 'label'),
        value: this.state.label,
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
    categories: state.CategorieReducer.categories,
    user: state.AuthReducer.user
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    store: function store(data) {
      return _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_12__["store"](data);
    },
    edit: function edit(id, data) {
      return _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_12__["edit"](id, data);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Create)));

/***/ }),

/***/ "./resources/js/components/views/categorie/createTag.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/views/categorie/createTag.jsx ***!
  \***************************************************************/
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
/* harmony import */ var _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/TagActions */ "./resources/js/components/store/actions/TagActions.js");
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
        label: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, e.target.name, e.target.value), _defineProperty(_this$setState, "errors", null), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_this), "setValues", function (res) {
      _this.setState({
        label: res.label
      });
    });

    _defineProperty(_assertThisInitialized(_this), "get", function () {
      var _this$props = _this.props,
          tags = _this$props.tags,
          id = _this$props.id;

      if (id != null) {
        var reviver = tags.find(function (v) {
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
        label: _this.state.label
      };

      if (id != null) {
        edit(id, options).then(function (res) {
          dispatch({
            type: _store_actions_type__WEBPACK_IMPORTED_MODULE_11__["EDIT_TAG"],
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
            type: _store_actions_type__WEBPACK_IMPORTED_MODULE_11__["CREATE_TAG"],
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
      label: '',
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
      }, id != null ? "Modifier Tag" : "Ajouter un Tag"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        error: _utils_message__WEBPACK_IMPORTED_MODULE_13__["is_msg"](errors, 'label'),
        autoFocus: true,
        margin: "dense",
        label: "Libelle",
        name: "label",
        type: "text",
        fullWidth: true,
        variant: "outlined",
        helperText: _utils_message__WEBPACK_IMPORTED_MODULE_13__["fildsMsgHandler"](errors, 'label'),
        value: this.state.label,
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
    tags: state.TagReducer.tags,
    user: state.AuthReducer.user
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    store: function store(data) {
      return _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_12__["store"](data);
    },
    edit: function edit(id, data) {
      return _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_12__["edit"](id, data);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Create)));

/***/ }),

/***/ "./resources/js/components/views/categorie/index.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/views/categorie/index.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/breadcrumb */ "./resources/js/components/components/breadcrumb/index.jsx");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store/actions/type */ "./resources/js/components/store/actions/type.js");
/* harmony import */ var _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../store/actions/CategorieActions */ "./resources/js/components/store/actions/CategorieActions.js");
/* harmony import */ var _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../store/actions/TagActions */ "./resources/js/components/store/actions/TagActions.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utils/message */ "./resources/js/components/utils/message.js");
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../utils/errors */ "./resources/js/components/utils/errors.js");
/* harmony import */ var _createCat__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./createCat */ "./resources/js/components/views/categorie/createCat.jsx");
/* harmony import */ var _createTag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./createTag */ "./resources/js/components/views/categorie/createTag.jsx");
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
  name: "Categories",
  url: "/categories"
}];

var Categorie = /*#__PURE__*/function (_Component) {
  _inherits(Categorie, _Component);

  var _super = _createSuper(Categorie);

  function Categorie(props) {
    var _this;

    _classCallCheck(this, Categorie);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleTagAddClose", function (id) {
      _this.setState({
        idTag: id
      }, function () {
        _this.setState({
          openTagAdd: !_this.state.openTagAdd
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCatAddClose", function (id) {
      _this.setState({
        idCat: id
      }, function () {
        _this.setState({
          openCatAdd: !_this.state.openCatAdd
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTagDelClose", function (id) {
      _this.setState({
        idTag: id
      }, function () {
        _this.setState({
          openTagDel: !_this.state.openTagDel
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCatDelClose", function (id) {
      _this.setState({
        idCat: id
      }, function () {
        _this.setState({
          openCatDel: !_this.state.openCatDel
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCatDelete", function (id) {
      _this.setState({
        deletingCat: true
      });

      var _this$props = _this.props,
          removeCat = _this$props.removeCat,
          dispatch = _this$props.dispatch,
          history = _this$props.history;
      removeCat(id).then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["DELETE_CATEGORIE"],
          payload: res.data.id
        });
        _utils_message__WEBPACK_IMPORTED_MODULE_23__["defaultSuccess"](_this.props);

        _this.handleCatDelClose(null);
      })["catch"](function (e) {
        Object(_utils_errors__WEBPACK_IMPORTED_MODULE_24__["default"])(e, dispatch, history);
        _utils_message__WEBPACK_IMPORTED_MODULE_23__["defaultError"](_this.props);
      })["finally"](function () {
        _this.setState({
          deletingCat: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTagDelete", function (id) {
      _this.setState({
        deletingTag: true
      });

      var _this$props2 = _this.props,
          removeTag = _this$props2.removeTag,
          dispatch = _this$props2.dispatch,
          history = _this$props2.history;
      removeTag(id).then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["DELETE_TAG"],
          payload: res.data.id
        });
        _utils_message__WEBPACK_IMPORTED_MODULE_23__["defaultSuccess"](_this.props);

        _this.handleTagDelClose(null);
      })["catch"](function (e) {
        Object(_utils_errors__WEBPACK_IMPORTED_MODULE_24__["default"])(e, dispatch, history);
        _utils_message__WEBPACK_IMPORTED_MODULE_23__["defaultError"](_this.props);
      })["finally"](function () {
        _this.setState({
          deletingTag: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCatPageChange", function (event, pageNumber) {
      var _this$props3 = _this.props,
          allCat = _this$props3.allCat,
          dispatch = _this$props3.dispatch,
          history = _this$props3.history;
      allCat(pageNumber + 1).then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["ALL_CATEGORIES"],
          payload: res.data.data
        });

        _this.setState({
          activePage_cat: res.data.meta.current_page - 1,
          itemsCountPerPage_cat: res.data.meta.per_page,
          totalItemsCount_cat: res.data.meta.total
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_24__["default"])(e, dispatch, history);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTagPageChange", function (event, pageNumber) {
      var _this$props4 = _this.props,
          allTag = _this$props4.allTag,
          dispatch = _this$props4.dispatch,
          history = _this$props4.history;
      allTag(pageNumber + 1).then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["ALL_TAGS"],
          payload: res.data.data
        });

        _this.setState({
          activePage_cat: res.data.meta.current_page - 1,
          itemsCountPerPage_cat: res.data.meta.per_page,
          totalItemsCount_cat: res.data.meta.total
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_24__["default"])(e, dispatch, history);
      });
    });

    _this.state = {
      loadingCat: false,
      deletingCat: false,
      openCatAdd: false,
      openCatDel: false,
      loadingTag: false,
      deletingTag: false,
      openTagAdd: false,
      openTagDel: false,
      idCat: null,
      idTag: null,
      activePage_cat: 0,
      itemsCountPerPage_cat: 0,
      totalItemsCount_cat: 1,
      activePage_tag: 0,
      itemsCountPerPage_tag: 0,
      totalItemsCount_tag: 1
    };
    return _this;
  }

  _createClass(Categorie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.allCat();
      this.allTag();
    }
  }, {
    key: "allCat",
    value: function allCat() {
      var _this2 = this;

      var _this$props5 = this.props,
          allCat = _this$props5.allCat,
          dispatch = _this$props5.dispatch,
          history = _this$props5.history;
      allCat().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["ALL_CATEGORIES"],
          payload: res.data.data
        });

        _this2.setState({
          activePage_cat: res.data.meta.current_page - 1,
          itemsCountPerPage_cat: res.data.meta.per_page,
          totalItemsCount_cat: res.data.meta.total
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_24__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "allTag",
    value: function allTag() {
      var _this3 = this;

      var _this$props6 = this.props,
          allTag = _this$props6.allTag,
          dispatch = _this$props6.dispatch,
          history = _this$props6.history;
      allTag().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["ALL_TAGS"],
          payload: res.data.data
        });

        _this3.setState({
          activePage_tag: res.data.meta.current_page - 1,
          itemsCountPerPage_tag: res.data.meta.per_page,
          totalItemsCount_tag: res.data.meta.total
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_24__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props7 = this.props,
          categories = _this$props7.categories,
          tags = _this$props7.tags;
      var _this$state = this.state,
          deletingCat = _this$state.deletingCat,
          deletingTag = _this$state.deletingTag;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: navLinks
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], null, "Categories")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        outline: true,
        color: "info",
        onClick: function onClick() {
          _this4.handleCatAddClose(null);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-plus"
      }), " Ajouter"), " ", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        outline: true,
        color: "success",
        onClick: function onClick() {
          _this4.allCat();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-refresh"
      }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
        "aria-label": "simple table",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
        align: "center"
      }, "Libelle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
        align: "center"
      }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__["default"], null, categories.map(function (row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__["default"], {
          key: row.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
          align: "center",
          component: "th",
          scope: "row"
        }, row.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
          align: "center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          outline: true,
          color: "info",
          onClick: function onClick() {
            _this4.handleCatAddClose(row.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "mdi mdi-pencil"
        })), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          outline: true,
          color: "danger",
          onClick: function onClick() {
            _this4.handleCatDelClose(row.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "mdi mdi-close"
        }))));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
        rowsPerPageOptions: [10],
        component: "div",
        count: this.state.totalItemsCount_cat,
        rowsPerPage: this.state.itemsCountPerPage_cat,
        page: this.state.activePage_cat,
        onChangePage: this.handleCatPageChange,
        onChangeRowsPerPage: this.handleCatPageChange
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], null, "Tags")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        outline: true,
        color: "info",
        onClick: function onClick() {
          _this4.handleTagAddClose(null);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-tag-outline"
      }), " Ajouter"), " ", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        outline: true,
        color: "success",
        onClick: function onClick() {
          _this4.allTag();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-refresh"
      }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
        "aria-label": "simple table",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
        align: "center"
      }, "Libelle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
        align: "center"
      }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__["default"], null, tags.map(function (row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__["default"], {
          key: row.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
          align: "center",
          component: "th",
          scope: "row"
        }, row.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
          align: "center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          outline: true,
          color: "info",
          onClick: function onClick() {
            _this4.handleTagAddClose(row.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "mdi mdi-pencil"
        })), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          outline: true,
          color: "danger",
          onClick: function onClick() {
            _this4.handleTagDelClose(row.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "mdi mdi-close"
        }))));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
        rowsPerPageOptions: [10],
        component: "div",
        count: this.state.totalItemsCount_tag,
        rowsPerPage: this.state.itemsCountPerPage_tag,
        page: this.state.activePage_tag,
        onChangePage: this.handleTagPageChange,
        onChangeRowsPerPage: this.handleTagPageChange
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_createCat__WEBPACK_IMPORTED_MODULE_25__["default"], {
        open: this.state.openCatAdd,
        handleClose: this.handleCatAddClose,
        id: this.state.idCat
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_createTag__WEBPACK_IMPORTED_MODULE_26__["default"], {
        open: this.state.openTagAdd,
        handleClose: this.handleTagAddClose,
        id: this.state.idTag
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
        open: this.state.openCatDel,
        onClose: function onClose() {
          _this4.handleCatDelClose(null);
        },
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "alert-dialog-title"
      }, "Confirmer la suppression"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "alert-dialog-description"
      }, "Etes-vous certain de vouloir supprimer cet enregistrement ?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          _this4.handleCatDelClose(null);
        },
        color: "dedault"
      }, "Retour"), deletingCat ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "secondary",
        size: 30
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          _this4.handleCatDelete(_this4.state.idCat);
        },
        color: "danger",
        autoFocus: true
      }, "Supprimer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
        open: this.state.openTagDel,
        onClose: function onClose() {
          _this4.handleTagDelClose(null);
        },
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "alert-dialog-title"
      }, "Confirmer la suppression"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "alert-dialog-description"
      }, "Etes-vous certain de vouloir supprimer cet enregistrement ?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          _this4.handleTagDelClose(null);
        },
        color: "dedault"
      }, "Retour"), deletingTag ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "secondary",
        size: 30
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: function onClick() {
          _this4.handleTagDelete(_this4.state.idTag);
        },
        color: "danger",
        autoFocus: true
      }, "Supprimer"))));
    }
  }]);

  return Categorie;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: state.CategorieReducer.categories,
    tags: state.TagReducer.tags,
    user: state.AuthReducer.user
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    allCat: function allCat(n) {
      return _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_20__["padding"](n, 10);
    },
    removeCat: function removeCat(id) {
      return _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_20__["remove"](id);
    },
    allTag: function allTag(n) {
      return _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_21__["padding"](n, 10);
    },
    removeTag: function removeTag(id) {
      return _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_21__["remove"](id);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Categorie)));

/***/ })

}]);