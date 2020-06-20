(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var MainBody = function MainBody(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Body, null, children);
};

/* harmony default export */ __webpack_exports__["a"] = (MainBody);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(26);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(53);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(55);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(28);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(56);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(27);

var _helpers = __webpack_require__(57);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(52)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(27);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(54)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 80%;\n  margin-top: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 88%;\n  background: #ffffff !important;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  z-index: 3;\n  transition: .25s ease-in;\n\n  h1 {\n    width: 80%;\n  }\n\n  @media (min-width: 460px) {\n    width: 420px;\n    margin-top: -64px;\n    h1 {\n      width: initial;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject2());

var HeroOverlay = function HeroOverlay(_ref) {
  var title = _ref.title,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Overlay, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, text));
};

/* harmony default export */ __webpack_exports__["a"] = (HeroOverlay);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  max-width: 700px;\n  border: 1px solid #666666;\n  z-index: -1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var HeroImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject());

var HeroImage = function HeroImage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeroImg, props);
};

/* harmony default export */ __webpack_exports__["a"] = (HeroImage);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  color: ", ";\n  background: ", ";\n  font-size: 14px;\n  font-weight: 300;\n  text-transform: uppercase;\n  height: 45px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: 1px solid ", ";\n  transition: .175s ease-in;\n  :hover {\n    background: ", ";\n    color: white;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Cta = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject(), function (props) {
  return props.dark ? "#ffffff" : "#333333";
}, function (props) {
  return props.dark ? "#ffffff" : "#ffffff";
}, function (props) {
  return props.dark ? "#ffffff" : "#333333";
}, function (props) {
  return props.dark ? "#ffffff" : "#333333";
});

var CtaButton = function CtaButton(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cta, null, children);
};

/* harmony default export */ __webpack_exports__["a"] = (CtaButton);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(9);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/Router.js

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: /Users/mweitzen/Sites/react/mwKeys/src/assets/css/app.css
var app = __webpack_require__(65);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(24);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(41);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(42);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/assets/fontAwesome.js




fontawesome_svg_core_["library"].add(free_brands_svg_icons_["fab"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faBars"]);
/* harmony default export */ var fontAwesome = (fontawesome_svg_core_["library"]);
// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(17);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(18);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(4);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(19);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(20);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(15);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(12);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(10);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/FullScreenMenu.js










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 8px;\n  margin-right: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 20px;\n  text-align: center;\n  color: #333333;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var FullScreenMenu_Transition = function Transition(props) {
  return /*#__PURE__*/external_react_default.a.createElement(core_["Slide"], extends_default()({
    direction: "up"
  }, props));
};

var MobileItem = external_styled_components_default.a.a(_templateObject());
var MobileButton = external_styled_components_default.a.button(_templateObject2());

var FullScreenMenu_FullScreenMenu = /*#__PURE__*/function (_React$Component) {
  inherits_default()(FullScreenMenu, _React$Component);

  var _super = _createSuper(FullScreenMenu);

  function FullScreenMenu() {
    var _this;

    classCallCheck_default()(this, FullScreenMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      open: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClickOpen", function () {
      _this.setState({
        open: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    return _this;
  }

  createClass_default()(FullScreenMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var paths = this.props.paths;
      return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(MobileButton, {
        as: core_["Button"],
        variant: "outlined",
        size: "small",
        onClick: this.handleClickOpen
      }, /*#__PURE__*/external_react_default.a.createElement(icons_["Menu"], null)), /*#__PURE__*/external_react_default.a.createElement(core_["Dialog"], {
        fullScreen: true,
        open: this.state.open,
        onClose: this.handleClose,
        TransitionComponent: FullScreenMenu_Transition
      }, /*#__PURE__*/external_react_default.a.createElement(core_["Toolbar"], {
        style: {
          display: "flex",
          justifyContent: "flex-end"
        }
      }, /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
        color: "inherit",
        onClick: this.handleClose,
        "aria-label": "Close"
      }, /*#__PURE__*/external_react_default.a.createElement(icons_["Close"], null))), /*#__PURE__*/external_react_default.a.createElement(core_["List"], null, paths.map(function (link, key) {
        var path = link.path,
            text = link.text;
        return /*#__PURE__*/external_react_default.a.createElement(MobileItem, {
          key: key,
          as: router_["Link"],
          to: path
        }, /*#__PURE__*/external_react_default.a.createElement(core_["ListItem"], {
          onClick: _this2.handleClose,
          button: true
        }, /*#__PURE__*/external_react_default.a.createElement(core_["ListItemText"], {
          primary: text,
          disableTypography: true
        })));
      }))));
    }
  }]);

  return FullScreenMenu;
}(external_react_default.a.Component);

