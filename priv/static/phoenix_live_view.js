(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["phoenix_live_view"] = factory();
	else
		root["phoenix_live_view"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/phoenix_live_view.js-exposed");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/click-modifier.js":
/*!******************************!*\
  !*** ./js/click-modifier.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClickModifier; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ClickModifier =
/*#__PURE__*/
function () {
  function ClickModifier(element, args) {
    _classCallCheck(this, ClickModifier);

    this.element = element;
    this.args = args;
  }

  _createClass(ClickModifier, [{
    key: "install",
    value: function install() {
      var _this$args = this.args,
          eventName = _this$args.eventName,
          callback = _this$args.callback,
          _this$args$options = _this$args.options,
          options = _this$args$options === void 0 ? {} : _this$args$options;
      this.element.addEventListener(eventName, callback, options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$args2 = this.args,
          eventName = _this$args2.eventName,
          callback = _this$args2.callback,
          _this$args2$options = _this$args2.options,
          options = _this$args2$options === void 0 ? {} : _this$args2$options;
      this.element.removeEventListener(eventName, callback, options);
    }
  }]);

  return ClickModifier;
}();



/***/ }),

/***/ "./js/phoenix_live_view.js-exposed":
/*!*****************************************!*\
  !*** ./js/phoenix_live_view.js-exposed ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if(!global["Phoenix"]) global["Phoenix"] = {};
module.exports = global["Phoenix"]["LiveView"] = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./phoenix_live_view.js */ "./node_modules/babel-loader/lib/index.js!./js/phoenix_live_view.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./js/phoenix_live_view.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./js/phoenix_live_view.js ***!
  \*****************************************************************/
/*! exports provided: debug, Rendered, LiveSocket, Browser, DOM, View, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rendered", function() { return Rendered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveSocket", function() { return LiveSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morphdom */ "./node_modules/morphdom/dist/morphdom-esm.js");
/* harmony import */ var _click_modifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click-modifier */ "./js/click-modifier.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
================================================================================
Phoenix LiveView JavaScript Client
================================================================================

See the hexdocs at `https://hexdocs.pm/phoenix_live_view` for documentation.

*/


var CLIENT_OUTDATED = "outdated";
var RELOAD_JITTER = [1000, 10000];
var PHX_VIEW = "data-phx-view";
var PHX_COMPONENT = "data-phx-component";
var PHX_LIVE_LINK = "data-phx-live-link";
var PHX_CONNECTED_CLASS = "phx-connected";
var PHX_LOADING_CLASS = "phx-loading";
var PHX_DISCONNECTED_CLASS = "phx-disconnected";
var PHX_ERROR_CLASS = "phx-error";
var PHX_PARENT_ID = "data-phx-parent-id";
var PHX_VIEW_SELECTOR = "[".concat(PHX_VIEW, "]");
var PHX_ERROR_FOR = "data-phx-error-for";
var PHX_HAS_FOCUSED = "phx-has-focused";
var FOCUSABLE_INPUTS = ["text", "textarea", "number", "email", "password", "search", "tel", "url"];
var PHX_HAS_SUBMITTED = "phx-has-submitted";
var PHX_SESSION = "data-phx-session";
var PHX_STATIC = "data-phx-static";
var PHX_READONLY = "data-phx-readonly";
var PHX_DISABLED = "data-phx-disabled";
var PHX_DISABLE_WITH = "disable-with";
var PHX_HOOK = "hook";
var PHX_DEBOUNCE = "debounce";
var PHX_THROTTLE = "throttle";
var PHX_CHANGE = "phx-change";
var PHX_UPDATE = "update";
var PHX_PRIVATE = "phxPrivate";
var LOADER_TIMEOUT = 1;
var BEFORE_UNLOAD_LOADER_TIMEOUT = 200;
var BINDING_PREFIX = "phx-";
var PUSH_TIMEOUT = 30000;
var LINK_HEADER = "x-requested-with";
var DEBOUNCE_BLUR = "debounce-blur";
var DEBOUNCE_TIMER = "debounce-timer";
var DEBOUNCE_PREV_KEY = "debounce-prev-key"; // Rendered

var DYNAMICS = "d";
var STATIC = "s";
var COMPONENTS = "c";

var logError = function logError(msg, obj) {
  return console.error && console.error(msg, obj);
};

var debug = function debug(view, kind, msg, obj) {
  console.log("".concat(view.id, " ").concat(kind, ": ").concat(msg, " - "), obj);
}; // wraps value in closure or returns closure

var closure = function closure(val) {
  return typeof val === "function" ? val : function () {
    return val;
  };
};

var clone = function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var closestPhxBinding = function closestPhxBinding(el, binding) {
  do {
    if (el.matches("[".concat(binding, "]"))) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1 && !el.matches(PHX_VIEW_SELECTOR));

  return null;
};

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === "object" && !(obj instanceof Array);
};

var isEmpty = function isEmpty(obj) {
  for (var x in obj) {
    return false;
  }

  return true;
};

var maybe = function maybe(el, callback) {
  return el && callback(el);
};

var serializeForm = function serializeForm(form) {
  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formData = new FormData(form);
  var params = new URLSearchParams();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          val = _step$value[1];

      params.append(key, val);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  for (var metaKey in meta) {
    params.append(metaKey, meta[metaKey]);
  }

  return params.toString();
};

var recursiveMerge = function recursiveMerge(target, source) {
  for (var key in source) {
    var val = source[key];
    var targetVal = target[key];

    if (isObject(val) && isObject(targetVal)) {
      if (targetVal[DYNAMICS] && !val[DYNAMICS]) {
        delete targetVal[DYNAMICS];
      }

      recursiveMerge(targetVal, val);
    } else {
      target[key] = val;
    }
  }
};

var Rendered = {
  mergeDiff: function mergeDiff(source, diff) {
    if (!diff[COMPONENTS] && this.isNewFingerprint(diff)) {
      return diff;
    } else {
      recursiveMerge(source, diff);
      return source;
    }
  },
  isNewFingerprint: function isNewFingerprint() {
    var diff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return !!diff[STATIC];
  },
  componentToString: function componentToString(components, cid) {
    var component = components[cid] || logError("no component for CID ".concat(cid), components);
    var template = document.createElement("template");
    template.innerHTML = this.toString(component, components);
    var container = template.content;
    Array.from(container.childNodes).forEach(function (child) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        child.setAttribute(PHX_COMPONENT, cid);
      } else {
        if (child.nodeValue.trim() !== "") {
          logError("only HTML element tags are allowed at the root of components.\n\n" + "got: \"".concat(child.nodeValue.trim(), "\"\n\n") + "within:\n", template.innerHTML.trim());
        }

        child.remove();
      }
    });
    return template.innerHTML;
  },
  toString: function toString(rendered) {
    var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rendered[COMPONENTS] || {};
    var output = {
      buffer: "",
      components: components
    };
    this.toOutputBuffer(rendered, output);
    return output.buffer;
  },
  toOutputBuffer: function toOutputBuffer(rendered, output) {
    if (rendered[DYNAMICS]) {
      return this.comprehensionToBuffer(rendered, output);
    }

    var statics = rendered[STATIC];
    output.buffer += statics[0];

    for (var i = 1; i < statics.length; i++) {
      this.dynamicToBuffer(rendered[i - 1], output);
      output.buffer += statics[i];
    }
  },
  comprehensionToBuffer: function comprehensionToBuffer(rendered, output) {
    var dynamics = rendered[DYNAMICS],
        statics = rendered[STATIC];

    for (var d = 0; d < dynamics.length; d++) {
      var dynamic = dynamics[d];
      output.buffer += statics[0];

      for (var i = 1; i < statics.length; i++) {
        this.dynamicToBuffer(dynamic[i - 1], output);
        output.buffer += statics[i];
      }
    }
  },
  dynamicToBuffer: function dynamicToBuffer(rendered, output) {
    if (typeof rendered === "number") {
      output.buffer += this.componentToString(output.components, rendered);
    } else if (isObject(rendered)) {
      this.toOutputBuffer(rendered, output);
    } else {
      output.buffer += rendered;
    }
  },
  pruneCIDs: function pruneCIDs(rendered, cids) {
    cids.forEach(function (cid) {
      return delete rendered[COMPONENTS][cid];
    });
    return rendered;
  }
};
/** Initializes the LiveSocket
 *
 *
 * @param {string} endPoint - The string WebSocket endpoint, ie, `"wss://example.com/live"`,
 *                                               `"/live"` (inherited host & protocol)
 * @param {Phoenix.Socket} socket - the required Phoenix Socket class imported from "phoenix". For example:
 *
 *     import {Socket} from "phoenix"
 *     import {LiveSocket} from "phoenix_live_view"
 *     let liveSocket = new LiveSocket("/live", Socket, {...})
 *
 * @param {Object} [opts] - Optional configuration. Outside of keys listed below, all
 * configuration is passed directly to the Phoenix Socket constructor.
 * @param {Function} [opts.params] - The optional function for passing connect params.
 * The function receives the viewName associated with a given LiveView. For example:
 *
 *     (viewName) => {view: viewName, token: window.myToken}
 *
 * @param {string} [opts.bindingPrefix] - The optional prefix to use for all phx DOM annotations.
 * Defaults to "phx-".
 * @param {string} [opts.hooks] - The optional object for referencing LiveView hook callbacks.
 * @param {Function} [opts.viewLogger] - The optional function to log debug information. For example:
 *
 *     (view, kind, msg, obj) => console.log(`${view.id} ${kind}: ${msg} - `, obj)
*/

