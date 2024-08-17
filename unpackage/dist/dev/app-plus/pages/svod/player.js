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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/main.js?{"page":"pages%2Fsvod%2Fplayer"} ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_svod_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/svod/player.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_svod_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_svod_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/svod/player'\n        _pages_svod_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_svod_player_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsZ0JBQWdCLDJFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9zdm9kL3BsYXllci5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9zdm9kL3BsYXllcidcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
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
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
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
/* 5 */
/*!******************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/svod/player.nvue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.nvue?vue&type=template&id=e5905342&scoped=true&mpType=page */ 6);\n/* harmony import */ var _player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.nvue?vue&type=script&lang=js&mpType=page */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./player.nvue?vue&type=style&index=0&id=e5905342&scoped=true&lang=css&mpType=page */ 34).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./player.nvue?vue&type=style&index=0&id=e5905342&scoped=true&lang=css&mpType=page */ 34).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e5905342\",\n  \"68060379\",\n  false,\n  _player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/svod/player.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJGQUFtRjtBQUN2SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkZBQW1GO0FBQzVJOztBQUVBOztBQUVBO0FBQytOO0FBQy9OLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9wbGF5ZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNTkwNTM0MiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGxheWVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGxheWVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3BsYXllci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTU5MDUzNDImc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vcGxheWVyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNTkwNTM0MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImU1OTA1MzQyXCIsXG4gIFwiNjgwNjAzNzlcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvc3ZvZC9wbGF5ZXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/svod/player.nvue?vue&type=template&id=e5905342&scoped=true&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./player.nvue?vue&type=template&id=e5905342&scoped=true&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_template_id_e5905342_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/svod/player.nvue?vue&type=template&id=e5905342&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: __webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 8).default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: false,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["page"], style: { height: _vm.windowHeight + "px" } },
        [
          _vm.showLoading
            ? _c(
                "view",
                {
                  staticClass: ["load-img"],
                  style: { height: _vm.windowHeight + "px" },
                  on: { touchmove: _vm.moveHandle },
                },
                [
                  _c("u-image", {
                    staticStyle: { width: "500rpx", height: "400rpx" },
                    attrs: { src: _vm.loadingImg, mode: "aspectFit" },
                  }),
                ],
                1
              )
            : _vm._e(),
          _c("u-image", {
            staticStyle: { position: "absolute", zIndex: "-1" },
            attrs: { src: _vm.item.cover, mode: "aspectFill" },
            on: { load: _vm.loadedmetadata },
          }),
          _vm.info.isPlay
            ? [
                _c("u-video", {
                  ref: "myVideo",
                  staticStyle: { width: "750rpx" },
                  style: { height: _vm.windowHeight + "px" },
                  attrs: {
                    id: "myVideo",
                    src: _vm.item.url,
                    loop: true,
                    autoplay: true,
                    controls: true,
                    objectFit: _vm.objectFit,
                    showPlayBtn: false,
                    showFullscreenBtn: false,
                    enablePlayGesture: false,
                    showCenterPlayBtn: false,
                    enableProgressGesture: false,
                  },
                  on: {
                    play: _vm.onplay,
                    error: _vm.onerror,
                    timeupdate: _vm.timeupdate,
                    loadedmetadata: _vm.loadedmetadata,
                  },
                }),
                _c(
                  "view",
                  {
                    staticClass: ["pause-img"],
                    on: {
                      click: function ($event) {
                        _vm.playVideoStatus(!_vm.playStatus)
                      },
                    },
                  },
                  [
                    !_vm.playStatus
                      ? _c("u-image", {
                          staticStyle: {
                            width: "150rpx",
                            height: "150rpx",
                            marginBottom: "-100px",
                          },
                          attrs: { src: "/static/svod/btn_player.png" },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
                _c("view", { staticClass: ["svod-right"] }, [
                  _c(
                    "view",
                    { staticClass: ["svod-right-cover"] },
                    [
                      _c("u-image", {
                        staticStyle: {
                          width: "90rpx",
                          height: "90rpx",
                          borderRadius: "90rpx",
                        },
                        attrs: {
                          src: _vm.getHeadImg(
                            _vm.item.cover,
                            _vm.info.headimgurl
                          ),
                          mode: "aspectFill",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm.user.isVip
                    ? _c(
                        "u-text",
                        {
                          staticClass: ["is-buy"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("尊贵VIP")]
                      )
                    : _vm.info.isBuy
                    ? _c(
                        "u-text",
                        {
                          staticClass: ["is-buy"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("已购买")]
                      )
                    : _vm.info.gold == 0
                    ? _c(
                        "u-text",
                        {
                          staticClass: ["is-buy"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("限 免")]
                      )
                    : _vm._e(),
                  _c(
                    "view",
                    {
                      staticClass: ["svod-right-item"],
                      on: { click: _vm.videoLike },
                    },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: {
                          src:
                            "/static/svod/btn_like_" + _vm.info.like + ".png",
                          mode: "aspectFill",
                        },
                      }),
                      _c(
                        "u-text",
                        {
                          staticStyle: {
                            fontSize: "24rpx",
                            fontWeight: "500",
                            textAlign: "center",
                            color: "#FFFFFF",
                          },
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.info.likeSum))]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["svod-right-item"],
                      on: {
                        click: function ($event) {
                          _vm.comment(0)
                        },
                      },
                    },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: {
                          src: "/static/svod/btn_comment.png",
                          mode: "aspectFill",
                        },
                      }),
                      _c(
                        "u-text",
                        {
                          staticStyle: {
                            fontSize: "24rpx",
                            fontWeight: "500",
                            textAlign: "center",
                            color: "#FFFFFF",
                          },
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.info.comment))]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["svod-right-item"],
                      on: {
                        click: function ($event) {
                          _vm.jumpUrl("/pages/member/poster", "new")
                        },
                      },
                    },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: {
                          src: "/static/svod/btn_share.png",
                          mode: "aspectFill",
                        },
                      }),
                      _c(
                        "u-text",
                        {
                          staticStyle: {
                            fontSize: "24rpx",
                            fontWeight: "500",
                            textAlign: "center",
                            color: "#FFFFFF",
                          },
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("分享")]
                      ),
                    ],
                    1
                  ),
                ]),
                _c("view", { staticClass: ["svod-bottom"] }, [
                  _c("view", { staticClass: ["svod-bottom-item"] }, [
                    _vm.showFree
                      ? _c(
                          "u-text",
                          {
                            staticClass: ["watch-free"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [
                            _vm._v(
                              "免费观看次数：" +
                                _vm._s(_vm.user.free) +
                                " / " +
                                _vm._s(_vm.user.freeTot)
                            ),
                          ]
                        )
                      : _vm._e(),
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          color: "#FFFFFF",
                          fontSize: "32rpx",
                          fontWeight: "600",
                          padding: "10rpx",
                        },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("@" + _vm._s(_vm.info.nickname))]
                    ),
                    _c(
                      "view",
                      { staticClass: ["item-tag-list"] },
                      _vm._l(_vm.info.tagList, function (t, i) {
                        return _c(
                          "u-text",
                          {
                            key: i,
                            staticClass: ["item-tag"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v(_vm._s(t.name))]
                        )
                      }),
                      0
                    ),
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          color: "#FFFFFF",
                          fontSize: "28rpx",
                          padding: "10rpx",
                          lines: "1",
                          width: "600rpx",
                          textOverflow: "ellipsis",
                        },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v(_vm._s(_vm.item.title))]
                    ),
                  ]),
                ]),
              ]
            : [
                _c("u-image", {
                  staticStyle: { width: "750rpx", filter: "blur(5px)" },
                  style: { height: _vm.windowHeight + "px" },
                  attrs: {
                    lazyLoad: true,
                    fadeShow: false,
                    src: _vm.item.cover,
                    mode: "aspectFill",
                  },
                }),
                _c(
                  "view",
                  {
                    staticClass: ["buy-pop"],
                    on: { touchmove: _vm.moveHandle },
                  },
                  [
                    _c(
                      "view",
                      { staticClass: ["buy-content"] },
                      [
                        _c("u-image", {
                          staticStyle: {
                            width: "150rpx",
                            height: "150rpx",
                            borderRadius: "150rpx",
                            border: "2px solid #F5F5F5",
                          },
                          attrs: {
                            mode: "aspectFill",
                            src: _vm.getHeadImg(
                              _vm.item.cover,
                              _vm.info.headimgurl
                            ),
                          },
                        }),
                        _c(
                          "u-text",
                          {
                            staticStyle: {
                              color: "#FFFFFF",
                              fontSize: "15px",
                              margin: "50rpx 50rpx 30rpx 50rpx",
                            },
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v(_vm._s(_vm.item.title))]
                        ),
                        _c(
                          "u-text",
                          {
                            staticStyle: { fontSize: "12px", color: "#CCCCCC" },
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [
                            _vm._v(
                              "观看本影片需要支付" +
                                _vm._s(_vm.info.gold) +
                                "金币"
                            ),
                          ]
                        ),
                        _c("view", { staticClass: ["buy-btn"] }, [
                          _c(
                            "u-text",
                            {
                              staticClass: ["btn-right"],
                              appendAsTree: true,
                              attrs: { append: "tree" },
                              on: { click: _vm.buyVideo },
                            },
                            [_vm._v("支付金币")]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]
                ),
              ],
          _c(
            "uni-popup",
            {
              ref: "popupComment",
              attrs: { type: "bottom" },
              on: { change: _vm.commentChange },
            },
            [
              _c(
                "view",
                {
                  staticClass: ["comment-content"],
                  style:
                    "height:" + (_vm.windowHeight / 2 + _vm.h5Tabbar) + "px",
                },
                [
                  _c("view", { staticClass: ["comment-head"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["comment-title"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("评论 (" + _vm._s(_vm.info.comment) + "条)")]
                    ),
                  ]),
                  _c(
                    "scroll-view",
                    {
                      staticClass: ["comment-list"],
                      attrs: { scrollY: true, showScrollbar: false },
                      on: { scrolltolower: _vm.moreComment },
                    },
                    [
                      _vm.commentList.length && _vm.info.comment
                        ? _vm._l(_vm.commentList, function (c, i) {
                            return _c(
                              "view",
                              { key: i, staticClass: ["comment-list-item"] },
                              [
                                _c("u-image", {
                                  staticClass: ["user-cover"],
                                  attrs: { src: c.cover, mode: "aspectFill" },
                                }),
                                _c("view", { staticClass: ["user-info"] }, [
                                  _c(
                                    "view",
                                    { staticStyle: { flexDirection: "row" } },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["user-nickname"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v(_vm._s(c.nickname))]
                                      ),
                                      c.uid == _vm.userId
                                        ? _c(
                                            "u-text",
                                            {
                                              staticClass: ["user-nickname"],
                                              staticStyle: {
                                                color: "#FF8F00",
                                                marginLeft: "10rpx",
                                              },
                                              appendAsTree: true,
                                              attrs: { append: "tree" },
                                            },
                                            [_vm._v("(我)")]
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["user-date"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.utils.timeTodate(
                                            "Y-m-d H:i",
                                            c.add_time
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["user-content"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(c.content))]
                                  ),
                                ]),
                              ],
                              1
                            )
                          })
                        : _vm._e(),
                      !_vm.info.comment
                        ? _c(
                            "view",
                            {
                              staticStyle: {
                                margin: "80px 0",
                                alignItems: "center",
                              },
                            },
                            [
                              _c("u-image", {
                                staticStyle: {
                                  width: "100px",
                                  height: "100px",
                                },
                                attrs: { src: "/static/empty.png" },
                              }),
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    fontSize: "13px",
                                    color: "#666",
                                    marginTop: "10px",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("当前还没有评论")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    2
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["comment-bottom"],
                      style: { bottom: _vm.keyheight + "px" },
                    },
                    [
                      _c("u-input", {
                        staticClass: ["comment-input"],
                        attrs: {
                          type: "text",
                          placeholder: "我来说几句 ~",
                          adjustPosition: false,
                          cursorSpacing: 4,
                          value: _vm.commentContent,
                        },
                        on: {
                          input: function ($event) {
                            _vm.commentContent = $event.detail.value
                          },
                        },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["comment-send"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                          on: { click: _vm.sendCommentContent },
                        },
                        [_vm._v("发送")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          ),
        ],
        2
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!******************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-popup/uni-popup.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7da806a4&scoped=true& */ 9);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& */ 27).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& */ 27).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7da806a4\",\n  \"6d310bf8\",\n  false,\n  _uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1GQUEyRTtBQUMvSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUZBQTJFO0FBQ3BJOztBQUVBOztBQUVBO0FBQytOO0FBQy9OLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkYTgwNmE0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZGE4MDZhNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZGE4MDZhNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2RhODA2YTRcIixcbiAgXCI2ZDMxMGJmOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-popup/uni-popup.vue?vue&type=template&id=7da806a4&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7da806a4&scoped=true& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-popup/uni-popup.vue?vue&type=template&id=7da806a4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTransition: __webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 11)
      .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPopup
    ? _c(
        "view",
        { staticClass: ["uni-popup"], on: { touchmove: _vm.clear } },
        [
          _c("uni-transition", {
            style: { "background-color": _vm.backColor },
            attrs: {
              modeClass: ["fade"],
              styles: _vm.maskClass,
              show: _vm.showTrans,
            },
            on: { click: _vm.onTap },
          }),
          _c(
            "uni-transition",
            {
              attrs: {
                modeClass: _vm.ani,
                styles: _vm.transClass,
                show: _vm.showTrans,
              },
              on: { click: _vm.onTap },
            },
            [
              _c(
                "view",
                {
                  staticClass: ["uni-popup__wrapper-box"],
                  on: { click: _vm.clear },
                },
                [_vm._t("default")],
                2
              ),
            ]
          ),
        ],
        1
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!****************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-transition/uni-transition.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=cce16df8& */ 12);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&lang=css& */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&lang=css& */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"2169d3c4\",\n  false,\n  _uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtEQUF1RDtBQUMzRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0RBQXVEO0FBQ2hIOztBQUVBOztBQUVBO0FBQytOO0FBQy9OLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNjZTE2ZGY4JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMjE2OWQzYzRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-transition/uni-transition.vue?vue&type=template&id=cce16df8& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=cce16df8& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-transition/uni-transition.vue?vue&type=template&id=cce16df8& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          staticClass: ["uni-transition"],
          class: [_vm.ani.in],
          style: "transform:" + _vm.transform + ";" + _vm.stylesObject,
          on: { click: _vm.change },
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWltQixDQUFnQix5bEJBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 18));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = __webpack_provided_uni_dot_requireNativePlugin('animation');\nvar _default2 = {\n  name: 'uniTransition',\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    modeClass: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    },\n    duration: {\n      type: Number,\n      default: 300\n    },\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      ani: {\n        in: '',\n        active: ''\n      }\n    };\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          this.close();\n        }\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({}, this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's'\n      });\n      var transfrom = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transfrom += line + ':' + styles[i] + ';';\n      }\n      return transfrom;\n    }\n  },\n  created: function created() {\n    // this.timer = null\n    // this.nextTick = (time = 50) => new Promise(resolve => {\n    // \tclearTimeout(this.timer)\n    // \tthis.timer = setTimeout(resolve, time)\n    // \treturn this.timer\n    // });\n  },\n  methods: {\n    change: function change() {\n      this.$emit('click', {\n        detail: this.isShow\n      });\n    },\n    open: function open() {\n      var _this = this;\n      this.isShow = true;\n      this.transform = '';\n      this.ani.in = '';\n      for (var i in this.getTranfrom(false)) {\n        if (i === 'opacity') {\n          this.ani.in = 'fade-in';\n        } else {\n          this.transform += \"\".concat(this.getTranfrom(false)[i], \" \");\n        }\n      }\n      this.$nextTick(function () {\n        setTimeout(function () {\n          _this._animation(true);\n        }, 50);\n      });\n    },\n    close: function close(type) {\n      this._animation(false);\n    },\n    _animation: function _animation(type) {\n      var _this2 = this;\n      var styles = this.getTranfrom(type);\n      if (!this.$refs['ani']) return;\n      animation.transition(this.$refs['ani'].ref, {\n        styles: styles,\n        duration: this.duration,\n        //ms\n        timingFunction: 'ease',\n        needLayout: false,\n        delay: 0 //ms\n      }, function () {\n        if (!type) {\n          _this2.isShow = false;\n        }\n        _this2.$emit('change', {\n          detail: _this2.isShow\n        });\n      });\n    },\n    getTranfrom: function getTranfrom(type) {\n      var styles = {\n        transform: ''\n      };\n      this.modeClass.forEach(function (mode) {\n        switch (mode) {\n          case 'fade':\n            styles.opacity = type ? 1 : 0;\n            break;\n          case 'slide-top':\n            styles.transform += \"translateY(\".concat(type ? '0' : '-100%', \") \");\n            break;\n          case 'slide-right':\n            styles.transform += \"translateX(\".concat(type ? '0' : '100%', \") \");\n            break;\n          case 'slide-bottom':\n            styles.transform += \"translateY(\".concat(type ? '0' : '100%', \") \");\n            break;\n          case 'slide-left':\n            styles.transform += \"translateX(\".concat(type ? '0' : '-100%', \") \");\n            break;\n          case 'zoom-in':\n            styles.transform += \"scale(\".concat(type ? 1 : 0.8, \") \");\n            break;\n          case 'zoom-out':\n            styles.transform += \"scale(\".concat(type ? 1 : 1.2, \") \");\n            break;\n        }\n      });\n      return styles;\n    },\n    _modeClassArr: function _modeClassArr(type) {\n      var mode = this.modeClass;\n      if (typeof mode !== \"string\") {\n        var modestr = '';\n        mode.forEach(function (item) {\n          modestr += item + '-' + type + ',';\n        });\n        return modestr.substr(0, modestr.length - 1);\n      } else {\n        return mode + '-' + type;\n      }\n    },\n    // getEl(el) {\n    // \tconsole.log(el || el.ref || null);\n    // \treturn el || el.ref || null\n    // },\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, \"-$1\").toLowerCase();\n    }\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwic2hvdyIsInR5cGUiLCJkZWZhdWx0IiwibW9kZUNsYXNzIiwiZHVyYXRpb24iLCJzdHlsZXMiLCJkYXRhIiwiaXNTaG93IiwidHJhbnNmb3JtIiwiYW5pIiwiaW4iLCJhY3RpdmUiLCJ3YXRjaCIsImhhbmRsZXIiLCJpbW1lZGlhdGUiLCJjb21wdXRlZCIsInN0eWxlc09iamVjdCIsInRyYW5zZnJvbSIsImNyZWF0ZWQiLCJtZXRob2RzIiwiY2hhbmdlIiwiZGV0YWlsIiwib3BlbiIsInNldFRpbWVvdXQiLCJjbG9zZSIsIl9hbmltYXRpb24iLCJhbmltYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsIm5lZWRMYXlvdXQiLCJkZWxheSIsImdldFRyYW5mcm9tIiwiX21vZGVDbGFzc0FyciIsIm1vZGUiLCJtb2Rlc3RyIiwidG9MaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUFBLGdCQUVBO0VBQ0FBO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FJO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7UUFBQUM7UUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQVo7TUFDQWE7UUFDQTtVQUNBO1FBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0EsNkNBQ0E7UUFDQTtNQUFBLEVBQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQUM7TUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBLENBQ0E7RUFDQUM7SUFDQUM7TUFDQTtRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7UUFDQUM7VUFDQTtRQUNBO01BQ0E7SUFFQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BRUE7TUFDQUM7UUFDQXJCO1FBQ0FEO1FBQUE7UUFDQXVCO1FBQ0FDO1FBQ0FDO01BQ0E7UUFDQTtVQUNBO1FBQ0E7UUFDQTtVQUNBUjtRQUNBO01BQ0E7SUF1QkE7SUFDQVM7TUFDQTtRQUNBdEI7TUFDQTtNQUNBO1FBQ0E7VUFDQTtZQUNBSDtZQUNBO1VBQ0E7WUFDQUE7WUFDQTtVQUNBO1lBQ0FBO1lBQ0E7VUFDQTtZQUNBQTtZQUNBO1VBQ0E7WUFDQUE7WUFDQTtVQUNBO1lBQ0FBO1lBQ0E7VUFDQTtZQUNBQTtZQUNBO1FBQUE7TUFFQTtNQUNBO0lBQ0E7SUFDQTBCO01BQ0E7TUFDQTtRQUNBO1FBQ0FDO1VBQ0FDO1FBQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDRCIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJpc1Nob3dcIiByZWY9XCJhbmlcIiBjbGFzcz1cInVuaS10cmFuc2l0aW9uXCIgOmNsYXNzPVwiW2FuaS5pbl1cIiA6c3R5bGU9XCIndHJhbnNmb3JtOicgK3RyYW5zZm9ybSsnOycrc3R5bGVzT2JqZWN0XCJcclxuXHQgQGNsaWNrPVwiY2hhbmdlXCI+XHJcblx0XHQ8c2xvdD48L3Nsb3Q+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRjb25zdCBhbmltYXRpb24gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYW5pbWF0aW9uJyk7XHJcblx0Ly8gI2VuZGlmXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3VuaVRyYW5zaXRpb24nLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0c2hvdzoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZUNsYXNzOiB7XHJcblx0XHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGR1cmF0aW9uOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDMwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc1Nob3c6IGZhbHNlLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogJycsXHJcblx0XHRcdFx0YW5pOiB7IGluOiAnJyxcclxuXHRcdFx0XHRcdGFjdGl2ZTogJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0c2hvdzoge1xyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsKSB7XHJcblx0XHRcdFx0XHRpZiAobmV3VmFsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMub3BlbigpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0c3R5bGVzT2JqZWN0KCkge1xuXHRcdFx0XHRsZXQgc3R5bGVzID0ge1xyXG5cdFx0XHRcdFx0Li4udGhpcy5zdHlsZXMsXHJcblx0XHRcdFx0XHQndHJhbnNpdGlvbi1kdXJhdGlvbic6IHRoaXMuZHVyYXRpb24gLyAxMDAwICsgJ3MnXHJcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdHJhbnNmcm9tID0gJydcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHN0eWxlcykge1xuXHRcdFx0XHRcdGxldCBsaW5lID0gdGhpcy50b0xpbmUoaSlcclxuXHRcdFx0XHRcdHRyYW5zZnJvbSArPSBsaW5lICsgJzonICsgc3R5bGVzW2ldICsgJzsnXHJcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJhbnNmcm9tXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyB0aGlzLnRpbWVyID0gbnVsbFxyXG5cdFx0XHQvLyB0aGlzLm5leHRUaWNrID0gKHRpbWUgPSA1MCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdC8vIFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdC8vIFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSlcclxuXHRcdFx0Ly8gXHRyZXR1cm4gdGhpcy50aW1lclxyXG5cdFx0XHQvLyB9KTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNoYW5nZSgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycsIHtcclxuXHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvcGVuKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcclxuXHRcdFx0XHR0aGlzLmFuaS5pbiA9ICcnXHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmdldFRyYW5mcm9tKGZhbHNlKSkge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT09ICdvcGFjaXR5Jykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFuaS5pbiA9ICdmYWRlLWluJ1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gKz0gYCR7dGhpcy5nZXRUcmFuZnJvbShmYWxzZSlbaV19IGBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2FuaW1hdGlvbih0cnVlKVxyXG5cdFx0XHRcdFx0fSwgNTApXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlKHR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLl9hbmltYXRpb24oZmFsc2UpXHJcblx0XHRcdH0sXHJcblx0XHRcdF9hbmltYXRpb24odHlwZSkge1xyXG5cdFx0XHRcdGxldCBzdHlsZXMgPSB0aGlzLmdldFRyYW5mcm9tKHR5cGUpXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXG5cdFx0XHRcdGlmKCF0aGlzLiRyZWZzWydhbmknXSkgcmV0dXJuXHJcblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kcmVmc1snYW5pJ10ucmVmLCB7XHJcblx0XHRcdFx0XHRzdHlsZXMsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogdGhpcy5kdXJhdGlvbiwgLy9tc1xyXG5cdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJyxcclxuXHRcdFx0XHRcdG5lZWRMYXlvdXQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZGVsYXk6IDAgLy9tc1xyXG5cdFx0XHRcdH0sICgpID0+IHtcclxuXHRcdFx0XHRcdGlmICghdHlwZSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSAnJ1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gc3R5bGVzKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PT0gJ29wYWNpdHknKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYW5pLmluID0gYGZhZGUtJHt0eXBlPydvdXQnOidpbid9YFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gKz0gYCR7c3R5bGVzW2ldfSBgXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGlmICghdHlwZSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRUcmFuZnJvbSh0eXBlKSB7XHJcblx0XHRcdFx0bGV0IHN0eWxlcyA9IHtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5tb2RlQ2xhc3MuZm9yRWFjaCgobW9kZSkgPT4ge1xyXG5cdFx0XHRcdFx0c3dpdGNoIChtb2RlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2ZhZGUnOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy5vcGFjaXR5ID0gdHlwZSA/IDEgOiAwXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLXRvcCc6XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgdHJhbnNsYXRlWSgke3R5cGU/JzAnOictMTAwJSd9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLXJpZ2h0JzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGB0cmFuc2xhdGVYKCR7dHlwZT8nMCc6JzEwMCUnfSkgYFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdzbGlkZS1ib3R0b20nOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVkoJHt0eXBlPycwJzonMTAwJSd9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLWxlZnQnOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVgoJHt0eXBlPycwJzonLTEwMCUnfSkgYFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd6b29tLWluJzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGBzY2FsZSgke3R5cGU/MTowLjh9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3pvb20tb3V0JzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGBzY2FsZSgke3R5cGU/MToxLjJ9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gc3R5bGVzXHJcblx0XHRcdH0sXHJcblx0XHRcdF9tb2RlQ2xhc3NBcnIodHlwZSkge1xyXG5cdFx0XHRcdGxldCBtb2RlID0gdGhpcy5tb2RlQ2xhc3NcclxuXHRcdFx0XHRpZiAodHlwZW9mKG1vZGUpICE9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRsZXQgbW9kZXN0ciA9ICcnXHJcblx0XHRcdFx0XHRtb2RlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0bW9kZXN0ciArPSAoaXRlbSArICctJyArIHR5cGUgKyAnLCcpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuIG1vZGVzdHIuc3Vic3RyKDAsIG1vZGVzdHIubGVuZ3RoIC0gMSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1vZGUgKyAnLScgKyB0eXBlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBnZXRFbChlbCkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhlbCB8fCBlbC5yZWYgfHwgbnVsbCk7XHJcblx0XHRcdC8vIFx0cmV0dXJuIGVsIHx8IGVsLnJlZiB8fCBudWxsXHJcblx0XHRcdC8vIH0sXG5cdFx0XHR0b0xpbmUobmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQudW5pLXRyYW5zaXRpb24ge1xyXG5cdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG5cdH1cclxuXHJcblx0LmZhZGUtaW4ge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblxyXG5cdC5mYWRlLWFjdGl2ZSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLXRvcC1pbiB7XHJcblx0XHQvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7ICovXHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLXRvcC1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG5cdFx0Lyogb3BhY2l0eTogMTsgKi9cclxuXHR9XHJcblxyXG5cdC5zbGlkZS1yaWdodC1pbiB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuc2xpZGUtcmlnaHQtYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS1ib3R0b20taW4ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLWJvdHRvbS1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLWxlZnQtaW4ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS1sZWZ0LWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0Lnpvb20taW4taW4ge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG5cdH1cclxuXHJcblx0Lnpvb20tb3V0LWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdH1cclxuXHJcblx0Lnpvb20tb3V0LWluIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 17 */
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
/* 18 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 19);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 20)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 21);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
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
/* 21 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 20)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-transition/uni-transition.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=style&index=0&lang=css& */ 23);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-transition/uni-transition.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-transition": {
    "transitionTimingFunction": "ease",
    "transitionDuration": 300,
    "transitionProperty": "transform,opacity"
  },
  "fade-in": {
    "opacity": 0
  },
  "fade-active": {
    "opacity": 1
  },
  "slide-top-in": {
    "transform": "translateY(-100%)"
  },
  "slide-top-active": {
    "transform": "translateY(0)"
  },
  "slide-right-in": {
    "transform": "translateX(100%)"
  },
  "slide-right-active": {
    "transform": "translateX(0)"
  },
  "slide-bottom-in": {
    "transform": "translateY(100%)"
  },
  "slide-bottom-active": {
    "transform": "translateY(0)"
  },
  "slide-left-in": {
    "transform": "translateX(-100%)"
  },
  "slide-left-active": {
    "transform": "translateX(0)",
    "opacity": 1
  },
  "zoom-in-in": {
    "transform": "scale(0.8)"
  },
  "zoom-out-active": {
    "transform": "scale(1)"
  },
  "zoom-out-in": {
    "transform": "scale(1.2)"
  },
  "@VERSION": 2
}

/***/ }),
/* 24 */
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
/* 25 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 26);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRsQixDQUFnQixvbEJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0ZJTEVfV09SSy9IQnVpbGRlci9IQnVpbGRlclguMy45OS4yMDIzMTIyNjExL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0ZJTEVfV09SSy9IQnVpbGRlci9IQnVpbGRlclguMy45OS4yMDIzMTIyNjExL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _uniTransition = _interopRequireDefault(__webpack_require__(/*! ../uni-transition/uni-transition.vue */ 11));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: 'UniPopup',\n  components: {\n    uniTransition: _uniTransition.default\n  },\n  props: {\n    // 开启动画\n    animation: {\n      type: Boolean,\n      default: true\n    },\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    type: {\n      type: String,\n      default: 'center'\n    },\n    // maskClick\n    maskClick: {\n      type: Boolean,\n      default: true\n    },\n    backColor: {\n      type: String,\n      default: 'rgba(0,0,0,0.5)'\n    }\n  },\n  data: function data() {\n    return {\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      maskClass: {\n        'position': 'fixed',\n        'bottom': 0,\n        'top': 0,\n        'left': 0,\n        'right': 0,\n        'backgroundColor': 'rgba(0, 0, 0, 0.4)'\n      },\n      transClass: {\n        'position': 'fixed',\n        'left': 0,\n        'right': 0\n      }\n    };\n  },\n  watch: {\n    type: {\n      handler: function handler(newVal) {\n        switch (this.type) {\n          case 'left':\n            this.ani = ['slide-left'];\n            this.transClass = {\n              'position': 'fixed',\n              'top': 0,\n              'left': 0,\n              'bottom': 0\n            };\n            break;\n          case 'right':\n            this.ani = ['slide-right'];\n            this.transClass = {\n              'position': 'fixed',\n              'top': 0,\n              'right': 0,\n              'bottom': 0\n            };\n            break;\n          case 'top':\n            this.ani = ['slide-top'];\n            this.transClass = {\n              'position': 'fixed',\n              'left': 0,\n              'right': 0\n            };\n            break;\n          case 'bottom':\n            this.ani = ['slide-bottom'];\n            this.transClass = {\n              'position': 'fixed',\n              'left': 0,\n              'right': 0,\n              'bottom': 0\n            };\n            break;\n          case 'center':\n            this.ani = ['zoom-out', 'fade'];\n            this.transClass = {\n              'position': 'fixed',\n              'bottom': 0,\n              'left': 0,\n              'right': 0,\n              'top': 0,\n              'justifyContent': 'center',\n              'alignItems': 'center'\n            };\n            break;\n        }\n      },\n      immediate: true\n    }\n  },\n  created: function created() {},\n  methods: {\n    clear: function clear(e) {\n      // TODO nvue 取消冒泡\n      e.stopPropagation();\n    },\n    open: function open() {\n      var _this = this;\n      this.showPopup = true;\n      this.$nextTick(function () {\n        setTimeout(function () {\n          _this.showTrans = true;\n        }, 50);\n      });\n      this.$emit('change', {\n        show: true\n      });\n    },\n    close: function close(type) {\n      var _this2 = this;\n      this.showTrans = false;\n      this.$nextTick(function () {\n        clearTimeout(_this2.timer);\n        _this2.timer = setTimeout(function () {\n          _this2.$emit('change', {\n            show: false\n          });\n          _this2.showPopup = false;\n        }, 300);\n      });\n    },\n    onTap: function onTap() {\n      if (!this.maskClick) return;\n      this.close();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsInVuaVRyYW5zaXRpb24iLCJwcm9wcyIsImFuaW1hdGlvbiIsInR5cGUiLCJkZWZhdWx0IiwibWFza0NsaWNrIiwiYmFja0NvbG9yIiwiZGF0YSIsImFuaSIsInNob3dQb3B1cCIsInNob3dUcmFucyIsIm1hc2tDbGFzcyIsInRyYW5zQ2xhc3MiLCJ3YXRjaCIsImhhbmRsZXIiLCJpbW1lZGlhdGUiLCJjcmVhdGVkIiwibWV0aG9kcyIsImNsZWFyIiwiZSIsIm9wZW4iLCJzZXRUaW1lb3V0Iiwic2hvdyIsImNsb3NlIiwiY2xlYXJUaW1lb3V0Iiwib25UYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7RUFDQUM7SUFDQUM7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQTtJQUNBRDtNQUNBQTtNQUNBQztJQUNBO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0VBQ0E7RUFDQUc7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO01BQ0FDO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FWO01BQ0FXO1FBQ0E7VUFDQTtZQUNBO1lBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtZQUNBO1lBQ0E7VUFDQTtZQUNBO1lBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtZQUNBO1lBQ0E7VUFDQTtZQUNBO1lBQ0E7Y0FDQTtjQUNBO2NBQ0E7WUFDQTtZQUNBO1VBQ0E7WUFDQTtZQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7WUFDQTtZQUNBO1VBQ0E7WUFDQTtZQUNBO2NBQ0E7Y0FLQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7WUFDQTtZQUNBO1FBQUE7TUFFQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7RUFDQUM7SUFDQUM7TUFDQTtNQUNBQztJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO1FBQ0FDO1VBQ0E7UUFDQTtNQUNBO01BQ0E7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO1FBQ0FDO1FBQ0E7VUFDQTtZQUNBRjtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUc7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgdi1pZj1cInNob3dQb3B1cFwiIGNsYXNzPVwidW5pLXBvcHVwXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJjbGVhclwiPlxyXG5cdFx0PHVuaS10cmFuc2l0aW9uIDptb2RlLWNsYXNzPVwiWydmYWRlJ11cIiA6c3R5bGVzPVwibWFza0NsYXNzXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiIDpzdHlsZT1cInsnYmFja2dyb3VuZC1jb2xvcic6YmFja0NvbG9yfVwiLz5cclxuXHRcdDx1bmktdHJhbnNpdGlvbiA6bW9kZS1jbGFzcz1cImFuaVwiIDpzdHlsZXM9XCJ0cmFuc0NsYXNzXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wb3B1cF9fd3JhcHBlci1ib3hcIiBAY2xpY2suc3RvcD1cImNsZWFyXCI+XHJcblx0XHRcdFx0PHNsb3QgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC91bmktdHJhbnNpdGlvbj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB1bmlUcmFuc2l0aW9uIGZyb20gJy4uL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnVW5pUG9wdXAnLFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR1bmlUcmFuc2l0aW9uXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8g5byA5ZCv5Yqo55S7XHJcblx0XHRcdGFuaW1hdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvLnlh7rlsYLnsbvlnovvvIzlj6/pgInlgLzvvIx0b3A6IOmhtumDqOW8ueWHuuWxgu+8m2JvdHRvbe+8muW6lemDqOW8ueWHuuWxgu+8m2NlbnRlcu+8muWFqOWxj+W8ueWHuuWxglxyXG5cdFx0XHR0eXBlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdjZW50ZXInXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIG1hc2tDbGlja1xyXG5cdFx0XHRtYXNrQ2xpY2s6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFja0NvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdyZ2JhKDAsMCwwLDAuNSknXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRhbmk6IFtdLFxyXG5cdFx0XHRcdHNob3dQb3B1cDogZmFsc2UsXHJcblx0XHRcdFx0c2hvd1RyYW5zOiBmYWxzZSxcclxuXHRcdFx0XHRtYXNrQ2xhc3M6IHtcclxuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHQnYm90dG9tJzogMCxcclxuXHRcdFx0XHRcdCd0b3AnOiAwLFxyXG5cdFx0XHRcdFx0J2xlZnQnOiAwLFxyXG5cdFx0XHRcdFx0J3JpZ2h0JzogMCxcclxuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kQ29sb3InOiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dHJhbnNDbGFzczoge1xyXG5cdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdCdsZWZ0JzogMCxcclxuXHRcdFx0XHRcdCdyaWdodCc6IDAsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbCkge1xyXG5cdFx0XHRcdFx0c3dpdGNoICh0aGlzLnR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLWxlZnQnXVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHQndG9wJzogMCxcclxuXHRcdFx0XHRcdFx0XHRcdCdsZWZ0JzogMCxcclxuXHRcdFx0XHRcdFx0XHRcdCdib3R0b20nOiAwXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtcmlnaHQnXVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHQndG9wJzogMCxcclxuXHRcdFx0XHRcdFx0XHRcdCdyaWdodCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQnYm90dG9tJzogMFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdFx0XHRjYXNlICd0b3AnOlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS10b3AnXVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHQnbGVmdCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAwLFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdFx0XHRjYXNlICdib3R0b20nOlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1ib3R0b20nXVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHQnbGVmdCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0J2JvdHRvbSc6IDBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnY2VudGVyJzpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuaSA9IFsnem9vbS1vdXQnLCAnZmFkZSddXHJcblx0XHRcdFx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0XHRcdFx0XHRcdCdkaXNwbGF5JzogJ2ZsZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0J2ZsZXhEaXJlY3Rpb24nOiAnY29sdW1uJyxcclxuXHRcdFx0XHRcdFx0XHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0J2JvdHRvbSc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQnbGVmdCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0J3RvcCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQnanVzdGlmeUNvbnRlbnQnOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdhbGlnbkl0ZW1zJzogJ2NlbnRlcidcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHt9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjbGVhcihlKSB7XHJcblx0XHRcdFx0Ly8gVE9ETyBudnVlIOWPlua2iOWGkuazoVxyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlbigpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXHJcblx0XHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRzaG93OiB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UodHlwZSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RyYW5zID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcclxuXHRcdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0XHRcdHNob3c6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2VcclxuXHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblRhcCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMubWFza0NsaWNrKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQudW5pLXBvcHVwIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xyXG5cdFx0dG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBINSAqL1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1wb3B1cF9fbWFzayB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWJnLWNvbG9yLW1hc2s7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuXHJcblx0Lm1hc2stYW5pIHtcclxuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG5cdH1cclxuXHJcblx0LnVuaS10b3AtbWFzayB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LnVuaS1ib3R0b20tbWFzayB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LnVuaS1jZW50ZXItbWFzayB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LnVuaS1wb3B1cF9fd3JhcHBlciB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdH1cclxuXHJcblx0LnRvcCB7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcclxuXHR9XHJcblxyXG5cdC5ib3R0b20ge1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwMHB4KTtcclxuXHR9XHJcblxyXG5cdC5jZW50ZXIge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG5cclxuXHQudW5pLXBvcHVwX193cmFwcGVyLWJveCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQtYW5pIHtcclxuXHRcdC8vIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuXHR9XHJcblxyXG5cclxuXHQudW5pLXRvcC1jb250ZW50IHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHR9XHJcblxyXG5cdC51bmktYm90dG9tLWNvbnRlbnQge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG5cdH1cclxuXHJcblx0LnVuaS1jZW50ZXItY29udGVudCB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& */ 28);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-popup": {
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "uni-popup__mask": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "opacity": 0
  },
  "mask-ani": {
    "transitionProperty": "opacity",
    "transitionDuration": 200
  },
  "uni-top-mask": {
    "opacity": 1
  },
  "uni-bottom-mask": {
    "opacity": 1
  },
  "uni-center-mask": {
    "opacity": 1
  },
  "uni-popup__wrapper": {
    "position": "absolute"
  },
  "top": {
    "top": 0,
    "left": 0,
    "right": 0,
    "transform": "translateY(-500px)"
  },
  "bottom": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "transform": "translateY(500px)"
  },
  "center": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0,
    "justifyContent": "center",
    "alignItems": "center",
    "transform": "scale(1.2)",
    "opacity": 0
  },
  "uni-popup__wrapper-box": {
    "position": "relative"
  },
  "content-ani": {
    "transitionProperty": "transform,opacity",
    "transitionDuration": 200
  },
  "uni-top-content": {
    "transform": "translateY(0)"
  },
  "uni-bottom-content": {
    "transform": "translateY(0)"
  },
  "uni-center-content": {
    "transform": "scale(1)",
    "opacity": 1
  },
  "@VERSION": 2
}