/* harmony default export */ var components_FullScreenMenu = (FullScreenMenu_FullScreenMenu);
// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/MenuBar.js


function MenuBar_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px 0 0;\n"]);

  MenuBar_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function MenuBar_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  height: 72px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & a {\n    color: #333333;\n    padding: 1rem;\n    display: inline-block;\n    text-transform: uppercase;\n  }\n  & a:hover {\n    font-weight: 500;\n    color: black;\n  }\n  & .active {\n    color: black;\n    background-image: linear-gradient(to right, #000, #000);\n    background-position: 50% 73%;\n    background-repeat: no-repeat;\n    background-size: 50% 1px;\n  }\n"]);

  MenuBar_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Nav = external_styled_components_default.a.nav(MenuBar_templateObject());
var MobileMenu = external_styled_components_default.a.div(MenuBar_templateObject2());

var isActive = function isActive(_ref) {
  var isCurrent = _ref.isCurrent;
  return isCurrent ? {
    className: "active"
  } : null;
};

var MenuBar_NavLink = function NavLink(_ref2) {
  var to = _ref2.to,
      text = _ref2.text;
  return /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    getProps: isActive,
    to: to
  }, text);
};

var MenuBar_MenuNavLink = function MenuNavLink(_ref3) {
  var to = _ref3.to,
      text = _ref3.text;
  return /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: to
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    size: "large",
    variant: "text"
  }, text));
};

var links = [{
  path: '/',
  text: 'Home'
}, {
  path: "/about",
  text: "About"
}, {
  path: "/listen",
  text: "Listen"
}, // {path:"/schedule", text:"Schedule"},
// {path:"/live", text:"Live!"},
{
  path: "/contact",
  text: "Contact"
}];

var MenuBar_MenuBar = function MenuBar(props) {
  return /*#__PURE__*/external_react_default.a.createElement(Nav, null, /*#__PURE__*/external_react_default.a.createElement(core_["Hidden"], {
    xsDown: true
  }, links.map(function (_ref4, key) {
    var path = _ref4.path,
        text = _ref4.text;
    return /*#__PURE__*/external_react_default.a.createElement(MenuBar_NavLink, {
      to: path,
      text: text,
      key: key
    });
  })), /*#__PURE__*/external_react_default.a.createElement(core_["Hidden"], {
    smUp: true
  }, /*#__PURE__*/external_react_default.a.createElement(MobileMenu, null, /*#__PURE__*/external_react_default.a.createElement(MenuBar_MenuNavLink, {
    to: "/listen",
    text: "Listen"
  }), /*#__PURE__*/external_react_default.a.createElement(components_FullScreenMenu, {
    paths: links
  }))));
};

/* harmony default export */ var components_MenuBar = (MenuBar_MenuBar);
// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/SocialIcons.js


function SocialIcons_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  color: #333333;\n  font-size: 22px;\n"]);

  SocialIcons_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function SocialIcons_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: 140px;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 1.5rem;\n  padding-bottom: .5rem;\n"]);

  SocialIcons_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var SocialBox = external_styled_components_default.a.div(SocialIcons_templateObject());
var SocialLink = external_styled_components_default.a.a(SocialIcons_templateObject2());

