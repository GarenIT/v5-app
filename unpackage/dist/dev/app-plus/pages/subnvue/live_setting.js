"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!***********************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 17:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!***********************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 20:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 3:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),

/***/ 31:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),

/***/ 33:
/*!*********************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/common/api.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 20));\n// 接口域名\nvar apiUrl = \"http://v5_black_api.cqpig.cn\";\n// 接口文件\nvar interfaceFile = \"appapi\";\n// 与接口通讯的KEY\nvar appkey = 'abc123456';\n// 选择线路\nvar getWebDomain = function getWebDomain() {\n  var nowDomain = uni.getStorageSync('nowDomain_' + appkey);\n  if (nowDomain) {\n    return nowDomain;\n  } else {\n    return apiUrl;\n  }\n};\nvar nowUrl = getWebDomain();\n// 完整接口(域名+接口文件+接口方法)\nvar apiData = {\n  // 初始化接口\n  \"appInits\": nowUrl + \"/\" + interfaceFile + \"/appInit/appkey/\" + appkey,\n  // 获取APP版本信息\n  \"getVersion\": nowUrl + \"/\" + interfaceFile + \"/getVersion/appkey/\" + appkey,\n  // 首页数据\n  \"homeData\": nowUrl + \"/\" + interfaceFile + \"/homeMain/appkey/\" + appkey,\n  // 视频列表\n  \"videoData\": nowUrl + \"/\" + interfaceFile + \"/videoList/appkey/\" + appkey,\n  // 专题详情\n  \"getAlbum\": nowUrl + \"/\" + interfaceFile + \"/albumInfo/appkey/\" + appkey,\n  // 视频详情\n  \"videoInfo\": nowUrl + \"/\" + interfaceFile + \"/detail/appkey/\" + appkey,\n  // 添加收藏\n  \"addCollection\": nowUrl + \"/\" + interfaceFile + \"/addCollection/appkey/\" + appkey,\n  // 视频点赞\n  \"videoLike\": nowUrl + \"/\" + interfaceFile + \"/like/appkey/\" + appkey,\n  // 添加评论\n  \"addComment\": nowUrl + \"/\" + interfaceFile + \"/comment/appkey/\" + appkey,\n  // 评论列表\n  \"commentList\": nowUrl + \"/\" + interfaceFile + \"/commentList/appkey/\" + appkey,\n  // 统计用户在线接口\n  \"heartBeat\": nowUrl + \"/\" + interfaceFile + \"/heartbeat/appkey/\" + appkey,\n  // 登录接口\n  \"userLogin\": nowUrl + \"/\" + interfaceFile + \"/login/appkey/\" + appkey,\n  // 注册配置信息\n  \"getConfig\": nowUrl + \"/\" + interfaceFile + \"/getConfig/appkey/\" + appkey,\n  // 注册账号\n  \"userReg\": nowUrl + \"/\" + interfaceFile + \"/register/appkey/\" + appkey,\n  // 获取手机验证码\n  \"getMobileCode\": nowUrl + \"/\" + interfaceFile + \"/getMobileCode/appkey/\" + appkey,\n  // 读取个人信息\n  \"getInfo\": nowUrl + \"/\" + interfaceFile + \"/getUserInfo/appkey/\" + appkey,\n  // 签到\n  \"userSign\": nowUrl + \"/\" + interfaceFile + \"/userSign/appkey/\" + appkey,\n  // 我的钱包\n  \"myBalance\": nowUrl + \"/\" + interfaceFile + \"/balance/appkey/\" + appkey,\n  // 余额提现\n  \"getMoney\": nowUrl + \"/\" + interfaceFile + \"/getMoney/appkey/\" + appkey,\n  // 获取银行卡列表\n  \"getBank\": nowUrl + \"/\" + interfaceFile + \"/bankLists/appkey/\" + appkey,\n  // 获取用户银行卡列表\n  \"getUserBank\": nowUrl + \"/\" + interfaceFile + \"/userBankList/appkey/\" + appkey,\n  // 设置提现银行卡\n  \"setBank\": nowUrl + \"/\" + interfaceFile + \"/setDefaultBank/appkey/\" + appkey,\n  // 删除提现银行卡\n  \"delBank\": nowUrl + \"/\" + interfaceFile + \"/delBank/appkey/\" + appkey,\n  // 添加提现银行卡\n  \"addBank\": nowUrl + \"/\" + interfaceFile + \"/addBank/appkey/\" + appkey,\n  // 提现记录\n  \"getDeposit\": nowUrl + \"/\" + interfaceFile + \"/depositLog/appkey/\" + appkey,\n  // 账户明细\n  \"getDetailed\": nowUrl + \"/\" + interfaceFile + \"/detailedList/appkey/\" + appkey,\n  // 修改昵称,手机号,头像\n  \"editInfo\": nowUrl + \"/\" + interfaceFile + \"/editInfo/appkey/\" + appkey,\n  // 上传接口\n  \"upload\": nowUrl + \"/\" + interfaceFile + \"/upload/appkey/\" + appkey,\n  // 收藏列表\n  \"getColl\": nowUrl + \"/\" + interfaceFile + \"/collectionList/appkey/\" + appkey,\n  // 删除收藏视频\n  \"delColl\": nowUrl + \"/\" + interfaceFile + \"/deleteCollection/appkey/\" + appkey,\n  // 我的足迹\n  \"getWatchLog\": nowUrl + \"/\" + interfaceFile + \"/getWatchLog/appkey/\" + appkey,\n  // 短视频购买记录\n  \"getSvodBuyLog\": nowUrl + \"/\" + interfaceFile + \"/getSvodBuyLog/appkey/\" + appkey,\n  // 删除我的足迹\n  \"delWatchLog\": nowUrl + \"/\" + interfaceFile + \"/delWatchLog/appkey/\" + appkey,\n  // 我的分享\n  \"myShare\": nowUrl + \"/\" + interfaceFile + \"/myShare/appkey/\" + appkey,\n  // 分享记录\n  \"getShareLog\": nowUrl + \"/\" + interfaceFile + \"/shareLog/appkey/\" + appkey,\n  // 修改密码\n  \"changePwd\": nowUrl + \"/\" + interfaceFile + \"/changePwd/appkey/\" + appkey,\n  // 充值套餐\n  \"getCharge\": nowUrl + \"/\" + interfaceFile + \"/getChargeData/appkey/\" + appkey,\n  // 支付方式\n  \"getPayList\": nowUrl + \"/\" + interfaceFile + \"/getPayList/appkey/\" + appkey,\n  // 创建订单\n  \"createOrder\": nowUrl + \"/\" + interfaceFile + \"/createOrder/appkey/\" + appkey,\n  // 关于我们\n  \"getAbout\": nowUrl + \"/\" + interfaceFile + \"/getAbout/appkey/\" + appkey,\n  // 活动列表\n  \"getGameList\": nowUrl + \"/\" + interfaceFile + \"/getGameList/appkey/\" + appkey,\n  // 幸运转盘\n  \"getPrize\": nowUrl + \"/\" + interfaceFile + \"/getPrize/appkey/\" + appkey,\n  // 购买视频\n  \"buyVideo\": nowUrl + \"/\" + interfaceFile + \"/buy/appkey/\" + appkey,\n  // 热门搜索\n  \"getHotSearch\": nowUrl + \"/\" + interfaceFile + \"/getHotSearch/appkey/\" + appkey,\n  // 发起搜索\n  \"searchVideo\": nowUrl + \"/\" + interfaceFile + \"/searchVideo/appkey/\" + appkey,\n  // 清空搜索记录\n  \"emptySearch\": nowUrl + \"/\" + interfaceFile + \"/emptySearch/appkey/\" + appkey,\n  // 获广告\n  \"getAd\": nowUrl + \"/\" + interfaceFile + \"/getAd/appkey/\" + appkey,\n  // 获取分享者id\n  \"getSharePid\": nowUrl + \"/\" + interfaceFile + \"/getSharePid/appkey/\" + appkey,\n  // 发帖图片\n  \"uploadImg\": nowUrl + \"/\" + interfaceFile + \"/uploadImg/appkey/\" + appkey,\n  // 广场首页数据\n  \"getPlazaList\": nowUrl + \"/\" + interfaceFile + \"/communityHomepage/appkey/\" + appkey,\n  // 帖子详情获取评论\n  \"getComment\": nowUrl + \"/\" + interfaceFile + \"/getPostComment/appkey/\" + appkey,\n  // 帖子详情广告\n  \"getAdInfo\": nowUrl + \"/\" + interfaceFile + \"/getAdInfo/appkey/\" + appkey,\n  // 发帖\n  \"sendComment\": nowUrl + \"/\" + interfaceFile + \"/sendPostComment/appkey/\" + appkey,\n  // 个人主页\n  \"homePage\": nowUrl + \"/\" + interfaceFile + \"/homePage/appkey/\" + appkey,\n  // 上传配置\n  \"uploadConfig\": nowUrl + \"/\" + interfaceFile + \"/getUploadConfig/appkey/\" + appkey,\n  // 顶部导航\n  \"getTopMenu\": nowUrl + \"/\" + interfaceFile + \"/getTopMenu/appkey/\" + appkey,\n  /********************** 直播相关 **********************/\n  // 获取主播列表\n  \"getAnchorList\": nowUrl + \"/\" + interfaceFile + \"/getAnchorList/appkey/\" + appkey,\n  // 购买付费房\n  \"buyGoldRoom\": nowUrl + \"/\" + interfaceFile + \"/buyGoldRoom/appkey/\" + appkey,\n  // 查询用户是否为主播\n  \"getUserAnchor\": nowUrl + \"/\" + interfaceFile + \"/getUserIsAnchor/appkey/\" + appkey,\n  // 签约主播\n  \"regAnchor\": nowUrl + \"/\" + interfaceFile + \"/regAnchor/appkey/\" + appkey,\n  // 进入直播间\n  \"playerConfig\": nowUrl + \"/\" + interfaceFile + \"/enterTheStudio/appkey/\" + appkey,\n  // 关注主播\n  \"focusAnchor\": nowUrl + \"/\" + interfaceFile + \"/focusOnTheAnchor/appkey/\" + appkey,\n  // 退出直播间\n  \"logoutRoom\": nowUrl + \"/\" + interfaceFile + \"/exitTheStudio/appkey/\" + appkey,\n  // 打赏主播\n  \"giveAnchor\": nowUrl + \"/\" + interfaceFile + \"/rewardTheAnchor/appkey/\" + appkey,\n  // 开始直播\n  \"liveInitData\": nowUrl + \"/\" + interfaceFile + \"/startLiveBroadcast/appkey/\" + appkey,\n  // 保存房间信息\n  \"saveRoomData\": nowUrl + \"/\" + interfaceFile + \"/saveRoomData/appkey/\" + appkey,\n  // 上传封面图片\n  \"roomUploadImg\": nowUrl + \"/\" + interfaceFile + \"/roomUploadImg/appkey/\" + appkey,\n  // 结束直播并结算\n  \"endLivePlayer\": nowUrl + \"/\" + interfaceFile + \"/endLiveBroadcast/appkey/\" + appkey,\n  // 禁言与恢复\n  \"updateSendMs\": nowUrl + \"/\" + interfaceFile + \"/updateSendMs/appkey/\" + appkey,\n  // 主播踢人出房间\n  \"anchorOutUser\": nowUrl + \"/\" + interfaceFile + \"/anchorOutUser/appkey/\" + appkey,\n  // 图片 + 资讯\n  \"getPicture\": nowUrl + \"/\" + interfaceFile + \"/getPicture/appkey/\" + appkey,\n  // 购买图片\n  \"buyPicture\": nowUrl + \"/\" + interfaceFile + \"/buyPicture/appkey/\" + appkey,\n  // 图片详情\n  \"pictureInfo\": nowUrl + \"/\" + interfaceFile + \"/pictureInfo/appkey/\" + appkey,\n  // app内打开H5\n  \"openH5Url\": nowUrl + \"/\" + interfaceFile + \"/openH5Url/appkey/\" + appkey,\n  // 上传试看时间\n  \"updateTryTime\": nowUrl + \"/\" + interfaceFile + \"/updateTryTime/appkey/\" + appkey,\n  // 获取专题列表\n  \"getAlbumList\": nowUrl + \"/\" + interfaceFile + \"/getAlbumList/appkey/\" + appkey,\n  // 我的团队\n  \"getUserTeam\": nowUrl + \"/\" + interfaceFile + \"/getUserTeam/appkey/\" + appkey,\n  // 直播记录\n  \"getPlayerLog\": nowUrl + \"/\" + interfaceFile + \"/getPlayerLog/appkey/\" + appkey,\n  // 礼物记录\n  \"getPlayerGift\": nowUrl + \"/\" + interfaceFile + \"/getPlayerGift/appkey/\" + appkey,\n  // 长视频分类筛选\n  \"getFilterData\": nowUrl + \"/\" + interfaceFile + \"/getFilterData/appkey/\" + appkey,\n  // 长视频分类筛选视频\n  \"getFilters\": nowUrl + \"/\" + interfaceFile + \"/getFilterVideo/appkey/\" + appkey,\n  // 长视频\n  \"getClassData\": nowUrl + \"/\" + interfaceFile + \"/getClassData/appkey/\" + appkey,\n  // 长视频下分类视频\n  \"getClassVideo\": nowUrl + \"/\" + interfaceFile + \"/getClassVideoData/appkey/\" + appkey,\n  // 长视频标签\n  \"getTagData\": nowUrl + \"/\" + interfaceFile + \"/getTagData/appkey/\" + appkey,\n  // 短视频\n  \"getSvodClass\": nowUrl + \"/\" + interfaceFile + \"/getSvodClassData/appkey/\" + appkey,\n  // 大分类短视频\n  \"getSvodData\": nowUrl + \"/\" + interfaceFile + \"/getSvodClassVideoData/appkey/\" + appkey,\n  // 加载短视频\n  \"getSvodMain\": nowUrl + \"/\" + interfaceFile + \"/getSvodMain/appkey/\" + appkey,\n  // 扣除免费次数\n  \"updateFree\": nowUrl + \"/\" + interfaceFile + \"/updateFree/appkey/\" + appkey,\n  // 金币购买视频\n  \"goldBuyVideo\": nowUrl + \"/\" + interfaceFile + \"/goldBuyVideo/appkey/\" + appkey,\n  // 点赞\n  \"likeSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/likeSvodVideo/appkey/\" + appkey,\n  // 短视频评论列表\n  \"svodVideoComm\": nowUrl + \"/\" + interfaceFile + \"/svodVideoComment/appkey/\" + appkey,\n  // 短视频评论\n  \"sendVideoComm\": nowUrl + \"/\" + interfaceFile + \"/sendVideoComment/appkey/\" + appkey,\n  // 按标签获取短视频\n  \"tagSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/tagSvodVideo/appkey/\" + appkey,\n  // 短视频播放\n  \"playSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/playSvodVideo/appkey/\" + appkey,\n  // 周下载量记数\n  \"vipWeekDowns\": nowUrl + \"/\" + interfaceFile + \"/vipWeekDowns/appkey/\" + appkey,\n  /* 不需要APPKEY的统一放在下面 */\n  // 去支付\n  \"getPay\": nowUrl + \"/\" + interfaceFile + \"/pay\",\n  // 服务协议\n  \"agreement\": nowUrl + \"/\" + interfaceFile + \"/privacy/type/1\",\n  // 隐私政策\n  \"privacy\": nowUrl + \"/\" + interfaceFile + \"/privacy/type/2\"\n};\n// 是否登录 未登录返回false\nvar getLogins = function getLogins() {\n  try {\n    var res = uni.getStorageSync('userInfo_' + appkey);\n    return res ? res : false;\n  } catch (e) {\n    return false;\n  }\n};\n// 缓存登录信息\nvar setLogins = function setLogins(data) {\n  try {\n    uni.setStorageSync('userInfo_' + appkey, data);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};\n// 注销登录\nvar delLogins = function delLogins() {\n  try {\n    uni.removeStorageSync('userInfo_' + appkey);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};\n/*\r\n* randomWord 产生任意长度随机字母数字组合\r\n* randomFlag 是否任意长度 min 任意长度最小位[固定位数] max 任意长度最大位\r\n*\r\n* 生成6—12位随机字符串 ：randomWord(true,6,12)\r\n* 生成随机的6位字符串 ： randomWord(false,6) \r\n* type : true纯数字,false为数字和字母\r\n*/\nvar randomWord = function randomWord() {\n  var randomFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var min = arguments.length > 2 ? arguments[2] : undefined;\n  var max = arguments.length > 3 ? arguments[3] : undefined;\n  var str = \"\",\n    range = min;\n  if (type) {\n    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];\n  } else {\n    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\n  }\n  //'-','.','~','!','@','#','$','%','^','&','*','(',')','_',':','<','>','?'\n  if (randomFlag) {\n    range = Math.round(Math.random() * (max - min)) + min; // 任意长度\n  }\n\n  for (var i = 0; i < range; i++) {\n    var pos = Math.round(Math.random() * (arr.length - 1));\n    str += arr[pos];\n  }\n  return str;\n};\n// 同步缓存图片\nvar imgCache = function imgCache(image_url, backFun) {\n  var image_name = splitUrl(image_url) + appkey + '';\n  //uni.removeStorageSync(image_name);\n  //console.log(image_name)\n  var imgUrl = uni.getStorageSync(image_name);\n  // 存在则读缓存 \n  if (imgUrl) {\n    //if(uni.getSystemInfoSync().platform == 'ios') imgUrl = \"file:\" + imgUrl;\n    plus.io.resolveLocalFileSystemURL(imgUrl, function (entry) {\n      entry.file(function (file) {\n        //console.log(imgUrl);\n      });\n    }, function (err) {\n      uni.removeStorageSync(image_name);\n    });\n    backFun(imgUrl);\n    //console.log(imgUrl)\n  } else {\n    backFun(image_url);\n    //console.log(image_url);\n    // 本地没有缓存则下载 \n    uni.downloadFile({\n      url: image_url,\n      success: function success(res) {\n        //console.log(res.tempFilePath);\n        if (res.statusCode == 200) {\n          uni.saveFile({\n            tempFilePath: res.tempFilePath,\n            success: function success(e) {\n              var savedFilePath = e.savedFilePath;\n              uni.setStorageSync(image_name, savedFilePath);\n            }\n          });\n        }\n      }\n    });\n  }\n};\n// 获得URL中的文件名\nvar splitUrl = function splitUrl(imgUrl) {\n  if (!imgUrl) return false;\n  var imgArr = imgUrl.split('/');\n  var fileName = imgArr[imgArr.length - 1];\n  return fileName;\n};\n// 加载提示\nvar showToast = function showToast() {\n  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;\n  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';\n  var image = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n  uni.showToast({\n    icon: style,\n    title: title,\n    mask: true,\n    duration: times,\n    image: image\n  });\n};\nvar getFileSize = function getFileSize(fileByte) {\n  try {\n    var fileSizeByte = fileByte;\n    var fileSizeMsg = \"\";\n    if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2);else if (fileSizeByte == 1048576) fileSizeMsg = 1;else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2);else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = \"1GB\";else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2);else fileSizeMsg = \"文件超过1TB\";\n    return fileSizeMsg;\n  } catch (e) {\n    return false;\n  }\n};\n\n// 获取设备ID\nvar getMobileDid = function getMobileDid(backFun) {\n  var phone = uni.getSystemInfoSync();\n  var did = phone.deviceId;\n  if (did.length > 0) {\n    var did = did.split(\"|\").filter(function (r) {\n      return r && r.trim();\n    });\n    backFun(did[did.length - 1]);\n  } else {\n    plus.device.getInfo({\n      success: function success(e) {\n        if (phone.platform == 'android') {\n          var arr = e.uuid.split(\",\");\n          did = arr[0];\n        } else {\n          did = e.uuid;\n        }\n      },\n      fail: function fail(e) {\n        did = getMobileRandDid();\n      },\n      complete: function complete(e) {\n        backFun(did);\n      }\n    });\n  }\n};\n// 随机设备ID\nvar getMobileRandDid = function getMobileRandDid() {\n  var didKey = 'my_did_' + appkey;\n  var getDid = uni.getStorageSync(didKey);\n  if (getDid) {\n    return getDid;\n  } else {\n    var randDid = randomWord(false, false, 16, 16);\n    uni.setStorageSync(didKey, 'H5' + randDid);\n    return randDid;\n  }\n};\n// 关闭APP\nvar outApp = function outApp() {\n  switch (uni.getSystemInfoSync().platform) {\n    case 'android':\n      plus.runtime.quit();\n      break;\n    case 'ios':\n      plus.ios.import('UIApplication').sharedApplication().performSelector('exit');\n      break;\n  }\n};\n// 跳转方法\nvar jumpUrl = function jumpUrl(url) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'web';\n  var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  return function (delta) {\n    if (url == '#' || url == '') return false;\n    if (url == 'back') {\n      var delta = parseInt(type) ? type : 1;\n      uni.navigateBack({\n        delta: delta\n      });\n      return;\n    }\n    switch (type) {\n      // 原窗口\n      case 'old':\n        uni.reLaunch({\n          url: url\n        });\n        break;\n      // 不关闭当前页跳转\n      case 'new':\n        uni.navigateTo({\n          url: url\n        });\n        break;\n      // tabBar\n      case 'tab':\n        uni.switchTab({\n          url: url\n        });\n        break;\n      // 关闭当前页跳转\n      case 'newx':\n        uni.redirectTo({\n          url: url\n        });\n        break;\n      // APP内打开链接\n      case 'app':\n        var app = '/pages/jump/index?u=' + url;\n        //console.log(app)\n        uni.navigateTo({\n          url: app\n        });\n        break;\n      // 跳至外置浏揽器\n      default:\n        plus.runtime.openURL(url);\n    }\n  }(delta);\n};\n// 复制H5+APP\nvar copy = function copy(str) {\n  var content = str + '';\n  uni.setClipboardData({\n    data: content,\n    success: function success() {\n      showToast('复制成功', 2000);\n    }\n  });\n};\nvar h5Copy = function h5Copy(content) {\n  if (!document.queryCommandSupported('copy')) return false;\n  var textarea = document.createElement(\"textarea\");\n  textarea.value = content;\n  textarea.readOnly = \"readOnly\";\n  document.body.appendChild(textarea);\n  textarea.select(); // 选择对象\n  textarea.setSelectionRange(0, content.length); //核心\n  var result = document.execCommand(\"copy\"); // 执行浏览器复制命令\n  textarea.remove();\n  return result;\n};\nvar bgView = null;\n// 创建原生View控件\nvar createView = function createView() {\n  var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '50px';\n  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.3';\n  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  /* if(uni.getSystemInfoSync().platform == 'ios' && height=='50px'){\r\n  \theight = '105px';\r\n  } */\n  bgView = new plus.nativeObj.View('bg', {\n    bottom: '0px',\n    left: '0px',\n    height: height,\n    width: '100%',\n    opacity: opacity,\n    backgroundColor: 'rgba(0,0,0,1)'\n  });\n  if (text != '') {\n    bgView.drawText(text, {\n      widht: '100%',\n      height: '100%'\n    }, {\n      size: '18px',\n      color: '#fff'\n      //backgroundColor: '#FFFFFF'\n    });\n  }\n\n  bgView.show();\n};\n// 关闭罩层\nvar closeView = function closeView() {\n  bgView.close();\n};\n// 打电话给xxx\nvar callUp = function callUp(number) {\n  uni.makePhoneCall({\n    phoneNumber: number + '',\n    fail: function fail() {\n      api.showToast('操作失败', 2000);\n    }\n  });\n};\nvar getContacts = function getContacts(backFun) {\n  plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {\n    addressbook.find([\"displayName\", \"phoneNumbers\"], function (contacts) {\n      //console.log(contacts);\n      backFun(contacts);\n    }, function () {\n      backFun(false);\n    }, {\n      multiple: true\n    });\n  }, function (e) {\n    backFun(false);\n  });\n};\nvar formatSeconds = function formatSeconds(value) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var result = parseInt(value);\n  var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n  var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);\n  var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n  var res = '';\n  if (type == 1) {\n    res += \"\".concat(h, \":\");\n    res += \"\".concat(m, \":\");\n    res += \"\".concat(s);\n  } else {\n    res += \"\".concat(h, \"\\u65F6\");\n    res += \"\".concat(m, \"\\u5206\");\n    res += \"\".concat(s, \"\\u79D2\");\n  }\n  return res;\n};\n/* 获取远程文件大小 */\nvar getWebFileSize = function getWebFileSize() {\n  var filed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var backFun = arguments.length > 1 ? arguments[1] : undefined;\n  var resSize = 0;\n  if (filed.length < 1) {\n    backFun(resSize);\n    return;\n  }\n  uni.request({\n    url: filed,\n    method: 'HEAD',\n    success: function success(e) {\n      if (e.statusCode == 200) {\n        resSize = getFileSize(e.header['Content-Length']); // 调用函数换算单位\n      }\n    },\n\n    complete: function complete() {\n      backFun(resSize);\n    }\n  });\n};\n// H5获取浏览器类型\nvar isH5 = function isH5() {\n  var Sys = {\n    'type': 'app',\n    'ver': 0\n  };\n  return Sys;\n};\nvar str_repeat = function str_repeat(i, m) {\n  for (var o = []; m > 0; o[--m] = i) {\n    ;\n  }\n  return o.join('');\n};\n\n/* \r\nvar classic = $.sprintf('%s %d%% %.3f', 'string', 40, 3.141593); \r\n// classic = 'string 40% 3.142' \r\n\r\nvar named = $.sprintf('%(name)s: %(value)d', {name: 'age', value: 40}); \r\n// named = 'age: 40'\r\n\r\nvar classic = $.vsprintf('%s %d%% %.3f', ['string', 40, 3.141593]); \r\n// classic = 'string 40% 3.142'\r\n\r\nvar named = $.vsprintf('%(name)s: %(value)d', [{name: 'age', value: 40}]); \r\n// named = 'age: 40' \r\n */\nvar sprintf = function sprintf() {\n  var i = 0,\n    a,\n    f = arguments[i++],\n    o = [],\n    m,\n    p,\n    c,\n    x,\n    s = '';\n  while (f) {\n    if (m = /^[^\\x25]+/.exec(f)) {\n      o.push(m[0]);\n    } else if (m = /^\\x25{2}/.exec(f)) {\n      o.push('%');\n    } else if (m = /^\\x25(?:(\\d+)\\$)?(\\+)?(0|'[^$])?(-)?(\\d+)?(?:\\.(\\d+))?([b-fosuxX])/.exec(f)) {\n      if ((a = arguments[m[1] || i++]) == null || a == undefined) {\n        throw 'Too few arguments.';\n      }\n      if (/[^s]/.test(m[7]) && typeof a != 'number') {\n        throw 'Expecting number but found ' + (0, _typeof2.default)(a);\n      }\n      switch (m[7]) {\n        case 'b':\n          a = a.toString(2);\n          break;\n        case 'c':\n          a = String.fromCharCode(a);\n          break;\n        case 'd':\n          a = parseInt(a);\n          break;\n        case 'e':\n          a = m[6] ? a.toExponential(m[6]) : a.toExponential();\n          break;\n        case 'f':\n          a = m[6] ? parseFloat(a).toFixed(m[6]) : parseFloat(a);\n          break;\n        case 'o':\n          a = a.toString(8);\n          break;\n        case 's':\n          a = (a = String(a)) && m[6] ? a.substring(0, m[6]) : a;\n          break;\n        case 'u':\n          a = Math.abs(a);\n          break;\n        case 'x':\n          a = a.toString(16);\n          break;\n        case 'X':\n          a = a.toString(16).toUpperCase();\n          break;\n      }\n      a = /[def]/.test(m[7]) && m[2] && a >= 0 ? '+' + a : a;\n      c = m[3] ? m[3] == '0' ? '0' : m[3].charAt(1) : ' ';\n      x = m[5] - String(a).length - s.length;\n      p = m[5] ? str_repeat(c, x) : '';\n      o.push(s + (m[4] ? a + p : p + a));\n    } else {\n      throw 'Huh ?!';\n    }\n    f = f.substring(m[0].length);\n  }\n  return o.join('');\n};\n\n/* H5版权日志 */\nvar printLog = function printLog() {\n  __f__(\"log\", ' ========= copyright: 魅思视频v4 ========= ', \" at common/api.js:702\");\n};\n\n// 注册\nvar _default = {\n  appkey: appkey,\n  apiUrl: apiUrl,\n  apiData: apiData,\n  getLogins: getLogins,\n  setLogins: setLogins,\n  delLogins: delLogins,\n  randomWord: randomWord,\n  imgCache: imgCache,\n  splitUrl: splitUrl,\n  showToast: showToast,\n  getFileSize: getFileSize,\n  getWebDomain: getWebDomain,\n  getMobileDid: getMobileDid,\n  outApp: outApp,\n  jumpUrl: jumpUrl,\n  copy: copy,\n  createView: createView,\n  closeView: closeView,\n  callUp: callUp,\n  getContacts: getContacts,\n  formatSeconds: formatSeconds,\n  nowUrl: nowUrl,\n  getWebFileSize: getWebFileSize,\n  isH5: isH5,\n  printLog: printLog,\n  sprintf: sprintf\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 31)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2FwaS5qcyJdLCJuYW1lcyI6WyJhcGlVcmwiLCJpbnRlcmZhY2VGaWxlIiwiYXBwa2V5IiwiZ2V0V2ViRG9tYWluIiwibm93RG9tYWluIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJub3dVcmwiLCJhcGlEYXRhIiwiZ2V0TG9naW5zIiwicmVzIiwiZSIsInNldExvZ2lucyIsImRhdGEiLCJzZXRTdG9yYWdlU3luYyIsImRlbExvZ2lucyIsInJlbW92ZVN0b3JhZ2VTeW5jIiwicmFuZG9tV29yZCIsInJhbmRvbUZsYWciLCJ0eXBlIiwibWluIiwibWF4Iiwic3RyIiwicmFuZ2UiLCJhcnIiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJpIiwicG9zIiwibGVuZ3RoIiwiaW1nQ2FjaGUiLCJpbWFnZV91cmwiLCJiYWNrRnVuIiwiaW1hZ2VfbmFtZSIsInNwbGl0VXJsIiwiaW1nVXJsIiwicGx1cyIsImlvIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsImVudHJ5IiwiZmlsZSIsImVyciIsImRvd25sb2FkRmlsZSIsInVybCIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwic2F2ZUZpbGUiLCJ0ZW1wRmlsZVBhdGgiLCJzYXZlZEZpbGVQYXRoIiwiaW1nQXJyIiwic3BsaXQiLCJmaWxlTmFtZSIsInNob3dUb2FzdCIsInRpdGxlIiwidGltZXMiLCJzdHlsZSIsImltYWdlIiwiaWNvbiIsIm1hc2siLCJkdXJhdGlvbiIsImdldEZpbGVTaXplIiwiZmlsZUJ5dGUiLCJmaWxlU2l6ZUJ5dGUiLCJmaWxlU2l6ZU1zZyIsInRvRml4ZWQiLCJnZXRNb2JpbGVEaWQiLCJwaG9uZSIsImdldFN5c3RlbUluZm9TeW5jIiwiZGlkIiwiZGV2aWNlSWQiLCJmaWx0ZXIiLCJyIiwidHJpbSIsImRldmljZSIsImdldEluZm8iLCJwbGF0Zm9ybSIsInV1aWQiLCJmYWlsIiwiZ2V0TW9iaWxlUmFuZERpZCIsImNvbXBsZXRlIiwiZGlkS2V5IiwiZ2V0RGlkIiwicmFuZERpZCIsIm91dEFwcCIsInJ1bnRpbWUiLCJxdWl0IiwiaW9zIiwiaW1wb3J0Iiwic2hhcmVkQXBwbGljYXRpb24iLCJwZXJmb3JtU2VsZWN0b3IiLCJqdW1wVXJsIiwiZGVsdGEiLCJwYXJzZUludCIsIm5hdmlnYXRlQmFjayIsInJlTGF1bmNoIiwibmF2aWdhdGVUbyIsInN3aXRjaFRhYiIsInJlZGlyZWN0VG8iLCJhcHAiLCJvcGVuVVJMIiwiY29weSIsImNvbnRlbnQiLCJzZXRDbGlwYm9hcmREYXRhIiwiaDVDb3B5IiwiZG9jdW1lbnQiLCJxdWVyeUNvbW1hbmRTdXBwb3J0ZWQiLCJ0ZXh0YXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInJlYWRPbmx5IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZXN1bHQiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImJnVmlldyIsImNyZWF0ZVZpZXciLCJoZWlnaHQiLCJvcGFjaXR5IiwidGV4dCIsIm5hdGl2ZU9iaiIsIlZpZXciLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3VGV4dCIsIndpZGh0Iiwic2l6ZSIsImNvbG9yIiwic2hvdyIsImNsb3NlVmlldyIsImNsb3NlIiwiY2FsbFVwIiwibnVtYmVyIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwiYXBpIiwiZ2V0Q29udGFjdHMiLCJjb250YWN0cyIsImdldEFkZHJlc3NCb29rIiwiQUREUkVTU0JPT0tfUEhPTkUiLCJhZGRyZXNzYm9vayIsImZpbmQiLCJtdWx0aXBsZSIsImZvcm1hdFNlY29uZHMiLCJoIiwiZmxvb3IiLCJtIiwicyIsImdldFdlYkZpbGVTaXplIiwiZmlsZWQiLCJyZXNTaXplIiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsImlzSDUiLCJTeXMiLCJzdHJfcmVwZWF0IiwibyIsImpvaW4iLCJzcHJpbnRmIiwiYSIsImYiLCJhcmd1bWVudHMiLCJwIiwiYyIsIngiLCJleGVjIiwicHVzaCIsInVuZGVmaW5lZCIsInRlc3QiLCJ0b1N0cmluZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInRvRXhwb25lbnRpYWwiLCJwYXJzZUZsb2F0Iiwic3Vic3RyaW5nIiwiYWJzIiwidG9VcHBlckNhc2UiLCJjaGFyQXQiLCJwcmludExvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE1BQU0sR0FBRyw4QkFBOEI7QUFDN0M7QUFDQSxJQUFNQyxhQUFhLEdBQUcsUUFBUTtBQUM5QjtBQUNBLElBQU1DLE1BQU0sR0FBRyxXQUFXO0FBQzFCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FDbEI7RUFDQyxJQUFNQyxTQUFTLEdBQUdDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksR0FBR0osTUFBTSxDQUFDO0VBQzNELElBQUlFLFNBQVMsRUFBRTtJQUNkLE9BQU9BLFNBQVM7RUFDakIsQ0FBQyxNQUFNO0lBQ04sT0FBT0osTUFBTTtFQUNkO0FBQ0QsQ0FBQztBQUNELElBQUlPLE1BQU0sR0FBR0osWUFBWSxFQUFFO0FBQzNCO0FBQ0EsSUFBTUssT0FBTyxHQUFHO0VBQ2Y7RUFDQSxVQUFVLEVBQU9ELE1BQU0sR0FBQyxHQUFHLEdBQUNOLGFBQWEsR0FBQyxrQkFBa0IsR0FBQ0MsTUFBTTtFQUNuRTtFQUNBLFlBQVksRUFBS0ssTUFBTSxHQUFDLEdBQUcsR0FBQ04sYUFBYSxHQUFDLHFCQUFxQixHQUFDQyxNQUFNO0VBQ3RFO0VBQ0EsVUFBVSxFQUFPSyxNQUFNLEdBQUMsR0FBRyxHQUFDTixhQUFhLEdBQUMsbUJBQW1CLEdBQUNDLE1BQU07RUFDcEU7RUFDQSxXQUFXLEVBQU1LLE1BQU0sR0FBQyxHQUFHLEdBQUNOLGFBQWEsR0FBQyxvQkFBb0IsR0FBQ0MsTUFBTTtFQUNyRTtFQUNBLFVBQVUsRUFBT0ssTUFBTSxHQUFDLEdBQUcsR0FBQ04sYUFBYSxHQUFDLG9CQUFvQixHQUFDQyxNQUFNO0VBQ3JFO0VBQ0EsV0FBVyxF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QUNBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQ2hCO0VBQUEsSUFENEJDLFVBQVUsdUVBQUMsS0FBSztFQUFBLElBQUVDLElBQUksdUVBQUMsS0FBSztFQUFBLElBQUVDLEdBQUc7RUFBQSxJQUFFQyxHQUFHO0VBRWpFLElBQUlDLEdBQUcsR0FBRyxFQUFFO0lBQUVDLEtBQUssR0FBR0gsR0FBRztFQUN6QixJQUFHRCxJQUFJLEVBQUM7SUFDUCxJQUFJSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDN0QsQ0FBQyxNQUFJO0lBQ0osSUFBSUEsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUMzRCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDMUQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDcEUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQzFELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FB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Q0EsT0FBT29JLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNyQixDQUFDOztBQUVEO0FBQ0EsSUFBTXFCLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQWM7RUFDM0IsYUFBWSx5Q0FBeUM7QUFDdEQsQ0FBQzs7QUFFRDtBQUFBLGVBQ2U7RUFDZHRMLE1BQU0sRUFBTkEsTUFBTTtFQUNORixNQUFNLEVBQU5BLE1BQU07RUFDSFEsT0FBTyxFQUFQQSxPQUFPO0VBQ1ZDLFNBQVMsRUFBVEEsU0FBUztFQUNURyxTQUFTLEVBQVRBLFNBQVM7RUFDVEcsU0FBUyxFQUFUQSxTQUFTO0VBQ1RFLFVBQVUsRUFBVkEsVUFBVTtFQUNWYyxRQUFRLEVBQVJBLFFBQVE7RUFDUkksUUFBUSxFQUFSQSxRQUFRO0VBQ1JrQixTQUFTLEVBQVRBLFNBQVM7RUFDVFEsV0FBVyxFQUFYQSxXQUFXO0VBQ1gxRCxZQUFZLEVBQVpBLFlBQVk7RUFDWitELFlBQVksRUFBWkEsWUFBWTtFQUNaa0IsTUFBTSxFQUFOQSxNQUFNO0VBQ05PLE9BQU8sRUFBUEEsT0FBTztFQUNQVSxJQUFJLEVBQUpBLElBQUk7RUFDSmtCLFVBQVUsRUFBVkEsVUFBVTtFQUNWZSxTQUFTLEVBQVRBLFNBQVM7RUFDVEUsTUFBTSxFQUFOQSxNQUFNO0VBQ05LLFdBQVcsRUFBWEEsV0FBVztFQUNYTyxhQUFhLEVBQWJBLGFBQWE7RUFDYjdJLE1BQU0sRUFBTkEsTUFBTTtFQUNOa0osY0FBYyxFQUFkQSxjQUFjO0VBQ2RNLElBQUksRUFBSkEsSUFBSTtFQUNKeUIsUUFBUSxFQUFSQSxRQUFRO0VBQ1JwQixPQUFPLEVBQVBBO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5o6l5Y+j5Z+f5ZCNXHJcbmNvbnN0IGFwaVVybCA9IFwiaHR0cDovL3Y1X2JsYWNrX2FwaS5jcXBpZy5jblwiO1xyXG4vLyDmjqXlj6Pmlofku7ZcclxuY29uc3QgaW50ZXJmYWNlRmlsZSA9IFwiYXBwYXBpXCI7XHJcbi8vIOS4juaOpeWPo+mAmuiur+eahEtFWVxyXG5jb25zdCBhcHBrZXkgPSAnYWJjMTIzNDU2JztcclxuLy8g6YCJ5oup57q/6LevXHJcbmNvbnN0IGdldFdlYkRvbWFpbiA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGNvbnN0IG5vd0RvbWFpbiA9IHVuaS5nZXRTdG9yYWdlU3luYygnbm93RG9tYWluXycgKyBhcHBrZXkpO1xyXG5cdGlmIChub3dEb21haW4pIHtcclxuXHRcdHJldHVybiBub3dEb21haW47XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBhcGlVcmw7XHJcblx0fVxyXG59XHJcbnZhciBub3dVcmwgPSBnZXRXZWJEb21haW4oKTtcclxuLy8g5a6M5pW05o6l5Y+jKOWfn+WQjSvmjqXlj6Pmlofku7Yr5o6l5Y+j5pa55rOVKVxyXG5jb25zdCBhcGlEYXRhID0ge1xyXG5cdC8vIOWIneWni+WMluaOpeWPo1xyXG5cdFwiYXBwSW5pdHNcIiAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9hcHBJbml0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6I635Y+WQVBQ54mI5pys5L+h5oGvXHJcblx0XCJnZXRWZXJzaW9uXCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFZlcnNpb24vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDpppbpobXmlbDmja5cclxuXHRcImhvbWVEYXRhXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaG9tZU1haW4vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDop4bpopHliJfooahcclxuXHRcInZpZGVvRGF0YVwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdmlkZW9MaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiT6aKY6K+m5oOFXHJcblx0XCJnZXRBbGJ1bVwiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2FsYnVtSW5mby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOinhumikeivpuaDhVxyXG5cdFwidmlkZW9JbmZvXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZXRhaWwvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmt7vliqDmlLbol49cclxuXHRcImFkZENvbGxlY3Rpb25cIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYWRkQ29sbGVjdGlvbi9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOinhumikeeCuei1nlxyXG5cdFwidmlkZW9MaWtlXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9saWtlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5re75Yqg6K+E6K66XHJcblx0XCJhZGRDb21tZW50XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDor4TorrrliJfooahcclxuXHRcImNvbW1lbnRMaXN0XCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvY29tbWVudExpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnu5/orqHnlKjmiLflnKjnur/mjqXlj6NcclxuXHRcImhlYXJ0QmVhdFwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaGVhcnRiZWF0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55m75b2V5o6l5Y+jXHJcblx0XCJ1c2VyTG9naW5cIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2xvZ2luL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5rOo5YaM6YWN572u5L+h5oGvXHJcblx0XCJnZXRDb25maWdcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldENvbmZpZy9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOazqOWGjOi0puWPt1xyXG5cdFwidXNlclJlZ1wiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yZWdpc3Rlci9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOiOt+WPluaJi+acuumqjOivgeeggVxyXG5cdFwiZ2V0TW9iaWxlQ29kZVwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRNb2JpbGVDb2RlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6K+75Y+W5Liq5Lq65L+h5oGvXHJcblx0XCJnZXRJbmZvXCIgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFVzZXJJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g562+5YiwXHJcblx0XCJ1c2VyU2lnblwiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VzZXJTaWduL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE6ZKx5YyFXHJcblx0XCJteUJhbGFuY2VcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2JhbGFuY2UvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkvZnpop3mj5DnjrBcclxuXHRcImdldE1vbmV5XCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0TW9uZXkvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bpk7booYzljaHliJfooahcclxuXHRcImdldEJhbmtcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9iYW5rTGlzdHMvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bnlKjmiLfpk7booYzljaHliJfooahcclxuXHRcImdldFVzZXJCYW5rXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXNlckJhbmtMaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6K6+572u5o+Q546w6ZO26KGM5Y2hXHJcblx0XCJzZXRCYW5rXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvc2V0RGVmYXVsdEJhbmsvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliKDpmaTmj5DnjrDpk7booYzljaFcclxuXHRcImRlbEJhbmtcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZWxCYW5rL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5re75Yqg5o+Q546w6ZO26KGM5Y2hXHJcblx0XCJhZGRCYW5rXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYWRkQmFuay9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaPkOeOsOiusOW9lVxyXG5cdFwiZ2V0RGVwb3NpdFwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZXBvc2l0TG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6LSm5oi35piO57uGXHJcblx0XCJnZXREZXRhaWxlZFwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2RldGFpbGVkTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOS/ruaUueaYteensCzmiYvmnLrlj7cs5aS05YOPXHJcblx0XCJlZGl0SW5mb1wiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VkaXRJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiK5Lyg5o6l5Y+jXHJcblx0XCJ1cGxvYWRcIiAgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VwbG9hZC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaUtuiXj+WIl+ihqFxyXG5cdFwiZ2V0Q29sbFwiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9jb2xsZWN0aW9uTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWIoOmZpOaUtuiXj+inhumikVxyXG5cdFwiZGVsQ29sbFwiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZWxldGVDb2xsZWN0aW9uL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE6Laz6L+5XHJcblx0XCJnZXRXYXRjaExvZ1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFdhdGNoTG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR6LSt5Lmw6K6w5b2VXHJcblx0XCJnZXRTdm9kQnV5TG9nXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFN2b2RCdXlMb2cvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliKDpmaTmiJHnmoTotrPov7lcclxuXHRcImRlbFdhdGNoTG9nXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZGVsV2F0Y2hMb2cvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmiJHnmoTliIbkuqtcclxuXHRcIm15U2hhcmVcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9teVNoYXJlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5YiG5Lqr6K6w5b2VXHJcblx0XCJnZXRTaGFyZUxvZ1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NoYXJlTG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5L+u5pS55a+G56CBXHJcblx0XCJjaGFuZ2VQd2RcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NoYW5nZVB3ZC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWFheWAvOWll+mkkFxyXG5cdFwiZ2V0Q2hhcmdlXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRDaGFyZ2VEYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5pSv5LuY5pa55byPXHJcblx0XCJnZXRQYXlMaXN0XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBheUxpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliJvlu7rorqLljZVcclxuXHRcImNyZWF0ZU9yZGVyXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvY3JlYXRlT3JkZXIvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlhbPkuo7miJHku6xcclxuXHRcImdldEFib3V0XCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QWJvdXQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmtLvliqjliJfooahcclxuXHRcImdldEdhbWVMaXN0XCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0R2FtZUxpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlubjov5Dovaznm5hcclxuXHRcImdldFByaXplXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0UHJpemUvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDotK3kubDop4bpopFcclxuXHRcImJ1eVZpZGVvXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYnV5L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g54Ot6Zeo5pCc57SiXHJcblx0XCJnZXRIb3RTZWFyY2hcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEhvdFNlYXJjaC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWPkei1t+aQnOe0olxyXG5cdFwic2VhcmNoVmlkZW9cIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zZWFyY2hWaWRlby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOa4heepuuaQnOe0ouiusOW9lVxyXG5cdFwiZW1wdHlTZWFyY2hcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9lbXB0eVNlYXJjaC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOiOt+W5v+WRilxyXG5cdFwiZ2V0QWRcIiAgXHQgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEFkL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6I635Y+W5YiG5Lqr6ICFaWRcclxuXHRcImdldFNoYXJlUGlkXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U2hhcmVQaWQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlj5HluJblm77niYdcclxuXHRcInVwbG9hZEltZ1wiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBsb2FkSW1nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5bm/5Zy66aaW6aG15pWw5o2uXHJcblx0XCJnZXRQbGF6YUxpc3RcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NvbW11bml0eUhvbWVwYWdlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5biW5a2Q6K+m5oOF6I635Y+W6K+E6K66XHJcblx0XCJnZXRDb21tZW50XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBvc3RDb21tZW50L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5biW5a2Q6K+m5oOF5bm/5ZGKXHJcblx0XCJnZXRBZEluZm9cIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEFkSW5mby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWPkeW4llxyXG5cdFwic2VuZENvbW1lbnRcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zZW5kUG9zdENvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkuKrkurrkuLvpobVcclxuXHRcImhvbWVQYWdlXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaG9tZVBhZ2UvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkuIrkvKDphY3nva5cclxuXHRcInVwbG9hZENvbmZpZ1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0VXBsb2FkQ29uZmlnL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6aG26YOo5a+86IiqXHJcblx0XCJnZXRUb3BNZW51XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFRvcE1lbnUvYXBwa2V5L1wiK2FwcGtleSxcclxuLyoqKioqKioqKioqKioqKioqKioqKiog55u05pKt55u45YWzICoqKioqKioqKioqKioqKioqKioqKiovXHRcclxuXHQvLyDojrflj5bkuLvmkq3liJfooahcclxuXHRcImdldEFuY2hvckxpc3RcIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QW5jaG9yTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOi0reS5sOS7mOi0ueaIv1xyXG5cdFwiYnV5R29sZFJvb21cIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9idXlHb2xkUm9vbS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOafpeivoueUqOaIt+aYr+WQpuS4uuS4u+aSrVxyXG5cdFwiZ2V0VXNlckFuY2hvclwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRVc2VySXNBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnrb7nuqbkuLvmkq1cclxuXHRcInJlZ0FuY2hvclwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvcmVnQW5jaG9yL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6L+b5YWl55u05pKt6Ze0XHJcblx0XCJwbGF5ZXJDb25maWdcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VudGVyVGhlU3R1ZGlvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5YWz5rOo5Li75pKtXHJcblx0XCJmb2N1c0FuY2hvclwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2ZvY3VzT25UaGVBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDpgIDlh7rnm7Tmkq3pl7RcclxuXHRcImxvZ291dFJvb21cIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZXhpdFRoZVN0dWRpby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaJk+i1j+S4u+aSrVxyXG5cdFwiZ2l2ZUFuY2hvclwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yZXdhcmRUaGVBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlvIDlp4vnm7Tmkq1cclxuXHRcImxpdmVJbml0RGF0YVwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvc3RhcnRMaXZlQnJvYWRjYXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5L+d5a2Y5oi/6Ze05L+h5oGvXHJcblx0XCJzYXZlUm9vbURhdGFcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NhdmVSb29tRGF0YS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOS4iuS8oOWwgemdouWbvueJh1xyXG5cdFwicm9vbVVwbG9hZEltZ1wiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yb29tVXBsb2FkSW1nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g57uT5p2f55u05pKt5bm257uT566XXHJcblx0XCJlbmRMaXZlUGxheWVyXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VuZExpdmVCcm9hZGNhc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnpoHoqIDkuI7mgaLlpI1cclxuXHRcInVwZGF0ZVNlbmRNc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBkYXRlU2VuZE1zL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5Li75pKt6Lii5Lq65Ye65oi/6Ze0XHJcblx0XCJhbmNob3JPdXRVc2VyXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2FuY2hvck91dFVzZXIvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlm77niYcgKyDotYTorq9cclxuXHRcImdldFBpY3R1cmVcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0UGljdHVyZS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOi0reS5sOWbvueJh1xyXG5cdFwiYnV5UGljdHVyZVwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9idXlQaWN0dXJlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5Zu+54mH6K+m5oOFXHJcblx0XCJwaWN0dXJlSW5mb1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3BpY3R1cmVJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8gYXBw5YaF5omT5byASDVcclxuXHRcIm9wZW5INVVybFwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvb3Blbkg1VXJsL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiK5Lyg6K+V55yL5pe26Ze0XHJcblx0XCJ1cGRhdGVUcnlUaW1lXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VwZGF0ZVRyeVRpbWUvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bkuJPpopjliJfooahcclxuXHRcImdldEFsYnVtTGlzdFwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QWxidW1MaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE5Zui6ZifXHJcblx0XCJnZXRVc2VyVGVhbVwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFVzZXJUZWFtL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55u05pKt6K6w5b2VXHJcblx0XCJnZXRQbGF5ZXJMb2dcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBsYXllckxvZy9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOekvOeJqeiusOW9lVxyXG5cdFwiZ2V0UGxheWVyR2lmdFwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRQbGF5ZXJHaWZ0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5YiG57G7562b6YCJXHJcblx0XCJnZXRGaWx0ZXJEYXRhXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEZpbHRlckRhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDplb/op4bpopHliIbnsbvnrZvpgInop4bpopFcclxuXHRcImdldEZpbHRlcnNcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0RmlsdGVyVmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDplb/op4bpopFcclxuXHRcImdldENsYXNzRGF0YVwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0Q2xhc3NEYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5LiL5YiG57G76KeG6aKRXHJcblx0XCJnZXRDbGFzc1ZpZGVvXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldENsYXNzVmlkZW9EYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5qCH562+XHJcblx0XCJnZXRUYWdEYXRhXCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFRhZ0RhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnn63op4bpopFcclxuXHRcImdldFN2b2RDbGFzc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U3ZvZENsYXNzRGF0YS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWkp+WIhuexu+efreinhumikVxyXG5cdFwiZ2V0U3ZvZERhdGFcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRTdm9kQ2xhc3NWaWRlb0RhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliqDovb3nn63op4bpopFcclxuXHRcImdldFN2b2RNYWluXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U3ZvZE1haW4vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmiaPpmaTlhY3otLnmrKHmlbBcclxuXHRcInVwZGF0ZUZyZWVcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBkYXRlRnJlZS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOmHkeW4gei0reS5sOinhumikVxyXG5cdFwiZ29sZEJ1eVZpZGVvXCIgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nb2xkQnV5VmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDngrnotZ5cclxuXHRcImxpa2VTdm9kVmlkZW9cIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvbGlrZVN2b2RWaWRlby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOefreinhumikeivhOiuuuWIl+ihqFxyXG5cdFwic3ZvZFZpZGVvQ29tbVwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zdm9kVmlkZW9Db21tZW50L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR6K+E6K66XHJcblx0XCJzZW5kVmlkZW9Db21tXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NlbmRWaWRlb0NvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmjInmoIfnrb7ojrflj5bnn63op4bpopFcclxuXHRcInRhZ1N2b2RWaWRlb1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdGFnU3ZvZFZpZGVvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR5pKt5pS+XHJcblx0XCJwbGF5U3ZvZFZpZGVvXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3BsYXlTdm9kVmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlkajkuIvovb3ph4/orrDmlbBcclxuXHRcInZpcFdlZWtEb3duc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdmlwV2Vla0Rvd25zL2FwcGtleS9cIithcHBrZXksXHJcbi8qIOS4jemcgOimgUFQUEtFWeeahOe7n+S4gOaUvuWcqOS4i+mdoiAqL1xyXG5cdC8vIOWOu+aUr+S7mFxyXG5cdFwiZ2V0UGF5XCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvcGF5XCIsXHJcblx0Ly8g5pyN5Yqh5Y2P6K6uXHJcblx0XCJhZ3JlZW1lbnRcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3ByaXZhY3kvdHlwZS8xXCIsXHJcblx0Ly8g6ZqQ56eB5pS/562WXHJcblx0XCJwcml2YWN5XCIgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3ByaXZhY3kvdHlwZS8yXCIsXHJcbn1cclxuLy8g5piv5ZCm55m75b2VIOacqueZu+W9lei/lOWbnmZhbHNlXHJcbmNvbnN0IGdldExvZ2lucyA9IGZ1bmN0aW9uKClcclxueyBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5KTtcclxuICAgICAgICByZXR1cm4gcmVzID8gcmVzIDogZmFsc2U7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8vIOe8k+WtmOeZu+W9leS/oeaBr1xyXG5jb25zdCBzZXRMb2dpbnMgPSBmdW5jdGlvbihkYXRhKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5LCBkYXRhKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG4vLyDms6jplIDnmbvlvZVcclxuY29uc3QgZGVsTG9naW5zID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5KTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG4vKlxyXG4qIHJhbmRvbVdvcmQg5Lqn55Sf5Lu75oSP6ZW/5bqm6ZqP5py65a2X5q+N5pWw5a2X57uE5ZCIXHJcbiogcmFuZG9tRmxhZyDmmK/lkKbku7vmhI/plb/luqYgbWluIOS7u+aEj+mVv+W6puacgOWwj+S9jVvlm7rlrprkvY3mlbBdIG1heCDku7vmhI/plb/luqbmnIDlpKfkvY1cclxuKlxyXG4qIOeUn+aIkDbigJQxMuS9jemaj+acuuWtl+espuS4siDvvJpyYW5kb21Xb3JkKHRydWUsNiwxMilcclxuKiDnlJ/miJDpmo/mnLrnmoQ25L2N5a2X56ym5LiyIO+8miByYW5kb21Xb3JkKGZhbHNlLDYpIFxyXG4qIHR5cGUgOiB0cnVl57qv5pWw5a2XLGZhbHNl5Li65pWw5a2X5ZKM5a2X5q+NXHJcbiovXHJcbmNvbnN0IHJhbmRvbVdvcmQgPSBmdW5jdGlvbihyYW5kb21GbGFnPWZhbHNlLCB0eXBlPWZhbHNlLCBtaW4sIG1heClcclxue1xyXG5cdGxldCBzdHIgPSBcIlwiLCByYW5nZSA9IG1pbjtcclxuXHRpZih0eXBlKXtcclxuXHRcdHZhciBhcnIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcclxuXHR9ZWxzZXtcclxuXHRcdHZhciBhcnIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLFxyXG5cdFx0J2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJyxcclxuXHRcdCdtJywgJ24nLCAnbycsICdwJywgJ3EnLCAncicsICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLFxyXG5cdFx0J0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJyxcclxuXHRcdCdNJywgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onXTsgXHJcblx0fVxyXG5cdC8vJy0nLCcuJywnficsJyEnLCdAJywnIycsJyQnLCclJywnXicsJyYnLCcqJywnKCcsJyknLCdfJywnOicsJzwnLCc+JywnPydcclxuXHRpZihyYW5kb21GbGFnKXtcclxuXHRcdHJhbmdlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluOy8vIOS7u+aEj+mVv+W6plxyXG5cdH1cclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2U7IGkrKykge1xyXG5cdFx0dmFyIHBvcyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChhcnIubGVuZ3RoIC0gMSkpO1xyXG5cdFx0c3RyICs9IGFycltwb3NdO1xyXG5cdH1cclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcbi8vIOWQjOatpee8k+WtmOWbvueJh1xyXG5jb25zdCBpbWdDYWNoZSA9IGZ1bmN0aW9uKGltYWdlX3VybCwgYmFja0Z1bilcclxue1xyXG5cclxuXHJcblxyXG5cclxuXHR2YXIgaW1hZ2VfbmFtZSA9IHNwbGl0VXJsKGltYWdlX3VybCkgKyBhcHBrZXkgKyAnJztcclxuXHQvL3VuaS5yZW1vdmVTdG9yYWdlU3luYyhpbWFnZV9uYW1lKTtcclxuXHQvL2NvbnNvbGUubG9nKGltYWdlX25hbWUpXHJcblx0dmFyIGltZ1VybCA9IHVuaS5nZXRTdG9yYWdlU3luYyhpbWFnZV9uYW1lKTtcclxuXHQvLyDlrZjlnKjliJnor7vnvJPlrZggXHJcblx0aWYgKGltZ1VybCkge1xyXG5cdFx0Ly9pZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykgaW1nVXJsID0gXCJmaWxlOlwiICsgaW1nVXJsO1xyXG5cdFx0cGx1cy5pby5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGltZ1VybCwgZW50cnkgPT4ge1xyXG5cdFx0XHRlbnRyeS5maWxlKGZpbGUgPT4ge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coaW1nVXJsKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LCBlcnIgPT4ge1xyXG5cdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoaW1hZ2VfbmFtZSk7XHJcblx0XHR9KTtcclxuXHRcdGJhY2tGdW4oaW1nVXJsKTtcclxuXHRcdC8vY29uc29sZS5sb2coaW1nVXJsKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRiYWNrRnVuKGltYWdlX3VybCk7XHJcblx0XHQvL2NvbnNvbGUubG9nKGltYWdlX3VybCk7XHJcblx0XHQvLyDmnKzlnLDmsqHmnInnvJPlrZjliJnkuIvovb0gXHJcblx0XHR1bmkuZG93bmxvYWRGaWxlKHtcclxuXHRcdFx0dXJsOiBpbWFnZV91cmwsXHJcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMudGVtcEZpbGVQYXRoKTtcclxuXHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHR1bmkuc2F2ZUZpbGUoe1xyXG5cdFx0XHRcdFx0XHR0ZW1wRmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzYXZlZEZpbGVQYXRoID0gZS5zYXZlZEZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhpbWFnZV9uYW1lLCBzYXZlZEZpbGVQYXRoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbi8vIOiOt+W+l1VSTOS4reeahOaWh+S7tuWQjVxyXG5jb25zdCBzcGxpdFVybCA9IGZ1bmN0aW9uKGltZ1VybClcclxue1xyXG5cdGlmKCFpbWdVcmwpIHJldHVybiBmYWxzZTtcclxuXHR2YXIgaW1nQXJyID0gaW1nVXJsLnNwbGl0KCcvJyk7XHJcblx0dmFyIGZpbGVOYW1lID0gaW1nQXJyW2ltZ0Fyci5sZW5ndGggLSAxXTtcclxuXHRyZXR1cm4gZmlsZU5hbWU7XHJcbn1cclxuLy8g5Yqg6L295o+Q56S6XHJcbmNvbnN0IHNob3dUb2FzdCA9IGZ1bmN0aW9uKHRpdGxlID0gJycsIHRpbWVzID0gMTAwMCwgc3R5bGUgPSAnbm9uZScsIGltYWdlID0gJycpIFxyXG57XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRpY29uOiBzdHlsZSxcclxuXHRcdHRpdGxlOiB0aXRsZSxcclxuXHRcdG1hc2s6IHRydWUsXHJcblx0XHRkdXJhdGlvbjogdGltZXMsXHJcblx0XHRpbWFnZTogaW1hZ2VcclxuXHR9KTtcclxufVxyXG5jb25zdCBnZXRGaWxlU2l6ZSA9IGZ1bmN0aW9uKGZpbGVCeXRlKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdmFyIGZpbGVTaXplQnl0ZSA9IGZpbGVCeXRlO1xyXG5cdCAgICB2YXIgZmlsZVNpemVNc2cgPSBcIlwiO1xyXG5cdCAgICBpZiAoZmlsZVNpemVCeXRlIDwgMTA0ODU3NikgZmlsZVNpemVNc2cgPSAoZmlsZVNpemVCeXRlIC8gMTAyNCkudG9GaXhlZCgyKTtcclxuXHQgICAgZWxzZSBpZiAoZmlsZVNpemVCeXRlID09IDEwNDg1NzYpIGZpbGVTaXplTXNnID0gMTtcclxuXHQgICAgZWxzZSBpZiAoZmlsZVNpemVCeXRlID4gMTA0ODU3NiAmJiBmaWxlU2l6ZUJ5dGUgPCAxMDczNzQxODI0KSBmaWxlU2l6ZU1zZyA9IChmaWxlU2l6ZUJ5dGUgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpO1xyXG5cdCAgICBlbHNlIGlmIChmaWxlU2l6ZUJ5dGUgPiAxMDQ4NTc2ICYmIGZpbGVTaXplQnl0ZSA9PSAxMDczNzQxODI0KSBmaWxlU2l6ZU1zZyA9IFwiMUdCXCI7XHJcblx0ICAgIGVsc2UgaWYgKGZpbGVTaXplQnl0ZSA+IDEwNzM3NDE4MjQgJiYgZmlsZVNpemVCeXRlIDwgMTA5OTUxMTYyNzc3NikgZmlsZVNpemVNc2cgPSAoZmlsZVNpemVCeXRlIC8gKDEwMjQgKiAxMDI0ICogMTAyNCkpLnRvRml4ZWQoMik7XHJcblx0ICAgIGVsc2UgZmlsZVNpemVNc2cgPSBcIuaWh+S7tui2hei/hzFUQlwiO1xyXG5cdCAgICByZXR1cm4gZmlsZVNpemVNc2c7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdCAgICByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG4vLyDojrflj5borr7lpIdJRFxyXG5jb25zdCBnZXRNb2JpbGVEaWQgPSBmdW5jdGlvbihiYWNrRnVuKSBcclxue1xyXG5cdHZhciBwaG9uZSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdHZhciBkaWQgPSBwaG9uZS5kZXZpY2VJZDtcclxuXHRpZihkaWQubGVuZ3RoID4gMCl7XHJcblx0XHR2YXIgZGlkID0gZGlkLnNwbGl0KFwifFwiKS5maWx0ZXIoZnVuY3Rpb24ocikge1xyXG5cdFx0ICAgcmV0dXJuIHIgJiYgci50cmltKCk7XHJcblx0XHR9KTtcclxuXHRcdGJhY2tGdW4oZGlkW2RpZC5sZW5ndGggLSAxXSk7XHJcblx0fSBlbHNlIHtcclxuXHJcblx0XHRwbHVzLmRldmljZS5nZXRJbmZvKHtcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0aWYocGhvbmUucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKXtcclxuXHRcdFx0XHRcdHZhciBhcnIgPSBlLnV1aWQuc3BsaXQoXCIsXCIpO1xyXG5cdFx0XHRcdFx0ZGlkID0gYXJyWzBdO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0ZGlkID0gZS51dWlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZGlkID0gZ2V0TW9iaWxlUmFuZERpZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0YmFja0Z1bihkaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG59XHJcbi8vIOmaj+acuuiuvuWkh0lEXHJcbmNvbnN0IGdldE1vYmlsZVJhbmREaWQgPSBmdW5jdGlvbigpIFxyXG57XHJcblx0Y29uc3QgZGlkS2V5ID0gJ215X2RpZF8nK2FwcGtleTtcclxuXHRjb25zdCBnZXREaWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoZGlkS2V5KTtcclxuXHRpZiAoZ2V0RGlkKSB7XHJcblx0XHRyZXR1cm4gZ2V0RGlkO1xyXG5cdH1lbHNle1xyXG5cdFx0dmFyIHJhbmREaWQgPSByYW5kb21Xb3JkKGZhbHNlLCBmYWxzZSwgMTYsIDE2KTtcclxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYyhkaWRLZXksICdINScrcmFuZERpZCk7XHJcblx0XHRyZXR1cm4gcmFuZERpZDtcclxuXHR9XHRcclxufVxyXG4vLyDlhbPpl61BUFBcclxuY29uc3Qgb3V0QXBwID0gZnVuY3Rpb24oKSBcclxue1xyXG5cclxuXHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XHJcblx0XHRjYXNlICdhbmRyb2lkJzpcclxuXHRcdFx0cGx1cy5ydW50aW1lLnF1aXQoKTtcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnaW9zJzpcclxuXHRcdFx0cGx1cy5pb3MuaW1wb3J0KCdVSUFwcGxpY2F0aW9uJykuc2hhcmVkQXBwbGljYXRpb24oKS5wZXJmb3JtU2VsZWN0b3IoJ2V4aXQnKTtcclxuXHRcdGJyZWFrOyBcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuLy8g6Lez6L2s5pa55rOVXHJcbmNvbnN0IGp1bXBVcmwgPSBmdW5jdGlvbih1cmwsIHR5cGUgPSAnd2ViJywgZGVsdGEgPSAxKSBcclxue1xyXG5cdGlmICh1cmwgPT0gJyMnIHx8IHVybCA9PSAnJykgcmV0dXJuIGZhbHNlO1xyXG5cdGlmICh1cmwgPT0gJ2JhY2snKSB7XHJcblx0XHR2YXIgZGVsdGEgPSBwYXJzZUludCh0eXBlKSA/IHR5cGUgOiAxO1xyXG5cdFx0dW5pLm5hdmlnYXRlQmFjayh7IGRlbHRhOiBkZWx0YSB9KTtcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdC8vIOWOn+eql+WPo1xyXG5cdFx0Y2FzZSAnb2xkJzpcclxuXHRcdFx0dW5pLnJlTGF1bmNoKHsgdXJsOiB1cmwgfSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Ly8g5LiN5YWz6Zet5b2T5YmN6aG16Lez6L2sXHJcblx0XHRjYXNlICduZXcnOlxyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7IHVybDogdXJsIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdC8vIHRhYkJhclxyXG5cdFx0Y2FzZSAndGFiJzpcclxuXHRcdFx0dW5pLnN3aXRjaFRhYih7IHVybDogdXJsIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdC8vIOWFs+mXreW9k+WJjemhtei3s+i9rFxyXG5cdFx0Y2FzZSAnbmV3eCc6XHJcblx0XHRcdHVuaS5yZWRpcmVjdFRvKHsgdXJsOiB1cmwgfSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Ly8gQVBQ5YaF5omT5byA6ZO+5o6lXHJcblx0XHRjYXNlICdhcHAnOlxyXG5cdFx0XHR2YXIgYXBwID0gJy9wYWdlcy9qdW1wL2luZGV4P3U9Jyt1cmxcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhhcHApXHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHsgdXJsOiBhcHAgfSk7XHJcblx0XHRcdGJyZWFrO1x0XHJcblx0XHQvLyDot7Poh7PlpJbnva7mtY/mj73lmahcclxuXHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRwbHVzLnJ1bnRpbWUub3BlblVSTCh1cmwpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG59XHJcbi8vIOWkjeWItkg1K0FQUFxyXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24oc3RyKSBcclxue1xyXG5cdHZhciBjb250ZW50ID0gc3RyICsgJyc7XHJcblxyXG5cdHVuaS5zZXRDbGlwYm9hcmREYXRhKHtcclxuXHQgICAgZGF0YTogY29udGVudCxcclxuXHQgICAgc3VjY2VzczogKCk9PiB7XHJcblx0XHRcdHNob3dUb2FzdCgn5aSN5Yi25oiQ5YqfJywgMjAwMCk7XHJcblx0ICAgIH1cclxuXHR9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5jb25zdCBoNUNvcHkgPSBmdW5jdGlvbihjb250ZW50KVxyXG57XHJcblx0aWYgKCFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoJ2NvcHknKSkgcmV0dXJuIGZhbHNlXHJcblx0bGV0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcblx0dGV4dGFyZWEudmFsdWUgPSBjb250ZW50XHJcblx0dGV4dGFyZWEucmVhZE9ubHkgPSBcInJlYWRPbmx5XCJcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKVxyXG5cdHRleHRhcmVhLnNlbGVjdCgpIC8vIOmAieaLqeWvueixoVxyXG5cdHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIGNvbnRlbnQubGVuZ3RoKSAvL+aguOW/g1xyXG5cdGxldCByZXN1bHQgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIikgLy8g5omn6KGM5rWP6KeI5Zmo5aSN5Yi25ZG95LukXHJcblx0dGV4dGFyZWEucmVtb3ZlKClcclxuXHRyZXR1cm4gcmVzdWx0XHJcbn1cclxudmFyIGJnVmlldyA9IG51bGw7XHJcbi8vIOWIm+W7uuWOn+eUn1ZpZXfmjqfku7ZcclxuY29uc3QgY3JlYXRlVmlldyA9IGZ1bmN0aW9uKGhlaWdodCA9ICc1MHB4Jywgb3BhY2l0eT0nMC4zJywgdGV4dD0nJykgXHJcbntcclxuXHJcblx0LyogaWYodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycgJiYgaGVpZ2h0PT0nNTBweCcpe1xyXG5cdFx0aGVpZ2h0ID0gJzEwNXB4JztcclxuXHR9ICovXHJcblx0YmdWaWV3ID0gbmV3IHBsdXMubmF0aXZlT2JqLlZpZXcoJ2JnJywge1xyXG5cdFx0Ym90dG9tOiAnMHB4JyxcclxuXHRcdGxlZnQ6ICcwcHgnLFxyXG5cdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0b3BhY2l0eTogb3BhY2l0eSxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMSknXHJcblx0fSk7XHJcblx0aWYodGV4dCAhPSAnJyl7XHJcblx0XHRiZ1ZpZXcuZHJhd1RleHQodGV4dCwge3dpZGh0OiAnMTAwJScsaGVpZ2h0OicxMDAlJ30sIHtcclxuXHRcdFx0c2l6ZTogJzE4cHgnLFxyXG5cdFx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0XHQvL2JhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnXHJcblx0XHR9KTtcclxuXHR9XHJcblx0YmdWaWV3LnNob3coKTtcclxuXHJcbn1cclxuLy8g5YWz6Zet572p5bGCXHJcbmNvbnN0IGNsb3NlVmlldyA9IGZ1bmN0aW9uKCkgXHJcbntcclxuXHJcblx0YmdWaWV3LmNsb3NlKCk7XHJcblxyXG59XHJcbi8vIOaJk+eUteivnee7mXh4eFxyXG5jb25zdCBjYWxsVXAgPSBmdW5jdGlvbihudW1iZXIpXHJcbntcclxuXHJcblx0dW5pLm1ha2VQaG9uZUNhbGwoe1xyXG5cdCAgICBwaG9uZU51bWJlcjogbnVtYmVyICsgJycsXHJcblx0XHRmYWlsOiAoKT0+IHtcclxuXHRcdFx0YXBpLnNob3dUb2FzdCgn5pON5L2c5aSx6LSlJywgMjAwMCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcblxyXG59XHJcbmNvbnN0IGdldENvbnRhY3RzID0gZnVuY3Rpb24oYmFja0Z1bil7XHJcblxyXG5cclxuXHJcblxyXG5cdHBsdXMuY29udGFjdHMuZ2V0QWRkcmVzc0Jvb2socGx1cy5jb250YWN0cy5BRERSRVNTQk9PS19QSE9ORSwgKGFkZHJlc3Nib29rKT0+IHtcclxuXHRcdGFkZHJlc3Nib29rLmZpbmQoW1wiZGlzcGxheU5hbWVcIixcInBob25lTnVtYmVyc1wiXSwgKGNvbnRhY3RzKT0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhjb250YWN0cyk7XHJcblx0XHRcdGJhY2tGdW4oY29udGFjdHMpO1xyXG5cdFx0fSwgKCk9PiB7ICBcclxuXHRcdFx0YmFja0Z1bihmYWxzZSk7XHJcblx0XHR9LHsgbXVsdGlwbGU6dHJ1ZSB9KTtcclxuXHR9LCAoZSk9PiB7ICBcclxuXHRcdGJhY2tGdW4oZmFsc2UpO1xyXG5cdH0pOyAgXHJcblxyXG59XHJcbmNvbnN0IGZvcm1hdFNlY29uZHMgPSBmdW5jdGlvbih2YWx1ZSwgdHlwZSA9IDEpIHtcclxuXHRsZXQgcmVzdWx0ID0gcGFyc2VJbnQodmFsdWUpO1xyXG5cdGxldCBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA6IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCk7XHJcblx0bGV0IG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKTtcclxuXHRsZXQgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cdGxldCByZXMgPSAnJztcclxuXHRpZiAodHlwZSA9PSAxKSB7XHJcblx0XHRyZXMgKz0gYCR7aH06YDtcclxuXHRcdHJlcyArPSBgJHttfTpgO1xyXG5cdFx0cmVzICs9IGAke3N9YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVzICs9IGAke2h95pe2YDtcclxuXHRcdHJlcyArPSBgJHttfeWIhmA7XHJcblx0XHRyZXMgKz0gYCR7c33np5JgO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcbi8qIOiOt+WPlui/nOeoi+aWh+S7tuWkp+WwjyAqL1xyXG5jb25zdCBnZXRXZWJGaWxlU2l6ZSA9IGZ1bmN0aW9uKGZpbGVkID0gJycsIGJhY2tGdW4pIHtcclxuXHR2YXIgcmVzU2l6ZSA9IDA7XHJcblx0aWYgKGZpbGVkLmxlbmd0aCA8IDEpIHtcclxuXHRcdGJhY2tGdW4ocmVzU2l6ZSk7IFxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IGZpbGVkLFxyXG5cdFx0bWV0aG9kOiAnSEVBRCcsXHJcblx0XHRzdWNjZXNzOiAoZSkgPT4ge1xyXG5cdFx0XHRpZiAoZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdHJlc1NpemUgPSBnZXRGaWxlU2l6ZShlLmhlYWRlclsnQ29udGVudC1MZW5ndGgnXSk7Ly8g6LCD55So5Ye95pWw5o2i566X5Y2V5L2NXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRiYWNrRnVuKHJlc1NpemUpOyBcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4vLyBINeiOt+WPlua1j+iniOWZqOexu+Wei1xyXG5jb25zdCBpc0g1ID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIFN5cyA9IHsgJ3R5cGUnOidhcHAnLCAndmVyJzowIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRyZXR1cm4gU3lzO1xyXG59XHJcblxyXG5jb25zdCBzdHJfcmVwZWF0ID0gZnVuY3Rpb24oaSwgbSkge1xyXG4gICAgZm9yICh2YXIgbyA9IFtdOyBtID4gMDsgb1stLW1dID0gaSk7XHJcbiAgICByZXR1cm4gby5qb2luKCcnKTtcclxufVxyXG5cclxuLyogXHJcbnZhciBjbGFzc2ljID0gJC5zcHJpbnRmKCclcyAlZCUlICUuM2YnLCAnc3RyaW5nJywgNDAsIDMuMTQxNTkzKTsgXHJcbi8vIGNsYXNzaWMgPSAnc3RyaW5nIDQwJSAzLjE0MicgXHJcblxyXG52YXIgbmFtZWQgPSAkLnNwcmludGYoJyUobmFtZSlzOiAlKHZhbHVlKWQnLCB7bmFtZTogJ2FnZScsIHZhbHVlOiA0MH0pOyBcclxuLy8gbmFtZWQgPSAnYWdlOiA0MCdcclxuXHJcbnZhciBjbGFzc2ljID0gJC52c3ByaW50ZignJXMgJWQlJSAlLjNmJywgWydzdHJpbmcnLCA0MCwgMy4xNDE1OTNdKTsgXHJcbi8vIGNsYXNzaWMgPSAnc3RyaW5nIDQwJSAzLjE0MidcclxuXHJcbnZhciBuYW1lZCA9ICQudnNwcmludGYoJyUobmFtZSlzOiAlKHZhbHVlKWQnLCBbe25hbWU6ICdhZ2UnLCB2YWx1ZTogNDB9XSk7IFxyXG4vLyBuYW1lZCA9ICdhZ2U6IDQwJyBcclxuICovXHJcbmNvbnN0IHNwcmludGYgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpID0gMCwgYSwgZiA9IGFyZ3VtZW50c1tpKytdLCBvID0gW10sIG0sIHAsIGMsIHgsIHMgPSAnJztcclxuICAgIHdoaWxlIChmKSB7XHJcbiAgICAgICAgaWYgKG0gPSAvXlteXFx4MjVdKy8uZXhlYyhmKSkge1xyXG4gICAgICAgICAgICBvLnB1c2gobVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG0gPSAvXlxceDI1ezJ9Ly5leGVjKGYpKSB7XHJcbiAgICAgICAgICAgIG8ucHVzaCgnJScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtID0gL15cXHgyNSg/OihcXGQrKVxcJCk/KFxcKyk/KDB8J1teJF0pPygtKT8oXFxkKyk/KD86XFwuKFxcZCspKT8oW2ItZm9zdXhYXSkvLmV4ZWMoZikpIHtcclxuICAgICAgICAgICAgaWYgKCgoYSA9IGFyZ3VtZW50c1ttWzFdIHx8IGkrK10pID09IG51bGwpIHx8IChhID09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KCdUb28gZmV3IGFyZ3VtZW50cy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1tec10vLnRlc3QobVs3XSkgJiYgKHR5cGVvZihhKSAhPSAnbnVtYmVyJykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KCdFeHBlY3RpbmcgbnVtYmVyIGJ1dCBmb3VuZCAnICsgdHlwZW9mKGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1bN10pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2InOiBhID0gYS50b1N0cmluZygyKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjJzogYSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6IGEgPSBwYXJzZUludChhKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlJzogYSA9IG1bNl0gPyBhLnRvRXhwb25lbnRpYWwobVs2XSkgOiBhLnRvRXhwb25lbnRpYWwoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmJzogYSA9IG1bNl0gPyBwYXJzZUZsb2F0KGEpLnRvRml4ZWQobVs2XSkgOiBwYXJzZUZsb2F0KGEpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ28nOiBhID0gYS50b1N0cmluZyg4KTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzJzogYSA9ICgoYSA9IFN0cmluZyhhKSkgJiYgbVs2XSA/IGEuc3Vic3RyaW5nKDAsIG1bNl0pIDogYSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndSc6IGEgPSBNYXRoLmFicyhhKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd4JzogYSA9IGEudG9TdHJpbmcoMTYpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1gnOiBhID0gYS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSA9ICgvW2RlZl0vLnRlc3QobVs3XSkgJiYgbVsyXSAmJiBhID49IDAgPyAnKycrIGEgOiBhKTtcclxuICAgICAgICAgICAgYyA9IG1bM10gPyBtWzNdID09ICcwJyA/ICcwJyA6IG1bM10uY2hhckF0KDEpIDogJyAnO1xyXG4gICAgICAgICAgICB4ID0gbVs1XSAtIFN0cmluZyhhKS5sZW5ndGggLSBzLmxlbmd0aDtcclxuICAgICAgICAgICAgcCA9IG1bNV0gPyBzdHJfcmVwZWF0KGMsIHgpIDogJyc7XHJcbiAgICAgICAgICAgIG8ucHVzaChzICsgKG1bNF0gPyBhICsgcCA6IHAgKyBhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdygnSHVoID8hJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGYgPSBmLnN1YnN0cmluZyhtWzBdLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gby5qb2luKCcnKTtcclxufVxyXG5cclxuLyogSDXniYjmnYPml6Xlv5cgKi9cclxuY29uc3QgcHJpbnRMb2cgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zb2xlLmxvZygnID09PT09PT09PSBjb3B5cmlnaHQ6IOmtheaAneinhumikXY0ID09PT09PT09PSAnKTtcclxufVxyXG5cclxuLy8g5rOo5YaMXHJcbmV4cG9ydCBkZWZhdWx0IHsgXHJcblx0YXBwa2V5LFxyXG5cdGFwaVVybCxcclxuICAgIGFwaURhdGEsXHJcblx0Z2V0TG9naW5zLFxyXG5cdHNldExvZ2lucyxcclxuXHRkZWxMb2dpbnMsXHJcblx0cmFuZG9tV29yZCxcclxuXHRpbWdDYWNoZSxcclxuXHRzcGxpdFVybCxcclxuXHRzaG93VG9hc3QsXHJcblx0Z2V0RmlsZVNpemUsXHJcblx0Z2V0V2ViRG9tYWluLFxyXG5cdGdldE1vYmlsZURpZCxcclxuXHRvdXRBcHAsXHJcblx0anVtcFVybCxcclxuXHRjb3B5LFxyXG5cdGNyZWF0ZVZpZXcsXHJcblx0Y2xvc2VWaWV3LFxyXG5cdGNhbGxVcCxcclxuXHRnZXRDb250YWN0cyxcclxuXHRmb3JtYXRTZWNvbmRzLFxyXG5cdG5vd1VybCxcclxuXHRnZXRXZWJGaWxlU2l6ZSxcclxuXHRpc0g1LFxyXG5cdHByaW50TG9nLFxyXG5cdHNwcmludGZcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),

