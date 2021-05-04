(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

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

/***/ "./resources/js/components/components/dropzone/index.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/components/dropzone/index.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone-component */ "./node_modules/react-dropzone-component/dist/react-dropzone.js");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dropzone_dist_min_dropzone_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dropzone/dist/min/dropzone.min.css */ "./node_modules/dropzone/dist/min/dropzone.min.css");
/* harmony import */ var dropzone_dist_min_dropzone_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dropzone_dist_min_dropzone_min_css__WEBPACK_IMPORTED_MODULE_4__);






var ReactDOMServer = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");

var DropZone = function DropZone(_ref) {
  var handleFile = _ref.handleFile,
      removeFile = _ref.removeFile,
      acceptFile = _ref.acceptFile,
      message = _ref.message,
      maxFile = _ref.maxFile;
  var eventHandlers = {
    addedfile: function addedfile(file) {
      return handleFile(file);
    },
    removedfile: function removedfile(file) {
      return removeFile(file);
    }
  };
  var componentConfig = {
    iconFiletypes: acceptFile == null ? ['.jpg', '.png', '.gif'] : acceptFile.split(','),
    showFiletypeIcon: false,
    postUrl: 'no-url'
  };
  var dropzoneConfig = {
    acceptedFiles: acceptFile == null ? ".jpeg,.jpg,.png,.gif" : acceptFile,
    dictDefaultMessage: message == null ? "Glisser déposer des images" : message,
    autoProcessQueue: false,
    thumbnailHeight: 160,
    maxFilesize: 50,
    maxFiles: maxFile != null ? maxFile : 10,
    previewTemplate: ReactDOMServer.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dz-preview dz-file-preview mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-row "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "p-0 w-30 position-relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "preview-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      "data-dz-thumbnail": true,
      className: "img-thumbnail border-0",
      width: 50,
      height: 60
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "simple-icon-doc preview-icon"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#/",
      className: "remove",
      "data-dz-remove": true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-label": "deleted",
      style: {
        color: 'rgba(100, 100, 100, 0.54)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, null))))),
    headers: {
      "My-Awesome-Header": "header value"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
    config: componentConfig,
    eventHandlers: eventHandlers,
    djsConfig: dropzoneConfig
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DropZone);

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

/***/ "./resources/js/components/views/image/create.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/views/image/create.jsx ***!
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/breadcrumb */ "./resources/js/components/components/breadcrumb/index.jsx");
/* harmony import */ var _components_dropzone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/dropzone */ "./resources/js/components/components/dropzone/index.jsx");
/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store/actions/type */ "./resources/js/components/store/actions/type.js");
/* harmony import */ var _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../store/actions/ImageActions */ "./resources/js/components/store/actions/ImageActions.js");
/* harmony import */ var _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../store/actions/AlbumActions */ "./resources/js/components/store/actions/AlbumActions.js");
/* harmony import */ var _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../store/actions/CategorieActions */ "./resources/js/components/store/actions/CategorieActions.js");
/* harmony import */ var _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../store/actions/TagActions */ "./resources/js/components/store/actions/TagActions.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../utils/message */ "./resources/js/components/utils/message.js");
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../utils/errors */ "./resources/js/components/utils/errors.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../core */ "./resources/js/components/core/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_27__);
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





























var navLinks = [{
  name: "Images",
  url: "/images"
}, {
  name: "Create",
  url: "/images/add"
}];

