(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define("bubbles", [], factory);
	else if (typeof exports === 'object')
		exports["bubbles"] = factory();
	else
		root["bubbles"] = factory();
})(typeof self !== 'undefined' ? self : this, function () {
	return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
				/******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
				/******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
			/******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
		/******/
});
				/******/
}
			/******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
			/******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
		/******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports) {

			// this module is a runtime utility for cleaner component module output and will
			// be included in the final webpack user bundle

			module.exports = function normalizeComponent(
				rawScriptExports,
				compiledTemplate,
				scopeId,
				cssModules
			) {
				var esModule
				var scriptExports = rawScriptExports = rawScriptExports || {}

				// ES6 modules interop
				var type = typeof rawScriptExports.default
				if (type === 'object' || type === 'function') {
					esModule = rawScriptExports
					scriptExports = rawScriptExports.default
				}

				// Vue.extend constructor export interop
				var options = typeof scriptExports === 'function'
					? scriptExports.options
					: scriptExports

				// render functions
				if (compiledTemplate) {
					options.render = compiledTemplate.render
					options.staticRenderFns = compiledTemplate.staticRenderFns
				}

				// scopedId
				if (scopeId) {
					options._scopeId = scopeId
				}

				// inject cssModules
				if (cssModules) {
					var computed = Object.create(options.computed || null)
					Object.keys(cssModules).forEach(function (key) {
						var module = cssModules[key]
						computed[key] = function () { return module }
					})
					options.computed = computed
				}

				return {
					esModule: esModule,
					exports: scriptExports,
					options: options
				}
			}


			/***/
}),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

			"use strict";


			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var throttle = __webpack_require__(4);
			var resize = function resize(calback, delay) {
				window.addEventListener('resize', throttle(calback, delay));
			};

			exports.default = resize;

			/***/
}),
/* 2 */
/***/ (function (module, exports) {

			/**
			 * @desc AnimationFrame简单兼容hack
			 */
			var animationFrame = function animationFrame() {
				window.cancelAnimationFrame = function () {
					return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (id) {
						return window.clearTimeout(id);
					};
				}();
				window.requestAnimationFrame = function () {
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
						return window.setTimeout(callback, 1000 / 60);
					};
				}();
			};

			module.exports = animationFrame;

			/***/
}),
/* 3 */
/***/ (function (module, exports) {

			var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

			/**
			 * @desc 深浅合并拷贝
			 */
			function copyObj() {
				if (!Array.isArray) {
					Array.isArray = function (arg) {
						return Object.prototype.toString.call(arg) === '[object Array]';
					};
				}
				var name = void 0,
					options = void 0,
					src = void 0,
					copy = void 0,
					copyIsArray = void 0,
					clone = void 0,
					i = 1,
					target = arguments[0] || {},
					// 使用||运算符，排除隐式强制类型转换为false的数据类型
					deep = false,
					len = arguments.length;
				if (typeof target === 'boolean') {
					deep = target;
					target = arguments[1] || {};
					i++;
				}
				if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function') {
					target = {};
				}
				// 如果arguments.length === 1 或typeof arguments[0] === 'boolean',且存在arguments[1]，则直接返回target对象
				if (i === len) {
					return target;
				}
				for (; i < len; i++) {
					//所以如果源对象中数据类型为Undefined或Null那么就会跳过本次循环，接着循环下一个源对象
					if ((options = arguments[i]) != null) {
						// 如果遇到源对象的数据类型为Boolean, Number for in循环会被跳过，不执行for in循环// src用于判断target对象是否存在name属性
						for (name in options) {
							// src用于判断target对象是否存在name属性
							src = target[name];
							// 需要复制的属性当前源对象的name属性
							copy = options[name];
							// 判断copy是否是数组
							copyIsArray = Array.isArray(copy);
							// 如果是深复制且copy是一个对象或数组则需要递归直到copy成为一个基本数据类型为止
							if (deep && copy && ((typeof copy === 'undefined' ? 'undefined' : _typeof(copy)) === 'object' || copyIsArray)) {
								if (copyIsArray) {
									copyIsArray = false;
									// 如果目标对象存在name属性且是一个数组
									// 则使用目标对象的name属性，否则重新创建一个数组，用于复制
									clone = src && Array.isArray(src) ? src : [];
								} else {
									// 如果目标对象存在name属性且是一个对象则使用目标对象的name属性，否则重新创建一个对象，用于复制
									clone = src && (typeof src === 'undefined' ? 'undefined' : _typeof(src)) === 'object' ? src : {};
								}
								// 深复制，所以递归调用copyObject函数
								// 返回值为target对象，即clone对象
								// copy是一个源对象
								target[name] = copyObj(deep, clone, copy);
							} else if (copy !== undefined) {
								// 浅复制，直接复制到target对象上
								target[name] = copy;
							}
						}
					}
				}
				return target;
			}

			module.exports = copyObj;

			/***/
}),
/* 4 */
/***/ (function (module, exports) {

			/**
			 * @desc 节流函数
			 * @param {Function} callBack
			 * @return {Function} fn
			 */
			var throttle = function throttle(fn) {
				var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

				var _self = fn,
					//需要被延迟执行的函数引用
					timer = void 0,
					firstTime = true; //是否第一次调用

				return function () {
					var _this = this;

					var args = arguments;
					if (firstTime) {
						//第一次调用不用延迟
						_self.apply(this, args);
						firstTime = false;
					}

					if (timer) {
						//timer还在没结束前一次
						return false;
					}

					timer = setTimeout(function () {
						//延迟执行
						clearTimeout(timer);
						timer = null; //手动释放timer
						_self.apply(_this, args);
					}, delay);
				};
			};

			module.exports = throttle;

			/***/
}),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

			"use strict";


			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _bubbles = __webpack_require__(6);

			var _bubbles2 = _interopRequireDefault(_bubbles);

			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

			if (typeof window !== 'undefined' && window.Vue) {
				Vue.component(_bubbles2.default.name, _bubbles2.default);
			}

			exports.default = _bubbles2.default;

			/***/
}),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

			var Component = __webpack_require__(0)(
				/* script */
				__webpack_require__(7),
				/* template */
				__webpack_require__(8),
				/* scopeId */
				null,
				/* cssModules */
				null
			)
			Component.options.__file = "G:\\github\\vue-canvas-effect\\src\\components\\bubbles\\bubbles.vue"
			if (Component.esModule && Object.keys(Component.esModule).some(function (key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
			if (Component.options.functional) { console.error("[vue-loader] bubbles.vue: functional components are not supported with templates, they should use render functions.") }

			/* hot reload */
			if (false) {
				(function () {
					var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
					hotAPI.install(require("vue"), false)
					if (!hotAPI.compatible) return
					module.hot.accept()
					if (!module.hot.data) {
						hotAPI.createRecord("data-v-608cfe4f", Component.options)
					} else {
						hotAPI.reload("data-v-608cfe4f", Component.options)
					}
				})()
			}

			module.exports = Component.exports


			/***/
}),
/* 7 */
/***/ (function (module, exports, __webpack_require__) {

			"use strict";


			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _resize = __webpack_require__(1);

			var _resize2 = _interopRequireDefault(_resize);

			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

			__webpack_require__(2)();

			var copyObj = __webpack_require__(3);

			exports.default = {
				name: 'bubblesEffect',
				data: function data() {
					return {
						circles: [],
						requestAniId: null
					};
				},

				props: {
					options: {
						type: Object,
						default: function _default() {
							return {};
						}
					}
				},
				computed: {
					opts: function opts() {
						return copyObj({}, {
							color: 'rgba(225,225,225,0.5)',
							radius: 15,
							densety: 0.3,
							clearOffset: 0.2
						}, this.options);
					}
				},
				methods: {
					randomColor: function randomColor() {
						var r = Math.floor(Math.random() * 255);
						var g = Math.floor(Math.random() * 255);
						var b = Math.floor(Math.random() * 255);
						var alpha = Math.random().toPrecision(2);
						var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
						return rgba;
					}
				},
				mounted: function mounted() {
					var width = void 0,
						height = void 0,
						canvas = void 0,
						ctx = void 0,
						circles = [],
						settings = this.opts,
						that = this;
					initContainer();

					function initContainer() {
						width = window.innerWidth;
						height = window.innerHeight;
						canvas = that.$refs.canvas;
						canvas.width = width;
						canvas.height = height;
						ctx = canvas.getContext('2d');
						for (var x = 0; x < width * settings.densety; x++) {
							var c = new Circle();
							circles.push(c);
						}
						animate();
					}

					function animate() {
						cancelAnimationFrame(self.requestAniId);
						ctx.clearRect(0, 0, width, height);
						for (var i in circles) {
							circles[i].draw();
						}
						self.requestAniId = requestAnimationFrame(animate);
					}

					function Circle() {
						var self = this;
						this.pos = {};
						init();

						function init() {
							self.pos.x = Math.random() * width;
							self.pos.y = height + Math.random() * 100;
							self.alpha = 0.1 + Math.random() * settings.clearOffset;
							self.scale = 0.1 + Math.random() * 0.3;
							self.speed = Math.random();
							self.color = settings.color === 'random' ? that.randomColor() : settings.color;
						}

						this.draw = function () {
							if (self.alpha <= 0) {
								init();
							}
							self.pos.y -= self.speed;
							self.alpha -= 0.0005;
							ctx.beginPath();
							ctx.arc(self.pos.x, self.pos.y, self.scale * settings.radius, 0, 2 * Math.PI, false);
							ctx.fillStyle = self.color;
							ctx.fill();
							ctx.closePath();
						};
					}

					(0, _resize2.default)(function () {
						width = window.innerWidth;
						height = window.innerHeight;
						canvas.width = width;
						canvas.height = height;
					});
				},
				beforeDestroy: function beforeDestroy() {
					cancelAnimationFrame(this.requestAniId);
				}
			};

			/***/
}),
/* 8 */
/***/ (function (module, exports, __webpack_require__) {

			module.exports = {
				render: function () {
					var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h;
					return _c('canvas', {
						ref: "canvas",
						staticStyle: {
							"position": "absolute",
							"top": "0",
							"left": "0"
						}
					})
				}, staticRenderFns: []
			}
			module.exports.render._withStripped = true
			if (false) {
				module.hot.accept()
				if (module.hot.data) {
					require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-608cfe4f", module.exports)
				}
			}

			/***/
})
/******/]);
});