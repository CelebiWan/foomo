"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n/* harmony import */ var _src_components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Table */ \"./src/components/Table.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DataEntryPage() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentEntity = _useState[0], setCurrentEntity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentData = _useState1[0], setCurrentData = _useState1[1];\n    var handleNavClickTable = function(entity) {\n        setCurrentEntity(entity);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function() {\n                var url, response, data, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            switch(currentEntity){\n                                case \"Ingredient\":\n                                    url = \"http://127.0.0.1:8000/api/ingredients/\";\n                                    break;\n                                case \"Property Type\":\n                                    url = \"http://127.0.0.1:8000/api/property-type/\";\n                                    break;\n                                case \"Ingredient Properties\":\n                                    url = \"http://127.0.0.1:8000/api/ingredient-properties\";\n                                    break;\n                                default:\n                                    url = \"\";\n                            }\n                            if (!url) return [\n                                3,\n                                5\n                            ];\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                4,\n                                ,\n                                5\n                            ]);\n                            return [\n                                4,\n                                fetch(url)\n                            ];\n                        case 2:\n                            response = _state.sent();\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 3:\n                            data = _state.sent();\n                            setCurrentData(data);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 4:\n                            error = _state.sent();\n                            console.error(\"Error fetching data: \", error);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 5:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, [\n        currentEntity\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                flex: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handleNavClickTable: handleNavClickTable\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                p: 5,\n                w: \"100%\",\n                h: \"100vh\",\n                overflow: \"auto\",\n                flex: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    selectedTable: currentEntity,\n                    data: currentData\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"MDiDHwukFf7lHtc5Z9d0KfC9Dfo=\");\n_c = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c;\n$RefreshReg$(_c, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTjtBQUNxQjtBQUN0QjtBQUU1QyxTQUFTTzs7SUFDUCxJQUEwQ04sWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUEzRE8sZ0JBQW1DUCxjQUFwQlEsbUJBQW9CUjtJQUMxQyxJQUFzQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFRLEVBQUUsT0FBakRTLGNBQStCVCxlQUFsQlUsaUJBQWtCVjtJQUV0QyxJQUFNVyxzQkFBc0IsU0FBQ0M7UUFDM0JKLGlCQUFpQkk7SUFDbkI7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUixJQUFNWTt1QkFBWTtvQkFDWkMsS0FpQk1DLFVBQ0FDLE1BRUNDOzs7OzRCQW5CWCxPQUFRVjtnQ0FDTixLQUFLO29DQUNITyxNQUFNO29DQUNOO2dDQUNGLEtBQUs7b0NBQ0hBLE1BQU07b0NBQ047Z0NBQ0YsS0FBSztvQ0FDSEEsTUFBTTtvQ0FDTjtnQ0FDRjtvQ0FDRUEsTUFBTTs0QkFDVjtpQ0FFSUEsS0FBQUE7Ozs7Ozs7Ozs7Ozs0QkFFaUI7O2dDQUFNSSxNQUFNSjs7OzRCQUF2QkMsV0FBVzs0QkFDSjs7Z0NBQU1BLFNBQVNJLElBQUk7Ozs0QkFBMUJILE9BQU87NEJBQ2JOLGVBQWVNOzs7Ozs7NEJBQ1JDOzRCQUNQRyxRQUFRSCxLQUFLLENBQUMseUJBQXlCQTs7Ozs7Ozs7Ozs7WUFHN0M7NEJBekJNSjs7OztRQTJCTkE7SUFDRixHQUFHO1FBQUNOO0tBQWM7SUFFbEIscUJBQ0UsOERBQUNKLGtEQUFJQTs7MEJBQ0gsOERBQUNELGlEQUFHQTtnQkFBQ21CLE1BQU07MEJBQ1QsNEVBQUNqQiwwRUFBY0E7b0JBQUNPLHFCQUFxQkE7Ozs7Ozs7Ozs7OzBCQUV2Qyw4REFBQ1QsaURBQUdBO2dCQUFDb0IsR0FBRztnQkFBR0MsR0FBRTtnQkFBT0MsR0FBRTtnQkFBUUMsVUFBUztnQkFBT0osTUFBTTswQkFDbEQsNEVBQUNoQiw2REFBS0E7b0JBQUNxQixlQUFlbkI7b0JBQWVTLE1BQU1QOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluRDtHQWpEU0g7S0FBQUE7QUFtRFQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeD9kN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJDb250ZW50IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vU2lkZUJhcic7IFxyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGFibGUnO1xyXG5cclxuZnVuY3Rpb24gRGF0YUVudHJ5UGFnZSgpIHtcclxuICBjb25zdCBbY3VycmVudEVudGl0eSwgc2V0Q3VycmVudEVudGl0eV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdkNsaWNrVGFibGUgPSAoZW50aXR5OiBzdHJpbmcpID0+IHtcclxuICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgdXJsO1xyXG4gICAgICBzd2l0Y2ggKGN1cnJlbnRFbnRpdHkpIHtcclxuICAgICAgICBjYXNlICdJbmdyZWRpZW50JzpcclxuICAgICAgICAgIHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2luZ3JlZGllbnRzLyc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQcm9wZXJ0eSBUeXBlJzpcclxuICAgICAgICAgIHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3Byb3BlcnR5LXR5cGUvJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0luZ3JlZGllbnQgUHJvcGVydGllcyc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50LXByb3BlcnRpZXMnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHVybCA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBzZXRDdXJyZW50RGF0YShkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTogJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbY3VycmVudEVudGl0eV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXg+XHJcbiAgICAgIDxCb3ggZmxleD17MX0+XHJcbiAgICAgICAgPFNpZGViYXJDb250ZW50IGhhbmRsZU5hdkNsaWNrVGFibGU9e2hhbmRsZU5hdkNsaWNrVGFibGV9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHA9ezV9IHc9XCIxMDAlXCIgaD1cIjEwMHZoXCIgb3ZlcmZsb3c9XCJhdXRvXCIgZmxleD17NH0+XHJcbiAgICAgICAgPFRhYmxlIHNlbGVjdGVkVGFibGU9e2N1cnJlbnRFbnRpdHl9IGRhdGE9e2N1cnJlbnREYXRhfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhRW50cnlQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiRmxleCIsIlNpZGViYXJDb250ZW50IiwiVGFibGUiLCJEYXRhRW50cnlQYWdlIiwiY3VycmVudEVudGl0eSIsInNldEN1cnJlbnRFbnRpdHkiLCJjdXJyZW50RGF0YSIsInNldEN1cnJlbnREYXRhIiwiaGFuZGxlTmF2Q2xpY2tUYWJsZSIsImVudGl0eSIsImZldGNoRGF0YSIsInVybCIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImZsZXgiLCJwIiwidyIsImgiLCJvdmVyZmxvdyIsInNlbGVjdGVkVGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n"));

/***/ })

});