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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n/* harmony import */ var _src_components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Table */ \"./src/components/Table.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DataEntryPage() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentEntity = _useState[0], setCurrentEntity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentData = _useState1[0], setCurrentData = _useState1[1];\n    var handleClick = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function(entity) {\n            var url, response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setCurrentEntity(entity);\n                        switch(entity){\n                            case \"Ingredient\":\n                                url = \"http://127.0.0.1:8000/api/ingredients/\";\n                                break;\n                            case \"Property Type\":\n                                url = \"http://127.0.0.1:8000/api/property-type/\";\n                                break;\n                            case \"Ingredient Properties\":\n                                url = \"http://127.0.0.1:8000/api/ingredient-properties\";\n                                break;\n                            default:\n                                url = \"\";\n                        }\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            fetch(url)\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setCurrentData(data);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching data: \", error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleClick(entity) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                flex: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                p: 5,\n                w: \"100%\",\n                h: \"100vh\",\n                overflow: \"auto\",\n                flex: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    selectedTable: currentEntity,\n                    data: currentData\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"wAg6ePqDr/Y97nFboNVdfHv0LCI=\");\n_c = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c;\n$RefreshReg$(_c, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSztBQUNxQjtBQUN0QjtBQUU1QyxTQUFTTTs7SUFDUCxJQUEwQ0wsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUEzRE0sZ0JBQW1DTixjQUFwQk8sbUJBQW9CUDtJQUMxQyxJQUFzQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFRLEVBQUUsT0FBakRRLGNBQStCUixlQUFsQlMsaUJBQWtCVDtJQUV0QyxJQUFNVTttQkFBYyw0RUFBT0M7Z0JBR3JCQyxLQWdCSUMsVUFDQUMsTUFFQ0M7Ozs7d0JBckJUUixpQkFBaUJJO3dCQUdqQixPQUFRQTs0QkFDTixLQUFLO2dDQUNIQyxNQUFNO2dDQUNOOzRCQUNGLEtBQUs7Z0NBQ0hBLE1BQU07Z0NBQ047NEJBQ0YsS0FBSztnQ0FDSEEsTUFBTTtnQ0FDTjs0QkFDRjtnQ0FDRUEsTUFBTTt3QkFDVjs7Ozs7Ozs7O3dCQUdtQjs7NEJBQU1JLE1BQU1KOzs7d0JBQXZCQyxXQUFXO3dCQUNKOzs0QkFBTUEsU0FBU0ksSUFBSTs7O3dCQUExQkgsT0FBTzt3QkFDYkwsZUFBZUs7Ozs7Ozt3QkFDUkM7d0JBQ1BHLFFBQVFILEtBQUssQ0FBQyx5QkFBeUJBOzs7Ozs7Ozs7OztRQUUzQzt3QkF6Qk1MLFlBQXFCQzs7OztJQTJCM0IscUJBQ0UsOERBQUNULGtEQUFJQTs7MEJBQ0gsOERBQUNELGlEQUFHQTtnQkFBQ2tCLE1BQU07MEJBQ1QsNEVBQUNoQiwwRUFBY0E7b0JBQUNPLGFBQWFBOzs7Ozs7Ozs7OzswQkFFL0IsOERBQUNULGlEQUFHQTtnQkFBQ21CLEdBQUc7Z0JBQUdDLEdBQUU7Z0JBQU9DLEdBQUU7Z0JBQVFDLFVBQVM7Z0JBQU9KLE1BQU07MEJBQ2xELDRFQUFDZiw2REFBS0E7b0JBQUNvQixlQUFlbEI7b0JBQWVRLE1BQU1OOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluRDtHQXpDU0g7S0FBQUE7QUEyQ1QsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeD9kN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyQ29udGVudCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL1NpZGVCYXInOyBcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RhYmxlJztcclxuXHJcbmZ1bmN0aW9uIERhdGFFbnRyeVBhZ2UoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRFbnRpdHksIHNldEN1cnJlbnRFbnRpdHldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChlbnRpdHk6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q3VycmVudEVudGl0eShlbnRpdHkpO1xyXG5cclxuICAgIGxldCB1cmw7XHJcbiAgICBzd2l0Y2ggKGVudGl0eSkge1xyXG4gICAgICBjYXNlICdJbmdyZWRpZW50JzpcclxuICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50cy8nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdQcm9wZXJ0eSBUeXBlJzpcclxuICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9wcm9wZXJ0eS10eXBlLyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0luZ3JlZGllbnQgUHJvcGVydGllcyc6XHJcbiAgICAgICAgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvaW5ncmVkaWVudC1wcm9wZXJ0aWVzJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB1cmwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEN1cnJlbnREYXRhKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTogJywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleD5cclxuICAgICAgPEJveCBmbGV4PXsxfT5cclxuICAgICAgICA8U2lkZWJhckNvbnRlbnQgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBwPXs1fSB3PVwiMTAwJVwiIGg9XCIxMDB2aFwiIG92ZXJmbG93PVwiYXV0b1wiIGZsZXg9ezR9ID5cclxuICAgICAgICA8VGFibGUgc2VsZWN0ZWRUYWJsZT17Y3VycmVudEVudGl0eX0gZGF0YT17Y3VycmVudERhdGF9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUVudHJ5UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJGbGV4IiwiU2lkZWJhckNvbnRlbnQiLCJUYWJsZSIsIkRhdGFFbnRyeVBhZ2UiLCJjdXJyZW50RW50aXR5Iiwic2V0Q3VycmVudEVudGl0eSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJoYW5kbGVDbGljayIsImVudGl0eSIsInVybCIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImZsZXgiLCJwIiwidyIsImgiLCJvdmVyZmxvdyIsInNlbGVjdGVkVGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n"));

/***/ })

});