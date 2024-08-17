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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/* 5 */,
/* 6 */,
/* 7 */,
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
/* 29 */,
/* 30 */,
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
/* 32 */,
/* 33 */
/*!*********************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/common/api.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 20));\n// 接口域名\nvar apiUrl = \"http://v5_black_api.cqpig.cn\";\n// 接口文件\nvar interfaceFile = \"appapi\";\n// 与接口通讯的KEY\nvar appkey = 'abc123456';\n// 选择线路\nvar getWebDomain = function getWebDomain() {\n  var nowDomain = uni.getStorageSync('nowDomain_' + appkey);\n  if (nowDomain) {\n    return nowDomain;\n  } else {\n    return apiUrl;\n  }\n};\nvar nowUrl = getWebDomain();\n// 完整接口(域名+接口文件+接口方法)\nvar apiData = {\n  // 初始化接口\n  \"appInits\": nowUrl + \"/\" + interfaceFile + \"/appInit/appkey/\" + appkey,\n  // 获取APP版本信息\n  \"getVersion\": nowUrl + \"/\" + interfaceFile + \"/getVersion/appkey/\" + appkey,\n  // 首页数据\n  \"homeData\": nowUrl + \"/\" + interfaceFile + \"/homeMain/appkey/\" + appkey,\n  // 视频列表\n  \"videoData\": nowUrl + \"/\" + interfaceFile + \"/videoList/appkey/\" + appkey,\n  // 专题详情\n  \"getAlbum\": nowUrl + \"/\" + interfaceFile + \"/albumInfo/appkey/\" + appkey,\n  // 视频详情\n  \"videoInfo\": nowUrl + \"/\" + interfaceFile + \"/detail/appkey/\" + appkey,\n  // 添加收藏\n  \"addCollection\": nowUrl + \"/\" + interfaceFile + \"/addCollection/appkey/\" + appkey,\n  // 视频点赞\n  \"videoLike\": nowUrl + \"/\" + interfaceFile + \"/like/appkey/\" + appkey,\n  // 添加评论\n  \"addComment\": nowUrl + \"/\" + interfaceFile + \"/comment/appkey/\" + appkey,\n  // 评论列表\n  \"commentList\": nowUrl + \"/\" + interfaceFile + \"/commentList/appkey/\" + appkey,\n  // 统计用户在线接口\n  \"heartBeat\": nowUrl + \"/\" + interfaceFile + \"/heartbeat/appkey/\" + appkey,\n  // 登录接口\n  \"userLogin\": nowUrl + \"/\" + interfaceFile + \"/login/appkey/\" + appkey,\n  // 注册配置信息\n  \"getConfig\": nowUrl + \"/\" + interfaceFile + \"/getConfig/appkey/\" + appkey,\n  // 注册账号\n  \"userReg\": nowUrl + \"/\" + interfaceFile + \"/register/appkey/\" + appkey,\n  // 获取手机验证码\n  \"getMobileCode\": nowUrl + \"/\" + interfaceFile + \"/getMobileCode/appkey/\" + appkey,\n  // 读取个人信息\n  \"getInfo\": nowUrl + \"/\" + interfaceFile + \"/getUserInfo/appkey/\" + appkey,\n  // 签到\n  \"userSign\": nowUrl + \"/\" + interfaceFile + \"/userSign/appkey/\" + appkey,\n  // 我的钱包\n  \"myBalance\": nowUrl + \"/\" + interfaceFile + \"/balance/appkey/\" + appkey,\n  // 余额提现\n  \"getMoney\": nowUrl + \"/\" + interfaceFile + \"/getMoney/appkey/\" + appkey,\n  // 获取银行卡列表\n  \"getBank\": nowUrl + \"/\" + interfaceFile + \"/bankLists/appkey/\" + appkey,\n  // 获取用户银行卡列表\n  \"getUserBank\": nowUrl + \"/\" + interfaceFile + \"/userBankList/appkey/\" + appkey,\n  // 设置提现银行卡\n  \"setBank\": nowUrl + \"/\" + interfaceFile + \"/setDefaultBank/appkey/\" + appkey,\n  // 删除提现银行卡\n  \"delBank\": nowUrl + \"/\" + interfaceFile + \"/delBank/appkey/\" + appkey,\n  // 添加提现银行卡\n  \"addBank\": nowUrl + \"/\" + interfaceFile + \"/addBank/appkey/\" + appkey,\n  // 提现记录\n  \"getDeposit\": nowUrl + \"/\" + interfaceFile + \"/depositLog/appkey/\" + appkey,\n  // 账户明细\n  \"getDetailed\": nowUrl + \"/\" + interfaceFile + \"/detailedList/appkey/\" + appkey,\n  // 修改昵称,手机号,头像\n  \"editInfo\": nowUrl + \"/\" + interfaceFile + \"/editInfo/appkey/\" + appkey,\n  // 上传接口\n  \"upload\": nowUrl + \"/\" + interfaceFile + \"/upload/appkey/\" + appkey,\n  // 收藏列表\n  \"getColl\": nowUrl + \"/\" + interfaceFile + \"/collectionList/appkey/\" + appkey,\n  // 删除收藏视频\n  \"delColl\": nowUrl + \"/\" + interfaceFile + \"/deleteCollection/appkey/\" + appkey,\n  // 我的足迹\n  \"getWatchLog\": nowUrl + \"/\" + interfaceFile + \"/getWatchLog/appkey/\" + appkey,\n  // 短视频购买记录\n  \"getSvodBuyLog\": nowUrl + \"/\" + interfaceFile + \"/getSvodBuyLog/appkey/\" + appkey,\n  // 删除我的足迹\n  \"delWatchLog\": nowUrl + \"/\" + interfaceFile + \"/delWatchLog/appkey/\" + appkey,\n  // 我的分享\n  \"myShare\": nowUrl + \"/\" + interfaceFile + \"/myShare/appkey/\" + appkey,\n  // 分享记录\n  \"getShareLog\": nowUrl + \"/\" + interfaceFile + \"/shareLog/appkey/\" + appkey,\n  // 修改密码\n  \"changePwd\": nowUrl + \"/\" + interfaceFile + \"/changePwd/appkey/\" + appkey,\n  // 充值套餐\n  \"getCharge\": nowUrl + \"/\" + interfaceFile + \"/getChargeData/appkey/\" + appkey,\n  // 支付方式\n  \"getPayList\": nowUrl + \"/\" + interfaceFile + \"/getPayList/appkey/\" + appkey,\n  // 创建订单\n  \"createOrder\": nowUrl + \"/\" + interfaceFile + \"/createOrder/appkey/\" + appkey,\n  // 关于我们\n  \"getAbout\": nowUrl + \"/\" + interfaceFile + \"/getAbout/appkey/\" + appkey,\n  // 活动列表\n  \"getGameList\": nowUrl + \"/\" + interfaceFile + \"/getGameList/appkey/\" + appkey,\n  // 幸运转盘\n  \"getPrize\": nowUrl + \"/\" + interfaceFile + \"/getPrize/appkey/\" + appkey,\n  // 购买视频\n  \"buyVideo\": nowUrl + \"/\" + interfaceFile + \"/buy/appkey/\" + appkey,\n  // 热门搜索\n  \"getHotSearch\": nowUrl + \"/\" + interfaceFile + \"/getHotSearch/appkey/\" + appkey,\n  // 发起搜索\n  \"searchVideo\": nowUrl + \"/\" + interfaceFile + \"/searchVideo/appkey/\" + appkey,\n  // 清空搜索记录\n  \"emptySearch\": nowUrl + \"/\" + interfaceFile + \"/emptySearch/appkey/\" + appkey,\n  // 获广告\n  \"getAd\": nowUrl + \"/\" + interfaceFile + \"/getAd/appkey/\" + appkey,\n  // 获取分享者id\n  \"getSharePid\": nowUrl + \"/\" + interfaceFile + \"/getSharePid/appkey/\" + appkey,\n  // 发帖图片\n  \"uploadImg\": nowUrl + \"/\" + interfaceFile + \"/uploadImg/appkey/\" + appkey,\n  // 广场首页数据\n  \"getPlazaList\": nowUrl + \"/\" + interfaceFile + \"/communityHomepage/appkey/\" + appkey,\n  // 帖子详情获取评论\n  \"getComment\": nowUrl + \"/\" + interfaceFile + \"/getPostComment/appkey/\" + appkey,\n  // 帖子详情广告\n  \"getAdInfo\": nowUrl + \"/\" + interfaceFile + \"/getAdInfo/appkey/\" + appkey,\n  // 发帖\n  \"sendComment\": nowUrl + \"/\" + interfaceFile + \"/sendPostComment/appkey/\" + appkey,\n  // 个人主页\n  \"homePage\": nowUrl + \"/\" + interfaceFile + \"/homePage/appkey/\" + appkey,\n  // 上传配置\n  \"uploadConfig\": nowUrl + \"/\" + interfaceFile + \"/getUploadConfig/appkey/\" + appkey,\n  // 顶部导航\n  \"getTopMenu\": nowUrl + \"/\" + interfaceFile + \"/getTopMenu/appkey/\" + appkey,\n  /********************** 直播相关 **********************/\n  // 获取主播列表\n  \"getAnchorList\": nowUrl + \"/\" + interfaceFile + \"/getAnchorList/appkey/\" + appkey,\n  // 购买付费房\n  \"buyGoldRoom\": nowUrl + \"/\" + interfaceFile + \"/buyGoldRoom/appkey/\" + appkey,\n  // 查询用户是否为主播\n  \"getUserAnchor\": nowUrl + \"/\" + interfaceFile + \"/getUserIsAnchor/appkey/\" + appkey,\n  // 签约主播\n  \"regAnchor\": nowUrl + \"/\" + interfaceFile + \"/regAnchor/appkey/\" + appkey,\n  // 进入直播间\n  \"playerConfig\": nowUrl + \"/\" + interfaceFile + \"/enterTheStudio/appkey/\" + appkey,\n  // 关注主播\n  \"focusAnchor\": nowUrl + \"/\" + interfaceFile + \"/focusOnTheAnchor/appkey/\" + appkey,\n  // 退出直播间\n  \"logoutRoom\": nowUrl + \"/\" + interfaceFile + \"/exitTheStudio/appkey/\" + appkey,\n  // 打赏主播\n  \"giveAnchor\": nowUrl + \"/\" + interfaceFile + \"/rewardTheAnchor/appkey/\" + appkey,\n  // 开始直播\n  \"liveInitData\": nowUrl + \"/\" + interfaceFile + \"/startLiveBroadcast/appkey/\" + appkey,\n  // 保存房间信息\n  \"saveRoomData\": nowUrl + \"/\" + interfaceFile + \"/saveRoomData/appkey/\" + appkey,\n  // 上传封面图片\n  \"roomUploadImg\": nowUrl + \"/\" + interfaceFile + \"/roomUploadImg/appkey/\" + appkey,\n  // 结束直播并结算\n  \"endLivePlayer\": nowUrl + \"/\" + interfaceFile + \"/endLiveBroadcast/appkey/\" + appkey,\n  // 禁言与恢复\n  \"updateSendMs\": nowUrl + \"/\" + interfaceFile + \"/updateSendMs/appkey/\" + appkey,\n  // 主播踢人出房间\n  \"anchorOutUser\": nowUrl + \"/\" + interfaceFile + \"/anchorOutUser/appkey/\" + appkey,\n  // 图片 + 资讯\n  \"getPicture\": nowUrl + \"/\" + interfaceFile + \"/getPicture/appkey/\" + appkey,\n  // 购买图片\n  \"buyPicture\": nowUrl + \"/\" + interfaceFile + \"/buyPicture/appkey/\" + appkey,\n  // 图片详情\n  \"pictureInfo\": nowUrl + \"/\" + interfaceFile + \"/pictureInfo/appkey/\" + appkey,\n  // app内打开H5\n  \"openH5Url\": nowUrl + \"/\" + interfaceFile + \"/openH5Url/appkey/\" + appkey,\n  // 上传试看时间\n  \"updateTryTime\": nowUrl + \"/\" + interfaceFile + \"/updateTryTime/appkey/\" + appkey,\n  // 获取专题列表\n  \"getAlbumList\": nowUrl + \"/\" + interfaceFile + \"/getAlbumList/appkey/\" + appkey,\n  // 我的团队\n  \"getUserTeam\": nowUrl + \"/\" + interfaceFile + \"/getUserTeam/appkey/\" + appkey,\n  // 直播记录\n  \"getPlayerLog\": nowUrl + \"/\" + interfaceFile + \"/getPlayerLog/appkey/\" + appkey,\n  // 礼物记录\n  \"getPlayerGift\": nowUrl + \"/\" + interfaceFile + \"/getPlayerGift/appkey/\" + appkey,\n  // 长视频分类筛选\n  \"getFilterData\": nowUrl + \"/\" + interfaceFile + \"/getFilterData/appkey/\" + appkey,\n  // 长视频分类筛选视频\n  \"getFilters\": nowUrl + \"/\" + interfaceFile + \"/getFilterVideo/appkey/\" + appkey,\n  // 长视频\n  \"getClassData\": nowUrl + \"/\" + interfaceFile + \"/getClassData/appkey/\" + appkey,\n  // 长视频下分类视频\n  \"getClassVideo\": nowUrl + \"/\" + interfaceFile + \"/getClassVideoData/appkey/\" + appkey,\n  // 长视频标签\n  \"getTagData\": nowUrl + \"/\" + interfaceFile + \"/getTagData/appkey/\" + appkey,\n  // 短视频\n  \"getSvodClass\": nowUrl + \"/\" + interfaceFile + \"/getSvodClassData/appkey/\" + appkey,\n  // 大分类短视频\n  \"getSvodData\": nowUrl + \"/\" + interfaceFile + \"/getSvodClassVideoData/appkey/\" + appkey,\n  // 加载短视频\n  \"getSvodMain\": nowUrl + \"/\" + interfaceFile + \"/getSvodMain/appkey/\" + appkey,\n  // 扣除免费次数\n  \"updateFree\": nowUrl + \"/\" + interfaceFile + \"/updateFree/appkey/\" + appkey,\n  // 金币购买视频\n  \"goldBuyVideo\": nowUrl + \"/\" + interfaceFile + \"/goldBuyVideo/appkey/\" + appkey,\n  // 点赞\n  \"likeSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/likeSvodVideo/appkey/\" + appkey,\n  // 短视频评论列表\n  \"svodVideoComm\": nowUrl + \"/\" + interfaceFile + \"/svodVideoComment/appkey/\" + appkey,\n  // 短视频评论\n  \"sendVideoComm\": nowUrl + \"/\" + interfaceFile + \"/sendVideoComment/appkey/\" + appkey,\n  // 按标签获取短视频\n  \"tagSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/tagSvodVideo/appkey/\" + appkey,\n  // 短视频播放\n  \"playSvodVideo\": nowUrl + \"/\" + interfaceFile + \"/playSvodVideo/appkey/\" + appkey,\n  // 周下载量记数\n  \"vipWeekDowns\": nowUrl + \"/\" + interfaceFile + \"/vipWeekDowns/appkey/\" + appkey,\n  /* 不需要APPKEY的统一放在下面 */\n  // 去支付\n  \"getPay\": nowUrl + \"/\" + interfaceFile + \"/pay\",\n  // 服务协议\n  \"agreement\": nowUrl + \"/\" + interfaceFile + \"/privacy/type/1\",\n  // 隐私政策\n  \"privacy\": nowUrl + \"/\" + interfaceFile + \"/privacy/type/2\"\n};\n// 是否登录 未登录返回false\nvar getLogins = function getLogins() {\n  try {\n    var res = uni.getStorageSync('userInfo_' + appkey);\n    return res ? res : false;\n  } catch (e) {\n    return false;\n  }\n};\n// 缓存登录信息\nvar setLogins = function setLogins(data) {\n  try {\n    uni.setStorageSync('userInfo_' + appkey, data);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};\n// 注销登录\nvar delLogins = function delLogins() {\n  try {\n    uni.removeStorageSync('userInfo_' + appkey);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};\n/*\r\n* randomWord 产生任意长度随机字母数字组合\r\n* randomFlag 是否任意长度 min 任意长度最小位[固定位数] max 任意长度最大位\r\n*\r\n* 生成6—12位随机字符串 ：randomWord(true,6,12)\r\n* 生成随机的6位字符串 ： randomWord(false,6) \r\n* type : true纯数字,false为数字和字母\r\n*/\nvar randomWord = function randomWord() {\n  var randomFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var min = arguments.length > 2 ? arguments[2] : undefined;\n  var max = arguments.length > 3 ? arguments[3] : undefined;\n  var str = \"\",\n    range = min;\n  if (type) {\n    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];\n  } else {\n    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\n  }\n  //'-','.','~','!','@','#','$','%','^','&','*','(',')','_',':','<','>','?'\n  if (randomFlag) {\n    range = Math.round(Math.random() * (max - min)) + min; // 任意长度\n  }\n\n  for (var i = 0; i < range; i++) {\n    var pos = Math.round(Math.random() * (arr.length - 1));\n    str += arr[pos];\n  }\n  return str;\n};\n// 同步缓存图片\nvar imgCache = function imgCache(image_url, backFun) {\n  var image_name = splitUrl(image_url) + appkey + '';\n  //uni.removeStorageSync(image_name);\n  //console.log(image_name)\n  var imgUrl = uni.getStorageSync(image_name);\n  // 存在则读缓存 \n  if (imgUrl) {\n    //if(uni.getSystemInfoSync().platform == 'ios') imgUrl = \"file:\" + imgUrl;\n    plus.io.resolveLocalFileSystemURL(imgUrl, function (entry) {\n      entry.file(function (file) {\n        //console.log(imgUrl);\n      });\n    }, function (err) {\n      uni.removeStorageSync(image_name);\n    });\n    backFun(imgUrl);\n    //console.log(imgUrl)\n  } else {\n    backFun(image_url);\n    //console.log(image_url);\n    // 本地没有缓存则下载 \n    uni.downloadFile({\n      url: image_url,\n      success: function success(res) {\n        //console.log(res.tempFilePath);\n        if (res.statusCode == 200) {\n          uni.saveFile({\n            tempFilePath: res.tempFilePath,\n            success: function success(e) {\n              var savedFilePath = e.savedFilePath;\n              uni.setStorageSync(image_name, savedFilePath);\n            }\n          });\n        }\n      }\n    });\n  }\n};\n// 获得URL中的文件名\nvar splitUrl = function splitUrl(imgUrl) {\n  if (!imgUrl) return false;\n  var imgArr = imgUrl.split('/');\n  var fileName = imgArr[imgArr.length - 1];\n  return fileName;\n};\n// 加载提示\nvar showToast = function showToast() {\n  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;\n  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';\n  var image = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n  uni.showToast({\n    icon: style,\n    title: title,\n    mask: true,\n    duration: times,\n    image: image\n  });\n};\nvar getFileSize = function getFileSize(fileByte) {\n  try {\n    var fileSizeByte = fileByte;\n    var fileSizeMsg = \"\";\n    if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2);else if (fileSizeByte == 1048576) fileSizeMsg = 1;else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2);else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = \"1GB\";else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2);else fileSizeMsg = \"文件超过1TB\";\n    return fileSizeMsg;\n  } catch (e) {\n    return false;\n  }\n};\n\n// 获取设备ID\nvar getMobileDid = function getMobileDid(backFun) {\n  var phone = uni.getSystemInfoSync();\n  var did = phone.deviceId;\n  if (did.length > 0) {\n    var did = did.split(\"|\").filter(function (r) {\n      return r && r.trim();\n    });\n    backFun(did[did.length - 1]);\n  } else {\n    plus.device.getInfo({\n      success: function success(e) {\n        if (phone.platform == 'android') {\n          var arr = e.uuid.split(\",\");\n          did = arr[0];\n        } else {\n          did = e.uuid;\n        }\n      },\n      fail: function fail(e) {\n        did = getMobileRandDid();\n      },\n      complete: function complete(e) {\n        backFun(did);\n      }\n    });\n  }\n};\n// 随机设备ID\nvar getMobileRandDid = function getMobileRandDid() {\n  var didKey = 'my_did_' + appkey;\n  var getDid = uni.getStorageSync(didKey);\n  if (getDid) {\n    return getDid;\n  } else {\n    var randDid = randomWord(false, false, 16, 16);\n    uni.setStorageSync(didKey, 'H5' + randDid);\n    return randDid;\n  }\n};\n// 关闭APP\nvar outApp = function outApp() {\n  switch (uni.getSystemInfoSync().platform) {\n    case 'android':\n      plus.runtime.quit();\n      break;\n    case 'ios':\n      plus.ios.import('UIApplication').sharedApplication().performSelector('exit');\n      break;\n  }\n};\n// 跳转方法\nvar jumpUrl = function jumpUrl(url) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'web';\n  var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  return function (delta) {\n    if (url == '#' || url == '') return false;\n    if (url == 'back') {\n      var delta = parseInt(type) ? type : 1;\n      uni.navigateBack({\n        delta: delta\n      });\n      return;\n    }\n    switch (type) {\n      // 原窗口\n      case 'old':\n        uni.reLaunch({\n          url: url\n        });\n        break;\n      // 不关闭当前页跳转\n      case 'new':\n        uni.navigateTo({\n          url: url\n        });\n        break;\n      // tabBar\n      case 'tab':\n        uni.switchTab({\n          url: url\n        });\n        break;\n      // 关闭当前页跳转\n      case 'newx':\n        uni.redirectTo({\n          url: url\n        });\n        break;\n      // APP内打开链接\n      case 'app':\n        var app = '/pages/jump/index?u=' + url;\n        //console.log(app)\n        uni.navigateTo({\n          url: app\n        });\n        break;\n      // 跳至外置浏揽器\n      default:\n        plus.runtime.openURL(url);\n    }\n  }(delta);\n};\n// 复制H5+APP\nvar copy = function copy(str) {\n  var content = str + '';\n  uni.setClipboardData({\n    data: content,\n    success: function success() {\n      showToast('复制成功', 2000);\n    }\n  });\n};\nvar h5Copy = function h5Copy(content) {\n  if (!document.queryCommandSupported('copy')) return false;\n  var textarea = document.createElement(\"textarea\");\n  textarea.value = content;\n  textarea.readOnly = \"readOnly\";\n  document.body.appendChild(textarea);\n  textarea.select(); // 选择对象\n  textarea.setSelectionRange(0, content.length); //核心\n  var result = document.execCommand(\"copy\"); // 执行浏览器复制命令\n  textarea.remove();\n  return result;\n};\nvar bgView = null;\n// 创建原生View控件\nvar createView = function createView() {\n  var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '50px';\n  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.3';\n  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  /* if(uni.getSystemInfoSync().platform == 'ios' && height=='50px'){\r\n  \theight = '105px';\r\n  } */\n  bgView = new plus.nativeObj.View('bg', {\n    bottom: '0px',\n    left: '0px',\n    height: height,\n    width: '100%',\n    opacity: opacity,\n    backgroundColor: 'rgba(0,0,0,1)'\n  });\n  if (text != '') {\n    bgView.drawText(text, {\n      widht: '100%',\n      height: '100%'\n    }, {\n      size: '18px',\n      color: '#fff'\n      //backgroundColor: '#FFFFFF'\n    });\n  }\n\n  bgView.show();\n};\n// 关闭罩层\nvar closeView = function closeView() {\n  bgView.close();\n};\n// 打电话给xxx\nvar callUp = function callUp(number) {\n  uni.makePhoneCall({\n    phoneNumber: number + '',\n    fail: function fail() {\n      api.showToast('操作失败', 2000);\n    }\n  });\n};\nvar getContacts = function getContacts(backFun) {\n  plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {\n    addressbook.find([\"displayName\", \"phoneNumbers\"], function (contacts) {\n      //console.log(contacts);\n      backFun(contacts);\n    }, function () {\n      backFun(false);\n    }, {\n      multiple: true\n    });\n  }, function (e) {\n    backFun(false);\n  });\n};\nvar formatSeconds = function formatSeconds(value) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var result = parseInt(value);\n  var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n  var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);\n  var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n  var res = '';\n  if (type == 1) {\n    res += \"\".concat(h, \":\");\n    res += \"\".concat(m, \":\");\n    res += \"\".concat(s);\n  } else {\n    res += \"\".concat(h, \"\\u65F6\");\n    res += \"\".concat(m, \"\\u5206\");\n    res += \"\".concat(s, \"\\u79D2\");\n  }\n  return res;\n};\n/* 获取远程文件大小 */\nvar getWebFileSize = function getWebFileSize() {\n  var filed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var backFun = arguments.length > 1 ? arguments[1] : undefined;\n  var resSize = 0;\n  if (filed.length < 1) {\n    backFun(resSize);\n    return;\n  }\n  uni.request({\n    url: filed,\n    method: 'HEAD',\n    success: function success(e) {\n      if (e.statusCode == 200) {\n        resSize = getFileSize(e.header['Content-Length']); // 调用函数换算单位\n      }\n    },\n\n    complete: function complete() {\n      backFun(resSize);\n    }\n  });\n};\n// H5获取浏览器类型\nvar isH5 = function isH5() {\n  var Sys = {\n    'type': 'app',\n    'ver': 0\n  };\n  return Sys;\n};\nvar str_repeat = function str_repeat(i, m) {\n  for (var o = []; m > 0; o[--m] = i) {\n    ;\n  }\n  return o.join('');\n};\n\n/* \r\nvar classic = $.sprintf('%s %d%% %.3f', 'string', 40, 3.141593); \r\n// classic = 'string 40% 3.142' \r\n\r\nvar named = $.sprintf('%(name)s: %(value)d', {name: 'age', value: 40}); \r\n// named = 'age: 40'\r\n\r\nvar classic = $.vsprintf('%s %d%% %.3f', ['string', 40, 3.141593]); \r\n// classic = 'string 40% 3.142'\r\n\r\nvar named = $.vsprintf('%(name)s: %(value)d', [{name: 'age', value: 40}]); \r\n// named = 'age: 40' \r\n */\nvar sprintf = function sprintf() {\n  var i = 0,\n    a,\n    f = arguments[i++],\n    o = [],\n    m,\n    p,\n    c,\n    x,\n    s = '';\n  while (f) {\n    if (m = /^[^\\x25]+/.exec(f)) {\n      o.push(m[0]);\n    } else if (m = /^\\x25{2}/.exec(f)) {\n      o.push('%');\n    } else if (m = /^\\x25(?:(\\d+)\\$)?(\\+)?(0|'[^$])?(-)?(\\d+)?(?:\\.(\\d+))?([b-fosuxX])/.exec(f)) {\n      if ((a = arguments[m[1] || i++]) == null || a == undefined) {\n        throw 'Too few arguments.';\n      }\n      if (/[^s]/.test(m[7]) && typeof a != 'number') {\n        throw 'Expecting number but found ' + (0, _typeof2.default)(a);\n      }\n      switch (m[7]) {\n        case 'b':\n          a = a.toString(2);\n          break;\n        case 'c':\n          a = String.fromCharCode(a);\n          break;\n        case 'd':\n          a = parseInt(a);\n          break;\n        case 'e':\n          a = m[6] ? a.toExponential(m[6]) : a.toExponential();\n          break;\n        case 'f':\n          a = m[6] ? parseFloat(a).toFixed(m[6]) : parseFloat(a);\n          break;\n        case 'o':\n          a = a.toString(8);\n          break;\n        case 's':\n          a = (a = String(a)) && m[6] ? a.substring(0, m[6]) : a;\n          break;\n        case 'u':\n          a = Math.abs(a);\n          break;\n        case 'x':\n          a = a.toString(16);\n          break;\n        case 'X':\n          a = a.toString(16).toUpperCase();\n          break;\n      }\n      a = /[def]/.test(m[7]) && m[2] && a >= 0 ? '+' + a : a;\n      c = m[3] ? m[3] == '0' ? '0' : m[3].charAt(1) : ' ';\n      x = m[5] - String(a).length - s.length;\n      p = m[5] ? str_repeat(c, x) : '';\n      o.push(s + (m[4] ? a + p : p + a));\n    } else {\n      throw 'Huh ?!';\n    }\n    f = f.substring(m[0].length);\n  }\n  return o.join('');\n};\n\n/* H5版权日志 */\nvar printLog = function printLog() {\n  __f__(\"log\", ' ========= copyright: 魅思视频v4 ========= ', \" at common/api.js:702\");\n};\n\n// 注册\nvar _default = {\n  appkey: appkey,\n  apiUrl: apiUrl,\n  apiData: apiData,\n  getLogins: getLogins,\n  setLogins: setLogins,\n  delLogins: delLogins,\n  randomWord: randomWord,\n  imgCache: imgCache,\n  splitUrl: splitUrl,\n  showToast: showToast,\n  getFileSize: getFileSize,\n  getWebDomain: getWebDomain,\n  getMobileDid: getMobileDid,\n  outApp: outApp,\n  jumpUrl: jumpUrl,\n  copy: copy,\n  createView: createView,\n  closeView: closeView,\n  callUp: callUp,\n  getContacts: getContacts,\n  formatSeconds: formatSeconds,\n  nowUrl: nowUrl,\n  getWebFileSize: getWebFileSize,\n  isH5: isH5,\n  printLog: printLog,\n  sprintf: sprintf\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 31)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2FwaS5qcyJdLCJuYW1lcyI6WyJhcGlVcmwiLCJpbnRlcmZhY2VGaWxlIiwiYXBwa2V5IiwiZ2V0V2ViRG9tYWluIiwibm93RG9tYWluIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJub3dVcmwiLCJhcGlEYXRhIiwiZ2V0TG9naW5zIiwicmVzIiwiZSIsInNldExvZ2lucyIsImRhdGEiLCJzZXRTdG9yYWdlU3luYyIsImRlbExvZ2lucyIsInJlbW92ZVN0b3JhZ2VTeW5jIiwicmFuZG9tV29yZCIsInJhbmRvbUZsYWciLCJ0eXBlIiwibWluIiwibWF4Iiwic3RyIiwicmFuZ2UiLCJhcnIiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJpIiwicG9zIiwibGVuZ3RoIiwiaW1nQ2FjaGUiLCJpbWFnZV91cmwiLCJiYWNrRnVuIiwiaW1hZ2VfbmFtZSIsInNwbGl0VXJsIiwiaW1nVXJsIiwicGx1cyIsImlvIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsImVudHJ5IiwiZmlsZSIsImVyciIsImRvd25sb2FkRmlsZSIsInVybCIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwic2F2ZUZpbGUiLCJ0ZW1wRmlsZVBhdGgiLCJzYXZlZEZpbGVQYXRoIiwiaW1nQXJyIiwic3BsaXQiLCJmaWxlTmFtZSIsInNob3dUb2FzdCIsInRpdGxlIiwidGltZXMiLCJzdHlsZSIsImltYWdlIiwiaWNvbiIsIm1hc2siLCJkdXJhdGlvbiIsImdldEZpbGVTaXplIiwiZmlsZUJ5dGUiLCJmaWxlU2l6ZUJ5dGUiLCJmaWxlU2l6ZU1zZyIsInRvRml4ZWQiLCJnZXRNb2JpbGVEaWQiLCJwaG9uZSIsImdldFN5c3RlbUluZm9TeW5jIiwiZGlkIiwiZGV2aWNlSWQiLCJmaWx0ZXIiLCJyIiwidHJpbSIsImRldmljZSIsImdldEluZm8iLCJwbGF0Zm9ybSIsInV1aWQiLCJmYWlsIiwiZ2V0TW9iaWxlUmFuZERpZCIsImNvbXBsZXRlIiwiZGlkS2V5IiwiZ2V0RGlkIiwicmFuZERpZCIsIm91dEFwcCIsInJ1bnRpbWUiLCJxdWl0IiwiaW9zIiwiaW1wb3J0Iiwic2hhcmVkQXBwbGljYXRpb24iLCJwZXJmb3JtU2VsZWN0b3IiLCJqdW1wVXJsIiwiZGVsdGEiLCJwYXJzZUludCIsIm5hdmlnYXRlQmFjayIsInJlTGF1bmNoIiwibmF2aWdhdGVUbyIsInN3aXRjaFRhYiIsInJlZGlyZWN0VG8iLCJhcHAiLCJvcGVuVVJMIiwiY29weSIsImNvbnRlbnQiLCJzZXRDbGlwYm9hcmREYXRhIiwiaDVDb3B5IiwiZG9jdW1lbnQiLCJxdWVyeUNvbW1hbmRTdXBwb3J0ZWQiLCJ0ZXh0YXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInJlYWRPbmx5IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZXN1bHQiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImJnVmlldyIsImNyZWF0ZVZpZXciLCJoZWlnaHQiLCJvcGFjaXR5IiwidGV4dCIsIm5hdGl2ZU9iaiIsIlZpZXciLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3VGV4dCIsIndpZGh0Iiwic2l6ZSIsImNvbG9yIiwic2hvdyIsImNsb3NlVmlldyIsImNsb3NlIiwiY2FsbFVwIiwibnVtYmVyIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwiYXBpIiwiZ2V0Q29udGFjdHMiLCJjb250YWN0cyIsImdldEFkZHJlc3NCb29rIiwiQUREUkVTU0JPT0tfUEhPTkUiLCJhZGRyZXNzYm9vayIsImZpbmQiLCJtdWx0aXBsZSIsImZvcm1hdFNlY29uZHMiLCJoIiwiZmxvb3IiLCJtIiwicyIsImdldFdlYkZpbGVTaXplIiwiZmlsZWQiLCJyZXNTaXplIiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsImlzSDUiLCJTeXMiLCJzdHJfcmVwZWF0IiwibyIsImpvaW4iLCJzcHJpbnRmIiwiYSIsImYiLCJhcmd1bWVudHMiLCJwIiwiYyIsIngiLCJleGVjIiwicHVzaCIsInVuZGVmaW5lZCIsInRlc3QiLCJ0b1N0cmluZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInRvRXhwb25lbnRpYWwiLCJwYXJzZUZsb2F0Iiwic3Vic3RyaW5nIiwiYWJzIiwidG9VcHBlckNhc2UiLCJjaGFyQXQiLCJwcmludExvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE1BQU0sR0FBRyw4QkFBOEI7QUFDN0M7QUFDQSxJQUFNQyxhQUFhLEdBQUcsUUFBUTtBQUM5QjtBQUNBLElBQU1DLE1BQU0sR0FBRyxXQUFXO0FBQzFCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FDbEI7RUFDQyxJQUFNQyxTQUFTLEdBQUdDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksR0FBR0osTUFBTSxDQUFDO0VBQzNELElBQUlFLFNBQVMsRUFBRTtJQUNkLE9BQU9BLFNBQVM7RUFDakIsQ0FBQyxNQUFNO0lBQ04sT0FBT0osTUFBTTtFQUNkO0FBQ0QsQ0FBQztBQUNELElBQUlPLE1BQU0sR0FBR0osWUFBWSxFQUFFO0FBQzNCO0FBQ0EsSUFBTUssT0FBTyxHQUFHO0VBQ2Y7RUFDQSxVQUFVLEVBQU9ELE1BQU0sR0FBQyxHQUFHLEdBQUNOLGFBQWEsR0FBQyxrQkFBa0IsR0FBQ0MsTUFBTTtFQUNuRTtFQUNBLFlBQVksRUFBS0ssTUFBTSxHQUFDLEdBQUcsR0FBQ04sYUFBYSxHQUFDLHFCQUFxQixHQUFDQyxNQUFNO0VBQ3RFO0VBQ0EsVUFBVSxFQUFPSyxNQUFNLEdBQUMsR0FBRyxHQUFDTixhQUFhLEdBQUMsbUJBQW1CLEdBQUNDLE1BQU07RUFDcEU7RUFDQSxXQUFXLEVBQU1LLE1BQU0sR0FBQyxHQUFHLEdBQUNOLGFBQWEsR0FBQyxvQkFBb0IsR0FBQ0MsTUFBTTtFQUNyRTtFQUNBLFVBQVUsRUFBT0ssTUFBTSxHQUFDLEdBQUcsR0FBQ04sYUFBYSxHQUFDLG9CQUFvQixHQUFDQyxNQUFNO0VBQ3JFO0VBQ0EsV0FBVyxF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QUNBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQ2hCO0VBQUEsSUFENEJDLFVBQVUsdUVBQUMsS0FBSztFQUFBLElBQUVDLElBQUksdUVBQUMsS0FBSztFQUFBLElBQUVDLEdBQUc7RUFBQSxJQUFFQyxHQUFHO0VBRWpFLElBQUlDLEdBQUcsR0FBRyxFQUFFO0lBQUVDLEtBQUssR0FBR0gsR0FBRztFQUN6QixJQUFHRCxJQUFJLEVBQUM7SUFDUCxJQUFJSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDN0QsQ0FBQyxNQUFJO0lBQ0osSUFBSUEsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUMzRCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDMUQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDcEUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQzFELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FB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Q0EsT0FBT29JLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNyQixDQUFDOztBQUVEO0FBQ0EsSUFBTXFCLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQWM7RUFDM0IsYUFBWSx5Q0FBeUM7QUFDdEQsQ0FBQzs7QUFFRDtBQUFBLGVBQ2U7RUFDZHRMLE1BQU0sRUFBTkEsTUFBTTtFQUNORixNQUFNLEVBQU5BLE1BQU07RUFDSFEsT0FBTyxFQUFQQSxPQUFPO0VBQ1ZDLFNBQVMsRUFBVEEsU0FBUztFQUNURyxTQUFTLEVBQVRBLFNBQVM7RUFDVEcsU0FBUyxFQUFUQSxTQUFTO0VBQ1RFLFVBQVUsRUFBVkEsVUFBVTtFQUNWYyxRQUFRLEVBQVJBLFFBQVE7RUFDUkksUUFBUSxFQUFSQSxRQUFRO0VBQ1JrQixTQUFTLEVBQVRBLFNBQVM7RUFDVFEsV0FBVyxFQUFYQSxXQUFXO0VBQ1gxRCxZQUFZLEVBQVpBLFlBQVk7RUFDWitELFlBQVksRUFBWkEsWUFBWTtFQUNaa0IsTUFBTSxFQUFOQSxNQUFNO0VBQ05PLE9BQU8sRUFBUEEsT0FBTztFQUNQVSxJQUFJLEVBQUpBLElBQUk7RUFDSmtCLFVBQVUsRUFBVkEsVUFBVTtFQUNWZSxTQUFTLEVBQVRBLFNBQVM7RUFDVEUsTUFBTSxFQUFOQSxNQUFNO0VBQ05LLFdBQVcsRUFBWEEsV0FBVztFQUNYTyxhQUFhLEVBQWJBLGFBQWE7RUFDYjdJLE1BQU0sRUFBTkEsTUFBTTtFQUNOa0osY0FBYyxFQUFkQSxjQUFjO0VBQ2RNLElBQUksRUFBSkEsSUFBSTtFQUNKeUIsUUFBUSxFQUFSQSxRQUFRO0VBQ1JwQixPQUFPLEVBQVBBO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5o6l5Y+j5Z+f5ZCNXHJcbmNvbnN0IGFwaVVybCA9IFwiaHR0cDovL3Y1X2JsYWNrX2FwaS5jcXBpZy5jblwiO1xyXG4vLyDmjqXlj6Pmlofku7ZcclxuY29uc3QgaW50ZXJmYWNlRmlsZSA9IFwiYXBwYXBpXCI7XHJcbi8vIOS4juaOpeWPo+mAmuiur+eahEtFWVxyXG5jb25zdCBhcHBrZXkgPSAnYWJjMTIzNDU2JztcclxuLy8g6YCJ5oup57q/6LevXHJcbmNvbnN0IGdldFdlYkRvbWFpbiA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGNvbnN0IG5vd0RvbWFpbiA9IHVuaS5nZXRTdG9yYWdlU3luYygnbm93RG9tYWluXycgKyBhcHBrZXkpO1xyXG5cdGlmIChub3dEb21haW4pIHtcclxuXHRcdHJldHVybiBub3dEb21haW47XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBhcGlVcmw7XHJcblx0fVxyXG59XHJcbnZhciBub3dVcmwgPSBnZXRXZWJEb21haW4oKTtcclxuLy8g5a6M5pW05o6l5Y+jKOWfn+WQjSvmjqXlj6Pmlofku7Yr5o6l5Y+j5pa55rOVKVxyXG5jb25zdCBhcGlEYXRhID0ge1xyXG5cdC8vIOWIneWni+WMluaOpeWPo1xyXG5cdFwiYXBwSW5pdHNcIiAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9hcHBJbml0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6I635Y+WQVBQ54mI5pys5L+h5oGvXHJcblx0XCJnZXRWZXJzaW9uXCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFZlcnNpb24vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDpppbpobXmlbDmja5cclxuXHRcImhvbWVEYXRhXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaG9tZU1haW4vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDop4bpopHliJfooahcclxuXHRcInZpZGVvRGF0YVwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdmlkZW9MaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiT6aKY6K+m5oOFXHJcblx0XCJnZXRBbGJ1bVwiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2FsYnVtSW5mby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOinhumikeivpuaDhVxyXG5cdFwidmlkZW9JbmZvXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZXRhaWwvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmt7vliqDmlLbol49cclxuXHRcImFkZENvbGxlY3Rpb25cIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYWRkQ29sbGVjdGlvbi9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOinhumikeeCuei1nlxyXG5cdFwidmlkZW9MaWtlXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9saWtlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5re75Yqg6K+E6K66XHJcblx0XCJhZGRDb21tZW50XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDor4TorrrliJfooahcclxuXHRcImNvbW1lbnRMaXN0XCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvY29tbWVudExpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnu5/orqHnlKjmiLflnKjnur/mjqXlj6NcclxuXHRcImhlYXJ0QmVhdFwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaGVhcnRiZWF0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55m75b2V5o6l5Y+jXHJcblx0XCJ1c2VyTG9naW5cIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2xvZ2luL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5rOo5YaM6YWN572u5L+h5oGvXHJcblx0XCJnZXRDb25maWdcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldENvbmZpZy9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOazqOWGjOi0puWPt1xyXG5cdFwidXNlclJlZ1wiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yZWdpc3Rlci9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOiOt+WPluaJi+acuumqjOivgeeggVxyXG5cdFwiZ2V0TW9iaWxlQ29kZVwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRNb2JpbGVDb2RlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6K+75Y+W5Liq5Lq65L+h5oGvXHJcblx0XCJnZXRJbmZvXCIgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFVzZXJJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g562+5YiwXHJcblx0XCJ1c2VyU2lnblwiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VzZXJTaWduL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE6ZKx5YyFXHJcblx0XCJteUJhbGFuY2VcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2JhbGFuY2UvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkvZnpop3mj5DnjrBcclxuXHRcImdldE1vbmV5XCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0TW9uZXkvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bpk7booYzljaHliJfooahcclxuXHRcImdldEJhbmtcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9iYW5rTGlzdHMvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bnlKjmiLfpk7booYzljaHliJfooahcclxuXHRcImdldFVzZXJCYW5rXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXNlckJhbmtMaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6K6+572u5o+Q546w6ZO26KGM5Y2hXHJcblx0XCJzZXRCYW5rXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvc2V0RGVmYXVsdEJhbmsvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliKDpmaTmj5DnjrDpk7booYzljaFcclxuXHRcImRlbEJhbmtcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZWxCYW5rL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5re75Yqg5o+Q546w6ZO26KGM5Y2hXHJcblx0XCJhZGRCYW5rXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYWRkQmFuay9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaPkOeOsOiusOW9lVxyXG5cdFwiZ2V0RGVwb3NpdFwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZXBvc2l0TG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6LSm5oi35piO57uGXHJcblx0XCJnZXREZXRhaWxlZFwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2RldGFpbGVkTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOS/ruaUueaYteensCzmiYvmnLrlj7cs5aS05YOPXHJcblx0XCJlZGl0SW5mb1wiICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VkaXRJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiK5Lyg5o6l5Y+jXHJcblx0XCJ1cGxvYWRcIiAgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VwbG9hZC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaUtuiXj+WIl+ihqFxyXG5cdFwiZ2V0Q29sbFwiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9jb2xsZWN0aW9uTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWIoOmZpOaUtuiXj+inhumikVxyXG5cdFwiZGVsQ29sbFwiICAgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9kZWxldGVDb2xsZWN0aW9uL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE6Laz6L+5XHJcblx0XCJnZXRXYXRjaExvZ1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFdhdGNoTG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR6LSt5Lmw6K6w5b2VXHJcblx0XCJnZXRTdm9kQnV5TG9nXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFN2b2RCdXlMb2cvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliKDpmaTmiJHnmoTotrPov7lcclxuXHRcImRlbFdhdGNoTG9nXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZGVsV2F0Y2hMb2cvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmiJHnmoTliIbkuqtcclxuXHRcIm15U2hhcmVcIlx0ICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9teVNoYXJlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5YiG5Lqr6K6w5b2VXHJcblx0XCJnZXRTaGFyZUxvZ1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NoYXJlTG9nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5L+u5pS55a+G56CBXHJcblx0XCJjaGFuZ2VQd2RcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NoYW5nZVB3ZC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWFheWAvOWll+mkkFxyXG5cdFwiZ2V0Q2hhcmdlXCIgICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRDaGFyZ2VEYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5pSv5LuY5pa55byPXHJcblx0XCJnZXRQYXlMaXN0XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBheUxpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliJvlu7rorqLljZVcclxuXHRcImNyZWF0ZU9yZGVyXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvY3JlYXRlT3JkZXIvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlhbPkuo7miJHku6xcclxuXHRcImdldEFib3V0XCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QWJvdXQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmtLvliqjliJfooahcclxuXHRcImdldEdhbWVMaXN0XCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0R2FtZUxpc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlubjov5Dovaznm5hcclxuXHRcImdldFByaXplXCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0UHJpemUvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDotK3kubDop4bpopFcclxuXHRcImJ1eVZpZGVvXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvYnV5L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g54Ot6Zeo5pCc57SiXHJcblx0XCJnZXRIb3RTZWFyY2hcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEhvdFNlYXJjaC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWPkei1t+aQnOe0olxyXG5cdFwic2VhcmNoVmlkZW9cIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zZWFyY2hWaWRlby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOa4heepuuaQnOe0ouiusOW9lVxyXG5cdFwiZW1wdHlTZWFyY2hcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9lbXB0eVNlYXJjaC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOiOt+W5v+WRilxyXG5cdFwiZ2V0QWRcIiAgXHQgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEFkL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6I635Y+W5YiG5Lqr6ICFaWRcclxuXHRcImdldFNoYXJlUGlkXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U2hhcmVQaWQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlj5HluJblm77niYdcclxuXHRcInVwbG9hZEltZ1wiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBsb2FkSW1nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5bm/5Zy66aaW6aG15pWw5o2uXHJcblx0XCJnZXRQbGF6YUxpc3RcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2NvbW11bml0eUhvbWVwYWdlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5biW5a2Q6K+m5oOF6I635Y+W6K+E6K66XHJcblx0XCJnZXRDb21tZW50XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBvc3RDb21tZW50L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5biW5a2Q6K+m5oOF5bm/5ZGKXHJcblx0XCJnZXRBZEluZm9cIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEFkSW5mby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWPkeW4llxyXG5cdFwic2VuZENvbW1lbnRcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zZW5kUG9zdENvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkuKrkurrkuLvpobVcclxuXHRcImhvbWVQYWdlXCIgICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvaG9tZVBhZ2UvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDkuIrkvKDphY3nva5cclxuXHRcInVwbG9hZENvbmZpZ1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0VXBsb2FkQ29uZmlnL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6aG26YOo5a+86IiqXHJcblx0XCJnZXRUb3BNZW51XCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFRvcE1lbnUvYXBwa2V5L1wiK2FwcGtleSxcclxuLyoqKioqKioqKioqKioqKioqKioqKiog55u05pKt55u45YWzICoqKioqKioqKioqKioqKioqKioqKiovXHRcclxuXHQvLyDojrflj5bkuLvmkq3liJfooahcclxuXHRcImdldEFuY2hvckxpc3RcIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QW5jaG9yTGlzdC9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOi0reS5sOS7mOi0ueaIv1xyXG5cdFwiYnV5R29sZFJvb21cIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9idXlHb2xkUm9vbS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOafpeivoueUqOaIt+aYr+WQpuS4uuS4u+aSrVxyXG5cdFwiZ2V0VXNlckFuY2hvclwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRVc2VySXNBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnrb7nuqbkuLvmkq1cclxuXHRcInJlZ0FuY2hvclwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvcmVnQW5jaG9yL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6L+b5YWl55u05pKt6Ze0XHJcblx0XCJwbGF5ZXJDb25maWdcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VudGVyVGhlU3R1ZGlvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5YWz5rOo5Li75pKtXHJcblx0XCJmb2N1c0FuY2hvclwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2ZvY3VzT25UaGVBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDpgIDlh7rnm7Tmkq3pl7RcclxuXHRcImxvZ291dFJvb21cIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZXhpdFRoZVN0dWRpby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOaJk+i1j+S4u+aSrVxyXG5cdFwiZ2l2ZUFuY2hvclwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yZXdhcmRUaGVBbmNob3IvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlvIDlp4vnm7Tmkq1cclxuXHRcImxpdmVJbml0RGF0YVwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvc3RhcnRMaXZlQnJvYWRjYXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5L+d5a2Y5oi/6Ze05L+h5oGvXHJcblx0XCJzYXZlUm9vbURhdGFcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NhdmVSb29tRGF0YS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOS4iuS8oOWwgemdouWbvueJh1xyXG5cdFwicm9vbVVwbG9hZEltZ1wiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9yb29tVXBsb2FkSW1nL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g57uT5p2f55u05pKt5bm257uT566XXHJcblx0XCJlbmRMaXZlUGxheWVyXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2VuZExpdmVCcm9hZGNhc3QvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnpoHoqIDkuI7mgaLlpI1cclxuXHRcInVwZGF0ZVNlbmRNc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBkYXRlU2VuZE1zL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5Li75pKt6Lii5Lq65Ye65oi/6Ze0XHJcblx0XCJhbmNob3JPdXRVc2VyXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2FuY2hvck91dFVzZXIvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlm77niYcgKyDotYTorq9cclxuXHRcImdldFBpY3R1cmVcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0UGljdHVyZS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOi0reS5sOWbvueJh1xyXG5cdFwiYnV5UGljdHVyZVwiICAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9idXlQaWN0dXJlL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5Zu+54mH6K+m5oOFXHJcblx0XCJwaWN0dXJlSW5mb1wiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3BpY3R1cmVJbmZvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8gYXBw5YaF5omT5byASDVcclxuXHRcIm9wZW5INVVybFwiICAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvb3Blbkg1VXJsL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5LiK5Lyg6K+V55yL5pe26Ze0XHJcblx0XCJ1cGRhdGVUcnlUaW1lXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3VwZGF0ZVRyeVRpbWUvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDojrflj5bkuJPpopjliJfooahcclxuXHRcImdldEFsYnVtTGlzdFwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0QWxidW1MaXN0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g5oiR55qE5Zui6ZifXHJcblx0XCJnZXRVc2VyVGVhbVwiICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFVzZXJUZWFtL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55u05pKt6K6w5b2VXHJcblx0XCJnZXRQbGF5ZXJMb2dcIiA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFBsYXllckxvZy9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOekvOeJqeiusOW9lVxyXG5cdFwiZ2V0UGxheWVyR2lmdFwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRQbGF5ZXJHaWZ0L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5YiG57G7562b6YCJXHJcblx0XCJnZXRGaWx0ZXJEYXRhXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldEZpbHRlckRhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDplb/op4bpopHliIbnsbvnrZvpgInop4bpopFcclxuXHRcImdldEZpbHRlcnNcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0RmlsdGVyVmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDplb/op4bpopFcclxuXHRcImdldENsYXNzRGF0YVwiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0Q2xhc3NEYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5LiL5YiG57G76KeG6aKRXHJcblx0XCJnZXRDbGFzc1ZpZGVvXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldENsYXNzVmlkZW9EYXRhL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g6ZW/6KeG6aKR5qCH562+XHJcblx0XCJnZXRUYWdEYXRhXCIgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL2dldFRhZ0RhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDnn63op4bpopFcclxuXHRcImdldFN2b2RDbGFzc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U3ZvZENsYXNzRGF0YS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOWkp+WIhuexu+efreinhumikVxyXG5cdFwiZ2V0U3ZvZERhdGFcIiAgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nZXRTdm9kQ2xhc3NWaWRlb0RhdGEvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDliqDovb3nn63op4bpopFcclxuXHRcImdldFN2b2RNYWluXCIgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvZ2V0U3ZvZE1haW4vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmiaPpmaTlhY3otLnmrKHmlbBcclxuXHRcInVwZGF0ZUZyZWVcIiAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdXBkYXRlRnJlZS9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOmHkeW4gei0reS5sOinhumikVxyXG5cdFwiZ29sZEJ1eVZpZGVvXCIgOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9nb2xkQnV5VmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDngrnotZ5cclxuXHRcImxpa2VTdm9kVmlkZW9cIjogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvbGlrZVN2b2RWaWRlby9hcHBrZXkvXCIrYXBwa2V5LFxyXG5cdC8vIOefreinhumikeivhOiuuuWIl+ihqFxyXG5cdFwic3ZvZFZpZGVvQ29tbVwiOiBub3dVcmwrXCIvXCIraW50ZXJmYWNlRmlsZStcIi9zdm9kVmlkZW9Db21tZW50L2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR6K+E6K66XHJcblx0XCJzZW5kVmlkZW9Db21tXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3NlbmRWaWRlb0NvbW1lbnQvYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDmjInmoIfnrb7ojrflj5bnn63op4bpopFcclxuXHRcInRhZ1N2b2RWaWRlb1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdGFnU3ZvZFZpZGVvL2FwcGtleS9cIithcHBrZXksXHJcblx0Ly8g55+t6KeG6aKR5pKt5pS+XHJcblx0XCJwbGF5U3ZvZFZpZGVvXCI6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3BsYXlTdm9kVmlkZW8vYXBwa2V5L1wiK2FwcGtleSxcclxuXHQvLyDlkajkuIvovb3ph4/orrDmlbBcclxuXHRcInZpcFdlZWtEb3duc1wiIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvdmlwV2Vla0Rvd25zL2FwcGtleS9cIithcHBrZXksXHJcbi8qIOS4jemcgOimgUFQUEtFWeeahOe7n+S4gOaUvuWcqOS4i+mdoiAqL1xyXG5cdC8vIOWOu+aUr+S7mFxyXG5cdFwiZ2V0UGF5XCJcdCAgIDogbm93VXJsK1wiL1wiK2ludGVyZmFjZUZpbGUrXCIvcGF5XCIsXHJcblx0Ly8g5pyN5Yqh5Y2P6K6uXHJcblx0XCJhZ3JlZW1lbnRcIiAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3ByaXZhY3kvdHlwZS8xXCIsXHJcblx0Ly8g6ZqQ56eB5pS/562WXHJcblx0XCJwcml2YWN5XCIgICAgICA6IG5vd1VybCtcIi9cIitpbnRlcmZhY2VGaWxlK1wiL3ByaXZhY3kvdHlwZS8yXCIsXHJcbn1cclxuLy8g5piv5ZCm55m75b2VIOacqueZu+W9lei/lOWbnmZhbHNlXHJcbmNvbnN0IGdldExvZ2lucyA9IGZ1bmN0aW9uKClcclxueyBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5KTtcclxuICAgICAgICByZXR1cm4gcmVzID8gcmVzIDogZmFsc2U7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8vIOe8k+WtmOeZu+W9leS/oeaBr1xyXG5jb25zdCBzZXRMb2dpbnMgPSBmdW5jdGlvbihkYXRhKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5LCBkYXRhKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG4vLyDms6jplIDnmbvlvZVcclxuY29uc3QgZGVsTG9naW5zID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd1c2VySW5mb18nICsgYXBwa2V5KTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG4vKlxyXG4qIHJhbmRvbVdvcmQg5Lqn55Sf5Lu75oSP6ZW/5bqm6ZqP5py65a2X5q+N5pWw5a2X57uE5ZCIXHJcbiogcmFuZG9tRmxhZyDmmK/lkKbku7vmhI/plb/luqYgbWluIOS7u+aEj+mVv+W6puacgOWwj+S9jVvlm7rlrprkvY3mlbBdIG1heCDku7vmhI/plb/luqbmnIDlpKfkvY1cclxuKlxyXG4qIOeUn+aIkDbigJQxMuS9jemaj+acuuWtl+espuS4siDvvJpyYW5kb21Xb3JkKHRydWUsNiwxMilcclxuKiDnlJ/miJDpmo/mnLrnmoQ25L2N5a2X56ym5LiyIO+8miByYW5kb21Xb3JkKGZhbHNlLDYpIFxyXG4qIHR5cGUgOiB0cnVl57qv5pWw5a2XLGZhbHNl5Li65pWw5a2X5ZKM5a2X5q+NXHJcbiovXHJcbmNvbnN0IHJhbmRvbVdvcmQgPSBmdW5jdGlvbihyYW5kb21GbGFnPWZhbHNlLCB0eXBlPWZhbHNlLCBtaW4sIG1heClcclxue1xyXG5cdGxldCBzdHIgPSBcIlwiLCByYW5nZSA9IG1pbjtcclxuXHRpZih0eXBlKXtcclxuXHRcdHZhciBhcnIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcclxuXHR9ZWxzZXtcclxuXHRcdHZhciBhcnIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLFxyXG5cdFx0J2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJyxcclxuXHRcdCdtJywgJ24nLCAnbycsICdwJywgJ3EnLCAncicsICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLFxyXG5cdFx0J0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJyxcclxuXHRcdCdNJywgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onXTsgXHJcblx0fVxyXG5cdC8vJy0nLCcuJywnficsJyEnLCdAJywnIycsJyQnLCclJywnXicsJyYnLCcqJywnKCcsJyknLCdfJywnOicsJzwnLCc+JywnPydcclxuXHRpZihyYW5kb21GbGFnKXtcclxuXHRcdHJhbmdlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluOy8vIOS7u+aEj+mVv+W6plxyXG5cdH1cclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgcmFuZ2U7IGkrKykge1xyXG5cdFx0dmFyIHBvcyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChhcnIubGVuZ3RoIC0gMSkpO1xyXG5cdFx0c3RyICs9IGFycltwb3NdO1xyXG5cdH1cclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcbi8vIOWQjOatpee8k+WtmOWbvueJh1xyXG5jb25zdCBpbWdDYWNoZSA9IGZ1bmN0aW9uKGltYWdlX3VybCwgYmFja0Z1bilcclxue1xyXG5cclxuXHJcblxyXG5cclxuXHR2YXIgaW1hZ2VfbmFtZSA9IHNwbGl0VXJsKGltYWdlX3VybCkgKyBhcHBrZXkgKyAnJztcclxuXHQvL3VuaS5yZW1vdmVTdG9yYWdlU3luYyhpbWFnZV9uYW1lKTtcclxuXHQvL2NvbnNvbGUubG9nKGltYWdlX25hbWUpXHJcblx0dmFyIGltZ1VybCA9IHVuaS5nZXRTdG9yYWdlU3luYyhpbWFnZV9uYW1lKTtcclxuXHQvLyDlrZjlnKjliJnor7vnvJPlrZggXHJcblx0aWYgKGltZ1VybCkge1xyXG5cdFx0Ly9pZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykgaW1nVXJsID0gXCJmaWxlOlwiICsgaW1nVXJsO1xyXG5cdFx0cGx1cy5pby5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGltZ1VybCwgZW50cnkgPT4ge1xyXG5cdFx0XHRlbnRyeS5maWxlKGZpbGUgPT4ge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coaW1nVXJsKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LCBlcnIgPT4ge1xyXG5cdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoaW1hZ2VfbmFtZSk7XHJcblx0XHR9KTtcclxuXHRcdGJhY2tGdW4oaW1nVXJsKTtcclxuXHRcdC8vY29uc29sZS5sb2coaW1nVXJsKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRiYWNrRnVuKGltYWdlX3VybCk7XHJcblx0XHQvL2NvbnNvbGUubG9nKGltYWdlX3VybCk7XHJcblx0XHQvLyDmnKzlnLDmsqHmnInnvJPlrZjliJnkuIvovb0gXHJcblx0XHR1bmkuZG93bmxvYWRGaWxlKHtcclxuXHRcdFx0dXJsOiBpbWFnZV91cmwsXHJcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMudGVtcEZpbGVQYXRoKTtcclxuXHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHR1bmkuc2F2ZUZpbGUoe1xyXG5cdFx0XHRcdFx0XHR0ZW1wRmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzYXZlZEZpbGVQYXRoID0gZS5zYXZlZEZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhpbWFnZV9uYW1lLCBzYXZlZEZpbGVQYXRoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbi8vIOiOt+W+l1VSTOS4reeahOaWh+S7tuWQjVxyXG5jb25zdCBzcGxpdFVybCA9IGZ1bmN0aW9uKGltZ1VybClcclxue1xyXG5cdGlmKCFpbWdVcmwpIHJldHVybiBmYWxzZTtcclxuXHR2YXIgaW1nQXJyID0gaW1nVXJsLnNwbGl0KCcvJyk7XHJcblx0dmFyIGZpbGVOYW1lID0gaW1nQXJyW2ltZ0Fyci5sZW5ndGggLSAxXTtcclxuXHRyZXR1cm4gZmlsZU5hbWU7XHJcbn1cclxuLy8g5Yqg6L295o+Q56S6XHJcbmNvbnN0IHNob3dUb2FzdCA9IGZ1bmN0aW9uKHRpdGxlID0gJycsIHRpbWVzID0gMTAwMCwgc3R5bGUgPSAnbm9uZScsIGltYWdlID0gJycpIFxyXG57XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRpY29uOiBzdHlsZSxcclxuXHRcdHRpdGxlOiB0aXRsZSxcclxuXHRcdG1hc2s6IHRydWUsXHJcblx0XHRkdXJhdGlvbjogdGltZXMsXHJcblx0XHRpbWFnZTogaW1hZ2VcclxuXHR9KTtcclxufVxyXG5jb25zdCBnZXRGaWxlU2l6ZSA9IGZ1bmN0aW9uKGZpbGVCeXRlKVxyXG57XHJcblx0dHJ5IHtcclxuXHQgICAgdmFyIGZpbGVTaXplQnl0ZSA9IGZpbGVCeXRlO1xyXG5cdCAgICB2YXIgZmlsZVNpemVNc2cgPSBcIlwiO1xyXG5cdCAgICBpZiAoZmlsZVNpemVCeXRlIDwgMTA0ODU3NikgZmlsZVNpemVNc2cgPSAoZmlsZVNpemVCeXRlIC8gMTAyNCkudG9GaXhlZCgyKTtcclxuXHQgICAgZWxzZSBpZiAoZmlsZVNpemVCeXRlID09IDEwNDg1NzYpIGZpbGVTaXplTXNnID0gMTtcclxuXHQgICAgZWxzZSBpZiAoZmlsZVNpemVCeXRlID4gMTA0ODU3NiAmJiBmaWxlU2l6ZUJ5dGUgPCAxMDczNzQxODI0KSBmaWxlU2l6ZU1zZyA9IChmaWxlU2l6ZUJ5dGUgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpO1xyXG5cdCAgICBlbHNlIGlmIChmaWxlU2l6ZUJ5dGUgPiAxMDQ4NTc2ICYmIGZpbGVTaXplQnl0ZSA9PSAxMDczNzQxODI0KSBmaWxlU2l6ZU1zZyA9IFwiMUdCXCI7XHJcblx0ICAgIGVsc2UgaWYgKGZpbGVTaXplQnl0ZSA+IDEwNzM3NDE4MjQgJiYgZmlsZVNpemVCeXRlIDwgMTA5OTUxMTYyNzc3NikgZmlsZVNpemVNc2cgPSAoZmlsZVNpemVCeXRlIC8gKDEwMjQgKiAxMDI0ICogMTAyNCkpLnRvRml4ZWQoMik7XHJcblx0ICAgIGVsc2UgZmlsZVNpemVNc2cgPSBcIuaWh+S7tui2hei/hzFUQlwiO1xyXG5cdCAgICByZXR1cm4gZmlsZVNpemVNc2c7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdCAgICByZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG4vLyDojrflj5borr7lpIdJRFxyXG5jb25zdCBnZXRNb2JpbGVEaWQgPSBmdW5jdGlvbihiYWNrRnVuKSBcclxue1xyXG5cdHZhciBwaG9uZSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdHZhciBkaWQgPSBwaG9uZS5kZXZpY2VJZDtcclxuXHRpZihkaWQubGVuZ3RoID4gMCl7XHJcblx0XHR2YXIgZGlkID0gZGlkLnNwbGl0KFwifFwiKS5maWx0ZXIoZnVuY3Rpb24ocikge1xyXG5cdFx0ICAgcmV0dXJuIHIgJiYgci50cmltKCk7XHJcblx0XHR9KTtcclxuXHRcdGJhY2tGdW4oZGlkW2RpZC5sZW5ndGggLSAxXSk7XHJcblx0fSBlbHNlIHtcclxuXHJcblx0XHRwbHVzLmRldmljZS5nZXRJbmZvKHtcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0aWYocGhvbmUucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKXtcclxuXHRcdFx0XHRcdHZhciBhcnIgPSBlLnV1aWQuc3BsaXQoXCIsXCIpO1xyXG5cdFx0XHRcdFx0ZGlkID0gYXJyWzBdO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0ZGlkID0gZS51dWlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZGlkID0gZ2V0TW9iaWxlUmFuZERpZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0YmFja0Z1bihkaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG59XHJcbi8vIOmaj+acuuiuvuWkh0lEXHJcbmNvbnN0IGdldE1vYmlsZVJhbmREaWQgPSBmdW5jdGlvbigpIFxyXG57XHJcblx0Y29uc3QgZGlkS2V5ID0gJ215X2RpZF8nK2FwcGtleTtcclxuXHRjb25zdCBnZXREaWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoZGlkS2V5KTtcclxuXHRpZiAoZ2V0RGlkKSB7XHJcblx0XHRyZXR1cm4gZ2V0RGlkO1xyXG5cdH1lbHNle1xyXG5cdFx0dmFyIHJhbmREaWQgPSByYW5kb21Xb3JkKGZhbHNlLCBmYWxzZSwgMTYsIDE2KTtcclxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYyhkaWRLZXksICdINScrcmFuZERpZCk7XHJcblx0XHRyZXR1cm4gcmFuZERpZDtcclxuXHR9XHRcclxufVxyXG4vLyDlhbPpl61BUFBcclxuY29uc3Qgb3V0QXBwID0gZnVuY3Rpb24oKSBcclxue1xyXG5cclxuXHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XHJcblx0XHRjYXNlICdhbmRyb2lkJzpcclxuXHRcdFx0cGx1cy5ydW50aW1lLnF1aXQoKTtcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnaW9zJzpcclxuXHRcdFx0cGx1cy5pb3MuaW1wb3J0KCdVSUFwcGxpY2F0aW9uJykuc2hhcmVkQXBwbGljYXRpb24oKS5wZXJmb3JtU2VsZWN0b3IoJ2V4aXQnKTtcclxuXHRcdGJyZWFrOyBcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuLy8g6Lez6L2s5pa55rOVXHJcbmNvbnN0IGp1bXBVcmwgPSBmdW5jdGlvbih1cmwsIHR5cGUgPSAnd2ViJywgZGVsdGEgPSAxKSBcclxue1xyXG5cdGlmICh1cmwgPT0gJyMnIHx8IHVybCA9PSAnJykgcmV0dXJuIGZhbHNlO1xyXG5cdGlmICh1cmwgPT0gJ2JhY2snKSB7XHJcblx0XHR2YXIgZGVsdGEgPSBwYXJzZUludCh0eXBlKSA/IHR5cGUgOiAxO1xyXG5cdFx0dW5pLm5hdmlnYXRlQmFjayh7IGRlbHRhOiBkZWx0YSB9KTtcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdC8vIOWOn+eql+WPo1xyXG5cdFx0Y2FzZSAnb2xkJzpcclxuXHRcdFx0dW5pLnJlTGF1bmNoKHsgdXJsOiB1cmwgfSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Ly8g5LiN5YWz6Zet5b2T5YmN6aG16Lez6L2sXHJcblx0XHRjYXNlICduZXcnOlxyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7IHVybDogdXJsIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdC8vIHRhYkJhclxyXG5cdFx0Y2FzZSAndGFiJzpcclxuXHRcdFx0dW5pLnN3aXRjaFRhYih7IHVybDogdXJsIH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdC8vIOWFs+mXreW9k+WJjemhtei3s+i9rFxyXG5cdFx0Y2FzZSAnbmV3eCc6XHJcblx0XHRcdHVuaS5yZWRpcmVjdFRvKHsgdXJsOiB1cmwgfSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Ly8gQVBQ5YaF5omT5byA6ZO+5o6lXHJcblx0XHRjYXNlICdhcHAnOlxyXG5cdFx0XHR2YXIgYXBwID0gJy9wYWdlcy9qdW1wL2luZGV4P3U9Jyt1cmxcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhhcHApXHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHsgdXJsOiBhcHAgfSk7XHJcblx0XHRcdGJyZWFrO1x0XHJcblx0XHQvLyDot7Poh7PlpJbnva7mtY/mj73lmahcclxuXHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRwbHVzLnJ1bnRpbWUub3BlblVSTCh1cmwpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG59XHJcbi8vIOWkjeWItkg1K0FQUFxyXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24oc3RyKSBcclxue1xyXG5cdHZhciBjb250ZW50ID0gc3RyICsgJyc7XHJcblxyXG5cdHVuaS5zZXRDbGlwYm9hcmREYXRhKHtcclxuXHQgICAgZGF0YTogY29udGVudCxcclxuXHQgICAgc3VjY2VzczogKCk9PiB7XHJcblx0XHRcdHNob3dUb2FzdCgn5aSN5Yi25oiQ5YqfJywgMjAwMCk7XHJcblx0ICAgIH1cclxuXHR9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5jb25zdCBoNUNvcHkgPSBmdW5jdGlvbihjb250ZW50KVxyXG57XHJcblx0aWYgKCFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoJ2NvcHknKSkgcmV0dXJuIGZhbHNlXHJcblx0bGV0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcblx0dGV4dGFyZWEudmFsdWUgPSBjb250ZW50XHJcblx0dGV4dGFyZWEucmVhZE9ubHkgPSBcInJlYWRPbmx5XCJcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKVxyXG5cdHRleHRhcmVhLnNlbGVjdCgpIC8vIOmAieaLqeWvueixoVxyXG5cdHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIGNvbnRlbnQubGVuZ3RoKSAvL+aguOW/g1xyXG5cdGxldCByZXN1bHQgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIikgLy8g5omn6KGM5rWP6KeI5Zmo5aSN5Yi25ZG95LukXHJcblx0dGV4dGFyZWEucmVtb3ZlKClcclxuXHRyZXR1cm4gcmVzdWx0XHJcbn1cclxudmFyIGJnVmlldyA9IG51bGw7XHJcbi8vIOWIm+W7uuWOn+eUn1ZpZXfmjqfku7ZcclxuY29uc3QgY3JlYXRlVmlldyA9IGZ1bmN0aW9uKGhlaWdodCA9ICc1MHB4Jywgb3BhY2l0eT0nMC4zJywgdGV4dD0nJykgXHJcbntcclxuXHJcblx0LyogaWYodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycgJiYgaGVpZ2h0PT0nNTBweCcpe1xyXG5cdFx0aGVpZ2h0ID0gJzEwNXB4JztcclxuXHR9ICovXHJcblx0YmdWaWV3ID0gbmV3IHBsdXMubmF0aXZlT2JqLlZpZXcoJ2JnJywge1xyXG5cdFx0Ym90dG9tOiAnMHB4JyxcclxuXHRcdGxlZnQ6ICcwcHgnLFxyXG5cdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0b3BhY2l0eTogb3BhY2l0eSxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMSknXHJcblx0fSk7XHJcblx0aWYodGV4dCAhPSAnJyl7XHJcblx0XHRiZ1ZpZXcuZHJhd1RleHQodGV4dCwge3dpZGh0OiAnMTAwJScsaGVpZ2h0OicxMDAlJ30sIHtcclxuXHRcdFx0c2l6ZTogJzE4cHgnLFxyXG5cdFx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0XHQvL2JhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnXHJcblx0XHR9KTtcclxuXHR9XHJcblx0YmdWaWV3LnNob3coKTtcclxuXHJcbn1cclxuLy8g5YWz6Zet572p5bGCXHJcbmNvbnN0IGNsb3NlVmlldyA9IGZ1bmN0aW9uKCkgXHJcbntcclxuXHJcblx0YmdWaWV3LmNsb3NlKCk7XHJcblxyXG59XHJcbi8vIOaJk+eUteivnee7mXh4eFxyXG5jb25zdCBjYWxsVXAgPSBmdW5jdGlvbihudW1iZXIpXHJcbntcclxuXHJcblx0dW5pLm1ha2VQaG9uZUNhbGwoe1xyXG5cdCAgICBwaG9uZU51bWJlcjogbnVtYmVyICsgJycsXHJcblx0XHRmYWlsOiAoKT0+IHtcclxuXHRcdFx0YXBpLnNob3dUb2FzdCgn5pON5L2c5aSx6LSlJywgMjAwMCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcblxyXG59XHJcbmNvbnN0IGdldENvbnRhY3RzID0gZnVuY3Rpb24oYmFja0Z1bil7XHJcblxyXG5cclxuXHJcblxyXG5cdHBsdXMuY29udGFjdHMuZ2V0QWRkcmVzc0Jvb2socGx1cy5jb250YWN0cy5BRERSRVNTQk9PS19QSE9ORSwgKGFkZHJlc3Nib29rKT0+IHtcclxuXHRcdGFkZHJlc3Nib29rLmZpbmQoW1wiZGlzcGxheU5hbWVcIixcInBob25lTnVtYmVyc1wiXSwgKGNvbnRhY3RzKT0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhjb250YWN0cyk7XHJcblx0XHRcdGJhY2tGdW4oY29udGFjdHMpO1xyXG5cdFx0fSwgKCk9PiB7ICBcclxuXHRcdFx0YmFja0Z1bihmYWxzZSk7XHJcblx0XHR9LHsgbXVsdGlwbGU6dHJ1ZSB9KTtcclxuXHR9LCAoZSk9PiB7ICBcclxuXHRcdGJhY2tGdW4oZmFsc2UpO1xyXG5cdH0pOyAgXHJcblxyXG59XHJcbmNvbnN0IGZvcm1hdFNlY29uZHMgPSBmdW5jdGlvbih2YWx1ZSwgdHlwZSA9IDEpIHtcclxuXHRsZXQgcmVzdWx0ID0gcGFyc2VJbnQodmFsdWUpO1xyXG5cdGxldCBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA6IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCk7XHJcblx0bGV0IG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKTtcclxuXHRsZXQgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cdGxldCByZXMgPSAnJztcclxuXHRpZiAodHlwZSA9PSAxKSB7XHJcblx0XHRyZXMgKz0gYCR7aH06YDtcclxuXHRcdHJlcyArPSBgJHttfTpgO1xyXG5cdFx0cmVzICs9IGAke3N9YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVzICs9IGAke2h95pe2YDtcclxuXHRcdHJlcyArPSBgJHttfeWIhmA7XHJcblx0XHRyZXMgKz0gYCR7c33np5JgO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcbi8qIOiOt+WPlui/nOeoi+aWh+S7tuWkp+WwjyAqL1xyXG5jb25zdCBnZXRXZWJGaWxlU2l6ZSA9IGZ1bmN0aW9uKGZpbGVkID0gJycsIGJhY2tGdW4pIHtcclxuXHR2YXIgcmVzU2l6ZSA9IDA7XHJcblx0aWYgKGZpbGVkLmxlbmd0aCA8IDEpIHtcclxuXHRcdGJhY2tGdW4ocmVzU2l6ZSk7IFxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IGZpbGVkLFxyXG5cdFx0bWV0aG9kOiAnSEVBRCcsXHJcblx0XHRzdWNjZXNzOiAoZSkgPT4ge1xyXG5cdFx0XHRpZiAoZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdHJlc1NpemUgPSBnZXRGaWxlU2l6ZShlLmhlYWRlclsnQ29udGVudC1MZW5ndGgnXSk7Ly8g6LCD55So5Ye95pWw5o2i566X5Y2V5L2NXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRiYWNrRnVuKHJlc1NpemUpOyBcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4vLyBINeiOt+WPlua1j+iniOWZqOexu+Wei1xyXG5jb25zdCBpc0g1ID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIFN5cyA9IHsgJ3R5cGUnOidhcHAnLCAndmVyJzowIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRyZXR1cm4gU3lzO1xyXG59XHJcblxyXG5jb25zdCBzdHJfcmVwZWF0ID0gZnVuY3Rpb24oaSwgbSkge1xyXG4gICAgZm9yICh2YXIgbyA9IFtdOyBtID4gMDsgb1stLW1dID0gaSk7XHJcbiAgICByZXR1cm4gby5qb2luKCcnKTtcclxufVxyXG5cclxuLyogXHJcbnZhciBjbGFzc2ljID0gJC5zcHJpbnRmKCclcyAlZCUlICUuM2YnLCAnc3RyaW5nJywgNDAsIDMuMTQxNTkzKTsgXHJcbi8vIGNsYXNzaWMgPSAnc3RyaW5nIDQwJSAzLjE0MicgXHJcblxyXG52YXIgbmFtZWQgPSAkLnNwcmludGYoJyUobmFtZSlzOiAlKHZhbHVlKWQnLCB7bmFtZTogJ2FnZScsIHZhbHVlOiA0MH0pOyBcclxuLy8gbmFtZWQgPSAnYWdlOiA0MCdcclxuXHJcbnZhciBjbGFzc2ljID0gJC52c3ByaW50ZignJXMgJWQlJSAlLjNmJywgWydzdHJpbmcnLCA0MCwgMy4xNDE1OTNdKTsgXHJcbi8vIGNsYXNzaWMgPSAnc3RyaW5nIDQwJSAzLjE0MidcclxuXHJcbnZhciBuYW1lZCA9ICQudnNwcmludGYoJyUobmFtZSlzOiAlKHZhbHVlKWQnLCBbe25hbWU6ICdhZ2UnLCB2YWx1ZTogNDB9XSk7IFxyXG4vLyBuYW1lZCA9ICdhZ2U6IDQwJyBcclxuICovXHJcbmNvbnN0IHNwcmludGYgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpID0gMCwgYSwgZiA9IGFyZ3VtZW50c1tpKytdLCBvID0gW10sIG0sIHAsIGMsIHgsIHMgPSAnJztcclxuICAgIHdoaWxlIChmKSB7XHJcbiAgICAgICAgaWYgKG0gPSAvXlteXFx4MjVdKy8uZXhlYyhmKSkge1xyXG4gICAgICAgICAgICBvLnB1c2gobVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG0gPSAvXlxceDI1ezJ9Ly5leGVjKGYpKSB7XHJcbiAgICAgICAgICAgIG8ucHVzaCgnJScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtID0gL15cXHgyNSg/OihcXGQrKVxcJCk/KFxcKyk/KDB8J1teJF0pPygtKT8oXFxkKyk/KD86XFwuKFxcZCspKT8oW2ItZm9zdXhYXSkvLmV4ZWMoZikpIHtcclxuICAgICAgICAgICAgaWYgKCgoYSA9IGFyZ3VtZW50c1ttWzFdIHx8IGkrK10pID09IG51bGwpIHx8IChhID09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KCdUb28gZmV3IGFyZ3VtZW50cy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1tec10vLnRlc3QobVs3XSkgJiYgKHR5cGVvZihhKSAhPSAnbnVtYmVyJykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KCdFeHBlY3RpbmcgbnVtYmVyIGJ1dCBmb3VuZCAnICsgdHlwZW9mKGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1bN10pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2InOiBhID0gYS50b1N0cmluZygyKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjJzogYSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6IGEgPSBwYXJzZUludChhKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlJzogYSA9IG1bNl0gPyBhLnRvRXhwb25lbnRpYWwobVs2XSkgOiBhLnRvRXhwb25lbnRpYWwoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmJzogYSA9IG1bNl0gPyBwYXJzZUZsb2F0KGEpLnRvRml4ZWQobVs2XSkgOiBwYXJzZUZsb2F0KGEpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ28nOiBhID0gYS50b1N0cmluZyg4KTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzJzogYSA9ICgoYSA9IFN0cmluZyhhKSkgJiYgbVs2XSA/IGEuc3Vic3RyaW5nKDAsIG1bNl0pIDogYSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndSc6IGEgPSBNYXRoLmFicyhhKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd4JzogYSA9IGEudG9TdHJpbmcoMTYpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1gnOiBhID0gYS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSA9ICgvW2RlZl0vLnRlc3QobVs3XSkgJiYgbVsyXSAmJiBhID49IDAgPyAnKycrIGEgOiBhKTtcclxuICAgICAgICAgICAgYyA9IG1bM10gPyBtWzNdID09ICcwJyA/ICcwJyA6IG1bM10uY2hhckF0KDEpIDogJyAnO1xyXG4gICAgICAgICAgICB4ID0gbVs1XSAtIFN0cmluZyhhKS5sZW5ndGggLSBzLmxlbmd0aDtcclxuICAgICAgICAgICAgcCA9IG1bNV0gPyBzdHJfcmVwZWF0KGMsIHgpIDogJyc7XHJcbiAgICAgICAgICAgIG8ucHVzaChzICsgKG1bNF0gPyBhICsgcCA6IHAgKyBhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdygnSHVoID8hJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGYgPSBmLnN1YnN0cmluZyhtWzBdLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gby5qb2luKCcnKTtcclxufVxyXG5cclxuLyogSDXniYjmnYPml6Xlv5cgKi9cclxuY29uc3QgcHJpbnRMb2cgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zb2xlLmxvZygnID09PT09PT09PSBjb3B5cmlnaHQ6IOmtheaAneinhumikXY0ID09PT09PT09PSAnKTtcclxufVxyXG5cclxuLy8g5rOo5YaMXHJcbmV4cG9ydCBkZWZhdWx0IHsgXHJcblx0YXBwa2V5LFxyXG5cdGFwaVVybCxcclxuICAgIGFwaURhdGEsXHJcblx0Z2V0TG9naW5zLFxyXG5cdHNldExvZ2lucyxcclxuXHRkZWxMb2dpbnMsXHJcblx0cmFuZG9tV29yZCxcclxuXHRpbWdDYWNoZSxcclxuXHRzcGxpdFVybCxcclxuXHRzaG93VG9hc3QsXHJcblx0Z2V0RmlsZVNpemUsXHJcblx0Z2V0V2ViRG9tYWluLFxyXG5cdGdldE1vYmlsZURpZCxcclxuXHRvdXRBcHAsXHJcblx0anVtcFVybCxcclxuXHRjb3B5LFxyXG5cdGNyZWF0ZVZpZXcsXHJcblx0Y2xvc2VWaWV3LFxyXG5cdGNhbGxVcCxcclxuXHRnZXRDb250YWN0cyxcclxuXHRmb3JtYXRTZWNvbmRzLFxyXG5cdG5vd1VybCxcclxuXHRnZXRXZWJGaWxlU2l6ZSxcclxuXHRpc0g1LFxyXG5cdHByaW50TG9nLFxyXG5cdHNwcmludGZcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/*!**********************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/main.js?{"page":"pages%2Fsubnvue%2Flive_top_head"} ***!
  \**********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_subnvue_live_top_head_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/subnvue/live_top_head.nvue?mpType=page */ 64);\n\n        \n        \n        \n        \n        _pages_subnvue_live_top_head_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_subnvue_live_top_head_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/subnvue/live_top_head'\n        _pages_subnvue_live_top_head_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_subnvue_live_top_head_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBd0U7QUFDeEUsUUFBUSxxRkFBRztBQUNYLFFBQVEscUZBQUc7QUFDWCxRQUFRLHFGQUFHO0FBQ1gsZ0JBQWdCLHFGQUFHIiwiZmlsZSI6IjYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvc3VibnZ1ZS9saXZlX3RvcF9oZWFkLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3N1Ym52dWUvbGl2ZV90b3BfaGVhZCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///63\n");