/***/ }),
/* 29 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/svod/player.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./player.nvue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFtQixDQUFnQiw2bEJBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5ZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0ZJTEVfV09SSy9IQnVpbGRlci9IQnVpbGRlclguMy45OS4yMDIzMTIyNjExL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0ZJTEVfV09SSy9IQnVpbGRlci9IQnVpbGRlclguMy45OS4yMDIzMTIyNjExL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheWVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/svod/player.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _utilsFilter = _interopRequireDefault(__webpack_require__(/*! @/components/shoyu-date/utils.filter.js */ 32));\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/common/api.js */ 33));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar bottom = 0;\nvar _default = {\n  data: function data() {\n    return {\n      utils: _utilsFilter.default,\n      h5Tabbar: bottom + 80,\n      statusBarHeight: system.statusBarHeight,\n      windowHeight: system.windowHeight + bottom,\n      screenHeight: system.screenHeight,\n      curIndex: 0,\n      playStatus: true,\n      userId: 0,\n      item: {\n        id: 0,\n        url: ''\n      },\n      info: {\n        isPlay: true,\n        nickname: 'loading...',\n        like: 0,\n        likeSum: 0,\n        comment: 0,\n        headimgurl: '',\n        isBuy: false,\n        gold: 0\n      },\n      showLoading: true,\n      loadingImg: '/static/load.gif',\n      showError: false,\n      videoObj: {},\n      commentPage: 1,\n      commentList: [],\n      user: {\n        isVip: false,\n        freeTot: 0,\n        free: 0\n      },\n      commentContent: '',\n      likeTime: 0,\n      showFree: false,\n      emptyUrl: true,\n      one: false,\n      objectFit: 'cover',\n      keyheight: 0\n    };\n  },\n  onLoad: function onLoad(e) {\n    this.item = JSON.parse(e.info);\n    var login = _api.default.getLogins();\n    if (login) this.userId = login.userId;\n    this.getInitPlayer();\n  },\n  created: function created() {\n    var _this = this;\n    this.videoObj = uni.createVideoContext('myVideo');\n    uni.onKeyboardHeightChange(function (res) {\n      _this.keyheight = res.height;\n    });\n  },\n  onShow: function onShow() {\n    if (this.one) {\n      var login = _api.default.getLogins();\n      if (login) this.userId = login.userId;\n    }\n  },\n  onHide: function onHide() {\n    this.one = true;\n    this.playVideoStatus(false);\n  },\n  methods: {\n    loadedmetadata: function loadedmetadata(e) {\n      e = e.detail.height - e.detail.width;\n      if (e > 50) {\n        this.objectFit = 'cover';\n      } else {\n        this.objectFit = 'contain';\n      }\n    },\n    getInitPlayer: function getInitPlayer() {\n      var _this2 = this;\n      //console.log(this.item);\n      uni.request({\n        url: _api.default.apiData.playSvodVideo,\n        method: 'POST',\n        data: {\n          uid: this.userId,\n          vid: this.item.id\n        },\n        header: {\n          'Content-type': 'application/x-www-form-urlencoded'\n        },\n        success: function success(e) {\n          var d = e.data;\n          if (d.Code != 200) return _this2.back(d.Msg);\n          _this2.info = d.Data.item;\n          // console.log(this.userId, this.item.id);\n          // console.log(this.info);\n          _this2.info.isPlay = true;\n          _this2.user = d.Data.user;\n          _this2.getPlayerStatus();\n        },\n        complete: function complete() {\n          var timer = setTimeout(function () {\n            _this2.emptyUrl = false;\n            clearTimeout(timer);\n          }, 1000);\n        }\n      });\n    },\n    getPlayerStatus: function getPlayerStatus() {\n      // 非VIP，收费视频，未购买\n      if (!this.user.isVip && parseInt(this.info.gold) > 0 && !this.info.isBuy) {\n        if (parseInt(this.user.free) > 0) {\n          // 扣除免费次数\n          this.user.free--;\n          this.freeWatch();\n        } else {\n          this.info.isPlay = false;\n          this.showLoading = false;\n        }\n      }\n    },\n    // 金币购买视频\n    buyVideo: function buyVideo() {\n      var _this3 = this;\n      if (!this.userId) return _api.default.showToast('请先登录');\n      uni.showLoading({\n        title: '正在支付...',\n        mask: true\n      });\n      uni.request({\n        url: _api.default.apiData.goldBuyVideo,\n        method: 'POST',\n        data: {\n          uid: this.userId,\n          vid: this.info.id\n        },\n        header: {\n          'Content-type': 'application/x-www-form-urlencoded'\n        },\n        success: function success(e) {\n          var d = e.data;\n          _api.default.showToast(d.Msg, 1500);\n          if (d.Code == 201) return;\n          _this3.info.isBuy = _this3.info.isPlay = true;\n        }\n      });\n    },\n    // 扣除免费观看次数\n    freeWatch: function freeWatch(vid) {\n      var _this4 = this;\n      if (this.userId == 0) return this.user.free = 0;\n      uni.request({\n        url: _api.default.apiData.updateFree,\n        method: 'POST',\n        data: {\n          uid: this.userId,\n          vid: this.info.id\n        },\n        header: {\n          'Content-type': 'application/x-www-form-urlencoded'\n        },\n        success: function success(e) {\n          _this4.info.isBuy = _this4.info.isPlay = _this4.showFree = true;\n        }\n      });\n    },\n    playVideoStatus: function playVideoStatus(statu) {\n      this.playStatus = statu;\n      if (!this.playStatus) {\n        this.videoObj.pause();\n      } else {\n        this.videoObj.play();\n      }\n    },\n    getHeadImg: function getHeadImg(cover, head) {\n      return head.length > 10 ? head : cover;\n    },\n    videoLike: function videoLike() {\n      var _this5 = this;\n      if (!this.userId) return _api.default.showToast('请先登录');\n      // 限制连续点赞时间\n      if (this.likeTime < 1) {\n        var like = this.info.like == 1 ? 0 : 1;\n        this.info.like = like;\n        if (like == 1) {\n          this.info.likeSum++;\n        } else {\n          this.info.likeSum--;\n        }\n        this.likeTime = 3;\n        uni.request({\n          url: _api.default.apiData.likeSvodVideo,\n          method: 'POST',\n          data: {\n            uid: this.userId,\n            vid: this.info.id\n          },\n          header: {\n            'Content-type': 'application/x-www-form-urlencoded'\n          },\n          success: function success(e) {\n            // /console.log('点赞成功');\n          },\n          complete: function complete() {\n            _this5.videoLikeTime();\n          }\n        });\n      } else {\n        _api.default.showToast('操作太快，' + this.likeTime + '秒后再试');\n      }\n    },\n    videoLikeTime: function videoLikeTime() {\n      var _this6 = this;\n      if (this.likeTime > 0) {\n        var timer = setTimeout(function () {\n          _this6.likeTime--;\n          _this6.videoLikeTime();\n          clearTimeout(timer);\n        }, 1000);\n      }\n    },\n    comment: function comment(isOpen) {\n      var _this7 = this;\n      uni.showLoading({\n        title: '加载中...',\n        mask: true\n      });\n      uni.request({\n        url: _api.default.apiData.svodVideoComm,\n        method: 'POST',\n        data: {\n          uid: this.userId,\n          vid: this.item.id,\n          page: this.commentPage\n        },\n        header: {\n          'Content-type': 'application/x-www-form-urlencoded'\n        },\n        success: function success(e) {\n          var d = e.data;\n          if (d.Code != 200) return _api.default.showToast(d.Msg, 1500);\n          if (_this7.commentPage > 1) {\n            _this7.commentList = _this7.commentList.concat(d.Data.list);\n          } else {\n            _this7.commentList = d.Data.list;\n          }\n          if (!isOpen) _this7.$refs['popupComment'].open();\n          uni.hideLoading();\n        }\n      });\n    },\n    moreComment: function moreComment() {\n      this.commentPage++;\n      this.comment(1);\n    },\n    commentChange: function commentChange(e) {\n      if (!e.show) this.initCommentData();\n    },\n    initCommentData: function initCommentData() {\n      this.commentPage = 1;\n      this.commentContent = '';\n      this.commentList = [];\n    },\n    sendCommentContent: function sendCommentContent() {\n      var _this8 = this;\n      if (!this.commentContent.length) return;\n      if (!this.userId) return _api.default.showToast('请先登录');\n      uni.showLoading({\n        title: '提交中...',\n        mask: true\n      });\n      uni.request({\n        url: _api.default.apiData.sendVideoComm,\n        method: 'POST',\n        data: {\n          uid: this.userId,\n          vid: this.item.id,\n          content: this.commentContent\n        },\n        header: {\n          'Content-type': 'application/x-www-form-urlencoded'\n        },\n        success: function success(e) {\n          var d = e.data;\n          _api.default.showToast(d.Msg);\n          if (d.Code != 200) return;\n          _this8.commentContent = '';\n          if (d.Data) {\n            _this8.commentList.unshift(d.Data);\n            _this8.info.comment++;\n          }\n        }\n      });\n    },\n    onplay: function onplay(e) {\n      // 播放\n      //console.log('play');\n    },\n    onerror: function onerror(err) {\n      if (!this.emptyUrl) {\n        __f__(\"log\", err, \" at pages/svod/player.nvue:642\");\n        this.back('播放失败，请检查网络是否异常');\n      }\n    },\n    timeupdate: function timeupdate(e) {\n      // 播放时长\n      var d = e.detail;\n      if (d.currentTime > 0.1) this.showLoading = false;\n    },\n    jumpUrl: function jumpUrl(u, t) {\n      _api.default.jumpUrl(u, t);\n    },\n    back: function back(msg) {\n      _api.default.showToast(msg, 2000);\n      var timer = setTimeout(function () {\n        uni.navigateBack();\n        clearTimeout(timer);\n      }, 1000);\n    },\n    moveHandle: function moveHandle() {}\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 31)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc3ZvZC9wbGF5ZXIubnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwidXRpbHMiLCJoNVRhYmJhciIsInN0YXR1c0JhckhlaWdodCIsIndpbmRvd0hlaWdodCIsInNjcmVlbkhlaWdodCIsImN1ckluZGV4IiwicGxheVN0YXR1cyIsInVzZXJJZCIsIml0ZW0iLCJpZCIsInVybCIsImluZm8iLCJpc1BsYXkiLCJuaWNrbmFtZSIsImxpa2UiLCJsaWtlU3VtIiwiY29tbWVudCIsImhlYWRpbWd1cmwiLCJpc0J1eSIsImdvbGQiLCJzaG93TG9hZGluZyIsImxvYWRpbmdJbWciLCJzaG93RXJyb3IiLCJ2aWRlb09iaiIsImNvbW1lbnRQYWdlIiwiY29tbWVudExpc3QiLCJ1c2VyIiwiaXNWaXAiLCJmcmVlVG90IiwiZnJlZSIsImNvbW1lbnRDb250ZW50IiwibGlrZVRpbWUiLCJzaG93RnJlZSIsImVtcHR5VXJsIiwib25lIiwib2JqZWN0Rml0Iiwia2V5aGVpZ2h0Iiwib25Mb2FkIiwiY3JlYXRlZCIsInVuaSIsIm9uU2hvdyIsIm9uSGlkZSIsIm1ldGhvZHMiLCJsb2FkZWRtZXRhZGF0YSIsImUiLCJnZXRJbml0UGxheWVyIiwibWV0aG9kIiwidWlkIiwidmlkIiwiaGVhZGVyIiwic3VjY2VzcyIsImNvbXBsZXRlIiwiY2xlYXJUaW1lb3V0IiwiZ2V0UGxheWVyU3RhdHVzIiwiYnV5VmlkZW8iLCJ0aXRsZSIsIm1hc2siLCJhcGkiLCJmcmVlV2F0Y2giLCJwbGF5VmlkZW9TdGF0dXMiLCJnZXRIZWFkSW1nIiwidmlkZW9MaWtlIiwidmlkZW9MaWtlVGltZSIsInBhZ2UiLCJtb3JlQ29tbWVudCIsImNvbW1lbnRDaGFuZ2UiLCJpbml0Q29tbWVudERhdGEiLCJzZW5kQ29tbWVudENvbnRlbnQiLCJjb250ZW50Iiwib25wbGF5Iiwib25lcnJvciIsInRpbWV1cGRhdGUiLCJqdW1wVXJsIiwiYmFjayIsIm1vdmVIYW5kbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFvV0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5BO0FBQ0E7QUFBQSxlQU1BO0VBQ0FBO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUFBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBTjtRQUNBN0I7UUFDQW9DO1FBQ0EvQztVQUNBZ0Q7VUFDQUM7UUFDQTtRQUNBQztVQUNBO1FBQ0E7UUFDQUM7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1FBQ0E7UUFDQUM7VUFDQTtZQUNBO1lBQ0FDO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQWY7UUFBQWdCO1FBQUFDO01BQUE7TUFDQWpCO1FBQ0E3QjtRQUNBb0M7UUFDQS9DO1VBQ0FnRDtVQUNBQztRQUNBO1FBQ0FDO1VBQ0E7UUFDQTtRQUNBQztVQUNBO1VBQ0FPO1VBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBbkI7UUFDQTdCO1FBQ0FvQztRQUNBL0M7VUFDQWdEO1VBQ0FDO1FBQ0E7UUFDQUM7VUFDQTtRQUNBO1FBQ0FDO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQVM7TUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUNBO1FBQ0E7VUFDQTtRQUNBO1FBQ0E7UUFDQXRCO1VBQ0E3QjtVQUNBb0M7VUFDQS9DO1lBQ0FnRDtZQUNBQztVQUNBO1VBQ0FDO1lBQ0E7VUFDQTtVQUNBQztZQUNBO1VBQUEsQ0FDQTtVQUNBQztZQUNBO1VBQ0E7UUFDQTtNQUNBO1FBQ0FNO01BQ0E7SUFDQTtJQUNBSztNQUFBO01BQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQVY7UUFDQTtNQUNBO0lBQ0E7SUFDQXBDO01BQUE7TUFDQXVCO1FBQUFnQjtRQUFBQztNQUFBO01BQ0FqQjtRQUNBN0I7UUFDQW9DO1FBQ0EvQztVQUNBZ0Q7VUFDQUM7VUFDQWU7UUFDQTtRQUNBZDtVQUNBO1FBQ0E7UUFDQUM7VUFDQTtVQUNBO1VBQ0E7WUFDQTtVQUNBO1lBQ0E7VUFDQTtVQUNBO1VBQ0FYO1FBQ0E7TUFDQTtJQUNBO0lBQ0F5QjtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtNQUNBNUI7UUFBQWdCO1FBQUFDO01BQUE7TUFDQWpCO1FBQ0E3QjtRQUNBb0M7UUFDQS9DO1VBQ0FnRDtVQUNBQztVQUNBb0I7UUFDQTtRQUNBbkI7VUFDQTtRQUNBO1FBQ0FDO1VBQ0E7VUFDQU87VUFDQTtVQUNBO1VBQ0E7WUFDQTtZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQVk7TUFDQTtNQUNBO0lBQUEsQ0FDQTtJQUNBQztNQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBZjtJQUNBO0lBQ0FnQjtNQUNBaEI7TUFDQTtRQUNBbEI7UUFDQWE7TUFDQTtJQUNBO0lBQ0FzQjtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZSBzY29wZWQ+XHJcblx0LnBhZ2Uge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMxRDFEMjg7XHJcblx0fVxyXG5cdC5idXktcG9we1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQud2F0Y2gtZnJlZXtcclxuXHRcdGNvbG9yOiAjRkY4RjAwO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0cGFkZGluZzogMjBycHggMTBycHg7XHJcblx0fVxyXG5cdC5idG4tcmlnaHR7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI0ZGOEYwMCwgcmdiYSgyNTQsNjcsMTAxLDAuOCkpO1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiAyMHJweCA1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0Ly9tYXJnaW4tbGVmdDogMzBycHg7XHJcblx0fVxyXG5cdC5idG4tbGVmdHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cGFkZGluZzogMjBycHggNTBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHR9XHJcblx0LmJ1eS1idG57XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0fVxyXG5cdC52aWRlby1jb3ZlcntcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRoZWlnaHQ6IDE1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1MHJweDtcclxuXHRcdGJvcmRlci13aWR0aDogMnB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjRjVGNUY1O1xyXG5cdH1cclxuXHQuYnV5LWNvbnRlbnR7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogLTI1cHg7XHJcblx0fVxyXG5cdC51c2VyLWNvbnRlbnR7XHJcblx0XHRtYXJnaW46IDIwcnB4IDAgMzBycHggMDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGNvbG9yOiAjNjY2NjY2O1xyXG5cdH1cclxuXHQudXNlci1kYXRle1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICM4ODg4ODg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblx0LnVzZXItbmlja25hbWV7XHJcblx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0Y29sb3I6ICM1NTU1NTU7XHJcblx0XHRtYXJnaW4tdG9wOiA1cnB4O1xyXG5cdH1cclxuXHQudXNlci1pbmZve1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblx0LnVzZXItY292ZXJ7XHJcblx0XHR3aWR0aDogOTBycHg7XHJcblx0XHRoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOTBycHg7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjRjVGNUY1O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNXJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcclxuXHR9XHJcblx0LmNvbW1lbnQtc2VuZHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjRkY4RjAwLCByZ2JhKDI1NCw2NywxMDEsMC44KSk7XHJcblx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzVweDtcclxuXHRcdHdpZHRoOiAxMzBycHg7XHJcblx0XHRtYXJnaW46IDAgMjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzNXB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cdC5jb21tZW50LWlucHV0e1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI0Y1RjVGNTtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGhlaWdodDogMzVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0XHRwYWRkaW5nOiAwIDMwcnB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblx0LmNvbW1lbnQtYm90dG9te1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI0Y1RjVGNTtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHQuY29tbWVudC1saXN0LWl0ZW17XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBycHg7XHJcblx0fVxyXG5cdC5jb21tZW50LWxpc3R7XHJcblx0XHRwYWRkaW5nOiAwIDQwcnB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xyXG5cdFx0aGVpZ2h0OiAxMDBweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHQuY29tbWVudC10aXRsZXtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblx0LmNvbW1lbnQtaGVhZHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC5jb21tZW50LWNvbnRlbnR7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHggNDBycHggMCAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cdC5wYXVzZS1pbWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAxNTBweDtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQvL2JhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0fVxyXG5cdC5pdGVtLXRhZ3tcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0fVxyXG5cdC5pdGVtLXRhZy1saXN0e1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdG1hcmdpbjogMTVycHggMDtcclxuXHR9XHJcblx0LnN2b2QtcmlnaHQtY292ZXJ7XHJcblx0XHRib3JkZXItcmFkaXVzOiA5MHJweDtcclxuXHRcdGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci13aWR0aDogNXJweDtcclxuXHR9XHJcblx0LnN2b2QtcmlnaHQtaXRlbXtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogNDBycHg7XHJcblx0fVxyXG5cdC5zdm9kLXJpZ2h0e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiA5MHB4OyBcclxuXHRcdHJpZ2h0OiAzMHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcblx0XHR6LWluZGV4OiAyO1xyXG5cdH1cclxuXHQuc3ZvZC1ib3R0b217XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDYwcHg7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDE0MHJweDtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBycHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAzMHJweDsgXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0fVxyXG5cdC5pY29ue1xyXG5cdFx0d2lkdGg6IDY2cnB4O1xyXG5cdFx0aGVpZ2h0OiA2NnJweDtcclxuXHR9XHJcblx0LmxvYWQtaW1ne1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMxRDFEMjg7XHJcblx0fVxyXG5cdC5pcy1idXl7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjRkY4RjAwLCByZ2JhKDI1NCw2NywxMDEsMC44KSk7XHJcblx0XHRtYXJnaW4tdG9wOiAtMThycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM2cnB4O1xyXG5cdFx0cGFkZGluZzogMCAxMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cclxuPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiIDpzdHlsZT1cInsnaGVpZ2h0Jzogd2luZG93SGVpZ2h0ICsncHgnfVwiPlxyXG5cdFx0PCEtLSDliqDovb3lsYIgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxvYWQtaW1nXCIgOnN0eWxlPVwieydoZWlnaHQnOndpbmRvd0hlaWdodCsncHgnfVwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwibW92ZUhhbmRsZVwiIHYtaWY9XCJzaG93TG9hZGluZ1wiPlxyXG5cdFx0XHQ8aW1hZ2UgOnNyYz1cImxvYWRpbmdJbWdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgc3R5bGU9XCJ3aWR0aDo1MDBycHg7aGVpZ2h0OjQwMHJweDtcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSBtYWluIC0tPlxyXG5cdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMgLS0+XHJcblx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uY292ZXJcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIEBsb2FkPVwibG9hZGVkbWV0YWRhdGFcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt6LWluZGV4OiAtMTtcIj48L2ltYWdlPlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cImluZm8uaXNQbGF5XCI+XHJcblx0XHRcdDx2aWRlb1xyXG5cdFx0XHRcdHJlZj1cIm15VmlkZW9cIiBcclxuXHRcdFx0XHRpZD1cIm15VmlkZW9cIiBcclxuXHRcdFx0XHRzdHlsZT1cIndpZHRoOjc1MHJweDtcIlxyXG5cdFx0XHRcdDpzdHlsZT1cInsnaGVpZ2h0Jzogd2luZG93SGVpZ2h0ICsncHgnfVwiXHJcblx0XHRcdFx0OnNyYz1cIml0ZW0udXJsXCJcclxuXHRcdFx0XHQ6bG9vcD1cInRydWVcIlxyXG5cdFx0XHRcdDphdXRvcGxheT1cInRydWVcIlxyXG5cdFx0XHRcdDpjb250cm9scz1cInRydWVcIiBcclxuXHRcdFx0XHQ6b2JqZWN0LWZpdD1cIm9iamVjdEZpdFwiXHJcblx0XHRcdFx0OnNob3ctcGxheS1idG49XCJmYWxzZVwiXHJcblx0XHRcdFx0OnNob3ctZnVsbHNjcmVlbi1idG49XCJmYWxzZVwiXHJcblx0XHRcdFx0OmVuYWJsZS1wbGF5LWdlc3R1cmU9XCJmYWxzZVwiXHJcblx0XHRcdFx0OnNob3ctY2VudGVyLXBsYXktYnRuPVwiZmFsc2VcIlxyXG5cdFx0XHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCJcclxuXHRcdFx0XHRAcGxheT1cIm9ucGxheVwiIFxyXG5cdFx0XHRcdEBlcnJvcj1cIm9uZXJyb3JcIiBcclxuXHRcdFx0XHRAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIlxyXG5cdFx0XHRcdEBsb2FkZWRtZXRhZGF0YT1cImxvYWRlZG1ldGFkYXRhXCI+XHJcblx0XHRcdDwvdmlkZW8+XHJcblx0XHRcdDwhLS1wYXVzZS0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBhdXNlLWltZ1wiIEBjbGljaz1cInBsYXlWaWRlb1N0YXR1cyghcGxheVN0YXR1cylcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9zdm9kL2J0bl9wbGF5ZXIucG5nXCIgc3R5bGU9XCJ3aWR0aDoxNTBycHg7aGVpZ2h0OjE1MHJweDttYXJnaW4tYm90dG9tOi0xMDBweDtcIiB2LWlmPVwiIXBsYXlTdGF0dXNcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS1yaWdodC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInN2b2QtcmlnaHRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInN2b2QtcmlnaHQtY292ZXJcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiZ2V0SGVhZEltZyhpdGVtLmNvdmVyLCBpbmZvLmhlYWRpbWd1cmwpXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBzdHlsZT1cIndpZHRoOiA5MHJweDtoZWlnaHQ6IDkwcnB4O2JvcmRlci1yYWRpdXM6IDkwcnB4O1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXMtYnV5XCIgdi1pZj1cInVzZXIuaXNWaXBcIj7lsIrotLVWSVA8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJpcy1idXlcIiB2LWVsc2UtaWY9XCJpbmZvLmlzQnV5XCI+5bey6LSt5LmwPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXMtYnV5XCIgdi1lbHNlLWlmPVwiaW5mby5nb2xkPT0wXCI+6ZmQIOWFjTwvdGV4dD5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInN2b2QtcmlnaHQtaXRlbVwiIEBjbGljaz1cInZpZGVvTGlrZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvblwiIDpzcmM9XCInL3N0YXRpYy9zdm9kL2J0bl9saWtlXycraW5mby5saWtlKycucG5nJ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOjI0cnB4O2ZvbnQtd2VpZ2h0OiA1MDA7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjRkZGRkZGO1wiPnt7aW5mby5saWtlU3VtfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3ZvZC1yaWdodC1pdGVtXCIgQGNsaWNrPVwiY29tbWVudCgwKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9zdGF0aWMvc3ZvZC9idG5fY29tbWVudC5wbmdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZToyNHJweDtmb250LXdlaWdodDogNTAwO3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogI0ZGRkZGRjtcIj57e2luZm8uY29tbWVudH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInN2b2QtcmlnaHQtaXRlbVwiIEBjbGljaz1cImp1bXBVcmwoJy9wYWdlcy9tZW1iZXIvcG9zdGVyJywgJ25ldycpXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uXCIgc3JjPVwiL3N0YXRpYy9zdm9kL2J0bl9zaGFyZS5wbmdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZToyNHJweDtmb250LXdlaWdodDogNTAwO3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogI0ZGRkZGRjtcIj7liIbkuqs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS1ib3R0b20tLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzdm9kLWJvdHRvbVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic3ZvZC1ib3R0b20taXRlbVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ3YXRjaC1mcmVlXCIgdi1pZj1cInNob3dGcmVlXCI+5YWN6LS56KeC55yL5qyh5pWw77yae3t1c2VyLmZyZWV9fSAvIHt7dXNlci5mcmVlVG90fX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjRkZGRkZGO2ZvbnQtc2l6ZTogMzJycHg7Zm9udC13ZWlnaHQ6IDYwMDtwYWRkaW5nOiAxMHJweDtcIj5Ae3tpbmZvLm5pY2tuYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tdGFnLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLXRhZ1wiIHYtZm9yPVwiKHQsIGkpIGluIGluZm8udGFnTGlzdFwiIDprZXk9XCJpXCI+e3t0Lm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7Zm9udC1zaXplOiAyOHJweDtwYWRkaW5nOiAxMHJweDtsaW5lczogMTt3aWR0aDogNjAwcnB4O3RleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1wiPnt7aXRlbS50aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cdFxyXG5cdFx0PHRlbXBsYXRlIHYtZWxzZT5cclxuXHRcdFx0PGltYWdlXHJcblx0XHRcdFx0OmxhenktbG9hZD1cInRydWVcIiBcclxuXHRcdFx0XHQ6ZmFkZS1zaG93PVwiZmFsc2VcIiBcclxuXHRcdFx0XHQ6c3JjPVwiaXRlbS5jb3ZlclwiIFxyXG5cdFx0XHRcdG1vZGU9XCJhc3BlY3RGaWxsXCIgXHJcblx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4OyBmaWx0ZXI6IGJsdXIoNXB4KTtcIlxyXG5cdFx0XHRcdDpzdHlsZT1cInsnaGVpZ2h0JzogKHdpbmRvd0hlaWdodCkrICdweCd9XCI+XHJcblx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdDwhLS0g5pS26LS55by556qXIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ1eS1wb3BcIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cIm1vdmVIYW5kbGVcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1eS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgXHJcblx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6MTUwcnB4O2hlaWdodDoxNTBycHg7Ym9yZGVyLXJhZGl1czoxNTBycHg7Ym9yZGVyOjJweCBzb2xpZCAjRjVGNUY1O1wiIFxyXG5cdFx0XHRcdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiXHJcblx0XHRcdFx0XHRcdDpzcmM9XCJnZXRIZWFkSW1nKGl0ZW0uY292ZXIsIGluZm8uaGVhZGltZ3VybClcIj5cclxuXHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjRkZGRkZGO2ZvbnQtc2l6ZTogMTVweDttYXJnaW46IDUwcnB4IDUwcnB4IDMwcnB4IDUwcnB4O1wiPnt7aXRlbS50aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6MTJweDtjb2xvcjojQ0NDQ0NDO1wiPuingueci+acrOW9seeJh+mcgOimgeaUr+S7mHt7aW5mby5nb2xkfX3ph5HluIE8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1eS1idG5cIj5cclxuXHRcdFx0XHRcdFx0PCEtLSA8dGV4dCBjbGFzcz1cImJ0bi1sZWZ0XCIgQGNsaWNrPVwiY2xvc2VCdXlcIj7lv43kvY/kuI3nnIs8L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0bi1yaWdodFwiIEBjbGljaz1cImJ1eVZpZGVvXCI+5pSv5LuY6YeR5biBPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHRcdDwhLS0g6K+E6K665YiX6KGoIC0tPlxyXG5cdFx0PHVuaS1wb3B1cCByZWY9XCJwb3B1cENvbW1lbnRcIiB0eXBlPVwiYm90dG9tXCIgQGNoYW5nZT1cImNvbW1lbnRDaGFuZ2VcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWNvbnRlbnRcIiA6c3R5bGU9XCInaGVpZ2h0OicrKHdpbmRvd0hlaWdodC8yK2g1VGFiYmFyKSsncHgnXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWhlYWRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29tbWVudC10aXRsZVwiPuivhOiuuiAoe3tpbmZvLmNvbW1lbnR9feadoSk8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxzY3JvbGwtdmlldyA6c2Nyb2xsLXk9XCJ0cnVlXCIgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiBAc2Nyb2xsdG9sb3dlcj1cIm1vcmVDb21tZW50XCIgY2xhc3M9XCJjb21tZW50LWxpc3RcIj5cclxuXHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiY29tbWVudExpc3QubGVuZ3RoICYmIGluZm8uY29tbWVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtbGlzdC1pdGVtXCIgdi1mb3I9XCIoYywgaSkgaW4gY29tbWVudExpc3RcIiA6a2V5PVwiaVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVzZXItY292ZXJcIiA6c3JjPVwiYy5jb3ZlclwiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXItbmlja25hbWVcIj57e2Mubmlja25hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1c2VyLW5pY2tuYW1lXCIgc3R5bGU9XCJjb2xvcjojRkY4RjAwO21hcmdpbi1sZWZ0OjEwcnB4O1wiIHYtaWY9XCJjLnVpZD09dXNlcklkXCI+KOaIkSk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXItZGF0ZVwiPnt7dXRpbHMudGltZVRvZGF0ZSgnWS1tLWQgSDppJywgYy5hZGRfdGltZSl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlci1jb250ZW50XCI+e3tjLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cIm1hcmdpbjo4MHB4IDA7YWxpZ24taXRlbXM6Y2VudGVyO1wiIHYtaWY9XCIhaW5mby5jb21tZW50XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2VtcHR5LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4O1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOjEzcHg7Y29sb3I6IzY2NjttYXJnaW4tdG9wOjEwcHg7XCI+5b2T5YmN6L+Y5rKh5pyJ6K+E6K66PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWJvdHRvbVwiIDpzdHlsZT1cInsgYm90dG9tOiBrZXloZWlnaHQrJ3B4JyB9XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJjb21tZW50LWlucHV0XCIgXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi5oiR5p2l6K+05Yeg5Y+lIH5cIiBcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImNvbW1lbnRDb250ZW50XCJcclxuXHRcdFx0XHRcdFx0OmFkanVzdC1wb3NpdGlvbj1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OmN1cnNvci1zcGFjaW5nPVwiNFwiLz5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29tbWVudC1zZW5kXCIgQGNsaWNrPVwic2VuZENvbW1lbnRDb250ZW50XCI+5Y+R6YCBPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC91bmktcG9wdXA+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdHZhciBzeXN0ZW0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHR2YXIgYm90dG9tID0gMDtcclxuXHQvLyAjaWZkZWYgSDVcclxuXHRib3R0b20gPSA1MDtcclxuXHQvLyAjZW5kaWZcclxuXHRpbXBvcnQgdXRpbHMgZnJvbSAnQC9jb21wb25lbnRzL3Nob3l1LWRhdGUvdXRpbHMuZmlsdGVyLmpzJztcclxuXHRpbXBvcnQgYXBpIGZyb20gJ0AvY29tbW9uL2FwaS5qcyc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR1dGlsczogdXRpbHMsXHJcblx0XHRcdFx0aDVUYWJiYXI6IGJvdHRvbSArIDgwLFxyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogc3lzdGVtLnN0YXR1c0JhckhlaWdodCxcclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHN5c3RlbS53aW5kb3dIZWlnaHQgKyBib3R0b20sXHJcblx0XHRcdFx0c2NyZWVuSGVpZ2h0OiBzeXN0ZW0uc2NyZWVuSGVpZ2h0LFxyXG5cdFx0XHRcdGN1ckluZGV4OiAwLFxyXG5cdFx0XHRcdHBsYXlTdGF0dXM6IHRydWUsXHJcblx0XHRcdFx0dXNlcklkOiAwLFxyXG5cdFx0XHRcdGl0ZW06IHtcclxuXHRcdFx0XHRcdGlkOiAwLFxyXG5cdFx0XHRcdFx0dXJsOiAnJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGluZm86IHtcclxuXHRcdFx0XHRcdGlzUGxheTogdHJ1ZSxcclxuXHRcdFx0XHRcdG5pY2tuYW1lOiAnbG9hZGluZy4uLicsXHJcblx0XHRcdFx0XHRsaWtlOiAwLFxyXG5cdFx0XHRcdFx0bGlrZVN1bTogMCxcclxuXHRcdFx0XHRcdGNvbW1lbnQ6IDAsXHJcblx0XHRcdFx0XHRoZWFkaW1ndXJsOiAnJyxcclxuXHRcdFx0XHRcdGlzQnV5OiBmYWxzZSxcclxuXHRcdFx0XHRcdGdvbGQ6IDAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzaG93TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRsb2FkaW5nSW1nOiAnL3N0YXRpYy9sb2FkLmdpZicsXHJcblx0XHRcdFx0c2hvd0Vycm9yOiBmYWxzZSxcclxuXHRcdFx0XHR2aWRlb09iajoge30sXHJcblx0XHRcdFx0Y29tbWVudFBhZ2U6IDEsXHJcblx0XHRcdFx0Y29tbWVudExpc3Q6IFtdLFxyXG5cdFx0XHRcdHVzZXI6IHtcclxuXHRcdFx0XHRcdGlzVmlwOiBmYWxzZSxcclxuXHRcdFx0XHRcdGZyZWVUb3Q6IDAsXHJcblx0XHRcdFx0XHRmcmVlOiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjb21tZW50Q29udGVudDogJycsXHJcblx0XHRcdFx0bGlrZVRpbWU6IDAsXHJcblx0XHRcdFx0c2hvd0ZyZWU6IGZhbHNlLFxyXG5cdFx0XHRcdGVtcHR5VXJsOiB0cnVlLFxyXG5cdFx0XHRcdG9uZTogZmFsc2UsXHJcblx0XHRcdFx0b2JqZWN0Rml0OiAnY292ZXInLFxyXG5cdFx0XHRcdGtleWhlaWdodDogMCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChlKSB7XHJcblx0XHRcdHRoaXMuaXRlbSA9IEpTT04ucGFyc2UoZS5pbmZvKTtcclxuXHRcdFx0bGV0IGxvZ2luID0gYXBpLmdldExvZ2lucygpO1xyXG5cdFx0XHRpZiAobG9naW4pIHRoaXMudXNlcklkID0gbG9naW4udXNlcklkO1xyXG5cdFx0XHR0aGlzLmdldEluaXRQbGF5ZXIoKTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLnZpZGVvT2JqID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCgnbXlWaWRlbycpO1xyXG5cdFx0XHR1bmkub25LZXlib2FyZEhlaWdodENoYW5nZShyZXMgPT4ge1xyXG5cdFx0XHRcdHRoaXMua2V5aGVpZ2h0ID0gcmVzLmhlaWdodDtcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdGlmICh0aGlzLm9uZSkge1xyXG5cdFx0XHRcdGxldCBsb2dpbiA9IGFwaS5nZXRMb2dpbnMoKTtcclxuXHRcdFx0XHRpZiAobG9naW4pIHRoaXMudXNlcklkID0gbG9naW4udXNlcklkO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25IaWRlKCkge1xyXG5cdFx0XHR0aGlzLm9uZSA9IHRydWU7XHJcblx0XHRcdHRoaXMucGxheVZpZGVvU3RhdHVzKGZhbHNlKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGxvYWRlZG1ldGFkYXRhKGUpIHtcclxuXHRcdFx0XHRlID0gZS5kZXRhaWwuaGVpZ2h0IC0gZS5kZXRhaWwud2lkdGg7XHJcblx0XHRcdFx0aWYgKGUgPiA1MCkge1xyXG5cdFx0XHRcdFx0dGhpcy5vYmplY3RGaXQgPSAnY292ZXInO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLm9iamVjdEZpdCA9ICdjb250YWluJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEluaXRQbGF5ZXIoKSB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLml0ZW0pO1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogYXBpLmFwaURhdGEucGxheVN2b2RWaWRlbyxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHR1aWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdFx0XHR2aWQ6IHRoaXMuaXRlbS5pZCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcclxuXHRcdFx0XHRcdFx0dmFyIGQgPSBlLmRhdGE7XHJcblx0XHRcdFx0XHRcdGlmIChkLkNvZGUgIT0gMjAwKSByZXR1cm4gdGhpcy5iYWNrKGQuTXNnKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbmZvID0gZC5EYXRhLml0ZW07XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudXNlcklkLCB0aGlzLml0ZW0uaWQpO1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmluZm8pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmluZm8uaXNQbGF5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy51c2VyID0gZC5EYXRhLnVzZXI7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ2V0UGxheWVyU3RhdHVzKCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5lbXB0eVVybCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XHJcblx0XHRcdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRQbGF5ZXJTdGF0dXMoKSB7XHJcblx0XHRcdFx0Ly8g6Z2eVklQ77yM5pS26LS56KeG6aKR77yM5pyq6LSt5LmwXHJcblx0XHRcdFx0aWYgKCF0aGlzLnVzZXIuaXNWaXAgJiYgcGFyc2VJbnQodGhpcy5pbmZvLmdvbGQpPjAgJiYgIXRoaXMuaW5mby5pc0J1eSkge1xyXG5cdFx0XHRcdFx0aWYgKHBhcnNlSW50KHRoaXMudXNlci5mcmVlKSA+IDApIHtcclxuXHRcdFx0XHRcdFx0Ly8g5omj6Zmk5YWN6LS55qyh5pWwXHJcblx0XHRcdFx0XHRcdHRoaXMudXNlci5mcmVlLS07XHJcblx0XHRcdFx0XHRcdHRoaXMuZnJlZVdhdGNoKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmluZm8uaXNQbGF5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmHkeW4gei0reS5sOinhumikVxyXG5cdFx0XHRidXlWaWRlbygpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudXNlcklkKSByZXR1cm4gYXBpLnNob3dUb2FzdCgn6K+35YWI55m75b2VJyk7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHsgdGl0bGU6J+ato+WcqOaUr+S7mC4uLicsbWFzazp0cnVlIH0pO1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogYXBpLmFwaURhdGEuZ29sZEJ1eVZpZGVvLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHVpZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0XHRcdHZpZDogdGhpcy5pbmZvLmlkXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHRcdCdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChlKSA9PiB7XHJcblx0XHRcdFx0XHRcdHZhciBkID0gZS5kYXRhO1xyXG5cdFx0XHRcdFx0XHRhcGkuc2hvd1RvYXN0KGQuTXNnLCAxNTAwKVxyXG5cdFx0XHRcdFx0XHRpZiAoZC5Db2RlID09IDIwMSkgcmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmluZm8uaXNCdXkgPSB0aGlzLmluZm8uaXNQbGF5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5omj6Zmk5YWN6LS56KeC55yL5qyh5pWwXHJcblx0XHRcdGZyZWVXYXRjaCh2aWQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy51c2VySWQgPT0gMCkgcmV0dXJuIHRoaXMudXNlci5mcmVlID0gMDtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IGFwaS5hcGlEYXRhLnVwZGF0ZUZyZWUsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dWlkOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0XHRcdFx0dmlkOiB0aGlzLmluZm8uaWRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbmZvLmlzQnV5ID0gdGhpcy5pbmZvLmlzUGxheSA9IHRoaXMuc2hvd0ZyZWUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGF5VmlkZW9TdGF0dXMoc3RhdHUpIHtcclxuXHRcdFx0XHR0aGlzLnBsYXlTdGF0dXMgPSBzdGF0dTtcclxuXHRcdFx0XHRpZiAoIXRoaXMucGxheVN0YXR1cykge1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb09iai5wYXVzZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvT2JqLnBsYXkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEhlYWRJbWcoY292ZXIsIGhlYWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaGVhZC5sZW5ndGggPiAxMCA/IGhlYWQgOiBjb3ZlcjtcclxuXHRcdFx0fSxcclxuXHRcdFx0dmlkZW9MaWtlKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy51c2VySWQpIHJldHVybiBhcGkuc2hvd1RvYXN0KCfor7flhYjnmbvlvZUnKTtcclxuXHRcdFx0XHQvLyDpmZDliLbov57nu63ngrnotZ7ml7bpl7RcclxuXHRcdFx0XHRpZiAodGhpcy5saWtlVGltZSA8IDEpIHtcclxuXHRcdFx0XHRcdGxldCBsaWtlID0gdGhpcy5pbmZvLmxpa2U9PTE/MDoxO1xyXG5cdFx0XHRcdFx0dGhpcy5pbmZvLmxpa2UgPSBsaWtlO1xyXG5cdFx0XHRcdFx0aWYgKGxpa2UgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmluZm8ubGlrZVN1bSsrO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbmZvLmxpa2VTdW0tLTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMubGlrZVRpbWUgPSAzO1xyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IGFwaS5hcGlEYXRhLmxpa2VTdm9kVmlkZW8sXHJcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0dWlkOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0XHRcdFx0XHR2aWQ6IHRoaXMuaW5mby5pZFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0XHQnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQvLyAvY29uc29sZS5sb2coJ+eCuei1nuaIkOWKnycpO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudmlkZW9MaWtlVGltZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YXBpLnNob3dUb2FzdCgn5pON5L2c5aSq5b+r77yMJyt0aGlzLmxpa2VUaW1lKyfnp5LlkI7lho3or5UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHZpZGVvTGlrZVRpbWUoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubGlrZVRpbWUgPiAwKSB7XHJcblx0XHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdHRoaXMubGlrZVRpbWUgLS07XHJcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9MaWtlVGltZSgpO1xyXG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xyXG5cdFx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21tZW50KGlzT3Blbikge1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOifliqDovb3kuK0uLi4nLG1hc2s6dHJ1ZSB9KTtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IGFwaS5hcGlEYXRhLnN2b2RWaWRlb0NvbW0sXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dWlkOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0XHRcdFx0dmlkOiB0aGlzLml0ZW0uaWQsXHJcblx0XHRcdFx0XHRcdHBhZ2U6IHRoaXMuY29tbWVudFBhZ2VcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcclxuXHRcdFx0XHRcdFx0dmFyIGQgPSBlLmRhdGE7XHJcblx0XHRcdFx0XHRcdGlmIChkLkNvZGUgIT0gMjAwKSByZXR1cm4gYXBpLnNob3dUb2FzdChkLk1zZywgMTUwMCk7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmNvbW1lbnRQYWdlID4gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY29tbWVudExpc3QgPSB0aGlzLmNvbW1lbnRMaXN0LmNvbmNhdChkLkRhdGEubGlzdCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb21tZW50TGlzdCA9IGQuRGF0YS5saXN0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICghaXNPcGVuKSB0aGlzLiRyZWZzWydwb3B1cENvbW1lbnQnXS5vcGVuKCk7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb3JlQ29tbWVudCgpIHtcclxuXHRcdFx0XHR0aGlzLmNvbW1lbnRQYWdlKys7XHJcblx0XHRcdFx0dGhpcy5jb21tZW50KDEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21tZW50Q2hhbmdlKGUpIHtcclxuXHRcdFx0XHRpZiAoIWUuc2hvdykgdGhpcy5pbml0Q29tbWVudERhdGEoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdENvbW1lbnREYXRhKCkge1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudFBhZ2UgPSAxO1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudENvbnRlbnQgPSAnJztcclxuXHRcdFx0XHR0aGlzLmNvbW1lbnRMaXN0ID0gW107XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmRDb21tZW50Q29udGVudCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuY29tbWVudENvbnRlbnQubGVuZ3RoKSByZXR1cm47XHJcblx0XHRcdFx0aWYgKCF0aGlzLnVzZXJJZCkgcmV0dXJuIGFwaS5zaG93VG9hc3QoJ+ivt+WFiOeZu+W9lScpO1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7IHRpdGxlOifmj5DkuqTkuK0uLi4nLG1hc2s6dHJ1ZSB9KTtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IGFwaS5hcGlEYXRhLnNlbmRWaWRlb0NvbW0sXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dWlkOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0XHRcdFx0dmlkOiB0aGlzLml0ZW0uaWQsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IHRoaXMuY29tbWVudENvbnRlbnRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcclxuXHRcdFx0XHRcdFx0dmFyIGQgPSBlLmRhdGE7XHJcblx0XHRcdFx0XHRcdGFwaS5zaG93VG9hc3QoZC5Nc2cpO1xyXG5cdFx0XHRcdFx0XHRpZiAoZC5Db2RlICE9IDIwMCkgcmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbW1lbnRDb250ZW50ID0gJyc7XHJcblx0XHRcdFx0XHRcdGlmIChkLkRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbW1lbnRMaXN0LnVuc2hpZnQoZC5EYXRhKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmluZm8uY29tbWVudCsrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9ucGxheShlKSB7XHJcblx0XHRcdFx0Ly8g5pKt5pS+XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZygncGxheScpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbmVycm9yKGVycikge1xyXG5cdFx0XHRcdGlmICghdGhpcy5lbXB0eVVybCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdHRoaXMuYmFjaygn5pKt5pS+5aSx6LSl77yM6K+35qOA5p+l572R57uc5piv5ZCm5byC5bi4Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1ldXBkYXRlKGUpIHtcclxuXHRcdFx0XHQvLyDmkq3mlL7ml7bplb9cclxuXHRcdFx0XHRsZXQgZCA9IGUuZGV0YWlsO1xyXG5cdFx0XHRcdGlmIChkLmN1cnJlbnRUaW1lID4gMC4xKSB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGp1bXBVcmwodSwgdCkge1xyXG5cdFx0XHRcdGFwaS5qdW1wVXJsKHUsIHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYWNrKG1zZykge1xyXG5cdFx0XHRcdGFwaS5zaG93VG9hc3QobXNnLCAyMDAwKTtcclxuXHRcdFx0XHR2YXIgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcilcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bW92ZUhhbmRsZSgpIHt9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
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
/* 32 */
/*!*********************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/components/shoyu-date/utils.filter.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  friendlyDate: function friendlyDate(nS) {\n    // 判断时间戳是否带毫秒\n    var timestamp = nS.toString().length == 10 ? parseInt(nS + '000') : nS;\n    var formats = {\n      'year': '%n% 年前',\n      'month': '%n% 月前',\n      'day': '%n% 天前',\n      'hour': '%n% 小时前',\n      'minute': '%n% 分钟前',\n      'second': '%n% 秒前'\n    };\n    var now = Date.now();\n    var seconds = Math.floor((now - parseInt(timestamp)) / 1000);\n    var minutes = Math.floor(seconds / 60);\n    var hours = Math.floor(minutes / 60);\n    var days = Math.floor(hours / 24);\n    var months = Math.floor(days / 30);\n    var years = Math.floor(months / 12);\n    var diffType = '';\n    var diffValue = 0;\n    if (years > 0) {\n      diffType = 'year';\n      diffValue = years;\n    } else {\n      if (months > 0) {\n        diffType = 'month';\n        diffValue = months;\n      } else {\n        if (days > 0) {\n          diffType = 'day';\n          diffValue = days;\n        } else {\n          if (hours > 0) {\n            diffType = 'hour';\n            diffValue = hours;\n          } else {\n            if (minutes > 0) {\n              diffType = 'minute';\n              diffValue = minutes;\n            } else {\n              diffType = 'second';\n              diffValue = seconds === 0 ? seconds = 1 : seconds;\n            }\n          }\n        }\n      }\n    }\n    return formats[diffType].replace('%n%', diffValue);\n  },\n  timeTodate: function timeTodate(format, nS) {\n    // 判断时间戳是否带毫秒\n    var timestamp = nS.toString().length == 10 ? parseInt(nS + '000') : nS;\n    var myDate = new Date();\n    myDate.getYear(); //获取当前年份(2位)  \n    myDate.getFullYear(); //获取完整的年份(4位,1970-????)  \n    myDate.getMonth(); //获取当前月份(0-11,0代表1月)         // 所以获取当前月份是myDate.getMonth()+1;   \n    myDate.getDate(); //获取当前日(1-31)  \n    myDate.getDay(); //获取当前星期X(0-6,0代表星期天)  \n    myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)  \n    myDate.getHours(); //获取当前小时数(0-23)  \n    myDate.getMinutes(); //获取当前分钟数(0-59)  \n    myDate.getSeconds(); //获取当前秒数(0-59)  \n    myDate.getMilliseconds(); //获取当前毫秒数(0-999)  \n    myDate.toLocaleDateString(); //获取当前日期  \n    var mytime = myDate.toLocaleTimeString(); //获取当前时间  \n    myDate.toLocaleString(); //获取日期与时间  \n    // 2019-10-01 23:08:35\n    var tmpDate = new Date(timestamp);\n    var seconds = tmpDate.getSeconds();\n    var minutes = ('0' + tmpDate.getMinutes()).substr(-2);\n    var hours = tmpDate.getHours() < 10 ? '0' + tmpDate.getHours() : tmpDate.getHours();\n    var days = ('0' + tmpDate.getDate()).substr(-2);\n    var months = ('0' + (tmpDate.getMonth() + 1)).substr(-2);\n    var years = tmpDate.getFullYear();\n    var value = '自定义替换值';\n    // 输出格式为 .replace(被替换字符, 计算后值)\n    return format.replace('Y', years).replace('m', months).replace('d', days).replace('H', hours).replace('i', minutes).replace('s', seconds).replace('index', value);\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9zaG95dS1kYXRlL3V0aWxzLmZpbHRlci5qcyJdLCJuYW1lcyI6WyJmcmllbmRseURhdGUiLCJuUyIsInRpbWVzdGFtcCIsInRvU3RyaW5nIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJmb3JtYXRzIiwibm93IiwiRGF0ZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwibW9udGhzIiwieWVhcnMiLCJkaWZmVHlwZSIsImRpZmZWYWx1ZSIsInJlcGxhY2UiLCJ0aW1lVG9kYXRlIiwiZm9ybWF0IiwibXlEYXRlIiwiZ2V0WWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RGF5IiwiZ2V0VGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJteXRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJ0b0xvY2FsZVN0cmluZyIsInRtcERhdGUiLCJzdWJzdHIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQWU7RUFDZEEsWUFBWSxFQUFFLHNCQUFDQyxFQUFFLEVBQUs7SUFDckI7SUFDQSxJQUFJQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ0UsUUFBUSxFQUFFLENBQUNDLE1BQU0sSUFBRSxFQUFFLEdBQUNDLFFBQVEsQ0FBQ0osRUFBRSxHQUFDLEtBQUssQ0FBQyxHQUFDQSxFQUFFO0lBQzlELElBQUlLLE9BQU8sR0FBRztNQUNiLE1BQU0sRUFBRSxRQUFRO01BQ2hCLE9BQU8sRUFBRSxRQUFRO01BQ2pCLEtBQUssRUFBRSxRQUFRO01BQ2YsTUFBTSxFQUFFLFNBQVM7TUFDakIsUUFBUSxFQUFFLFNBQVM7TUFDbkIsUUFBUSxFQUFFO0lBQ1gsQ0FBQztJQUNELElBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDRCxHQUFHLEVBQUU7SUFDcEIsSUFBSUUsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDSixHQUFHLEdBQUdGLFFBQVEsQ0FBQ0gsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzVELElBQUlVLE9BQU8sR0FBR0YsSUFBSSxDQUFDQyxLQUFLLENBQUNGLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEMsSUFBSUksS0FBSyxHQUFHSCxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxJQUFJRSxJQUFJLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLElBQUlFLE1BQU0sR0FBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUNHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbEMsSUFBSUUsS0FBSyxHQUFHTixJQUFJLENBQUNDLEtBQUssQ0FBQ0ksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQyxJQUFJRSxRQUFRLEdBQUcsRUFBRTtJQUNqQixJQUFJQyxTQUFTLEdBQUcsQ0FBQztJQUNqQixJQUFJRixLQUFLLEdBQUcsQ0FBQyxFQUFFO01BQ2RDLFFBQVEsR0FBRyxNQUFNO01BQ2pCQyxTQUFTLEdBQUdGLEtBQUs7SUFDbEIsQ0FBQyxNQUFNO01BQ04sSUFBSUQsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNmRSxRQUFRLEdBQUcsT0FBTztRQUNsQkMsU0FBUyxHQUFHSCxNQUFNO01BQ25CLENBQUMsTUFBTTtRQUNOLElBQUlELElBQUksR0FBRyxDQUFDLEVBQUU7VUFDYkcsUUFBUSxHQUFHLEtBQUs7VUFDaEJDLFNBQVMsR0FBR0osSUFBSTtRQUNqQixDQUFDLE1BQU07VUFDTixJQUFJRCxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2RJLFFBQVEsR0FBRyxNQUFNO1lBQ2pCQyxTQUFTLEdBQUdMLEtBQUs7VUFDbEIsQ0FBQyxNQUFNO1lBQ04sSUFBSUQsT0FBTyxHQUFHLENBQUMsRUFBRTtjQUNoQkssUUFBUSxHQUFHLFFBQVE7Y0FDbkJDLFNBQVMsR0FBR04sT0FBTztZQUNwQixDQUFDLE1BQU07Y0FDTkssUUFBUSxHQUFHLFFBQVE7Y0FDbkJDLFNBQVMsR0FBR1QsT0FBTyxLQUFLLENBQUMsR0FBSUEsT0FBTyxHQUFHLENBQUMsR0FBSUEsT0FBTztZQUNwRDtVQUNEO1FBQ0Q7TUFDRDtJQUNEO0lBQ0EsT0FBT0gsT0FBTyxDQUFDVyxRQUFRLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLEtBQUssRUFBRUQsU0FBUyxDQUFDO0VBQ25ELENBQUM7RUFDREUsVUFBVSxFQUFFLG9CQUFDQyxNQUFNLEVBQUVwQixFQUFFLEVBQUs7SUFDM0I7SUFDQSxJQUFJQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ0UsUUFBUSxFQUFFLENBQUNDLE1BQU0sSUFBRSxFQUFFLEdBQUNDLFFBQVEsQ0FBQ0osRUFBRSxHQUFDLEtBQUssQ0FBQyxHQUFDQSxFQUFFO0lBQzlELElBQUlxQixNQUFNLEdBQUcsSUFBSWQsSUFBSSxFQUFFO0lBQ3ZCYyxNQUFNLENBQUNDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEJELE1BQU0sQ0FBQ0UsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0QkYsTUFBTSxDQUFDRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ25CSCxNQUFNLENBQUNJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEJKLE1BQU0sQ0FBQ0ssTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNqQkwsTUFBTSxDQUFDTSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCTixNQUFNLENBQUNPLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbkJQLE1BQU0sQ0FBQ1EsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNyQlIsTUFBTSxDQUFDUyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCVCxNQUFNLENBQUNVLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDMUJWLE1BQU0sQ0FBQ1csa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLElBQUlDLE1BQU0sR0FBQ1osTUFBTSxDQUFDYSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDeENiLE1BQU0sQ0FBQ2MsY0FBYyxFQUFHLENBQUMsQ0FBQztJQUMxQjtJQUNBLElBQUlDLE9BQU8sR0FBRyxJQUFJN0IsSUFBSSxDQUFDTixTQUFTLENBQUM7SUFDakMsSUFBSU8sT0FBTyxHQUFHNEIsT0FBTyxDQUFDTixVQUFVLEVBQUU7SUFDbEMsSUFBSW5CLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBR3lCLE9BQU8sQ0FBQ1AsVUFBVSxFQUFFLEVBQUVRLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxJQUFJekIsS0FBSyxHQUFJd0IsT0FBTyxDQUFDUixRQUFRLEVBQUUsR0FBRSxFQUFFLEdBQUMsR0FBRyxHQUFDUSxPQUFPLENBQUNSLFFBQVEsRUFBRSxHQUFDUSxPQUFPLENBQUNSLFFBQVEsRUFBRTtJQUM3RSxJQUFJZixJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUd1QixPQUFPLENBQUNYLE9BQU8sRUFBRSxFQUFFWSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSXZCLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSXNCLE9BQU8sQ0FBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUVhLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxJQUFJdEIsS0FBSyxHQUFHcUIsT0FBTyxDQUFDYixXQUFXLEVBQUU7SUFFakMsSUFBSWUsS0FBSyxHQUFHLFFBQVE7SUFDcEI7SUFDQSxPQUFPbEIsTUFBTSxDQUFDRixPQUFPLENBQUMsR0FBRyxFQUFFSCxLQUFLLENBQUMsQ0FBQ0csT0FBTyxDQUFDLEdBQUcsRUFBRUosTUFBTSxDQUFDLENBQUNJLE9BQU8sQ0FBQyxHQUFHLEVBQUVMLElBQUksQ0FBQyxDQUFDSyxPQUFPLENBQUMsR0FBRyxFQUFFTixLQUFLLENBQUMsQ0FBQ00sT0FBTyxDQUFDLEdBQUcsRUFBRVAsT0FBTyxDQUFDLENBQUNPLE9BQU8sQ0FBQyxHQUFHLEVBQUVWLE9BQU8sQ0FBQyxDQUFDVSxPQUFPLENBQUMsT0FBTyxFQUFFb0IsS0FBSyxDQUFDO0VBQ2xLO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG5cdGZyaWVuZGx5RGF0ZTogKG5TKSA9PiB7XHJcblx0XHQvLyDliKTmlq3ml7bpl7TmiLPmmK/lkKbluKbmr6vnp5JcclxuXHRcdHZhciB0aW1lc3RhbXAgPSBuUy50b1N0cmluZygpLmxlbmd0aD09MTA/cGFyc2VJbnQoblMrJzAwMCcpOm5TO1xyXG5cdFx0dmFyIGZvcm1hdHMgPSB7XHJcblx0XHRcdCd5ZWFyJzogJyVuJSDlubTliY0nLFxyXG5cdFx0XHQnbW9udGgnOiAnJW4lIOaciOWJjScsXHJcblx0XHRcdCdkYXknOiAnJW4lIOWkqeWJjScsXHJcblx0XHRcdCdob3VyJzogJyVuJSDlsI/ml7bliY0nLFxyXG5cdFx0XHQnbWludXRlJzogJyVuJSDliIbpkp/liY0nLFxyXG5cdFx0XHQnc2Vjb25kJzogJyVuJSDnp5LliY0nLFxyXG5cdFx0fTtcclxuXHRcdHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0dmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChub3cgLSBwYXJzZUludCh0aW1lc3RhbXApKSAvIDEwMDApO1xyXG5cdFx0dmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcblx0XHR2YXIgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcblx0XHR2YXIgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XHJcblx0XHR2YXIgbW9udGhzID0gTWF0aC5mbG9vcihkYXlzIC8gMzApO1xyXG5cdFx0dmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7XHJcblx0XHR2YXIgZGlmZlR5cGUgPSAnJztcclxuXHRcdHZhciBkaWZmVmFsdWUgPSAwO1xyXG5cdFx0aWYgKHllYXJzID4gMCkge1xyXG5cdFx0XHRkaWZmVHlwZSA9ICd5ZWFyJztcclxuXHRcdFx0ZGlmZlZhbHVlID0geWVhcnM7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAobW9udGhzID4gMCkge1xyXG5cdFx0XHRcdGRpZmZUeXBlID0gJ21vbnRoJztcclxuXHRcdFx0XHRkaWZmVmFsdWUgPSBtb250aHM7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGRheXMgPiAwKSB7XHJcblx0XHRcdFx0XHRkaWZmVHlwZSA9ICdkYXknO1xyXG5cdFx0XHRcdFx0ZGlmZlZhbHVlID0gZGF5cztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGhvdXJzID4gMCkge1xyXG5cdFx0XHRcdFx0XHRkaWZmVHlwZSA9ICdob3VyJztcclxuXHRcdFx0XHRcdFx0ZGlmZlZhbHVlID0gaG91cnM7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAobWludXRlcyA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRkaWZmVHlwZSA9ICdtaW51dGUnO1xyXG5cdFx0XHRcdFx0XHRcdGRpZmZWYWx1ZSA9IG1pbnV0ZXM7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0ZGlmZlR5cGUgPSAnc2Vjb25kJztcclxuXHRcdFx0XHRcdFx0XHRkaWZmVmFsdWUgPSBzZWNvbmRzID09PSAwID8gKHNlY29uZHMgPSAxKSA6IHNlY29uZHM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmb3JtYXRzW2RpZmZUeXBlXS5yZXBsYWNlKCclbiUnLCBkaWZmVmFsdWUpO1xyXG5cdH0sXHJcblx0dGltZVRvZGF0ZTogKGZvcm1hdCwgblMpID0+IHtcclxuXHRcdC8vIOWIpOaWreaXtumXtOaIs+aYr+WQpuW4puavq+enklxyXG5cdFx0dmFyIHRpbWVzdGFtcCA9IG5TLnRvU3RyaW5nKCkubGVuZ3RoPT0xMD9wYXJzZUludChuUysnMDAwJyk6blM7XHJcblx0XHR2YXIgbXlEYXRlID0gbmV3IERhdGUoKTsgIFxyXG5cdFx0bXlEYXRlLmdldFllYXIoKTsgLy/ojrflj5blvZPliY3lubTku70oMuS9jSkgIFxyXG5cdFx0bXlEYXRlLmdldEZ1bGxZZWFyKCk7IC8v6I635Y+W5a6M5pW055qE5bm05Lu9KDTkvY0sMTk3MC0/Pz8/KSAgXHJcblx0XHRteURhdGUuZ2V0TW9udGgoKTsgLy/ojrflj5blvZPliY3mnIjku70oMC0xMSww5Luj6KGoMeaciCkgICAgICAgICAvLyDmiYDku6Xojrflj5blvZPliY3mnIjku73mmK9teURhdGUuZ2V0TW9udGgoKSsxOyAgIFxyXG5cdFx0bXlEYXRlLmdldERhdGUoKTsgLy/ojrflj5blvZPliY3ml6UoMS0zMSkgIFxyXG5cdFx0bXlEYXRlLmdldERheSgpOyAvL+iOt+WPluW9k+WJjeaYn+acn1goMC02LDDku6PooajmmJ/mnJ/lpKkpICBcclxuXHRcdG15RGF0ZS5nZXRUaW1lKCk7IC8v6I635Y+W5b2T5YmN5pe26Ze0KOS7jjE5NzAuMS4x5byA5aeL55qE5q+r56eS5pWwKSAgXHJcblx0XHRteURhdGUuZ2V0SG91cnMoKTsgLy/ojrflj5blvZPliY3lsI/ml7bmlbAoMC0yMykgIFxyXG5cdFx0bXlEYXRlLmdldE1pbnV0ZXMoKTsgLy/ojrflj5blvZPliY3liIbpkp/mlbAoMC01OSkgIFxyXG5cdFx0bXlEYXRlLmdldFNlY29uZHMoKTsgLy/ojrflj5blvZPliY3np5LmlbAoMC01OSkgIFxyXG5cdFx0bXlEYXRlLmdldE1pbGxpc2Vjb25kcygpOyAvL+iOt+WPluW9k+WJjeavq+enkuaVsCgwLTk5OSkgIFxyXG5cdFx0bXlEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpOyAvL+iOt+WPluW9k+WJjeaXpeacnyAgXHJcblx0XHR2YXIgbXl0aW1lPW15RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTsgLy/ojrflj5blvZPliY3ml7bpl7QgIFxyXG5cdFx0bXlEYXRlLnRvTG9jYWxlU3RyaW5nKCApOyAvL+iOt+WPluaXpeacn+S4juaXtumXtCAgXHJcblx0XHQvLyAyMDE5LTEwLTAxIDIzOjA4OjM1XHJcblx0XHR2YXIgdG1wRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcblx0XHR2YXIgc2Vjb25kcyA9IHRtcERhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0dmFyIG1pbnV0ZXMgPSAoJzAnICsgdG1wRGF0ZS5nZXRNaW51dGVzKCkpLnN1YnN0cigtMik7XHJcblx0XHR2YXIgaG91cnMgPSAodG1wRGF0ZS5nZXRIb3VycygpKTwxMD8nMCcrdG1wRGF0ZS5nZXRIb3VycygpOnRtcERhdGUuZ2V0SG91cnMoKTtcclxuXHRcdHZhciBkYXlzID0gKCcwJyArIHRtcERhdGUuZ2V0RGF0ZSgpKS5zdWJzdHIoLTIpO1xyXG5cdFx0dmFyIG1vbnRocyA9ICgnMCcgKyAodG1wRGF0ZS5nZXRNb250aCgpICsgMSkpLnN1YnN0cigtMik7XHJcblx0XHR2YXIgeWVhcnMgPSB0bXBEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcclxuXHRcdHZhciB2YWx1ZSA9ICfoh6rlrprkuYnmm7/mjaLlgLwnO1xyXG5cdFx0Ly8g6L6T5Ye65qC85byP5Li6IC5yZXBsYWNlKOiiq+abv+aNouWtl+espiwg6K6h566X5ZCO5YC8KVxyXG5cdFx0cmV0dXJuIGZvcm1hdC5yZXBsYWNlKCdZJywgeWVhcnMpLnJlcGxhY2UoJ20nLCBtb250aHMpLnJlcGxhY2UoJ2QnLCBkYXlzKS5yZXBsYWNlKCdIJywgaG91cnMpLnJlcGxhY2UoJ2knLCBtaW51dGVzKS5yZXBsYWNlKCdzJywgc2Vjb25kcykucmVwbGFjZSgnaW5kZXgnLCB2YWx1ZSk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*********************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/common/api.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 20));\n// 接口域名\nvar apiUrl = \"http://v5_black_api.cqpig.cn\";\n// 接口文件\nvar interfaceFile = \"appapi\";\n// 与接口通讯的KEY\nvar appkey = 'abc123456';\n// 选择线路\nvar getWebDomain = function getWebDomain() {\n  var nowDomain = uni.getStorageSync('nowDomain_' + appkey);\n  if (nowDomain) {\n    return nowDomain;\n  } else {\n    return apiUrl;\n  }\n};\nvar nowUrl = getWebDomain();\n// 完整接口(域名+接口文件+接口方法)\nvar apiData = {\n  // 初始化接口\n  \"appInits\": nowUrl + \"/\" + interfaceFile + \"/appInit/appkey/\" + appkey,\n  // 获取APP版本信息\n  \"getVersion\": nowUrl + \"/\" + interfaceFile + \"/getVersion/appkey/\" + appkey,\n  // 首页数据\n  \"homeData\": nowUrl + \"/\" + interfaceFile + \"/homeMain/appkey/\" + appkey,\n  // 视频列表\n  \"videoData\": nowUrl + \"/\" + interfaceFile + \"/videoList/appkey/\" + appkey,\n  // 专题详情\n  \"getAlbum\": nowUrl + \"/\" + interfaceFile + \"/albumInfo/appkey/\" + appkey,\n  // 视频详情\n  \"videoInfo\": nowUrl + \"/\" + interfaceFile + \"/detail/appkey/\" + appkey,\n  // 添加收藏\n  \"addCollection\": nowUrl + \"/\" + interfaceFile + \"/addCollection/appkey/\" + appkey,\n  // 视频点赞\n  \"videoLike\": nowUrl + \"/\" + interfaceFile + \"/like/appkey/\" + appkey,\n  // 添加评论\n  \"addComment\": nowUrl + \"/\" + interfaceFile + \"/comment/appkey/\" + appkey,\n  // 评论列表\n  \"commentList\": nowUrl + \"/\" + interfaceFile + \"/commentList/appkey/\" + appkey,\n  // 统计用户在线接口\n  \"heartBeat\": nowUrl + \"/\" + interfaceFile + \"/heartbeat/appkey/\" + appkey,\n  // 登录接口\n  \"userLogin\": nowUrl + \"/\" + interfaceFile + \"/login/appkey/\" + appkey,\n  // 注册配置信息\n  \"getConfig\": nowUrl + \"/\" + interfaceFile + \"/getConfig/appkey/\" + appkey,\n  // 注册账号\n  \"userReg\": nowUrl + \"/\" + interfaceFile + \"/register/appkey/\" + appkey,\n  // 获取手机验证码\n  \"getMobileCode\": nowUrl + \"/\" + interfaceFile + \"/getMobileCode/appkey/\" + appkey,\n  // 读取个人信息\n  \"getInfo\": nowUrl + \"/\" + interfaceFile + \"/getUserInfo/appkey/\" + appkey,\n  // 签到\n  \"userSign\": nowUrl + \"/\" + interfaceFile + \"/userSign/appkey/\" + appkey,\n  // 我的钱包\n  \"myBalance\": nowUrl + \"/\" + interfaceFile + \"/balance/appkey/\" + appkey,\n  // 余额提现\n  \"getMoney\": nowUrl + \"/\" + interfaceFile + \"/getMoney/appkey/\" + appkey,\n  // 获取银行卡列表\n  \"getBank\": nowUrl + \"/\" + interfaceFile + \"/bankLists/appkey/\" + appkey,\n  // 获取用户银行卡列表\n  \"getUserBank\": nowUrl + \"/\" + interfaceFile + \"/userBankList/appkey/\" + appkey,\n  // 设置提现银行卡\n  \"setBank\": nowUrl + \"/\" + interfaceFile + \"/setDefaultBank/appkey/\" + appkey,\n  // 删除提现银行卡\n  \"delBank\": nowUrl + \"/\" + interfaceFile + \"/delBank/appkey/\" + appkey,\n  // 添加提现银行卡\n  \"addBank\": nowUrl + \"/\" + interfaceFile + \"/addBank/appkey/\" + appkey,\n  // 提现记录\n  \"getDeposit\": nowUrl + \"/\" + interfaceFile + \"/depositLog/appkey/\" + appkey,\n  // 账户明细\n  \"getDetailed\": nowUrl + \"/\" + interfaceFile + \"/detailedList/appkey/\" + appkey,\n  // 修改昵称,手机号,头像\n  \"editInfo\": nowUrl + \"/\" + interfaceFile + \"/editInfo/appkey/\" + appkey,\n  // 上传接口\n  \"upload\": nowUrl + \"/\" + interfaceFile + \"/upload/appkey/\" + appkey,\n  // 收藏列表\n  \"getColl\": nowUrl + \"/\" + interfaceFile + \"/collectionList/appkey/\" + appkey,\n  // 删除收藏视频\n  \"delColl\": nowUrl + \"/\" + interfaceFile + \"/deleteCollection/appkey/\" + appkey,\n  // 我的足迹\n  \"getWatchLog\": nowUrl + \"/\" + interfaceFile + \"/getWatchLog/appkey/\" + appkey,\n  // 短视频购买记录\n  \"getSvodBuyLog\": nowUrl + \"/\" + interfaceFile + \"/getSvodBuyLog/appkey/\" + appkey,\n  // 删除我的足迹\n  \"delWatchLog\": nowUrl + \"/\" + interfaceFile + \"/delWatchLog/appkey/\" + appkey,\n  // 我的分享\n  \"myShare\": nowUrl + \"/\" + interfaceFile + \"/myShare/appkey/\" + appkey,\n  // 分享记录\n  \"getShareLog\": nowUrl + \"/\" + interfaceFile + \"/shareLog/appkey/\" + appkey,\n  // 修改密码\n  \"changePwd\": nowUrl + \"/\" + interfaceFile + \"/changePwd/appkey/\" + appkey,\n  // 充值套餐\n  \"getCharge\": nowUrl + \"/\" + interfaceFile + \"/getChargeData/appkey/\" + appkey,\n  // 支付方式\n  \"getPayList\": nowUrl + \"/\" + interfaceFile + \"/getPayList/appkey/\" + appkey,\n  // 创建订单\n  \"createOrder\": nowUrl + \"/\" + interfaceFile + \"/createOrder/appkey/\" + appkey,\n  // 关于我们\n  \"getAbout\": nowUrl + \"/\" + interfaceFile + \"/getAbout/appkey/\" + appkey,\n  // 活动列表\n  \"getGameList\": nowUrl + \"/\" + interfaceFile + \"/getGameList/appkey/\" + appkey,\n  // 幸运转盘\n  \"getPrize\": nowUrl + \"/\" + interfaceFile + \"/getPrize/appkey/\" + appkey,\n  // 购买视频\n  \"buyVideo\": nowUrl + \"/\" + interfaceFile + \"/buy/appkey/\" + appkey,\n  // 热门搜索\n  \"getHotSearch\": nowUrl + \"/\" + interfaceFile + \"/getHotSearch/appkey/\" + appkey,\n  // 发起搜索\n  \"searchVideo\": nowUrl + \"/\" + interfaceFile + \"/searchVideo/appkey/\" + appkey,\n  // 清空搜索记录\n  \"emptySearch\": nowUrl + \"/\" + interfaceFile + \"/emptySearch/appkey/\" + appkey,\n  // 获广告\n  \"getAd\": nowUrl + \"/\" + interfaceFile + \"/getAd/appkey/\" + appkey,\n  // 获取分享者id\n  \"getSharePid\": nowUrl + \"/\" + interfaceFile + \"/getSharePid/appkey/\" + appkey,\n  // 发帖图片\n  \"uploadImg\": nowUrl + \"/\" + interfaceFile + \"/uploadImg/appkey/\" + appkey,\n  // 广场首页数据\n  \"getPlazaList\": nowUrl + \"/\" + interfaceFile + \"/communityHomepage/appkey/\" + appkey,\n  // 帖子详情获取评论\n  \"getComment\": nowUrl + \"/\" + interfaceFile + \"/getPostComment/appkey/\" + appkey,\n  // 帖子详情广告\n  \"getAdInfo\": nowUrl + \"/\" + interfaceFile + \"/getAdInfo/appkey/\" + appkey,\n  // 发帖\n  \"sendComment\": nowUrl + \"/\" + interfaceFile + \"/sendPostComment/appkey/\" + appkey,\n  // 个人主页\n  \"homePage\": nowUrl + \"/\" + interfaceFile + \"/homePage/appkey/\" + appkey,\n  // 上传配置\n  \"uploadConfig\": nowUrl + \"/\" + interfaceFile + \"/getUploadConfig/appkey/\" + appkey,\n  // 顶部导航\n  \"getTopMenu\": nowUrl + \"/\" + interfaceFile + \"/getTopMenu/appkey/\" + appkey,\n  /********************** 直播相关 **********************/\n  // 获取主播列表\n  \"getAnchorList\": nowUrl + \"/\" + interfaceFile + \"/getAnchorList/appkey/\" + appkey,\n  // 购买付费房\n  \"buyGoldRoom\": nowUrl + \"/\" + interfaceFile + \"/buyGoldRoom/appkey/\" + appkey,\n  // 查询用户是否为主播\n  \"getUserAnchor\": nowUrl + \"/\" + interfaceFile + \"/getUserIsAnchor/appkey/\" + appkey,\n  // 签约主播\n  \"regAnchor\": nowUrl + \"/\" + interfaceFile + \"/regAnchor/appkey/\" + appkey,\n  // 进入直播间\n  \"playerConfig\": nowUrl + \"/\" + interfaceFile + \"/enterTheStudio/appkey/\" + appkey,\n  // 关注主播\n  \"focusAnchor\": nowUrl + \"/\" + interfaceFile + \"/focusOnTheAnchor/appkey/\" + appkey,\n  // 退出直播间\n  \"logoutRoom\": nowUrl + \"/\" + interfaceFile + \"/exitTheStudio/appkey/\" + appkey,\n  // 打赏主播\n  \"giveAnchor\": nowUrl + \"/\" + interfaceFile + \"/rewardTheAnchor/appkey/\" + appkey,\n  // 开始直播\n  \"liveInitData\": nowUrl + \"/\" + interfaceFile + \"/startLiveBroadcast/appkey/\" + appkey,\n  // 保存房间信息\n  \"saveRoomData\": nowUrl + \"/\" + interfaceFile + \"/saveRoomData/appkey/\" + appkey,\n  // 上传封面图片\n  \"roomUploadImg\": nowUrl + \"/\" + interfaceFile + \"/roomUploadImg/appkey/\" + appkey,\n  // 结束直播并结算\n  \"endLivePlayer\": nowUrl + \"/\" + interfaceFile + \"/endLiveBroadcast/appkey/\" + appkey,\n  // 禁言与恢复\n  \"updateSendMs\": nowUrl + \"/\" + interfaceFile + \"/updateSendMs/appkey/\" + appkey,\n  // 主播踢人出房间\n  \"anchorOutUser\": nowUrl + \"/\" + interfaceFile + \"/anchorOutUser/appkey/\" + appkey,\n  // 图片 + 资讯\n  \"getPicture\": nowUrl + \"/\" + interfaceFile + \"/getPicture/appkey/\" + appkey,\n  // 购买图片\n  \"buyPicture\": nowUrl + \"/\" + interfaceFile + \"/buyPicture/appkey/\" + appkey,\n  // 图片详情\n  \"pictureInfo\": nowUrl + \"/\" + interfaceFile + \"/pictureInfo/appkey/\" + appkey,\n  // app内打开H5\n  \"openH5Url\": nowUrl + \"/\" + interfaceFile + \"/openH5Url/appkey/\" + appkey,\n  // 上传试看时间\n  \"updateTryTime\": nowUrl + \"/\" + interfaceFile + \"/updateTryTime/appkey/\" + appkey,\n  // 获取专题列表\n  \"getAlbumList\": nowUrl + \"/\" + interfaceFile + \"/getAlbumList/appkey/\" + appkey,\n  // 我的团队\n  \"getUserTeam\": nowUrl + \"/\" + interfaceFile + \"/getUserTeam/appkey/\" + appkey,\n  // 直播记录\n  \"getPlayerLog\": nowUrl + \"/\" + interfaceFile + \"/getPlayerLog/appkey/\" + appkey,\n  // 礼物记录\n  \"getPlayerGift\": nowUrl + \"/\" + interfaceFile + \"/getPlayerGift/appkey/\" + appkey,\n  // 长视频分类筛选\n  \"getFilterData\": nowUrl + \"/\" + interfaceFile + \"/getFilterData/appkey/\" + appkey,\n  // 长视频分类筛选视频\n  \"getFilters\": nowUrl + \"/\" + interfaceFile + \"/getFilterVideo/appkey/\" + appkey,\n  // 长视频\n  \"getClassData\": nowUrl + \"/\" + interfaceFile + \"/getClassData/appkey/\" + appkey,\n  // 长视频下分类视频\n  \"getClassVideo\": nowUrl + \"/\" + interfaceFile + \"/getClassVideoData/appkey/\" + appkey,\n  // 长视频标签\n  \"getTagData\": nowUrl + \"/\" + interfaceFile + \"/getTagData/appkey/\" + appkey,\n  // 短视频\n  \"getSvodClass\": nowUrl + \"/\" + interfaceFile + \"/getSvodClassData/appkey/\" + appkey,\n  // 大分类短视频\n  \"getSvodData\": nowUrl + \"/\" + interfaceFile + \"/getSvodClassVideoData/appkey/\" + appkey,\n  // 加载短视频\n  \"getSvodMain\": nowUrl + \"/\" + interfaceFile + \"/getSvodMain/appkey/\" + appkey,\n  // 扣除免费次数\n  \"updateFree\": nowUrl + \"/\" + interfaceFile + \"/updateFree/appkey/\" + appkey,\n  // 金币购买视频\n  \"goldBuyVideo\": nowUrl + \"/\" + interfaceFile + \"/goldBuyVideo/appkey/\" + appkey,\n  // 点赞\n  \"likeSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/likeSvodVideo/appkey/\" + appkey,\n  // 短视频评论列表\n  \"svodVideoComm\": nowUrl + \"/\" + interfaceFile + \"/svodVideoComment/appkey/\" + appkey,\n  // 短视频评论\n  \"sendVideoComm\": nowUrl + \"/\" + interfaceFile + \"/sendVideoComment/appkey/\" + appkey,\n  // 按标签获取短视频\n  \"tagSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/tagSvodVideo/appkey/\" + appkey,\n  // 短视频播放\n  \"playSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/playSvodVideo/appkey/\" + appkey,\n  // 周下载量记数\n  \"vipWeekDowns\": nowUrl + \"/\" + interfaceFile + \"/vipWeekDowns/appkey/\" + appkey,\n  /* 不需要APPKEY的统一放在下面 */\n  // 去支付\n  \"getPay\": nowUrl + \"/\" + interfaceFile + \"/pay\",\n  // 服务协议\n  \"agreement\": nowUrl + \"/\" + interfaceFile + \"/privacy/type/1\",\n  // 隐私政策\n  \"privacy\": nowUrl + \"/\" + interfaceFile + \"/privacy/type/2\"\n};\n// 是否登录 未登录返回false\nvar getLogins = function getLogins() {\n  try {\n    var res = uni.getStorageSync('userInfo_' + appkey);\n    return res ? res : false;\n  } catch (e) {\n    return false;\n  }\n};\n// 缓存登录信息\nvar setLogins = function setLogins(data) {\n  try {\n    uni.setStorageSync('userInfo_' + appkey, data);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};\n// 注销登录\nvar delLogins = function delLogins() {\n  try {\n    uni.removeStorageSync('userInfo_' + appkey);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};\n/*\r\n* randomWord 产生任意长度随机字母数字组合\r\n* randomFlag 是否任意长度 min 任意长度最小位[固定位数] max 任意长度最大位\r\n*\r\n* 生成6—12位随机字符串 ：randomWord(true,6,12)\r\n* 生成随机的6位字符串 ： randomWord(false,6) \r\n* type : true纯数字,false为数字和字母\r\n*/\nvar randomWord = function randomWord() {\n  var randomFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var min = arguments.length > 2 ? arguments[2] : undefined;\n  var max = arguments.length > 3 ? arguments[3] : undefined;\n  var str = \"\",\n    range = min;\n  if (type) {\n    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];\n  } else {\n    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\n  }\n  //'-','.','~','!','@','#','$','%','^','&','*','(',')','_',':','<','>','?'\n  if (randomFlag) {\n    range = Math.round(Math.random() * (max - min)) + min; // 任意长度\n  }\n\n  for (var i = 0; i < range; i++) {\n    var pos = Math.round(Math.random() * (arr.length - 1));\n    str += arr[pos];\n  }\n  return str;\n};\n// 同步缓存图片\nvar imgCache = function imgCache(image_url, backFun) {\n  var image_name = splitUrl(image_url) + appkey + '';\n  //uni.removeStorageSync(image_name);\n  //console.log(image_name)\n  var imgUrl = uni.getStorageSync(image_name);\n  // 存在则读缓存 \n  if (imgUrl) {\n    //if(uni.getSystemInfoSync().platform == 'ios') imgUrl = \"file:\" + imgUrl;\n    plus.io.resolveLocalFileSystemURL(imgUrl, function (entry) {\n      entry.file(function (file) {\n        //console.log(imgUrl);\n      });\n    }, function (err) {\n      uni.removeStorageSync(image_name);\n    });\n    backFun(imgUrl);\n    //console.log(imgUrl)\n  } else {\n    backFun(image_url);\n    //console.log(image_url);\n    // 本地没有缓存则下载 \n    uni.downloadFile({\n      url: image_url,\n      success: function success(res) {\n        //console.log(res.tempFilePath);\n        if (res.statusCode == 200) {\n          uni.saveFile({\n            tempFilePath: res.tempFilePath,\n            success: function success(e) {\n              var savedFilePath = e.savedFilePath;\n              uni.setStorageSync(image_name, savedFilePath);\n            }\n          });\n        }\n      }\n    });\n  }\n};\n// 获得URL中的文件名\nvar splitUrl = function splitUrl(imgUrl) {\n  if (!imgUrl) return false;\n  var imgArr = imgUrl.split('/');\n  var fileName = imgArr[imgArr.length - 1];\n  return fileName;\n};\n// 加载提示\nvar showToast = function showToast() {\n  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;\n  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';\n  var image = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n  uni.showToast({\n    icon: style,\n    title: title,\n    mask: true,\n    duration: times,\n    image: image\n  });\n};\nvar getFileSize = function getFileSize(fileByte) {\n  try {\n    var fileSizeByte = fileByte;\n    var fileSizeMsg = \"\";\n    if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2);else if (fileSizeByte == 1048576) fileSizeMsg = 1;else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2);else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = \"1GB\";else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2);else fileSizeMsg = \"文件超过1TB\";\n    return fileSizeMsg;\n  } catch (e) {\n    return false;\n  }\n};\n\n// 获取设备ID\nvar getMobileDid = function getMobileDid(backFun) {\n  var phone = uni.getSystemInfoSync();\n  var did = phone.deviceId;\n  if (did.length > 0) {\n    var did = did.split(\"|\").filter(function (r) {\n      return r && r.trim();\n    });\n    backFun(did[did.length - 1]);\n  } else {\n    plus.device.getInfo({\n      success: function success(e) {\n        if (phone.platform == 'android') {\n          var arr = e.uuid.split(\",\");\n          did = arr[0];\n        } else {\n          did = e.uuid;\n        }\n      },\n      fail: function fail(e) {\n        did = getMobileRandDid();\n      },\n      complete: function complete(e) {\n        backFun(did);\n      }\n    });\n  }\n};\n// 随机设备ID\nvar getMobileRandDid = function getMobileRandDid() {\n  var didKey = 'my_did_' + appkey;\n  var getDid = uni.getStorageSync(didKey);\n  if (getDid) {\n    return getDid;\n  } else {\n    var randDid = randomWord(false, false, 16, 16);\n    uni.setStorageSync(didKey, 'H5' + randDid);\n    return randDid;\n  }\n};\n// 关闭APP\nvar outApp = function outApp() {\n  switch (uni.getSystemInfoSync().platform) {\n    case 'android':\n      plus.runtime.quit();\n      break;\n    case 'ios':\n      plus.ios.import('UIApplication').sharedApplication().performSelector('exit');\n      break;\n  }\n};\n// 跳转方法\nvar jumpUrl = function jumpUrl(url) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'web';\n  var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  return function (delta) {\n    if (url == '#' || url == '') return false;\n    if (url == 'back') {\n      var delta = parseInt(type) ? type : 1;\n      uni.navigateBack({\n        delta: delta\n      });\n      return;\n    }\n    switch (type) {\n      // 原窗口\n      case 'old':\n        uni.reLaunch({\n          url: url\n        });\n        break;\n      // 不关闭当前页跳转\n      case 'new':\n        uni.navigateTo({\n          url: url\n        });\n        break;\n      // tabBar\n      case 'tab':\n        uni.switchTab({\n          url: url\n        });\n        break;\n      // 关闭当前页跳转\n      case 'newx':\n        uni.redirectTo({\n          url: url\n        });\n        break;\n      // APP内打开链接\n      case 'app':\n        var app = '/pages/jump/index?u=' + url;\n        //console.log(app)\n        uni.navigateTo({\n          url: app\n        });\n        break;\n      // 跳至外置浏揽器\n      default:\n        plus.runtime.openURL(url);\n    }\n  }(delta);\n};\n// 复制H5+APP\nvar copy = function copy(str) {\n  var content = str + '';\n  uni.setClipboardData({\n    data: content,\n    success: function success() {\n      showToast('复制成功', 2000);\n    }\n  });\n};\nvar h5Copy = function h5Copy(content) {\n  if (!document.queryCommandSupported('copy')) return false;\n  var textarea = document.createElement(\"textarea\");\n  textarea.value = content;\n  textarea.readOnly = \"readOnly\";\n  document.body.appendChild(textarea);\n  textarea.select(); // 选择对象\n  textarea.setSelectionRange(0, content.length); //核心\n  var result = document.execCommand(\"copy\"); // 执行浏览器复制命令\n  textarea.remove();\n  return result;\n};\nvar bgView = null;\n// 创建原生View控件\nvar createView = function createView() {\n  var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '50px';\n  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.3';\n  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  /* if(uni.getSystemInfoSync().platform == 'ios' && height=='50px'){\r\n  \theight = '105px';\r\n  } */\n  bgView = new plus.nativeObj.View('bg', {\n    bottom: '0px',\n    left: '0px',\n    height: height,\n    width: '100%',\n    opacity: opacity,\n    backgroundColor: 'rgba(0,0,0,1)'\n  });\n  if (text != '') {\n    bgView.drawText(text, {\n      widht: '100%',\n      height: '100%'\n    }, {\n      size: '18px',\n      color: '#fff'\n      //backgroundColor: '#FFFFFF'\n    });\n  }\n\n  bgView.show();\n};\n// 关闭罩层\nvar closeView = function closeView() {\n  bgView.close();\n};\n// 打电话给xxx\nvar callUp = function callUp(number) {\n  uni.makePhoneCall({\n    phoneNumber: number + '',\n    fail: function fail() {\n      api.showToast('操作失败', 2000);\n    }\n  });\n};\nvar getContacts = function getContacts(backFun) {\n  plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {\n    addressbook.find([\"displayName\", \"phoneNumbers\"], function (contacts) {\n      //console.log(contacts);\n      backFun(contacts);\n    }, function () {\n      backFun(false);\n    }, {\n      multiple: true\n    });\n  }, function (e) {\n    backFun(false);\n  });\n};\nvar formatSeconds = function formatSeconds(value) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var result = parseInt(value);\n  var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n  var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);\n  var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n  var res = '';\n  if (type == 1) {\n    res += \"\".concat(h, \":\");\n    res += \"\".concat(m, \":\");\n    res += \"\".concat(s);\n  } else {\n    res += \"\".concat(h, \"\\u65F6\");\n    res += \"\".concat(m, \"\\u5206\");\n    res += \"\".concat(s, \"\\u79D2\");\n  }\n  return res;\n};\n/* 获取远程文件大小 */\nvar getWebFileSize = function getWebFileSize() {\n  var filed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var backFun = arguments.length > 1 ? arguments[1] : undefined;\n  var resSize = 0;\n  if (filed.length < 1) {\n    backFun(resSize);\n    return;\n  }\n  uni.request({\n    url: filed,\n    method: 'HEAD',\n    success: function success(e) {\n      if (e.statusCode == 200) {\n        resSize = getFileSize(e.header['Content-Length']); // 调用函数换算单位\n      }\n    },\n\n    complete: function complete() {\n      backFun(resSize);\n    }\n  });\n};\n// H5获取浏览器类型\nvar isH5 = function isH5() {\n  var Sys = {\n    'type': 'app',\n    'ver': 0\n  };\n  return Sys;\n};\nvar str_repeat = function str_repeat(i, m) {\n  for (var o = []; m > 0; o[--m] = i) {\n    ;\n  }\n  return o.join('');\n};\n\n/* \r\nvar classic = $.sprintf('%s %d%% %.3f', 'string', 40, 3.141593); \r\n// classic = 'string 40% 3.142' \r\n\r\nvar named = $.sprintf('%(name)s: %(value)d', {name: 'age', value: 40}); \r\n// named = 'age: 40'\r\n\r\nvar classic = $.vsprintf('%s %d%% %.3f', ['string', 40, 3.141593]); \r\n// classic = 'string 40% 3.142'\r\n\r\nvar named = $.vsprintf('%(name)s: %(value)d', [{name: 'age', value: 40}]); \r\n// named = 'age: 40' \r\n */\nvar sprintf = function sprintf() {\n  var i = 0,\n    a,\n    f = arguments[i++],\n    o = [],\n    m,\n    p,\n    c,\n    x,\n    s = '';\n  while (f) {\n    if (m = /^[^\\x25]+/.exec(f)) {\n      o.push(m[0]);\n    } else if (m = /^\\x25{2}/.exec(f)) {\n      o.push('%');\n    } else if (m = /^\\x25(?:(\\d+)\\$)?(\\+)?(0|'[^$])?(-)?(\\d+)?(?:\\.(\\d+))?([b-fosuxX])/.exec(f)) {\n      if ((a = arguments[m[1] || i++]) == null || a == undefined) {\n        throw 'Too few arguments.';\n      }\n      if (/[^s]/.test(m[7]) && typeof a != 'number') {\n        throw 'Expecting number but found ' + (0, _typeof2.default)(a);\n      }\n      switch (m[7]) {\n        case 'b':\n          a = a.toString(2);\n          break;\n        case 'c':\n          a = String.fromCharCode(a);\n          break;\n        case 'd':\n          a = parseInt(a);\n          break;\n        case 'e':\n          a = m[6] ? a.toExponential(m[6]) : a.toExponential();\n          break;\n        case 'f':\n          a = m[6] ? parseFloat(a).toFixed(m[6]) : parseFloat(a);\n          break;\n        case 'o':\n          a = a.toString(8);\n          break;\n        case 's':\n          a = (a = String(a)) && m[6] ? a.substring(0, m[6]) : a;\n          break;\n        case 'u':\n          a = Math.abs(a);\n          break;\n        case 'x':\n          a = a.toString(16);\n          break;\n        case 'X':\n          a = a.toString(16).toUpperCase();\n          break;\n      }\n      a = /[def]/.test(m[7]) && m[2] && a >= 0 ? '+' + a : a;\n      c = m[3] ? m[3] == '0' ? '0' : m[3].charAt(1) : ' ';\n      x = m[5] - String(a).length - s.length;\n      p = m[5] ? str_repeat(c, x) : '';\n      o.push(s + (m[4] ? a + p : p + a));\n    } else {\n      throw 'Huh ?!';\n    }\n    f = f.substring(m[0].length);\n  }\n  return o.join('');\n};\n\n/* H5版权日志 */\nvar printLog = function printLog() {\n  __f__(\"log\", ' ========= copyright: 魅思视频v4 ========= ', \" at common/api.js:702\");\n};\n\n// 注册\nvar _default = {\n  appkey: appkey,\n  apiUrl: apiUrl,\n  apiData: apiData,\n  getLogins: getLogins,\n  setLogins: setLogins,\n  delLogins: delLogins,\n  randomWord: randomWord,\n  imgCache: imgCache,\n  splitUrl: splitUrl,\n  showToast: showToast,\n  getFileSize: getFileSize,\n  getWebDomain: getWebDomain,\n  getMobileDid: getMobileDid,\n  outApp: outApp,\n  jumpUrl: jumpUrl,\n  copy: copy,\n  createView: createView,\n  closeView: closeView,\n  callUp: callUp,\n  getContacts: getContacts,\n  formatSeconds: formatSeconds,\n  nowUrl: nowUrl,\n  getWebFileSize: getWebFileSize,\n  isH5: isH5,\n  printLog: printLog,\n  sprintf: sprintf\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 31)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2FwaS5qcyJdLCJuYW1lcyI6WyJhcGlVcmwiLCJpbnRlcmZhY2VGaWxlIiwiYXBwa2V5IiwiZ2V0V2ViRG9tYWluIiwibm93RG9tYWluIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJub3dVcmwiLCJhcGlEYXRhIiwiZ2V0TG9naW5zIiwicmVzIiwiZSIsInNldExvZ2lucyIsImRhdGEiLCJzZXRTdG9yYWdlU3luYyIsImRlbExvZ2lucyIsInJlbW92ZVN0b3JhZ2VTeW5jIiwicmFuZG9tV29yZCIsInJhbmRvbUZsYWciLCJ0eXBlIiwibWluIiwibWF4Iiwic3RyIiwicmFuZ2UiLCJhcnIiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJpIiwicG9zIiwibGVuZ3RoIiwiaW1nQ2FjaGUiLCJpbWFnZV91cmwiLCJiYWNrRnVuIiwiaW1hZ2VfbmFtZSIsInNwbGl0VXJsIiwiaW1nVXJsIiwicGx1cyIsImlvIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsImVudHJ5IiwiZmlsZSIsImVyciIsImRvd25sb2FkRmlsZSIsInVybCIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwic2F2ZUZpbGUiLCJ0ZW1wRmlsZVBhdGgiLCJzYXZlZEZpbGVQYXRoIiwiaW1nQXJyIiwic3BsaXQiLCJmaWxlTmFtZSIsInNob3dUb2FzdCIsInRpdGxlIiwidGltZXMiLCJzdHlsZSIsImltYWdlIiwiaWNvbiIsIm1hc2siLCJkdXJhdGlvbiIsImdldEZpbGVTaXplIiwiZmlsZUJ5dGUiLCJmaWxlU2l6ZUJ5dGUiLCJmaWxlU2l6ZU1zZyIsInRvRml4ZWQiLCJnZXRNb2JpbGVEaWQiLCJwaG9uZSIsImdldFN5c3RlbUluZm9TeW5jIiwiZGlkIiwiZGV2aWNlSWQiLCJmaWx0ZXIiLCJyIiwidHJpbSIsImRldmljZSIsImdldEluZm8iLCJwbGF0Zm9ybSIsInV1aWQiLCJmYWlsIiwiZ2V0TW9iaWxlUmFuZERpZCIsImNvbXBsZXRlIiwiZGlkS2V5IiwiZ2V0RGlkIiwicmFuZERpZCIsIm91dEFwcCIsInJ1bnRpbWUiLCJxdWl0IiwiaW9zIiwiaW1wb3J0Iiwic2hhcmVkQXBwbGljYXRpb24iLCJwZXJmb3JtU2VsZWN0b3IiLCJqdW1wVXJsIiwiZGVsdGEiLCJwYXJzZUludCIsIm5hdmlnYXRlQmFjayIsInJlTGF1bmNoIiwibmF2aWdhdGVUbyIsInN3aXRjaFRhYiIsInJlZGlyZWN0VG8iLCJhcHAiLCJvcGVuVVJMIiwiY29weSIsImNvbnRlbnQiLCJzZXRDbGlwYm9hcmREYXRhIiwiaDVDb3B5IiwiZG9jdW1lbnQiLCJxdWVyeUNvbW1hbmRTdXBwb3J0ZWQiLCJ0ZXh0YXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInJlYWRPbmx5IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZXN1bHQiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImJnVmlldyIsImNyZWF0ZVZpZXciLCJoZWlnaHQiLCJvcGFjaXR5IiwidGV4dCIsIm5hdGl2ZU9iaiIsIlZpZXciLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3VGV4dCIsIndpZGh0Iiwic2l6ZSIsImNvbG9yIiwic2hvdyIsImNsb3NlVmlldyIsImNsb3NlIiwiY2FsbFVwIiwibnVtYmVyIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwiYXBpIiwiZ2V0Q29udGFjdHMiLCJjb250YWN0cyIsImdldEFkZHJlc3NCb29rIiwiQUREUkVTU0JPT0tfUEhPTkUiLCJhZGRyZXNzYm9vayIsImZpbmQiLCJtdWx0aXBsZSIsImZvcm1hdFNlY29uZHMiLCJoIiwiZmxvb3IiLCJtIiwicyIsImdldFdlYkZpbGVTaXplIiwiZmlsZWQiLCJyZXNTaXplIiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsImlzSDUiLCJTeXMiLCJzdHJfcmVwZWF0IiwibyIsImpvaW4iLCJzcHJpbnRmIiwiYSIsImYiLCJhcmd1bWVudHMiLCJwIiwiYyIsIngiLCJleGVjIiwicHVzaCIsInVuZGVmaW5lZCIsInRlc3QiLCJ0b1N0cmluZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInRvRXhwb25lbnRpYWwiLCJwYXJzZUZsb2F0Iiwic3Vic3RyaW5nIiwiYWJzIiwidG9VcHBlckNhc2UiLCJjaGFyQXQiLCJwcmludExvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE1BQU0sR0FBRyw4QkFBOEI7QUFDN0M7QUFDQSxJQUFNQyxhQUFhLEdBQUcsUUFBUTtBQUM5QjtBQUNBLElBQU1DLE1BQU0sR0FBRyxXQUFXO0FBQzFCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FDbEI7RUFDQyxJQUFNQyxTQUFTLEdBQUdDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksR0FBR0osTUFBTSxDQUFDO0VBQzNELElBQUlFLFNBQVMsRUFBRTtJQUNkLE9BQU9BLFNBQVM7RUFDakIsQ0FBQyxNQUFNO0lBQ04sT0FBT0osTUFBTTtFQUNkO0FBQ0QsQ0FBQztBQUNELElBQUlPLE1BQU0sR0FBR0osWUFBWSxFQUFFO0FBQzNCO0FBQ0EsSUFBTUssT0FBTyxHQUFHO0VBQ2Y7RUFDQSxVQUFVLEVBQU9ELE1BQU0sR0FBQyxHQUFHLEdBQUNOLGFBQWEsR0FBQyxrQkFBa0IsR0FBQ0MsTUFBTTtFQUNuRTtFQUNBLFlBQVksRUFBS0ssTUFBTSxHQUFDLEdBQUcsR0FBQ04sYUFBYSxHQUFDLHFCQUFxQixHQUFDQyxNQUFNO0VBQ3RFO0VBQ0EsVUFBVSxFQUFPSyxNQUFNLEdBQUMsR0FBRyxHQUFDTixhQUFhLEdBQUMsbUJBQW1CLEdBQUNDLE1BQU07RUFDcEU7RUFDQSxXQUFXLEVBQU1LLE1BQU0sR0FBQyxHQUFHLEdBQUNOLGFBQWEsR0FBQyxvQkFBb0IsR0FBQ0MsTUFBTTtFQUNyRTtFQUNBLFVBQVUsRUFBT0ssTUFBTSxHQUFDLEdBQUcsR0FBQ04sYUFBYSxHQUFDLG9CQUFvQixHQUFDQyxNQUFNO0VBQ3JFO0VBQ0EsV0FBVyxF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QUNBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQ2hCO0VBQUEsSUFENEJDLFVBQVUsdUVBQUMsS0FBSztFQUFBLElBQUVDLElBQUksdUVBQUMsS0FBSztFQUFBLElBQUVDLEdBQUc7RUFBQSxJQUFFQyxHQUFHO0VBRWpFLElBQUlDLEdBQUcsR0FBRyxFQUFFO0lBQUVDLEtBQUssR0FBR0gsR0FBRztFQUN6QixJQUFHRCxJQUFJLEVBQUM7SUFDUCxJQUFJSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDN0QsQ0FBQyxNQUFJO0lBQ0osSUFBSUEsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUMzRCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDMUQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDcEUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQzFELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FB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Q0EsT0FBT29JLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNyQixDQUFDOztBQUVEO0FBQ0EsSUFBTXFCLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQWM7RUFDM0IsYUFBWSx5Q0FBeUM7QUFDdEQsQ0FBQzs7QUFFRDtBQUFBLGVBQ2U7RUFDZHRMLE1BQU0sRUFBTkEsTUFBTTtFQUNORixNQUFNLEVBQU5BLE1BQU07RUFDSFEsT0FBTyxFQUFQQSxPQUFPO0VBQ1ZDLFNBQVMsRUFBVEEsU0FBUztFQUNURyxTQUFTLEVBQVRBLFNBQVM7RUFDVEcsU0FBUyxFQUFUQSxTQUFTO0VBQ1RFLFVBQVUsRUFBVkEsVUFBVTtFQUNWYyxRQUFRLEVBQVJBLFFBQVE7RUFDUkksUUFBUSxFQUFSQSxRQUFRO0VBQ1JrQixTQUFTLEVBQVRBLFNBQVM7RUFDVFEsV0FBVyxFQUFYQSxXQUFXO0VBQ1gxRCxZQUFZLEVBQVpBLFlBQVk7RUFDWitELFlBQVksRUFBWkEsWUFBWTtFQUNaa0IsTUFBTSxFQUFOQSxNQUFNO0VBQ05PLE9BQU8sRUFBUEEsT0FBTztFQUNQVSxJQUFJLEVBQUpBLElBQUk7RUFDSmtCLFVBQVUsRUFBVkEsVUFBVTtFQUNWZSxTQUFTLEVBQVRBLFNBQVM7RUFDVEUsTUFBTSxFQUFOQSxNQUFNO0VBQ05LLFdBQVcsRUFBWEEsV0FBVztFQUNYTyxhQUFhLEVBQWJBLGFBQWE7RUFDYjdJLE1BQU0sRUFBTkEsTUFBTTtFQUNOa0osY0FBYyxFQUFkQSxjQUFjO0VBQ2RNLElBQUksRUFBSkEsSUFBSTtFQUNKeUIsUUFBUSxFQUFSQSxRQUFRO0VBQ1JwQixPQUFPLEVBQVBBO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5o6l5Y+j5Z+f5ZCNXHJcbmNvbnN0IGFwaVVybCA9IFwiaHR0cDovL3Y1X2JsYWNrX2FwaS5jcXBpZy5jblwiO1xyXG4vLyDmjqXlj6Pmlofku7ZcclxuY29uc3QgaW50ZXJmYWNlRmlsZSA9IFwiYXBwYXBpXCI7XHJcbi8vIOS4juaOpeWPo+mAmuiur+eahEtFWVxyXG5jb25zdCBhcHBrZXkgPSAnYWJjMTIzNDU2JztcclxuLy8g6YCJ5oup57q/6LevXHJcbmNvbnN0IGdldFdlYkRvbWFpbiA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGNvbnN0IG5vd0RvbWFpbiA9IHVuaS5nZXRTdG9yYWdlU3luYygnbm93RG9tYWluXycgKyBhcHBrZXkpO1xyXG5cdGlmIChub3dEb21haW4pIHtcclxuXHRcdHJldHVybiBub3dEb21haW47XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBhcGlVcmw7XHJcblx0fVxyXG59XHJcbnZhciBub3dVcmwgPSBnZXRXZWJEb21haW4oKTtcclxuLy8g5a6M5pW05o6l5Y+jKOWfn+WQjSvmjqXlj6Pmlofku7Yr5o6l5Y+j5pa55rOVKVxyXG5jb25zdCBhcGlEYXRhID0ge1xyXG5cdC8vIOWIneWni+WMluaOpeWPo1xyXG5cdFwiYXBwSW5pdHNcIiAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9hcHBJbml0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6I635Y+WQVBQ54mI5pys5L+h5oGvXHJcblx0XCJnZXRWZXJzaW9uXCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFZlcnNpb24vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDpppbpobXmlbDmja5cclxuXHRcImhvbWVEYXRhXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaG9tZU1haW4vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDop4bpopHliJfooahcclxuXHRcInZpZGVvRGF0YVwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdmlkZW9MaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiT6aKY6K+m5oOFXHJcblx0XCJnZXRBbGJ1bVwiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2FsYnVtSW5mby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOinhumikeivpuaDhVxyXG5cdFwidmlkZW9JbmZvXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZXRhaWwvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmt7vliqDmlLbol49cclxuXHRcImFkZENvbGxlY3Rpb25cIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYWRkQ29sbGVjdGlvbi9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOinhumikeeCuei1nlxyXG5cdFwidmlkZW9MaWtlXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9saWtlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5re75Yqg6K+E6K66XHJcblx0XCJhZGRDb21tZW50XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDor4TorrrliJfooahcclxuXHRcImNvbW1lbnRMaXN0XCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvY29tbWVudExpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnu5/orqHnlKjmiLflnKjnur/mjqXlj6NcclxuXHRcImhlYXJ0QmVhdFwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaGVhcnRiZWF0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55m75b2V5o6l5Y+jXHJcblx0XCJ1c2VyTG9naW5cIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2xvZ2luL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5rOo5YaM6YWN572u5L+h5oGvXHJcblx0XCJnZXRDb25maWdcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldENvbmZpZy9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOazqOWGjOi0puWPt1xyXG5cdFwidXNlclJlZ1wiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yZWdpc3Rlci9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOiOt+WPluaJi+acuumqjOivgeeggVxyXG5cdFwiZ2V0TW9iaWxlQ29kZVwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRNb2JpbGVDb2RlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6K+75Y+W5Liq5Lq65L+h5oGvXHJcblx0XCJnZXRJbmZvXCIgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFVzZXJJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g562+5YiwXHJcblx0XCJ1c2VyU2lnblwiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VzZXJTaWduL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE6ZKx5YyFXHJcblx0XCJteUJhbGFuY2VcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2JhbGFuY2UvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkvZnpop3mj5DnjrBcclxuXHRcImdldE1vbmV5XCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0TW9uZXkvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bpk7booYzljaHliJfooahcclxuXHRcImdldEJhbmtcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9iYW5rTGlzdHMvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bnlKjmiLfpk7booYzljaHliJfooahcclxuXHRcImdldFVzZXJCYW5rXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXNlckJhbmtMaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6K6+572u5o+Q546w6ZO26KGM5Y2hXHJcblx0XCJzZXRCYW5rXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvc2V0RGVmYXVsdEJhbmsvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliKDpmaTmj5DnjrDpk7booYzljaFcclxuXHRcImRlbEJhbmtcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZWxCYW5rL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5re75Yqg5o+Q546w6ZO26KGM5Y2hXHJcblx0XCJhZGRCYW5rXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYWRkQmFuay9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaPkOeOsOiusOW9lVxyXG5cdFwiZ2V0RGVwb3NpdFwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZXBvc2l0TG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6LSm5oi35piO57uGXHJcblx0XCJnZXREZXRhaWxlZFwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2RldGFpbGVkTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOS/ruaUueaYteensCzmiYvmnLrlj7cs5aS05YOPXHJcblx0XCJlZGl0SW5mb1wiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VkaXRJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiK5Lyg5o6l5Y+jXHJcblx0XCJ1cGxvYWRcIiAgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VwbG9hZC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaUtuiXj+WIl+ihqFxyXG5cdFwiZ2V0Q29sbFwiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9jb2xsZWN0aW9uTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWIoOmZpOaUtuiXj+inhumikVxyXG5cdFwiZGVsQ29sbFwiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZWxldGVDb2xsZWN0aW9uL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE6Laz6L+5XHJcblx0XCJnZXRXYXRjaExvZ1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFdhdGNoTG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR6LSt5Lmw6K6w5b2VXHJcblx0XCJnZXRTdm9kQnV5TG9nXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFN2b2RCdXlMb2cvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliKDpmaTmiJHnmoTotrPov7lcclxuXHRcImRlbFdhdGNoTG9nXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZGVsV2F0Y2hMb2cvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmiJHnmoTliIbkuqtcclxuXHRcIm15U2hhcmVcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9teVNoYXJlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5YiG5Lqr6K6w5b2VXHJcblx0XCJnZXRTaGFyZUxvZ1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NoYXJlTG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5L+u5pS55a+G56CBXHJcblx0XCJjaGFuZ2VQd2RcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NoYW5nZVB3ZC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWFheWAvOWll+mkkFxyXG5cdFwiZ2V0Q2hhcmdlXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRDaGFyZ2VEYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5pSv5LuY5pa55byPXHJcblx0XCJnZXRQYXlMaXN0XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBheUxpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliJvlu7rorqLljZVcclxuXHRcImNyZWF0ZU9yZGVyXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvY3JlYXRlT3JkZXIvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlhbPkuo7miJHku6xcclxuXHRcImdldEFib3V0XCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QWJvdXQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmtLvliqjliJfooahcclxuXHRcImdldEdhbWVMaXN0XCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0R2FtZUxpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlubjov5Dovaznm5hcclxuXHRcImdldFByaXplXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0UHJpemUvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDotK3kubDop4bpopFcclxuXHRcImJ1eVZpZGVvXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYnV5L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g54Ot6Zeo5pCc57SiXHJcblx0XCJnZXRIb3RTZWFyY2hcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEhvdFNlYXJjaC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWPkei1t+aQnOe0olxyXG5cdFwic2VhcmNoVmlkZW9cIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zZWFyY2hWaWRlby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOa4heepuuaQnOe0ouiusOW9lVxyXG5cdFwiZW1wdHlTZWFyY2hcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9lbXB0eVNlYXJjaC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOiOt+W5v+WRilxyXG5cdFwiZ2V0QWRcIiAgXHQgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEFkL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6I635Y+W5YiG5Lqr6ICFaWRcclxuXHRcImdldFNoYXJlUGlkXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U2hhcmVQaWQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlj5HluJblm77niYdcclxuXHRcInVwbG9hZEltZ1wiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBsb2FkSW1nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5bm/5Zy66aaW6aG15pWw5o2uXHJcblx0XCJnZXRQbGF6YUxpc3RcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NvbW11bml0eUhvbWVwYWdlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5biW5a2Q6K+m5oOF6I635Y+W6K+E6K66XHJcblx0XCJnZXRDb21tZW50XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBvc3RDb21tZW50L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5biW5a2Q6K+m5oOF5bm/5ZGKXHJcblx0XCJnZXRBZEluZm9cIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEFkSW5mby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWPkeW4llxyXG5cdFwic2VuZENvbW1lbnRcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zZW5kUG9zdENvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkuKrkurrkuLvpobVcclxuXHRcImhvbWVQYWdlXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaG9tZVBhZ2UvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkuIrkvKDphY3nva5cclxuXHRcInVwbG9hZENvbmZpZ1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0VXBsb2FkQ29uZmlnL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6aG26YOo5a+86IiqXHJcblx0XCJnZXRUb3BNZW51XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFRvcE1lbnUvYXBwa2V5L1wiK2FwcGtleSxcclxuLyoqKioqKioqKioqKioqKioqKioqKiog55u05pKt55u45YWzICoqKioqKioqKioqKioqKioqKioqKiovXHRcclxuXHQvLyDojrflj5bkuLvmkq3liJfooahcclxuXHRcImdldEFuY2hvckxpc3RcIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QW5jaG9yTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOi0reS5sOS7mOi0ueaIv1xyXG5cdFwiYnV5R29sZFJvb21cIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9idXlHb2xkUm9vbS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOafpeivoueUqOaIt+aYr+WQpuS4uuS4u+aSrVxyXG5cdFwiZ2V0VXNlckFuY2hvclwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRVc2VySXNBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnrb7nuqbkuLvmkq1cclxuXHRcInJlZ0FuY2hvclwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvcmVnQW5jaG9yL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6L+b5YWl55u05pKt6Ze0XHJcblx0XCJwbGF5ZXJDb25maWdcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VudGVyVGhlU3R1ZGlvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5YWz5rOo5Li75pKtXHJcblx0XCJmb2N1c0FuY2hvclwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2ZvY3VzT25UaGVBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDpgIDlh7rnm7Tmkq3pl7RcclxuXHRcImxvZ291dFJvb21cIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZXhpdFRoZVN0dWRpby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaJk+i1j+S4u+aSrVxyXG5cdFwiZ2l2ZUFuY2hvclwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yZXdhcmRUaGVBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlvIDlp4vnm7Tmkq1cclxuXHRcImxpdmVJbml0RGF0YVwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvc3RhcnRMaXZlQnJvYWRjYXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5L+d5a2Y5oi/6Ze05L+h5oGvXHJcblx0XCJzYXZlUm9vbURhdGFcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NhdmVSb29tRGF0YS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOS4iuS8oOWwgemdouWbvueJh1xyXG5cdFwicm9vbVVwbG9hZEltZ1wiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yb29tVXBsb2FkSW1nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g57uT5p2f55u05pKt5bm257uT566XXHJcblx0XCJlbmRMaXZlUGxheWVyXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VuZExpdmVCcm9hZGNhc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnpoHoqIDkuI7mgaLlpI1cclxuXHRcInVwZGF0ZVNlbmRNc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBkYXRlU2VuZE1zL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5Li75pKt6Lii5Lq65Ye65oi/6Ze0XHJcblx0XCJhbmNob3JPdXRVc2VyXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2FuY2hvck91dFVzZXIvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlm77niYcgKyDotYTorq9cclxuXHRcImdldFBpY3R1cmVcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0UGljdHVyZS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOi0reS5sOWbvueJh1xyXG5cdFwiYnV5UGljdHVyZVwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9idXlQaWN0dXJlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5Zu+54mH6K+m5oOFXHJcblx0XCJwaWN0dXJlSW5mb1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3BpY3R1cmVJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8gYXBw5YaF5omT5byASDVcclxuXHRcIm9wZW5INVVybFwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvb3Blbkg1VXJsL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiK5Lyg6K+V55yL5pe26Ze0XHJcblx0XCJ1cGRhdGVUcnlUaW1lXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VwZGF0ZVRyeVRpbWUvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bkuJPpopjliJfooahcclxuXHRcImdldEFsYnVtTGlzdFwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QWxidW1MaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE5Zui6ZifXHJcblx0XCJnZXRVc2VyVGVhbVwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFVzZXJUZWFtL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55u05pKt6K6w5b2VXHJcblx0XCJnZXRQbGF5ZXJMb2dcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBsYXllckxvZy9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOekvOeJqeiusOW9lVxyXG5cdFwiZ2V0UGxheWVyR2lmdFwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRQbGF5ZXJHaWZ0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5YiG57G7562b6YCJXHJcblx0XCJnZXRGaWx0ZXJEYXRhXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEZpbHRlckRhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDplb/op4bpopHliIbnsbvnrZvpgInop4bpopFcclxuXHRcImdldEZpbHRlcnNcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0RmlsdGVyVmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDplb/op4bpopFcclxuXHRcImdldENsYXNzRGF0YVwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0Q2xhc3NEYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5LiL5YiG57G76KeG6aKRXHJcblx0XCJnZXRDbGFzc1ZpZGVvXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldENsYXNzVmlkZW9EYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5qCH562+XHJcblx0XCJnZXRUYWdEYXRhXCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFRhZ0RhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnn63op4bpopFcclxuXHRcImdldFN2b2RDbGFzc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U3ZvZENsYXNzRGF0YS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWkp+WIhuexu+efreinhumikVxyXG5cdFwiZ2V0U3ZvZERhdGFcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRTdm9kQ2xhc3NWaWRlb0RhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliqDovb3nn63op4bpopFcclxuXHRcImdldFN2b2RNYWluXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U3ZvZE1haW4vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmiaPpmaTlhY3otLnmrKHmlbBcclxuXHRcInVwZGF0ZUZyZWVcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBkYXRlRnJlZS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOmHkeW4gei0reS5sOinhumikVxyXG5cdFwiZ29sZEJ1eVZpZGVvXCIgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nb2xkQnV5VmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDngrnotZ5cclxuXHRcImxpa2VTdm9kVmlkZW9cIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvbGlrZVN2b2RWaWRlby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOefreinhumikeivhOiuuuWIl+ihqFxyXG5cdFwic3ZvZFZpZGVvQ29tbVwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zdm9kVmlkZW9Db21tZW50L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR6K+E6K66XHJcblx0XCJzZW5kVmlkZW9Db21tXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NlbmRWaWRlb0NvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmjInmoIfnrb7ojrflj5bnn63op4bpopFcclxuXHRcInRhZ1N2b2RWaWRlb1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdGFnU3ZvZFZpZGVvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR5pKt5pS+XHJcblx0XCJwbGF5U3ZvZFZpZGVvXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3BsYXlTdm9kVmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlkajkuIvovb3ph4/orrDmlbBcclxuXHRcInZpcFdlZWtEb3duc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdmlwV2Vla0Rvd25zL2FwcGtleS9cIithcHBrZXksXHJcbi8qIOS4jemcgOimgUFQUEtFWeeahOe7n+S4gOaUvuWcqOS4i+mdoiAqL1xyXG5cdC8vIOWOu+aUr+S7mFxyXG5cdFwiZ2V0UGF5XCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvcGF5XCIsXHJcblx0Ly8g5pyN5Yqh5Y2P6K6uXHJcblx0XCJhZ3JlZW1lbnRcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3ByaXZhY3kvdHlwZS8xXCIsXHJcblx0Ly8g6ZqQ56eB5pS/562WXHJcblx0XCJwcml2YWN5XCIgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3ByaXZhY3kvdHlwZS8yXCIsXHJcbn1cclxuLy8g5piv5ZCm55m75b2VIOacqueZu+W9lei/lOWbnmZhbHNlXHJcbmNvbnN0IGdldExvZ2lucyA9IGZ1bmN0aW9uKClcclxueyBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5KTtcclxuICAgICAgICByZXR1cm4gcmVzID8gcmVzIDogZmFsc2U7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8vIOe8k+WtmOeZu+W9leS/oeaBr1xyXG5jb25zdCBzZXRMb2dpbnMgPSBmdW5jdGlvbihkYXRhKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5LCBkYXRhKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG4vLyDms6jplIDnmbvlvZVcclxuY29uc3QgZGVsTG9naW5zID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5KTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG4vKlxyXG4qIHJhbmRvbVdvcmQg5Lqn55Sf5Lu75oSP6ZW/5bqm6ZqP5py65a2X5q+N5pWw5a2X57uE5ZCIXHJcbiogcmFuZG9tRmxhZyDmmK/lkKbku7vmhI/plb/luqYgbWluIOS7u+aEj+mVv+W6puacgOWwj+S9jVvlm7rlrprkvY3mlbBdIG1heCDku7vmhI/plb/luqbmnIDlpKfkvY1cclxuKlxyXG4qIOeUn+aIkDbigJQxMuS9jemaj+acuuWtl+espuS4siDvvJpyYW5kb21Xb3JkKHRydWUsNiwxMilcclxuKiDnlJ/miJDpmo/mnLrnmoQ25L2N5a2X56ym5LiyIO+8miByYW5kb21Xb3JkKGZhbHNlLDYpIFxyXG4qIHR5cGUgOiB0cnVl57qv5pWw5a2XLGZhbHNl5Li65pWw5a2X5ZKM5a2X5q+NXHJcbiovXHJcbmNvbnN0IHJhbmRvbVdvcmQgPSBmdW5jdGlvbihyYW5kb21GbGFnPWZhbHNlLCB0eXBlPWZhbHNlLCBtaW4sIG1heClcclxue1xyXG5cdGxldCBzdHIgPSBcIlwiLCByYW5nZSA9IG1pbjtcclxuXHRpZih0eXBlKXtcclxuXHRcdHZhciBhcnIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcclxuXHR9ZWxzZXtcclxuXHRcdHZhciBhcnIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLFxyXG5cdFx0J2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJyxcclxuXHRcdCdtJywgJ24nLCAnbycsICdwJywgJ3EnLCAncicsICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLFxyXG5cdFx0J0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJyxcclxuXHRcdCdNJywgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onXTsgXHJcblx0fVxyXG5cdC8vJy0nLCcuJywnficsJyEnLCdAJywnIycsJyQnLCclJywnXicsJyYnLCcqJywnKCcsJyknLCdfJywnOicsJzwnLCc+JywnPydcclxuXHRpZihyYW5kb21GbGFnKXtcclxuXHRcdHJhbmdlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluOy8vIOS7u+aEj+mVv+W6plxyXG5cdH1cclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2U7IGkrKykge1xyXG5cdFx0dmFyIHBvcyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChhcnIubGVuZ3RoIC0gMSkpO1xyXG5cdFx0c3RyICs9IGFycltwb3NdO1xyXG5cdH1cclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcbi8vIOWQjOatpee8k+WtmOWbvueJh1xyXG5jb25zdCBpbWdDYWNoZSA9IGZ1bmN0aW9uKGltYWdlX3VybCwgYmFja0Z1bilcclxue1xyXG5cclxuXHJcblxyXG5cclxuXHR2YXIgaW1hZ2VfbmFtZSA9IHNwbGl0VXJsKGltYWdlX3VybCkgKyBhcHBrZXkgKyAnJztcclxuXHQvL3VuaS5yZW1vdmVTdG9yYWdlU3luYyhpbWFnZV9uYW1lKTtcclxuXHQvL2NvbnNvbGUubG9nKGltYWdlX25hbWUpXHJcblx0dmFyIGltZ1VybCA9IHVuaS5nZXRTdG9yYWdlU3luYyhpbWFnZV9uYW1lKTtcclxuXHQvLyDlrZjlnKjliJnor7vnvJPlrZggXHJcblx0aWYgKGltZ1VybCkge1xyXG5cdFx0Ly9pZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykgaW1nVXJsID0gXCJmaWxlOlwiICsgaW1nVXJsO1xyXG5cdFx0cGx1cy5pby5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGltZ1VybCwgZW50cnkgPT4ge1xyXG5cdFx0XHRlbnRyeS5maWxlKGZpbGUgPT4ge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coaW1nVXJsKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LCBlcnIgPT4ge1xyXG5cdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoaW1hZ2VfbmFtZSk7XHJcblx0XHR9KTtcclxuXHRcdGJhY2tGdW4oaW1nVXJsKTtcclxuXHRcdC8vY29uc29sZS5sb2coaW1nVXJsKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRiYWNrRnVuKGltYWdlX3VybCk7XHJcblx0XHQvL2NvbnNvbGUubG9nKGltYWdlX3VybCk7XHJcblx0XHQvLyDmnKzlnLDmsqHmnInnvJPlrZjliJnkuIvovb0gXHJcblx0XHR1bmkuZG93bmxvYWRGaWxlKHtcclxuXHRcdFx0dXJsOiBpbWFnZV91cmwsXHJcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMudGVtcEZpbGVQYXRoKTtcclxuXHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHR1bmkuc2F2ZUZpbGUoe1xyXG5cdFx0XHRcdFx0XHR0ZW1wRmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzYXZlZEZpbGVQYXRoID0gZS5zYXZlZEZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhpbWFnZV9uYW1lLCBzYXZlZEZpbGVQYXRoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbi8vIOiOt+W+l1VSTOS4reeahOaWh+S7tuWQjVxyXG5jb25zdCBzcGxpdFVybCA9IGZ1bmN0aW9uKGltZ1VybClcclxue1xyXG5cdGlmKCFpbWdVcmwpIHJldHVybiBmYWxzZTtcclxuXHR2YXIgaW1nQXJyID0gaW1nVXJsLnNwbGl0KCcvJyk7XHJcblx0dmFyIGZpbGVOYW1lID0gaW1nQXJyW2ltZ0Fyci5sZW5ndGggLSAxXTtcclxuXHRyZXR1cm4gZmlsZU5hbWU7XHJcbn1cclxuLy8g5Yqg6L295o+Q56S6XHJcbmNvbnN0IHNob3dUb2FzdCA9IGZ1bmN0aW9uKHRpdGxlID0gJycsIHRpbWVzID0gMTAwMCwgc3R5bGUgPSAnbm9uZScsIGltYWdlID0gJycpIFxyXG57XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRpY29uOiBzdHlsZSxcclxuXHRcdHRpdGxlOiB0aXRsZSxcclxuXHRcdG1hc2s6IHRydWUsXHJcblx0XHRkdXJhdGlvbjogdGltZXMsXHJcblx0XHRpbWFnZTogaW1hZ2VcclxuXHR9KTtcclxufVxyXG5jb25zdCBnZXRGaWxlU2l6ZSA9IGZ1bmN0aW9uKGZpbGVCeXRlKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdmFyIGZpbGVTaXplQnl0ZSA9IGZpbGVCeXRlO1xyXG5cdCAgICB2YXIgZmlsZVNpemVNc2cgPSBcIlwiO1xyXG5cdCAgICBpZiAoZmlsZVNpemVCeXRlIDwgMTA0ODU3NikgZmlsZVNpemVNc2cgPSAoZmlsZVNpemVCeXRlIC8gMTAyNCkudG9GaXhlZCgyKTtcclxuXHQgICAgZWxzZSBpZiAoZmlsZVNpemVCeXRlID09IDEwNDg1NzYpIGZpbGVTaXplTXNnID0gMTtcclxuXHQgICAgZWxzZSBpZiAoZmlsZVNpemVCeXRlID4gMTA0ODU3NiAmJiBmaWxlU2l6ZUJ5dGUgPCAxMDczNzQxODI0KSBmaWxlU2l6ZU1zZyA9IChmaWxlU2l6ZUJ5dGUgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpO1xyXG5cdCAgICBlbHNlIGlmIChmaWxlU2l6ZUJ5dGUgPiAxMDQ4NTc2ICYmIGZpbGVTaXplQnl0ZSA9PSAxMDczNzQxODI0KSBmaWxlU2l6ZU1zZyA9IFwiMUdCXCI7XHJcblx0ICAgIGVsc2UgaWYgKGZpbGVTaXplQnl0ZSA+IDEwNzM3NDE4MjQgJiYgZmlsZVNpemVCeXRlIDwgMTA5OTUxMTYyNzc3NikgZmlsZVNpemVNc2cgPSAoZmlsZVNpemVCeXRlIC8gKDEwMjQgKiAxMDI0ICogMTAyNCkpLnRvRml4ZWQoMik7XHJcblx0ICAgIGVsc2UgZmlsZVNpemVNc2cgPSBcIuaWh+S7tui2hei/hzFUQlwiO1xyXG5cdCAgICByZXR1cm4gZmlsZVNpemVNc2c7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdCAgICByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG4vLyDojrflj5borr7lpIdJRFxyXG5jb25zdCBnZXRNb2JpbGVEaWQgPSBmdW5jdGlvbihiYWNrRnVuKSBcclxue1xyXG5cdHZhciBwaG9uZSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdHZhciBkaWQgPSBwaG9uZS5kZXZpY2VJZDtcclxuXHRpZihkaWQubGVuZ3RoID4gMCl7XHJcblx0XHR2YXIgZGlkID0gZGlkLnNwbGl0KFwifFwiKS5maWx0ZXIoZnVuY3Rpb24ocikge1xyXG5cdFx0ICAgcmV0dXJuIHIgJiYgci50cmltKCk7XHJcblx0XHR9KTtcclxuXHRcdGJhY2tGdW4oZGlkW2RpZC5sZW5ndGggLSAxXSk7XHJcblx0fSBlbHNlIHtcclxuXHJcblx0XHRwbHVzLmRldmljZS5nZXRJbmZvKHtcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0aWYocGhvbmUucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKXtcclxuXHRcdFx0XHRcdHZhciBhcnIgPSBlLnV1aWQuc3BsaXQoXCIsXCIpO1xyXG5cdFx0XHRcdFx0ZGlkID0gYXJyWzBdO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0ZGlkID0gZS51dWlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZGlkID0gZ2V0TW9iaWxlUmFuZERpZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0YmFja0Z1bihkaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG59XHJcbi8vIOmaj+acuuiuvuWkh0lEXHJcbmNvbnN0IGdldE1vYmlsZVJhbmREaWQgPSBmdW5jdGlvbigpIFxyXG57XHJcblx0Y29uc3QgZGlkS2V5ID0gJ215X2RpZF8nK2FwcGtleTtcclxuXHRjb25zdCBnZXREaWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoZGlkS2V5KTtcclxuXHRpZiAoZ2V0RGlkKSB7XHJcblx0XHRyZXR1cm4gZ2V0RGlkO1xyXG5cdH1lbHNle1xyXG5cdFx0dmFyIHJhbmREaWQgPSByYW5kb21Xb3JkKGZhbHNlLCBmYWxzZSwgMTYsIDE2KTtcclxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYyhkaWRLZXksICdINScrcmFuZERpZCk7XHJcblx0XHRyZXR1cm4gcmFuZERpZDtcclxuXHR9XHRcclxufVxyXG4vLyDlhbPpl61BUFBcclxuY29uc3Qgb3V0QXBwID0gZnVuY3Rpb24oKSBcclxue1xyXG5cclxuXHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XHJcblx0XHRjYXNlICdhbmRyb2lkJzpcclxuXHRcdFx0cGx1cy5ydW50aW1lLnF1aXQoKTtcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnaW9zJzpcclxuXHRcdFx0cGx1cy5pb3MuaW1wb3J0KCdVSUFwcGxpY2F0aW9uJykuc2hhcmVkQXBwbGljYXRpb24oKS5wZXJmb3JtU2VsZWN0b3IoJ2V4aXQnKTtcclxuXHRcdGJyZWFrOyBcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuLy8g6Lez6L2s5pa55rOVXHJcbmNvbnN0IGp1bXBVcmwgPSBmdW5jdGlvbih1cmwsIHR5cGUgPSAnd2ViJywgZGVsdGEgPSAxKSBcclxue1xyXG5cdGlmICh1cmwgPT0gJyMnIHx8IHVybCA9PSAnJykgcmV0dXJuIGZhbHNlO1xyXG5cdGlmICh1cmwgPT0gJ2JhY2snKSB7XHJcblx0XHR2YXIgZGVsdGEgPSBwYXJzZUludCh0eXBlKSA/IHR5cGUgOiAxO1xyXG5cdFx0dW5pLm5hdmlnYXRlQmFjayh7IGRlbHRhOiBkZWx0YSB9KTtcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdC8vIOWOn+eql+WPo1xyXG5cdFx0Y2FzZSAnb2xkJzpcclxuXHRcdFx0dW5pLnJlTGF1bmNoKHsgdXJsOiB1cmwgfSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Ly8g5LiN5YWz6Zet5b2T5YmN6aG16Lez6L2sXHJcblx0XHRjYXNlICduZXcnOlxyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7IHVybDogdXJsIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdC8vIHRhYkJhclxyXG5cdFx0Y2FzZSAndGFiJzpcclxuXHRcdFx0dW5pLnN3aXRjaFRhYih7IHVybDogdXJsIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdC8vIOWFs+mXreW9k+WJjemhtei3s+i9rFxyXG5cdFx0Y2FzZSAnbmV3eCc6XHJcblx0XHRcdHVuaS5yZWRpcmVjdFRvKHsgdXJsOiB1cmwgfSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Ly8gQVBQ5YaF5omT5byA6ZO+5o6lXHJcblx0XHRjYXNlICdhcHAnOlxyXG5cdFx0XHR2YXIgYXBwID0gJy9wYWdlcy9qdW1wL2luZGV4P3U9Jyt1cmxcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhhcHApXHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHsgdXJsOiBhcHAgfSk7XHJcblx0XHRcdGJyZWFrO1x0XHJcblx0XHQvLyDot7Poh7PlpJbnva7mtY/mj73lmahcclxuXHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRwbHVzLnJ1bnRpbWUub3BlblVSTCh1cmwpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG59XHJcbi8vIOWkjeWItkg1K0FQUFxyXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24oc3RyKSBcclxue1xyXG5cdHZhciBjb250ZW50ID0gc3RyICsgJyc7XHJcblxyXG5cdHVuaS5zZXRDbGlwYm9hcmREYXRhKHtcclxuXHQgICAgZGF0YTogY29udGVudCxcclxuXHQgICAgc3VjY2VzczogKCk9PiB7XHJcblx0XHRcdHNob3dUb2FzdCgn5aSN5Yi25oiQ5YqfJywgMjAwMCk7XHJcblx0ICAgIH1cclxuXHR9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5jb25zdCBoNUNvcHkgPSBmdW5jdGlvbihjb250ZW50KVxyXG57XHJcblx0aWYgKCFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoJ2NvcHknKSkgcmV0dXJuIGZhbHNlXHJcblx0bGV0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcblx0dGV4dGFyZWEudmFsdWUgPSBjb250ZW50XHJcblx0dGV4dGFyZWEucmVhZE9ubHkgPSBcInJlYWRPbmx5XCJcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKVxyXG5cdHRleHRhcmVhLnNlbGVjdCgpIC8vIOmAieaLqeWvueixoVxyXG5cdHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIGNvbnRlbnQubGVuZ3RoKSAvL+aguOW/g1xyXG5cdGxldCByZXN1bHQgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIikgLy8g5omn6KGM5rWP6KeI5Zmo5aSN5Yi25ZG95LukXHJcblx0dGV4dGFyZWEucmVtb3ZlKClcclxuXHRyZXR1cm4gcmVzdWx0XHJcbn1cclxudmFyIGJnVmlldyA9IG51bGw7XHJcbi8vIOWIm+W7uuWOn+eUn1ZpZXfmjqfku7ZcclxuY29uc3QgY3JlYXRlVmlldyA9IGZ1bmN0aW9uKGhlaWdodCA9ICc1MHB4Jywgb3BhY2l0eT0nMC4zJywgdGV4dD0nJykgXHJcbntcclxuXHJcblx0LyogaWYodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycgJiYgaGVpZ2h0PT0nNTBweCcpe1xyXG5cdFx0aGVpZ2h0ID0gJzEwNXB4JztcclxuXHR9ICovXHJcblx0YmdWaWV3ID0gbmV3IHBsdXMubmF0aXZlT2JqLlZpZXcoJ2JnJywge1xyXG5cdFx0Ym90dG9tOiAnMHB4JyxcclxuXHRcdGxlZnQ6ICcwcHgnLFxyXG5cdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0b3BhY2l0eTogb3BhY2l0eSxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMSknXHJcblx0fSk7XHJcblx0aWYodGV4dCAhPSAnJyl7XHJcblx0XHRiZ1ZpZXcuZHJhd1RleHQodGV4dCwge3dpZGh0OiAnMTAwJScsaGVpZ2h0OicxMDAlJ30sIHtcclxuXHRcdFx0c2l6ZTogJzE4cHgnLFxyXG5cdFx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0XHQvL2JhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnXHJcblx0XHR9KTtcclxuXHR9XHJcblx0YmdWaWV3LnNob3coKTtcclxuXHJcbn1cclxuLy8g5YWz6Zet572p5bGCXHJcbmNvbnN0IGNsb3NlVmlldyA9IGZ1bmN0aW9uKCkgXHJcbntcclxuXHJcblx0YmdWaWV3LmNsb3NlKCk7XHJcblxyXG59XHJcbi8vIOaJk+eUteivnee7mXh4eFxyXG5jb25zdCBjYWxsVXAgPSBmdW5jdGlvbihudW1iZXIpXHJcbntcclxuXHJcblx0dW5pLm1ha2VQaG9uZUNhbGwoe1xyXG5cdCAgICBwaG9uZU51bWJlcjogbnVtYmVyICsgJycsXHJcblx0XHRmYWlsOiAoKT0+IHtcclxuXHRcdFx0YXBpLnNob3dUb2FzdCgn5pON5L2c5aSx6LSlJywgMjAwMCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcblxyXG59XHJcbmNvbnN0IGdldENvbnRhY3RzID0gZnVuY3Rpb24oYmFja0Z1bil7XHJcblxyXG5cclxuXHJcblxyXG5cdHBsdXMuY29udGFjdHMuZ2V0QWRkcmVzc0Jvb2socGx1cy5jb250YWN0cy5BRERSRVNTQk9PS19QSE9ORSwgKGFkZHJlc3Nib29rKT0+IHtcclxuXHRcdGFkZHJlc3Nib29rLmZpbmQoW1wiZGlzcGxheU5hbWVcIixcInBob25lTnVtYmVyc1wiXSwgKGNvbnRhY3RzKT0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhjb250YWN0cyk7XHJcblx0XHRcdGJhY2tGdW4oY29udGFjdHMpO1xyXG5cdFx0fSwgKCk9PiB7ICBcclxuXHRcdFx0YmFja0Z1bihmYWxzZSk7XHJcblx0XHR9LHsgbXVsdGlwbGU6dHJ1ZSB9KTtcclxuXHR9LCAoZSk9PiB7ICBcclxuXHRcdGJhY2tGdW4oZmFsc2UpO1xyXG5cdH0pOyAgXHJcblxyXG59XHJcbmNvbnN0IGZvcm1hdFNlY29uZHMgPSBmdW5jdGlvbih2YWx1ZSwgdHlwZSA9IDEpIHtcclxuXHRsZXQgcmVzdWx0ID0gcGFyc2VJbnQodmFsdWUpO1xyXG5cdGxldCBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA6IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCk7XHJcblx0bGV0IG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKTtcclxuXHRsZXQgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cdGxldCByZXMgPSAnJztcclxuXHRpZiAodHlwZSA9PSAxKSB7XHJcblx0XHRyZXMgKz0gYCR7aH06YDtcclxuXHRcdHJlcyArPSBgJHttfTpgO1xyXG5cdFx0cmVzICs9IGAke3N9YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVzICs9IGAke2h95pe2YDtcclxuXHRcdHJlcyArPSBgJHttfeWIhmA7XHJcblx0XHRyZXMgKz0gYCR7c33np5JgO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcbi8qIOiOt+WPlui/nOeoi+aWh+S7tuWkp+WwjyAqL1xyXG5jb25zdCBnZXRXZWJGaWxlU2l6ZSA9IGZ1bmN0aW9uKGZpbGVkID0gJycsIGJhY2tGdW4pIHtcclxuXHR2YXIgcmVzU2l6ZSA9IDA7XHJcblx0aWYgKGZpbGVkLmxlbmd0aCA8IDEpIHtcclxuXHRcdGJhY2tGdW4ocmVzU2l6ZSk7IFxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IGZpbGVkLFxyXG5cdFx0bWV0aG9kOiAnSEVBRCcsXHJcblx0XHRzdWNjZXNzOiAoZSkgPT4ge1xyXG5cdFx0XHRpZiAoZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdHJlc1NpemUgPSBnZXRGaWxlU2l6ZShlLmhlYWRlclsnQ29udGVudC1MZW5ndGgnXSk7Ly8g6LCD55So5Ye95pWw5o2i566X5Y2V5L2NXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRiYWNrRnVuKHJlc1NpemUpOyBcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4vLyBINeiOt+WPlua1j+iniOWZqOexu+Wei1xyXG5jb25zdCBpc0g1ID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIFN5cyA9IHsgJ3R5cGUnOidhcHAnLCAndmVyJzowIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRyZXR1cm4gU3lzO1xyXG59XHJcblxyXG5jb25zdCBzdHJfcmVwZWF0ID0gZnVuY3Rpb24oaSwgbSkge1xyXG4gICAgZm9yICh2YXIgbyA9IFtdOyBtID4gMDsgb1stLW1dID0gaSk7XHJcbiAgICByZXR1cm4gby5qb2luKCcnKTtcclxufVxyXG5cclxuLyogXHJcbnZhciBjbGFzc2ljID0gJC5zcHJpbnRmKCclcyAlZCUlICUuM2YnLCAnc3RyaW5nJywgNDAsIDMuMTQxNTkzKTsgXHJcbi8vIGNsYXNzaWMgPSAnc3RyaW5nIDQwJSAzLjE0MicgXHJcblxyXG52YXIgbmFtZWQgPSAkLnNwcmludGYoJyUobmFtZSlzOiAlKHZhbHVlKWQnLCB7bmFtZTogJ2FnZScsIHZhbHVlOiA0MH0pOyBcclxuLy8gbmFtZWQgPSAnYWdlOiA0MCdcclxuXHJcbnZhciBjbGFzc2ljID0gJC52c3ByaW50ZignJXMgJWQlJSAlLjNmJywgWydzdHJpbmcnLCA0MCwgMy4xNDE1OTNdKTsgXHJcbi8vIGNsYXNzaWMgPSAnc3RyaW5nIDQwJSAzLjE0MidcclxuXHJcbnZhciBuYW1lZCA9ICQudnNwcmludGYoJyUobmFtZSlzOiAlKHZhbHVlKWQnLCBbe25hbWU6ICdhZ2UnLCB2YWx1ZTogNDB9XSk7IFxyXG4vLyBuYW1lZCA9ICdhZ2U6IDQwJyBcclxuICovXHJcbmNvbnN0IHNwcmludGYgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpID0gMCwgYSwgZiA9IGFyZ3VtZW50c1tpKytdLCBvID0gW10sIG0sIHAsIGMsIHgsIHMgPSAnJztcclxuICAgIHdoaWxlIChmKSB7XHJcbiAgICAgICAgaWYgKG0gPSAvXlteXFx4MjVdKy8uZXhlYyhmKSkge1xyXG4gICAgICAgICAgICBvLnB1c2gobVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG0gPSAvXlxceDI1ezJ9Ly5leGVjKGYpKSB7XHJcbiAgICAgICAgICAgIG8ucHVzaCgnJScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtID0gL15cXHgyNSg/OihcXGQrKVxcJCk/KFxcKyk/KDB8J1teJF0pPygtKT8oXFxkKyk/KD86XFwuKFxcZCspKT8oW2ItZm9zdXhYXSkvLmV4ZWMoZikpIHtcclxuICAgICAgICAgICAgaWYgKCgoYSA9IGFyZ3VtZW50c1ttWzFdIHx8IGkrK10pID09IG51bGwpIHx8IChhID09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KCdUb28gZmV3IGFyZ3VtZW50cy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1tec10vLnRlc3QobVs3XSkgJiYgKHR5cGVvZihhKSAhPSAnbnVtYmVyJykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KCdFeHBlY3RpbmcgbnVtYmVyIGJ1dCBmb3VuZCAnICsgdHlwZW9mKGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1bN10pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2InOiBhID0gYS50b1N0cmluZygyKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjJzogYSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6IGEgPSBwYXJzZUludChhKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlJzogYSA9IG1bNl0gPyBhLnRvRXhwb25lbnRpYWwobVs2XSkgOiBhLnRvRXhwb25lbnRpYWwoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmJzogYSA9IG1bNl0gPyBwYXJzZUZsb2F0KGEpLnRvRml4ZWQobVs2XSkgOiBwYXJzZUZsb2F0KGEpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ28nOiBhID0gYS50b1N0cmluZyg4KTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzJzogYSA9ICgoYSA9IFN0cmluZyhhKSkgJiYgbVs2XSA/IGEuc3Vic3RyaW5nKDAsIG1bNl0pIDogYSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndSc6IGEgPSBNYXRoLmFicyhhKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd4JzogYSA9IGEudG9TdHJpbmcoMTYpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1gnOiBhID0gYS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSA9ICgvW2RlZl0vLnRlc3QobVs3XSkgJiYgbVsyXSAmJiBhID49IDAgPyAnKycrIGEgOiBhKTtcclxuICAgICAgICAgICAgYyA9IG1bM10gPyBtWzNdID09ICcwJyA/ICcwJyA6IG1bM10uY2hhckF0KDEpIDogJyAnO1xyXG4gICAgICAgICAgICB4ID0gbVs1XSAtIFN0cmluZyhhKS5sZW5ndGggLSBzLmxlbmd0aDtcclxuICAgICAgICAgICAgcCA9IG1bNV0gPyBzdHJfcmVwZWF0KGMsIHgpIDogJyc7XHJcbiAgICAgICAgICAgIG8ucHVzaChzICsgKG1bNF0gPyBhICsgcCA6IHAgKyBhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdygnSHVoID8hJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGYgPSBmLnN1YnN0cmluZyhtWzBdLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gby5qb2luKCcnKTtcclxufVxyXG5cclxuLyogSDXniYjmnYPml6Xlv5cgKi9cclxuY29uc3QgcHJpbnRMb2cgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zb2xlLmxvZygnID09PT09PT09PSBjb3B5cmlnaHQ6IOmtheaAneinhumikXY0ID09PT09PT09PSAnKTtcclxufVxyXG5cclxuLy8g5rOo5YaMXHJcbmV4cG9ydCBkZWZhdWx0IHsgXHJcblx0YXBwa2V5LFxyXG5cdGFwaVVybCxcclxuICAgIGFwaURhdGEsXHJcblx0Z2V0TG9naW5zLFxyXG5cdHNldExvZ2lucyxcclxuXHRkZWxMb2dpbnMsXHJcblx0cmFuZG9tV29yZCxcclxuXHRpbWdDYWNoZSxcclxuXHRzcGxpdFVybCxcclxuXHRzaG93VG9hc3QsXHJcblx0Z2V0RmlsZVNpemUsXHJcblx0Z2V0V2ViRG9tYWluLFxyXG5cdGdldE1vYmlsZURpZCxcclxuXHRvdXRBcHAsXHJcblx0anVtcFVybCxcclxuXHRjb3B5LFxyXG5cdGNyZWF0ZVZpZXcsXHJcblx0Y2xvc2VWaWV3LFxyXG5cdGNhbGxVcCxcclxuXHRnZXRDb250YWN0cyxcclxuXHRmb3JtYXRTZWNvbmRzLFxyXG5cdG5vd1VybCxcclxuXHRnZXRXZWJGaWxlU2l6ZSxcclxuXHRpc0g1LFxyXG5cdHByaW50TG9nLFxyXG5cdHNwcmludGZcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/svod/player.nvue?vue&type=style&index=0&id=e5905342&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_style_index_0_id_e5905342_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./player.nvue?vue&type=style&index=0&id=e5905342&scoped=true&lang=css&mpType=page */ 35);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_style_index_0_id_e5905342_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_style_index_0_id_e5905342_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_style_index_0_id_e5905342_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_style_index_0_id_e5905342_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_player_nvue_vue_type_style_index_0_id_e5905342_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/svod/player.nvue?vue&type=style&index=0&id=e5905342&scoped=true&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "width": "750rpx",
    "backgroundColor": "#1D1D28"
  },
  "buy-pop": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.8)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "watch-free": {
    "color": "#FF8F00",
    "fontSize": "12",
    "paddingTop": "20rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "10rpx"
  },
  "btn-right": {
    "backgroundImage": "linear-gradient(to right,#FF8F00, rgba(254,67,101,0.8))",
    "fontSize": "13",
    "color": "#FFFFFF",
    "paddingTop": "20rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "50rpx",
    "borderRadius": "20rpx"
  },
  "btn-left": {
    "backgroundColor": "rgba(255,255,255,0.3)",
    "fontSize": "13",
    "color": "#FFFFFF",
    "paddingTop": "20rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "50rpx",
    "borderRadius": "20rpx"
  },
  "buy-btn": {
    "flexDirection": "row",
    "marginTop": "30rpx"
  },
  "video-cover": {
    "width": "150rpx",
    "height": "150rpx",
    "borderRadius": "150rpx",
    "borderWidth": "2",
    "borderColor": "#F5F5F5"
  },
  "buy-content": {
    "alignItems": "center",
    "marginTop": "-25"
  },
  "user-content": {
    "marginTop": "20rpx",
    "marginRight": 0,
    "marginBottom": "30rpx",
    "marginLeft": 0,
    "fontSize": "14",
    "color": "#666666"
  },
  "user-date": {
    "fontSize": "12",
    "color": "#888888",
    "marginTop": "10rpx"
  },
  "user-nickname": {
    "fontSize": "15",
    "fontWeight": "600",
    "color": "#555555",
    "marginTop": "5rpx"
  },
  "user-info": {
    "flex": 1,
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F5F5F5",
    "flexDirection": "column"
  },
  "user-cover": {
    "width": "90rpx",
    "height": "90rpx",
    "borderRadius": "90rpx",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#F5F5F5",
    "marginRight": "25rpx",
    "backgroundColor": "rgba(0,0,0,0.1)"
  },
  "comment-send": {
    "backgroundImage": "linear-gradient(to right,#FF8F00, rgba(254,67,101,0.8))",
    "height": "35",
    "lineHeight": "35",
    "width": "130rpx",
    "marginTop": 0,
    "marginRight": "20rpx",
    "marginBottom": 0,
    "marginLeft": "20rpx",
    "borderRadius": "35",
    "color": "#FFFFFF",
    "textAlign": "center",
    "fontSize": "14"
  },
  "comment-input": {
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#F5F5F5",
    "fontSize": "12",
    "height": "35",
    "borderRadius": "35",
    "marginLeft": "20rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx",
    "flex": 1
  },
  "comment-bottom": {
    "height": "50",
    "alignItems": "center",
    "flexDirection": "row",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#F5F5F5",
    "backgroundColor": "#FFFFFF"
  },
  "comment-list-item": {
    "flexDirection": "row",
    "marginBottom": "30rpx"
  },
  "comment-list": {
    "paddingTop": 0,
    "paddingRight": "40rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "flex": 1
  },
  "comment-title": {
    "fontSize": "16",
    "fontWeight": "600",
    "color": "#000000"
  },
  "comment-head": {
    "flexDirection": "row",
    "height": "45",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "comment-content": {
    "width": "750rpx",
    "borderTopLeftRadius": "40rpx",
    "borderTopRightRadius": "40rpx",
    "borderBottomRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "backgroundColor": "#FFFFFF",
    "flexDirection": "column"
  },
  "pause-img": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "bottom": "150",
    "width": "750rpx",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "item-tag": {
    "backgroundColor": "rgba(0,0,0,0.5)",
    "fontSize": "12",
    "color": "#FFFFFF",
    "marginRight": "10rpx",
    "paddingTop": "10rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "15rpx"
  },
  "item-tag-list": {
    "flexDirection": "row",
    "marginTop": "15rpx",
    "marginRight": 0,
    "marginBottom": "15rpx",
    "marginLeft": 0
  },
  "svod-right-cover": {
    "borderRadius": "90rpx",
    "borderColor": "#FFFFFF",
    "borderWidth": "5rpx"
  },
  "svod-right-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "40rpx"
  },
  "svod-right": {
    "position": "absolute",
    "bottom": "90",
    "right": "30rpx",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "zIndex": 2
  },
  "svod-bottom": {
    "position": "absolute",
    "bottom": "60",
    "left": 0,
    "right": "140rpx",
    "paddingLeft": "20rpx",
    "paddingRight": "30rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "zIndex": 1
  },
  "icon": {
    "width": "66rpx",
    "height": "66rpx"
  },
  "load-img": {
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "zIndex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#1D1D28"
  },
  "is-buy": {
    "fontSize": "10",
    "color": "#FFFFFF",
    "backgroundImage": "linear-gradient(to right,#FF8F00, rgba(254,67,101,0.8))",
    "marginTop": "-18rpx",
    "height": "36rpx",
    "lineHeight": "36rpx",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "borderRadius": "10rpx"
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);