var LiveSocket =
/*#__PURE__*/
function () {
  function LiveSocket(url, phxSocket) {
    var _this = this;

    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, LiveSocket);

    this.unloaded = false;

    if (!phxSocket || phxSocket.constructor.name === "Object") {
      throw new Error("\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from \"phoenix\"\n          import {LiveSocket} from \"phoenix_live_view\"\n          let liveSocket = new LiveSocket(\"/live\", Socket, {...})\n      ");
    }

    this.socket = new phxSocket(url, opts);
    this.bindingPrefix = opts.bindingPrefix || BINDING_PREFIX;
    this.opts = opts;
    this.views = {};
    this.params = closure(opts.params || {});
    this.viewLogger = opts.viewLogger;
    this.activeElement = null;
    this.prevActive = null;
    this.prevInput = null;
    this.prevValue = null;
    this.silenced = false;
    this.root = null;
    this.linkRef = 0;
    this.href = window.location.href;
    this.pendingLink = null;
    this.currentLocation = clone(window.location);
    this.hooks = opts.hooks || {};
    this.socket.onOpen(function () {
      if (_this.isUnloaded()) {
        _this.destroyAllViews();

        _this.joinRootViews();
      }

      _this.unloaded = false;
    });
    window.addEventListener("beforeunload", function (e) {
      _this.unloaded = true;
    });
    this.bindTopLevelEvents();
  }

  _createClass(LiveSocket, [{
    key: "getSocket",
    value: function getSocket() {
      return this.socket;
    }
  }, {
    key: "log",
    value: function log(view, kind, msgCallback) {
      if (this.viewLogger) {
        var _msgCallback = msgCallback(),
            _msgCallback2 = _slicedToArray(_msgCallback, 2),
            msg = _msgCallback2[0],
            obj = _msgCallback2[1];

        this.viewLogger(view, kind, msg, obj);
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;

      if (["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0) {
        this.joinRootViews();
      } else {
        document.addEventListener("DOMContentLoaded", function () {
          _this2.joinRootViews();
        });
      }

      return this.socket.connect();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.socket.disconnect();
    } // private

  }, {
    key: "reloadWithJitter",
    value: function reloadWithJitter() {
      this.disconnect();
      var minMs = RELOAD_JITTER[0],
          maxMs = RELOAD_JITTER[1];
      var afterMs = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
      setTimeout(function () {
        return window.location.reload();
      }, afterMs);
    }
  }, {
    key: "getHookCallbacks",
    value: function getHookCallbacks(hookName) {
      return this.hooks[hookName];
    }
  }, {
    key: "isUnloaded",
    value: function isUnloaded() {
      return this.unloaded;
    }
  }, {
    key: "getBindingPrefix",
    value: function getBindingPrefix() {
      return this.bindingPrefix;
    }
  }, {
    key: "binding",
    value: function binding(kind) {
      return "".concat(this.getBindingPrefix()).concat(kind);
    }
  }, {
    key: "channel",
    value: function channel(topic, params) {
      return this.socket.channel(topic, params);
    }
  }, {
    key: "joinRootViews",
    value: function joinRootViews() {
      var _this3 = this;

      DOM.all(document, "".concat(PHX_VIEW_SELECTOR, ":not([").concat(PHX_PARENT_ID, "])"), function (rootEl) {
        var view = _this3.joinView(rootEl, null, _this3.getHref());

        _this3.root = _this3.root || view;
      });
    }
  }, {
    key: "replaceRoot",
    value: function replaceRoot(href) {
      var _this4 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var linkRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.setPendingLink(href);
      this.root.showLoader(LOADER_TIMEOUT);
      var rootEl = this.root.el;
      var rootID = this.root.id;
      var wasLoading = this.root.isLoading();
      Browser.fetchPage(href, function (status, html) {
        if (status !== 200) {
          return Browser.redirect(href);
        }

        var div = document.createElement("div");
        div.innerHTML = html;

        _this4.joinView(div.firstChild, null, href, function (newRoot) {
          if (!_this4.commitPendingLink(linkRef)) {
            newRoot.destroy();
            return;
          }

          callback && callback();

          _this4.destroyViewById(rootID);

          rootEl.replaceWith(newRoot.el);
          _this4.root = newRoot;

          if (wasLoading) {
            _this4.root.showLoader();
          }
        });
      });
    }
  }, {
    key: "joinView",
    value: function joinView(el, parentView, href, callback) {
      if (this.getViewByEl(el)) {
        return;
      }

      var view = new View(el, this, parentView, href);
      this.views[view.id] = view;
      view.join(callback);
      return view;
    }
  }, {
    key: "owner",
    value: function owner(childEl, callback) {
      var _this5 = this;

      var view = maybe(childEl.closest(PHX_VIEW_SELECTOR), function (el) {
        return _this5.getViewByEl(el);
      });

      if (view) {
        callback(view);
      }
    }
  }, {
    key: "getViewByEl",
    value: function getViewByEl(el) {
      return this.views[el.id];
    }
  }, {
    key: "onViewError",
    value: function onViewError(view) {
      this.dropActiveElement(view);
    }
  }, {
    key: "destroyAllViews",
    value: function destroyAllViews() {
      for (var id in this.views) {
        this.destroyViewById(id);
      }
    }
  }, {
    key: "destroyViewByEl",
    value: function destroyViewByEl(el) {
      return this.destroyViewById(el.id);
    }
  }, {
    key: "destroyViewById",
    value: function destroyViewById(id) {
      var view = this.views[id];

      if (view) {
        delete this.views[view.id];

        if (this.root && view.id === this.root.id) {
          this.root = null;
        }

        view.destroy();
      }
    }
  }, {
    key: "setActiveElement",
    value: function setActiveElement(target) {
      var _this6 = this;

      if (this.activeElement === target) {
        return;
      }

      this.activeElement = target;

      var cancel = function cancel() {
        if (target === _this6.activeElement) {
          _this6.activeElement = null;
        }

        target.removeEventListener("mouseup", _this6);
        target.removeEventListener("touchend", _this6);
      };

      target.addEventListener("mouseup", cancel);
      target.addEventListener("touchend", cancel);
    }
  }, {
    key: "getActiveElement",
    value: function getActiveElement() {
      if (document.activeElement === document.body) {
        return this.activeElement || document.activeElement;
      } else {
        return document.activeElement;
      }
    }
  }, {
    key: "dropActiveElement",
    value: function dropActiveElement(view) {
      if (this.prevActive && view.ownsElement(this.prevActive)) {
        this.prevActive = null;
      }
    }
  }, {
    key: "restorePreviouslyActiveFocus",
    value: function restorePreviouslyActiveFocus() {
      if (this.prevActive && this.prevActive !== document.body) {
        this.prevActive.focus();
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      this.prevActive = this.getActiveElement();

      if (this.prevActive !== document.body) {
        this.prevActive.blur();
      }
    }
  }, {
    key: "bindTopLevelEvents",
    value: function bindTopLevelEvents() {
      this.bindNav();
      this.bindForms();
      this.bindTargetable({
        keyup: "keyup",
        keydown: "keydown"
      }, function (e, type, view, target, phxEvent, phxTarget) {
        view.pushKey(target, type, phxEvent, {
          altGraphKey: e.altGraphKey,
          altKey: e.altKey,
          charCode: e.charCode,
          code: e.code,
          ctrlKey: e.ctrlKey,
          key: e.key,
          keyCode: e.keyCode,
          keyIdentifier: e.keyIdentifier,
          keyLocation: e.keyLocation,
          location: e.location,
          metaKey: e.metaKey,
          repeat: e.repeat,
          shiftKey: e.shiftKey,
          which: e.which
        });
      });
      this.bindTargetable({
        blur: "focusout",
        focus: "focusin"
      }, function (e, type, view, targetEl, phxEvent, phxTarget) {
        if (!phxTarget) {
          view.pushEvent(type, targetEl, phxEvent, {
            type: type
          });
        }
      });
      this.bindTargetable({
        blur: "blur",
        focus: "focus"
      }, function (e, type, view, targetEl, phxEvent, phxTarget) {
        // blur and focus are triggered on document and window. Discard one to avoid dups
        if (phxTarget && !phxTarget !== "window") {
          view.pushEvent(type, targetEl, phxEvent, {
            type: e.type
          });
        }
      });
    }
  }, {
    key: "setPendingLink",
    value: function setPendingLink(href) {
      this.linkRef++;
      var ref = this.linkRef;
      this.pendingLink = href;
      return this.linkRef;
    }
  }, {
    key: "commitPendingLink",
    value: function commitPendingLink(linkRef) {
      if (this.linkRef !== linkRef) {
        return false;
      } else {
        this.href = this.pendingLink;
        this.pendingLink = null;
        return true;
      }
    }
  }, {
    key: "getHref",
    value: function getHref() {
      return this.href;
    }
  }, {
    key: "hasPendingLink",
    value: function hasPendingLink() {
      return !!this.pendingLink;
    }
  }, {
    key: "bindTargetable",
    value: function bindTargetable(events, callback) {
      var _this7 = this;

      var _loop = function _loop(event) {
        var browserEventName = events[event];

        _this7.on(browserEventName, function (e) {
          var binding = _this7.binding(event);

          var bindTarget = _this7.binding("target");

          var targetPhxEvent = e.target.getAttribute && e.target.getAttribute(binding);

          if (targetPhxEvent && !e.target.getAttribute(bindTarget)) {
            _this7.owner(e.target, function (view) {
              _this7.debounce(e.target, e, function () {
                return callback(e, event, view, e.target, targetPhxEvent, null);
              });
            });
          } else {
            DOM.all(document, "[".concat(binding, "][").concat(bindTarget, "=window]"), function (el) {
              var phxEvent = el.getAttribute(binding);

              _this7.owner(el, function (view) {
                _this7.debounce(el, e, function () {
                  return callback(e, event, view, el, phxEvent, "window");
                });
              });
            });
          }
        });
      };

      for (var event in events) {
        _loop(event);
      }
    }
  }, {
    key: "bindNav",
    value: function bindNav() {
      var _this8 = this;

      if (!Browser.canPushState()) {
        return;
      }

      window.onpopstate = function (event) {
        if (!_this8.registerNewLocation(window.location)) {
          return;
        }

        var href = window.location.href;

        if (_this8.root.isConnected()) {
          _this8.root.pushInternalLink(href);
        } else {
          _this8.replaceRoot(href);
        }
      };

      window.addEventListener("click", function (e) {
        var target = closestPhxBinding(e.target, PHX_LIVE_LINK);
        var phxEvent = target && target.getAttribute(PHX_LIVE_LINK);

        if (!phxEvent) {
          return;
        }

        var href = target.href;
        e.preventDefault();

        _this8.root.pushInternalLink(href, function () {
          Browser.pushState(phxEvent, {}, href);

          _this8.registerNewLocation(window.location);
        });
      }, false);
    }
  }, {
    key: "registerNewLocation",
    value: function registerNewLocation(newLocation) {
      var _this$currentLocation = this.currentLocation,
          pathname = _this$currentLocation.pathname,
          search = _this$currentLocation.search;

      if (pathname + search === newLocation.pathname + newLocation.search) {
        return false;
      } else {
        this.currentLocation = clone(newLocation);
        return true;
      }
    }
  }, {
    key: "bindForms",
    value: function bindForms() {
      var _this9 = this;

      this.on("submit", function (e) {
        var phxEvent = e.target.getAttribute(_this9.binding("submit"));

        if (!phxEvent) {
          return;
        }

        e.preventDefault();
        e.target.disabled = true;

        _this9.owner(e.target, function (view) {
          return view.submitForm(e.target, phxEvent);
        });
      }, false);
      var _arr2 = ["change", "input"];

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var type = _arr2[_i2];
        this.on(type, function (e) {
          var input = e.target;
          var phxEvent = input.form && input.form.getAttribute(_this9.binding("change"));

          if (!phxEvent) {
            return;
          }

          var value = JSON.stringify(new FormData(input.form).getAll(input.name));

          if (_this9.prevInput === input && _this9.prevValue === value) {
            return;
          }

          if (input.type === "number" && input.validity && input.validity.badInput) {
            return;
          }

          _this9.prevInput = input;
          _this9.prevValue = value;

          _this9.owner(input, function (view) {
            if (DOM.isTextualInput(input)) {
              DOM.putPrivate(input, PHX_HAS_FOCUSED, true);
            } else {
              _this9.setActiveElement(input);
            }

            _this9.debounce(input, e, function () {
              return view.pushInput(input, phxEvent, e);
            });
          });
        }, false);
      }
    }
  }, {
    key: "debounce",
    value: function debounce(el, event, callback) {
      DOM.debounce(el, event, this.binding(PHX_DEBOUNCE), this.binding(PHX_THROTTLE), callback);
    }
  }, {
    key: "silenceEvents",
    value: function silenceEvents(callback) {
      this.silenced = true;
      callback();
      this.silenced = false;
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      var _this10 = this;

      window.addEventListener(event, function (e) {
        if (!_this10.silenced) {
          callback(e);
        }
      });
    }
  }]);

  return LiveSocket;
}();
var Browser = {
  canPushState: function canPushState() {
    return typeof history.pushState !== "undefined";
  },
  fetchPage: function fetchPage(href, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", href, true);
    req.timeout = PUSH_TIMEOUT;
    req.setRequestHeader("content-type", "text/html");
    req.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0");
    req.setRequestHeader(LINK_HEADER, "live-link");

    req.onerror = function () {
      return callback(400);
    };

    req.ontimeout = function () {
      return callback(504);
    };

    req.onreadystatechange = function () {
      if (req.readyState !== 4) {
        return;
      }

      if (req.getResponseHeader(LINK_HEADER) !== "live-link") {
        return callback(400);
      }

      if (req.status !== 200) {
        return callback(req.status);
      }

      callback(200, req.responseText);
    };

    req.send();
  },
  pushState: function pushState(kind, meta, to) {
    if (this.canPushState()) {
      if (to !== window.location.href) {
        history[kind + "State"](meta, "", to);
      }
    } else {
      this.redirect(to);
    }
  },
  setCookie: function setCookie(name, value) {
    document.cookie = "".concat(name, "=").concat(value);
  },
  getCookie: function getCookie(name) {
    return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(name, "s*=s*([^;]*).*$)|^.*$")), "$1");
  },
  redirect: function redirect(toURL, flash) {
    if (flash) {
      Browser.setCookie("__phoenix_flash__", flash + "; max-age=60000; path=/");
    }

    window.location = toURL;
  }
};
var DOM = {
  all: function all(node, query, callback) {
    var array = Array.from(node.querySelectorAll(query));
    return callback ? array.forEach(callback) : array;
  },
  findComponentNodeList: function findComponentNodeList(node, cid) {
    return this.all(node, "[".concat(PHX_COMPONENT, "=\"").concat(cid, "\"]"));
  },
  private: function _private(el, key) {
    return el[PHX_PRIVATE] && el[PHX_PRIVATE][key];
  },
  deletePrivate: function deletePrivate(el, key) {
    el[PHX_PRIVATE] && delete el[PHX_PRIVATE][key];
  },
  putPrivate: function putPrivate(el, key, value) {
    if (!el[PHX_PRIVATE]) {
      el[PHX_PRIVATE] = {};
    }

    el[PHX_PRIVATE][key] = value;
  },
  copyPrivates: function copyPrivates(target, source) {
    if (source[PHX_PRIVATE]) {
      target[PHX_PRIVATE] = clone(source[PHX_PRIVATE]);
    }
  },
  debounce: function debounce(el, event, phxDebounce, phxThrottle, callback) {
    var _this11 = this;

    var debounce = el.getAttribute(phxDebounce);
    var throttle = el.getAttribute(phxThrottle);
    var value = debounce || throttle;

    switch (value) {
      case null:
        return callback();

      case "blur":
        if (this.private(el, DEBOUNCE_BLUR)) {
          return;
        }

        el.addEventListener("blur", function () {
          return callback();
        });
        this.putPrivate(el, DEBOUNCE_BLUR, value);
        return;

      default:
        var timeout = parseInt(value);

        if (isNaN(timeout)) {
          return logError("invalid throttle/debounce value: ".concat(value));
        }

        if (throttle && event.type === "keydown") {
          var prevKey = this.private(el, DEBOUNCE_PREV_KEY);
          this.putPrivate(el, DEBOUNCE_PREV_KEY, event.which);

          if (prevKey !== event.which) {
            return callback();
          }
        }

        if (this.private(el, DEBOUNCE_TIMER)) {
          return;
        }

        var clearTimer = function clearTimer(e) {
          if (throttle && e.type === PHX_CHANGE && e.detail.triggeredBy.name === el.name) {
            return;
          }

          clearTimeout(_this11.private(el, DEBOUNCE_TIMER));

          _this11.deletePrivate(el, DEBOUNCE_TIMER);
        };

        this.putPrivate(el, DEBOUNCE_TIMER, setTimeout(function () {
          if (el.form) {
            el.form.removeEventListener(PHX_CHANGE, clearTimer);
            el.form.removeEventListener("submit", clearTimer);
          }

          _this11.deletePrivate(el, DEBOUNCE_TIMER);

          if (!throttle) {
            callback();
          }
        }, timeout));

        if (el.form) {
          el.form.addEventListener(PHX_CHANGE, clearTimer);
          el.form.addEventListener("submit", clearTimer);
        }

        if (throttle) {
          callback();
        }

    }
  },
  disableForm: function disableForm(form, prefix) {
    var disableWith = "".concat(prefix).concat(PHX_DISABLE_WITH);
    form.classList.add(PHX_LOADING_CLASS);
    DOM.all(form, "[".concat(disableWith, "]"), function (el) {
      var value = el.getAttribute(disableWith);
      el.setAttribute("".concat(disableWith, "-restore"), el.innerText);
      el.innerText = value;
    });
    DOM.all(form, "button", function (button) {
      button.setAttribute(PHX_DISABLED, button.disabled);
      button.disabled = true;
    });
    DOM.all(form, "input", function (input) {
      input.setAttribute(PHX_READONLY, input.readOnly);
      input.readOnly = true;
    });
  },
  restoreDisabledForm: function restoreDisabledForm(form, prefix) {
    var disableWith = "".concat(prefix).concat(PHX_DISABLE_WITH);
    form.classList.remove(PHX_LOADING_CLASS);
    DOM.all(form, "[".concat(disableWith, "]"), function (el) {
      var value = el.getAttribute("".concat(disableWith, "-restore"));

      if (value) {
        if (el.nodeName === "INPUT") {
          el.value = value;
        } else {
          el.innerText = value;
        }

        el.removeAttribute("".concat(disableWith, "-restore"));
      }
    });
    DOM.all(form, "button", function (button) {
      var prev = button.getAttribute(PHX_DISABLED);

      if (prev) {
        button.disabled = prev === "true";
        button.removeAttribute(PHX_DISABLED);
      }
    });
    DOM.all(form, "input", function (input) {
      var prev = input.getAttribute(PHX_READONLY);

      if (prev) {
        input.readOnly = prev === "true";
        input.removeAttribute(PHX_READONLY);
      }
    });
  },
  discardError: function discardError(container, el) {
    var field = el.getAttribute && el.getAttribute(PHX_ERROR_FOR);

    if (!field) {
      return;
    }

    var input = container.querySelector("#".concat(field));

    if (field && !(this.private(input, PHX_HAS_FOCUSED) || this.private(input.form, PHX_HAS_SUBMITTED))) {
      el.style.display = "none";
    }
  },
  isPhxChild: function isPhxChild(node) {
    return node.getAttribute && node.getAttribute(PHX_PARENT_ID);
  },
  patch: function patch(view, container, id, html, targetCID) {
    var changes = {
      added: [],
      updated: [],
      discarded: [],
      phxChildrenAdded: []
    };
    var focused = view.liveSocket.getActiveElement();

    var _ref = focused && DOM.isTextualInput(focused) ? focused : {},
        selectionStart = _ref.selectionStart,
        selectionEnd = _ref.selectionEnd;

    var phxUpdate = view.liveSocket.binding(PHX_UPDATE);

    var _this$buildDiffContai = this.buildDiffContainer(container, html, phxUpdate, targetCID),
        _this$buildDiffContai2 = _slicedToArray(_this$buildDiffContai, 2),
        diffContainer = _this$buildDiffContai2[0],
        targetContainer = _this$buildDiffContai2[1];

    Object(morphdom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetContainer, diffContainer.outerHTML, {
      childrenOnly: true,
      onBeforeNodeAdded: function onBeforeNodeAdded(el) {
        //input handling
        DOM.discardError(targetContainer, el);
        return el;
      },
      onNodeAdded: function onNodeAdded(el) {
        // nested view handling
        if (DOM.isPhxChild(el) && view.ownsElement(el)) {
          changes.phxChildrenAdded.push(el);
        }

        changes.added.push(el);
      },
      onNodeDiscarded: function onNodeDiscarded(el) {
        changes.discarded.push(el);
      },
      onBeforeNodeDiscarded: function onBeforeNodeDiscarded(el) {
        // nested view handling
        if (DOM.isPhxChild(el)) {
          view.liveSocket.destroyViewByEl(el);
          return true;
        }
      },
      onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
        if (fromEl.getAttribute(phxUpdate) === "ignore") {
          DOM.mergeAttrs(fromEl, toEl);
          changes.updated.push({
            fromEl: fromEl,
            toEl: fromEl
          });
          return false;
        }

        if (fromEl.type === "number" && fromEl.validity && fromEl.validity.badInput) {
          return false;
        } // nested view handling


        if (DOM.isPhxChild(toEl)) {
          var prevStatic = fromEl.getAttribute(PHX_STATIC);
          DOM.mergeAttrs(fromEl, toEl);
          fromEl.setAttribute(PHX_STATIC, prevStatic);
          return false;
        } // input handling


        DOM.copyPrivates(toEl, fromEl);
        DOM.discardError(targetContainer, toEl);

        if (DOM.isTextualInput(fromEl) && fromEl === focused) {
          DOM.mergeInputs(fromEl, toEl);
          changes.updated.push({
            fromEl: fromEl,
            toEl: fromEl
          });
          return false;
        } else {
          changes.updated.push({
            fromEl: fromEl,
            toEl: toEl
          });
          return true;
        }
      }
    });
    view.liveSocket.silenceEvents(function () {
      return DOM.restoreFocus(focused, selectionStart, selectionEnd);
    });
    DOM.dispatchEvent(document, "phx:update");
    return changes;
  },
  dispatchEvent: function dispatchEvent(target, eventString) {
    var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var event = new CustomEvent(eventString, {
      bubbles: true,
      cancelable: true,
      detail: detail
    });
    target.dispatchEvent(event);
  },
  cloneNode: function cloneNode(node, html) {
    var cloned = node.cloneNode();
    cloned.innerHTML = html || node.innerHTML;
    return cloned;
  },
  // builds container for morphdom patch
  // - precomputes append/prepend content in diff node to make it appear as if
  //   the contents had been appended/prepended on full child node list
  // - precomputes updates on existing child ids within a prepend/append child list
  //   to allow existing nodes to be updated in place rather than reordered
  buildDiffContainer: function buildDiffContainer(container, html, phxUpdate, targetCID) {
    var _this12 = this;

    var targetContainer = container;
    var diffContainer = null;

    var elementsOnly = function elementsOnly(child) {
      return child.nodeType === Node.ELEMENT_NODE;
    };

    var idsOnly = function idsOnly(child) {
      return child.id || logError("append/prepend children require IDs, got: ", child);
    };

    if (typeof targetCID === "number") {
      targetContainer = container.querySelector("[".concat(PHX_COMPONENT, "=\"").concat(targetCID, "\"]")).parentNode;
      diffContainer = this.cloneNode(targetContainer);
      var componentNodes = this.findComponentNodeList(diffContainer, targetCID);
      var prevSibling = componentNodes[0].previousSibling;
      componentNodes.forEach(function (c) {
        return c.remove();
      });
      var nextSibling = prevSibling && prevSibling.nextSibling;

      if (prevSibling && nextSibling) {
        var template = document.createElement("template");
        template.innerHTML = html;
        Array.from(template.content.childNodes).forEach(function (child) {
          return diffContainer.insertBefore(child, nextSibling);
        });
      } else if (prevSibling) {
        diffContainer.insertAdjacentHTML("beforeend", html);
      } else {
        diffContainer.insertAdjacentHTML("afterbegin", html);
      }
    } else {
      diffContainer = this.cloneNode(container, html);
    }

    DOM.all(diffContainer, "[".concat(phxUpdate, "=append],[").concat(phxUpdate, "=prepend]"), function (el) {
      var id = el.id || logError("append/prepend requires an ID, got: ", el);
      var existingInContainer = container.querySelector("#".concat(id));

      if (!existingInContainer) {
        return;
      }

      var existing = _this12.cloneNode(existingInContainer);

      var updateType = el.getAttribute(phxUpdate);
      var newIds = Array.from(el.childNodes).filter(elementsOnly).map(idsOnly);
      var existingIds = Array.from(existing.childNodes).filter(elementsOnly).map(idsOnly);

      if (newIds.toString() !== existingIds.toString()) {
        var dupIds = newIds.filter(function (id) {
          return existingIds.indexOf(id) >= 0;
        });
        dupIds.forEach(function (id) {
          var updatedEl = el.querySelector("#".concat(id));
          existing.querySelector("#".concat(id)).replaceWith(updatedEl);
        });
        el.insertAdjacentHTML(updateType === "append" ? "afterbegin" : "beforeend", existing.innerHTML);
      }
    });
    return [diffContainer, targetContainer];
  },
  mergeAttrs: function mergeAttrs(target, source) {
    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var attrs = source.attributes;

    for (var i = 0, length = attrs.length; i < length; i++) {
      var name = attrs[i].name;

      if (exclude.indexOf(name) < 0) {
        target.setAttribute(name, source.getAttribute(name));
      }
    }
  },
  mergeInputs: function mergeInputs(target, source) {
    DOM.mergeAttrs(target, source, ["value"]);
    target.readOnly = source.readOnly;
  },
  restoreFocus: function restoreFocus(focused, selectionStart, selectionEnd) {
    if (!DOM.isTextualInput(focused)) {
      return;
    }

    if (focused.value === "" || focused.readOnly) {
      focused.blur();
    }

    focused.focus();

    if (focused.setSelectionRange && focused.type === "text" || focused.type === "textarea") {
      focused.setSelectionRange(selectionStart, selectionEnd);
    }
  },
  isTextualInput: function isTextualInput(el) {
    return FOCUSABLE_INPUTS.indexOf(el.type) >= 0;
  }
};
var View =
/*#__PURE__*/
function () {
  function View(el, liveSocket, parentView, href) {
    var _this13 = this;

    _classCallCheck(this, View);

    this.liveSocket = liveSocket;
    this.parent = parentView;
    this.gracefullyClosed = false;
    this.el = el;
    this.id = this.el.id;
    this.view = this.el.getAttribute(PHX_VIEW);
    this.loaderTimer = null;
    this.pendingDiffs = [];
    this.modifiers = [];
    this.href = href;
    this.joinedOnce = false;
    this.viewHooks = {};
    this.channel = this.liveSocket.channel("lv:".concat(this.id), function () {
      return {
        url: _this13.href || _this13.liveSocket.root.href,
        params: _this13.liveSocket.params(_this13.view),
        session: _this13.getSession(),
        static: _this13.getStatic()
      };
    });
    this.showLoader(LOADER_TIMEOUT);
    this.bindChannel();
  }

  _createClass(View, [{
    key: "isConnected",
    value: function isConnected() {
      return this.channel.canPush();
    }
  }, {
    key: "getSession",
    value: function getSession() {
      return this.el.getAttribute(PHX_SESSION);
    }
  }, {
    key: "getStatic",
    value: function getStatic() {
      var val = this.el.getAttribute(PHX_STATIC);
      return val === "" ? null : val;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this14 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      clearTimeout(this.loaderTimer);

      var onFinished = function onFinished() {
        callback();

        for (var id in _this14.viewHooks) {
          _this14.destroyHook(_this14.viewHooks[id]);
        }
      };

      if (this.hasGracefullyClosed()) {
        this.log("destroyed", function () {
          return ["the server view has gracefully closed"];
        });
        onFinished();
      } else {
        this.log("destroyed", function () {
          return ["the child has been removed from the parent"];
        });
        this.channel.leave().receive("ok", onFinished).receive("error", onFinished).receive("timeout", onFinished);
      }

      this.cleanupClickModifiers();
    }
  }, {
    key: "setContainerClasses",
    value: function setContainerClasses() {
      var _this$el$classList;

      this.el.classList.remove(PHX_CONNECTED_CLASS, PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);

      (_this$el$classList = this.el.classList).add.apply(_this$el$classList, arguments);
    }
  }, {
    key: "cleanupClickModifiers",
    value: function cleanupClickModifiers() {
      this.modifiers.forEach(function (mod) {
        return mod.destroy();
      });
      this.modifiers = [];
    }
  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.el.classList.contains(PHX_DISCONNECTED_CLASS);
    }
  }, {
    key: "showLoader",
    value: function showLoader(timeout) {
      var _this15 = this;

      clearTimeout(this.loaderTimer);

      if (timeout) {
        this.loaderTimer = setTimeout(function () {
          return _this15.showLoader();
        }, timeout);
      } else {
        for (var id in this.viewHooks) {
          this.viewHooks[id].__trigger__("disconnected");
        }

        this.setContainerClasses(PHX_DISCONNECTED_CLASS);
      }
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      clearTimeout(this.loaderTimer);

      for (var id in this.viewHooks) {
        this.viewHooks[id].__trigger__("reconnected");
      }

      this.setContainerClasses(PHX_CONNECTED_CLASS);
    }
  }, {
    key: "log",
    value: function log(kind, msgCallback) {
      this.liveSocket.log(this, kind, msgCallback);
    }
  }, {
    key: "onJoin",
    value: function onJoin(_ref2) {
      var rendered = _ref2.rendered,
          live_redirect = _ref2.live_redirect;
      this.log("join", function () {
        return ["", JSON.stringify(rendered)];
      });
      this.rendered = rendered;
      this.hideLoader();
      var changes = DOM.patch(this, this.el, this.id, Rendered.toString(this.rendered));
      changes.added.push(this.el);
      DOM.all(this.el, "[".concat(this.binding(PHX_HOOK), "]"), function (hookEl) {
        return changes.added.push(hookEl);
      });
      this.triggerHooks(changes);
      this.bindClicks();
      this.joinNewChildren();

      if (live_redirect) {
        var kind = live_redirect.kind,
            to = live_redirect.to;
        Browser.pushState(kind, {}, to);
      }
    }
  }, {
    key: "joinNewChildren",
    value: function joinNewChildren() {
      var _this16 = this;

      DOM.all(document, "".concat(PHX_VIEW_SELECTOR, "[").concat(PHX_PARENT_ID, "=\"").concat(this.id, "\"]"), function (el) {
        var child = _this16.liveSocket.getViewByEl(el);

        if (!child) {
          _this16.liveSocket.joinView(el, _this16);
        }
      });
    }
  }, {
    key: "update",
    value: function update(diff, cid) {
      if (isEmpty(diff)) {
        return;
      }

      if (this.liveSocket.hasPendingLink()) {
        return this.pendingDiffs.push({
          diff: diff,
          cid: cid
        });
      }

      this.log("update", function () {
        return ["", JSON.stringify(diff)];
      });
      this.rendered = Rendered.mergeDiff(this.rendered, diff);
      var html = typeof cid === "number" ? Rendered.componentToString(this.rendered[COMPONENTS], cid) : Rendered.toString(this.rendered);
      var changes = DOM.patch(this, this.el, this.id, html, cid);

      if (changes.phxChildrenAdded.length > 0) {
        this.joinNewChildren();
      }

      this.triggerHooks(changes);
      this.bindClicks();
    }
  }, {
    key: "getHook",
    value: function getHook(el) {
      return this.viewHooks[ViewHook.elementID(el)];
    }
  }, {
    key: "addHook",
    value: function addHook(el) {
      if (ViewHook.elementID(el) || !el.getAttribute) {
        return;
      }

      var hookName = el.getAttribute(this.binding(PHX_HOOK));

      if (hookName && !this.ownsElement(el)) {
        return;
      }

      var callbacks = this.liveSocket.getHookCallbacks(hookName);

      if (callbacks) {
        var hook = new ViewHook(this, el, callbacks);
        this.viewHooks[ViewHook.elementID(hook.el)] = hook;

        hook.__trigger__("mounted");
      } else if (hookName !== null) {
        logError("unknown hook found for \"".concat(hookName, "\""), el);
      }
    }
  }, {
    key: "destroyHook",
    value: function destroyHook(hook) {
      hook.__trigger__("destroyed");

      delete this.viewHooks[ViewHook.elementID(hook.el)];
    }
  }, {
    key: "triggerHooks",
    value: function triggerHooks(changes) {
      var _this17 = this;

      var destroyedCIDs = [];
      changes.updated.push({
        fromEl: this.el,
        toEl: this.el
      });
      changes.added.forEach(function (el) {
        return _this17.addHook(el);
      });
      changes.updated.forEach(function (_ref3) {
        var fromEl = _ref3.fromEl,
            toEl = _ref3.toEl;

        var hook = _this17.getHook(fromEl);

        var phxAttr = _this17.binding(PHX_HOOK);

        if (hook && toEl.getAttribute && fromEl.getAttribute(phxAttr) === toEl.getAttribute(phxAttr)) {
          hook.__trigger__("updated");
        } else if (hook) {
          _this17.destroyHook(hook);

          _this17.addHook(fromEl);
        }
      });
      changes.discarded.forEach(function (el) {
        var cid = _this17.componentID(el);

        if (typeof cid === "number" && destroyedCIDs.indexOf(cid) === -1) {
          destroyedCIDs.push(cid);
        }

        var hook = _this17.getHook(el);

        hook && _this17.destroyHook(hook);
      });
      this.maybePushComponentsDestroyed(destroyedCIDs);
    }
  }, {
    key: "applyPendingUpdates",
    value: function applyPendingUpdates() {
      var _this18 = this;

      this.pendingDiffs.forEach(function (_ref4) {
        var diff = _ref4.diff,
            cid = _ref4.cid;
        return _this18.update(diff, cid);
      });
      this.pendingDiffs = [];
    }
  }, {
    key: "bindChannel",
    value: function bindChannel() {
      var _this19 = this;

      this.channel.on("diff", function (diff) {
        return _this19.update(diff);
      });
      this.channel.on("redirect", function (_ref5) {
        var to = _ref5.to,
            flash = _ref5.flash;
        return _this19.onRedirect({
          to: to,
          flash: flash
        });
      });
      this.channel.on("live_redirect", function (_ref6) {
        var to = _ref6.to,
            kind = _ref6.kind;
        return _this19.onLiveRedirect({
          to: to,
          kind: kind
        });
      });
      this.channel.on("external_live_redirect", function (_ref7) {
        var to = _ref7.to,
            kind = _ref7.kind;
        return _this19.onExternalLiveRedirect({
          to: to,
          kind: kind
        });
      });
      this.channel.on("session", function (_ref8) {
        var token = _ref8.token;
        return _this19.el.setAttribute(PHX_SESSION, token);
      });
      this.channel.onError(function (reason) {
        return _this19.onError(reason);
      });
      this.channel.onClose(function () {
        return _this19.onGracefulClose();
      });
    }
  }, {
    key: "bindClicks",
    value: function bindClicks() {
      this.cleanupClickModifiers();
      var treeWalker = document.createTreeWalker(this.el, NodeFilter.SHOW_ELEMENT);
      var el;

      while (el = treeWalker.nextNode()) {
        if (el.getAttribute('phx-click')) {
          var modifier = new _click_modifier__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
            eventName: 'click',
            callback: callback.bind(this),
            options: {}
          });
          modifier.install();
          this.modifiers.push(modifier);
        }
      }

      function callback(e) {
        var _this20 = this;

        var click = this.binding("click");
        var target = e.target;
        var phxEvent = target && target.getAttribute(click);

        if (!phxEvent) {
          return;
        }

        e.stopPropagation();
        var meta = {
          altKey: e.altKey,
          shiftKey: e.shiftKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          x: e.x || e.clientX,
          y: e.y || e.clientY,
          pageX: e.pageX,
          pageY: e.pageY,
          screenX: e.screenX,
          screenY: e.screenY
        };
        this.liveSocket.owner(target, function (view) {
          _this20.liveSocket.debounce(target, e, function () {
            return _this20.pushEvent("click", target, phxEvent, meta);
          });
        });
      }
    }
  }, {
    key: "onGracefulClose",
    value: function onGracefulClose() {
      this.gracefullyClosed = true;
      this.liveSocket.destroyViewById(this.id);
    }
  }, {
    key: "onExternalLiveRedirect",
    value: function onExternalLiveRedirect(_ref9) {
      var to = _ref9.to,
          kind = _ref9.kind;
      this.liveSocket.replaceRoot(to, function () {
        return Browser.pushState(kind, {}, to);
      });
    }
  }, {
    key: "onLiveRedirect",
    value: function onLiveRedirect(_ref10) {
      var to = _ref10.to,
          kind = _ref10.kind;
      this.href = to;
      Browser.pushState(kind, {}, to);
    }
  }, {
    key: "onRedirect",
    value: function onRedirect(_ref11) {
      var to = _ref11.to,
          flash = _ref11.flash;
      Browser.redirect(to, flash);
    }
  }, {
    key: "hasGracefullyClosed",
    value: function hasGracefullyClosed() {
      return this.gracefullyClosed;
    }
  }, {
    key: "join",
    value: function join(callback) {
      var _this21 = this;

      if (this.parent) {
        this.parent.channel.onClose(function () {
          return _this21.onGracefulClose();
        });
        this.parent.channel.onError(function () {
          return _this21.liveSocket.destroyViewById(_this21.id);
        });
      }

      this.channel.join().receive("ok", function (data) {
        if (!_this21.joinedOnce) {
          callback && callback(_this21);
        }

        _this21.joinedOnce = true;

        _this21.onJoin(data);
      }).receive("error", function (resp) {
        return _this21.onJoinError(resp);
      }).receive("timeout", function () {
        return _this21.onJoinError("timeout");
      });
    }
  }, {
    key: "onJoinError",
    value: function onJoinError(resp) {
      if (resp.reason === CLIENT_OUTDATED) {
        return this.liveSocket.reloadWithJitter();
      }

      if (resp.redirect || resp.external_live_redirect) {
        this.channel.leave();
      }

      if (resp.redirect) {
        return this.onRedirect(resp.redirect);
      }

      if (resp.external_live_redirect) {
        return this.onExternalLiveRedirect(resp.external_live_redirect);
      }

      this.displayError();
      this.log("error", function () {
        return ["unable to join", resp];
      });
    }
  }, {
    key: "onError",
    value: function onError(reason) {
      this.log("error", function () {
        return ["view crashed", reason];
      });
      this.liveSocket.onViewError(this);
      document.activeElement.blur();

      if (this.liveSocket.isUnloaded()) {
        this.showLoader(BEFORE_UNLOAD_LOADER_TIMEOUT);
      } else {
        this.displayError();
      }
    }
  }, {
    key: "displayError",
    value: function displayError() {
      this.showLoader();
      this.setContainerClasses(PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
    }
  }, {
    key: "pushWithReply",
    value: function pushWithReply(event, payload) {
      var _this22 = this;

      var onReply = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      if (typeof payload.cid !== "number") {
        delete payload.cid;
      }

      return this.channel.push(event, payload, PUSH_TIMEOUT).receive("ok", function (resp) {
        if (resp.diff) {
          _this22.update(resp.diff, payload.cid);
        }

        if (resp.redirect) {
          _this22.onRedirect(resp.redirect);
        }

        if (resp.live_redirect) {
          _this22.onLiveRedirect(resp.live_redirect);
        }

        if (resp.external_live_redirect) {
          _this22.onExternalLiveRedirect(resp.external_live_redirect);
        }

        onReply(resp);
      });
    }
  }, {
    key: "componentID",
    value: function componentID(el) {
      var cid = el.getAttribute && el.getAttribute(PHX_COMPONENT);
      return cid ? parseInt(cid) : null;
    }
  }, {
    key: "targetComponentID",
    value: function targetComponentID(target) {
      var _this23 = this;

      return maybe(target.closest("[".concat(PHX_COMPONENT, "]")), function (el) {
        return _this23.ownsElement(el) && _this23.componentID(el);
      });
    }
  }, {
    key: "pushEvent",
    value: function pushEvent(type, el, phxEvent, meta) {
      var prefix = this.binding("value-");

      for (var i = 0; i < el.attributes.length; i++) {
        var name = el.attributes[i].name;

        if (name.startsWith(prefix)) {
          meta[name.replace(prefix, "")] = el.getAttribute(name);
        }
      }

      if (el.value !== undefined) {
        meta.value = el.value;
      }

      this.pushWithReply("event", {
        type: type,
        event: phxEvent,
        value: meta,
        cid: this.targetComponentID(el)
      });
    }
  }, {
    key: "pushKey",
    value: function pushKey(keyElement, kind, phxEvent, meta) {
      if (keyElement.value !== undefined) {
        meta.value = keyElement.value;
      }

      this.pushWithReply("event", {
        type: kind,
        event: phxEvent,
        value: meta,
        cid: this.targetComponentID(keyElement)
      });
    }
  }, {
    key: "pushInput",
    value: function pushInput(inputEl, phxEvent, e) {
      DOM.dispatchEvent(inputEl.form, PHX_CHANGE, {
        triggeredBy: inputEl
      });
      this.pushWithReply("event", {
        type: "form",
        event: phxEvent,
        value: serializeForm(inputEl.form, {
          _target: e.target.name
        }),
        cid: this.targetComponentID(inputEl)
      });
    }
  }, {
    key: "pushFormSubmit",
    value: function pushFormSubmit(formEl, phxEvent, onReply) {
      this.pushWithReply("event", {
        type: "form",
        event: phxEvent,
        value: serializeForm(formEl),
        cid: this.targetComponentID(formEl)
      }, onReply);
    }
  }, {
    key: "pushInternalLink",
    value: function pushInternalLink(href, callback) {
      var _this24 = this;

      if (!this.isLoading()) {
        this.showLoader(LOADER_TIMEOUT);
      }

      var linkRef = this.liveSocket.setPendingLink(href);
      this.pushWithReply("link", {
        url: href
      }, function (resp) {
        if (resp.link_redirect) {
          _this24.liveSocket.replaceRoot(href, callback, linkRef);
        } else if (_this24.liveSocket.commitPendingLink(linkRef)) {
          _this24.href = href;

          _this24.applyPendingUpdates();

          _this24.hideLoader();

          callback && callback();
        }
      }).receive("timeout", function () {
        return Browser.redirect(window.location.href);
      });
    }
  }, {
    key: "maybePushComponentsDestroyed",
    value: function maybePushComponentsDestroyed(destroyedCIDs) {
      var _this25 = this;

      var completelyDestroyedCIDs = destroyedCIDs.filter(function (cid) {
        return DOM.findComponentNodeList(_this25.el, cid).length === 0;
      });

      if (completelyDestroyedCIDs.length > 0) {
        this.pushWithReply("cids_destroyed", {
          cids: completelyDestroyedCIDs
        }, function () {
          _this25.rendered = Rendered.pruneCIDs(_this25.rendered, completelyDestroyedCIDs);
        });
      }
    }
  }, {
    key: "ownsElement",
    value: function ownsElement(el) {
      return el.getAttribute(PHX_PARENT_ID) === this.id || maybe(el.closest(PHX_VIEW_SELECTOR), function (node) {
        return node.id;
      }) === this.id;
    }
  }, {
    key: "submitForm",
    value: function submitForm(form, phxEvent) {
      var _this26 = this;

      var prefix = this.liveSocket.getBindingPrefix();
      DOM.putPrivate(form, PHX_HAS_SUBMITTED, true);
      DOM.disableForm(form, prefix);
      this.liveSocket.blurActiveElement(this);
      this.pushFormSubmit(form, phxEvent, function () {
        DOM.restoreDisabledForm(form, prefix);

        _this26.liveSocket.restorePreviouslyActiveFocus();
      });
    }
  }, {
    key: "binding",
    value: function binding(kind) {
      return this.liveSocket.binding(kind);
    }
  }]);

  return View;
}();
var viewHookID = 1;

var ViewHook =
/*#__PURE__*/
function () {
  _createClass(ViewHook, null, [{
    key: "makeID",
    value: function makeID() {
      return viewHookID++;
    }
  }, {
    key: "elementID",
    value: function elementID(el) {
      return el.phxHookId;
    }
  }]);

  function ViewHook(view, el, callbacks) {
    _classCallCheck(this, ViewHook);

    this.__view = view;
    this.__callbacks = callbacks;
    this.el = el;
    this.viewName = view.view;
    this.el.phxHookId = this.constructor.makeID();

    for (var key in this.__callbacks) {
      this[key] = this.__callbacks[key];
    }
  }

  _createClass(ViewHook, [{
    key: "pushEvent",
    value: function pushEvent(event) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.__view.pushWithReply("event", {
        type: "hook",
        event: event,
        value: payload
      });
    }
  }, {
    key: "__trigger__",
    value: function __trigger__(kind) {
      var callback = this.__callbacks[kind];
      callback && callback.call(this);
    }
  }]);

  return ViewHook;
}();

/* harmony default export */ __webpack_exports__["default"] = (LiveSocket);

/***/ }),