/***/ }),
/* 64 */
/*!****************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_top_head.nvue?mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live_top_head.nvue?vue&type=template&id=8c5d7e1e&mpType=page */ 65);\n/* harmony import */ var _live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live_top_head.nvue?vue&type=script&lang=js&mpType=page */ 67);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./live_top_head.nvue?vue&type=style&index=0&lang=css&mpType=page */ 69).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./live_top_head.nvue?vue&type=style&index=0&lang=css&mpType=page */ 69).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"2c1b0f85\",\n  false,\n  _live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/subnvue/live_top_head.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0k7QUFDdEk7QUFDNkU7QUFDTDtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBFQUFrRTtBQUN0SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMEVBQWtFO0FBQzNIOztBQUVBOztBQUVBO0FBQytOO0FBQy9OLGdCQUFnQiwwTkFBVTtBQUMxQixFQUFFLCtGQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbGl2ZV90b3BfaGVhZC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThjNWQ3ZTFlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9saXZlX3RvcF9oZWFkLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGl2ZV90b3BfaGVhZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9saXZlX3RvcF9oZWFkLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9saXZlX3RvcF9oZWFkLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjJjMWIwZjg1XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3N1Ym52dWUvbGl2ZV90b3BfaGVhZC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_top_head.nvue?vue&type=template&id=8c5d7e1e&mpType=page ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_top_head.nvue?vue&type=template&id=8c5d7e1e&mpType=page */ 66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_template_id_8c5d7e1e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 66 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_top_head.nvue?vue&type=template&id=8c5d7e1e&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    [
      _c(
        "view",
        {
          staticStyle: {
            lines: "1",
            flexDirection: "row",
            marginLeft: "20rpx",
          },
          style: { "margin-top": _vm.phone.statusBarHeight + "px" },
        },
        [
          _c(
            "view",
            { staticClass: ["live-top-left"] },
            [
              _c("u-image", {
                staticClass: ["live-top-tx"],
                attrs: { src: _vm.anchor.headimgurl, mode: "aspectFill" },
                on: { click: _vm.goHome },
              }),
              _c("view", { staticClass: ["live-center"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["live-username"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v(_vm._s(_vm.anchor.nikcname))]
                ),
                _vm.playerTime > 0
                  ? _c(
                      "u-text",
                      {
                        staticClass: ["live-time"],
                        style: { "margin-top": _vm.mTo + "px" },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("已开播  " + _vm._s(_vm.anchor.playerTime))]
                    )
                  : _c(
                      "u-text",
                      {
                        staticClass: ["live-time"],
                        style: { "margin-top": _vm.mTo + "px" },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("暂未开播")]
                    ),
              ]),
              _vm.param.aid != 0
                ? _c(
                    "view",
                    [
                      _vm.isFocus
                        ? _c("u-image", {
                            staticClass: ["live-top-add"],
                            attrs: {
                              src: "/static/live/y.png",
                              mode: "aspectFill",
                            },
                            on: {
                              click: function ($event) {
                                _vm.setFocus(1)
                              },
                            },
                          })
                        : _c("u-image", {
                            staticClass: ["live-top-add"],
                            attrs: {
                              src: "/static/live/focus.png",
                              mode: "aspectFill",
                            },
                            on: {
                              click: function ($event) {
                                _vm.setFocus(2)
                              },
                            },
                          }),
                    ],
                    1
                  )
                : _c(
                    "view",
                    [
                      _c("u-image", {
                        staticClass: ["live-top-add"],
                        attrs: {
                          src: "/static/live/y.png",
                          mode: "aspectFill",
                        },
                      }),
                    ],
                    1
                  ),
            ],
            1
          ),
          _c("view", { staticClass: ["live-top-right"] }, [
            _c(
              "view",
              {
                staticStyle: {
                  lines: "1",
                  flexDirection: "row",
                  width: "230rpx",
                },
              },
              _vm._l(_vm.giveGiftUser, function (g, i) {
                return g.ranking < 4
                  ? _c(
                      "view",
                      {
                        key: i,
                        staticClass: ["to-left"],
                        on: {
                          click: function ($event) {
                            _vm.openUser(g)
                          },
                        },
                      },
                      [
                        _c("u-image", {
                          staticClass: ["live-top-tx"],
                          staticStyle: { marginLeft: "0!important" },
                          attrs: { src: g.headImg, mode: "aspectFill" },
                        }),
                        _c(
                          "u-text",
                          {
                            staticClass: ["live-top-ranking"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v(_vm._s(g.ranking))]
                        ),
                      ],
                      1
                    )
                  : _vm._e()
              }),
              0
            ),
            _c(
              "u-text",
              {
                staticClass: ["live-top-tx", "to-right"],
                appendAsTree: true,
                attrs: { append: "tree" },
                on: { click: _vm.adminUser },
              },
              [_vm._v(_vm._s(_vm.onlineNum))]
            ),
          ]),
        ]
      ),
      _c("view", { staticClass: ["give-sort"] }, [
        _vm.isTry
          ? _c(
              "u-text",
              {
                staticClass: ["give-sort-left"],
                class: _vm.backColor ? "give-sort-left-b" : "give-sort-left-a",
                style: { top: _vm.giveSortLeft + "px" },
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("试看倒计时 " + _vm._s(_vm.tryTimem))]
            )
          : _vm._e(),
        _vm.giveGiftUser.length > 3
          ? _c(
              "u-text",
              {
                staticClass: ["give-sort-right"],
                staticStyle: { right: "15rpx" },
                style: { top: _vm.giveSortLeft + "px" },
                appendAsTree: true,
                attrs: { append: "tree" },
                on: { click: _vm.giveSort },
              },
              [_vm._v("打赏榜")]
            )
          : _vm._e(),
      ]),
      _vm.giveGiftUser.length > 3
        ? _c("uni-popup", { ref: "giveSort", attrs: { type: "center" } }, [
            _c(
              "view",
              { staticClass: ["gift-list-sort"] },
              [
                _c("view", { staticClass: ["gift-sort-head"] }, [
                  _c(
                    "view",
                    { staticClass: ["gift-sort-info"] },
                    [
                      _c("u-image", {
                        staticClass: ["gift-sort-info-no1", "no2"],
                        attrs: {
                          src: "/static/live/no2.png",
                          mode: "aspectFill",
                        },
                      }),
                      _c("u-image", {
                        staticClass: ["gift-sort-info-headimg"],
                        attrs: { src: _vm.no2.headImg, mode: "aspectFill" },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["gift-sort-username"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.no2.username))]
                      ),
                      _c(
                        "u-text",
                        {
                          staticClass: ["gift-sort-gold"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.no2.giveGold) + "金币")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["gift-sort-info"] },
                    [
                      _c("u-image", {
                        staticClass: ["gift-sort-info-no1"],
                        attrs: {
                          src: "/static/live/no1.png",
                          mode: "aspectFill",
                        },
                      }),
                      _c("u-image", {
                        staticClass: ["gift-sort-info-headimg"],
                        attrs: { src: _vm.no1.headImg, mode: "aspectFill" },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["gift-sort-username"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.no1.username))]
                      ),
                      _c(
                        "u-text",
                        {
                          staticClass: ["gift-sort-gold"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.no1.giveGold) + "金币")]
                      ),
                      _c(
                        "u-text",
                        {
                          staticClass: ["gift-sort-text"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("排行榜")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["gift-sort-info"] },
                    [
                      _c("u-image", {
                        staticClass: ["gift-sort-info-no1", "no3"],
                        attrs: {
                          src: "/static/live/no3.png",
                          mode: "aspectFill",
                        },
                      }),
                      _c("u-image", {
                        staticClass: ["gift-sort-info-headimg"],
                        attrs: { src: _vm.no3.headImg, mode: "aspectFill" },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["gift-sort-username"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.no3.username))]
                      ),
                      _c(
                        "u-text",
                        {
                          staticClass: ["gift-sort-gold"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.no3.giveGold) + "金币")]
                      ),
                    ],
                    1
                  ),
                ]),
                _c(
                  "scroll-view",
                  {
                    staticClass: ["gift-sort-list"],
                    attrs: { scrollY: true, showScrollbar: false },
                  },
                  _vm._l(_vm.giveGiftUser, function (g, i) {
                    return g.ranking > 3
                      ? _c(
                          "view",
                          { key: i, staticClass: ["gift-sort-item"] },
                          [
                            _c(
                              "u-text",
                              {
                                staticClass: ["gift-sort-item-left"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [_vm._v(_vm._s(g.ranking))]
                            ),
                            _c("u-image", {
                              staticClass: ["gift-sort-item-img"],
                              attrs: { src: g.headImg, mode: "aspectFill" },
                            }),
                            _c(
                              "u-text",
                              {
                                staticClass: ["list-username"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [_vm._v(_vm._s(g.username))]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["gift-sort-item-right"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [_vm._v(_vm._s(g.giveGold) + "金币")]
                            ),
                          ],
                          1
                        )
                      : _vm._e()
                  }),
                  0
                ),
              ],
              1
            ),
          ])
        : _vm._e(),
      _c("uni-popup", { ref: "userGive", attrs: { type: "top" } }, [
        _c(
          "view",
          { staticClass: ["user-give-bg"] },
          [
            _c("u-image", {
              staticClass: ["give-user-img"],
              attrs: { src: _vm.nowGiveUser.headImg, mode: "aspectFill" },
            }),
            _c(
              "view",
              { staticClass: ["give-user-info"] },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["give-username"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v(_vm._s(_vm.nowGiveUser.username))]
                ),
                _vm.nowGiveUser.isVip
                  ? _c("u-image", {
                      staticClass: ["vip"],
                      attrs: {
                        src: "/static/imgs/vips.png",
                        mode: "aspectFit",
                      },
                    })
                  : _vm._e(),
              ],
              1
            ),
            _c(
              "u-text",
              {
                staticClass: ["give-gold"],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("已打赏 " + _vm._s(_vm.nowGiveUser.giveGold) + " 金币")]
            ),
          ],
          1
        ),
      ]),
      _c(
        "uni-popup",
        { ref: "tryLiveEnd", attrs: { maskClick: false, type: "center" } },
        [
          _c(
            "view",
            { staticClass: ["try-live-end"] },
            [
              _c("u-image", {
                staticClass: ["popup-bg-xx"],
                attrs: { src: "/static/imgs/nt.png" },
              }),
              _c("view", { staticClass: ["try-live-end-title"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["try-live-end-title-font"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("主播提醒您")]
                ),
              ]),
              _c(
                "view",
                { staticClass: ["try-live-end-content"] },
                [
                  _c("u-image", {
                    staticClass: ["try-live-end-img"],
                    attrs: { src: "/static/stop.png", mode: "aspectFill" },
                  }),
                  _c(
                    "u-text",
                    {
                      staticClass: ["try-live-end-content-font"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [
                      _vm._v(
                        _vm._s(_vm._self.anchor.tryTime / 60) +
                          "分钟试看已结束。"
                      ),
                    ]
                  ),
                ],
                1
              ),
              _c("view", { staticClass: ["try-live-end-btn"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["try-live-end-btn-buy"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                    on: { click: _vm.buyGoldRoom },
                  },
                  [_vm._v("购买")]
                ),
                _c("u-text", {
                  staticClass: ["line"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                }),
                _c(
                  "u-text",
                  {
                    staticClass: ["try-live-end-btn-rec"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                    on: { click: _vm.recUser },
                  },
                  [_vm._v("充值")]
                ),
                _c("u-text", {
                  staticClass: ["line"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                }),
                _c(
                  "u-text",
                  {
                    staticClass: ["try-live-end-btn-back"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                    on: {
                      click: function ($event) {
                        _vm.skipUrl(_vm.backUrl.url, _vm.backUrl.type)
                      },
                    },
                  },
                  [_vm._v("返回")]
                ),
              ]),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 67 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_top_head.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_top_head.nvue?vue&type=script&lang=js&mpType=page */ 68);\n/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRtQixDQUFnQixvbUJBQUcsRUFBQyIsImZpbGUiOiI2Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRklMRV9XT1JLL0hCdWlsZGVyL0hCdWlsZGVyWC4zLjk5LjIwMjMxMjI2MTEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlX3RvcF9oZWFkLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9GSUxFX1dPUksvSEJ1aWxkZXIvSEJ1aWxkZXJYLjMuOTkuMjAyMzEyMjYxMS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0ZJTEVfV09SSy9IQnVpbGRlci9IQnVpbGRlclguMy45OS4yMDIzMTIyNjExL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpdmVfdG9wX2hlYWQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///67\n");

/***/ }),
/* 68 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_top_head.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/common/api.js */ 33));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _self, setBeatTime;\nvar _default = {\n  data: function data() {\n    return {\n      loadingHieght: 40,\n      anchor: {\n        id: 1,\n        nikcname: \"载入中...\",\n        headimgurl: \"/static/live/langman.png\",\n        playerTime: \"00:00:00\"\n      },\n      isFocus: true,\n      //是否已关注\n      giveGiftUser: [],\n      //打赏排序\n      onlineNum: 0,\n      //在线人数\n      param: {\n        aid: 0,\n        uid: 0\n      },\n      // 用户信息\n      userInfo: {},\n      playerStatus: false,\n      //直播状态\n      playerTime: 0,\n      //开播时间\n\n      nowGiveUser: {},\n      //打赏用户信息\n\n      no1: {},\n      no2: {},\n      no3: {},\n      isTry: false,\n      tryTimes: 0,\n      //计数器\n      tryTimem: '00:00:00',\n      //正常时间\n\n      backColor: false,\n      //变化背景色\n\n      backUrl: {\n        url: '/pages/live/list',\n        type: 'newx'\n      },\n      mTo: 0,\n      phone: {},\n      giveSortLeft: 84\n    };\n  },\n  onLoad: function onLoad(e) {\n    _self = this;\n    _self.phone = uni.getSystemInfoSync();\n    _self.mTo = _self.phone.platform == 'ios' ? '-3' : 0;\n    var topHead = _self.phone.platform == 'ios' ? 55 : 48;\n    _self.giveSortLeft = _self.phone.statusBarHeight + topHead;\n    _self.getGiveGiftUser();\n    if (e.url != undefined) _self.backUrl = JSON.parse(e.url);\n  },\n  onUnload: function onUnload() {\n    //console.log('onUnload_head');\n    if (_self.param.aid != 0) _self.tryTimeDsq(0);\n  },\n  methods: {\n    getGiveGiftUser: function getGiveGiftUser() {\n      uni.$on('getSubnvueParam', function (data) {\n        if (data.type == 'toHead') {\n          var d = data.data;\n          _self.isFocus = d.isFocus;\n          _self.giveGiftUser = d.giftOrder;\n          if (_self.giveGiftUser.length > 2) {\n            _self.no1 = _self.giveGiftUser[0];\n            _self.no2 = _self.giveGiftUser[1];\n            _self.no3 = _self.giveGiftUser[2];\n          }\n          var anchor = d.anchorInfo;\n          _self.playerTime = anchor.playerTime;\n          anchor.playerTime = _api.default.formatSeconds(anchor.playerTime);\n          _self.anchor = anchor;\n          _self.param = d.otherParam;\n          _self.userInfo = d.userInfo;\n          _self.tryTimes = anchor.userTry;\n          _self.tryTimeFun();\n          _self.addPlayerTime();\n          //console.log(_self.playerTime);\n        }\n\n        if (data.type == 'anchorToHead') {\n          var d = data.data;\n          _self.anchor = d;\n        }\n        if (data.type == 'startPlayer') {\n          if (data.data) {\n            _self.addPlayerTime();\n          } else {\n            clearInterval(_self.playerStatus);\n          }\n        }\n        if (data.type == 'outUser') {\n          //console.log('outUser', data)\n          if (_self.onlineNum > 0) {\n            //_self.onlineNum = _self.onlineNum - 1;\n            _self.onlineNum = data.data.length;\n          }\n        }\n        if (data.type == 'giveGiftOrder') {\n          _self.giveGiftUser = data.data;\n          //console.log(_self.giveGiftUser)\n        }\n\n        if (data.type == 'onlineUsers') {\n          //console.log(data.data.data);\n          //_self.onlineNum = data.data.data;\n        }\n        if (data.type == 'onlineList') {\n          //console.log('online', data.data.data);\n          _self.onlineNum = data.data.data.length;\n        }\n        if (data.type == 'toHeadBackFun') {\n          eval(data.data);\n        }\n      });\n    },\n    tryTimeFun: function tryTimeFun() {\n      var r = _self.anchor;\n      //console.log(r.gold+'/'+r.isTry+'/'+r.tryTime+'/'+r.userTry);\n      // 收费房，开启了试看，剩余时间大于0\n      if (r.gold > 0 && r.isTry && r.tryTime > 0 && r.userTry > 0) {\n        _self.isTry = true;\n        _self.tryTimeJs();\n      } else {\n        _self.isTry = false;\n      }\n    },\n    tryTimeJs: function tryTimeJs() {\n      setBeatTime = setInterval(function () {\n        if (_self.tryTimes > 0) {\n          // 开始试看\n          _self.tryTimes--;\n          _self.tryTimem = _api.default.formatSeconds(_self.tryTimes);\n          _self.backColor = !_self.backColor;\n        } else {\n          // 试看结束\n          _self.tryTimeDsq(0);\n          _self.$refs['tryLiveEnd'].open();\n          uni.$emit('getSubnvueParam', {\n            'type': 'livePlayerStatus',\n            'data': '_self.setLiveStatus(false)'\n          });\n        }\n      }, 1000);\n    },\n    tryTimeDsq: function tryTimeDsq(t) {\n      // t 1开始计时，0暂停显示\n      if (t == 1) {\n        _self.tryTimeFun();\n      } else {\n        clearInterval(setBeatTime);\n        _self.updateTryTime();\n      }\n    },\n    updateTryTime: function updateTryTime() {\n      var r = _self.anchor;\n      // 收费房，开启了试看，剩余时间大于0\n      if (r.gold > 0 && r.isTry && r.tryTime > 0) {\n        uni.request({\n          url: _api.default.apiData.updateTryTime,\n          method: 'POST',\n          data: {\n            uid: _self.param.uid,\n            aid: _self.param.aid,\n            time: _self.tryTimes\n          },\n          header: {\n            'Content-type': 'application/x-www-form-urlencoded'\n          },\n          success: function success(r) {\n            //console.log(r)\n          }\n        });\n      }\n    },\n    giveSort: function giveSort() {\n      _self.$refs['giveSort'].open();\n    },\n    goHome: function goHome() {\n      if (_self.param.aid == 0) return;\n      var param = {\n        url: '/pages/live/player?aid=' + _self.anchor.id,\n        t: 'new'\n      };\n      _self.skipUrl('/pages/member/home_page?type=' + JSON.stringify(param) + '&uid=' + _self.anchor.id, 'newx');\n    },\n    setFocus: function setFocus(e) {\n      if (_self.param.uid == _self.param.aid) {\n        _api.default.showToast('自己不能关注自己', 1500);\n        return;\n      }\n      _self.isFocus = e == 1 ? false : true;\n      if (_self.isFocus) {\n        uni.showToast({\n          title: '关注成功',\n          icon: 'success',\n          duration: 2000\n        });\n        //console.log(_self.userInfo)\n        var data = {\n          type: 'userFocus',\n          data: _self.userInfo,\n          'anchorId': _self.param.aid\n        };\n        _self.sendSever(data);\n      }\n      uni.request({\n        url: _api.default.apiData.focusAnchor,\n        method: 'POST',\n        data: {\n          uid: _self.param.uid,\n          aid: _self.param.aid,\n          type: e\n        },\n        header: {\n          'Content-type': 'application/x-www-form-urlencoded'\n        },\n        success: function success(e) {\n          var r = e.data;\n          //console.log(r)\n          if (r.Code == 201) {\n            _api.default.showToast(r.Msg, 3000);\n          }\n        },\n        fail: function fail() {\n          // 加载失败提示\n          _api.default.showToast(\"服务器连接失败，请检查网络是否正常\", 3000);\n        }\n      });\n    },\n    adminUser: function adminUser() {\n      // 主播端才有管理用户权限\n      if (_self.param.aid == 0) {\n        uni.$emit('getSubnvueParam', {\n          'type': 'backFun',\n          'data': '_self.showUserList()'\n        });\n      }\n    },\n    openUser: function openUser(e) {\n      _self.nowGiveUser = e;\n      _self.$refs['userGive'].open();\n      /* uni.$emit('getSubnvueParam', {'type':'setGiveUser','data':e});\n      const subNVue = uni.getSubNVueById('live_give_user');\n      subNVue.show('slide-in-bottom', 200); */\n    },\n    addPlayerTime: function addPlayerTime() {\n      //console.log(_self.playerTime);\n      _self.playerStatus = setInterval(function () {\n        _self.playerTime++;\n        _self.anchor.playerTime = _api.default.formatSeconds(_self.playerTime);\n      }, 1000);\n    },\n    sendSever: function sendSever(data) {\n      var backFun = \"_self.sendSocketTask(\" + JSON.stringify(data) + \")\";\n      uni.$emit('getSubnvueParam', {\n        'type': 'livePlayerStatus',\n        'data': backFun\n      });\n    },\n    buyGoldRoom: function buyGoldRoom(i) {\n      uni.showLoading({\n        title: '付费中...',\n        mask: true\n      });\n      uni.request({\n        url: _api.default.apiData.buyGoldRoom,\n        method: 'POST',\n        data: {\n          anchorId: _self.param.aid,\n          userId: _self.param.uid\n        },\n        header: {\n          'Content-type': 'application/x-www-form-urlencoded'\n        },\n        success: function success(e) {\n          var r = e.data;\n          _api.default.showToast(r.Msg, 2000);\n          if (r.Code == 200) {\n            _self.$refs['tryLiveEnd'].close();\n            _self.isTry = false;\n            uni.$emit('getSubnvueParam', {\n              'type': 'livePlayerStatus',\n              'data': '_self.setLiveStatus(true)'\n            });\n          }\n        },\n        fail: function fail() {\n          // 加载失败提示\n          _api.default.showToast(\"支付失败，请重试\", 3000);\n        }\n      });\n    },\n    recUser: function recUser() {\n      uni.showLoading({\n        title: '正在跳转...',\n        mask: true\n      });\n      _self.$nextTick(function () {\n        _self.$refs['tryLiveEnd'].close();\n        setTimeout(function () {\n          _self.skipUrl('/pages/recharge/recharge', 'newx');\n        }, 500);\n      });\n    },\n    // 跳转登录\n    skipUrl: function skipUrl() {\n      var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/pages/login/login';\n      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'newx';\n      _api.default.jumpUrl(uri, type);\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc3VibnZ1ZS9saXZlX3RvcF9oZWFkLm52dWUiXSwibmFtZXMiOlsiZGF0YSIsImxvYWRpbmdIaWVnaHQiLCJhbmNob3IiLCJpZCIsIm5pa2NuYW1lIiwiaGVhZGltZ3VybCIsInBsYXllclRpbWUiLCJpc0ZvY3VzIiwiZ2l2ZUdpZnRVc2VyIiwib25saW5lTnVtIiwicGFyYW0iLCJhaWQiLCJ1aWQiLCJ1c2VySW5mbyIsInBsYXllclN0YXR1cyIsIm5vd0dpdmVVc2VyIiwibm8xIiwibm8yIiwibm8zIiwiaXNUcnkiLCJ0cnlUaW1lcyIsInRyeVRpbWVtIiwiYmFja0NvbG9yIiwiYmFja1VybCIsInVybCIsInR5cGUiLCJtVG8iLCJwaG9uZSIsImdpdmVTb3J0TGVmdCIsIm9uTG9hZCIsIl9zZWxmIiwib25VbmxvYWQiLCJtZXRob2RzIiwiZ2V0R2l2ZUdpZnRVc2VyIiwidW5pIiwiY2xlYXJJbnRlcnZhbCIsImV2YWwiLCJ0cnlUaW1lRnVuIiwidHJ5VGltZUpzIiwic2V0QmVhdFRpbWUiLCJ0cnlUaW1lRHNxIiwidXBkYXRlVHJ5VGltZSIsIm1ldGhvZCIsInRpbWUiLCJoZWFkZXIiLCJzdWNjZXNzIiwiZ2l2ZVNvcnQiLCJnb0hvbWUiLCJ0Iiwic2V0Rm9jdXMiLCJhcGkiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImZhaWwiLCJhZG1pblVzZXIiLCJvcGVuVXNlciIsImFkZFBsYXllclRpbWUiLCJzZW5kU2V2ZXIiLCJidXlHb2xkUm9vbSIsIm1hc2siLCJhbmNob3JJZCIsInVzZXJJZCIsInJlY1VzZXIiLCJzZXRUaW1lb3V0Iiwic2tpcFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQXNHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBO01BQ0FDO01BQ0FDO01BQUE7TUFDQVI7TUFBQTs7TUFFQVM7TUFBQTs7TUFFQUM7TUFDQUM7TUFDQUM7TUFFQUM7TUFDQUM7TUFBQTtNQUNBQztNQUFBOztNQUVBQztNQUFBOztNQUVBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BRUFDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztJQUNBQTtJQUNBQTtJQUNBO0lBQ0FBO0lBQ0FBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBQztRQUNBO1VBQ0E7VUFDQUo7VUFDQUE7VUFDQTtZQUNBQTtZQUNBQTtZQUNBQTtVQUNBO1VBQ0E7VUFDQUE7VUFDQTVCO1VBQ0E0QjtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBO1FBQ0E7O1FBQ0E7VUFDQTtVQUNBQTtRQUNBO1FBQ0E7VUFDQTtZQUNBQTtVQUNBO1lBQ0FLO1VBQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQTtZQUNBO1lBQ0FMO1VBQ0E7UUFDQTtRQUNBO1VBQ0FBO1VBQ0E7UUFDQTs7UUFDQTtVQUNBO1VBQ0E7UUFBQTtRQUVBO1VBQ0E7VUFDQUE7UUFDQTtRQUNBO1VBQ0FNO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQVA7UUFDQUE7TUFDQTtRQUNBQTtNQUNBO0lBQ0E7SUFDQVE7TUFDQUM7UUFDQTtVQUNBO1VBQ0FUO1VBQ0FBO1VBQ0FBO1FBQ0E7VUFDQTtVQUNBQTtVQUNBQTtVQUNBSTtZQUFBO1lBQUE7VUFBQTtRQUNBO01BQ0E7SUFDQTtJQUNBTTtNQUNBO01BQ0E7UUFDQVY7TUFDQTtRQUNBSztRQUNBTDtNQUNBO0lBQ0E7SUFDQVc7TUFDQTtNQUNBO01BQ0E7UUFDQVA7VUFDQVY7VUFDQWtCO1VBQ0ExQztZQUNBWTtZQUNBRDtZQUNBZ0M7VUFDQTtVQUNBQztZQUNBO1VBQ0E7VUFDQUM7WUFDQTtVQUFBO1FBRUE7TUFDQTtJQUNBO0lBQ0FDO01BQ0FoQjtJQUNBO0lBQ0FpQjtNQUNBO01BQ0E7UUFDQXZCO1FBQ0F3QjtNQUNBO01BQ0FsQjtJQUNBO0lBQ0FtQjtNQUNBO1FBQ0FDO1FBQ0E7TUFDQTtNQUNBcEI7TUFDQTtRQUNBSTtVQUNBaUI7VUFDQUM7VUFDQUM7UUFDQTtRQUNBO1FBQ0E7VUFBQTVCO1VBQUF6QjtVQUFBO1FBQUE7UUFDQThCO01BQ0E7TUFDQUk7UUFDQVY7UUFDQWtCO1FBQ0ExQztVQUNBWTtVQUNBRDtVQUNBYztRQUNBO1FBQ0FtQjtVQUNBO1FBQ0E7UUFDQUM7VUFDQTtVQUNBO1VBQ0E7WUFDQUs7VUFDQTtRQUNBO1FBQ0FJO1VBQ0E7VUFDQUo7UUFDQTtNQUNBO0lBQ0E7SUFDQUs7TUFDQTtNQUNBO1FBQ0FyQjtVQUFBO1VBQUE7UUFBQTtNQUNBO0lBQ0E7SUFDQXNCO01BQ0ExQjtNQUNBQTtNQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0EyQjtNQUNBO01BQ0EzQjtRQUNBQTtRQUNBQTtNQUNBO0lBQ0E7SUFDQTRCO01BQ0E7TUFDQXhCO1FBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQXlCO01BQ0F6QjtRQUFBaUI7UUFBQVM7TUFBQTtNQUNBMUI7UUFDQVY7UUFDQWtCO1FBQ0ExQztVQUNBNkQ7VUFDQUM7UUFDQTtRQUNBbEI7VUFDQTtRQUNBO1FBQ0FDO1VBQ0E7VUFDQUs7VUFDQTtZQUNBcEI7WUFDQUE7WUFDQUk7Y0FBQTtjQUFBO1lBQUE7VUFDQTtRQUNBO1FBQ0FvQjtVQUNBO1VBQ0FKO1FBQ0E7TUFDQTtJQUNBO0lBQ0FhO01BQ0E3QjtRQUFBaUI7UUFBQVM7TUFBQTtNQUNBOUI7UUFDQUE7UUFDQWtDO1VBQ0FsQztRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FtQztNQUFBO01BQUE7TUFDQWY7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiI2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDx2aWV3IHN0eWxlPVwibGluZXM6MTtmbGV4LWRpcmVjdGlvbjpyb3c7bWFyZ2luLWxlZnQ6MjBycHg7XCIgOnN0eWxlPVwieydtYXJnaW4tdG9wJzpwaG9uZS5zdGF0dXNCYXJIZWlnaHQrJ3B4J31cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsaXZlLXRvcC1sZWZ0XCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibGl2ZS10b3AtdHhcIiA6c3JjPVwiYW5jaG9yLmhlYWRpbWd1cmxcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIEBjbGljaz1cImdvSG9tZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXZlLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaXZlLXVzZXJuYW1lXCI+e3thbmNob3IubmlrY25hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGl2ZS10aW1lXCIgOnN0eWxlPVwieydtYXJnaW4tdG9wJzptVG8rJ3B4J31cIiB2LWlmPVwicGxheWVyVGltZT4wXCI+5bey5byA5pKtICB7e2FuY2hvci5wbGF5ZXJUaW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpdmUtdGltZVwiIDpzdHlsZT1cInsnbWFyZ2luLXRvcCc6bVRvKydweCd9XCIgdi1lbHNlPuaaguacquW8gOaSrTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInBhcmFtLmFpZCAhPSAwXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJsaXZlLXRvcC1hZGRcIiBzcmM9XCJAL3N0YXRpYy9saXZlL3kucG5nXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBAY2xpY2s9XCJzZXRGb2N1cygxKVwiIHYtaWY9XCJpc0ZvY3VzXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImxpdmUtdG9wLWFkZFwiIHNyYz1cIkAvc3RhdGljL2xpdmUvZm9jdXMucG5nXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBAY2xpY2s9XCJzZXRGb2N1cygyKVwiIHYtZWxzZT48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyB2LWVsc2U+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJsaXZlLXRvcC1hZGRcIiBzcmM9XCJAL3N0YXRpYy9saXZlL3kucG5nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxpdmUtdG9wLXJpZ2h0XCI+XHJcblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJsaW5lczogMTtmbGV4LWRpcmVjdGlvbjogcm93O3dpZHRoOiAyMzBycHg7XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvLWxlZnRcIiB2LWZvcj1cIihnLCBpKSBpbiBnaXZlR2lmdFVzZXJcIiA6a2V5PVwiaVwiIEBjbGljaz1cIm9wZW5Vc2VyKGcpXCIgdi1pZj1cImcucmFua2luZzw0XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImxpdmUtdG9wLXR4XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDowIWltcG9ydGFudDtcIiA6c3JjPVwiZy5oZWFkSW1nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpdmUtdG9wLXJhbmtpbmdcIj57e2cucmFua2luZ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpdmUtdG9wLXR4IHRvLXJpZ2h0XCIgQGNsaWNrPVwiYWRtaW5Vc2VyXCI+e3tvbmxpbmVOdW19fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJnaXZlLXNvcnRcIj5cclxuXHRcdFx0PHRleHQgOmNsYXNzPVwiYmFja0NvbG9yPydnaXZlLXNvcnQtbGVmdC1iJzonZ2l2ZS1zb3J0LWxlZnQtYSdcIiBjbGFzcz1cImdpdmUtc29ydC1sZWZ0XCIgOnN0eWxlPVwieyd0b3AnOmdpdmVTb3J0TGVmdCArJ3B4J31cIiB2LWlmPVwiaXNUcnlcIj7or5XnnIvlgJLorqHml7Yge3t0cnlUaW1lbX19PC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImdpdmUtc29ydC1yaWdodFwiIHN0eWxlPVwicmlnaHQ6IDE1cnB4O1wiIEBjbGljaz1cImdpdmVTb3J0XCIgOnN0eWxlPVwieyd0b3AnOmdpdmVTb3J0TGVmdCArJ3B4J31cIiB2LWlmPVwiZ2l2ZUdpZnRVc2VyLmxlbmd0aD4zXCI+5omT6LWP5qacPC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dW5pLXBvcHVwIHJlZj1cImdpdmVTb3J0XCIgdHlwZT1cImNlbnRlclwiIHYtaWY9XCJnaXZlR2lmdFVzZXIubGVuZ3RoPjNcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJnaWZ0LWxpc3Qtc29ydFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ2lmdC1zb3J0LWhlYWRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ2lmdC1zb3J0LWluZm9cIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiZ2lmdC1zb3J0LWluZm8tbm8xIG5vMlwiIHNyYz1cIi9zdGF0aWMvbGl2ZS9ubzIucG5nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJnaWZ0LXNvcnQtaW5mby1oZWFkaW1nXCIgOnNyYz1cIm5vMi5oZWFkSW1nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImdpZnQtc29ydC11c2VybmFtZVwiPnt7bm8yLnVzZXJuYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZ2lmdC1zb3J0LWdvbGRcIj57e25vMi5naXZlR29sZH196YeR5biBPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnaWZ0LXNvcnQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJnaWZ0LXNvcnQtaW5mby1ubzFcIiBzcmM9XCIvc3RhdGljL2xpdmUvbm8xLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiZ2lmdC1zb3J0LWluZm8taGVhZGltZ1wiIDpzcmM9XCJubzEuaGVhZEltZ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJnaWZ0LXNvcnQtdXNlcm5hbWVcIj57e25vMS51c2VybmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImdpZnQtc29ydC1nb2xkXCI+e3tubzEuZ2l2ZUdvbGR9femHkeW4gTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJnaWZ0LXNvcnQtdGV4dFwiPuaOkuihjOamnDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ2lmdC1zb3J0LWluZm9cIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiZ2lmdC1zb3J0LWluZm8tbm8xIG5vM1wiIHNyYz1cIi9zdGF0aWMvbGl2ZS9ubzMucG5nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJnaWZ0LXNvcnQtaW5mby1oZWFkaW1nXCIgOnNyYz1cIm5vMy5oZWFkSW1nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImdpZnQtc29ydC11c2VybmFtZVwiPnt7bm8zLnVzZXJuYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZ2lmdC1zb3J0LWdvbGRcIj57e25vMy5naXZlR29sZH196YeR5biBPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXkgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiBjbGFzcz1cImdpZnQtc29ydC1saXN0XCI+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ2lmdC1zb3J0LWl0ZW1cIiB2LWZvcj1cIihnLCBpKSBpbiBnaXZlR2lmdFVzZXJcIiA6a2V5PVwiaVwiIHYtaWY9XCJnLnJhbmtpbmc+M1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImdpZnQtc29ydC1pdGVtLWxlZnRcIj57e2cucmFua2luZ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJnaWZ0LXNvcnQtaXRlbS1pbWdcIiA6c3JjPVwiZy5oZWFkSW1nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpc3QtdXNlcm5hbWVcIj57e2cudXNlcm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJnaWZ0LXNvcnQtaXRlbS1yaWdodFwiPnt7Zy5naXZlR29sZH196YeR5biBPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC91bmktcG9wdXA+XHJcblx0XHRcclxuXHRcdDx1bmktcG9wdXAgcmVmPVwidXNlckdpdmVcIiB0eXBlPVwidG9wXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1naXZlLWJnXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiZ2l2ZS11c2VyLWltZ1wiIDpzcmM9XCJub3dHaXZlVXNlci5oZWFkSW1nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZ2l2ZS11c2VyLWluZm9cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZ2l2ZS11c2VybmFtZVwiPnt7bm93R2l2ZVVzZXIudXNlcm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInZpcFwiIHNyYz1cIkAvc3RhdGljL2ltZ3Mvdmlwcy5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgdi1pZj1cIm5vd0dpdmVVc2VyLmlzVmlwXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJnaXZlLWdvbGRcIj7lt7LmiZPotY8ge3tub3dHaXZlVXNlci5naXZlR29sZH19IOmHkeW4gTwvdGV4dD5cclxuXHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwiYnRuLWNsb3NlXCI+5YWz6ZetPC90ZXh0PiAtLT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC91bmktcG9wdXA+XHJcblx0XHRcclxuXHRcdDx1bmktcG9wdXAgcmVmPVwidHJ5TGl2ZUVuZFwiIDptYXNrQ2xpY2s9XCJmYWxzZVwiIHR5cGU9XCJjZW50ZXJcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0cnktbGl2ZS1lbmRcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiQC9zdGF0aWMvaW1ncy9udC5wbmdcIiBjbGFzcz1cInBvcHVwLWJnLXh4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRyeS1saXZlLWVuZC10aXRsZVwiPjx0ZXh0IGNsYXNzPVwidHJ5LWxpdmUtZW5kLXRpdGxlLWZvbnRcIj7kuLvmkq3mj5DphpLmgqg8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidHJ5LWxpdmUtZW5kLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInRyeS1saXZlLWVuZC1pbWdcIiBzcmM9XCIvc3RhdGljL3N0b3AucG5nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0cnktbGl2ZS1lbmQtY29udGVudC1mb250XCI+e3tfc2VsZi5hbmNob3IudHJ5VGltZSAvIDYwfX3liIbpkp/or5XnnIvlt7Lnu5PmnZ/jgII8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidHJ5LWxpdmUtZW5kLWJ0blwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0cnktbGl2ZS1lbmQtYnRuLWJ1eVwiIEBjbGljaz1cImJ1eUdvbGRSb29tXCI+6LSt5LmwPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsaW5lXCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0cnktbGl2ZS1lbmQtYnRuLXJlY1wiIEBjbGljaz1cInJlY1VzZXJcIj7lhYXlgLw8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpbmVcIj48L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRyeS1saXZlLWVuZC1idG4tYmFja1wiIEBjbGljaz1cInNraXBVcmwoYmFja1VybC51cmwsIGJhY2tVcmwudHlwZSlcIj7ov5Tlm548L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3VuaS1wb3B1cD5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgYXBpIGZyb20gXCJAL2NvbW1vbi9hcGkuanNcIjtcclxuXHR2YXIgX3NlbGYsc2V0QmVhdFRpbWU7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nSGllZ2h0OiA0MCxcclxuXHRcdFx0XHRhbmNob3I6IHtcclxuXHRcdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdFx0bmlrY25hbWU6IFwi6L295YWl5LitLi4uXCIsXHJcblx0XHRcdFx0XHRoZWFkaW1ndXJsOiBcIi9zdGF0aWMvbGl2ZS9sYW5nbWFuLnBuZ1wiLFxyXG5cdFx0XHRcdFx0cGxheWVyVGltZTogXCIwMDowMDowMFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpc0ZvY3VzOiB0cnVlLCAvL+aYr+WQpuW3suWFs+azqFxyXG5cdFx0XHRcdGdpdmVHaWZ0VXNlcjogW10sIC8v5omT6LWP5o6S5bqPXHJcblx0XHRcdFx0b25saW5lTnVtOiAwLCAvL+WcqOe6v+S6uuaVsFxyXG5cdFx0XHRcdHBhcmFtOiB7XHJcblx0XHRcdFx0XHRhaWQ6IDAsXHJcblx0XHRcdFx0XHR1aWQ6IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIOeUqOaIt+S/oeaBr1xyXG5cdFx0XHRcdHVzZXJJbmZvOiB7fSxcclxuXHRcdFx0XHRwbGF5ZXJTdGF0dXM6IGZhbHNlLC8v55u05pKt54q25oCBXHJcblx0XHRcdFx0cGxheWVyVGltZTogMCwgLy/lvIDmkq3ml7bpl7RcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRub3dHaXZlVXNlcjoge30sIC8v5omT6LWP55So5oi35L+h5oGvXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bm8xOiB7fSxcclxuXHRcdFx0XHRubzI6IHt9LFxyXG5cdFx0XHRcdG5vMzoge30sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aXNUcnk6IGZhbHNlLFxyXG5cdFx0XHRcdHRyeVRpbWVzOiAwLCAvL+iuoeaVsOWZqFxyXG5cdFx0XHRcdHRyeVRpbWVtOiAnMDA6MDA6MDAnICAsLy/mraPluLjml7bpl7RcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRiYWNrQ29sb3I6IGZhbHNlLCAvL+WPmOWMluiDjOaZr+iJslxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJhY2tVcmw6IHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9saXZlL2xpc3QnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ25ld3gnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtVG86IDAsXHJcblx0XHRcdFx0cGhvbmU6IHt9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGdpdmVTb3J0TGVmdDogODQsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoZSkge1xyXG5cdFx0XHRfc2VsZiA9IHRoaXM7XHJcblx0XHRcdF9zZWxmLnBob25lID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdF9zZWxmLm1UbyA9IF9zZWxmLnBob25lLnBsYXRmb3JtPT0naW9zJz8nLTMnOjA7XHJcblx0XHRcdHZhciB0b3BIZWFkID0gX3NlbGYucGhvbmUucGxhdGZvcm09PSdpb3MnPzU1OjQ4O1xyXG5cdFx0XHRfc2VsZi5naXZlU29ydExlZnQgPSBfc2VsZi5waG9uZS5zdGF0dXNCYXJIZWlnaHQgKyB0b3BIZWFkO1xyXG5cdFx0XHRfc2VsZi5nZXRHaXZlR2lmdFVzZXIoKTtcclxuXHRcdFx0aWYoZS51cmwgIT0gdW5kZWZpbmVkKSBfc2VsZi5iYWNrVXJsID0gSlNPTi5wYXJzZShlLnVybCk7XHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdC8vY29uc29sZS5sb2coJ29uVW5sb2FkX2hlYWQnKTtcclxuXHRcdFx0aWYoX3NlbGYucGFyYW0uYWlkICE9IDApIF9zZWxmLnRyeVRpbWVEc3EoMCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXRHaXZlR2lmdFVzZXIoKSB7XHJcblx0XHRcdFx0dW5pLiRvbignZ2V0U3VibnZ1ZVBhcmFtJywgKGRhdGEpPT4ge1xyXG5cdFx0XHRcdFx0aWYoZGF0YS50eXBlID09ICd0b0hlYWQnKXtcclxuXHRcdFx0XHRcdFx0dmFyIGQgPSBkYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdF9zZWxmLmlzRm9jdXMgPSBkLmlzRm9jdXM7XHJcblx0XHRcdFx0XHRcdF9zZWxmLmdpdmVHaWZ0VXNlciA9IGQuZ2lmdE9yZGVyO1xyXG5cdFx0XHRcdFx0XHRpZihfc2VsZi5naXZlR2lmdFVzZXIubGVuZ3RoID4gMil7XHJcblx0XHRcdFx0XHRcdFx0X3NlbGYubm8xID0gX3NlbGYuZ2l2ZUdpZnRVc2VyWzBdO1xyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLm5vMiA9IF9zZWxmLmdpdmVHaWZ0VXNlclsxXTtcclxuXHRcdFx0XHRcdFx0XHRfc2VsZi5ubzMgPSBfc2VsZi5naXZlR2lmdFVzZXJbMl07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dmFyIGFuY2hvciA9IGQuYW5jaG9ySW5mbztcclxuXHRcdFx0XHRcdFx0X3NlbGYucGxheWVyVGltZSA9IGFuY2hvci5wbGF5ZXJUaW1lO1xyXG5cdFx0XHRcdFx0XHRhbmNob3IucGxheWVyVGltZSA9IGFwaS5mb3JtYXRTZWNvbmRzKGFuY2hvci5wbGF5ZXJUaW1lKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuYW5jaG9yID0gYW5jaG9yO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5wYXJhbSA9IGQub3RoZXJQYXJhbTtcclxuXHRcdFx0XHRcdFx0X3NlbGYudXNlckluZm8gPSBkLnVzZXJJbmZvO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50cnlUaW1lcyA9IGFuY2hvci51c2VyVHJ5XHJcblx0XHRcdFx0XHRcdF9zZWxmLnRyeVRpbWVGdW4oKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuYWRkUGxheWVyVGltZSgpO1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKF9zZWxmLnBsYXllclRpbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYoZGF0YS50eXBlID09ICdhbmNob3JUb0hlYWQnKXtcclxuXHRcdFx0XHRcdFx0dmFyIGQgPSBkYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdF9zZWxmLmFuY2hvciA9IGQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihkYXRhLnR5cGUgPT0gJ3N0YXJ0UGxheWVyJyl7XHJcblx0XHRcdFx0XHRcdGlmKGRhdGEuZGF0YSl7XHJcblx0XHRcdFx0XHRcdFx0X3NlbGYuYWRkUGxheWVyVGltZSgpO1xyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF9zZWxmLnBsYXllclN0YXR1cyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKGRhdGEudHlwZSA9PSAnb3V0VXNlcicpe1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdvdXRVc2VyJywgZGF0YSlcclxuXHRcdFx0XHRcdFx0aWYoX3NlbGYub25saW5lTnVtID4gMCl7XHJcblx0XHRcdFx0XHRcdFx0Ly9fc2VsZi5vbmxpbmVOdW0gPSBfc2VsZi5vbmxpbmVOdW0gLSAxO1xyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLm9ubGluZU51bSA9IGRhdGEuZGF0YS5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdH0gXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihkYXRhLnR5cGUgPT0gJ2dpdmVHaWZ0T3JkZXInKXtcclxuXHRcdFx0XHRcdFx0X3NlbGYuZ2l2ZUdpZnRVc2VyID0gZGF0YS5kYXRhO1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKF9zZWxmLmdpdmVHaWZ0VXNlcilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKGRhdGEudHlwZSA9PSAnb25saW5lVXNlcnMnKXtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhLmRhdGEuZGF0YSk7XHJcblx0XHRcdFx0XHRcdC8vX3NlbGYub25saW5lTnVtID0gZGF0YS5kYXRhLmRhdGE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihkYXRhLnR5cGUgPT0gJ29ubGluZUxpc3QnKXtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnb25saW5lJywgZGF0YS5kYXRhLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5vbmxpbmVOdW0gPSBkYXRhLmRhdGEuZGF0YS5sZW5ndGg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihkYXRhLnR5cGUgPT0gJ3RvSGVhZEJhY2tGdW4nKXtcclxuXHRcdFx0XHRcdFx0ZXZhbChkYXRhLmRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0cnlUaW1lRnVuKCkge1xyXG5cdFx0XHRcdHZhciByID0gX3NlbGYuYW5jaG9yO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coci5nb2xkKycvJytyLmlzVHJ5KycvJytyLnRyeVRpbWUrJy8nK3IudXNlclRyeSk7XHJcblx0XHRcdFx0Ly8g5pS26LS55oi/77yM5byA5ZCv5LqG6K+V55yL77yM5Ymp5L2Z5pe26Ze05aSn5LqOMFxyXG5cdFx0XHRcdGlmKHIuZ29sZD4wICYmIHIuaXNUcnkgJiYgci50cnlUaW1lPjAgJiYgci51c2VyVHJ5PjApe1xyXG5cdFx0XHRcdFx0X3NlbGYuaXNUcnkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0X3NlbGYudHJ5VGltZUpzKCk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRfc2VsZi5pc1RyeSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dHJ5VGltZUpzKCkge1xyXG5cdFx0XHRcdHNldEJlYXRUaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYoX3NlbGYudHJ5VGltZXMgPiAwKXtcclxuXHRcdFx0XHRcdFx0Ly8g5byA5aeL6K+V55yLXHJcblx0XHRcdFx0XHRcdF9zZWxmLnRyeVRpbWVzIC0tO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50cnlUaW1lbSA9IGFwaS5mb3JtYXRTZWNvbmRzKF9zZWxmLnRyeVRpbWVzKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuYmFja0NvbG9yID0gIV9zZWxmLmJhY2tDb2xvcjtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHQvLyDor5XnnIvnu5PmnZ9cclxuXHRcdFx0XHRcdFx0X3NlbGYudHJ5VGltZURzcSgwKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuJHJlZnNbJ3RyeUxpdmVFbmQnXS5vcGVuKCk7XHJcblx0XHRcdFx0XHRcdHVuaS4kZW1pdCgnZ2V0U3VibnZ1ZVBhcmFtJywgeyd0eXBlJzonbGl2ZVBsYXllclN0YXR1cycsJ2RhdGEnOidfc2VsZi5zZXRMaXZlU3RhdHVzKGZhbHNlKSd9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJ5VGltZURzcSh0KSB7XHJcblx0XHRcdFx0Ly8gdCAx5byA5aeL6K6h5pe277yMMOaaguWBnOaYvuekulxyXG5cdFx0XHRcdGlmKHQgPT0gMSkge1xyXG5cdFx0XHRcdFx0X3NlbGYudHJ5VGltZUZ1bigpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzZXRCZWF0VGltZSk7XHJcblx0XHRcdFx0XHRfc2VsZi51cGRhdGVUcnlUaW1lKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVUcnlUaW1lKCkge1xyXG5cdFx0XHRcdHZhciByID0gX3NlbGYuYW5jaG9yO1xyXG5cdFx0XHRcdC8vIOaUtui0ueaIv++8jOW8gOWQr+S6huivleeci++8jOWJqeS9meaXtumXtOWkp+S6jjBcclxuXHRcdFx0XHRpZihyLmdvbGQ+MCAmJiByLmlzVHJ5ICYmIHIudHJ5VGltZT4wKXtcclxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiBhcGkuYXBpRGF0YS51cGRhdGVUcnlUaW1lLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdHVpZDogX3NlbGYucGFyYW0udWlkLFxyXG5cdFx0XHRcdFx0XHRcdGFpZDogX3NlbGYucGFyYW0uYWlkLFxyXG5cdFx0XHRcdFx0XHRcdHRpbWU6IF9zZWxmLnRyeVRpbWVzXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdCdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocik9PiB7XHJcblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdpdmVTb3J0KCkge1xyXG5cdFx0XHRcdF9zZWxmLiRyZWZzWydnaXZlU29ydCddLm9wZW4oKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z29Ib21lKCkge1xyXG5cdFx0XHRcdGlmIChfc2VsZi5wYXJhbS5haWQgPT0gMCkgcmV0dXJuO1xyXG5cdFx0XHRcdHZhciBwYXJhbSA9IHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9saXZlL3BsYXllcj9haWQ9Jytfc2VsZi5hbmNob3IuaWQsXHJcblx0XHRcdFx0XHR0OiAnbmV3J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfc2VsZi5za2lwVXJsKCcvcGFnZXMvbWVtYmVyL2hvbWVfcGFnZT90eXBlPScrSlNPTi5zdHJpbmdpZnkocGFyYW0pKycmdWlkPScrX3NlbGYuYW5jaG9yLmlkLCAnbmV3eCcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRGb2N1cyhlKSB7XHJcblx0XHRcdFx0aWYoX3NlbGYucGFyYW0udWlkID09IF9zZWxmLnBhcmFtLmFpZCl7XHJcblx0XHRcdFx0XHRhcGkuc2hvd1RvYXN0KCfoh6rlt7HkuI3og73lhbPms6joh6rlt7EnLCAxNTAwKTtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfc2VsZi5pc0ZvY3VzID0gZT09MT9mYWxzZTp0cnVlO1xyXG5cdFx0XHRcdGlmKF9zZWxmLmlzRm9jdXMpe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHQgICAgdGl0bGU6ICflhbPms6jmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHQgICAgZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhfc2VsZi51c2VySW5mbylcclxuXHRcdFx0XHRcdHZhciBkYXRhID0geyB0eXBlOid1c2VyRm9jdXMnLCBkYXRhOl9zZWxmLnVzZXJJbmZvLCAnYW5jaG9ySWQnOl9zZWxmLnBhcmFtLmFpZCB9O1xyXG5cdFx0XHRcdFx0X3NlbGYuc2VuZFNldmVyKGRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IGFwaS5hcGlEYXRhLmZvY3VzQW5jaG9yLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHVpZDogX3NlbGYucGFyYW0udWlkLFxyXG5cdFx0XHRcdFx0XHRhaWQ6IF9zZWxmLnBhcmFtLmFpZCxcclxuXHRcdFx0XHRcdFx0dHlwZTogZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdFx0XHQnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAoZSk9PiB7XHJcblx0XHRcdFx0XHRcdHZhciByID0gZS5kYXRhO1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKHIpXHJcblx0XHRcdFx0XHRcdGlmKHIuQ29kZSA9PSAyMDEpe1xyXG5cdFx0XHRcdFx0XHRcdGFwaS5zaG93VG9hc3Qoci5Nc2csIDMwMDApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKCk9PiB7XHJcblx0XHRcdFx0XHRcdC8vIOWKoOi9veWksei0peaPkOekulxyXG5cdFx0XHRcdFx0XHRhcGkuc2hvd1RvYXN0KFwi5pyN5Yqh5Zmo6L+e5o6l5aSx6LSl77yM6K+35qOA5p+l572R57uc5piv5ZCm5q2j5bi4XCIsIDMwMDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZG1pblVzZXIoKSB7XHJcblx0XHRcdFx0Ly8g5Li75pKt56uv5omN5pyJ566h55CG55So5oi35p2D6ZmQXHJcblx0XHRcdFx0aWYoX3NlbGYucGFyYW0uYWlkID09IDApe1xyXG5cdFx0XHRcdFx0dW5pLiRlbWl0KCdnZXRTdWJudnVlUGFyYW0nLCB7J3R5cGUnOidiYWNrRnVuJywnZGF0YSc6J19zZWxmLnNob3dVc2VyTGlzdCgpJ30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlblVzZXIoZSkge1xyXG5cdFx0XHRcdF9zZWxmLm5vd0dpdmVVc2VyID0gZTtcclxuXHRcdFx0XHRfc2VsZi4kcmVmc1sndXNlckdpdmUnXS5vcGVuKCk7XHJcblx0XHRcdFx0LyogdW5pLiRlbWl0KCdnZXRTdWJudnVlUGFyYW0nLCB7J3R5cGUnOidzZXRHaXZlVXNlcicsJ2RhdGEnOmV9KTtcclxuXHRcdFx0XHRjb25zdCBzdWJOVnVlID0gdW5pLmdldFN1Yk5WdWVCeUlkKCdsaXZlX2dpdmVfdXNlcicpO1xyXG5cdFx0XHRcdHN1Yk5WdWUuc2hvdygnc2xpZGUtaW4tYm90dG9tJywgMjAwKTsgKi9cclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkUGxheWVyVGltZSgpIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKF9zZWxmLnBsYXllclRpbWUpO1xyXG5cdFx0XHRcdF9zZWxmLnBsYXllclN0YXR1cyA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdF9zZWxmLnBsYXllclRpbWUgKys7XHJcblx0XHRcdFx0XHRfc2VsZi5hbmNob3IucGxheWVyVGltZSA9IGFwaS5mb3JtYXRTZWNvbmRzKF9zZWxmLnBsYXllclRpbWUpO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZW5kU2V2ZXIoZGF0YSkge1xyXG5cdFx0XHRcdHZhciBiYWNrRnVuID0gXCJfc2VsZi5zZW5kU29ja2V0VGFzayhcIitKU09OLnN0cmluZ2lmeShkYXRhKStcIilcIjtcclxuXHRcdFx0XHR1bmkuJGVtaXQoJ2dldFN1Ym52dWVQYXJhbScsIHsndHlwZSc6J2xpdmVQbGF5ZXJTdGF0dXMnLCdkYXRhJzpiYWNrRnVufSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJ1eUdvbGRSb29tKGkpIHtcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoeyB0aXRsZTon5LuY6LS55LitLi4uJyxtYXNrOnRydWUgfSk7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBhcGkuYXBpRGF0YS5idXlHb2xkUm9vbSxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhbmNob3JJZDogX3NlbGYucGFyYW0uYWlkLFxyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IF9zZWxmLnBhcmFtLnVpZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdFx0XHQnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAoZSk9PiB7XHJcblx0XHRcdFx0XHRcdHZhciByID0gZS5kYXRhO1xyXG5cdFx0XHRcdFx0XHRhcGkuc2hvd1RvYXN0KHIuTXNnLCAyMDAwKTtcclxuXHRcdFx0XHRcdFx0aWYoci5Db2RlID09IDIwMCl7XHJcblx0XHRcdFx0XHRcdFx0X3NlbGYuJHJlZnNbJ3RyeUxpdmVFbmQnXS5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLmlzVHJ5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0dW5pLiRlbWl0KCdnZXRTdWJudnVlUGFyYW0nLCB7J3R5cGUnOidsaXZlUGxheWVyU3RhdHVzJywnZGF0YSc6J19zZWxmLnNldExpdmVTdGF0dXModHJ1ZSknfSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoKT0+IHtcclxuXHRcdFx0XHRcdFx0Ly8g5Yqg6L295aSx6LSl5o+Q56S6XHJcblx0XHRcdFx0XHRcdGFwaS5zaG93VG9hc3QoXCLmlK/ku5jlpLHotKXvvIzor7fph43or5VcIiwgMzAwMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlY1VzZXIoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHsgdGl0bGU6J+ato+WcqOi3s+i9rC4uLicsbWFzazp0cnVlIH0pO1xyXG5cdFx0XHRcdF9zZWxmLiRuZXh0VGljaygoKT0+IHtcclxuXHRcdFx0XHRcdF9zZWxmLiRyZWZzWyd0cnlMaXZlRW5kJ10uY2xvc2UoKTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0X3NlbGYuc2tpcFVybCgnL3BhZ2VzL3JlY2hhcmdlL3JlY2hhcmdlJywgJ25ld3gnKTtcclxuXHRcdFx0XHRcdH0sIDUwMClcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6Lez6L2s55m75b2VXHJcblx0XHRcdHNraXBVcmwodXJpID0gJy9wYWdlcy9sb2dpbi9sb2dpbicsIHR5cGUgPSAnbmV3eCcpIHtcclxuXHRcdFx0XHRhcGkuanVtcFVybCh1cmksIHR5cGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cclxuXHQucG9wdXAtYmcteHh7XHJcblx0XHR3aWR0aDogMjMwdXB4O1xyXG5cdFx0aGVpZ2h0OiAyMDB1cHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogMTAwcnB4O1xyXG5cdFx0dG9wOiA1NTBycHg7XHJcblx0fVxyXG5cdC5saW5le1xyXG5cdFx0d2lkdGg6IDIwcnB4O1xyXG5cdH1cclxuXHQvKiDor5XnnIvnu5PmnZ/lvLnlh7rnqpcgKi9cclxuXHQudHJ5LWxpdmUtZW5kLWJ0bi1idXl7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzIyO1xyXG5cdH1cclxuXHQudHJ5LWxpdmUtZW5kLWJ0bi1yZWN7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCODAwO1xyXG5cdH1cclxuXHQudHJ5LWxpdmUtZW5kLWJ0bi1iYWNre1xyXG5cdFx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMDFBQUVEO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMTIsMjA4LDAuOCk7XHJcblx0fVxyXG5cdC50cnktbGl2ZS1lbmQtYnRuLWJ1eSwgLnRyeS1saXZlLWVuZC1idG4tcmVjLCAudHJ5LWxpdmUtZW5kLWJ0bi1iYWNre1xyXG5cdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdGhlaWdodDogNzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNzBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdH1cclxuXHQudHJ5LWxpdmUtZW5kLWJ0bntcclxuXHRcdGxpbmVzOiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQudHJ5LWxpdmUtZW5kLWltZ3tcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC50cnktbGl2ZS1lbmQtY29udGVudC1mb250e1xyXG5cdFx0Zm9udC1zaXplOiAzNXJweDtcclxuXHRcdGNvbG9yOiAjNjY2NjY2O1xyXG5cdH1cclxuXHQudHJ5LWxpdmUtZW5kLWNvbnRlbnR7XHJcblx0XHRwYWRkaW5nOiAzMHJweDtcclxuXHRcdG1hcmdpbjogMzBycHggMDtcclxuXHRcdGxpbmVzOiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC50cnktbGl2ZS1lbmQtdGl0bGV7XHJcblx0XHRoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMDFBQUVEO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMjU1LDEyLDIwOCwwLjgpLCByZ2JhKDI1NCw2NywxMDEsMC44KSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzMHJweCAzMHJweCAwIDA7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCAzMHJweDtcclxuXHR9XHJcblx0LnRyeS1saXZlLWVuZC10aXRsZS1mb250e1xyXG5cdFx0Zm9udC1zaXplOiAzOHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHQudHJ5LWxpdmUtZW5ke1xyXG5cdFx0d2lkdGg6IDU1MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzMHJweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAzMHJweDtcclxuXHR9XHJcblx0Lyog5omT6LWP5o6S6KGM5qacICovXHJcblx0Lmxpc3QtdXNlcm5hbWV7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTVycHg7XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdC5naWZ0LXNvcnQtaXRlbS1yaWdodHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6ICNGRjU3MjI7XHJcblx0fVxyXG5cdC5naWZ0LXNvcnQtaXRlbS1sZWZ0e1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzIyO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAzcHggOHB4ICNGRkI4MDA7XHJcblx0fVxyXG5cdC5naWZ0LXNvcnQtaXRlbS1pbWd7XHJcblx0XHR3aWR0aDogNTVycHg7XHJcblx0XHRoZWlnaHQ6IDU1cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuXHR9XHJcblx0LmdpZnQtc29ydC1pdGVte1xyXG5cdFx0bGluZXM6IDE7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogNzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNzBycHg7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdFx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xyXG5cdH1cclxuXHQuZ2lmdC1zb3J0LWxpc3R7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0aGVpZ2h0OiA0MDBycHg7XHJcblx0XHR3aWR0aDogNTkwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHRcdHBhZGRpbmc6IDMwcnB4O1xyXG5cdH1cclxuXHQubm8zLCAubm8ye1xyXG5cdFx0bWFyZ2luLXRvcDogNzBycHghaW1wb3J0YW50O1xyXG5cdFx0d2lkdGg6IDI1M3JweCFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDcxcnB4IWltcG9ydGFudDtcclxuXHR9XHJcblx0LmdpZnQtc29ydC1pbmZvLW5vMXtcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0XHRoZWlnaHQ6IDk2cnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNXJweDtcclxuXHR9XHJcblx0LmdpZnQtc29ydC10ZXh0e1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Ly9mb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGQjgwMDtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAzcHggOHB4ICNGRkI4MDA7XHJcblx0fVxyXG5cdC5naWZ0LXNvcnQtdXNlcm5hbWV7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxNXJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblx0LmdpZnQtc29ydC1nb2xke1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW46IDEwcnB4IDA7XHJcblx0fVxyXG5cdC5naWZ0LXNvcnQtaW5mby1oZWFkaW1ne1xyXG5cdFx0d2lkdGg6IDEzMHJweDtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgM3B4IDhweCAjMDAwMDAwO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdC5naWZ0LXNvcnQtaW5mb3tcclxuXHRcdC8vYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHdpZHRoOiAxOTZycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuZ2lmdC1zb3J0LWhlYWR7XHJcblx0XHRsaW5lczogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHQvL2hlaWdodDogMjUwcnB4O1xyXG5cdFx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xyXG5cdH1cclxuXHQuZ2lmdC1saXN0LXNvcnR7XHJcblx0XHR3aWR0aDogNjUwcnB4O1xyXG5cdFx0Ly9oZWlnaHQ6IDc1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMwcnB4O1xyXG5cdFx0cGFkZGluZzogNDBycHggMDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDI1NSwxMiwyMDgsMC44KSwgcmdiYSgyNTQsNjcsMTAxLDAuOCkpO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0Lyog6K+V55yL5YCS6K6h5pe2ICovXHJcblx0LmdpdmUtc29ydC1sZWZ0e1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMjBycHg7XHJcblx0fVxyXG5cdC5naXZlLXNvcnQtbGVmdC1he1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGQjgwMCFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5naXZlLXNvcnQtbGVmdC1ie1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGNTcyMiFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC8qIOaOkuihjOamnOaMiemSriAqL1xyXG5cdC5naXZlLXNvcnQtcmlnaHQsIC5naXZlLXNvcnQtbGVmdHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMTgwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiAxNXJweCAyNXJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMTIsMjA4LDAuOCk7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0fVxyXG5cdC8qIOaJk+i1j+eUqOaIt+S/oeaBryAqL1xyXG5cdC5naXZlLXVzZXItaW5mb3tcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRsaW5lczogMTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQvL2JhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0fVxyXG5cdC52aXB7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDM4cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0cGFkZGluZzogMTBycHggMTVycHg7XHJcblx0fVxyXG5cdC5idG4tY2xvc2V7XHJcblx0XHRwYWRkaW5nOiAxNXJweCAyMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzMHJweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdH1cclxuXHQuZ2l2ZS1nb2xke1xyXG5cdFx0Zm9udC1zaXplOiAzNXJweDtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NCw2NywxMDEsMC44KTtcclxuXHR9XHJcblx0LmdpdmUtdXNlcm5hbWV7XHJcblx0XHRmb250LXNpemU6IDM1cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW46IDMwcnB4IDA7XHJcblx0fVxyXG5cdC5naXZlLXVzZXItaW1ne1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblx0XHRib3JkZXItY29sb3I6IHJnYmEoMjQ1LDE2MCwxLDAuOCk7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdG1hcmdpbi10b3A6IDUwcnB4O1xyXG5cdH1cclxuXHQudXNlci1naXZlLWJne1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogNDAwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjc1KTtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDUwcnB4IDA7XHJcblx0fVxyXG5cdC8qIGVuZCAqL1xyXG5cdC5saXZlLXRvcC1yYW5raW5ne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwxMiwyMDgsMC44KTtcclxuXHRcdGZvbnQtc2l6ZTogOHB4O1xyXG5cdFx0aGVpZ2h0OiAyOHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE1cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQudG8tcmlnaHR7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDBycHghaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdFx0d2lkdGg6IDExMHJweDtcclxuXHR9XHJcblx0LnRvLWxlZnR7XHJcblx0XHRtYXJnaW4tbGVmdDogMTFycHghaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweCFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5saXZlLXRvcC1yaWdodHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRsaW5lczogMTtcclxuXHRcdC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG5cdFx0Ly93aWR0aDogMzQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE1cnB4O1xyXG5cdH1cclxuXHQubGl2ZS10b3AtYWRke1xyXG5cdFx0d2lkdGg6IDYwcnB4O1xyXG5cdFx0aGVpZ2h0OiA2MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDExcnB4O1xyXG5cdH1cclxuXHQubGl2ZS10aW1le1xyXG5cdFx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHQvL2JhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcblx0fVxyXG5cdC5saXZlLXVzZXJuYW1le1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHR3aWR0aDogMTkwcnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xyXG5cdFx0bGluZXM6MTtcclxuXHR9XHJcblx0LmxpdmUtY2VudGVye1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTVycHg7XHJcblx0fVxyXG5cdC5saXZlLXRvcC10eHtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDExcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDclO1xyXG5cdH1cclxuXHQubGl2ZS10b3AtbGVmdHtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHR3aWR0aDogMzUwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0bGluZXM6IDE7XHJcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///68\n");

/***/ }),
/* 69 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_top_head.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../../../FILE_WORK/HBuilder/HBuilderX.3.99.2023122611/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_top_head.nvue?vue&type=style&index=0&lang=css&mpType=page */ 70);
/* harmony import */ var _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_FILE_WORK_HBuilder_HBuilderX_3_99_2023122611_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_top_head_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 70 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/file/Desktop/mine/uniapp/v5-app/v5-app/pages/subnvue/live_top_head.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "popup-bg-xx": {
    "width": "230upx",
    "height": "200upx",
    "position": "fixed",
    "right": "100rpx",
    "top": "550rpx"
  },
  "line": {
    "width": "20rpx"
  },
  "try-live-end-btn-buy": {
    "backgroundColor": "#FF5722",
    "width": "150rpx",
    "height": "70rpx",
    "lineHeight": "70rpx",
    "textAlign": "center",
    "fontSize": "14",
    "color": "#FFFFFF",
    "borderRadius": "10rpx"
  },
  "try-live-end-btn-rec": {
    "backgroundColor": "#FFB800",
    "width": "150rpx",
    "height": "70rpx",
    "lineHeight": "70rpx",
    "textAlign": "center",
    "fontSize": "14",
    "color": "#FFFFFF",
    "borderRadius": "10rpx"
  },
  "try-live-end-btn-back": {
    "backgroundColor": "rgba(255,12,208,0.8)",
    "width": "150rpx",
    "height": "70rpx",
    "lineHeight": "70rpx",
    "textAlign": "center",
    "fontSize": "14",
    "color": "#FFFFFF",
    "borderRadius": "10rpx"
  },
  "try-live-end-btn": {
    "lines": 1,
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "try-live-end-img": {
    "width": "100rpx",
    "height": "100rpx",
    "marginRight": "20rpx"
  },
  "try-live-end-content-font": {
    "fontSize": "35rpx",
    "color": "#666666"
  },
  "try-live-end-content": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx",
    "marginTop": "30rpx",
    "marginRight": 0,
    "marginBottom": "30rpx",
    "marginLeft": 0,
    "lines": 1,
    "flexDirection": "row",
    "alignItems": "center"
  },
  "try-live-end-title": {
    "height": "90rpx",
    "backgroundImage": "linear-gradient(to right,rgba(255,12,208,0.8), rgba(254,67,101,0.8))",
    "borderTopLeftRadius": "30rpx",
    "borderTopRightRadius": "30rpx",
    "borderBottomRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "alignItems": "flex-start",
    "justifyContent": "center",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "try-live-end-title-font": {
    "fontSize": "38rpx",
    "color": "#FFFFFF"
  },
  "try-live-end": {
    "width": "550rpx",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "30rpx",
    "paddingBottom": "30rpx"
  },
  "list-username": {
    "fontSize": "14",
    "marginLeft": "15rpx",
    "color": "#666666"
  },
  "gift-sort-item-right": {
    "position": "absolute",
    "right": 0,
    "fontSize": "14",
    "color": "#FF5722"
  },
  "gift-sort-item-left": {
    "marginRight": "20rpx",
    "width": "40rpx",
    "height": "40rpx",
    "backgroundColor": "#FF5722",
    "borderRadius": 50,
    "fontSize": "12",
    "color": "#FFFFFF",
    "lineHeight": "40rpx",
    "textAlign": "center",
    "boxShadow": "inset 0px 1px rgba(255, 255, 255, 0.4), 0 3px 8px #FFB800"
  },
  "gift-sort-item-img": {
    "width": "55rpx",
    "height": "55rpx",
    "borderRadius": 50,
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#eeeeee"
  },
  "gift-sort-item": {
    "lines": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "height": "70rpx",
    "lineHeight": "70rpx",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#eeeeee",
    "paddingBottom": "20rpx",
    "marginBottom": "20rpx"
  },
  "gift-sort-list": {
    "backgroundColor": "#FFFFFF",
    "height": "400rpx",
    "width": "590rpx",
    "borderRadius": "20rpx",
    "marginTop": "30rpx",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "no3": {
    "marginTop": "70rpx",
    "width": "253rpx",
    "height": "71rpx"
  },
  "no2": {
    "marginTop": "70rpx",
    "width": "253rpx",
    "height": "71rpx"
  },
  "gift-sort-info-no1": {
    "width": "100rpx",
    "height": "96rpx",
    "marginBottom": "5rpx"
  },
  "gift-sort-text": {
    "marginTop": "15rpx",
    "fontSize": "28rpx",
    "color": "#FFFFFF",
    "backgroundColor": "#FFB800",
    "paddingTop": "10rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "10rpx",
    "boxShadow": "inset 0px 1px rgba(255, 255, 255, 0.4), 0 3px 8px #FFB800"
  },
  "gift-sort-username": {
    "paddingTop": "10rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "15rpx",
    "backgroundColor": "#009688",
    "borderRadius": "10rpx",
    "color": "#FFFFFF",
    "fontSize": "12"
  },
  "gift-sort-gold": {
    "fontSize": "13",
    "color": "#FFFFFF",
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0
  },
  "gift-sort-info-headimg": {
    "width": "130rpx",
    "height": "130rpx",
    "borderRadius": 50,
    "boxShadow": "inset 0px 1px rgba(255, 255, 255, 0.4), 0 3px 8px #000000",
    "marginBottom": "20rpx"
  },
  "gift-sort-info": {
    "width": "196rpx",
    "alignItems": "center"
  },
  "gift-sort-head": {
    "lines": 1,
    "flexDirection": "row"
  },
  "gift-list-sort": {
    "width": "650rpx",
    "borderRadius": "30rpx",
    "paddingTop": "40rpx",
    "paddingRight": 0,
    "paddingBottom": "40rpx",
    "paddingLeft": 0,
    "backgroundImage": "linear-gradient(to right,rgba(255,12,208,0.8), rgba(254,67,101,0.8))",
    "alignItems": "center"
  },
  "give-sort-left": {
    "position": "fixed",
    "left": "20rpx",
    "top": "180rpx",
    "color": "#FFFFFF",
    "paddingTop": "15rpx",
    "paddingRight": "25rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "25rpx",
    "borderRadius": "30rpx",
    "backgroundColor": "rgba(255,12,208,0.8)",
    "fontSize": "13"
  },
  "give-sort-left-a": {
    "backgroundColor": "#FFB800"
  },
  "give-sort-left-b": {
    "backgroundColor": "#FF5722"
  },
  "give-sort-right": {
    "position": "fixed",
    "top": "180rpx",
    "color": "#FFFFFF",
    "paddingTop": "15rpx",
    "paddingRight": "25rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "25rpx",
    "borderRadius": "30rpx",
    "backgroundColor": "rgba(255,12,208,0.8)",
    "fontSize": "13"
  },
  "give-user-info": {
    "flexDirection": "row",
    "lines": 1,
    "alignItems": "center"
  },
  "vip": {
    "width": "80rpx",
    "height": "38rpx",
    "marginLeft": "10rpx",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10rpx",
    "paddingTop": "10rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "15rpx"
  },
  "btn-close": {
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "backgroundColor": "#009688",
    "borderRadius": "30rpx",
    "color": "#FFFFFF",
    "fontSize": "28rpx",
    "marginTop": "30rpx"
  },
  "give-gold": {
    "fontSize": "35rpx",
    "color": "rgba(254,67,101,0.8)"
  },
  "give-username": {
    "fontSize": "35rpx",
    "color": "#FFFFFF",
    "marginTop": "30rpx",
    "marginRight": 0,
    "marginBottom": "30rpx",
    "marginLeft": 0
  },
  "give-user-img": {
    "width": "100rpx",
    "height": "100rpx",
    "borderRadius": "50rpx",
    "borderColor": "rgba(245,160,1,0.8)",
    "borderWidth": "1",
    "marginTop": "50rpx"
  },
  "user-give-bg": {
    "width": "750rpx",
    "height": "400rpx",
    "backgroundColor": "rgba(0,0,0,0.75)",
    "borderBottomLeftRadius": "50rpx",
    "borderBottomRightRadius": "50rpx",
    "alignItems": "center",
    "paddingTop": "50rpx",
    "paddingRight": 0,
    "paddingBottom": "50rpx",
    "paddingLeft": 0
  },
  "live-top-ranking": {
    "position": "absolute",
    "bottom": 0,
    "color": "#ffffff",
    "backgroundColor": "rgba(255,12,208,0.8)",
    "fontSize": "8",
    "height": "28rpx",
    "lineHeight": "30rpx",
    "width": "30rpx",
    "borderRadius": "30rpx",
    "marginLeft": "15rpx",
    "textAlign": "center"
  },
  "to-right": {
    "marginRight": "0rpx",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "textAlign": "center",
    "color": "#FFFFFF",
    "fontSize": "26rpx",
    "lineHeight": "60rpx",
    "width": "110rpx"
  },
  "to-left": {
    "marginLeft": "11rpx",
    "marginRight": "10rpx"
  },
  "live-top-right": {
    "flexDirection": "row",
    "lines": 1,
    "height": "80rpx",
    "borderRadius": "50rpx",
    "marginLeft": "15rpx"
  },
  "live-top-add": {
    "width": "60rpx",
    "height": "60rpx",
    "marginTop": "11rpx"
  },
  "live-time": {
    "fontSize": "11",
    "color": "#FFFFFF"
  },
  "live-username": {
    "color": "#FFFFFF",
    "fontSize": "14",
    "width": "190rpx",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "live-center": {
    "marginTop": "10rpx",
    "marginLeft": "15rpx"
  },
  "live-top-tx": {
    "width": "60rpx",
    "height": "60rpx",
    "borderRadius": "60rpx",
    "marginTop": "11rpx",
    "marginLeft": 7
  },
  "live-top-left": {
    "height": "80rpx",
    "width": "350rpx",
    "borderRadius": "50rpx",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "flexDirection": "row",
    "lines": 1
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);