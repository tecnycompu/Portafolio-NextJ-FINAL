"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./pages/github.js":
/*!*************************!*\
  !*** ./pages/github.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n// import { getServerSideProps } from \"next/dist/build/templates/pages\";\n\n\nconst Github = (param)=>{\n    let { user } = param;\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-4 offset-md-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: user.name\n                    }, void 0, false, {\n                        fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\pages\\\\github.js\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\pages\\\\github.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\pages\\\\github.js\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\pages\\\\github.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\DEV BOOTCAMP Desarrollo Web Full Stack\\\\Bootcamp TalenTech\\\\ENTREGABLE PORTAFOLIO\\\\pages\\\\github.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Github;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Github);\nvar _c;\n$RefreshReg$(_c, \"Github\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRodWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHdFQUF3RTs7QUFDOUI7QUFFMUMsTUFBTUMsU0FBUztRQUFDLEVBQUVDLElBQUksRUFBRTtJQUNwQkMsUUFBUUMsR0FBRyxDQUFDQztJQUNaLHFCQUNJLDhEQUFDTCwwREFBTUE7a0JBQ0gsNEVBQUNNO1lBQUlDLE9BQU07c0JBQ1AsNEVBQUNEO2dCQUFJRSxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUlQLEtBQUtRLElBQUk7Ozs7OztrQ0FDZCw4REFBQ0M7d0JBQUlDLEtBQUk7d0JBQUdDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTcEM7S0FoQk1aOztBQTZCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9naXRodWIuanM/MzU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBnZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9wYWdlc1wiO1xyXG5pbXBvcnQgTGF5YXV0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuY29uc3QgR2l0aHViID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheWF1dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBvZmZzZXQtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57dXNlci5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L0xheWF1dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3RlY255Y29tcHUnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB1c2VyOiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7XHJcbiJdLCJuYW1lcyI6WyJMYXlhdXQiLCJHaXRodWIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiZGl2IiwiY2xhc3MiLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/github.js\n"));

/***/ })

});