var SocialIcons_SocialIcons = function SocialIcons(props) {
  return /*#__PURE__*/external_react_default.a.createElement(SocialBox, null, /*#__PURE__*/external_react_default.a.createElement(SocialLink, {
    target: "_blank",
    href: "https://www.facebook.com/mweitzenhoffer/"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: ["fab", "facebook-f"],
    inverse: props.dark ? true : false
  })), /*#__PURE__*/external_react_default.a.createElement(SocialLink, {
    target: "_blank",
    href: "https://www.instagram.com/mwkeys_nyc/?hl=en"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: ["fab", "instagram"],
    inverse: props.dark ? true : false
  })), /*#__PURE__*/external_react_default.a.createElement(SocialLink, {
    target: "_blank",
    href: "https://www.youtube.com/channel/UClofO5-oJ7X3q3ukIMc2Rcw"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: ["fab", "youtube"],
    inverse: props.dark ? true : false
  })), /*#__PURE__*/external_react_default.a.createElement(SocialLink, {
    target: "_blank",
    href: "https://soundcloud.com/mike-weitzenhoffer"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: ["fab", "soundcloud"],
    inverse: props.dark ? true : false
  })));
};

/* harmony default export */ var components_SocialIcons = (SocialIcons_SocialIcons);
// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/Footer.js


function Footer_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 12px;\n  color: ", ";\n  padding-bottom: 1rem;\n"]);

  Footer_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Footer_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1.5rem;\n"]);

  Footer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var FooterBox = external_styled_components_default.a.div(Footer_templateObject(), function (props) {
  return props.dark ? "#131313" : "#ffffff";
});
var Copyright = external_styled_components_default.a.p(Footer_templateObject2(), function (props) {
  return props.dark ? "#ffffff" : "#333333";
});

var Footer_Footer = function Footer(props) {
  return /*#__PURE__*/external_react_default.a.createElement(FooterBox, props, /*#__PURE__*/external_react_default.a.createElement(components_SocialIcons, props), /*#__PURE__*/external_react_default.a.createElement(Copyright, props, "Copyright ", new Date().getFullYear(), ". mwProfessional"));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: /Users/mweitzen/Sites/react/mwKeys/src/views/MainBody.js
var MainBody = __webpack_require__(8);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/Loader.js


function Loader_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  height: 50vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);

  Loader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var LoaderBody = external_styled_components_default.a.div(Loader_templateObject());

var Loader_Loader = function Loader() {
  return /*#__PURE__*/external_react_default.a.createElement(LoaderBody, null, /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading..."));
};

/* harmony default export */ var components_Loader = (Loader_Loader);
// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/App.js








 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(components_MenuBar, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement(components_Loader, null)
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))), /*#__PURE__*/external_react_default.a.createElement(components_Footer, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(26);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(16);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("/Users/mweitzen/Sites/react/mwKeys/node_modules/react-static/lib/browser");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_MainBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CtaButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);



function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 90%;\n  transition: 0.5s ease-in;\n  @media (min-width: 640px) {\n    width: 600px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var styles = {
  select: {
    width: '100%'
  },
  formControl: {
    width: '100%'
  }
};
var ContactForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var Field = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject2());

var ContactField = function ContactField(props) {
  var label = props.label,
      helperText = props.helperText,
      placeholder = props.placeholder;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fullWidth: true,
    variant: "outlined",
    color: "default",
    label: label,
    placeholder: placeholder,
    helperText: helperText
  }, props));
};

var Main = function Main(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_views_MainBody__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Contact Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContactForm, {
    as: "form",
    name: "contact",
    action: "/",
    "netlify-honeypot": "title",
    "data-netlify": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Field, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Hey: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    name: "title"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "contact"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContactField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: "name",
    autoComplete: "name",
    label: "Full name",
    placeholder: "Please enter your full name"
  }, props))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContactField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: "email",
    autoComplete: "email",
    label: "Email address",
    placeholder: "Please enter your email address"
  }, props))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContactField, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: "message",
    label: "Message",
    placeholder: "Please enter your message",
    multiline: true,
    rows: 3
  }, props))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CtaButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Send Message")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Main));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_MainBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _assets_img_me1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _assets_img_me1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_me1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HeroImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _components_HeroOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _components_CtaButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_MainBody__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeroImage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    src: _assets_img_me1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeroOverlay__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    title: "Michael Weitzenhoffer",
    text: "I am a professional keyboard player and pianist based in New York City. I am available for work in the studio or on stage. I am also available for solo gigs in restaurants and clubs. Check out some recordings of my playing and contact me to learn more!"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/listen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CtaButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Hear me play")));
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_MainBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_MainBody__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This will be my interactive app."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "At first it can just list my songs."));
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_MainBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_MainBody__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This will be a list of upcoming shows or sessions booked."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There should be a CTA that lets someone \"Request a booking\"/\"Book me\" or \"Schedule a call\"."));
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(17);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(18);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(4);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(19);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(20);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(15);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(46);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/Duration.js