/***/ "./node_modules/morphdom/dist/morphdom-esm.js":
/*!****************************************************!*\
  !*** ./node_modules/morphdom/dist/morphdom-esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    // update attributes on original DOM element
    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            fromValue = fromNode.getAttribute(attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;

            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;

                if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                    fromNode.removeAttributeNS(attrNamespaceURI, attrName);
                }
            } else {
                if (!toNode.hasAttribute(attrName)) {
                    fromNode.removeAttribute(attrName);
                }
            }
        }
    }
}

var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';

var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();

function createFragmentFromTemplate(str) {
    var template = doc.createElement('template');
    template.innerHTML = str;
    return template.content.childNodes[0];
}

function createFragmentFromRange(str) {
    if (!range) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var fragment = range.createContextualFragment(str);
    return fragment.childNodes[0];
}

function createFragmentFromWrap(str) {
    var fragment = doc.createElement('body');
    fragment.innerHTML = str;
    return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
    if (HAS_TEMPLATE_SUPPORT) {
      // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
      // createContextualFragment doesn't support
      // <template> support not available in IE
      return createFragmentFromTemplate(str);
    } else if (HAS_RANGE_SUPPORT) {
      return createFragmentFromRange(str);
    }

    return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;

    if (fromNodeName === toNodeName) {
        return true;
    }

    if (toEl.actualize &&
        fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
        toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
        // If the target element is a virtual DOM node then we may need to normalize the tag name
        // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
        // are converted to upper case
        return fromNodeName === toNodeName.toUpperCase();
    } else {
        return false;
    }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ?
        doc.createElement(name) :
        doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) {
            fromEl.setAttribute(name, '');
        } else {
            fromEl.removeAttribute(name);
        }
    }
}

var specialElHandlers = {
    OPTION: function(fromEl, toEl) {
        var parentNode = fromEl.parentNode;
        if (parentNode) {
            var parentName = parentNode.nodeName.toUpperCase();
            if (parentName === 'OPTGROUP') {
                parentNode = parentNode.parentNode;
                parentName = parentNode && parentNode.nodeName.toUpperCase();
            }
            if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
                if (fromEl.hasAttribute('selected') && !toEl.selected) {
                    // Workaround for MS Edge bug where the 'selected' attribute can only be
                    // removed if set to a non-empty value:
                    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
                    fromEl.setAttribute('selected', 'selected');
                    fromEl.removeAttribute('selected');
                }
                // We have to reset select element's selectedIndex to -1, otherwise setting
                // fromEl.selected using the syncBooleanAttrProp below has no effect.
                // The correct selectedIndex will be set in the SELECT special handler below.
                parentNode.selectedIndex = -1;
            }
        }
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!toEl.hasAttribute('value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        var firstChild = fromEl.firstChild;
        if (firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            var oldValue = firstChild.nodeValue;

            if (oldValue == newValue || (!newValue && oldValue == fromEl.placeholder)) {
                return;
            }

            firstChild.nodeValue = newValue;
        }
    },
    SELECT: function(fromEl, toEl) {
        if (!toEl.hasAttribute('multiple')) {
            var selectedIndex = -1;
            var i = 0;
            // We have to loop through children of fromEl, not toEl since nodes can be moved
            // from toEl to fromEl directly when morphing.
            // At the time this special handler is invoked, all children have already been morphed
            // and appended to / removed from fromEl, so using fromEl here is safe and correct.
            var curChild = fromEl.firstChild;
            var optgroup;
            var nodeName;
            while(curChild) {
                nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
                if (nodeName === 'OPTGROUP') {
                    optgroup = curChild;
                    curChild = optgroup.firstChild;
                } else {
                    if (nodeName === 'OPTION') {
                        if (curChild.hasAttribute('selected')) {
                            selectedIndex = i;
                            break;
                        }
                        i++;
                    }
                    curChild = curChild.nextSibling;
                    if (!curChild && optgroup) {
                        curChild = optgroup.nextSibling;
                        optgroup = null;
                    }
                }
            }

            fromEl.selectedIndex = selectedIndex;
        }
    }
};

var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdomFactory(morphAttrs) {

    return function morphdom(fromNode, toNode, options) {
        if (!options) {
            options = {};
        }

        if (typeof toNode === 'string') {
            if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
                var toNodeHtml = toNode;
                toNode = doc.createElement('html');
                toNode.innerHTML = toNodeHtml;
            } else {
                toNode = toElement(toNode);
            }
        }

        var getNodeKey = options.getNodeKey || defaultGetNodeKey;
        var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
        var onNodeAdded = options.onNodeAdded || noop;
        var onBeforeElUpdated = options.onBeforeElUpdated || noop;
        var onElUpdated = options.onElUpdated || noop;
        var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
        var onNodeDiscarded = options.onNodeDiscarded || noop;
        var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
        var childrenOnly = options.childrenOnly === true;

        // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
        var fromNodesLookup = {};
        var keyedRemovalList;

        function addKeyedRemoval(key) {
            if (keyedRemovalList) {
                keyedRemovalList.push(key);
            } else {
                keyedRemovalList = [key];
            }
        }

        function walkDiscardedChildNodes(node, skipKeyedNodes) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {

                    var key = undefined;

                    if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                        // If we are skipping keyed nodes then we add the key
                        // to a list so that it can be handled at the very end.
                        addKeyedRemoval(key);
                    } else {
                        // Only report the node as discarded if it is not keyed. We do this because
                        // at the end we loop through all keyed elements that were unmatched
                        // and then discard them in one final pass.
                        onNodeDiscarded(curChild);
                        if (curChild.firstChild) {
                            walkDiscardedChildNodes(curChild, skipKeyedNodes);
                        }
                    }

                    curChild = curChild.nextSibling;
                }
            }
        }

        /**
         * Removes a DOM node out of the original DOM
         *
         * @param  {Node} node The node to remove
         * @param  {Node} parentNode The nodes parent
         * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
         * @return {undefined}
         */
        function removeNode(node, parentNode, skipKeyedNodes) {
            if (onBeforeNodeDiscarded(node) === false) {
                return;
            }

            if (parentNode) {
                parentNode.removeChild(node);
            }

            onNodeDiscarded(node);
            walkDiscardedChildNodes(node, skipKeyedNodes);
        }

        // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
        // function indexTree(root) {
        //     var treeWalker = document.createTreeWalker(
        //         root,
        //         NodeFilter.SHOW_ELEMENT);
        //
        //     var el;
        //     while((el = treeWalker.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
        //
        // function indexTree(node) {
        //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
        //     var el;
        //     while((el = nodeIterator.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        function indexTree(node) {
            if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {
                    var key = getNodeKey(curChild);
                    if (key) {
                        fromNodesLookup[key] = curChild;
                    }

                    // Walk recursively
                    indexTree(curChild);

                    curChild = curChild.nextSibling;
                }
            }
        }

        indexTree(fromNode);

        function handleNodeAdded(el) {
            onNodeAdded(el);

            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var unmatchedFromEl = fromNodesLookup[key];
                    if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                        curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                        morphEl(unmatchedFromEl, curChild);
                    }
                }

                handleNodeAdded(curChild);
                curChild = nextSibling;
            }
        }

        function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while (curFromNodeChild) {
                var fromNextSibling = curFromNodeChild.nextSibling;
                if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                    // Since the node is keyed it might be matched up later so we defer
                    // the actual removal to later
                    addKeyedRemoval(curFromNodeKey);
                } else {
                    // NOTE: we skip nested keyed nodes from being removed since there is
                    //       still a chance they will be matched up later
                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                }
                curFromNodeChild = fromNextSibling;
            }
        }

        function morphEl(fromEl, toEl, childrenOnly) {
            var toElKey = getNodeKey(toEl);

            if (toElKey) {
                // If an element with an ID is being morphed then it will be in the final
                // DOM so clear it out of the saved elements collection
                delete fromNodesLookup[toElKey];
            }

            if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
                return;
            }

            if (!childrenOnly) {
                // optional
                if (onBeforeElUpdated(fromEl, toEl) === false) {
                    return;
                }

                // update attributes on original DOM element first
                morphAttrs(fromEl, toEl);
                // optional
                onElUpdated(fromEl);

                if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                    return;
                }
            }
            if (fromEl.nodeName !== 'TEXTAREA') {
              morphChildren(fromEl, toEl);
            } else {
              specialElHandlers.TEXTAREA(fromEl, toEl);
            }
        }

        function morphChildren(fromEl, toEl) {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeKey;
            var curFromNodeKey;

            var fromNextSibling;
            var toNextSibling;
            var matchingFromEl;

            // walk the children
            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeKey = getNodeKey(curToNodeChild);

                // walk the fromNode children all the way through
                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    curFromNodeKey = getNodeKey(curFromNodeChild);

                    var curFromNodeType = curFromNodeChild.nodeType;

                    // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
                    var isCompatible = undefined;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        if (curFromNodeType === ELEMENT_NODE) {
                            // Both nodes being compared are Element nodes

                            if (curToNodeKey) {
                                // The target node has a key so we want to match it up with the correct element
                                // in the original DOM tree
                                if (curToNodeKey !== curFromNodeKey) {
                                    // The current element in the original DOM tree does not have a matching key so
                                    // let's check our lookup to see if there is a matching element in the original
                                    // DOM tree
                                    if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                        if (fromNextSibling === matchingFromEl) {
                                            // Special case for single element removals. To avoid removing the original
                                            // DOM node out of the tree (since that can break CSS transitions, etc.),
                                            // we will instead discard the current node and wait until the next
                                            // iteration to properly match up the keyed target element with its matching
                                            // element in the original tree
                                            isCompatible = false;
                                        } else {
                                            // We found a matching keyed element somewhere in the original DOM tree.
                                            // Let's move the original DOM node into the current position and morph
                                            // it.

                                            // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                            // the `removeNode()` function for the node that is being discarded so that
                                            // all lifecycle hooks are correctly invoked
                                            fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                            // fromNextSibling = curFromNodeChild.nextSibling;

                                            if (curFromNodeKey) {
                                                // Since the node is keyed it might be matched up later so we defer
                                                // the actual removal to later
                                                addKeyedRemoval(curFromNodeKey);
                                            } else {
                                                // NOTE: we skip nested keyed nodes from being removed since there is
                                                //       still a chance they will be matched up later
                                                removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                            }

                                            curFromNodeChild = matchingFromEl;
                                        }
                                    } else {
                                        // The nodes are not compatible since the "to" node has a key and there
                                        // is no matching keyed node in the source tree
                                        isCompatible = false;
                                    }
                                }
                            } else if (curFromNodeKey) {
                                // The original has a key
                                isCompatible = false;
                            }

                            isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                            if (isCompatible) {
                                // We found compatible DOM elements so transform
                                // the current "from" node to match the current
                                // target DOM node.
                                // MORPH
                                morphEl(curFromNodeChild, curToNodeChild);
                            }

                        } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                            // Both nodes being compared are Text or Comment nodes
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                            }

                        }
                    }

                    if (isCompatible) {
                        // Advance both the "to" child and the "from" child since we found a match
                        // Nothing else to do as we already recursively called morphChildren above
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    // No compatible match so remove the old node from the DOM and continue trying to find a
                    // match in the original DOM. However, we only do this if the from node is not keyed
                    // since it is possible that a keyed node might match up with a node somewhere else in the
                    // target tree and we don't want to discard it just yet since it still might find a
                    // home in the final DOM tree. After everything is done we will remove any keyed nodes
                    // that didn't find a home
                    if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }

                    curFromNodeChild = fromNextSibling;
                } // END: while(curFromNodeChild) {}

                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to" node
                // to the end
                if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                    fromEl.appendChild(matchingFromEl);
                    // MORPH
                    morphEl(matchingFromEl, curToNodeChild);
                } else {
                    var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                    if (onBeforeNodeAddedResult !== false) {
                        if (onBeforeNodeAddedResult) {
                            curToNodeChild = onBeforeNodeAddedResult;
                        }

                        if (curToNodeChild.actualize) {
                            curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                        }
                        fromEl.appendChild(curToNodeChild);
                        handleNodeAdded(curToNodeChild);
                    }
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);

            var specialElHandler = specialElHandlers[fromEl.nodeName];
            if (specialElHandler) {
                specialElHandler(fromEl, toEl);
            }
        } // END: morphChildren(...)

        var morphedNode = fromNode;
        var morphedNodeType = morphedNode.nodeType;
        var toNodeType = toNode.nodeType;

        if (!childrenOnly) {
            // Handle the case where we are given two DOM nodes that are not
            // compatible (e.g. <div> --> <span> or <div> --> TEXT)
            if (morphedNodeType === ELEMENT_NODE) {
                if (toNodeType === ELEMENT_NODE) {
                    if (!compareNodeNames(fromNode, toNode)) {
                        onNodeDiscarded(fromNode);
                        morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                    }
                } else {
                    // Going from an element node to a text node
                    morphedNode = toNode;
                }
            } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
                if (toNodeType === morphedNodeType) {
                    if (morphedNode.nodeValue !== toNode.nodeValue) {
                        morphedNode.nodeValue = toNode.nodeValue;
                    }

                    return morphedNode;
                } else {
                    // Text node to something else
                    morphedNode = toNode;
                }
            }
        }

        if (morphedNode === toNode) {
            // The "to node" was not compatible with the "from node" so we had to
            // toss out the "from node" and use the "to node"
            onNodeDiscarded(fromNode);
        } else {
            morphEl(morphedNode, toNode, childrenOnly);

            // We now need to loop over any keyed nodes that might need to be
            // removed. We only do the removal if we know that the keyed node
            // never found a match. When a keyed node is matched up we remove
            // it out of fromNodesLookup and we use fromNodesLookup to determine
            // if a keyed node has been matched up or not
            if (keyedRemovalList) {
                for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                    var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                    if (elToRemove) {
                        removeNode(elToRemove, elToRemove.parentNode, false);
                    }
                }
            }
        }

        if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
            if (morphedNode.actualize) {
                morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
            }
            // If we had to swap out the from node with a new node because the old
            // node was not compatible with the target node then we need to
            // replace the old DOM node in the original DOM tree. This is only
            // possible if the original DOM node was part of a DOM tree which
            // we know is the case if it has a parent node.
            fromNode.parentNode.replaceChild(morphedNode, fromNode);
        }

        return morphedNode;
    };
}

var morphdom = morphdomFactory(morphAttrs);