/***/ 4:
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),

/***/ 71:
/*!*********************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/main.js?{"page":"pages%2Fsubnvue%2Flive_setting"} ***!
  \*********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_subnvue_live_setting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/subnvue/live_setting.nvue?mpType=page */ 72);\n\n        \n        \n        \n        \n        _pages_subnvue_live_setting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_subnvue_live_setting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/subnvue/live_setting'\n        _pages_subnvue_live_setting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_subnvue_live_setting_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBdUU7QUFDdkUsUUFBUSxvRkFBRztBQUNYLFFBQVEsb0ZBQUc7QUFDWCxRQUFRLG9GQUFHO0FBQ1gsZ0JBQWdCLG9GQUFHIiwiZmlsZSI6IjcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvc3VibnZ1ZS9saXZlX3NldHRpbmcubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvc3VibnZ1ZS9saXZlX3NldHRpbmcnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///71\n");

/***/ }),

/***/ 72:
/*!***************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_setting.nvue?mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live_setting.nvue?vue&type=template&id=825506fe&mpType=page */ 73);\n/* harmony import */ var _live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live_setting.nvue?vue&type=script&lang=js&mpType=page */ 75);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./live_setting.nvue?vue&type=style&index=0&lang=css&mpType=page */ 77).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./live_setting.nvue?vue&type=style&index=0&lang=css&mpType=page */ 77).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"38e4e926\",\n  false,\n  _live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/subnvue/live_setting.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUk7QUFDckk7QUFDNEU7QUFDTDtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlFQUFpRTtBQUNySCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUVBQWlFO0FBQzFIOztBQUVBOztBQUVBO0FBQytOO0FBQy9OLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLDhGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbGl2ZV9zZXR0aW5nLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODI1NTA2ZmUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpdmVfc2V0dGluZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xpdmVfc2V0dGluZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9saXZlX3NldHRpbmcubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2xpdmVfc2V0dGluZy5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0ZJTEVfV09SSy9IQnVpbGRlci9IQnVpbGRlclguMy45OS4yMDIzMTIyNjExL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzOGU0ZTkyNlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zdWJudnVlL2xpdmVfc2V0dGluZy5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///72\n");