function Duration(_ref) {
  var className = _ref.className,
      seconds = _ref.seconds;
  return /*#__PURE__*/external_react_default.a.createElement("time", {
    dateTime: "P".concat(Math.round(seconds), "S"),
    className: className
  }, format(seconds));
}

function format(seconds) {
  var date = new Date(seconds * 1000);
  var hh = date.getUTCHours();
  var mm = date.getUTCMinutes();
  var ss = pad(date.getUTCSeconds());

  if (hh) {
    return "".concat(hh, ":").concat(pad(mm), ":").concat(ss);
  }

  return "".concat(mm, ":").concat(ss);
}

function pad(string) {
  return ('0' + string).slice(-2);
}
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(3);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/MediaPlayer.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  transform: rotate(270deg);\n  height: 15px;\n  width: 15px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 80%;\n  transition: width 0.5s ease-in;\n  @media (min-width: 460px) {\n    width: 300px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  height: 360px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: #f1f1f1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  max-width: 460px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Box = external_styled_components_default.a.div(_templateObject());
var Player = external_styled_components_default.a.div(_templateObject2());
var Controls = external_styled_components_default.a.div(_templateObject3());
var SongBox = external_styled_components_default.a.div(_templateObject4());
var Volume = external_styled_components_default.a.div(_templateObject5());

var MediaPlayer_SongList = function SongList(_ref) {
  var songs = _ref.songs,
      handleLoad = _ref.handleLoad;
  return /*#__PURE__*/external_react_default.a.createElement(core_["List"], null, songs.map(function (song, key) {
    return /*#__PURE__*/external_react_default.a.createElement(core_["ListItem"], {
      button: true,
      onClick: function onClick() {
        return handleLoad(song.url);
      },
      key: key
    }, /*#__PURE__*/external_react_default.a.createElement(core_["ListItemText"], {
      primary: song.title,
      secondary: song.artist
    }), /*#__PURE__*/external_react_default.a.createElement(core_["ListItemSecondaryAction"], null, /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
      "aria-label": "Play",
      onClick: function onClick() {
        return handleLoad(song.url);
      }
    }, /*#__PURE__*/external_react_default.a.createElement(icons_["PlayCircleFilled"], null))));
  }));
};