/* harmony default export */ __webpack_exports__["default"] = (morphdom);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG9lbml4X2xpdmVfdmlldy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGhvZW5peF9saXZlX3ZpZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhvZW5peF9saXZlX3ZpZXcvLi9qcy9jbGljay1tb2RpZmllci5qcyIsIndlYnBhY2s6Ly9waG9lbml4X2xpdmVfdmlldy8uL2pzL3Bob2VuaXhfbGl2ZV92aWV3LmpzLWV4cG9zZWQiLCJ3ZWJwYWNrOi8vcGhvZW5peF9saXZlX3ZpZXcvLi9qcy9waG9lbml4X2xpdmVfdmlldy5qcyIsIndlYnBhY2s6Ly9waG9lbml4X2xpdmVfdmlldy8uL25vZGVfbW9kdWxlcy9tb3JwaGRvbS9kaXN0L21vcnBoZG9tLWVzbS5qcyIsIndlYnBhY2s6Ly9waG9lbml4X2xpdmVfdmlldy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiQ2xpY2tNb2RpZmllciIsImVsZW1lbnQiLCJhcmdzIiwiZXZlbnROYW1lIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDTElFTlRfT1VUREFURUQiLCJSRUxPQURfSklUVEVSIiwiUEhYX1ZJRVciLCJQSFhfQ09NUE9ORU5UIiwiUEhYX0xJVkVfTElOSyIsIlBIWF9DT05ORUNURURfQ0xBU1MiLCJQSFhfTE9BRElOR19DTEFTUyIsIlBIWF9ESVNDT05ORUNURURfQ0xBU1MiLCJQSFhfRVJST1JfQ0xBU1MiLCJQSFhfUEFSRU5UX0lEIiwiUEhYX1ZJRVdfU0VMRUNUT1IiLCJQSFhfRVJST1JfRk9SIiwiUEhYX0hBU19GT0NVU0VEIiwiRk9DVVNBQkxFX0lOUFVUUyIsIlBIWF9IQVNfU1VCTUlUVEVEIiwiUEhYX1NFU1NJT04iLCJQSFhfU1RBVElDIiwiUEhYX1JFQURPTkxZIiwiUEhYX0RJU0FCTEVEIiwiUEhYX0RJU0FCTEVfV0lUSCIsIlBIWF9IT09LIiwiUEhYX0RFQk9VTkNFIiwiUEhYX1RIUk9UVExFIiwiUEhYX0NIQU5HRSIsIlBIWF9VUERBVEUiLCJQSFhfUFJJVkFURSIsIkxPQURFUl9USU1FT1VUIiwiQkVGT1JFX1VOTE9BRF9MT0FERVJfVElNRU9VVCIsIkJJTkRJTkdfUFJFRklYIiwiUFVTSF9USU1FT1VUIiwiTElOS19IRUFERVIiLCJERUJPVU5DRV9CTFVSIiwiREVCT1VOQ0VfVElNRVIiLCJERUJPVU5DRV9QUkVWX0tFWSIsIkRZTkFNSUNTIiwiU1RBVElDIiwiQ09NUE9ORU5UUyIsImxvZ0Vycm9yIiwibXNnIiwib2JqIiwiY29uc29sZSIsImVycm9yIiwiZGVidWciLCJ2aWV3Iiwia2luZCIsImxvZyIsImlkIiwiY2xvc3VyZSIsInZhbCIsImNsb25lIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY2xvc2VzdFBoeEJpbmRpbmciLCJlbCIsImJpbmRpbmciLCJtYXRjaGVzIiwicGFyZW50RWxlbWVudCIsInBhcmVudE5vZGUiLCJub2RlVHlwZSIsImlzT2JqZWN0IiwiQXJyYXkiLCJpc0VtcHR5IiwieCIsIm1heWJlIiwic2VyaWFsaXplRm9ybSIsImZvcm0iLCJtZXRhIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImVudHJpZXMiLCJrZXkiLCJhcHBlbmQiLCJtZXRhS2V5IiwidG9TdHJpbmciLCJyZWN1cnNpdmVNZXJnZSIsInRhcmdldCIsInNvdXJjZSIsInRhcmdldFZhbCIsIlJlbmRlcmVkIiwibWVyZ2VEaWZmIiwiZGlmZiIsImlzTmV3RmluZ2VycHJpbnQiLCJjb21wb25lbnRUb1N0cmluZyIsImNvbXBvbmVudHMiLCJjaWQiLCJjb21wb25lbnQiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJmcm9tIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZCIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJzZXRBdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJ0cmltIiwicmVtb3ZlIiwicmVuZGVyZWQiLCJvdXRwdXQiLCJidWZmZXIiLCJ0b091dHB1dEJ1ZmZlciIsImNvbXByZWhlbnNpb25Ub0J1ZmZlciIsInN0YXRpY3MiLCJpIiwibGVuZ3RoIiwiZHluYW1pY1RvQnVmZmVyIiwiZHluYW1pY3MiLCJkIiwiZHluYW1pYyIsInBydW5lQ0lEcyIsImNpZHMiLCJMaXZlU29ja2V0IiwidXJsIiwicGh4U29ja2V0Iiwib3B0cyIsInVubG9hZGVkIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiRXJyb3IiLCJzb2NrZXQiLCJiaW5kaW5nUHJlZml4Iiwidmlld3MiLCJ2aWV3TG9nZ2VyIiwiYWN0aXZlRWxlbWVudCIsInByZXZBY3RpdmUiLCJwcmV2SW5wdXQiLCJwcmV2VmFsdWUiLCJzaWxlbmNlZCIsInJvb3QiLCJsaW5rUmVmIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGVuZGluZ0xpbmsiLCJjdXJyZW50TG9jYXRpb24iLCJob29rcyIsIm9uT3BlbiIsImlzVW5sb2FkZWQiLCJkZXN0cm95QWxsVmlld3MiLCJqb2luUm9vdFZpZXdzIiwiZSIsImJpbmRUb3BMZXZlbEV2ZW50cyIsIm1zZ0NhbGxiYWNrIiwiaW5kZXhPZiIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwiZGlzY29ubmVjdCIsIm1pbk1zIiwibWF4TXMiLCJhZnRlck1zIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsInJlbG9hZCIsImhvb2tOYW1lIiwiZ2V0QmluZGluZ1ByZWZpeCIsInRvcGljIiwiY2hhbm5lbCIsIkRPTSIsImFsbCIsInJvb3RFbCIsImpvaW5WaWV3IiwiZ2V0SHJlZiIsInNldFBlbmRpbmdMaW5rIiwic2hvd0xvYWRlciIsInJvb3RJRCIsIndhc0xvYWRpbmciLCJpc0xvYWRpbmciLCJCcm93c2VyIiwiZmV0Y2hQYWdlIiwic3RhdHVzIiwiaHRtbCIsInJlZGlyZWN0IiwiZGl2IiwiZmlyc3RDaGlsZCIsIm5ld1Jvb3QiLCJjb21taXRQZW5kaW5nTGluayIsImRlc3Ryb3kiLCJkZXN0cm95Vmlld0J5SWQiLCJyZXBsYWNlV2l0aCIsInBhcmVudFZpZXciLCJnZXRWaWV3QnlFbCIsIlZpZXciLCJqb2luIiwiY2hpbGRFbCIsImNsb3Nlc3QiLCJkcm9wQWN0aXZlRWxlbWVudCIsImNhbmNlbCIsImJvZHkiLCJvd25zRWxlbWVudCIsImZvY3VzIiwiZ2V0QWN0aXZlRWxlbWVudCIsImJsdXIiLCJiaW5kTmF2IiwiYmluZEZvcm1zIiwiYmluZFRhcmdldGFibGUiLCJrZXl1cCIsImtleWRvd24iLCJ0eXBlIiwicGh4RXZlbnQiLCJwaHhUYXJnZXQiLCJwdXNoS2V5IiwiYWx0R3JhcGhLZXkiLCJhbHRLZXkiLCJjaGFyQ29kZSIsImNvZGUiLCJjdHJsS2V5Iiwia2V5Q29kZSIsImtleUlkZW50aWZpZXIiLCJrZXlMb2NhdGlvbiIsInJlcGVhdCIsInNoaWZ0S2V5Iiwid2hpY2giLCJ0YXJnZXRFbCIsInB1c2hFdmVudCIsInJlZiIsImV2ZW50cyIsImV2ZW50IiwiYnJvd3NlckV2ZW50TmFtZSIsIm9uIiwiYmluZFRhcmdldCIsInRhcmdldFBoeEV2ZW50IiwiZ2V0QXR0cmlidXRlIiwib3duZXIiLCJkZWJvdW5jZSIsImNhblB1c2hTdGF0ZSIsIm9ucG9wc3RhdGUiLCJyZWdpc3Rlck5ld0xvY2F0aW9uIiwiaXNDb25uZWN0ZWQiLCJwdXNoSW50ZXJuYWxMaW5rIiwicmVwbGFjZVJvb3QiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hTdGF0ZSIsIm5ld0xvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJkaXNhYmxlZCIsInN1Ym1pdEZvcm0iLCJpbnB1dCIsInZhbHVlIiwiZ2V0QWxsIiwidmFsaWRpdHkiLCJiYWRJbnB1dCIsImlzVGV4dHVhbElucHV0IiwicHV0UHJpdmF0ZSIsInNldEFjdGl2ZUVsZW1lbnQiLCJwdXNoSW5wdXQiLCJoaXN0b3J5IiwicmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwidGltZW91dCIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmVycm9yIiwib250aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwidG8iLCJzZXRDb29raWUiLCJjb29raWUiLCJnZXRDb29raWUiLCJyZXBsYWNlIiwiUmVnRXhwIiwidG9VUkwiLCJmbGFzaCIsIm5vZGUiLCJxdWVyeSIsImFycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImZpbmRDb21wb25lbnROb2RlTGlzdCIsInByaXZhdGUiLCJkZWxldGVQcml2YXRlIiwiY29weVByaXZhdGVzIiwicGh4RGVib3VuY2UiLCJwaHhUaHJvdHRsZSIsInRocm90dGxlIiwicGFyc2VJbnQiLCJpc05hTiIsInByZXZLZXkiLCJjbGVhclRpbWVyIiwiZGV0YWlsIiwidHJpZ2dlcmVkQnkiLCJjbGVhclRpbWVvdXQiLCJkaXNhYmxlRm9ybSIsInByZWZpeCIsImRpc2FibGVXaXRoIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiYnV0dG9uIiwicmVhZE9ubHkiLCJyZXN0b3JlRGlzYWJsZWRGb3JtIiwibm9kZU5hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcmV2IiwiZGlzY2FyZEVycm9yIiwiZmllbGQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiaXNQaHhDaGlsZCIsInBhdGNoIiwidGFyZ2V0Q0lEIiwiY2hhbmdlcyIsImFkZGVkIiwidXBkYXRlZCIsImRpc2NhcmRlZCIsInBoeENoaWxkcmVuQWRkZWQiLCJmb2N1c2VkIiwibGl2ZVNvY2tldCIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwicGh4VXBkYXRlIiwiYnVpbGREaWZmQ29udGFpbmVyIiwiZGlmZkNvbnRhaW5lciIsInRhcmdldENvbnRhaW5lciIsIm1vcnBoZG9tIiwib3V0ZXJIVE1MIiwiY2hpbGRyZW5Pbmx5Iiwib25CZWZvcmVOb2RlQWRkZWQiLCJvbk5vZGVBZGRlZCIsInB1c2giLCJvbk5vZGVEaXNjYXJkZWQiLCJvbkJlZm9yZU5vZGVEaXNjYXJkZWQiLCJkZXN0cm95Vmlld0J5RWwiLCJvbkJlZm9yZUVsVXBkYXRlZCIsImZyb21FbCIsInRvRWwiLCJtZXJnZUF0dHJzIiwicHJldlN0YXRpYyIsIm1lcmdlSW5wdXRzIiwic2lsZW5jZUV2ZW50cyIsInJlc3RvcmVGb2N1cyIsImRpc3BhdGNoRXZlbnQiLCJldmVudFN0cmluZyIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjbG9uZU5vZGUiLCJjbG9uZWQiLCJlbGVtZW50c09ubHkiLCJpZHNPbmx5IiwiY29tcG9uZW50Tm9kZXMiLCJwcmV2U2libGluZyIsInByZXZpb3VzU2libGluZyIsImMiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsImluc2VydEFkamFjZW50SFRNTCIsImV4aXN0aW5nSW5Db250YWluZXIiLCJleGlzdGluZyIsInVwZGF0ZVR5cGUiLCJuZXdJZHMiLCJmaWx0ZXIiLCJtYXAiLCJleGlzdGluZ0lkcyIsImR1cElkcyIsInVwZGF0ZWRFbCIsImV4Y2x1ZGUiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInBhcmVudCIsImdyYWNlZnVsbHlDbG9zZWQiLCJsb2FkZXJUaW1lciIsInBlbmRpbmdEaWZmcyIsIm1vZGlmaWVycyIsImpvaW5lZE9uY2UiLCJ2aWV3SG9va3MiLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInN0YXRpYyIsImdldFN0YXRpYyIsImJpbmRDaGFubmVsIiwiY2FuUHVzaCIsIm9uRmluaXNoZWQiLCJkZXN0cm95SG9vayIsImhhc0dyYWNlZnVsbHlDbG9zZWQiLCJsZWF2ZSIsInJlY2VpdmUiLCJjbGVhbnVwQ2xpY2tNb2RpZmllcnMiLCJtb2QiLCJjb250YWlucyIsIl9fdHJpZ2dlcl9fIiwic2V0Q29udGFpbmVyQ2xhc3NlcyIsImxpdmVfcmVkaXJlY3QiLCJoaWRlTG9hZGVyIiwiaG9va0VsIiwidHJpZ2dlckhvb2tzIiwiYmluZENsaWNrcyIsImpvaW5OZXdDaGlsZHJlbiIsImhhc1BlbmRpbmdMaW5rIiwiVmlld0hvb2siLCJlbGVtZW50SUQiLCJjYWxsYmFja3MiLCJnZXRIb29rQ2FsbGJhY2tzIiwiaG9vayIsImRlc3Ryb3llZENJRHMiLCJhZGRIb29rIiwiZ2V0SG9vayIsInBoeEF0dHIiLCJjb21wb25lbnRJRCIsIm1heWJlUHVzaENvbXBvbmVudHNEZXN0cm95ZWQiLCJ1cGRhdGUiLCJvblJlZGlyZWN0Iiwib25MaXZlUmVkaXJlY3QiLCJvbkV4dGVybmFsTGl2ZVJlZGlyZWN0IiwidG9rZW4iLCJvbkVycm9yIiwicmVhc29uIiwib25DbG9zZSIsIm9uR3JhY2VmdWxDbG9zZSIsInRyZWVXYWxrZXIiLCJjcmVhdGVUcmVlV2Fsa2VyIiwiTm9kZUZpbHRlciIsIlNIT1dfRUxFTUVOVCIsIm5leHROb2RlIiwibW9kaWZpZXIiLCJiaW5kIiwiaW5zdGFsbCIsImNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwicGFnZVgiLCJwYWdlWSIsInNjcmVlblgiLCJzY3JlZW5ZIiwiZGF0YSIsIm9uSm9pbiIsInJlc3AiLCJvbkpvaW5FcnJvciIsInJlbG9hZFdpdGhKaXR0ZXIiLCJleHRlcm5hbF9saXZlX3JlZGlyZWN0IiwiZGlzcGxheUVycm9yIiwib25WaWV3RXJyb3IiLCJwYXlsb2FkIiwib25SZXBseSIsInN0YXJ0c1dpdGgiLCJ1bmRlZmluZWQiLCJwdXNoV2l0aFJlcGx5IiwidGFyZ2V0Q29tcG9uZW50SUQiLCJrZXlFbGVtZW50IiwiaW5wdXRFbCIsIl90YXJnZXQiLCJmb3JtRWwiLCJsaW5rX3JlZGlyZWN0IiwiYXBwbHlQZW5kaW5nVXBkYXRlcyIsImNvbXBsZXRlbHlEZXN0cm95ZWRDSURzIiwiYmx1ckFjdGl2ZUVsZW1lbnQiLCJwdXNoRm9ybVN1Ym1pdCIsInJlc3RvcmVQcmV2aW91c2x5QWN0aXZlRm9jdXMiLCJ2aWV3SG9va0lEIiwicGh4SG9va0lkIiwiX192aWV3IiwiX19jYWxsYmFja3MiLCJ2aWV3TmFtZSIsIm1ha2VJRCIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbkVxQkEsYTs7O0FBQ25CLHlCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUFBLHVCQUNvQyxLQUFLQSxJQUR6QztBQUFBLFVBQ0ZDLFNBREUsY0FDRkEsU0FERTtBQUFBLFVBQ1NDLFFBRFQsY0FDU0EsUUFEVDtBQUFBLDBDQUNtQkMsT0FEbkI7QUFBQSxVQUNtQkEsT0FEbkIsbUNBQzZCLEVBRDdCO0FBRVIsV0FBS0osT0FBTCxDQUFhSyxnQkFBYixDQUE4QkgsU0FBOUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxPQUFuRDtBQUNEOzs7OEJBRVM7QUFBQSx3QkFDc0MsS0FBS0gsSUFEM0M7QUFBQSxVQUNBQyxTQURBLGVBQ0FBLFNBREE7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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBSztBQUN6QixvQkFBb0IsS0FBSztBQUN6QixvQkFBb0IsUUFBUTtBQUM1QixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOEVBQThFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELE9BQU87QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7O0FDL3RCeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6InBob2VuaXhfbGl2ZV92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGhvZW5peF9saXZlX3ZpZXdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGhvZW5peF9saXZlX3ZpZXdcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9waG9lbml4X2xpdmVfdmlldy5qcy1leHBvc2VkXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpY2tNb2RpZmllciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGFyZ3MpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gIH1cblxuICBpbnN0YWxsKCkge1xuICAgIGxldCB7IGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSB9ID0gdGhpcy5hcmdzO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB7IGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSB9ID0gdGhpcy5hcmdzO1xuXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0aW9ucylcbiAgfVxufVxuIiwiaWYoIWdsb2JhbFtcIlBob2VuaXhcIl0pIGdsb2JhbFtcIlBob2VuaXhcIl0gPSB7fTtcbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wiUGhvZW5peFwiXVtcIkxpdmVWaWV3XCJdID0gcmVxdWlyZShcIi0hL1VzZXJzL3NuZXdjb21lci9HaXRodWIvcGhvZW5peF9saXZlX3ZpZXcvYXNzZXRzL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vcGhvZW5peF9saXZlX3ZpZXcuanNcIik7IiwiLypcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5QaG9lbml4IExpdmVWaWV3IEphdmFTY3JpcHQgQ2xpZW50XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5TZWUgdGhlIGhleGRvY3MgYXQgYGh0dHBzOi8vaGV4ZG9jcy5wbS9waG9lbml4X2xpdmVfdmlld2AgZm9yIGRvY3VtZW50YXRpb24uXG5cbiovXG5cbmltcG9ydCBtb3JwaGRvbSBmcm9tIFwibW9ycGhkb21cIlxuaW1wb3J0IENsaWNrTW9kaWZpZXIgZnJvbSBcIi4vY2xpY2stbW9kaWZpZXJcIlxuXG5jb25zdCBDTElFTlRfT1VUREFURUQgPSBcIm91dGRhdGVkXCJcbmNvbnN0IFJFTE9BRF9KSVRURVIgPSBbMTAwMCwgMTAwMDBdXG5jb25zdCBQSFhfVklFVyA9IFwiZGF0YS1waHgtdmlld1wiXG5jb25zdCBQSFhfQ09NUE9ORU5UID0gXCJkYXRhLXBoeC1jb21wb25lbnRcIlxuY29uc3QgUEhYX0xJVkVfTElOSyA9IFwiZGF0YS1waHgtbGl2ZS1saW5rXCJcbmNvbnN0IFBIWF9DT05ORUNURURfQ0xBU1MgPSBcInBoeC1jb25uZWN0ZWRcIlxuY29uc3QgUEhYX0xPQURJTkdfQ0xBU1MgPSBcInBoeC1sb2FkaW5nXCJcbmNvbnN0IFBIWF9ESVNDT05ORUNURURfQ0xBU1MgPSBcInBoeC1kaXNjb25uZWN0ZWRcIlxuY29uc3QgUEhYX0VSUk9SX0NMQVNTID0gXCJwaHgtZXJyb3JcIlxuY29uc3QgUEhYX1BBUkVOVF9JRCA9IFwiZGF0YS1waHgtcGFyZW50LWlkXCJcbmNvbnN0IFBIWF9WSUVXX1NFTEVDVE9SID0gYFske1BIWF9WSUVXfV1gXG5jb25zdCBQSFhfRVJST1JfRk9SID0gXCJkYXRhLXBoeC1lcnJvci1mb3JcIlxuY29uc3QgUEhYX0hBU19GT0NVU0VEID0gXCJwaHgtaGFzLWZvY3VzZWRcIlxuY29uc3QgRk9DVVNBQkxFX0lOUFVUUyA9IFtcInRleHRcIiwgXCJ0ZXh0YXJlYVwiLCBcIm51bWJlclwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIiwgXCJzZWFyY2hcIiwgXCJ0ZWxcIiwgXCJ1cmxcIl1cbmNvbnN0IFBIWF9IQVNfU1VCTUlUVEVEID0gXCJwaHgtaGFzLXN1Ym1pdHRlZFwiXG5jb25zdCBQSFhfU0VTU0lPTiA9IFwiZGF0YS1waHgtc2Vzc2lvblwiXG5jb25zdCBQSFhfU1RBVElDID0gXCJkYXRhLXBoeC1zdGF0aWNcIlxuY29uc3QgUEhYX1JFQURPTkxZID0gXCJkYXRhLXBoeC1yZWFkb25seVwiXG5jb25zdCBQSFhfRElTQUJMRUQgPSBcImRhdGEtcGh4LWRpc2FibGVkXCJcbmNvbnN0IFBIWF9ESVNBQkxFX1dJVEggPSBcImRpc2FibGUtd2l0aFwiXG5jb25zdCBQSFhfSE9PSyA9IFwiaG9va1wiXG5jb25zdCBQSFhfREVCT1VOQ0UgPSBcImRlYm91bmNlXCJcbmNvbnN0IFBIWF9USFJPVFRMRSA9IFwidGhyb3R0bGVcIlxuY29uc3QgUEhYX0NIQU5HRSA9IFwicGh4LWNoYW5nZVwiXG5jb25zdCBQSFhfVVBEQVRFID0gXCJ1cGRhdGVcIlxuY29uc3QgUEhYX1BSSVZBVEUgPSBcInBoeFByaXZhdGVcIlxuY29uc3QgTE9BREVSX1RJTUVPVVQgPSAxXG5jb25zdCBCRUZPUkVfVU5MT0FEX0xPQURFUl9USU1FT1VUID0gMjAwXG5jb25zdCBCSU5ESU5HX1BSRUZJWCA9IFwicGh4LVwiXG5jb25zdCBQVVNIX1RJTUVPVVQgPSAzMDAwMFxuY29uc3QgTElOS19IRUFERVIgPSBcIngtcmVxdWVzdGVkLXdpdGhcIlxuY29uc3QgREVCT1VOQ0VfQkxVUiA9IFwiZGVib3VuY2UtYmx1clwiXG5jb25zdCBERUJPVU5DRV9USU1FUiA9IFwiZGVib3VuY2UtdGltZXJcIlxuY29uc3QgREVCT1VOQ0VfUFJFVl9LRVkgPSBcImRlYm91bmNlLXByZXYta2V5XCJcbi8vIFJlbmRlcmVkXG5jb25zdCBEWU5BTUlDUyA9IFwiZFwiXG5jb25zdCBTVEFUSUMgPSBcInNcIlxuY29uc3QgQ09NUE9ORU5UUyA9IFwiY1wiXG5cbmxldCBsb2dFcnJvciA9IChtc2csIG9iaikgPT4gY29uc29sZS5lcnJvciAmJiBjb25zb2xlLmVycm9yKG1zZywgb2JqKVxuXG5leHBvcnQgbGV0IGRlYnVnID0gKHZpZXcsIGtpbmQsIG1zZywgb2JqKSA9PiB7XG4gIGNvbnNvbGUubG9nKGAke3ZpZXcuaWR9ICR7a2luZH06ICR7bXNnfSAtIGAsIG9iailcbn1cblxuLy8gd3JhcHMgdmFsdWUgaW4gY2xvc3VyZSBvciByZXR1cm5zIGNsb3N1cmVcbmxldCBjbG9zdXJlID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiID8gdmFsIDogZnVuY3Rpb24oKXsgcmV0dXJuIHZhbCB9XG5cbmxldCBjbG9uZSA9IChvYmopID0+IHsgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSkgfVxuXG5sZXQgY2xvc2VzdFBoeEJpbmRpbmcgPSAoZWwsIGJpbmRpbmcpID0+IHtcbiAgZG8ge1xuICAgIGlmKGVsLm1hdGNoZXMoYFske2JpbmRpbmd9XWApKXsgcmV0dXJuIGVsIH1cbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZVxuICB9IHdoaWxlKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxICYmICFlbC5tYXRjaGVzKFBIWF9WSUVXX1NFTEVDVE9SKSlcbiAgcmV0dXJuIG51bGxcbn1cblxubGV0IGlzT2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgIShvYmogaW5zdGFuY2VvZiBBcnJheSlcbn1cblxubGV0IGlzRW1wdHkgPSAob2JqKSA9PiB7XG4gIGZvciAobGV0IHggaW4gb2JqKXsgcmV0dXJuIGZhbHNlIH1cbiAgcmV0dXJuIHRydWVcbn1cblxubGV0IG1heWJlID0gKGVsLCBjYWxsYmFjaykgPT4gZWwgJiYgY2FsbGJhY2soZWwpXG5cbmxldCBzZXJpYWxpemVGb3JtID0gKGZvcm0sIG1ldGEgPSB7fSkgPT4ge1xuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBmb3IobGV0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEuZW50cmllcygpKXsgcGFyYW1zLmFwcGVuZChrZXksIHZhbCkgfVxuICBmb3IobGV0IG1ldGFLZXkgaW4gbWV0YSl7IHBhcmFtcy5hcHBlbmQobWV0YUtleSwgbWV0YVttZXRhS2V5XSkgfVxuXG4gIHJldHVybiBwYXJhbXMudG9TdHJpbmcoKVxufVxuXG5sZXQgcmVjdXJzaXZlTWVyZ2UgPSAodGFyZ2V0LCBzb3VyY2UpID0+IHtcbiAgZm9yKGxldCBrZXkgaW4gc291cmNlKXtcbiAgICBsZXQgdmFsID0gc291cmNlW2tleV1cbiAgICBsZXQgdGFyZ2V0VmFsID0gdGFyZ2V0W2tleV1cbiAgICBpZihpc09iamVjdCh2YWwpICYmIGlzT2JqZWN0KHRhcmdldFZhbCkpe1xuICAgICAgaWYodGFyZ2V0VmFsW0RZTkFNSUNTXSAmJiAhdmFsW0RZTkFNSUNTXSl7IGRlbGV0ZSB0YXJnZXRWYWxbRFlOQU1JQ1NdIH1cbiAgICAgIHJlY3Vyc2l2ZU1lcmdlKHRhcmdldFZhbCwgdmFsKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbGV0IFJlbmRlcmVkID0ge1xuICBtZXJnZURpZmYoc291cmNlLCBkaWZmKXtcbiAgICBpZighZGlmZltDT01QT05FTlRTXSAmJiB0aGlzLmlzTmV3RmluZ2VycHJpbnQoZGlmZikpe1xuICAgICAgcmV0dXJuIGRpZmZcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjdXJzaXZlTWVyZ2Uoc291cmNlLCBkaWZmKVxuICAgICAgcmV0dXJuIHNvdXJjZVxuICAgIH1cbiAgfSxcblxuICBpc05ld0ZpbmdlcnByaW50KGRpZmYgPSB7fSl7IHJldHVybiAhIWRpZmZbU1RBVElDXSB9LFxuXG4gIGNvbXBvbmVudFRvU3RyaW5nKGNvbXBvbmVudHMsIGNpZCl7XG4gICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY2lkXSB8fCBsb2dFcnJvcihgbm8gY29tcG9uZW50IGZvciBDSUQgJHtjaWR9YCwgY29tcG9uZW50cylcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIilcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLnRvU3RyaW5nKGNvbXBvbmVudCwgY29tcG9uZW50cylcbiAgICBsZXQgY29udGFpbmVyID0gdGVtcGxhdGUuY29udGVudFxuICAgIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKXtcbiAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKFBIWF9DT01QT05FTlQsIGNpZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKGNoaWxkLm5vZGVWYWx1ZS50cmltKCkgIT09IFwiXCIpe1xuICAgICAgICAgIGxvZ0Vycm9yKGBvbmx5IEhUTUwgZWxlbWVudCB0YWdzIGFyZSBhbGxvd2VkIGF0IHRoZSByb290IG9mIGNvbXBvbmVudHMuXFxuXFxuYCArXG4gICAgICAgICAgICAgICAgICAgYGdvdDogXCIke2NoaWxkLm5vZGVWYWx1ZS50cmltKCl9XCJcXG5cXG5gICtcbiAgICAgICAgICAgICAgICAgICBgd2l0aGluOlxcbmAsIHRlbXBsYXRlLmlubmVySFRNTC50cmltKCkpXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQucmVtb3ZlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlLmlubmVySFRNTFxuICB9LFxuXG5cbiAgdG9TdHJpbmcocmVuZGVyZWQsIGNvbXBvbmVudHMgPSByZW5kZXJlZFtDT01QT05FTlRTXSB8fCB7fSl7XG4gICAgbGV0IG91dHB1dCA9IHtidWZmZXI6IFwiXCIsIGNvbXBvbmVudHM6IGNvbXBvbmVudHN9XG4gICAgdGhpcy50b091dHB1dEJ1ZmZlcihyZW5kZXJlZCwgb3V0cHV0KVxuICAgIHJldHVybiBvdXRwdXQuYnVmZmVyXG4gIH0sXG5cbiAgdG9PdXRwdXRCdWZmZXIocmVuZGVyZWQsIG91dHB1dCl7XG4gICAgaWYocmVuZGVyZWRbRFlOQU1JQ1NdKXsgcmV0dXJuIHRoaXMuY29tcHJlaGVuc2lvblRvQnVmZmVyKHJlbmRlcmVkLCBvdXRwdXQpIH1cbiAgICBsZXQge1tTVEFUSUNdOiBzdGF0aWNzfSA9IHJlbmRlcmVkXG5cbiAgICBvdXRwdXQuYnVmZmVyICs9IHN0YXRpY3NbMF1cbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgc3RhdGljcy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmR5bmFtaWNUb0J1ZmZlcihyZW5kZXJlZFtpIC0gMV0sIG91dHB1dClcbiAgICAgIG91dHB1dC5idWZmZXIgKz0gc3RhdGljc1tpXVxuICAgIH1cbiAgfSxcblxuICBjb21wcmVoZW5zaW9uVG9CdWZmZXIocmVuZGVyZWQsIG91dHB1dCl7XG4gICAgbGV0IHtbRFlOQU1JQ1NdOiBkeW5hbWljcywgW1NUQVRJQ106IHN0YXRpY3N9ID0gcmVuZGVyZWRcblxuICAgIGZvcihsZXQgZCA9IDA7IGQgPCBkeW5hbWljcy5sZW5ndGg7IGQrKyl7XG4gICAgICBsZXQgZHluYW1pYyA9IGR5bmFtaWNzW2RdXG4gICAgICBvdXRwdXQuYnVmZmVyICs9IHN0YXRpY3NbMF1cbiAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBzdGF0aWNzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5keW5hbWljVG9CdWZmZXIoZHluYW1pY1tpIC0gMV0sIG91dHB1dClcbiAgICAgICAgb3V0cHV0LmJ1ZmZlciArPSBzdGF0aWNzW2ldXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGR5bmFtaWNUb0J1ZmZlcihyZW5kZXJlZCwgb3V0cHV0KXtcbiAgICBpZih0eXBlb2YocmVuZGVyZWQpID09PSBcIm51bWJlclwiKXtcbiAgICAgIG91dHB1dC5idWZmZXIgKz0gdGhpcy5jb21wb25lbnRUb1N0cmluZyhvdXRwdXQuY29tcG9uZW50cywgcmVuZGVyZWQpXG4gICB9IGVsc2UgaWYoaXNPYmplY3QocmVuZGVyZWQpKXtcbiAgICAgIHRoaXMudG9PdXRwdXRCdWZmZXIocmVuZGVyZWQsIG91dHB1dClcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LmJ1ZmZlciArPSByZW5kZXJlZFxuICAgIH1cbiAgfSxcblxuICBwcnVuZUNJRHMocmVuZGVyZWQsIGNpZHMpe1xuICAgIGNpZHMuZm9yRWFjaChjaWQgPT4gZGVsZXRlIHJlbmRlcmVkW0NPTVBPTkVOVFNdW2NpZF0pXG4gICAgcmV0dXJuIHJlbmRlcmVkXG4gIH1cbn1cblxuLyoqIEluaXRpYWxpemVzIHRoZSBMaXZlU29ja2V0XG4gKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmRQb2ludCAtIFRoZSBzdHJpbmcgV2ViU29ja2V0IGVuZHBvaW50LCBpZSwgYFwid3NzOi8vZXhhbXBsZS5jb20vbGl2ZVwiYCxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXCIvbGl2ZVwiYCAoaW5oZXJpdGVkIGhvc3QgJiBwcm90b2NvbClcbiAqIEBwYXJhbSB7UGhvZW5peC5Tb2NrZXR9IHNvY2tldCAtIHRoZSByZXF1aXJlZCBQaG9lbml4IFNvY2tldCBjbGFzcyBpbXBvcnRlZCBmcm9tIFwicGhvZW5peFwiLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiAgICAgaW1wb3J0IHtTb2NrZXR9IGZyb20gXCJwaG9lbml4XCJcbiAqICAgICBpbXBvcnQge0xpdmVTb2NrZXR9IGZyb20gXCJwaG9lbml4X2xpdmVfdmlld1wiXG4gKiAgICAgbGV0IGxpdmVTb2NrZXQgPSBuZXcgTGl2ZVNvY2tldChcIi9saXZlXCIsIFNvY2tldCwgey4uLn0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSAtIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24uIE91dHNpZGUgb2Yga2V5cyBsaXN0ZWQgYmVsb3csIGFsbFxuICogY29uZmlndXJhdGlvbiBpcyBwYXNzZWQgZGlyZWN0bHkgdG8gdGhlIFBob2VuaXggU29ja2V0IGNvbnN0cnVjdG9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMucGFyYW1zXSAtIFRoZSBvcHRpb25hbCBmdW5jdGlvbiBmb3IgcGFzc2luZyBjb25uZWN0IHBhcmFtcy5cbiAqIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0aGUgdmlld05hbWUgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gTGl2ZVZpZXcuIEZvciBleGFtcGxlOlxuICpcbiAqICAgICAodmlld05hbWUpID0+IHt2aWV3OiB2aWV3TmFtZSwgdG9rZW46IHdpbmRvdy5teVRva2VufVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5iaW5kaW5nUHJlZml4XSAtIFRoZSBvcHRpb25hbCBwcmVmaXggdG8gdXNlIGZvciBhbGwgcGh4IERPTSBhbm5vdGF0aW9ucy5cbiAqIERlZmF1bHRzIHRvIFwicGh4LVwiLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmhvb2tzXSAtIFRoZSBvcHRpb25hbCBvYmplY3QgZm9yIHJlZmVyZW5jaW5nIExpdmVWaWV3IGhvb2sgY2FsbGJhY2tzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMudmlld0xvZ2dlcl0gLSBUaGUgb3B0aW9uYWwgZnVuY3Rpb24gdG8gbG9nIGRlYnVnIGluZm9ybWF0aW9uLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiAgICAgKHZpZXcsIGtpbmQsIG1zZywgb2JqKSA9PiBjb25zb2xlLmxvZyhgJHt2aWV3LmlkfSAke2tpbmR9OiAke21zZ30gLSBgLCBvYmopXG4qL1xuZXhwb3J0IGNsYXNzIExpdmVTb2NrZXQge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHBoeFNvY2tldCwgb3B0cyA9IHt9KXtcbiAgICB0aGlzLnVubG9hZGVkID0gZmFsc2VcbiAgICBpZighcGh4U29ja2V0IHx8IHBoeFNvY2tldC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICBhIHBob2VuaXggU29ja2V0IG11c3QgYmUgcHJvdmlkZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byB0aGUgTGl2ZVNvY2tldCBjb25zdHJ1Y3Rvci4gRm9yIGV4YW1wbGU6XG5cbiAgICAgICAgICBpbXBvcnQge1NvY2tldH0gZnJvbSBcInBob2VuaXhcIlxuICAgICAgICAgIGltcG9ydCB7TGl2ZVNvY2tldH0gZnJvbSBcInBob2VuaXhfbGl2ZV92aWV3XCJcbiAgICAgICAgICBsZXQgbGl2ZVNvY2tldCA9IG5ldyBMaXZlU29ja2V0KFwiL2xpdmVcIiwgU29ja2V0LCB7Li4ufSlcbiAgICAgIGApXG4gICAgfVxuICAgIHRoaXMuc29ja2V0ID0gbmV3IHBoeFNvY2tldCh1cmwsIG9wdHMpXG4gICAgdGhpcy5iaW5kaW5nUHJlZml4ID0gb3B0cy5iaW5kaW5nUHJlZml4IHx8IEJJTkRJTkdfUFJFRklYXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIHRoaXMudmlld3MgPSB7fVxuICAgIHRoaXMucGFyYW1zID0gY2xvc3VyZShvcHRzLnBhcmFtcyB8fCB7fSlcbiAgICB0aGlzLnZpZXdMb2dnZXIgPSBvcHRzLnZpZXdMb2dnZXJcbiAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5wcmV2QWN0aXZlID0gbnVsbFxuICAgIHRoaXMucHJldklucHV0ID0gbnVsbFxuICAgIHRoaXMucHJldlZhbHVlID0gbnVsbFxuICAgIHRoaXMuc2lsZW5jZWQgPSBmYWxzZVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLmxpbmtSZWYgPSAwXG4gICAgdGhpcy5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICB0aGlzLnBlbmRpbmdMaW5rID0gbnVsbFxuICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gY2xvbmUod2luZG93LmxvY2F0aW9uKVxuICAgIHRoaXMuaG9va3MgPSBvcHRzLmhvb2tzIHx8IHt9XG5cbiAgICB0aGlzLnNvY2tldC5vbk9wZW4oKCkgPT4ge1xuICAgICAgaWYodGhpcy5pc1VubG9hZGVkKCkpe1xuICAgICAgICB0aGlzLmRlc3Ryb3lBbGxWaWV3cygpXG4gICAgICAgIHRoaXMuam9pblJvb3RWaWV3cygpXG4gICAgICB9XG4gICAgICB0aGlzLnVubG9hZGVkID0gZmFsc2VcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGUgPT4ge1xuICAgICAgdGhpcy51bmxvYWRlZCA9IHRydWVcbiAgICB9KVxuICAgIHRoaXMuYmluZFRvcExldmVsRXZlbnRzKClcbiAgfVxuXG4gIGdldFNvY2tldCgpeyByZXR1cm4gdGhpcy5zb2NrZXQgfVxuXG4gIGxvZyh2aWV3LCBraW5kLCBtc2dDYWxsYmFjayl7XG4gICAgaWYodGhpcy52aWV3TG9nZ2VyKXtcbiAgICAgIGxldCBbbXNnLCBvYmpdID0gbXNnQ2FsbGJhY2soKVxuICAgICAgdGhpcy52aWV3TG9nZ2VyKHZpZXcsIGtpbmQsIG1zZywgb2JqKVxuICAgIH1cbiAgfVxuXG4gIGNvbm5lY3QoKXtcbiAgICBpZihbXCJjb21wbGV0ZVwiLCBcImxvYWRlZFwiLFwiaW50ZXJhY3RpdmVcIl0uaW5kZXhPZihkb2N1bWVudC5yZWFkeVN0YXRlKSA+PSAwKXtcbiAgICAgIHRoaXMuam9pblJvb3RWaWV3cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5qb2luUm9vdFZpZXdzKClcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNvY2tldC5jb25uZWN0KClcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKXsgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpIH1cblxuICAvLyBwcml2YXRlXG5cbiAgcmVsb2FkV2l0aEppdHRlcigpe1xuICAgICB0aGlzLmRpc2Nvbm5lY3QoKVxuICAgICBsZXQgW21pbk1zLCBtYXhNc10gPSBSRUxPQURfSklUVEVSXG4gICAgIGxldCBhZnRlck1zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heE1zIC0gbWluTXMgKyAxKSkgKyBtaW5Nc1xuICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSwgYWZ0ZXJNcylcbiAgIH1cblxuICBnZXRIb29rQ2FsbGJhY2tzKGhvb2tOYW1lKXsgcmV0dXJuIHRoaXMuaG9va3NbaG9va05hbWVdIH1cblxuICBpc1VubG9hZGVkKCl7IHJldHVybiB0aGlzLnVubG9hZGVkIH1cblxuICBnZXRCaW5kaW5nUHJlZml4KCl7IHJldHVybiB0aGlzLmJpbmRpbmdQcmVmaXggfVxuXG4gIGJpbmRpbmcoa2luZCl7IHJldHVybiBgJHt0aGlzLmdldEJpbmRpbmdQcmVmaXgoKX0ke2tpbmR9YCB9XG5cbiAgY2hhbm5lbCh0b3BpYywgcGFyYW1zKXsgcmV0dXJuIHRoaXMuc29ja2V0LmNoYW5uZWwodG9waWMsIHBhcmFtcykgfVxuXG4gIGpvaW5Sb290Vmlld3MoKXtcbiAgICBET00uYWxsKGRvY3VtZW50LCBgJHtQSFhfVklFV19TRUxFQ1RPUn06bm90KFske1BIWF9QQVJFTlRfSUR9XSlgLCByb290RWwgPT4ge1xuICAgICAgbGV0IHZpZXcgPSB0aGlzLmpvaW5WaWV3KHJvb3RFbCwgbnVsbCwgdGhpcy5nZXRIcmVmKCkpXG4gICAgICB0aGlzLnJvb3QgPSB0aGlzLnJvb3QgfHwgdmlld1xuICAgIH0pXG4gIH1cblxuICByZXBsYWNlUm9vdChocmVmLCBjYWxsYmFjayA9IG51bGwsIGxpbmtSZWYgPSB0aGlzLnNldFBlbmRpbmdMaW5rKGhyZWYpKXtcbiAgICB0aGlzLnJvb3Quc2hvd0xvYWRlcihMT0FERVJfVElNRU9VVClcbiAgICBsZXQgcm9vdEVsID0gdGhpcy5yb290LmVsXG4gICAgbGV0IHJvb3RJRCA9IHRoaXMucm9vdC5pZFxuICAgIGxldCB3YXNMb2FkaW5nID0gdGhpcy5yb290LmlzTG9hZGluZygpXG5cbiAgICBCcm93c2VyLmZldGNoUGFnZShocmVmLCAoc3RhdHVzLCBodG1sKSA9PiB7XG4gICAgICBpZihzdGF0dXMgIT09IDIwMCl7IHJldHVybiBCcm93c2VyLnJlZGlyZWN0KGhyZWYpIH1cblxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXG4gICAgICB0aGlzLmpvaW5WaWV3KGRpdi5maXJzdENoaWxkLCBudWxsLCBocmVmLCBuZXdSb290ID0+IHtcbiAgICAgICAgaWYoIXRoaXMuY29tbWl0UGVuZGluZ0xpbmsobGlua1JlZikpe1xuICAgICAgICAgIG5ld1Jvb3QuZGVzdHJveSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgICAgICB0aGlzLmRlc3Ryb3lWaWV3QnlJZChyb290SUQpXG4gICAgICAgIHJvb3RFbC5yZXBsYWNlV2l0aChuZXdSb290LmVsKVxuICAgICAgICB0aGlzLnJvb3QgPSBuZXdSb290XG4gICAgICAgIGlmKHdhc0xvYWRpbmcpeyB0aGlzLnJvb3Quc2hvd0xvYWRlcigpIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGpvaW5WaWV3KGVsLCBwYXJlbnRWaWV3LCBocmVmLCBjYWxsYmFjayl7XG4gICAgaWYodGhpcy5nZXRWaWV3QnlFbChlbCkpeyByZXR1cm4gfVxuXG4gICAgbGV0IHZpZXcgPSBuZXcgVmlldyhlbCwgdGhpcywgcGFyZW50VmlldywgaHJlZilcbiAgICB0aGlzLnZpZXdzW3ZpZXcuaWRdID0gdmlld1xuICAgIHZpZXcuam9pbihjYWxsYmFjaylcbiAgICByZXR1cm4gdmlld1xuICB9XG5cbiAgb3duZXIoY2hpbGRFbCwgY2FsbGJhY2spe1xuICAgIGxldCB2aWV3ID0gbWF5YmUoY2hpbGRFbC5jbG9zZXN0KFBIWF9WSUVXX1NFTEVDVE9SKSwgZWwgPT4gdGhpcy5nZXRWaWV3QnlFbChlbCkpXG4gICAgaWYodmlldyl7IGNhbGxiYWNrKHZpZXcpIH1cbiAgfVxuXG4gIGdldFZpZXdCeUVsKGVsKXsgcmV0dXJuIHRoaXMudmlld3NbZWwuaWRdIH1cblxuICBvblZpZXdFcnJvcih2aWV3KXtcbiAgICB0aGlzLmRyb3BBY3RpdmVFbGVtZW50KHZpZXcpXG4gIH1cblxuICBkZXN0cm95QWxsVmlld3MoKXtcbiAgICBmb3IobGV0IGlkIGluIHRoaXMudmlld3MpeyB0aGlzLmRlc3Ryb3lWaWV3QnlJZChpZCkgfVxuICB9XG5cbiAgZGVzdHJveVZpZXdCeUVsKGVsKXsgcmV0dXJuIHRoaXMuZGVzdHJveVZpZXdCeUlkKGVsLmlkKSB9XG5cbiAgZGVzdHJveVZpZXdCeUlkKGlkKXtcbiAgICBsZXQgdmlldyA9IHRoaXMudmlld3NbaWRdXG4gICAgaWYodmlldyl7XG4gICAgICBkZWxldGUgdGhpcy52aWV3c1t2aWV3LmlkXVxuICAgICAgaWYodGhpcy5yb290ICYmIHZpZXcuaWQgPT09IHRoaXMucm9vdC5pZCl7IHRoaXMucm9vdCA9IG51bGwgfVxuICAgICAgdmlldy5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmVFbGVtZW50KHRhcmdldCl7XG4gICAgaWYodGhpcy5hY3RpdmVFbGVtZW50ID09PSB0YXJnZXQpeyByZXR1cm4gfVxuICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IHRhcmdldFxuICAgIGxldCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBpZih0YXJnZXQgPT09IHRoaXMuYWN0aXZlRWxlbWVudCl7IHRoaXMuYWN0aXZlRWxlbWVudCA9IG51bGwgfVxuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMpXG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMpXG4gICAgfVxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBjYW5jZWwpXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBjYW5jZWwpXG4gIH1cblxuICBnZXRBY3RpdmVFbGVtZW50KCl7XG4gICAgaWYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSl7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICB9XG4gIH1cblxuICBkcm9wQWN0aXZlRWxlbWVudCh2aWV3KXtcbiAgICBpZih0aGlzLnByZXZBY3RpdmUgJiYgdmlldy5vd25zRWxlbWVudCh0aGlzLnByZXZBY3RpdmUpKXtcbiAgICAgIHRoaXMucHJldkFjdGl2ZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICByZXN0b3JlUHJldmlvdXNseUFjdGl2ZUZvY3VzKCl7XG4gICAgaWYodGhpcy5wcmV2QWN0aXZlICYmIHRoaXMucHJldkFjdGl2ZSAhPT0gZG9jdW1lbnQuYm9keSl7XG4gICAgICB0aGlzLnByZXZBY3RpdmUuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGJsdXJBY3RpdmVFbGVtZW50KCl7XG4gICAgdGhpcy5wcmV2QWN0aXZlID0gdGhpcy5nZXRBY3RpdmVFbGVtZW50KClcbiAgICBpZih0aGlzLnByZXZBY3RpdmUgIT09IGRvY3VtZW50LmJvZHkpeyB0aGlzLnByZXZBY3RpdmUuYmx1cigpIH1cbiAgfVxuXG4gIGJpbmRUb3BMZXZlbEV2ZW50cygpe1xuICAgIHRoaXMuYmluZE5hdigpXG4gICAgdGhpcy5iaW5kRm9ybXMoKVxuICAgIHRoaXMuYmluZFRhcmdldGFibGUoe2tleXVwOiBcImtleXVwXCIsIGtleWRvd246IFwia2V5ZG93blwifSwgKGUsIHR5cGUsIHZpZXcsIHRhcmdldCwgcGh4RXZlbnQsIHBoeFRhcmdldCkgPT4ge1xuICAgICAgdmlldy5wdXNoS2V5KHRhcmdldCwgdHlwZSwgcGh4RXZlbnQsIHtcbiAgICAgICAgYWx0R3JhcGhLZXk6IGUuYWx0R3JhcGhLZXksXG4gICAgICAgIGFsdEtleTogZS5hbHRLZXksXG4gICAgICAgIGNoYXJDb2RlOiBlLmNoYXJDb2RlLFxuICAgICAgICBjb2RlOiBlLmNvZGUsXG4gICAgICAgIGN0cmxLZXk6IGUuY3RybEtleSxcbiAgICAgICAga2V5OiBlLmtleSxcbiAgICAgICAga2V5Q29kZTogZS5rZXlDb2RlLFxuICAgICAgICBrZXlJZGVudGlmaWVyOiBlLmtleUlkZW50aWZpZXIsXG4gICAgICAgIGtleUxvY2F0aW9uOiBlLmtleUxvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvbjogZS5sb2NhdGlvbixcbiAgICAgICAgbWV0YUtleTogZS5tZXRhS2V5LFxuICAgICAgICByZXBlYXQ6IGUucmVwZWF0LFxuICAgICAgICBzaGlmdEtleTogZS5zaGlmdEtleSxcbiAgICAgICAgd2hpY2g6IGUud2hpY2hcbiAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLmJpbmRUYXJnZXRhYmxlKHtibHVyOiBcImZvY3Vzb3V0XCIsIGZvY3VzOiBcImZvY3VzaW5cIn0sIChlLCB0eXBlLCB2aWV3LCB0YXJnZXRFbCwgcGh4RXZlbnQsIHBoeFRhcmdldCkgPT4ge1xuICAgICAgaWYoIXBoeFRhcmdldCl7XG4gICAgICAgIHZpZXcucHVzaEV2ZW50KHR5cGUsIHRhcmdldEVsLCBwaHhFdmVudCwge3R5cGU6IHR5cGV9KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5iaW5kVGFyZ2V0YWJsZSh7Ymx1cjogXCJibHVyXCIsIGZvY3VzOiBcImZvY3VzXCJ9LCAoZSwgdHlwZSwgdmlldywgdGFyZ2V0RWwsIHBoeEV2ZW50LCBwaHhUYXJnZXQpID0+IHtcbiAgICAgIC8vIGJsdXIgYW5kIGZvY3VzIGFyZSB0cmlnZ2VyZWQgb24gZG9jdW1lbnQgYW5kIHdpbmRvdy4gRGlzY2FyZCBvbmUgdG8gYXZvaWQgZHVwc1xuICAgICAgaWYocGh4VGFyZ2V0ICYmICFwaHhUYXJnZXQgIT09IFwid2luZG93XCIpe1xuICAgICAgICB2aWV3LnB1c2hFdmVudCh0eXBlLCB0YXJnZXRFbCwgcGh4RXZlbnQsIHt0eXBlOiBlLnR5cGV9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIHNldFBlbmRpbmdMaW5rKGhyZWYpe1xuICAgIHRoaXMubGlua1JlZisrXG4gICAgbGV0IHJlZiA9IHRoaXMubGlua1JlZlxuICAgIHRoaXMucGVuZGluZ0xpbmsgPSBocmVmXG4gICAgcmV0dXJuIHRoaXMubGlua1JlZlxuICB9XG5cbiAgY29tbWl0UGVuZGluZ0xpbmsobGlua1JlZil7XG4gICAgaWYodGhpcy5saW5rUmVmICE9PSBsaW5rUmVmKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhyZWYgPSB0aGlzLnBlbmRpbmdMaW5rXG4gICAgICB0aGlzLnBlbmRpbmdMaW5rID0gbnVsbFxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICBnZXRIcmVmKCl7IHJldHVybiB0aGlzLmhyZWYgfVxuXG4gIGhhc1BlbmRpbmdMaW5rKCl7IHJldHVybiAhIXRoaXMucGVuZGluZ0xpbmsgfVxuXG4gIGJpbmRUYXJnZXRhYmxlKGV2ZW50cywgY2FsbGJhY2spe1xuICAgIGZvcihsZXQgZXZlbnQgaW4gZXZlbnRzKXtcbiAgICAgIGxldCBicm93c2VyRXZlbnROYW1lID0gZXZlbnRzW2V2ZW50XVxuXG4gICAgICB0aGlzLm9uKGJyb3dzZXJFdmVudE5hbWUsIGUgPT4ge1xuICAgICAgICBsZXQgYmluZGluZyA9IHRoaXMuYmluZGluZyhldmVudClcbiAgICAgICAgbGV0IGJpbmRUYXJnZXQgPSB0aGlzLmJpbmRpbmcoXCJ0YXJnZXRcIilcbiAgICAgICAgbGV0IHRhcmdldFBoeEV2ZW50ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlICYmIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShiaW5kaW5nKVxuICAgICAgICBpZih0YXJnZXRQaHhFdmVudCAmJiAhZS50YXJnZXQuZ2V0QXR0cmlidXRlKGJpbmRUYXJnZXQpKXtcbiAgICAgICAgICB0aGlzLm93bmVyKGUudGFyZ2V0LCB2aWV3ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2UoZS50YXJnZXQsIGUsICgpID0+IGNhbGxiYWNrKGUsIGV2ZW50LCB2aWV3LCBlLnRhcmdldCwgdGFyZ2V0UGh4RXZlbnQsIG51bGwpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRE9NLmFsbChkb2N1bWVudCwgYFske2JpbmRpbmd9XVske2JpbmRUYXJnZXR9PXdpbmRvd11gLCBlbCA9PiB7XG4gICAgICAgICAgICBsZXQgcGh4RXZlbnQgPSBlbC5nZXRBdHRyaWJ1dGUoYmluZGluZylcbiAgICAgICAgICAgIHRoaXMub3duZXIoZWwsIHZpZXcgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKGVsLCBlLCAoKSA9PiBjYWxsYmFjayhlLCBldmVudCwgdmlldywgZWwsIHBoeEV2ZW50LCBcIndpbmRvd1wiKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBiaW5kTmF2KCl7XG4gICAgaWYoIUJyb3dzZXIuY2FuUHVzaFN0YXRlKCkpeyByZXR1cm4gfVxuICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZighdGhpcy5yZWdpc3Rlck5ld0xvY2F0aW9uKHdpbmRvdy5sb2NhdGlvbikpeyByZXR1cm4gfVxuXG4gICAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG5cbiAgICAgIGlmKHRoaXMucm9vdC5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICAgIHRoaXMucm9vdC5wdXNoSW50ZXJuYWxMaW5rKGhyZWYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlcGxhY2VSb290KGhyZWYpXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gY2xvc2VzdFBoeEJpbmRpbmcoZS50YXJnZXQsIFBIWF9MSVZFX0xJTkspXG4gICAgICBsZXQgcGh4RXZlbnQgPSB0YXJnZXQgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShQSFhfTElWRV9MSU5LKVxuICAgICAgaWYoIXBoeEV2ZW50KXsgcmV0dXJuIH1cbiAgICAgIGxldCBocmVmID0gdGFyZ2V0LmhyZWZcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5yb290LnB1c2hJbnRlcm5hbExpbmsoaHJlZiwgKCkgPT4ge1xuICAgICAgICBCcm93c2VyLnB1c2hTdGF0ZShwaHhFdmVudCwge30sIGhyZWYpXG4gICAgICAgIHRoaXMucmVnaXN0ZXJOZXdMb2NhdGlvbih3aW5kb3cubG9jYXRpb24pXG4gICAgICB9KVxuICAgIH0sIGZhbHNlKVxuICB9XG5cbiAgcmVnaXN0ZXJOZXdMb2NhdGlvbihuZXdMb2NhdGlvbil7XG4gICAgbGV0IHtwYXRobmFtZSwgc2VhcmNofSA9IHRoaXMuY3VycmVudExvY2F0aW9uXG4gICAgaWYocGF0aG5hbWUgKyBzZWFyY2ggPT09IG5ld0xvY2F0aW9uLnBhdGhuYW1lICsgbmV3TG9jYXRpb24uc2VhcmNoKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IGNsb25lKG5ld0xvY2F0aW9uKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICBiaW5kRm9ybXMoKXtcbiAgICB0aGlzLm9uKFwic3VibWl0XCIsIGUgPT4ge1xuICAgICAgbGV0IHBoeEV2ZW50ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKHRoaXMuYmluZGluZyhcInN1Ym1pdFwiKSlcbiAgICAgIGlmKCFwaHhFdmVudCl7IHJldHVybiB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZVxuICAgICAgdGhpcy5vd25lcihlLnRhcmdldCwgdmlldyA9PiB2aWV3LnN1Ym1pdEZvcm0oZS50YXJnZXQsIHBoeEV2ZW50KSlcbiAgICB9LCBmYWxzZSlcblxuICAgIGZvcihsZXQgdHlwZSBvZiBbXCJjaGFuZ2VcIiwgXCJpbnB1dFwiXSl7XG4gICAgICB0aGlzLm9uKHR5cGUsIGUgPT4ge1xuICAgICAgICBsZXQgaW5wdXQgPSBlLnRhcmdldFxuICAgICAgICBsZXQgcGh4RXZlbnQgPSBpbnB1dC5mb3JtICYmIGlucHV0LmZvcm0uZ2V0QXR0cmlidXRlKHRoaXMuYmluZGluZyhcImNoYW5nZVwiKSlcbiAgICAgICAgaWYoIXBoeEV2ZW50KXsgcmV0dXJuIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSgobmV3IEZvcm1EYXRhKGlucHV0LmZvcm0pKS5nZXRBbGwoaW5wdXQubmFtZSkpXG4gICAgICAgIGlmKHRoaXMucHJldklucHV0ID09PSBpbnB1dCAmJiB0aGlzLnByZXZWYWx1ZSA9PT0gdmFsdWUpeyByZXR1cm4gfVxuICAgICAgICBpZihpbnB1dC50eXBlID09PSBcIm51bWJlclwiICYmIGlucHV0LnZhbGlkaXR5ICYmIGlucHV0LnZhbGlkaXR5LmJhZElucHV0KXsgcmV0dXJuIH1cblxuICAgICAgICB0aGlzLnByZXZJbnB1dCA9IGlucHV0XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy5vd25lcihpbnB1dCwgdmlldyA9PiB7XG4gICAgICAgICAgaWYoRE9NLmlzVGV4dHVhbElucHV0KGlucHV0KSl7XG4gICAgICAgICAgICBET00ucHV0UHJpdmF0ZShpbnB1dCwgUEhYX0hBU19GT0NVU0VELCB0cnVlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUVsZW1lbnQoaW5wdXQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGVib3VuY2UoaW5wdXQsIGUsICgpID0+IHZpZXcucHVzaElucHV0KGlucHV0LCBwaHhFdmVudCwgZSkpXG4gICAgICAgIH0pXG4gICAgICB9LCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBkZWJvdW5jZShlbCwgZXZlbnQsIGNhbGxiYWNrKXtcbiAgICBET00uZGVib3VuY2UoZWwsIGV2ZW50LCB0aGlzLmJpbmRpbmcoUEhYX0RFQk9VTkNFKSwgdGhpcy5iaW5kaW5nKFBIWF9USFJPVFRMRSksIGNhbGxiYWNrKVxuICB9XG5cbiAgc2lsZW5jZUV2ZW50cyhjYWxsYmFjayl7XG4gICAgdGhpcy5zaWxlbmNlZCA9IHRydWVcbiAgICBjYWxsYmFjaygpXG4gICAgdGhpcy5zaWxlbmNlZCA9IGZhbHNlXG4gIH1cblxuICBvbihldmVudCwgY2FsbGJhY2spe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBlID0+IHtcbiAgICAgIGlmKCF0aGlzLnNpbGVuY2VkKXsgY2FsbGJhY2soZSkgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGxldCBCcm93c2VyID0ge1xuICBjYW5QdXNoU3RhdGUoKXsgcmV0dXJuICh0eXBlb2YoaGlzdG9yeS5wdXNoU3RhdGUpICE9PSBcInVuZGVmaW5lZFwiKSB9LFxuXG4gIGZldGNoUGFnZShocmVmLCBjYWxsYmFjayl7XG4gICAgbGV0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgcmVxLm9wZW4oXCJHRVRcIiwgaHJlZiwgdHJ1ZSlcbiAgICByZXEudGltZW91dCA9IFBVU0hfVElNRU9VVFxuICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwidGV4dC9odG1sXCIpXG4gICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJjYWNoZS1jb250cm9sXCIsIFwibWF4LWFnZT0wLCBuby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZSwgcG9zdC1jaGVjaz0wLCBwcmUtY2hlY2s9MFwiKVxuICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKExJTktfSEVBREVSLCBcImxpdmUtbGlua1wiKVxuICAgIHJlcS5vbmVycm9yID0gKCkgPT4gY2FsbGJhY2soNDAwKVxuICAgIHJlcS5vbnRpbWVvdXQgPSAoKSA9PiBjYWxsYmFjayg1MDQpXG4gICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmKHJlcS5yZWFkeVN0YXRlICE9PSA0KXsgcmV0dXJuIH1cbiAgICAgIGlmKHJlcS5nZXRSZXNwb25zZUhlYWRlcihMSU5LX0hFQURFUikgIT09IFwibGl2ZS1saW5rXCIpeyByZXR1cm4gY2FsbGJhY2soNDAwKSB9XG4gICAgICBpZihyZXEuc3RhdHVzICE9PSAyMDApeyByZXR1cm4gY2FsbGJhY2socmVxLnN0YXR1cykgfVxuICAgICAgY2FsbGJhY2soMjAwLCByZXEucmVzcG9uc2VUZXh0KVxuICAgIH1cbiAgICByZXEuc2VuZCgpXG4gIH0sXG5cbiAgcHVzaFN0YXRlKGtpbmQsIG1ldGEsIHRvKXtcbiAgICBpZih0aGlzLmNhblB1c2hTdGF0ZSgpKXtcbiAgICAgIGlmKHRvICE9PSB3aW5kb3cubG9jYXRpb24uaHJlZil7IGhpc3Rvcnlba2luZCArIFwiU3RhdGVcIl0obWV0YSwgXCJcIiwgdG8pIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWRpcmVjdCh0bylcbiAgICB9XG4gIH0sXG5cbiAgc2V0Q29va2llKG5hbWUsIHZhbHVlKXtcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfWBcbiAgfSxcblxuICBnZXRDb29raWUobmFtZSl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZS5yZXBsYWNlKG5ldyBSZWdFeHAoYCg/Oig/Ol58Lio7XFxzKikke25hbWV9XFxzKlxcPVxccyooW147XSopLiokKXxeLiokYCksIFwiJDFcIilcbiAgfSxcblxuICByZWRpcmVjdCh0b1VSTCwgZmxhc2gpe1xuICAgIGlmKGZsYXNoKXsgQnJvd3Nlci5zZXRDb29raWUoXCJfX3Bob2VuaXhfZmxhc2hfX1wiLCBmbGFzaCArIFwiOyBtYXgtYWdlPTYwMDAwOyBwYXRoPS9cIikgfVxuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRvVVJMXG4gIH1cbn1cblxuZXhwb3J0IGxldCBET00gPSB7XG4gIGFsbChub2RlLCBxdWVyeSwgY2FsbGJhY2spe1xuICAgIGxldCBhcnJheSA9IEFycmF5LmZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSlcbiAgICByZXR1cm4gY2FsbGJhY2sgPyBhcnJheS5mb3JFYWNoKGNhbGxiYWNrKSA6IGFycmF5XG4gIH0sXG5cbiAgZmluZENvbXBvbmVudE5vZGVMaXN0KG5vZGUsIGNpZCl7IHJldHVybiB0aGlzLmFsbChub2RlLCBgWyR7UEhYX0NPTVBPTkVOVH09XCIke2NpZH1cIl1gKSB9LFxuXG4gIHByaXZhdGUoZWwsIGtleSl7IHJldHVybiBlbFtQSFhfUFJJVkFURV0gJiYgZWxbUEhYX1BSSVZBVEVdW2tleV0gfSxcblxuICBkZWxldGVQcml2YXRlKGVsLCBrZXkpeyBlbFtQSFhfUFJJVkFURV0gJiYgZGVsZXRlKGVsW1BIWF9QUklWQVRFXVtrZXldKSB9LFxuXG4gIHB1dFByaXZhdGUoZWwsIGtleSwgdmFsdWUpe1xuICAgIGlmKCFlbFtQSFhfUFJJVkFURV0peyBlbFtQSFhfUFJJVkFURV0gPSB7fSB9XG4gICAgZWxbUEhYX1BSSVZBVEVdW2tleV0gPSB2YWx1ZVxuICB9LFxuXG4gIGNvcHlQcml2YXRlcyh0YXJnZXQsIHNvdXJjZSl7XG4gICAgaWYoc291cmNlW1BIWF9QUklWQVRFXSl7XG4gICAgICB0YXJnZXRbUEhYX1BSSVZBVEVdID0gY2xvbmUoc291cmNlW1BIWF9QUklWQVRFXSlcbiAgICB9XG4gIH0sXG5cbiAgZGVib3VuY2UoZWwsIGV2ZW50LCBwaHhEZWJvdW5jZSwgcGh4VGhyb3R0bGUsIGNhbGxiYWNrKXtcbiAgICBsZXQgZGVib3VuY2UgPSBlbC5nZXRBdHRyaWJ1dGUocGh4RGVib3VuY2UpXG4gICAgbGV0IHRocm90dGxlID0gZWwuZ2V0QXR0cmlidXRlKHBoeFRocm90dGxlKVxuICAgIGxldCB2YWx1ZSA9IGRlYm91bmNlIHx8IHRocm90dGxlXG4gICAgc3dpdGNoKHZhbHVlKXtcbiAgICAgIGNhc2UgbnVsbDogcmV0dXJuIGNhbGxiYWNrKClcblxuICAgICAgY2FzZSBcImJsdXJcIjpcbiAgICAgICAgaWYodGhpcy5wcml2YXRlKGVsLCBERUJPVU5DRV9CTFVSKSl7IHJldHVybiB9XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IGNhbGxiYWNrKCkpXG4gICAgICAgIHRoaXMucHV0UHJpdmF0ZShlbCwgREVCT1VOQ0VfQkxVUiwgdmFsdWUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZXQgdGltZW91dCA9IHBhcnNlSW50KHZhbHVlKVxuICAgICAgICBpZihpc05hTih0aW1lb3V0KSl7IHJldHVybiBsb2dFcnJvcihgaW52YWxpZCB0aHJvdHRsZS9kZWJvdW5jZSB2YWx1ZTogJHt2YWx1ZX1gKSB9XG4gICAgICAgIGlmKHRocm90dGxlICYmIGV2ZW50LnR5cGUgPT09IFwia2V5ZG93blwiKXtcbiAgICAgICAgICBsZXQgcHJldktleSA9IHRoaXMucHJpdmF0ZShlbCwgREVCT1VOQ0VfUFJFVl9LRVkpXG4gICAgICAgICAgdGhpcy5wdXRQcml2YXRlKGVsLCBERUJPVU5DRV9QUkVWX0tFWSwgZXZlbnQud2hpY2gpXG4gICAgICAgICAgaWYocHJldktleSAhPT0gZXZlbnQud2hpY2gpeyByZXR1cm4gY2FsbGJhY2soKSB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcml2YXRlKGVsLCBERUJPVU5DRV9USU1FUikpeyByZXR1cm4gfVxuXG4gICAgICAgIGxldCBjbGVhclRpbWVyID0gKGUpID0+IHtcbiAgICAgICAgICBpZih0aHJvdHRsZSAmJiBlLnR5cGUgPT09IFBIWF9DSEFOR0UgJiYgZS5kZXRhaWwudHJpZ2dlcmVkQnkubmFtZSA9PT0gZWwubmFtZSl7IHJldHVybiB9XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucHJpdmF0ZShlbCwgREVCT1VOQ0VfVElNRVIpKVxuICAgICAgICAgIHRoaXMuZGVsZXRlUHJpdmF0ZShlbCwgREVCT1VOQ0VfVElNRVIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXRQcml2YXRlKGVsLCBERUJPVU5DRV9USU1FUiwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYoZWwuZm9ybSl7XG4gICAgICAgICAgICBlbC5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoUEhYX0NIQU5HRSwgY2xlYXJUaW1lcilcbiAgICAgICAgICAgIGVsLmZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBjbGVhclRpbWVyKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRlbGV0ZVByaXZhdGUoZWwsIERFQk9VTkNFX1RJTUVSKVxuICAgICAgICAgIGlmKCF0aHJvdHRsZSl7IGNhbGxiYWNrKCkgfVxuICAgICAgICB9LCB0aW1lb3V0KSlcbiAgICAgICAgaWYoZWwuZm9ybSl7XG4gICAgICAgICAgZWwuZm9ybS5hZGRFdmVudExpc3RlbmVyKFBIWF9DSEFOR0UsIGNsZWFyVGltZXIpXG4gICAgICAgICAgZWwuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNsZWFyVGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhyb3R0bGUpeyBjYWxsYmFjaygpIH1cbiAgICB9XG4gIH0sXG5cbiAgZGlzYWJsZUZvcm0oZm9ybSwgcHJlZml4KXtcbiAgICBsZXQgZGlzYWJsZVdpdGggPSBgJHtwcmVmaXh9JHtQSFhfRElTQUJMRV9XSVRIfWBcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoUEhYX0xPQURJTkdfQ0xBU1MpXG4gICAgRE9NLmFsbChmb3JtLCBgWyR7ZGlzYWJsZVdpdGh9XWAsIGVsID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGVsLmdldEF0dHJpYnV0ZShkaXNhYmxlV2l0aClcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShgJHtkaXNhYmxlV2l0aH0tcmVzdG9yZWAsIGVsLmlubmVyVGV4dClcbiAgICAgIGVsLmlubmVyVGV4dCA9IHZhbHVlXG4gICAgfSlcbiAgICBET00uYWxsKGZvcm0sIFwiYnV0dG9uXCIsIGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFBIWF9ESVNBQkxFRCwgYnV0dG9uLmRpc2FibGVkKVxuICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgRE9NLmFsbChmb3JtLCBcImlucHV0XCIsIGlucHV0ID0+IHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShQSFhfUkVBRE9OTFksIGlucHV0LnJlYWRPbmx5KVxuICAgICAgaW5wdXQucmVhZE9ubHkgPSB0cnVlXG4gICAgfSlcbiAgfSxcblxuICByZXN0b3JlRGlzYWJsZWRGb3JtKGZvcm0sIHByZWZpeCl7XG4gICAgbGV0IGRpc2FibGVXaXRoID0gYCR7cHJlZml4fSR7UEhYX0RJU0FCTEVfV0lUSH1gXG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFBIWF9MT0FESU5HX0NMQVNTKVxuXG4gICAgRE9NLmFsbChmb3JtLCBgWyR7ZGlzYWJsZVdpdGh9XWAsIGVsID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGVsLmdldEF0dHJpYnV0ZShgJHtkaXNhYmxlV2l0aH0tcmVzdG9yZWApXG4gICAgICBpZih2YWx1ZSl7XG4gICAgICAgIGlmKGVsLm5vZGVOYW1lID09PSBcIklOUFVUXCIpIHtcbiAgICAgICAgICBlbC52YWx1ZSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuaW5uZXJUZXh0ID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYCR7ZGlzYWJsZVdpdGh9LXJlc3RvcmVgKVxuICAgICAgfVxuICAgIH0pXG4gICAgRE9NLmFsbChmb3JtLCBcImJ1dHRvblwiLCBidXR0b24gPT4ge1xuICAgICAgbGV0IHByZXYgPSBidXR0b24uZ2V0QXR0cmlidXRlKFBIWF9ESVNBQkxFRClcbiAgICAgIGlmKHByZXYpe1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBwcmV2ID09PSBcInRydWVcIlxuICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFBIWF9ESVNBQkxFRClcbiAgICAgIH1cbiAgICB9KVxuICAgIERPTS5hbGwoZm9ybSwgXCJpbnB1dFwiLCBpbnB1dCA9PiB7XG4gICAgICBsZXQgcHJldiA9IGlucHV0LmdldEF0dHJpYnV0ZShQSFhfUkVBRE9OTFkpXG4gICAgICBpZihwcmV2KXtcbiAgICAgICAgaW5wdXQucmVhZE9ubHkgPSBwcmV2ID09PSBcInRydWVcIlxuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoUEhYX1JFQURPTkxZKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZGlzY2FyZEVycm9yKGNvbnRhaW5lciwgZWwpe1xuICAgIGxldCBmaWVsZCA9IGVsLmdldEF0dHJpYnV0ZSAmJiBlbC5nZXRBdHRyaWJ1dGUoUEhYX0VSUk9SX0ZPUilcbiAgICBpZighZmllbGQpIHsgcmV0dXJuIH1cbiAgICBsZXQgaW5wdXQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7ZmllbGR9YClcblxuICAgIGlmKGZpZWxkICYmICEodGhpcy5wcml2YXRlKGlucHV0LCBQSFhfSEFTX0ZPQ1VTRUQpIHx8IHRoaXMucHJpdmF0ZShpbnB1dC5mb3JtLCBQSFhfSEFTX1NVQk1JVFRFRCkpKXtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cbiAgfSxcblxuICBpc1BoeENoaWxkKG5vZGUpe1xuICAgIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZShQSFhfUEFSRU5UX0lEKVxuICB9LFxuXG4gIHBhdGNoKHZpZXcsIGNvbnRhaW5lciwgaWQsIGh0bWwsIHRhcmdldENJRCl7XG4gICAgbGV0IGNoYW5nZXMgPSB7YWRkZWQ6IFtdLCB1cGRhdGVkOiBbXSwgZGlzY2FyZGVkOiBbXSwgcGh4Q2hpbGRyZW5BZGRlZDogW119XG4gICAgbGV0IGZvY3VzZWQgPSB2aWV3LmxpdmVTb2NrZXQuZ2V0QWN0aXZlRWxlbWVudCgpXG4gICAgbGV0IHtzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kfSA9IGZvY3VzZWQgJiYgRE9NLmlzVGV4dHVhbElucHV0KGZvY3VzZWQpID8gZm9jdXNlZCA6IHt9XG4gICAgbGV0IHBoeFVwZGF0ZSA9IHZpZXcubGl2ZVNvY2tldC5iaW5kaW5nKFBIWF9VUERBVEUpXG4gICAgbGV0IFtkaWZmQ29udGFpbmVyLCB0YXJnZXRDb250YWluZXJdID0gdGhpcy5idWlsZERpZmZDb250YWluZXIoY29udGFpbmVyLCBodG1sLCBwaHhVcGRhdGUsIHRhcmdldENJRClcblxuICAgIG1vcnBoZG9tKHRhcmdldENvbnRhaW5lciwgZGlmZkNvbnRhaW5lci5vdXRlckhUTUwsIHtcbiAgICAgIGNoaWxkcmVuT25seTogdHJ1ZSxcbiAgICAgIG9uQmVmb3JlTm9kZUFkZGVkOiBmdW5jdGlvbihlbCl7XG4gICAgICAgIC8vaW5wdXQgaGFuZGxpbmdcbiAgICAgICAgRE9NLmRpc2NhcmRFcnJvcih0YXJnZXRDb250YWluZXIsIGVsKVxuICAgICAgICByZXR1cm4gZWxcbiAgICAgIH0sXG4gICAgICBvbk5vZGVBZGRlZDogZnVuY3Rpb24oZWwpe1xuICAgICAgICAvLyBuZXN0ZWQgdmlldyBoYW5kbGluZ1xuICAgICAgICBpZihET00uaXNQaHhDaGlsZChlbCkgJiYgdmlldy5vd25zRWxlbWVudChlbCkpe1xuICAgICAgICAgIGNoYW5nZXMucGh4Q2hpbGRyZW5BZGRlZC5wdXNoKGVsKVxuICAgICAgICB9XG4gICAgICAgIGNoYW5nZXMuYWRkZWQucHVzaChlbClcbiAgICAgIH0sXG4gICAgICBvbk5vZGVEaXNjYXJkZWQoZWwpeyBjaGFuZ2VzLmRpc2NhcmRlZC5wdXNoKGVsKSB9LFxuICAgICAgb25CZWZvcmVOb2RlRGlzY2FyZGVkOiBmdW5jdGlvbihlbCl7XG4gICAgICAgIC8vIG5lc3RlZCB2aWV3IGhhbmRsaW5nXG4gICAgICAgIGlmKERPTS5pc1BoeENoaWxkKGVsKSl7XG4gICAgICAgICAgdmlldy5saXZlU29ja2V0LmRlc3Ryb3lWaWV3QnlFbChlbClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25CZWZvcmVFbFVwZGF0ZWQ6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBpZihmcm9tRWwuZ2V0QXR0cmlidXRlKHBoeFVwZGF0ZSkgPT09IFwiaWdub3JlXCIpe1xuICAgICAgICAgIERPTS5tZXJnZUF0dHJzKGZyb21FbCwgdG9FbClcbiAgICAgICAgICBjaGFuZ2VzLnVwZGF0ZWQucHVzaCh7ZnJvbUVsLCB0b0VsOiBmcm9tRWx9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmKGZyb21FbC50eXBlID09PSBcIm51bWJlclwiICYmIChmcm9tRWwudmFsaWRpdHkgJiYgZnJvbUVsLnZhbGlkaXR5LmJhZElucHV0KSl7IHJldHVybiBmYWxzZSB9XG5cbiAgICAgICAgLy8gbmVzdGVkIHZpZXcgaGFuZGxpbmdcbiAgICAgICAgaWYoRE9NLmlzUGh4Q2hpbGQodG9FbCkpe1xuICAgICAgICAgIGxldCBwcmV2U3RhdGljID0gZnJvbUVsLmdldEF0dHJpYnV0ZShQSFhfU1RBVElDKVxuICAgICAgICAgIERPTS5tZXJnZUF0dHJzKGZyb21FbCwgdG9FbClcbiAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKFBIWF9TVEFUSUMsIHByZXZTdGF0aWMpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnB1dCBoYW5kbGluZ1xuICAgICAgICBET00uY29weVByaXZhdGVzKHRvRWwsIGZyb21FbClcbiAgICAgICAgRE9NLmRpc2NhcmRFcnJvcih0YXJnZXRDb250YWluZXIsIHRvRWwpXG5cbiAgICAgICAgaWYoRE9NLmlzVGV4dHVhbElucHV0KGZyb21FbCkgJiYgZnJvbUVsID09PSBmb2N1c2VkKXtcbiAgICAgICAgICBET00ubWVyZ2VJbnB1dHMoZnJvbUVsLCB0b0VsKVxuICAgICAgICAgIGNoYW5nZXMudXBkYXRlZC5wdXNoKHtmcm9tRWwsIHRvRWw6IGZyb21FbH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlcy51cGRhdGVkLnB1c2goe2Zyb21FbCwgdG9FbH0pXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB2aWV3LmxpdmVTb2NrZXQuc2lsZW5jZUV2ZW50cygoKSA9PiBET00ucmVzdG9yZUZvY3VzKGZvY3VzZWQsIHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpKVxuICAgIERPTS5kaXNwYXRjaEV2ZW50KGRvY3VtZW50LCBcInBoeDp1cGRhdGVcIilcbiAgICByZXR1cm4gY2hhbmdlc1xuICB9LFxuXG4gIGRpc3BhdGNoRXZlbnQodGFyZ2V0LCBldmVudFN0cmluZywgZGV0YWlsID0ge30pe1xuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudFN0cmluZywge2J1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogZGV0YWlsfSlcbiAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudClcbiAgfSxcblxuICBjbG9uZU5vZGUobm9kZSwgaHRtbCl7XG4gICAgbGV0IGNsb25lZCA9IG5vZGUuY2xvbmVOb2RlKClcbiAgICBjbG9uZWQuaW5uZXJIVE1MID0gaHRtbCB8fCBub2RlLmlubmVySFRNTFxuICAgIHJldHVybiBjbG9uZWRcbiAgfSxcblxuICAvLyBidWlsZHMgY29udGFpbmVyIGZvciBtb3JwaGRvbSBwYXRjaFxuICAvLyAtIHByZWNvbXB1dGVzIGFwcGVuZC9wcmVwZW5kIGNvbnRlbnQgaW4gZGlmZiBub2RlIHRvIG1ha2UgaXQgYXBwZWFyIGFzIGlmXG4gIC8vICAgdGhlIGNvbnRlbnRzIGhhZCBiZWVuIGFwcGVuZGVkL3ByZXBlbmRlZCBvbiBmdWxsIGNoaWxkIG5vZGUgbGlzdFxuICAvLyAtIHByZWNvbXB1dGVzIHVwZGF0ZXMgb24gZXhpc3RpbmcgY2hpbGQgaWRzIHdpdGhpbiBhIHByZXBlbmQvYXBwZW5kIGNoaWxkIGxpc3RcbiAgLy8gICB0byBhbGxvdyBleGlzdGluZyBub2RlcyB0byBiZSB1cGRhdGVkIGluIHBsYWNlIHJhdGhlciB0aGFuIHJlb3JkZXJlZFxuICBidWlsZERpZmZDb250YWluZXIoY29udGFpbmVyLCBodG1sLCBwaHhVcGRhdGUsIHRhcmdldENJRCl7XG4gICAgbGV0IHRhcmdldENvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgIGxldCBkaWZmQ29udGFpbmVyID0gbnVsbFxuICAgIGxldCBlbGVtZW50c09ubHkgPSBjaGlsZCA9PiBjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREVcbiAgICBsZXQgaWRzT25seSA9IGNoaWxkID0+IGNoaWxkLmlkIHx8IGxvZ0Vycm9yKFwiYXBwZW5kL3ByZXBlbmQgY2hpbGRyZW4gcmVxdWlyZSBJRHMsIGdvdDogXCIsIGNoaWxkKVxuICAgIGlmKHR5cGVvZih0YXJnZXRDSUQpID09PSBcIm51bWJlclwiKXtcbiAgICAgIHRhcmdldENvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbJHtQSFhfQ09NUE9ORU5UfT1cIiR7dGFyZ2V0Q0lEfVwiXWApLnBhcmVudE5vZGVcbiAgICAgIGRpZmZDb250YWluZXIgPSB0aGlzLmNsb25lTm9kZSh0YXJnZXRDb250YWluZXIpXG4gICAgICBsZXQgY29tcG9uZW50Tm9kZXMgPSB0aGlzLmZpbmRDb21wb25lbnROb2RlTGlzdChkaWZmQ29udGFpbmVyLCB0YXJnZXRDSUQpXG4gICAgICBsZXQgcHJldlNpYmxpbmcgPSBjb21wb25lbnROb2Rlc1swXS5wcmV2aW91c1NpYmxpbmdcbiAgICAgIGNvbXBvbmVudE5vZGVzLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gcHJldlNpYmxpbmcgJiYgcHJldlNpYmxpbmcubmV4dFNpYmxpbmdcblxuICAgICAgaWYocHJldlNpYmxpbmcgJiYgbmV4dFNpYmxpbmcpe1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIilcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICBBcnJheS5mcm9tKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiBkaWZmQ29udGFpbmVyLmluc2VydEJlZm9yZShjaGlsZCwgbmV4dFNpYmxpbmcpKVxuICAgICAgfSBlbHNlIGlmKHByZXZTaWJsaW5nKXtcbiAgICAgICAgZGlmZkNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgaHRtbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpZmZDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkaWZmQ29udGFpbmVyID0gdGhpcy5jbG9uZU5vZGUoY29udGFpbmVyLCBodG1sKVxuICAgIH1cblxuICAgIERPTS5hbGwoZGlmZkNvbnRhaW5lciwgYFske3BoeFVwZGF0ZX09YXBwZW5kXSxbJHtwaHhVcGRhdGV9PXByZXBlbmRdYCwgZWwgPT4ge1xuICAgICAgbGV0IGlkID0gZWwuaWQgfHwgbG9nRXJyb3IoXCJhcHBlbmQvcHJlcGVuZCByZXF1aXJlcyBhbiBJRCwgZ290OiBcIiwgZWwpXG4gICAgICBsZXQgZXhpc3RpbmdJbkNvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKVxuICAgICAgaWYoIWV4aXN0aW5nSW5Db250YWluZXIpeyByZXR1cm4gfVxuICAgICAgbGV0IGV4aXN0aW5nID0gdGhpcy5jbG9uZU5vZGUoZXhpc3RpbmdJbkNvbnRhaW5lcilcbiAgICAgIGxldCB1cGRhdGVUeXBlID0gZWwuZ2V0QXR0cmlidXRlKHBoeFVwZGF0ZSlcbiAgICAgIGxldCBuZXdJZHMgPSBBcnJheS5mcm9tKGVsLmNoaWxkTm9kZXMpLmZpbHRlcihlbGVtZW50c09ubHkpLm1hcChpZHNPbmx5KVxuICAgICAgbGV0IGV4aXN0aW5nSWRzID0gQXJyYXkuZnJvbShleGlzdGluZy5jaGlsZE5vZGVzKS5maWx0ZXIoZWxlbWVudHNPbmx5KS5tYXAoaWRzT25seSlcblxuICAgICAgaWYobmV3SWRzLnRvU3RyaW5nKCkgIT09IGV4aXN0aW5nSWRzLnRvU3RyaW5nKCkpe1xuICAgICAgICBsZXQgZHVwSWRzID0gbmV3SWRzLmZpbHRlcihpZCA9PiBleGlzdGluZ0lkcy5pbmRleE9mKGlkKSA+PSAwKVxuICAgICAgICBkdXBJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgbGV0IHVwZGF0ZWRFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApXG4gICAgICAgICAgZXhpc3RpbmcucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkucmVwbGFjZVdpdGgodXBkYXRlZEVsKVxuICAgICAgICB9KVxuICAgICAgICBlbC5pbnNlcnRBZGphY2VudEhUTUwodXBkYXRlVHlwZSA9PT0gXCJhcHBlbmRcIiA/IFwiYWZ0ZXJiZWdpblwiIDogXCJiZWZvcmVlbmRcIiwgZXhpc3RpbmcuaW5uZXJIVE1MKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gW2RpZmZDb250YWluZXIsIHRhcmdldENvbnRhaW5lcl1cbiAgfSxcblxuICBtZXJnZUF0dHJzKHRhcmdldCwgc291cmNlLCBleGNsdWRlID0gW10pe1xuICAgIHZhciBhdHRycyA9IHNvdXJjZS5hdHRyaWJ1dGVzXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGF0dHJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBuYW1lID0gYXR0cnNbaV0ubmFtZVxuICAgICAgaWYoZXhjbHVkZS5pbmRleE9mKG5hbWUpIDwgMCl7IHRhcmdldC5zZXRBdHRyaWJ1dGUobmFtZSwgc291cmNlLmdldEF0dHJpYnV0ZShuYW1lKSkgfVxuICAgIH1cbiAgfSxcblxuICBtZXJnZUlucHV0cyh0YXJnZXQsIHNvdXJjZSl7XG4gICAgRE9NLm1lcmdlQXR0cnModGFyZ2V0LCBzb3VyY2UsIFtcInZhbHVlXCJdKVxuICAgIHRhcmdldC5yZWFkT25seSA9IHNvdXJjZS5yZWFkT25seVxuICB9LFxuXG4gIHJlc3RvcmVGb2N1cyhmb2N1c2VkLCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKXtcbiAgICBpZighRE9NLmlzVGV4dHVhbElucHV0KGZvY3VzZWQpKXsgcmV0dXJuIH1cbiAgICBpZihmb2N1c2VkLnZhbHVlID09PSBcIlwiIHx8IGZvY3VzZWQucmVhZE9ubHkpeyBmb2N1c2VkLmJsdXIoKX1cbiAgICBmb2N1c2VkLmZvY3VzKClcbiAgICBpZihmb2N1c2VkLnNldFNlbGVjdGlvblJhbmdlICYmIGZvY3VzZWQudHlwZSA9PT0gXCJ0ZXh0XCIgfHwgZm9jdXNlZC50eXBlID09PSBcInRleHRhcmVhXCIpe1xuICAgICAgZm9jdXNlZC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKVxuICAgIH1cbiAgfSxcblxuICBpc1RleHR1YWxJbnB1dChlbCl7XG4gICAgcmV0dXJuIEZPQ1VTQUJMRV9JTlBVVFMuaW5kZXhPZihlbC50eXBlKSA+PSAwXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihlbCwgbGl2ZVNvY2tldCwgcGFyZW50VmlldywgaHJlZil7XG4gICAgdGhpcy5saXZlU29ja2V0ID0gbGl2ZVNvY2tldFxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50Vmlld1xuICAgIHRoaXMuZ3JhY2VmdWxseUNsb3NlZCA9IGZhbHNlXG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5pZCA9IHRoaXMuZWwuaWRcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZShQSFhfVklFVylcbiAgICB0aGlzLmxvYWRlclRpbWVyID0gbnVsbFxuICAgIHRoaXMucGVuZGluZ0RpZmZzID0gW11cbiAgICB0aGlzLm1vZGlmaWVycyA9IFtdO1xuICAgIHRoaXMuaHJlZiA9IGhyZWZcbiAgICB0aGlzLmpvaW5lZE9uY2UgPSBmYWxzZVxuICAgIHRoaXMudmlld0hvb2tzID0ge31cbiAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmxpdmVTb2NrZXQuY2hhbm5lbChgbHY6JHt0aGlzLmlkfWAsICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdGhpcy5ocmVmIHx8IHRoaXMubGl2ZVNvY2tldC5yb290LmhyZWYsXG4gICAgICAgIHBhcmFtczogdGhpcy5saXZlU29ja2V0LnBhcmFtcyh0aGlzLnZpZXcpLFxuICAgICAgICBzZXNzaW9uOiB0aGlzLmdldFNlc3Npb24oKSxcbiAgICAgICAgc3RhdGljOiB0aGlzLmdldFN0YXRpYygpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNob3dMb2FkZXIoTE9BREVSX1RJTUVPVVQpXG4gICAgdGhpcy5iaW5kQ2hhbm5lbCgpXG4gIH1cblxuICBpc0Nvbm5lY3RlZCgpeyByZXR1cm4gdGhpcy5jaGFubmVsLmNhblB1c2goKSB9XG5cbiAgZ2V0U2Vzc2lvbigpeyByZXR1cm4gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoUEhYX1NFU1NJT04pIH1cblxuICBnZXRTdGF0aWMoKXtcbiAgICBsZXQgdmFsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoUEhYX1NUQVRJQylcbiAgICByZXR1cm4gdmFsID09PSBcIlwiID8gbnVsbCA6IHZhbFxuICB9XG5cbiAgZGVzdHJveShjYWxsYmFjayA9IGZ1bmN0aW9uKCl7fSl7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZGVyVGltZXIpXG4gICAgbGV0IG9uRmluaXNoZWQgPSAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgICBmb3IobGV0IGlkIGluIHRoaXMudmlld0hvb2tzKXsgdGhpcy5kZXN0cm95SG9vayh0aGlzLnZpZXdIb29rc1tpZF0pIH1cbiAgICB9XG4gICAgaWYodGhpcy5oYXNHcmFjZWZ1bGx5Q2xvc2VkKCkpe1xuICAgICAgdGhpcy5sb2coXCJkZXN0cm95ZWRcIiwgKCkgPT4gW1widGhlIHNlcnZlciB2aWV3IGhhcyBncmFjZWZ1bGx5IGNsb3NlZFwiXSlcbiAgICAgIG9uRmluaXNoZWQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZyhcImRlc3Ryb3llZFwiLCAoKSA9PiBbXCJ0aGUgY2hpbGQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBwYXJlbnRcIl0pXG4gICAgICB0aGlzLmNoYW5uZWwubGVhdmUoKVxuICAgICAgICAucmVjZWl2ZShcIm9rXCIsIG9uRmluaXNoZWQpXG4gICAgICAgIC5yZWNlaXZlKFwiZXJyb3JcIiwgb25GaW5pc2hlZClcbiAgICAgICAgLnJlY2VpdmUoXCJ0aW1lb3V0XCIsIG9uRmluaXNoZWQpXG4gICAgfVxuXG4gICAgdGhpcy5jbGVhbnVwQ2xpY2tNb2RpZmllcnMoKTtcbiAgfVxuXG4gIHNldENvbnRhaW5lckNsYXNzZXMoLi4uY2xhc3Nlcyl7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgUEhYX0NPTk5FQ1RFRF9DTEFTUyxcbiAgICAgIFBIWF9ESVNDT05ORUNURURfQ0xBU1MsXG4gICAgICBQSFhfRVJST1JfQ0xBU1NcbiAgICApXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpXG4gIH1cblxuICBjbGVhbnVwQ2xpY2tNb2RpZmllcnMoKSB7XG4gICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChtb2QgPT4gbW9kLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5tb2RpZmllcnMgPSBbXTtcbiAgfVxuXG4gIGlzTG9hZGluZygpeyByZXR1cm4gdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoUEhYX0RJU0NPTk5FQ1RFRF9DTEFTUyl9XG5cbiAgc2hvd0xvYWRlcih0aW1lb3V0KXtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5sb2FkZXJUaW1lcilcbiAgICBpZih0aW1lb3V0KXtcbiAgICAgIHRoaXMubG9hZGVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvd0xvYWRlcigpLCB0aW1lb3V0KVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IobGV0IGlkIGluIHRoaXMudmlld0hvb2tzKXsgdGhpcy52aWV3SG9va3NbaWRdLl9fdHJpZ2dlcl9fKFwiZGlzY29ubmVjdGVkXCIpIH1cbiAgICAgIHRoaXMuc2V0Q29udGFpbmVyQ2xhc3NlcyhQSFhfRElTQ09OTkVDVEVEX0NMQVNTKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVMb2FkZXIoKXtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5sb2FkZXJUaW1lcilcbiAgICBmb3IobGV0IGlkIGluIHRoaXMudmlld0hvb2tzKXsgdGhpcy52aWV3SG9va3NbaWRdLl9fdHJpZ2dlcl9fKFwicmVjb25uZWN0ZWRcIikgfVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQ2xhc3NlcyhQSFhfQ09OTkVDVEVEX0NMQVNTKVxuICB9XG5cbiAgbG9nKGtpbmQsIG1zZ0NhbGxiYWNrKXtcbiAgICB0aGlzLmxpdmVTb2NrZXQubG9nKHRoaXMsIGtpbmQsIG1zZ0NhbGxiYWNrKVxuICB9XG5cbiAgb25Kb2luKHtyZW5kZXJlZCwgbGl2ZV9yZWRpcmVjdH0pe1xuICAgIHRoaXMubG9nKFwiam9pblwiLCAoKSA9PiBbXCJcIiwgSlNPTi5zdHJpbmdpZnkocmVuZGVyZWQpXSlcbiAgICB0aGlzLnJlbmRlcmVkID0gcmVuZGVyZWRcbiAgICB0aGlzLmhpZGVMb2FkZXIoKVxuICAgIGxldCBjaGFuZ2VzID0gRE9NLnBhdGNoKHRoaXMsIHRoaXMuZWwsIHRoaXMuaWQsIFJlbmRlcmVkLnRvU3RyaW5nKHRoaXMucmVuZGVyZWQpKVxuICAgIGNoYW5nZXMuYWRkZWQucHVzaCh0aGlzLmVsKVxuICAgIERPTS5hbGwodGhpcy5lbCwgYFske3RoaXMuYmluZGluZyhQSFhfSE9PSyl9XWAsIGhvb2tFbCA9PiBjaGFuZ2VzLmFkZGVkLnB1c2goaG9va0VsKSlcbiAgICB0aGlzLnRyaWdnZXJIb29rcyhjaGFuZ2VzKVxuICAgIHRoaXMuYmluZENsaWNrcygpXG4gICAgdGhpcy5qb2luTmV3Q2hpbGRyZW4oKVxuICAgIGlmKGxpdmVfcmVkaXJlY3Qpe1xuICAgICAgbGV0IHtraW5kLCB0b30gPSBsaXZlX3JlZGlyZWN0XG4gICAgICBCcm93c2VyLnB1c2hTdGF0ZShraW5kLCB7fSwgdG8pXG4gICAgfVxuICB9XG5cbiAgam9pbk5ld0NoaWxkcmVuKCl7XG4gICAgRE9NLmFsbChkb2N1bWVudCwgYCR7UEhYX1ZJRVdfU0VMRUNUT1J9WyR7UEhYX1BBUkVOVF9JRH09XCIke3RoaXMuaWR9XCJdYCwgZWwgPT4ge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5saXZlU29ja2V0LmdldFZpZXdCeUVsKGVsKVxuICAgICAgaWYoIWNoaWxkKXtcbiAgICAgICAgdGhpcy5saXZlU29ja2V0LmpvaW5WaWV3KGVsLCB0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUoZGlmZiwgY2lkKXtcbiAgICBpZihpc0VtcHR5KGRpZmYpKXsgcmV0dXJuIH1cbiAgICBpZih0aGlzLmxpdmVTb2NrZXQuaGFzUGVuZGluZ0xpbmsoKSl7IHJldHVybiB0aGlzLnBlbmRpbmdEaWZmcy5wdXNoKHtkaWZmLCBjaWR9KSB9XG5cbiAgICB0aGlzLmxvZyhcInVwZGF0ZVwiLCAoKSA9PiBbXCJcIiwgSlNPTi5zdHJpbmdpZnkoZGlmZildKVxuICAgIHRoaXMucmVuZGVyZWQgPSBSZW5kZXJlZC5tZXJnZURpZmYodGhpcy5yZW5kZXJlZCwgZGlmZilcbiAgICBsZXQgaHRtbCA9IHR5cGVvZihjaWQpID09PSBcIm51bWJlclwiID9cbiAgICAgIFJlbmRlcmVkLmNvbXBvbmVudFRvU3RyaW5nKHRoaXMucmVuZGVyZWRbQ09NUE9ORU5UU10sIGNpZCkgOlxuICAgICAgUmVuZGVyZWQudG9TdHJpbmcodGhpcy5yZW5kZXJlZClcblxuICAgIGxldCBjaGFuZ2VzID0gRE9NLnBhdGNoKHRoaXMsIHRoaXMuZWwsIHRoaXMuaWQsIGh0bWwsIGNpZClcbiAgICBpZihjaGFuZ2VzLnBoeENoaWxkcmVuQWRkZWQubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLmpvaW5OZXdDaGlsZHJlbigpXG4gICAgfVxuICAgIHRoaXMudHJpZ2dlckhvb2tzKGNoYW5nZXMpXG4gICAgdGhpcy5iaW5kQ2xpY2tzKCk7XG4gIH1cblxuICBnZXRIb29rKGVsKXsgcmV0dXJuIHRoaXMudmlld0hvb2tzW1ZpZXdIb29rLmVsZW1lbnRJRChlbCldIH1cblxuICBhZGRIb29rKGVsKXsgaWYoVmlld0hvb2suZWxlbWVudElEKGVsKSB8fCAhZWwuZ2V0QXR0cmlidXRlKXsgcmV0dXJuIH1cbiAgICBsZXQgaG9va05hbWUgPSBlbC5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFBIWF9IT09LKSlcbiAgICBpZihob29rTmFtZSAmJiAhdGhpcy5vd25zRWxlbWVudChlbCkpeyByZXR1cm4gfVxuICAgIGxldCBjYWxsYmFja3MgPSB0aGlzLmxpdmVTb2NrZXQuZ2V0SG9va0NhbGxiYWNrcyhob29rTmFtZSlcblxuICAgIGlmKGNhbGxiYWNrcyl7XG4gICAgICBsZXQgaG9vayA9IG5ldyBWaWV3SG9vayh0aGlzLCBlbCwgY2FsbGJhY2tzKVxuICAgICAgdGhpcy52aWV3SG9va3NbVmlld0hvb2suZWxlbWVudElEKGhvb2suZWwpXSA9IGhvb2tcbiAgICAgIGhvb2suX190cmlnZ2VyX18oXCJtb3VudGVkXCIpXG4gICAgfSBlbHNlIGlmKGhvb2tOYW1lICE9PSBudWxsKXtcbiAgICAgIGxvZ0Vycm9yKGB1bmtub3duIGhvb2sgZm91bmQgZm9yIFwiJHtob29rTmFtZX1cImAsIGVsKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3lIb29rKGhvb2spe1xuICAgIGhvb2suX190cmlnZ2VyX18oXCJkZXN0cm95ZWRcIilcbiAgICBkZWxldGUgdGhpcy52aWV3SG9va3NbVmlld0hvb2suZWxlbWVudElEKGhvb2suZWwpXVxuICB9XG5cbiAgdHJpZ2dlckhvb2tzKGNoYW5nZXMpe1xuICAgIGxldCBkZXN0cm95ZWRDSURzID0gW11cbiAgICBjaGFuZ2VzLnVwZGF0ZWQucHVzaCh7ZnJvbUVsOiB0aGlzLmVsLCB0b0VsOiB0aGlzLmVsfSlcbiAgICBjaGFuZ2VzLmFkZGVkLmZvckVhY2goZWwgPT4gdGhpcy5hZGRIb29rKGVsKSlcbiAgICBjaGFuZ2VzLnVwZGF0ZWQuZm9yRWFjaCgoe2Zyb21FbCwgdG9FbH0pID0+IHtcbiAgICAgIGxldCBob29rID0gdGhpcy5nZXRIb29rKGZyb21FbClcbiAgICAgIGxldCBwaHhBdHRyID0gdGhpcy5iaW5kaW5nKFBIWF9IT09LKVxuICAgICAgaWYoaG9vayAmJiB0b0VsLmdldEF0dHJpYnV0ZSAmJiBmcm9tRWwuZ2V0QXR0cmlidXRlKHBoeEF0dHIpID09PSB0b0VsLmdldEF0dHJpYnV0ZShwaHhBdHRyKSl7XG4gICAgICAgIGhvb2suX190cmlnZ2VyX18oXCJ1cGRhdGVkXCIpXG4gICAgICB9IGVsc2UgaWYoaG9vayl7XG4gICAgICAgIHRoaXMuZGVzdHJveUhvb2soaG9vaylcbiAgICAgICAgdGhpcy5hZGRIb29rKGZyb21FbClcbiAgICAgIH1cbiAgICB9KVxuICAgIGNoYW5nZXMuZGlzY2FyZGVkLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGNpZCA9IHRoaXMuY29tcG9uZW50SUQoZWwpXG4gICAgICBpZih0eXBlb2YoY2lkKSA9PT0gXCJudW1iZXJcIiAmJiBkZXN0cm95ZWRDSURzLmluZGV4T2YoY2lkKSA9PT0gLTEpeyBkZXN0cm95ZWRDSURzLnB1c2goY2lkKSB9XG4gICAgICBsZXQgaG9vayA9IHRoaXMuZ2V0SG9vayhlbClcbiAgICAgIGhvb2sgJiYgdGhpcy5kZXN0cm95SG9vayhob29rKVxuICAgIH0pXG5cbiAgICB0aGlzLm1heWJlUHVzaENvbXBvbmVudHNEZXN0cm95ZWQoZGVzdHJveWVkQ0lEcylcbiAgfVxuXG4gIGFwcGx5UGVuZGluZ1VwZGF0ZXMoKXtcbiAgICB0aGlzLnBlbmRpbmdEaWZmcy5mb3JFYWNoKCh7ZGlmZiwgY2lkfSkgPT4gdGhpcy51cGRhdGUoZGlmZiwgY2lkKSlcbiAgICB0aGlzLnBlbmRpbmdEaWZmcyA9IFtdXG4gIH1cblxuICBiaW5kQ2hhbm5lbCgpe1xuICAgIHRoaXMuY2hhbm5lbC5vbihcImRpZmZcIiwgKGRpZmYpID0+IHRoaXMudXBkYXRlKGRpZmYpKVxuICAgIHRoaXMuY2hhbm5lbC5vbihcInJlZGlyZWN0XCIsICh7dG8sIGZsYXNofSkgPT4gdGhpcy5vblJlZGlyZWN0KHt0bywgZmxhc2h9KSlcbiAgICB0aGlzLmNoYW5uZWwub24oXCJsaXZlX3JlZGlyZWN0XCIsICh7dG8sIGtpbmR9KSA9PiB0aGlzLm9uTGl2ZVJlZGlyZWN0KHt0bywga2luZH0pKVxuICAgIHRoaXMuY2hhbm5lbC5vbihcImV4dGVybmFsX2xpdmVfcmVkaXJlY3RcIiwgKHt0bywga2luZH0pID0+IHRoaXMub25FeHRlcm5hbExpdmVSZWRpcmVjdCh7dG8sIGtpbmR9KSlcbiAgICB0aGlzLmNoYW5uZWwub24oXCJzZXNzaW9uXCIsICh7dG9rZW59KSA9PiB0aGlzLmVsLnNldEF0dHJpYnV0ZShQSFhfU0VTU0lPTiwgdG9rZW4pKVxuICAgIHRoaXMuY2hhbm5lbC5vbkVycm9yKHJlYXNvbiA9PiB0aGlzLm9uRXJyb3IocmVhc29uKSlcbiAgICB0aGlzLmNoYW5uZWwub25DbG9zZSgoKSA9PiB0aGlzLm9uR3JhY2VmdWxDbG9zZSgpKVxuICB9XG5cbiAgYmluZENsaWNrcygpIHtcbiAgICB0aGlzLmNsZWFudXBDbGlja01vZGlmaWVycygpO1xuXG4gICAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIodGhpcy5lbCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuXG4gICAgbGV0IGVsO1xuICAgIHdoaWxlKGVsID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdwaHgtY2xpY2snKSkge1xuICAgICAgICBjb25zdCBtb2RpZmllciA9IG5ldyBDbGlja01vZGlmaWVyKGVsLCB7IGV2ZW50TmFtZTogJ2NsaWNrJywgY2FsbGJhY2s6IGNhbGxiYWNrLmJpbmQodGhpcyksIG9wdGlvbnM6IHt9IH0pO1xuICAgICAgICBtb2RpZmllci5pbnN0YWxsKCk7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzLnB1c2gobW9kaWZpZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGUpIHtcbiAgICAgIGxldCBjbGljayA9IHRoaXMuYmluZGluZyhcImNsaWNrXCIpXG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICAgIGxldCBwaHhFdmVudCA9IHRhcmdldCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKGNsaWNrKVxuICAgICAgaWYoIXBoeEV2ZW50KXsgcmV0dXJuIH1cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGxldCBtZXRhID0ge1xuICAgICAgICBhbHRLZXk6IGUuYWx0S2V5LFxuICAgICAgICBzaGlmdEtleTogZS5zaGlmdEtleSxcbiAgICAgICAgY3RybEtleTogZS5jdHJsS2V5LFxuICAgICAgICBtZXRhS2V5OiBlLm1ldGFLZXksXG4gICAgICAgIHg6IGUueCB8fCBlLmNsaWVudFgsXG4gICAgICAgIHk6IGUueSB8fCBlLmNsaWVudFksXG4gICAgICAgIHBhZ2VYOiBlLnBhZ2VYLFxuICAgICAgICBwYWdlWTogZS5wYWdlWSxcbiAgICAgICAgc2NyZWVuWDogZS5zY3JlZW5YLFxuICAgICAgICBzY3JlZW5ZOiBlLnNjcmVlblksXG4gICAgICB9XG5cbiAgICAgIHRoaXMubGl2ZVNvY2tldC5vd25lcih0YXJnZXQsIHZpZXcgPT4ge1xuICAgICAgICB0aGlzLmxpdmVTb2NrZXQuZGVib3VuY2UodGFyZ2V0LCBlLCAoKSA9PiB0aGlzLnB1c2hFdmVudChcImNsaWNrXCIsIHRhcmdldCwgcGh4RXZlbnQsIG1ldGEpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkdyYWNlZnVsQ2xvc2UoKXtcbiAgICB0aGlzLmdyYWNlZnVsbHlDbG9zZWQgPSB0cnVlXG4gICAgdGhpcy5saXZlU29ja2V0LmRlc3Ryb3lWaWV3QnlJZCh0aGlzLmlkKVxuICB9XG5cbiAgb25FeHRlcm5hbExpdmVSZWRpcmVjdCh7dG8sIGtpbmR9KXtcbiAgICB0aGlzLmxpdmVTb2NrZXQucmVwbGFjZVJvb3QodG8sICgpID0+IEJyb3dzZXIucHVzaFN0YXRlKGtpbmQsIHt9LCB0bykpXG4gIH1cblxuICBvbkxpdmVSZWRpcmVjdCh7dG8sIGtpbmR9KXtcbiAgICB0aGlzLmhyZWYgPSB0b1xuICAgIEJyb3dzZXIucHVzaFN0YXRlKGtpbmQsIHt9LCB0bylcbiAgfVxuXG4gIG9uUmVkaXJlY3Qoe3RvLCBmbGFzaH0peyBCcm93c2VyLnJlZGlyZWN0KHRvLCBmbGFzaCkgfVxuXG4gIGhhc0dyYWNlZnVsbHlDbG9zZWQoKXsgcmV0dXJuIHRoaXMuZ3JhY2VmdWxseUNsb3NlZCB9XG5cbiAgam9pbihjYWxsYmFjayl7XG4gICAgaWYodGhpcy5wYXJlbnQpe1xuICAgICAgdGhpcy5wYXJlbnQuY2hhbm5lbC5vbkNsb3NlKCgpID0+IHRoaXMub25HcmFjZWZ1bENsb3NlKCkpXG4gICAgICB0aGlzLnBhcmVudC5jaGFubmVsLm9uRXJyb3IoKCkgPT4gdGhpcy5saXZlU29ja2V0LmRlc3Ryb3lWaWV3QnlJZCh0aGlzLmlkKSlcbiAgICB9XG4gICAgdGhpcy5jaGFubmVsLmpvaW4oKVxuICAgICAgLnJlY2VpdmUoXCJva1wiLCBkYXRhID0+IHtcbiAgICAgICAgaWYoIXRoaXMuam9pbmVkT25jZSl7IGNhbGxiYWNrICYmIGNhbGxiYWNrKHRoaXMpIH1cbiAgICAgICAgdGhpcy5qb2luZWRPbmNlID0gdHJ1ZVxuICAgICAgICB0aGlzLm9uSm9pbihkYXRhKVxuICAgICAgfSlcbiAgICAgIC5yZWNlaXZlKFwiZXJyb3JcIiwgcmVzcCA9PiB0aGlzLm9uSm9pbkVycm9yKHJlc3ApKVxuICAgICAgLnJlY2VpdmUoXCJ0aW1lb3V0XCIsICgpID0+IHRoaXMub25Kb2luRXJyb3IoXCJ0aW1lb3V0XCIpKVxuICB9XG5cbiAgb25Kb2luRXJyb3IocmVzcCl7XG4gICAgaWYocmVzcC5yZWFzb24gPT09IENMSUVOVF9PVVREQVRFRCl7IHJldHVybiB0aGlzLmxpdmVTb2NrZXQucmVsb2FkV2l0aEppdHRlcigpIH1cbiAgICBpZihyZXNwLnJlZGlyZWN0IHx8IHJlc3AuZXh0ZXJuYWxfbGl2ZV9yZWRpcmVjdCl7IHRoaXMuY2hhbm5lbC5sZWF2ZSgpIH1cbiAgICBpZihyZXNwLnJlZGlyZWN0KXsgcmV0dXJuIHRoaXMub25SZWRpcmVjdChyZXNwLnJlZGlyZWN0KSB9XG4gICAgaWYocmVzcC5leHRlcm5hbF9saXZlX3JlZGlyZWN0KXsgcmV0dXJuIHRoaXMub25FeHRlcm5hbExpdmVSZWRpcmVjdChyZXNwLmV4dGVybmFsX2xpdmVfcmVkaXJlY3QpIH1cbiAgICB0aGlzLmRpc3BsYXlFcnJvcigpXG4gICAgdGhpcy5sb2coXCJlcnJvclwiLCAoKSA9PiBbXCJ1bmFibGUgdG8gam9pblwiLCByZXNwXSlcbiAgfVxuXG4gIG9uRXJyb3IocmVhc29uKXtcbiAgICB0aGlzLmxvZyhcImVycm9yXCIsICgpID0+IFtcInZpZXcgY3Jhc2hlZFwiLCByZWFzb25dKVxuICAgIHRoaXMubGl2ZVNvY2tldC5vblZpZXdFcnJvcih0aGlzKVxuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgaWYodGhpcy5saXZlU29ja2V0LmlzVW5sb2FkZWQoKSl7XG4gICAgICB0aGlzLnNob3dMb2FkZXIoQkVGT1JFX1VOTE9BRF9MT0FERVJfVElNRU9VVClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlFcnJvcigpe1xuICAgIHRoaXMuc2hvd0xvYWRlcigpXG4gICAgdGhpcy5zZXRDb250YWluZXJDbGFzc2VzKFBIWF9ESVNDT05ORUNURURfQ0xBU1MsIFBIWF9FUlJPUl9DTEFTUylcbiAgfVxuXG4gIHB1c2hXaXRoUmVwbHkoZXZlbnQsIHBheWxvYWQsIG9uUmVwbHkgPSBmdW5jdGlvbigpeyB9KXtcbiAgICBpZih0eXBlb2YocGF5bG9hZC5jaWQpICE9PSBcIm51bWJlclwiKXsgZGVsZXRlIHBheWxvYWQuY2lkIH1cbiAgICByZXR1cm4oXG4gICAgICB0aGlzLmNoYW5uZWwucHVzaChldmVudCwgcGF5bG9hZCwgUFVTSF9USU1FT1VUKS5yZWNlaXZlKFwib2tcIiwgcmVzcCA9PiB7XG4gICAgICAgIGlmKHJlc3AuZGlmZil7IHRoaXMudXBkYXRlKHJlc3AuZGlmZiwgcGF5bG9hZC5jaWQpIH1cbiAgICAgICAgaWYocmVzcC5yZWRpcmVjdCl7IHRoaXMub25SZWRpcmVjdChyZXNwLnJlZGlyZWN0KSB9XG4gICAgICAgIGlmKHJlc3AubGl2ZV9yZWRpcmVjdCl7IHRoaXMub25MaXZlUmVkaXJlY3QocmVzcC5saXZlX3JlZGlyZWN0KSB9XG4gICAgICAgIGlmKHJlc3AuZXh0ZXJuYWxfbGl2ZV9yZWRpcmVjdCl7IHRoaXMub25FeHRlcm5hbExpdmVSZWRpcmVjdChyZXNwLmV4dGVybmFsX2xpdmVfcmVkaXJlY3QpIH1cbiAgICAgICAgb25SZXBseShyZXNwKVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBjb21wb25lbnRJRChlbCl7XG4gICAgbGV0IGNpZCA9IGVsLmdldEF0dHJpYnV0ZSAmJiBlbC5nZXRBdHRyaWJ1dGUoUEhYX0NPTVBPTkVOVClcbiAgICByZXR1cm4gY2lkID8gcGFyc2VJbnQoY2lkKSA6IG51bGxcbiAgfVxuXG4gIHRhcmdldENvbXBvbmVudElEKHRhcmdldCl7XG4gICAgcmV0dXJuIG1heWJlKHRhcmdldC5jbG9zZXN0KGBbJHtQSFhfQ09NUE9ORU5UfV1gKSwgZWwgPT4gdGhpcy5vd25zRWxlbWVudChlbCkgJiYgdGhpcy5jb21wb25lbnRJRChlbCkpXG4gIH1cblxuICBwdXNoRXZlbnQodHlwZSwgZWwsIHBoeEV2ZW50LCBtZXRhKXtcbiAgICBsZXQgcHJlZml4ID0gdGhpcy5iaW5kaW5nKFwidmFsdWUtXCIpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBuYW1lID0gZWwuYXR0cmlidXRlc1tpXS5uYW1lXG4gICAgICBpZihuYW1lLnN0YXJ0c1dpdGgocHJlZml4KSl7IG1ldGFbbmFtZS5yZXBsYWNlKHByZWZpeCwgXCJcIildID0gZWwuZ2V0QXR0cmlidXRlKG5hbWUpIH1cbiAgICB9XG4gICAgaWYoZWwudmFsdWUgIT09IHVuZGVmaW5lZCl7IG1ldGEudmFsdWUgPSBlbC52YWx1ZSB9XG5cbiAgICB0aGlzLnB1c2hXaXRoUmVwbHkoXCJldmVudFwiLCB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZXZlbnQ6IHBoeEV2ZW50LFxuICAgICAgdmFsdWU6IG1ldGEsXG4gICAgICBjaWQ6IHRoaXMudGFyZ2V0Q29tcG9uZW50SUQoZWwpXG4gICAgfSlcbiAgfVxuXG4gIHB1c2hLZXkoa2V5RWxlbWVudCwga2luZCwgcGh4RXZlbnQsIG1ldGEpe1xuICAgIGlmKGtleUVsZW1lbnQudmFsdWUgIT09IHVuZGVmaW5lZCl7IG1ldGEudmFsdWUgPSBrZXlFbGVtZW50LnZhbHVlIH1cblxuICAgIHRoaXMucHVzaFdpdGhSZXBseShcImV2ZW50XCIsIHtcbiAgICAgIHR5cGU6IGtpbmQsXG4gICAgICBldmVudDogcGh4RXZlbnQsXG4gICAgICB2YWx1ZTogbWV0YSxcbiAgICAgIGNpZDogdGhpcy50YXJnZXRDb21wb25lbnRJRChrZXlFbGVtZW50KVxuICAgIH0pXG4gIH1cblxuICBwdXNoSW5wdXQoaW5wdXRFbCwgcGh4RXZlbnQsIGUpe1xuICAgIERPTS5kaXNwYXRjaEV2ZW50KGlucHV0RWwuZm9ybSwgUEhYX0NIQU5HRSwge3RyaWdnZXJlZEJ5OiBpbnB1dEVsfSlcbiAgICB0aGlzLnB1c2hXaXRoUmVwbHkoXCJldmVudFwiLCB7XG4gICAgICB0eXBlOiBcImZvcm1cIixcbiAgICAgIGV2ZW50OiBwaHhFdmVudCxcbiAgICAgIHZhbHVlOiBzZXJpYWxpemVGb3JtKGlucHV0RWwuZm9ybSwge190YXJnZXQ6IGUudGFyZ2V0Lm5hbWV9KSxcbiAgICAgIGNpZDogdGhpcy50YXJnZXRDb21wb25lbnRJRChpbnB1dEVsKVxuICAgIH0pXG4gIH1cblxuICBwdXNoRm9ybVN1Ym1pdChmb3JtRWwsIHBoeEV2ZW50LCBvblJlcGx5KXtcbiAgICB0aGlzLnB1c2hXaXRoUmVwbHkoXCJldmVudFwiLCB7XG4gICAgICB0eXBlOiBcImZvcm1cIixcbiAgICAgIGV2ZW50OiBwaHhFdmVudCxcbiAgICAgIHZhbHVlOiBzZXJpYWxpemVGb3JtKGZvcm1FbCksXG4gICAgICBjaWQ6IHRoaXMudGFyZ2V0Q29tcG9uZW50SUQoZm9ybUVsKVxuICAgIH0sIG9uUmVwbHkpXG4gIH1cblxuICBwdXNoSW50ZXJuYWxMaW5rKGhyZWYsIGNhbGxiYWNrKXtcbiAgICBpZighdGhpcy5pc0xvYWRpbmcoKSl7IHRoaXMuc2hvd0xvYWRlcihMT0FERVJfVElNRU9VVCkgfVxuICAgIGxldCBsaW5rUmVmID0gdGhpcy5saXZlU29ja2V0LnNldFBlbmRpbmdMaW5rKGhyZWYpXG4gICAgdGhpcy5wdXNoV2l0aFJlcGx5KFwibGlua1wiLCB7dXJsOiBocmVmfSwgcmVzcCA9PiB7XG4gICAgICBpZihyZXNwLmxpbmtfcmVkaXJlY3Qpe1xuICAgICAgICB0aGlzLmxpdmVTb2NrZXQucmVwbGFjZVJvb3QoaHJlZiwgY2FsbGJhY2ssIGxpbmtSZWYpXG4gICAgICB9IGVsc2UgaWYodGhpcy5saXZlU29ja2V0LmNvbW1pdFBlbmRpbmdMaW5rKGxpbmtSZWYpKXtcbiAgICAgICAgdGhpcy5ocmVmID0gaHJlZlxuICAgICAgICB0aGlzLmFwcGx5UGVuZGluZ1VwZGF0ZXMoKVxuICAgICAgICB0aGlzLmhpZGVMb2FkZXIoKVxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSkucmVjZWl2ZShcInRpbWVvdXRcIiwgKCkgPT4gQnJvd3Nlci5yZWRpcmVjdCh3aW5kb3cubG9jYXRpb24uaHJlZikpXG4gIH1cblxuICBtYXliZVB1c2hDb21wb25lbnRzRGVzdHJveWVkKGRlc3Ryb3llZENJRHMpe1xuICAgIGxldCBjb21wbGV0ZWx5RGVzdHJveWVkQ0lEcyA9IGRlc3Ryb3llZENJRHMuZmlsdGVyKGNpZCA9PiB7XG4gICAgICByZXR1cm4gRE9NLmZpbmRDb21wb25lbnROb2RlTGlzdCh0aGlzLmVsLCBjaWQpLmxlbmd0aCA9PT0gMFxuICAgIH0pXG4gICAgaWYoY29tcGxldGVseURlc3Ryb3llZENJRHMubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLnB1c2hXaXRoUmVwbHkoXCJjaWRzX2Rlc3Ryb3llZFwiLCB7Y2lkczogY29tcGxldGVseURlc3Ryb3llZENJRHN9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZWQgPSBSZW5kZXJlZC5wcnVuZUNJRHModGhpcy5yZW5kZXJlZCwgY29tcGxldGVseURlc3Ryb3llZENJRHMpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG93bnNFbGVtZW50KGVsKXtcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKFBIWF9QQVJFTlRfSUQpID09PSB0aGlzLmlkIHx8XG4gICAgICAgICAgIG1heWJlKGVsLmNsb3Nlc3QoUEhYX1ZJRVdfU0VMRUNUT1IpLCBub2RlID0+IG5vZGUuaWQpID09PSB0aGlzLmlkXG4gIH1cblxuICBzdWJtaXRGb3JtKGZvcm0sIHBoeEV2ZW50KXtcbiAgICBsZXQgcHJlZml4ID0gdGhpcy5saXZlU29ja2V0LmdldEJpbmRpbmdQcmVmaXgoKVxuICAgIERPTS5wdXRQcml2YXRlKGZvcm0sIFBIWF9IQVNfU1VCTUlUVEVELCB0cnVlKVxuICAgIERPTS5kaXNhYmxlRm9ybShmb3JtLCBwcmVmaXgpXG4gICAgdGhpcy5saXZlU29ja2V0LmJsdXJBY3RpdmVFbGVtZW50KHRoaXMpXG4gICAgdGhpcy5wdXNoRm9ybVN1Ym1pdChmb3JtLCBwaHhFdmVudCwgKCkgPT4ge1xuICAgICAgRE9NLnJlc3RvcmVEaXNhYmxlZEZvcm0oZm9ybSwgcHJlZml4KVxuICAgICAgdGhpcy5saXZlU29ja2V0LnJlc3RvcmVQcmV2aW91c2x5QWN0aXZlRm9jdXMoKVxuICAgIH0pXG4gIH1cblxuICBiaW5kaW5nKGtpbmQpeyByZXR1cm4gdGhpcy5saXZlU29ja2V0LmJpbmRpbmcoa2luZCl9XG59XG5cbmxldCB2aWV3SG9va0lEID0gMVxuY2xhc3MgVmlld0hvb2sge1xuICBzdGF0aWMgbWFrZUlEKCl7IHJldHVybiB2aWV3SG9va0lEKysgfVxuICBzdGF0aWMgZWxlbWVudElEKGVsKXsgcmV0dXJuIGVsLnBoeEhvb2tJZCB9XG5cbiAgY29uc3RydWN0b3IodmlldywgZWwsIGNhbGxiYWNrcyl7XG4gICAgdGhpcy5fX3ZpZXcgPSB2aWV3XG4gICAgdGhpcy5fX2NhbGxiYWNrcyA9IGNhbGxiYWNrc1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMudmlld05hbWUgPSB2aWV3LnZpZXdcbiAgICB0aGlzLmVsLnBoeEhvb2tJZCA9IHRoaXMuY29uc3RydWN0b3IubWFrZUlEKClcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9fY2FsbGJhY2tzKXsgdGhpc1trZXldID0gdGhpcy5fX2NhbGxiYWNrc1trZXldIH1cbiAgfVxuXG4gIHB1c2hFdmVudChldmVudCwgcGF5bG9hZCA9IHt9KXtcbiAgICB0aGlzLl9fdmlldy5wdXNoV2l0aFJlcGx5KFwiZXZlbnRcIiwge3R5cGU6IFwiaG9va1wiLCBldmVudDogZXZlbnQsIHZhbHVlOiBwYXlsb2FkfSlcbiAgfVxuICBfX3RyaWdnZXJfXyhraW5kKXtcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLl9fY2FsbGJhY2tzW2tpbmRdXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbCh0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpdmVTb2NrZXRcbiIsImZ1bmN0aW9uIG1vcnBoQXR0cnMoZnJvbU5vZGUsIHRvTm9kZSkge1xuICAgIHZhciBhdHRycyA9IHRvTm9kZS5hdHRyaWJ1dGVzO1xuICAgIHZhciBpO1xuICAgIHZhciBhdHRyO1xuICAgIHZhciBhdHRyTmFtZTtcbiAgICB2YXIgYXR0ck5hbWVzcGFjZVVSSTtcbiAgICB2YXIgYXR0clZhbHVlO1xuICAgIHZhciBmcm9tVmFsdWU7XG5cbiAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudFxuICAgIGZvciAoaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyc1tpXTtcbiAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgIGF0dHJOYW1lc3BhY2VVUkkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgYXR0clZhbHVlID0gYXR0ci52YWx1ZTtcblxuICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLmxvY2FsTmFtZSB8fCBhdHRyTmFtZTtcbiAgICAgICAgICAgIGZyb21WYWx1ZSA9IGZyb21Ob2RlLmdldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4dHJhIGF0dHJpYnV0ZXMgZm91bmQgb24gdGhlIG9yaWdpbmFsIERPTSBlbGVtZW50IHRoYXRcbiAgICAvLyB3ZXJlbid0IGZvdW5kIG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICBhdHRycyA9IGZyb21Ob2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBhdHRyID0gYXR0cnNbaV07XG4gICAgICAgIGlmIChhdHRyLnNwZWNpZmllZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRvTm9kZS5oYXNBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5vZGUucmVtb3ZlQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlKGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHJhbmdlOyAvLyBDcmVhdGUgYSByYW5nZSBvYmplY3QgZm9yIGVmZmljZW50bHkgcmVuZGVyaW5nIHN0cmluZ3MgdG8gZWxlbWVudHMuXG52YXIgTlNfWEhUTUwgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5cbnZhciBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZG9jdW1lbnQ7XG52YXIgSEFTX1RFTVBMQVRFX1NVUFBPUlQgPSAhIWRvYyAmJiAnY29udGVudCcgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG52YXIgSEFTX1JBTkdFX1NVUFBPUlQgPSAhIWRvYyAmJiBkb2MuY3JlYXRlUmFuZ2UgJiYgJ2NyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCcgaW4gZG9jLmNyZWF0ZVJhbmdlKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlKHN0cikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IGRvYy5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cjtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21SYW5nZShzdHIpIHtcbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHJhbmdlID0gZG9jLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGUoZG9jLmJvZHkpO1xuICAgIH1cblxuICAgIHZhciBmcmFnbWVudCA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpO1xuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21XcmFwKHN0cikge1xuICAgIHZhciBmcmFnbWVudCA9IGRvYy5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgZnJhZ21lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgYWJvdXQgdGhlIHNhbWVcbiAqIHZhciBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKTtcbiAqIHJldHVybiBodG1sLmJvZHkuZmlyc3RDaGlsZDtcbiAqXG4gKiBAbWV0aG9kIHRvRWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICovXG5mdW5jdGlvbiB0b0VsZW1lbnQoc3RyKSB7XG4gICAgaWYgKEhBU19URU1QTEFURV9TVVBQT1JUKSB7XG4gICAgICAvLyBhdm9pZCByZXN0cmljdGlvbnMgb24gY29udGVudCBmb3IgdGhpbmdzIGxpa2UgYDx0cj48dGg+SGk8L3RoPjwvdHI+YCB3aGljaFxuICAgICAgLy8gY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IGRvZXNuJ3Qgc3VwcG9ydFxuICAgICAgLy8gPHRlbXBsYXRlPiBzdXBwb3J0IG5vdCBhdmFpbGFibGUgaW4gSUVcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpO1xuICAgIH0gZWxzZSBpZiAoSEFTX1JBTkdFX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21SYW5nZShzdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21XcmFwKHN0cik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHR3byBub2RlJ3MgbmFtZXMgYXJlIHRoZSBzYW1lLlxuICpcbiAqIE5PVEU6IFdlIGRvbid0IGJvdGhlciBjaGVja2luZyBgbmFtZXNwYWNlVVJJYCBiZWNhdXNlIHlvdSB3aWxsIG5ldmVyIGZpbmQgdHdvIEhUTUwgZWxlbWVudHMgd2l0aCB0aGUgc2FtZVxuICogICAgICAgbm9kZU5hbWUgYW5kIGRpZmZlcmVudCBuYW1lc3BhY2UgVVJJcy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAqIEBwYXJhbSB7RWxlbWVudH0gYiBUaGUgdGFyZ2V0IGVsZW1lbnRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVOb2RlTmFtZXMoZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGZyb21Ob2RlTmFtZSA9IGZyb21FbC5ub2RlTmFtZTtcbiAgICB2YXIgdG9Ob2RlTmFtZSA9IHRvRWwubm9kZU5hbWU7XG5cbiAgICBpZiAoZnJvbU5vZGVOYW1lID09PSB0b05vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0b0VsLmFjdHVhbGl6ZSAmJlxuICAgICAgICBmcm9tTm9kZU5hbWUuY2hhckNvZGVBdCgwKSA8IDkxICYmIC8qIGZyb20gdGFnIG5hbWUgaXMgdXBwZXIgY2FzZSAqL1xuICAgICAgICB0b05vZGVOYW1lLmNoYXJDb2RlQXQoMCkgPiA5MCAvKiB0YXJnZXQgdGFnIG5hbWUgaXMgbG93ZXIgY2FzZSAqLykge1xuICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSB2aXJ0dWFsIERPTSBub2RlIHRoZW4gd2UgbWF5IG5lZWQgdG8gbm9ybWFsaXplIHRoZSB0YWcgbmFtZVxuICAgICAgICAvLyBiZWZvcmUgY29tcGFyaW5nLiBOb3JtYWwgSFRNTCBlbGVtZW50cyB0aGF0IGFyZSBpbiB0aGUgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJcbiAgICAgICAgLy8gYXJlIGNvbnZlcnRlZCB0byB1cHBlciBjYXNlXG4gICAgICAgIHJldHVybiBmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50LCBvcHRpb25hbGx5IHdpdGggYSBrbm93biBuYW1lc3BhY2UgVVJJLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBlbGVtZW50IG5hbWUsIGUuZy4gJ2Rpdicgb3IgJ3N2ZydcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlVVJJXSB0aGUgZWxlbWVudCdzIG5hbWVzcGFjZSBVUkksIGkuZS4gdGhlIHZhbHVlIG9mXG4gKiBpdHMgYHhtbG5zYCBhdHRyaWJ1dGUgb3IgaXRzIGluZmVycmVkIG5hbWVzcGFjZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZSwgbmFtZXNwYWNlVVJJKSB7XG4gICAgcmV0dXJuICFuYW1lc3BhY2VVUkkgfHwgbmFtZXNwYWNlVVJJID09PSBOU19YSFRNTCA/XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50KG5hbWUpIDpcbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIG5hbWUpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgY2hpbGRyZW4gb2Ygb25lIERPTSBlbGVtZW50IHRvIGFub3RoZXIgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbW92ZUNoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICB2YXIgbmV4dENoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIHRvRWwuYXBwZW5kQ2hpbGQoY3VyQ2hpbGQpO1xuICAgICAgICBjdXJDaGlsZCA9IG5leHRDaGlsZDtcbiAgICB9XG4gICAgcmV0dXJuIHRvRWw7XG59XG5cbmZ1bmN0aW9uIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCBuYW1lKSB7XG4gICAgaWYgKGZyb21FbFtuYW1lXSAhPT0gdG9FbFtuYW1lXSkge1xuICAgICAgICBmcm9tRWxbbmFtZV0gPSB0b0VsW25hbWVdO1xuICAgICAgICBpZiAoZnJvbUVsW25hbWVdKSB7XG4gICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBzcGVjaWFsRWxIYW5kbGVycyA9IHtcbiAgICBPUFRJT046IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGZyb21FbC5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudE5hbWUgPSBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmVudE5hbWUgPT09ICdTRUxFQ1QnICYmICFwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpICYmICF0b0VsLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIE1TIEVkZ2UgYnVnIHdoZXJlIHRoZSAnc2VsZWN0ZWQnIGF0dHJpYnV0ZSBjYW4gb25seSBiZVxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmVkIGlmIHNldCB0byBhIG5vbi1lbXB0eSB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTIwODc2NzkvXG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVzZXQgc2VsZWN0IGVsZW1lbnQncyBzZWxlY3RlZEluZGV4IHRvIC0xLCBvdGhlcndpc2Ugc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGZyb21FbC5zZWxlY3RlZCB1c2luZyB0aGUgc3luY0Jvb2xlYW5BdHRyUHJvcCBiZWxvdyBoYXMgbm8gZWZmZWN0LlxuICAgICAgICAgICAgICAgIC8vIFRoZSBjb3JyZWN0IHNlbGVjdGVkSW5kZXggd2lsbCBiZSBzZXQgaW4gdGhlIFNFTEVDVCBzcGVjaWFsIGhhbmRsZXIgYmVsb3cuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdzZWxlY3RlZCcpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgaXMgc3BlY2lhbCBmb3IgdGhlIDxpbnB1dD4gZWxlbWVudCBzaW5jZSBpdCBzZXRzXG4gICAgICogdGhlIGluaXRpYWwgdmFsdWUuIENoYW5naW5nIHRoZSBcInZhbHVlXCIgYXR0cmlidXRlIHdpdGhvdXQgY2hhbmdpbmcgdGhlXG4gICAgICogXCJ2YWx1ZVwiIHByb3BlcnR5IHdpbGwgaGF2ZSBubyBlZmZlY3Qgc2luY2UgaXQgaXMgb25seSB1c2VkIHRvIHRoZSBzZXQgdGhlXG4gICAgICogaW5pdGlhbCB2YWx1ZS4gIFNpbWlsYXIgZm9yIHRoZSBcImNoZWNrZWRcIiBhdHRyaWJ1dGUsIGFuZCBcImRpc2FibGVkXCIuXG4gICAgICovXG4gICAgSU5QVVQ6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2NoZWNrZWQnKTtcbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT09IHRvRWwudmFsdWUpIHtcbiAgICAgICAgICAgIGZyb21FbC52YWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRvRWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFRFWFRBUkVBOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGZyb21FbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIC8vIE5lZWRlZCBmb3IgSUUuIEFwcGFyZW50bHkgSUUgc2V0cyB0aGUgcGxhY2Vob2xkZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBub2RlIHZhbHVlIGFuZCB2aXNlIHZlcnNhLiBUaGlzIGlnbm9yZXMgYW4gZW1wdHkgdXBkYXRlLlxuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gZmlyc3RDaGlsZC5ub2RlVmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PSBuZXdWYWx1ZSB8fCAoIW5ld1ZhbHVlICYmIG9sZFZhbHVlID09IGZyb21FbC5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQubm9kZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFNFTEVDVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIGxvb3AgdGhyb3VnaCBjaGlsZHJlbiBvZiBmcm9tRWwsIG5vdCB0b0VsIHNpbmNlIG5vZGVzIGNhbiBiZSBtb3ZlZFxuICAgICAgICAgICAgLy8gZnJvbSB0b0VsIHRvIGZyb21FbCBkaXJlY3RseSB3aGVuIG1vcnBoaW5nLlxuICAgICAgICAgICAgLy8gQXQgdGhlIHRpbWUgdGhpcyBzcGVjaWFsIGhhbmRsZXIgaXMgaW52b2tlZCwgYWxsIGNoaWxkcmVuIGhhdmUgYWxyZWFkeSBiZWVuIG1vcnBoZWRcbiAgICAgICAgICAgIC8vIGFuZCBhcHBlbmRlZCB0byAvIHJlbW92ZWQgZnJvbSBmcm9tRWwsIHNvIHVzaW5nIGZyb21FbCBoZXJlIGlzIHNhZmUgYW5kIGNvcnJlY3QuXG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBvcHRncm91cDtcbiAgICAgICAgICAgIHZhciBub2RlTmFtZTtcbiAgICAgICAgICAgIHdoaWxlKGN1ckNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbm9kZU5hbWUgPSBjdXJDaGlsZC5ub2RlTmFtZSAmJiBjdXJDaGlsZC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgICAgICBvcHRncm91cCA9IGN1ckNoaWxkO1xuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG9wdGdyb3VwLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUSU9OJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckNoaWxkLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VyQ2hpbGQgJiYgb3B0Z3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRncm91cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZyb21FbC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBFTEVNRU5UX05PREUgPSAxO1xudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgPSAxMTtcbnZhciBURVhUX05PREUgPSAzO1xudmFyIENPTU1FTlRfTk9ERSA9IDg7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Tm9kZUtleShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuaWQ7XG59XG5cbmZ1bmN0aW9uIG1vcnBoZG9tRmFjdG9yeShtb3JwaEF0dHJzKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbW9ycGhkb20oZnJvbU5vZGUsIHRvTm9kZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdG9Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGZyb21Ob2RlLm5vZGVOYW1lID09PSAnI2RvY3VtZW50JyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvTm9kZUh0bWwgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgdG9Ob2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICAgICAgICAgICAgICB0b05vZGUuaW5uZXJIVE1MID0gdG9Ob2RlSHRtbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9Ob2RlID0gdG9FbGVtZW50KHRvTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2V0Tm9kZUtleSA9IG9wdGlvbnMuZ2V0Tm9kZUtleSB8fCBkZWZhdWx0R2V0Tm9kZUtleTtcbiAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVBZGRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25Ob2RlQWRkZWQgPSBvcHRpb25zLm9uTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZUVsVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uRWxVcGRhdGVkID0gb3B0aW9ucy5vbkVsVXBkYXRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25CZWZvcmVOb2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25Ob2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBjaGlsZHJlbk9ubHkgPSBvcHRpb25zLmNoaWxkcmVuT25seSA9PT0gdHJ1ZTtcblxuICAgICAgICAvLyBUaGlzIG9iamVjdCBpcyB1c2VkIGFzIGEgbG9va3VwIHRvIHF1aWNrbHkgZmluZCBhbGwga2V5ZWQgZWxlbWVudHMgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLlxuICAgICAgICB2YXIgZnJvbU5vZGVzTG9va3VwID0ge307XG4gICAgICAgIHZhciBrZXllZFJlbW92YWxMaXN0O1xuXG4gICAgICAgIGZ1bmN0aW9uIGFkZEtleWVkUmVtb3ZhbChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXllZFJlbW92YWxMaXN0KSB7XG4gICAgICAgICAgICAgICAga2V5ZWRSZW1vdmFsTGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleWVkUmVtb3ZhbExpc3QgPSBba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBLZXllZE5vZGVzICYmIChrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBza2lwcGluZyBrZXllZCBub2RlcyB0aGVuIHdlIGFkZCB0aGUga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIGxpc3Qgc28gdGhhdCBpdCBjYW4gYmUgaGFuZGxlZCBhdCB0aGUgdmVyeSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVwb3J0IHRoZSBub2RlIGFzIGRpc2NhcmRlZCBpZiBpdCBpcyBub3Qga2V5ZWQuIFdlIGRvIHRoaXMgYmVjYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXQgdGhlIGVuZCB3ZSBsb29wIHRocm91Z2ggYWxsIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSB1bm1hdGNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIGRpc2NhcmQgdGhlbSBpbiBvbmUgZmluYWwgcGFzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKGN1ckNoaWxkLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGEgRE9NIG5vZGUgb3V0IG9mIHRoZSBvcmlnaW5hbCBET01cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAgICAgICAgICogQHBhcmFtICB7Tm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZXMgcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNraXBLZXllZE5vZGVzIElmIHRydWUgdGhlbiBlbGVtZW50cyB3aXRoIGtleXMgd2lsbCBiZSBza2lwcGVkIGFuZCBub3QgZGlzY2FyZGVkLlxuICAgICAgICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUsIHBhcmVudE5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAvLyBUcmVlV2Fsa2VyIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUocm9vdCkge1xuICAgICAgICAvLyAgICAgdmFyIHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICAvLyAgICAgICAgIHJvb3QsXG4gICAgICAgIC8vICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIGVsO1xuICAgICAgICAvLyAgICAgd2hpbGUoKGVsID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gLy8gTm9kZUl0ZXJhdG9yIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvL1xuICAgICAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgICAgICAvLyAgICAgdmFyIG5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgICAgIC8vICAgICB2YXIgZWw7XG4gICAgICAgIC8vICAgICB3aGlsZSgoZWwgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBjdXJDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFdhbGsgcmVjdXJzaXZlbHlcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhUcmVlKGN1ckNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4VHJlZShmcm9tTm9kZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTm9kZUFkZGVkKGVsKSB7XG4gICAgICAgICAgICBvbk5vZGVBZGRlZChlbCk7XG5cbiAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBjdXJDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1bm1hdGNoZWRGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVubWF0Y2hlZEZyb21FbCAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckNoaWxkLCB1bm1hdGNoZWRGcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gbmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjbGVhbnVwRnJvbUVsKGZyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCwgY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgXCJ0byBub2Rlc1wiLiBJZiBjdXJGcm9tTm9kZUNoaWxkIGlzXG4gICAgICAgICAgICAvLyBub24tbnVsbCB0aGVuIHdlIHN0aWxsIGhhdmUgc29tZSBmcm9tIG5vZGVzIGxlZnQgb3ZlciB0aGF0IG5lZWRcbiAgICAgICAgICAgIC8vIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIHdoaWxlIChjdXJGcm9tTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKChjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW9ycGhFbChmcm9tRWwsIHRvRWwsIGNoaWxkcmVuT25seSkge1xuICAgICAgICAgICAgdmFyIHRvRWxLZXkgPSBnZXROb2RlS2V5KHRvRWwpO1xuXG4gICAgICAgICAgICBpZiAodG9FbEtleSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGFuIGVsZW1lbnQgd2l0aCBhbiBJRCBpcyBiZWluZyBtb3JwaGVkIHRoZW4gaXQgd2lsbCBiZSBpbiB0aGUgZmluYWxcbiAgICAgICAgICAgICAgICAvLyBET00gc28gY2xlYXIgaXQgb3V0IG9mIHRoZSBzYXZlZCBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgZGVsZXRlIGZyb21Ob2Rlc0xvb2t1cFt0b0VsS2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvTm9kZS5pc1NhbWVOb2RlICYmIHRvTm9kZS5pc1NhbWVOb2RlKGZyb21Ob2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZUVsVXBkYXRlZChmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnQgZmlyc3RcbiAgICAgICAgICAgICAgICBtb3JwaEF0dHJzKGZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgICBvbkVsVXBkYXRlZChmcm9tRWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgbW9ycGhDaGlsZHJlbihmcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3BlY2lhbEVsSGFuZGxlcnMuVEVYVEFSRUEoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgICAgICB2YXIgY3VyVG9Ob2RlQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIGN1clRvTm9kZUtleTtcbiAgICAgICAgICAgIHZhciBjdXJGcm9tTm9kZUtleTtcblxuICAgICAgICAgICAgdmFyIGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIHZhciB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgdmFyIG1hdGNoaW5nRnJvbUVsO1xuXG4gICAgICAgICAgICAvLyB3YWxrIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgb3V0ZXI6IHdoaWxlIChjdXJUb05vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRvTmV4dFNpYmxpbmcgPSBjdXJUb05vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBjdXJUb05vZGVLZXkgPSBnZXROb2RlS2V5KGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgIC8vIHdhbGsgdGhlIGZyb21Ob2RlIGNoaWxkcmVuIGFsbCB0aGUgd2F5IHRocm91Z2hcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlICYmIGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIGlmIHRoZSBjdXJGcm9tTm9kZUNoaWxkIGRvZXNudCBoYXZlIGEgbWF0Y2ggd2l0aCB0aGUgY3VyVG9Ob2RlQ2hpbGRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQ29tcGF0aWJsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgRWxlbWVudCBub2Rlc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdGFyZ2V0IG5vZGUgaGFzIGEga2V5IHNvIHdlIHdhbnQgdG8gbWF0Y2ggaXQgdXAgd2l0aCB0aGUgY29ycmVjdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5ICE9PSBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nIGtleSBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgY2hlY2sgb3VyIGxvb2t1cCB0byBzZWUgaWYgdGhlcmUgaXMgYSBtYXRjaGluZyBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbU5leHRTaWJsaW5nID09PSBtYXRjaGluZ0Zyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHNpbmdsZSBlbGVtZW50IHJlbW92YWxzLiBUbyBhdm9pZCByZW1vdmluZyB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIG5vZGUgb3V0IG9mIHRoZSB0cmVlIChzaW5jZSB0aGF0IGNhbiBicmVhayBDU1MgdHJhbnNpdGlvbnMsIGV0Yy4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGluc3RlYWQgZGlzY2FyZCB0aGUgY3VycmVudCBub2RlIGFuZCB3YWl0IHVudGlsIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiB0byBwcm9wZXJseSBtYXRjaCB1cCB0aGUga2V5ZWQgdGFyZ2V0IGVsZW1lbnQgd2l0aCBpdHMgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGtleWVkIGVsZW1lbnQgc29tZXdoZXJlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGV0J3MgbW92ZSB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgaW50byB0aGUgY3VycmVudCBwb3NpdGlvbiBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogV2UgdXNlIGluc2VydEJlZm9yZSBpbnN0ZWFkIG9mIHJlcGxhY2VDaGlsZCBiZWNhdXNlIHdlIHdhbnQgdG8gZ28gdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYHJlbW92ZU5vZGUoKWAgZnVuY3Rpb24gZm9yIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgZGlzY2FyZGVkIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIGxpZmVjeWNsZSBob29rcyBhcmUgY29ycmVjdGx5IGludm9rZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEJlZm9yZShtYXRjaGluZ0Zyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IG1hdGNoaW5nRnJvbUVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG5vZGVzIGFyZSBub3QgY29tcGF0aWJsZSBzaW5jZSB0aGUgXCJ0b1wiIG5vZGUgaGFzIGEga2V5IGFuZCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIG5vIG1hdGNoaW5nIGtleWVkIG5vZGUgaW4gdGhlIHNvdXJjZSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBvcmlnaW5hbCBoYXMgYSBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gaXNDb21wYXRpYmxlICE9PSBmYWxzZSAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGNvbXBhdGlibGUgRE9NIGVsZW1lbnRzIHNvIHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBcImZyb21cIiBub2RlIHRvIG1hdGNoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhcmdldCBET00gbm9kZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTU9SUEhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IGN1ckZyb21Ob2RlVHlwZSA9PSBDT01NRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBUZXh0IG9yIENvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXBseSB1cGRhdGUgbm9kZVZhbHVlIG9uIHRoZSBvcmlnaW5hbCBub2RlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlICE9PSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgPSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIGJvdGggdGhlIFwidG9cIiBjaGlsZCBhbmQgdGhlIFwiZnJvbVwiIGNoaWxkIHNpbmNlIHdlIGZvdW5kIGEgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgZWxzZSB0byBkbyBhcyB3ZSBhbHJlYWR5IHJlY3Vyc2l2ZWx5IGNhbGxlZCBtb3JwaENoaWxkcmVuIGFib3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBObyBjb21wYXRpYmxlIG1hdGNoIHNvIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCBjb250aW51ZSB0cnlpbmcgdG8gZmluZCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIGluIHRoZSBvcmlnaW5hbCBET00uIEhvd2V2ZXIsIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgZnJvbSBub2RlIGlzIG5vdCBrZXllZFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBpcyBwb3NzaWJsZSB0aGF0IGEga2V5ZWQgbm9kZSBtaWdodCBtYXRjaCB1cCB3aXRoIGEgbm9kZSBzb21ld2hlcmUgZWxzZSBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0IHRyZWUgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzY2FyZCBpdCBqdXN0IHlldCBzaW5jZSBpdCBzdGlsbCBtaWdodCBmaW5kIGFcbiAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSBpbiB0aGUgZmluYWwgRE9NIHRyZWUuIEFmdGVyIGV2ZXJ5dGhpbmcgaXMgZG9uZSB3ZSB3aWxsIHJlbW92ZSBhbnkga2V5ZWQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBkaWRuJ3QgZmluZCBhIGhvbWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfSAvLyBFTkQ6IHdoaWxlKGN1ckZyb21Ob2RlQ2hpbGQpIHt9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB3ZSBkaWQgbm90IGZpbmQgYSBjYW5kaWRhdGUgbWF0Y2ggZm9yXG4gICAgICAgICAgICAgICAgLy8gb3VyIFwidG8gbm9kZVwiIGFuZCB3ZSBleGhhdXN0ZWQgYWxsIG9mIHRoZSBjaGlsZHJlbiBcImZyb21cIlxuICAgICAgICAgICAgICAgIC8vIG5vZGVzLiBUaGVyZWZvcmUsIHdlIHdpbGwganVzdCBhcHBlbmQgdGhlIGN1cnJlbnQgXCJ0b1wiIG5vZGVcbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgZW5kXG4gICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAmJiAobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkgJiYgY29tcGFyZU5vZGVOYW1lcyhtYXRjaGluZ0Zyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5hcHBlbmRDaGlsZChtYXRjaGluZ0Zyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoRWwobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgPSBvbkJlZm9yZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IGN1clRvTm9kZUNoaWxkLmFjdHVhbGl6ZShmcm9tRWwub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmFwcGVuZENoaWxkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KTtcblxuICAgICAgICAgICAgdmFyIHNwZWNpYWxFbEhhbmRsZXIgPSBzcGVjaWFsRWxIYW5kbGVyc1tmcm9tRWwubm9kZU5hbWVdO1xuICAgICAgICAgICAgaWYgKHNwZWNpYWxFbEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsRWxIYW5kbGVyKGZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRU5EOiBtb3JwaENoaWxkcmVuKC4uLilcblxuICAgICAgICB2YXIgbW9ycGhlZE5vZGUgPSBmcm9tTm9kZTtcbiAgICAgICAgdmFyIG1vcnBoZWROb2RlVHlwZSA9IG1vcnBoZWROb2RlLm5vZGVUeXBlO1xuICAgICAgICB2YXIgdG9Ob2RlVHlwZSA9IHRvTm9kZS5ub2RlVHlwZTtcblxuICAgICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGFyZSBnaXZlbiB0d28gRE9NIG5vZGVzIHRoYXQgYXJlIG5vdFxuICAgICAgICAgICAgLy8gY29tcGF0aWJsZSAoZS5nLiA8ZGl2PiAtLT4gPHNwYW4+IG9yIDxkaXY+IC0tPiBURVhUKVxuICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBhcmVOb2RlTmFtZXMoZnJvbU5vZGUsIHRvTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZSA9IG1vdmVDaGlsZHJlbihmcm9tTm9kZSwgY3JlYXRlRWxlbWVudE5TKHRvTm9kZS5ub2RlTmFtZSwgdG9Ob2RlLm5hbWVzcGFjZVVSSSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR29pbmcgZnJvbSBhbiBlbGVtZW50IG5vZGUgdG8gYSB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBtb3JwaGVkTm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERSkgeyAvLyBUZXh0IG9yIGNvbW1lbnQgbm9kZVxuICAgICAgICAgICAgICAgIGlmICh0b05vZGVUeXBlID09PSBtb3JwaGVkTm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlLm5vZGVWYWx1ZSAhPT0gdG9Ob2RlLm5vZGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUubm9kZVZhbHVlID0gdG9Ob2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IG5vZGUgdG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vcnBoZWROb2RlID09PSB0b05vZGUpIHtcbiAgICAgICAgICAgIC8vIFRoZSBcInRvIG5vZGVcIiB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgXCJmcm9tIG5vZGVcIiBzbyB3ZSBoYWQgdG9cbiAgICAgICAgICAgIC8vIHRvc3Mgb3V0IHRoZSBcImZyb20gbm9kZVwiIGFuZCB1c2UgdGhlIFwidG8gbm9kZVwiXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9ycGhFbChtb3JwaGVkTm9kZSwgdG9Ob2RlLCBjaGlsZHJlbk9ubHkpO1xuXG4gICAgICAgICAgICAvLyBXZSBub3cgbmVlZCB0byBsb29wIG92ZXIgYW55IGtleWVkIG5vZGVzIHRoYXQgbWlnaHQgbmVlZCB0byBiZVxuICAgICAgICAgICAgLy8gcmVtb3ZlZC4gV2Ugb25seSBkbyB0aGUgcmVtb3ZhbCBpZiB3ZSBrbm93IHRoYXQgdGhlIGtleWVkIG5vZGVcbiAgICAgICAgICAgIC8vIG5ldmVyIGZvdW5kIGEgbWF0Y2guIFdoZW4gYSBrZXllZCBub2RlIGlzIG1hdGNoZWQgdXAgd2UgcmVtb3ZlXG4gICAgICAgICAgICAvLyBpdCBvdXQgb2YgZnJvbU5vZGVzTG9va3VwIGFuZCB3ZSB1c2UgZnJvbU5vZGVzTG9va3VwIHRvIGRldGVybWluZVxuICAgICAgICAgICAgLy8gaWYgYSBrZXllZCBub2RlIGhhcyBiZWVuIG1hdGNoZWQgdXAgb3Igbm90XG4gICAgICAgICAgICBpZiAoa2V5ZWRSZW1vdmFsTGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MCwgbGVuPWtleWVkUmVtb3ZhbExpc3QubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFRvUmVtb3ZlID0gZnJvbU5vZGVzTG9va3VwW2tleWVkUmVtb3ZhbExpc3RbaV1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShlbFRvUmVtb3ZlLCBlbFRvUmVtb3ZlLnBhcmVudE5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hpbGRyZW5Pbmx5ICYmIG1vcnBoZWROb2RlICE9PSBmcm9tTm9kZSAmJiBmcm9tTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBpZiAobW9ycGhlZE5vZGUuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3JwaGVkTm9kZS5hY3R1YWxpemUoZnJvbU5vZGUub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgd2UgaGFkIHRvIHN3YXAgb3V0IHRoZSBmcm9tIG5vZGUgd2l0aCBhIG5ldyBub2RlIGJlY2F1c2UgdGhlIG9sZFxuICAgICAgICAgICAgLy8gbm9kZSB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdGFyZ2V0IG5vZGUgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBvbGQgRE9NIG5vZGUgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLiBUaGlzIGlzIG9ubHlcbiAgICAgICAgICAgIC8vIHBvc3NpYmxlIGlmIHRoZSBvcmlnaW5hbCBET00gbm9kZSB3YXMgcGFydCBvZiBhIERPTSB0cmVlIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZSBrbm93IGlzIHRoZSBjYXNlIGlmIGl0IGhhcyBhIHBhcmVudCBub2RlLlxuICAgICAgICAgICAgZnJvbU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobW9ycGhlZE5vZGUsIGZyb21Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICB9O1xufVxuXG52YXIgbW9ycGhkb20gPSBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycyk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vcnBoZG9tO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9