"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiences: function() { return /* binding */ experiences; },\n/* harmony export */   post: function() { return /* binding */ post; },\n/* harmony export */   projects: function() { return /* binding */ projects; },\n/* harmony export */   skills: function() { return /* binding */ skills; }\n/* harmony export */ });\nconst skills = [\n    {\n        skill: \"JavaScript\",\n        percentage: 80\n    },\n    {\n        skill: \"Java\",\n        percentage: 60\n    },\n    {\n        skill: \"PHP\",\n        percentage: 80\n    },\n    {\n        skill: \"Html\",\n        percentage: 90\n    },\n    {\n        skill: \"Css\",\n        percentage: 90\n    },\n    {\n        skill: \"React\",\n        percentage: 50\n    },\n    {\n        skill: \"NodeJS\",\n        percentage: 50\n    },\n    {\n        skill: \"Technical Support\",\n        percentage: 100\n    }\n];\nconst experiences = [\n    {\n        title: \"La casa del Computador\",\n        description: \"Soporte t\\xe8cnico, Mantenimiento preventivo y correctivo de Computadores y Port\\xe0tiles, Intalaci\\xf2n de redes Windows y Linux\",\n        from: 1998,\n        to: 2000\n    },\n    {\n        title: \"Am\\xe9rican TecnyCompu\",\n        description: \"Soporte t\\xe8cnico especializado, Mantenimiento preventivo y correctivo de Computadores y Port\\xe0tiles, Intalaci\\xf2n de redes Windows y Linux, dise\\xf1o de sitios Web\",\n        from: 2000\n    }\n];\nconst projects = [\n    {\n        name: \"Sirscom Web Site\",\n        description: \"Sitio Web Corporativo de Sirscom LTDA. \",\n        image: \"sirscom.jpg\"\n    },\n    {\n        name: \"Respuesto para Motos\",\n        description: \"Sitio Web Corporativo de Repuestos para Motos LTDA. \",\n        image: \"repuestos.jpg\"\n    },\n    {\n        name: \"Rampicentro Web Site\",\n        description: \"Sitio Web Corporativo del Centro comercial Rampicentro P.H. \",\n        image: \"rampicentro.jpg\"\n    },\n    {\n        name: \"Am\\xe9rican TecnyCompu Web Site\",\n        description: \"Sitio Web Corporativo de Am\\xe9rican TecnyCompu. \",\n        image: \"tecnycompu.jpg\"\n    },\n    {\n        name: \"Alfa Basket Fusa Web Site\",\n        description: \"Sitio Web Corporativo del Club de Baloncesto Alfa basket Fusa\",\n        image: \"alfabasketfusa.jpg\"\n    }\n];\nconst post = [\n    {\n        name: \"Sirscom Web Site\",\n        description: \"Sitio Web Corporativo de Sirscom LTDA. \",\n        image: \"sirscom.jpg\"\n    },\n    {\n        name: \"Respuesto para Motos\",\n        description: \"Sitio Web Corporativo de Repuestos para Motos LTDA. \",\n        image: \"repuestos.jpg\"\n    },\n    {\n        name: \"Rampicentro Web Site\",\n        description: \"Sitio Web Corporativo del Centro comercial Rampicentro P.H. \",\n        image: \"rampicentro.jpg\"\n    },\n    {\n        name: \"Am\\xe9rican TecnyCompu Web Site\",\n        description: \"Sitio Web Corporativo de Am\\xe9rican TecnyCompu. \",\n        image: \"tecnycompu.jpg\"\n    },\n    {\n        name: \"Alfa Basket Fusa Web Site\",\n        description: \"Sitio Web Corporativo del Club de Baloncesto Alfa basket Fusa\",\n        image: \"alfabasketfusa.jpg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxTQUFTO0lBRWxCO1FBQ0lDLE9BQU87UUFDUEMsWUFBWTtJQUVoQjtJQUVBO1FBQ0lELE9BQU87UUFDUEMsWUFBWTtJQUVoQjtJQUNBO1FBQ0lELE9BQU87UUFDUEMsWUFBWTtJQUVoQjtJQUNBO1FBQ0lELE9BQU87UUFDUEMsWUFBWTtJQUVoQjtJQUNBO1FBQ0lELE9BQU87UUFDUEMsWUFBWTtJQUVoQjtJQUNBO1FBQ0lELE9BQU87UUFDUEMsWUFBWTtJQUVoQjtJQUNBO1FBQ0lELE9BQU87UUFDUEMsWUFBWTtJQUVoQjtJQUNBO1FBQ0lELE9BQU87UUFDUEMsWUFBWTtJQUVoQjtDQUVIO0FBRU0sTUFBTUMsY0FBYztJQUV2QjtRQUNJQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsTUFBTTtRQUNOQyxJQUFJO0lBQ1I7SUFHQTtRQUNJSCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsTUFBTTtJQUVWO0NBR0g7QUFFTSxNQUFNRSxXQUFXO0lBRXBCO1FBQ0lDLE1BQU07UUFDTkosYUFBYTtRQUNiSyxPQUFPO0lBQ1g7SUFDQTtRQUNJRCxNQUFNO1FBQ05KLGFBQWE7UUFDYkssT0FBTztJQUNYO0lBQ0E7UUFDSUQsTUFBTTtRQUNOSixhQUFhO1FBQ2JLLE9BQU87SUFDWDtJQUNBO1FBQ0lELE1BQU07UUFDTkosYUFBYTtRQUNiSyxPQUFPO0lBQ1g7SUFDQTtRQUNJRCxNQUFNO1FBQ05KLGFBQWE7UUFDYkssT0FBTztJQUNYO0NBR0g7QUFHTSxNQUFNQyxPQUFPO0lBRWhCO1FBQ0lGLE1BQU07UUFDTkosYUFBYTtRQUNiSyxPQUFPO0lBQ1g7SUFDQTtRQUNJRCxNQUFNO1FBQ05KLGFBQWE7UUFDYkssT0FBTztJQUNYO0lBQ0E7UUFDSUQsTUFBTTtRQUNOSixhQUFhO1FBQ2JLLE9BQU87SUFDWDtJQUNBO1FBQ0lELE1BQU07UUFDTkosYUFBYTtRQUNiSyxPQUFPO0lBQ1g7SUFDQTtRQUNJRCxNQUFNO1FBQ05KLGFBQWE7UUFDYkssT0FBTztJQUNYO0NBR0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcz85ZGFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcblxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YVNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdKYXZhJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA2MCxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUEhQJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSHRtbCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogOTAsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0NzcycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogOTAsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA1MCxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTm9kZUpTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA1MCxcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnVGVjaG5pY2FsIFN1cHBvcnQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcclxuXHJcbiAgICB9LFxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG5cclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0xhIGNhc2EgZGVsIENvbXB1dGFkb3InLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU29wb3J0ZSB0w6hjbmljbywgTWFudGVuaW1pZW50byBwcmV2ZW50aXZvIHkgY29ycmVjdGl2byBkZSBDb21wdXRhZG9yZXMgeSBQb3J0w6B0aWxlcywgSW50YWxhY2nDsm4gZGUgcmVkZXMgV2luZG93cyB5IExpbnV4JyxcclxuICAgICAgICBmcm9tOiAxOTk4LFxyXG4gICAgICAgIHRvOiAyMDAwXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdBbcOpcmljYW4gVGVjbnlDb21wdScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTb3BvcnRlIHTDqGNuaWNvIGVzcGVjaWFsaXphZG8sIE1hbnRlbmltaWVudG8gcHJldmVudGl2byB5IGNvcnJlY3Rpdm8gZGUgQ29tcHV0YWRvcmVzIHkgUG9ydMOgdGlsZXMsIEludGFsYWNpw7JuIGRlIHJlZGVzIFdpbmRvd3MgeSBMaW51eCwgZGlzZcOxbyBkZSBzaXRpb3MgV2ViJyxcclxuICAgICAgICBmcm9tOiAyMDAwLCAgICAgXHJcblxyXG4gICAgfSwgICAgXHJcbiAgIFxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG5cclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnU2lyc2NvbSBXZWIgU2l0ZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaXRpbyBXZWIgQ29ycG9yYXRpdm8gZGUgU2lyc2NvbSBMVERBLiAnLFxyXG4gICAgICAgIGltYWdlOiBcInNpcnNjb20uanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSZXNwdWVzdG8gcGFyYSBNb3RvcycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaXRpbyBXZWIgQ29ycG9yYXRpdm8gZGUgUmVwdWVzdG9zIHBhcmEgTW90b3MgTFREQS4gJyxcclxuICAgICAgICBpbWFnZTogXCJyZXB1ZXN0b3MuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSYW1waWNlbnRybyBXZWIgU2l0ZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaXRpbyBXZWIgQ29ycG9yYXRpdm8gZGVsIENlbnRybyBjb21lcmNpYWwgUmFtcGljZW50cm8gUC5ILiAnLFxyXG4gICAgICAgIGltYWdlOiBcInJhbXBpY2VudHJvLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnQW3DqXJpY2FuIFRlY255Q29tcHUgV2ViIFNpdGUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2l0aW8gV2ViIENvcnBvcmF0aXZvIGRlIEFtw6lyaWNhbiBUZWNueUNvbXB1LiAnLFxyXG4gICAgICAgIGltYWdlOiBcInRlY255Y29tcHUuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdBbGZhIEJhc2tldCBGdXNhIFdlYiBTaXRlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpdGlvIFdlYiBDb3Jwb3JhdGl2byBkZWwgQ2x1YiBkZSBCYWxvbmNlc3RvIEFsZmEgYmFza2V0IEZ1c2EnLFxyXG4gICAgICAgIGltYWdlOiBcImFsZmFiYXNrZXRmdXNhLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgXHJcblxyXG5dXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3QgPSBbXHJcblxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdTaXJzY29tIFdlYiBTaXRlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpdGlvIFdlYiBDb3Jwb3JhdGl2byBkZSBTaXJzY29tIExUREEuICcsXHJcbiAgICAgICAgaW1hZ2U6IFwic2lyc2NvbS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1Jlc3B1ZXN0byBwYXJhIE1vdG9zJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpdGlvIFdlYiBDb3Jwb3JhdGl2byBkZSBSZXB1ZXN0b3MgcGFyYSBNb3RvcyBMVERBLiAnLFxyXG4gICAgICAgIGltYWdlOiBcInJlcHVlc3Rvcy5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1JhbXBpY2VudHJvIFdlYiBTaXRlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpdGlvIFdlYiBDb3Jwb3JhdGl2byBkZWwgQ2VudHJvIGNvbWVyY2lhbCBSYW1waWNlbnRybyBQLkguICcsXHJcbiAgICAgICAgaW1hZ2U6IFwicmFtcGljZW50cm8uanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdBbcOpcmljYW4gVGVjbnlDb21wdSBXZWIgU2l0ZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaXRpbyBXZWIgQ29ycG9yYXRpdm8gZGUgQW3DqXJpY2FuIFRlY255Q29tcHUuICcsXHJcbiAgICAgICAgaW1hZ2U6IFwidGVjbnljb21wdS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FsZmEgQmFza2V0IEZ1c2EgV2ViIFNpdGUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2l0aW8gV2ViIENvcnBvcmF0aXZvIGRlbCBDbHViIGRlIEJhbG9uY2VzdG8gQWxmYSBiYXNrZXQgRnVzYScsXHJcbiAgICAgICAgaW1hZ2U6IFwiYWxmYWJhc2tldGZ1c2EuanBnXCIsXHJcbiAgICB9LFxyXG4gICBcclxuXHJcbl0iXSwibmFtZXMiOlsic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJuYW1lIiwiaW1hZ2UiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./profile.js\n"));

/***/ })

});