var MediaPlayer_MediaPlayer = /*#__PURE__*/function (_Component) {
  inherits_default()(MediaPlayer, _Component);

  var _super = _createSuper(MediaPlayer);

  function MediaPlayer() {
    var _this;

    classCallCheck_default()(this, MediaPlayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      url: 'https://soundcloud.com/mike-weitzenhoffer/if-i-aint-got-you',
      pip: false,
      playing: false,
      controls: false,
      light: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
      track: 0
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "load", function (url) {
      _this.setState({
        url: url,
        played: 0,
        loaded: 0,
        pip: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "next", function () {
      _this.setState({
        track: _this.state.track + 1
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "previous", function () {
      if (_this.state.track === 0) {
        return;
      }

      _this.setState({
        track: _this.state.track - 1
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "playPause", function () {
      _this.setState({
        playing: !_this.state.playing
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "stop", function () {
      _this.setState({
        playing: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setVolume", function (e) {
      _this.setState({
        volume: parseFloat(e.target.value)
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleMuted", function () {
      _this.setState({
        muted: !_this.state.muted
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "togglePIP", function () {
      _this.setState({
        pip: !_this.state.pip
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onPlay", function () {
      console.log('onPlay');

      _this.setState({
        playing: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onEnablePIP", function () {
      console.log('onEnablePIP');

      _this.setState({
        pip: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onDisablePIP", function () {
      console.log('onDisablePIP');

      _this.setState({
        pip: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onPause", function () {
      console.log('onPause');

      _this.setState({
        playing: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onSeekMouseDown", function (e) {
      _this.setState({
        seeking: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onSeekChange", function (e) {
      _this.setState({
        played: parseFloat(e.target.value)
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onSeekMouseUp", function (e) {
      _this.setState({
        seeking: false
      });

      _this.player.seekTo(parseFloat(e.target.value));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onProgress", function (state) {
      console.log('onProgress', state); // We only want to update time slider if we are not currently seeking

      if (!_this.state.seeking) {
        _this.setState(state);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onEnded", function () {
      console.log('onEnded');

      _this.setState({
        playing: _this.state.loop
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onDuration", function (duration) {
      console.log('onDuration', duration);

      _this.setState({
        duration: duration
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onClickFullscreen", function () {
      // screenfull.request(findDOMNode(this.player))
      console.log('nothing');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderLoadButton", function (url, label) {
      return /*#__PURE__*/external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this.load(url);
        }
      }, label);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "ref", function (player) {
      _this.player = player;
    });

    return _this;
  }

  createClass_default()(MediaPlayer, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          url = _this$state.url,
          playing = _this$state.playing,
          controls = _this$state.controls,
          light = _this$state.light,
          volume = _this$state.volume,
          muted = _this$state.muted,
          loop = _this$state.loop,
          played = _this$state.played,
          loaded = _this$state.loaded,
          duration = _this$state.duration,
          playbackRate = _this$state.playbackRate,
          pip = _this$state.pip;
      var SEPARATOR = ' · ';
      var songInfo = [{
        title: 'If I Ain\'t Got You',
        artist: "Alicia Keys",
        url: 'https://soundcloud.com/mike-weitzenhoffer/if-i-aint-got-you'
      }, {
        title: 'Before He Cheats',
        artist: "Carrie Underwood",
        url: 'https://soundcloud.com/mike-weitzenhoffer/before-he-cheats'
      }, {
        title: 'Honesty',
        artist: "Billy Joel",
        url: 'https://soundcloud.com/mike-weitzenhoffer/honesty'
      }, {
        title: 'When I Was Your Man',
        artist: "Bruno Mars",
        url: 'https://soundcloud.com/mike-weitzenhoffer/when-i-was-your-man'
      }, {
        title: 'Lay Me Down',
        artist: "Sam Smith",
        url: 'https://soundcloud.com/mike-weitzenhoffer/lay-me-down'
      }, {
        title: 'Moondance',
        artist: "Van Morrison",
        url: 'https://soundcloud.com/mike-weitzenhoffer/Moondance'
      }, {
        title: 'Free Bird (Improvised)',
        artist: "Lynyrd Skynyrd",
        url: 'https://soundcloud.com/mike-weitzenhoffer/free-bird-improvised-lynyrd-skynrd'
      }, {
        title: 'Just the Way You Are',
        artist: "Billy Joel",
        url: 'https://soundcloud.com/mike-weitzenhoffer/just-the-way-you-are-billy-joel'
      }, {
        title: 'Your Song',
        artist: "Elton John",
        url: 'https://soundcloud.com/mike-weitzenhoffer/your-song-elton-john'
      }, {
        title: 'Michelle',
        artist: "The Beatles",
        url: 'https://soundcloud.com/mike-weitzenhoffer/michelle-beatles'
      }, {
        title: 'You Light Up My Life',
        artist: "Debby Boone",
        url: 'https://soundcloud.com/mike-weitzenhoffer/you-light-up-my-life'
      }];
      return /*#__PURE__*/external_react_default.a.createElement(Box, null, /*#__PURE__*/external_react_default.a.createElement(Player, null, /*#__PURE__*/external_react_default.a.createElement(external_react_player_default.a, {
        ref: this.ref,
        className: "react-player",
        width: "100%",
        height: "100%",
        url: url,
        pip: pip,
        playing: playing,
        controls: controls,
        light: light,
        loop: loop,
        playbackRate: playbackRate,
        volume: volume,
        muted: muted,
        onReady: this.onReady,
        onStart: function onStart() {
          return console.log('onStart');
        },
        onPlay: this.onPlay,
        onEnablePIP: this.onEnablePIP,
        onDisablePIP: this.onDisablePIP,
        onPause: this.onPause,
        onBuffer: function onBuffer() {
          return console.log('onBuffer');
        },
        onSeek: function onSeek(e) {
          return console.log('onSeek', e);
        },
        onEnded: this.onEnded,
        onError: function onError(e) {
          return console.log('onError', e);
        },
        onProgress: this.onProgress,
        onDuration: this.onDuration
      })), /*#__PURE__*/external_react_default.a.createElement(Controls, null, /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
        onClick: this.stop
      }, /*#__PURE__*/external_react_default.a.createElement(icons_["SkipPrevious"], null)), /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
        onClick: this.stop
      }, /*#__PURE__*/external_react_default.a.createElement(icons_["Stop"], null)), /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
        onClick: this.playPause
      }, playing ? /*#__PURE__*/external_react_default.a.createElement(icons_["Pause"], null) : /*#__PURE__*/external_react_default.a.createElement(icons_["PlayArrow"], null)), /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
        onClick: this.stop
      }, " ", /*#__PURE__*/external_react_default.a.createElement(icons_["SkipNext"], null), " "), /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], null, /*#__PURE__*/external_react_default.a.createElement(icons_["VolumeUp"], null))), /*#__PURE__*/external_react_default.a.createElement(SongBox, null, /*#__PURE__*/external_react_default.a.createElement("h2", null, "SoundCloud"), /*#__PURE__*/external_react_default.a.createElement(MediaPlayer_SongList, {
        songs: songInfo,
        handleLoad: this.load
      })));
    }
  }]);

  return MediaPlayer;
}(external_react_["Component"]);

/* harmony default export */ var components_MediaPlayer = (MediaPlayer_MediaPlayer);
// EXTERNAL MODULE: /Users/mweitzen/Sites/react/mwKeys/src/views/MainBody.js
var MainBody = __webpack_require__(8);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/pages/listen.js
 // import ReactPlayer from 'react-player'



/* harmony default export */ var listen = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(MainBody["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement("h1", null, "My Recordings"), /*#__PURE__*/external_react_default.a.createElement("p", null, "New recordings coming soon."), /*#__PURE__*/external_react_default.a.createElement(components_MediaPlayer, null));
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/mweitzen/Sites/react/mwKeys/src/views/MainBody.js
var MainBody = __webpack_require__(8);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/SkillsList.js


function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var List = external_styled_components_default.a.div(_templateObject());
var ListItem = external_styled_components_default.a.p(_templateObject2());

var SkillsList_SkillsList = function SkillsList(props) {
  var header = props.header,
      list = props.list;
  return /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/external_react_default.a.createElement(List, null, /*#__PURE__*/external_react_default.a.createElement("h3", null, header), list.map(function (item, i) {
    return /*#__PURE__*/external_react_default.a.createElement(ListItem, {
      key: i
    }, item);
  })));
};

/* harmony default export */ var components_SkillsList = (SkillsList_SkillsList);
// EXTERNAL MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/HeroOverlay.js
var HeroOverlay = __webpack_require__(21);

// EXTERNAL MODULE: /Users/mweitzen/Sites/react/mwKeys/src/components/HeroImage.js
var HeroImage = __webpack_require__(22);

// EXTERNAL MODULE: /Users/mweitzen/Sites/react/mwKeys/src/assets/img/me2.jpg
var me2 = __webpack_require__(43);
var me2_default = /*#__PURE__*/__webpack_require__.n(me2);

// CONCATENATED MODULE: /Users/mweitzen/Sites/react/mwKeys/src/pages/about.js


function about_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 30px;\n  transition: 0.5s ease-in;\n  @media (min-width: 600px) {\n    flex-direction: row;\n    width: 600px;\n  }\n"]);

  about_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var inStudio = ["Strong and creative improvisation", "Proficient sight reading", "Technical and consistent playing", "Adaptable stylistic approaches"];
var onStage = ["Great presence and energy", "Supportive player", "Adaptive to setting", "Reliable and consistent"];
var keyboards = ["Korg SV-1", "Roland V-Combo VR-09", "Korg MicroKorg S", "Novation Impulse 61-Key MIDI"];
var guitars = ["Breedlove Stage Dreadnought", "Fender Standard Stratocaster"];
var SkillSet = external_styled_components_default.a.div(about_templateObject());
/* harmony default export */ var about = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(MainBody["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(HeroImage["a" /* default */], {
    src: me2_default.a
  }), /*#__PURE__*/external_react_default.a.createElement(HeroOverlay["a" /* default */], {
    title: "About Me",
    text: "I have ten years of trained piano experience. I am a versatile player with a lot to offer. I am comfortable playing in many different styles, Rock, Jazz, R&B, Soul, Folk/Americana. I have professional gear and a professional attitude."
  }), /*#__PURE__*/external_react_default.a.createElement("h2", null, "Skills"), /*#__PURE__*/external_react_default.a.createElement(SkillSet, null, /*#__PURE__*/external_react_default.a.createElement(components_SkillsList, {
    header: "In-Studio",
    list: inStudio
  }), /*#__PURE__*/external_react_default.a.createElement(components_SkillsList, {
    header: "On-Stage",
    list: onStage
  })), /*#__PURE__*/external_react_default.a.createElement("h2", null, "Gear"), /*#__PURE__*/external_react_default.a.createElement(SkillSet, null, /*#__PURE__*/external_react_default.a.createElement(components_SkillsList, {
    header: "Keyboards",
    list: keyboards
  }), /*#__PURE__*/external_react_default.a.createElement(components_SkillsList, {
    header: "Guitars",
    list: guitars
  })));
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(14);

var _router = __webpack_require__(9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/me2.6a629205.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/me1.390694e2.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(50);
module.exports = __webpack_require__(58);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(49)["default"];

var _require = __webpack_require__(30),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(30),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(51),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);
















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/contact */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/contact";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/contact.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/index.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/listen.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/listen */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/listen.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/listen";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/listen.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/live.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/live */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/live.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/live";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/live.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/schedule.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/schedule */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/schedule.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/schedule";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/schedule.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about.js': t_1,
  '__react_static_root__/src/pages/contact.js': t_2,
  '__react_static_root__/src/pages/index.js': t_3,
  '__react_static_root__/src/pages/listen.js': t_4,
  '__react_static_root__/src/pages/live.js': t_5,
  '__react_static_root__/src/pages/schedule.js': t_6
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(27);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 16,
	"./": 16,
	"./index": 16,
	"./index.js": 16
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 54;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(26);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(28);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(59);

var _interopRequireDefault = __webpack_require__(60);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(12));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(61));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(62);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(63)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("/Users/mweitzen/Sites/react/mwKeys/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(64)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)(false);
// Module
exports.push([module.i, "/* Global */\n* {\n  scroll-behavior: smooth;\n}\n\nhtml {\n  overflow:   scroll;\n}\n\n::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; /* make scrollbar transparent */\n}\n\nbody {\n  font-family: 'Raleway', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\n    'Lucida Grande', sans-serif;\n    font-size: 16px;\n    color: #333333;\n    margin: 0;\n    padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n}\n\na:hover {\n  text-decoration: none;\n  color: #000000;\n  font-weight: 500;\n}\n\nh1 {\n  font-weight: 100;\n}\n\nh2 {\n  font-weight: 500;\n}\n\nh3, h4, h5, h6 {\n  font-weight: 700;\n}\n\nimg {\n  max-width: 100%;\n}\n\n/* Classes */\n.content {\n  padding: 1rem;\n}\n", ""]);



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});