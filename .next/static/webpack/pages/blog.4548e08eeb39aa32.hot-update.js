"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n//import Head from \"next/head\";\n\n\n\n\nconst Layout = (param)=>{\n    let { children, title, footer = true, dark = false } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            console.log();\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({\n            \"bg-dark\": dark,\n            \"bg-light\": dark\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(\"text-center\", {\n                            \"text-ligth\": dark\n                        }),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Javier Alfonso Mor\\xe1n Rodr\\xedguez - Portafolio\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2000 - \",\n                                new Date().getFullYear(),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights Reserver.\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\components\\\\Layout.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUM5QiwrQkFBK0I7QUFDRztBQUNNO0FBQ047QUFDRTtBQUtwQyxNQUFNSyxTQUFTO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsSUFBSSxFQUFFQyxPQUFLLEtBQUssRUFBRTs7SUFDNUQsTUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLG9CQUFvQkMsQ0FBQUE7WUFDeEJDLFFBQVFDLEdBQUc7WUFDWFgsc0RBQWU7UUFDakI7UUFDQU8sT0FBT00sTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CTjtRQUNyQ0QsT0FBT00sTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCLElBQU1kLHFEQUFjO1FBQzVELE9BQU87WUFDTE8sT0FBT00sTUFBTSxDQUFDRyxHQUFHLENBQUMsb0JBQW9CUjtRQUV4QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFXakIsaURBQVVBLENBQUM7WUFBQyxXQUFXSztZQUFNLFlBQVlBO1FBQUk7OzBCQUMzRCw4REFBQ1QsK0NBQU1BOzs7OzswQkFDUCw4REFBQ3NCO2dCQUFLRCxXQUFVOztvQkFDYmQsdUJBQ0MsOERBQUNnQjt3QkFBR0YsV0FBV2pCLGlEQUFVQSxDQUFDLGVBQWM7NEJBQUMsY0FBY0s7d0JBQUk7a0NBQ3hERjs7Ozs7O29CQUlKRDs7Ozs7OztZQUdERSx3QkFDRSw4REFBQ0E7Z0JBQU9hLFdBQVU7MEJBQ2hCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNFO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOztnQ0FBRTtnQ0FBUSxJQUFJQyxPQUFPQyxXQUFXO2dDQUFHOzs7Ozs7O3NDQUNwQyw4REFBQ0Y7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0dBM0NNbkI7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQTZDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbi8vaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiOyBcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZm9vdGVyID0gdHJ1ZSwgZGFyaz1mYWxzZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gblByb2dyZXNzLmRvbmUoKSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG5cclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsnYmctZGFyayc6IGRhcmssICdiZy1saWdodCc6IGRhcmt9KX0+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgICB7dGl0bGUgJiYgKFxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGV4dC1jZW50ZXInLHsndGV4dC1saWd0aCc6IGRhcmt9KX0+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIHtcclxuICAgICAgICBmb290ZXIgJiYgKFxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgICAgPGgxPiZjb3B5OyBKYXZpZXIgQWxmb25zbyBNb3LDoW4gUm9kcsOtZ3VleiAtIFBvcnRhZm9saW88L2gxPlxyXG4gICAgICAgICAgICAgIDxwPjIwMDAgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyBSZXNlcnZlci48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJuUHJvZ3Jlc3MiLCJjbGFzc05hbWVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZvb3RlciIsImRhcmsiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImV2ZW50cyIsIm9uIiwiZG9uZSIsIm9mZiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});