/***/ }),

/***/ 73:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_setting.nvue?vue&type=template&id=825506fe&mpType=page ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_setting.nvue?vue&type=template&id=825506fe&mpType=page */ 74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_template_id_825506fe_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 74:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_setting.nvue?vue&type=template&id=825506fe&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showSetting
    ? _c("view", { staticClass: ["live-setting"] }, [
        _c("view", { staticClass: ["live-setting-bg"] }, [
          _c(
            "u-text",
            {
              staticClass: ["player-title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("直播间相关设置")]
          ),
          _c(
            "view",
            { staticClass: ["live-setting-item"] },
            [
              _c(
                "u-text",
                {
                  staticClass: ["player-name"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("直播间标题")]
              ),
              _c("u-input", {
                staticClass: ["player-content"],
                attrs: {
                  type: "text",
                  placeholder: "1至8个中英文字符",
                  maxlength: "8",
                  id: "playerName",
                },
                on: { input: _vm.setParam },
              }),
            ],
            1
          ),
          _c("view", { staticClass: ["live-setting-item"] }, [
            _c(
              "u-text",
              {
                staticClass: ["player-name"],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("直播间封面")]
            ),
            _vm.param.playerImg.length == 0
              ? _c(
                  "view",
                  {
                    staticStyle: {
                      flexDirection: "row",
                      lines: "1",
                      marginTop: "17rpx",
                      marginBottom: "17rpx",
                    },
                    on: { click: _vm.selectImg },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticStyle: { fontSize: "30rpx", color: "#999" },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("上传封面或实时截图")]
                    ),
                  ]
                )
              : _c(
                  "view",
                  {
                    staticStyle: {
                      flexDirection: "row",
                      lines: "1",
                      marginTop: "17rpx",
                      marginBottom: "17rpx",
                    },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticStyle: { fontSize: "30rpx", color: "#007AFF" },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("已设置")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          fontSize: "30rpx",
                          color: "#007AFF",
                          position: "absolute",
                          right: "0",
                        },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                        on: { click: _vm.selectImg },
                      },
                      [_vm._v("重新选择")]
                    ),
                  ]
                ),
          ]),
          _c(
            "view",
            {
              staticClass: ["live-setting-item"],
              staticStyle: { borderBottomColor: "#FFFFFF" },
            },
            [
              _c(
                "view",
                { staticStyle: { lines: "1", flexDirection: "row" } },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["player-name"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("是否金币房")]
                  ),
                  _c("u-image", {
                    staticClass: ["live-mode"],
                    attrs: { src: _vm.liveModeIcon, mode: "aspectFill" },
                    on: { click: _vm.switchMode },
                  }),
                ],
                1
              ),
            ]
          ),
          _vm.isGold
            ? _c("view", [
                _c(
                  "view",
                  { staticStyle: { flexDirection: "row" } },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["player-param"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("房费收取:")]
                    ),
                    _c("u-input", {
                      staticClass: ["player-content", "player-param-input"],
                      attrs: {
                        type: "number",
                        maxlength: "3",
                        id: "playerGold",
                        placeholder: "金币数",
                      },
                      on: { input: _vm.setParam },
                    }),
                    _c(
                      "u-text",
                      {
                        staticClass: ["player-param-right"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("金币")]
                    ),
                  ],
                  1
                ),
                _c(
                  "view",
                  { staticStyle: { flexDirection: "row" } },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["player-param"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("试看时间:")]
                    ),
                    _c("u-input", {
                      staticClass: ["player-content", "player-param-input"],
                      attrs: {
                        type: "number",
                        placeholder: "0或空则不支持试看",
                        maxlength: "3",
                        id: "tryTime",
                      },
                      on: { input: _vm.setParam },
                    }),
                    _c(
                      "u-text",
                      {
                        staticClass: ["player-param-right"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("分钟")]
                    ),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _c(
            "view",
            { staticStyle: { flexDirection: "row", marginTop: "15rpx" } },
            [
              _c(
                "u-text",
                {
                  staticClass: ["setting-btn"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                  on: { click: _vm.btnParam },
                },
                [_vm._v("确定")]
              ),
              _c(
                "u-text",
                {
                  staticClass: ["setting-btn", "close-btn"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                  on: { click: _vm.btnClose },
                },
                [_vm._v("关闭")]
              ),
            ]
          ),
        ]),
      ])
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 75:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_setting.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_setting.nvue?vue&type=script&lang=js&mpType=page */ 76);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJtQixDQUFnQixtbUJBQUcsRUFBQyIsImZpbGUiOiI3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlX3NldHRpbmcubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0ZJTEVfV09SSy9IQnVpbGRlci9IQnVpbGRlclguMy45OS4yMDIzMTIyNjExL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0ZJTEVfV09SSy9IQnVpbGRlci9IQnVpbGRlclguMy45OS4yMDIzMTIyNjExL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGl2ZV9zZXR0aW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///75\n");