var Create = /*#__PURE__*/function (_Component) {
  _inherits(Create, _Component);

  var _super = _createSuper(Create);

  function Create(props) {
    var _this;

    _classCallCheck(this, Create);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, e.target.name, e.target.value), _defineProperty(_this$setState, "errors", null), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeLabelOver", function (data, e) {
      var _this$setState2;

      _this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, e.name, data), _defineProperty(_this$setState2, "errors", null), _this$setState2));
    });

    _defineProperty(_assertThisInitialized(_this), "handleFile", function (file) {
      _this.createImage('images', file);
    });

    _defineProperty(_assertThisInitialized(_this), "removeFile", function (file) {
      var images = _this.state.images;
      images = images.filter(function (e) {
        return e.name !== file.name;
      });

      _this.setState({
        images: images
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createImage", function (name, file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var images = _this.state[name];

        if (!images.find(function (e) {
          return e.name === file.name;
        })) {
          images = [].concat(_toConsumableArray(images), [{
            data: e.target.result,
            name: file.name,
            size: file.size,
            width: file.width,
            height: file.height,
            progress: 0
          }]);

          _this.setState(_defineProperty({}, name, images));
        }
      };

      reader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_this), "handleNull", function () {
      _this.setState({
        title: '',
        images: [],
        categories: [],
        tags: [],
        progress: 0
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadProgress", function (progressEvent) {
      var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);

      _this.setState({
        progress: percentCompleted
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      _this.setState({
        validing: true
      });

      var _this$props = _this.props,
          params = _this$props.match.params,
          store = _this$props.store,
          dispatch = _this$props.dispatch,
          history = _this$props.history;
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
        categories: categories,
        tags: tags,
        images: _this.state.images,
        album_id: _this.state.album_id
      };
      axios__WEBPACK_IMPORTED_MODULE_27___default.a.post(_core__WEBPACK_IMPORTED_MODULE_26__["default"].HOST + "/images", options, {
        onUploadProgress: _this.onUploadProgress
      }).then(function (res) {
        _this.handleNull();

        _utils_message__WEBPACK_IMPORTED_MODULE_24__["defaultSuccess"](_this.props);
      })["catch"](function (e) {
        Object(_utils_errors__WEBPACK_IMPORTED_MODULE_25__["default"])(e, dispatch, history);
        _utils_message__WEBPACK_IMPORTED_MODULE_24__["defaultError"](_this.props);

        _this.setState({
          errors: e
        });
      })["finally"](function () {
        return _this.setState({
          validing: false
        });
      });
    });

    _this.state = {
      images: [],
      title: '',
      album_id: null,
      categories: [],
      tags: [],
      loading: false,
      validing: false,
      errors: null,
      progress: 0
    };
    return _this;
  }

  _createClass(Create, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var params = this.props.match.params;
      this.setState({
        album_id: params.album_id
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var params = this.props.match.params;
      this.setState({
        album_id: params.album_id
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.all_cat();
      this.all_tag();
      this.all_album();
    }
  }, {
    key: "all_cat",
    value: function all_cat() {
      var _this$props2 = this.props,
          all_cat = _this$props2.all_cat,
          dispatch = _this$props2.dispatch,
          history = _this$props2.history;
      all_cat().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["ALL_CATEGORIES"],
          payload: res.data.data
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_25__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "all_tag",
    value: function all_tag() {
      var _this$props3 = this.props,
          all_tag = _this$props3.all_tag,
          dispatch = _this$props3.dispatch,
          history = _this$props3.history;
      all_tag().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["ALL_TAGS"],
          payload: res.data.data
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_25__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "all_album",
    value: function all_album() {
      var _this$props4 = this.props,
          all_album = _this$props4.all_album,
          dispatch = _this$props4.dispatch,
          history = _this$props4.history;
      all_album().then(function (res) {
        dispatch({
          type: _store_actions_type__WEBPACK_IMPORTED_MODULE_19__["ALL_ALBUMS"],
          payload: res.data.data
        });
      })["catch"](function (e) {
        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_25__["default"])(e, dispatch, history);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          params = _this$props5.match.params,
          categories = _this$props5.categories,
          tags = _this$props5.tags,
          albums = _this$props5.albums;
      var _this$state = this.state,
          validing = _this$state.validing,
          errors = _this$state.errors,
          progress = _this$state.progress,
          images = _this$state.images;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_17__["default"], {
        data: navLinks
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], null, "Ajouter des images ", params.album_id ? "( Album )" : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12",
        style: {
          marginBottom: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dropzone__WEBPACK_IMPORTED_MODULE_18__["default"], {
        handleFile: this.handleFile,
        removeFile: this.removeFile
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, images.map(function (img, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          xs: "12",
          md: "4",
          key: i,
          style: {
            marginBottom: 15
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: img.data,
          alt: img.name,
          width: "100%",
          height: "150"
        }))));
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group has-float-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        error: _utils_message__WEBPACK_IMPORTED_MODULE_24__["is_msg"](errors, 'title'),
        autoFocus: true,
        margin: "dense",
        label: "Titre",
        name: "title",
        type: "text",
        fullWidth: true,
        variant: "outlined",
        helperText: _utils_message__WEBPACK_IMPORTED_MODULE_24__["fildsMsgHandler"](errors, 'title'),
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
      }), _utils_message__WEBPACK_IMPORTED_MODULE_24__["fildsMsgHandler"](this.state.errors, 'categories'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
      }), _utils_message__WEBPACK_IMPORTED_MODULE_24__["fildsMsgHandler"](this.state.errors, 'tags'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group has-float-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        error: _utils_message__WEBPACK_IMPORTED_MODULE_24__["is_msg"](errors, 'album_id'),
        margin: "dense",
        select: true,
        label: "Album",
        name: "album_id",
        type: "text",
        fullWidth: true,
        variant: "outlined",
        helperText: _utils_message__WEBPACK_IMPORTED_MODULE_24__["fildsMsgHandler"](errors, 'album_id'),
        value: this.state.album_id,
        onChange: this.handleChange
      }, albums.map(function (option) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: option.id,
          value: option.id
        }, option.title);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: "12",
        md: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "submit",
        variant: "contained",
        color: "default"
      }, "Retour"), '   ', validing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: progress
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "submit",
        variant: "contained",
        color: "primary",
        onClick: this.handleSubmit
      }, "Envoyer"))))))));
    }
  }]);

  return Create;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.AuthReducer.user,
    albums: state.AlbumReducer.albums,
    categories: state.CategorieReducer.categories,
    tags: state.TagReducer.tags
  };
};

var mapDispatchToProsps = function mapDispatchToProsps(dispatch) {
  return {
    dispatch: dispatch,
    all_album: function all_album() {
      return _store_actions_AlbumActions__WEBPACK_IMPORTED_MODULE_21__["index"]();
    },
    all_cat: function all_cat() {
      return _store_actions_CategorieActions__WEBPACK_IMPORTED_MODULE_22__["index"]();
    },
    all_tag: function all_tag() {
      return _store_actions_TagActions__WEBPACK_IMPORTED_MODULE_23__["index"]();
    },
    store: function store(data) {
      return _store_actions_ImageActions__WEBPACK_IMPORTED_MODULE_20__["store"](data);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_2__["withSnackbar"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProsps)(Create)));

/***/ })

}]);