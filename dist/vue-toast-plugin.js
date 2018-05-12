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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_vue-loader@15.0.10@vue-loader/lib/runtime/componentNormalizer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.0.10@vue-loader/lib/runtime/componentNormalizer.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/_vue-loader@15.0.10@vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _index = __webpack_require__(/*! ./index.vue */ \"./src/index.vue\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Toast = {};\nToast.install = function (Vue, options) {\n\n  var opt = {\n    duration: 3000\n  };\n\n  for (var key in options) {\n    opt[key] = options[key];\n  }\n\n  Vue.prototype.$toast = function (message, option) {\n\n    if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object') {\n      for (var _key in option) {\n        opt[_key] = option[_key];\n      }\n    }\n\n    var ToastController = Vue.extend(_index2.default);\n\n    var instance = new ToastController().$mount(document.createElement('div'));\n\n    instance.message = message;\n    instance.visible = true;\n\n    document.body.appendChild(instance.$el);\n\n    setInterval(function () {\n      instance.visible = false;\n      document.body.removeChild(instance.$el);\n    }, opt.duration);\n  };\n\n  Vue.prototype.$toast['show'] = function (message, option) {\n    Vue.prototype.$toast(message, option);\n  };\n};\n\nif (window.Vue) {\n  Vue.use(Toast);\n}\n\nexports.default = Toast;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.vue":
/*!***********************!*\
  !*** ./src/index.vue ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2964abc9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2964abc9&scoped=true */ \"./src/index.vue?vue&type=template&id=2964abc9&scoped=true\");\n/* harmony import */ var _index_vue_vue_type_template_id_2964abc9_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue_vue_type_template_id_2964abc9_scoped_true__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ \"./src/index.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2964abc9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2964abc9&lang=scss&scoped=true */ \"./src/index.vue?vue&type=style&index=0&id=2964abc9&lang=scss&scoped=true\");\n/* harmony import */ var _index_vue_vue_type_style_index_0_id_2964abc9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_vue_vue_type_style_index_0_id_2964abc9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_15_0_10_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/_vue-loader@15.0.10@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.0.10@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_0_10_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2964abc9_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2964abc9_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2964abc9\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/index.vue?");

/***/ }),

/***/ "./src/index.vue?vue&type=script&lang=js":
/*!***********************************************!*\
  !*** ./src/index.vue?vue&type=script&lang=js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"index\",\n  data() {\n    return {\n      message: 'Hello, Toast!',\n      visible: true\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.vue?");

/***/ }),

/***/ "./src/index.vue?vue&type=style&index=0&id=2964abc9&lang=scss&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/index.vue?vue&type=style&index=0&id=2964abc9&lang=scss&scoped=true ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (2:0)\\nYou may need an appropriate loader to handle this file type.\\n| \\n| .toast-container{\\n|   display: flex;\\n|   position: fixed;\");\n\n//# sourceURL=webpack:///./src/index.vue?");

/***/ }),

/***/ "./src/index.vue?vue&type=template&id=2964abc9&scoped=true":
/*!*****************************************************************!*\
  !*** ./src/index.vue?vue&type=template&id=2964abc9&scoped=true ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (2:0)\\nYou may need an appropriate loader to handle this file type.\\n| \\n| <div class=\\\"toast-container\\\">\\n|   <div class=\\\"toast\\\">\\n|     <span>{{message}}</span>\");\n\n//# sourceURL=webpack:///./src/index.vue?");

/***/ })

/******/ });