/***/ }),

/***/ 76:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_setting.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/common/api.js */ 33));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _self;\nvar _default = {\n  data: function data() {\n    return {\n      param: {\n        playerName: '',\n        playerImg: '',\n        playerGold: 0,\n        tryTime: 0 //试看时间\n      },\n\n      showSetting: false,\n      djsTime: 1,\n      liveModeIcon: '/static/live/status0.png',\n      isGold: false,\n      minTrytime: 0\n    };\n  },\n  onLoad: function onLoad() {\n    _self = this;\n    _self.djsShow();\n    uni.$on('getSubnvueParam', function (data) {\n      if (data.type == 'liveSetting') {\n        eval(data.data);\n      }\n    });\n  },\n  methods: {\n    setMinTrytime: function setMinTrytime(e) {\n      //console.log(e)\n      _self.minTrytime = e;\n    },\n    switchMode: function switchMode() {\n      _self.isGold = !_self.isGold;\n      if (_self.isGold) {\n        _self.liveModeIcon = '/static/live/status1.png';\n      } else {\n        _self.liveModeIcon = '/static/live/status0.png';\n      }\n    },\n    setParam: function setParam(e) {\n      _self.param[e.target.id] = e.detail.value;\n      //console.log(_self.param)\n    },\n    selectImg: function selectImg() {\n      uni.chooseImage({\n        count: 1,\n        sizeType: ['compressed'],\n        success: function success(res) {\n          _self.param.playerImg = res.tempFilePaths[0];\n          //console.log(_self.param);\n        },\n\n        fail: function fail() {\n          //api.showToast('已取消选择视频封面');\n        }\n      });\n    },\n    djsShow: function djsShow() {\n      setTimeout(function () {\n        _self.djsTime--;\n        if (_self.djsTime > 0) {\n          _self.djsShow();\n        } else {\n          var anchor_id = uni.getStorageSync('anchor_id_' + _api.default.appkey);\n          if (anchor_id == 0) _self.showSetting = true;\n        }\n        //console.log(_self.showSetting)\n      }, 1000);\n    },\n    btnClose: function btnClose() {\n      var subNVue = uni.getSubNVueById('live_setting');\n      subNVue.hide('slide-in-bottom', 10);\n      _api.default.jumpUrl('/pages/live/list', 'newx');\n    },\n    btnParam: function btnParam() {\n      if (_self.param.playerName.length == 0) {\n        _api.default.showToast(\"请输入直播间名称\", 1500);\n        return;\n      }\n      if (_self.isGold) {\n        if (_self.param.playerGold == 0) {\n          _api.default.showToast(\"请输入收费金币数\", 1500);\n          return;\n        }\n        if (_self.param.tryTime < _self.minTrytime && _self.param.tryTime != 0) {\n          _api.default.showToast(\"最少试看时间\" + _self.minTrytime + '分钟', 1500);\n          return;\n        }\n      }\n      uni.$emit('getSubnvueParam', {\n        'type': 'roomSetting',\n        'data': _self.param\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc3VibnZ1ZS9saXZlX3NldHRpbmcubnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwicGFyYW0iLCJwbGF5ZXJOYW1lIiwicGxheWVySW1nIiwicGxheWVyR29sZCIsInRyeVRpbWUiLCJzaG93U2V0dGluZyIsImRqc1RpbWUiLCJsaXZlTW9kZUljb24iLCJpc0dvbGQiLCJtaW5Ucnl0aW1lIiwib25Mb2FkIiwiX3NlbGYiLCJ1bmkiLCJldmFsIiwibWV0aG9kcyIsInNldE1pblRyeXRpbWUiLCJzd2l0Y2hNb2RlIiwic2V0UGFyYW0iLCJzZWxlY3RJbWciLCJjb3VudCIsInNpemVUeXBlIiwic3VjY2VzcyIsImZhaWwiLCJkanNTaG93Iiwic2V0VGltZW91dCIsImJ0bkNsb3NlIiwic3ViTlZ1ZSIsImFwaSIsImJ0blBhcmFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBOENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7O01BQ0FDO01BQ0FDO01BRUFDO01BQ0FDO01BRUFDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztJQUNBQTtJQUNBQztNQUNBO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7TUFDQUo7SUFDQTtJQUNBSztNQUNBTDtNQUNBO1FBQ0FBO01BQ0E7UUFDQUE7TUFDQTtJQUNBO0lBQ0FNO01BQ0FOO01BQ0E7SUFDQTtJQUNBTztNQUNBTjtRQUNBTztRQUNBQztRQUNBQztVQUNBVjtVQUNBO1FBQ0E7O1FBQ0FXO1VBQ0E7UUFBQTtNQUVBO0lBQ0E7SUFDQUM7TUFDQUM7UUFDQWI7UUFDQTtVQUNBQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FjO01BQ0E7TUFDQUM7TUFDQUM7SUFDQTtJQUNBQztNQUNBO1FBQ0FEO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQUE7VUFDQTtRQUNBO1FBQ0E7VUFDQUE7VUFDQTtRQUNBO01BQ0E7TUFDQWY7UUFBQTtRQUFBO01BQUE7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiI3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJsaXZlLXNldHRpbmdcIiB2LWlmPVwic2hvd1NldHRpbmdcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwibGl2ZS1zZXR0aW5nLWJnXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwicGxheWVyLXRpdGxlXCI+55u05pKt6Ze055u45YWz6K6+572uPC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxpdmUtc2V0dGluZy1pdGVtXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPuebtOaSremXtOagh+mimDwvdGV4dD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInBsYXllci1jb250ZW50XCIgcGxhY2Vob2xkZXI9XCIx6IezOOS4quS4reiLseaWh+Wtl+esplwiIG1heGxlbmd0aD1cIjhcIiBAaW5wdXQ9XCJzZXRQYXJhbVwiIGlkPVwicGxheWVyTmFtZVwiLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxpdmUtc2V0dGluZy1pdGVtXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPuebtOaSremXtOWwgemdojwvdGV4dD5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOnJvdztsaW5lczoxO21hcmdpbi10b3A6MTdycHg7bWFyZ2luLWJvdHRvbToxN3JweDtcIiB2LWlmPVwicGFyYW0ucGxheWVySW1nLmxlbmd0aD09MFwiIEBjbGljaz1cInNlbGVjdEltZ1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6MzBycHg7Y29sb3I6Izk5OTtcIj7kuIrkvKDlsIHpnaLmiJblrp7ml7bmiKrlm748L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246cm93O2xpbmVzOjE7bWFyZ2luLXRvcDoxN3JweDttYXJnaW4tYm90dG9tOjE3cnB4O1wiIHYtZWxzZT5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOjMwcnB4O2NvbG9yOiMwMDdBRkY7XCI+5bey6K6+572uPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6MzBycHg7Y29sb3I6IzAwN0FGRjtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDogMDtcIiBAY2xpY2s9XCJzZWxlY3RJbWdcIj7ph43mlrDpgInmi6k8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibGl2ZS1zZXR0aW5nLWl0ZW1cIiBzdHlsZT1cImJvcmRlci1ib3R0b20tY29sb3I6ICNGRkZGRkZcIj5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cImxpbmVzOiAxO2ZsZXgtZGlyZWN0aW9uOiByb3c7XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBsYXllci1uYW1lXCI+5piv5ZCm6YeR5biB5oi/PC90ZXh0PlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibGl2ZS1tb2RlXCIgOnNyYz1cImxpdmVNb2RlSWNvblwiIG1vZGU9XCJhc3BlY3RGaWxsXCIgQGNsaWNrPVwic3dpdGNoTW9kZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtaWY9XCJpc0dvbGRcIj5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBsYXllci1wYXJhbVwiPuaIv+i0ueaUtuWPljo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwicGxheWVyLWNvbnRlbnQgcGxheWVyLXBhcmFtLWlucHV0XCIgbWF4bGVuZ3RoPVwiM1wiIEBpbnB1dD1cInNldFBhcmFtXCIgaWQ9XCJwbGF5ZXJHb2xkXCIgcGxhY2Vob2xkZXI9XCLph5HluIHmlbBcIi8+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBsYXllci1wYXJhbS1yaWdodFwiPumHkeW4gTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwbGF5ZXItcGFyYW1cIj7or5XnnIvml7bpl7Q6PC90ZXh0PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cInBsYXllci1jb250ZW50IHBsYXllci1wYXJhbS1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiMOaIluepuuWImeS4jeaUr+aMgeivleeci1wiIG1heGxlbmd0aD1cIjNcIiBAaW5wdXQ9XCJzZXRQYXJhbVwiIGlkPVwidHJ5VGltZVwiLz5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGxheWVyLXBhcmFtLXJpZ2h0XCI+5YiG6ZKfPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O21hcmdpbi10b3A6IDE1cnB4O1wiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2V0dGluZy1idG5cIiBAY2xpY2s9XCJidG5QYXJhbVwiPuehruWumjwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNldHRpbmctYnRuIGNsb3NlLWJ0blwiIEBjbGljaz1cImJ0bkNsb3NlXCI+5YWz6ZetPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgYXBpIGZyb20gXCJAL2NvbW1vbi9hcGkuanNcIjtcclxuXHR2YXIgX3NlbGY7XG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW06IHtcclxuXHRcdFx0XHRcdHBsYXllck5hbWU6ICcnLFxyXG5cdFx0XHRcdFx0cGxheWVySW1nOiAnJyxcclxuXHRcdFx0XHRcdHBsYXllckdvbGQ6IDAsXHJcblx0XHRcdFx0XHR0cnlUaW1lOiAwLCAvL+ivleeci+aXtumXtFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2hvd1NldHRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGRqc1RpbWU6IDEsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGl2ZU1vZGVJY29uOiAnL3N0YXRpYy9saXZlL3N0YXR1czAucG5nJyxcclxuXHRcdFx0XHRpc0dvbGQ6IGZhbHNlLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG1pblRyeXRpbWU6IDAsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdF9zZWxmID0gdGhpcztcclxuXHRcdFx0X3NlbGYuZGpzU2hvdygpO1xyXG5cdFx0XHR1bmkuJG9uKCdnZXRTdWJudnVlUGFyYW0nLCAoZGF0YSk9PiB7XHJcblx0XHRcdFx0aWYoZGF0YS50eXBlID09ICdsaXZlU2V0dGluZycpe1xyXG5cdFx0XHRcdFx0ZXZhbChkYXRhLmRhdGEpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNldE1pblRyeXRpbWUoZSkge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRfc2VsZi5taW5Ucnl0aW1lID0gZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpdGNoTW9kZSgpIHtcclxuXHRcdFx0XHRfc2VsZi5pc0dvbGQgPSAhX3NlbGYuaXNHb2xkO1xyXG5cdFx0XHRcdGlmKF9zZWxmLmlzR29sZCkge1xyXG5cdFx0XHRcdFx0X3NlbGYubGl2ZU1vZGVJY29uID0gJy9zdGF0aWMvbGl2ZS9zdGF0dXMxLnBuZyc7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRfc2VsZi5saXZlTW9kZUljb24gPSAnL3N0YXRpYy9saXZlL3N0YXR1czAucG5nJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFBhcmFtKGUpIHtcclxuXHRcdFx0XHRfc2VsZi5wYXJhbVtlLnRhcmdldC5pZF0gPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKF9zZWxmLnBhcmFtKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxlY3RJbWcoKSB7XHJcblx0XHRcdFx0dW5pLmNob29zZUltYWdlKHtcclxuXHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0c2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYucGFyYW0ucGxheWVySW1nID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhfc2VsZi5wYXJhbSk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKCk9PiB7XHJcblx0XHRcdFx0XHRcdC8vYXBpLnNob3dUb2FzdCgn5bey5Y+W5raI6YCJ5oup6KeG6aKR5bCB6Z2iJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRqc1Nob3coKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0X3NlbGYuZGpzVGltZSAtLTtcclxuXHRcdFx0XHRcdGlmKF9zZWxmLmRqc1RpbWUgPiAwKXtcclxuXHRcdFx0XHRcdFx0X3NlbGYuZGpzU2hvdygpO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGFuY2hvcl9pZCA9IHVuaS5nZXRTdG9yYWdlU3luYygnYW5jaG9yX2lkXycrYXBpLmFwcGtleSk7XHJcblx0XHRcdFx0XHRcdGlmKGFuY2hvcl9pZD09MCkgX3NlbGYuc2hvd1NldHRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhfc2VsZi5zaG93U2V0dGluZylcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YnRuQ2xvc2UoKSB7XHJcblx0XHRcdFx0Y29uc3Qgc3ViTlZ1ZSA9IHVuaS5nZXRTdWJOVnVlQnlJZCgnbGl2ZV9zZXR0aW5nJyk7XHJcblx0XHRcdFx0c3ViTlZ1ZS5oaWRlKCdzbGlkZS1pbi1ib3R0b20nLCAxMCk7XHJcblx0XHRcdFx0YXBpLmp1bXBVcmwoJy9wYWdlcy9saXZlL2xpc3QnLCAnbmV3eCcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRidG5QYXJhbSgpIHtcclxuXHRcdFx0XHRpZihfc2VsZi5wYXJhbS5wbGF5ZXJOYW1lLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0XHRcdGFwaS5zaG93VG9hc3QoXCLor7fovpPlhaXnm7Tmkq3pl7TlkI3np7BcIiwgMTUwMCk7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoX3NlbGYuaXNHb2xkKXtcclxuXHRcdFx0XHRcdGlmKF9zZWxmLnBhcmFtLnBsYXllckdvbGQgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRhcGkuc2hvd1RvYXN0KFwi6K+36L6T5YWl5pS26LS56YeR5biB5pWwXCIsIDE1MDApO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKF9zZWxmLnBhcmFtLnRyeVRpbWUgPCBfc2VsZi5taW5Ucnl0aW1lICYmIF9zZWxmLnBhcmFtLnRyeVRpbWUhPTApIHtcclxuXHRcdFx0XHRcdFx0YXBpLnNob3dUb2FzdChcIuacgOWwkeivleeci+aXtumXtFwiK19zZWxmLm1pblRyeXRpbWUrJ+WIhumSnycsIDE1MDApO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLiRlbWl0KCdnZXRTdWJudnVlUGFyYW0nLCB7J3R5cGUnOidyb29tU2V0dGluZycsJ2RhdGEnOl9zZWxmLnBhcmFtfSk7XHJcblx0XHRcdH1cclxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cclxuXHQucGxheWVyLXBhcmFtLXJpZ2h0e1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGNvbG9yOiAjNDQ0O1xyXG5cdFx0aGVpZ2h0OiA3M3JweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3M3JweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHR9XHJcblx0LnBsYXllci1wYXJhbXtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHQvL2JhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdGhlaWdodDogNzNycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNzVycHg7XHJcblx0XHRjb2xvcjogIzQ0NDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE1cnB4O1xyXG5cdH1cclxuXHQucGxheWVyLXBhcmFtLWlucHV0e1xyXG5cdFx0d2lkdGg6IDMzMHJweDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDE1cnB4O1xyXG5cdFx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xyXG5cdH1cclxuXHQubGl2ZS10cnl0aW1le1xyXG5cdFx0d2lkdGg6IDM4MHJweDtcclxuXHRcdC8vYmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTVycHg7XHJcblx0fVxyXG5cdC5saXZlLWdvbGR7XHJcblx0XHR3aWR0aDogMTYwcnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTVycHg7XHJcblx0fVxyXG5cdC5saXZlLW1vZGV7XHJcblx0XHR3aWR0aDogNzBycHg7XHJcblx0XHRoZWlnaHQ6IDQycnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cdC5jbG9zZS1idG57XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzIyO1xyXG5cdFx0d2lkdGg6IDE2MHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzMHJweDtcclxuXHR9XHJcblx0LnNldHRpbmctYnRue1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMTIsMjA4LDAuOCk7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMzNycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0fVxyXG5cdC5wbGF5ZXItY29udGVudHtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRtYXJnaW46IDEwcnB4IDA7XHJcblx0fVxyXG5cdC5wbGF5ZXItbmFtZXtcclxuXHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHR9XHJcblx0LmxpdmUtc2V0dGluZy1pdGVte1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjVycHg7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjRjVGNUY1O1xyXG5cdH1cclxuXHQucGxheWVyLXRpdGxle1xyXG5cdFx0Zm9udC1zaXplOiAzN3JweDtcclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNGNUY1RjU7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAzMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LmxpdmUtc2V0dGluZy1iZ3tcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogNjUwcnB4O1xyXG5cdFx0Ly9oZWlnaHQ6IDY4MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHggMzBycHg7XHJcblx0fVxuXHQubGl2ZS1zZXR0aW5ne1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///76\n");

/***/ }),

/***/ 77:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_setting.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_setting.nvue?vue&type=style&index=0&lang=css&mpType=page */ 78);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_setting_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 78:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_setting.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "player-param-right": {
    "fontSize": "30rpx",
    "color": "#444444",
    "height": "73rpx",
    "lineHeight": "73rpx",
    "marginLeft": "10rpx"
  },
  "player-param": {
    "fontSize": "30rpx",
    "textAlign": "right",
    "height": "73rpx",
    "lineHeight": "75rpx",
    "color": "#444444",
    "paddingRight": "15rpx"
  },
  "player-param-input": {
    "width": "330rpx",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#f5f5f5",
    "borderRadius": "10rpx",
    "paddingTop": "10rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "15rpx"
  },
  "live-trytime": {
    "width": "380rpx",
    "position": "absolute",
    "right": 0,
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#f5f5f5",
    "paddingBottom": "15rpx"
  },
  "live-gold": {
    "width": "160rpx",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#f5f5f5",
    "paddingBottom": "15rpx"
  },
  "live-mode": {
    "width": "70rpx",
    "height": "42rpx",
    "position": "absolute",
    "right": 0,
    "bottom": 0
  },
  "close-btn": {
    "backgroundColor": "#FF5722",
    "width": "160rpx",
    "marginLeft": "30rpx"
  },
  "setting-btn": {
    "backgroundColor": "rgba(255,12,208,0.8)",
    "color": "#FFFFFF",
    "fontSize": "33rpx",
    "textAlign": "center",
    "height": "80rpx",
    "lineHeight": "80rpx",
    "borderRadius": "10rpx",
    "marginTop": "10rpx",
    "width": "400rpx"
  },
  "player-content": {
    "fontSize": "30rpx",
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0
  },
  "player-name": {
    "color": "#666666",
    "fontSize": "36rpx"
  },
  "live-setting-item": {
    "marginBottom": "25rpx",
    "borderBottomWidth": "1",
    "borderBottomColor": "#F5F5F5"
  },
  "player-title": {
    "fontSize": "37rpx",
    "borderBottomColor": "#F5F5F5",
    "borderBottomWidth": "1",
    "marginBottom": "30rpx",
    "paddingBottom": "30rpx",
    "textAlign": "center"
  },
  "live-setting-bg": {
    "backgroundColor": "#FFFFFF",
    "width": "650rpx",
    "borderRadius": "40rpx",
    "paddingTop": "40rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "30rpx"
  },
  "live-setting": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "@VERSION": 2
}

/***/ })

/******/ });