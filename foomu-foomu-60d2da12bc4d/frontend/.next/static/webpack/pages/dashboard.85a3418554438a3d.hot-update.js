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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_Forms_IngredientForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Forms/IngredientForm */ \"./src/components/Forms/IngredientForm.jsx\");\n/* harmony import */ var _src_components_Forms_PropertyTypeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Forms/PropertyTypeForm */ \"./src/components/Forms/PropertyTypeForm.jsx\");\n/* harmony import */ var _src_components_Forms_IngredientPropertyForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Forms/IngredientPropertyForm */ \"./src/components/Forms/IngredientPropertyForm.jsx\");\n/* harmony import */ var _src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar DataDisplayTable = function(param) {\n    var data = param.data;\n    if (!data || data.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data to display.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, _this);\n    }\n    var headers = Object.keys(data[0]); // Get headers from first object\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table, {\n        variant: \"simple\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Thead, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tr, {\n                    children: headers.map(function(header, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Th, {\n                            children: header\n                        }, index, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tbody, {\n                children: data.map(function(row, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tr, {\n                        children: headers.map(function(header, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Td, {\n                                children: row[header]\n                            }, index, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, index, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = DataDisplayTable;\nfunction DataEntryPage() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentEntity = _useState[0], setCurrentEntity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentData = _useState1[0], setCurrentData = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isTableVisible = _useState2[0], setIsTableVisible = _useState2[1];\n    // const handleButtonClick = (entity) => {\n    //   setCurrentEntity(entity);\n    // };\n    var handleNavClick = function(entity) {\n        setCurrentEntity(entity);\n        // fetch data from your backend based on the entity\n        var url;\n        switch(entity){\n            case \"Ingredient\":\n                url = \"http://127.0.0.1:8000/api/ingredient/\";\n                break;\n            case \"Property Type\":\n                url = \"http://localhost:8000/api/property-types\";\n                break;\n            case \"Ingredient Properties\":\n                url = \"http://localhost:8000/api/ingredient-properties\";\n                break;\n            default:\n                url = \"\";\n        }\n        fetch(url).then(function(res) {\n            return res.json();\n        }).then(setCurrentData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        handleNavClick: handleNavClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            p: 5,\n            w: \"100%\",\n            h: \"100vh\",\n            overflow: \"auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDisplayTable, {\n                data: currentData\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"kFnjHHTFr8MYM1heT5TdQ6RMZSA=\");\n_c1 = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"DataDisplayTable\");\n$RefreshReg$(_c1, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3FCO0FBQ0o7QUFDSTtBQUNZO0FBQ2Y7QUFFckUsSUFBTWMsbUJBQW1CO1FBQUdDLGFBQUFBO0lBQzFCLElBQUksQ0FBQ0EsUUFBUUEsS0FBS0MsTUFBTSxLQUFLLEdBQUc7UUFDOUIscUJBQU8sOERBQUNDO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLElBQU1DLFVBQVVDLE9BQU9DLElBQUksQ0FBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxnQ0FBZ0M7SUFFdEUscUJBQ0UsOERBQUNYLG1EQUFLQTtRQUFDaUIsU0FBUTs7MEJBQ2IsOERBQUNoQixtREFBS0E7MEJBQ0osNEVBQUNFLGdEQUFFQTs4QkFDQVcsUUFBUUksR0FBRyxDQUFDLFNBQUNDLFFBQVFDOzZDQUNwQiw4REFBQ2hCLGdEQUFFQTtzQ0FBY2U7MkJBQVJDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUlmLDhEQUFDbEIsbURBQUtBOzBCQUNIUyxLQUFLTyxHQUFHLENBQUMsU0FBQ0csS0FBS0Q7eUNBQ2QsOERBQUNqQixnREFBRUE7a0NBQ0FXLFFBQVFJLEdBQUcsQ0FBQyxTQUFDQyxRQUFRQztpREFDcEIsOERBQUNmLGdEQUFFQTswQ0FBY2dCLEdBQUcsQ0FBQ0YsT0FBTzsrQkFBbkJDOzs7Ozs7dUJBRkpBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNuQjtLQTNCTVY7QUE0Qk4sU0FBU1k7O0lBQ1AsSUFBMEN4QixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBNUN5QixnQkFBbUN6QixjQUFwQjBCLG1CQUFvQjFCO0lBQzFDLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUExQzJCLGNBQStCM0IsZUFBbEI0QixpQkFBa0I1QjtJQUN0QyxJQUE0Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQTlDNkIsaUJBQXFDN0IsZUFBckI4QixvQkFBcUI5QjtJQUU1QywwQ0FBMEM7SUFDMUMsOEJBQThCO0lBQzlCLEtBQUs7SUFFTCxJQUFNK0IsaUJBQWlCLFNBQUNDO1FBQ3RCTixpQkFBaUJNO1FBQ2pCLG1EQUFtRDtRQUNuRCxJQUFJQztRQUNKLE9BQVFEO1lBQ04sS0FBSztnQkFDSEMsTUFBTTtnQkFDTjtZQUNGLEtBQUs7Z0JBQ0hBLE1BQU07Z0JBQ047WUFDRixLQUFLO2dCQUNIQSxNQUFNO2dCQUNOO1lBQ0Y7Z0JBQ0VBLE1BQU07UUFDVjtRQUVBQyxNQUFNRCxLQUNIRSxJQUFJLENBQUNDLFNBQUFBO21CQUFPQSxJQUFJQyxJQUFJO1dBQ3BCRixJQUFJLENBQUNQO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ2pCLDBFQUFpQkE7UUFBQ29CLGdCQUFnQkE7a0JBQ2pDLDRFQUFDOUIsaURBQUdBO1lBQUNjLEdBQUc7WUFBR3VCLEdBQUU7WUFBT0MsR0FBRTtZQUFRQyxVQUFTO3NCQUNyQyw0RUFBQzVCO2dCQUFpQkMsTUFBTWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7R0F2Q1NIO01BQUFBO0FBMENULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcz8wZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRhYmxlLCBUaGVhZCwgVGJvZHksIFRyLCBUaCwgVGQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IEluZ3JlZGllbnRGb3JtIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvcm1zL0luZ3JlZGllbnRGb3JtJztcclxuaW1wb3J0IFByb3BlcnR5VHlwZUZvcm0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9ybXMvUHJvcGVydHlUeXBlRm9ybSc7XHJcbmltcG9ydCBJbmdyZWRpZW50UHJvcGVydHlGb3JtIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvcm1zL0luZ3JlZGllbnRQcm9wZXJ0eUZvcm0nO1xyXG5pbXBvcnQgU2lkZWJhcldpdGhIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlQmFyJztcclxuXHJcbmNvbnN0IERhdGFEaXNwbGF5VGFibGUgPSAoeyBkYXRhIH0pID0+IHtcclxuICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiA8cD5ObyBkYXRhIHRvIGRpc3BsYXkuPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhlYWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTsgLy8gR2V0IGhlYWRlcnMgZnJvbSBmaXJzdCBvYmplY3RcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCI+XHJcbiAgICAgIDxUaGVhZD5cclxuICAgICAgICA8VHI+XHJcbiAgICAgICAgICB7aGVhZGVycy5tYXAoKGhlYWRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFRoIGtleT17aW5kZXh9PntoZWFkZXJ9PC9UaD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVHI+XHJcbiAgICAgIDwvVGhlYWQ+XHJcbiAgICAgIDxUYm9keT5cclxuICAgICAgICB7ZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxUciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAge2hlYWRlcnMubWFwKChoZWFkZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRkIGtleT17aW5kZXh9Pntyb3dbaGVhZGVyXX08L1RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvVGJvZHk+XHJcbiAgICA8L1RhYmxlPlxyXG4gICk7XHJcbn07XHJcbmZ1bmN0aW9uIERhdGFFbnRyeVBhZ2UoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRFbnRpdHksIHNldEN1cnJlbnRFbnRpdHldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzVGFibGVWaXNpYmxlLCBzZXRJc1RhYmxlVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKGVudGl0eSkgPT4ge1xyXG4gIC8vICAgc2V0Q3VycmVudEVudGl0eShlbnRpdHkpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdkNsaWNrID0gKGVudGl0eSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEVudGl0eShlbnRpdHkpO1xyXG4gICAgLy8gZmV0Y2ggZGF0YSBmcm9tIHlvdXIgYmFja2VuZCBiYXNlZCBvbiB0aGUgZW50aXR5XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgc3dpdGNoIChlbnRpdHkpIHtcclxuICAgICAgY2FzZSAnSW5ncmVkaWVudCc6XHJcbiAgICAgICAgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvaW5ncmVkaWVudC8nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdQcm9wZXJ0eSBUeXBlJzpcclxuICAgICAgICB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9wZXJ0eS10eXBlcyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0luZ3JlZGllbnQgUHJvcGVydGllcyc6XHJcbiAgICAgICAgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvaW5ncmVkaWVudC1wcm9wZXJ0aWVzJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB1cmwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihzZXRDdXJyZW50RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlYmFyV2l0aEhlYWRlciBoYW5kbGVOYXZDbGljaz17aGFuZGxlTmF2Q2xpY2t9PlxyXG4gICAgICA8Qm94IHA9ezV9IHc9XCIxMDAlXCIgaD1cIjEwMHZoXCIgb3ZlcmZsb3c9XCJhdXRvXCI+XHJcbiAgICAgICAgPERhdGFEaXNwbGF5VGFibGUgZGF0YT17Y3VycmVudERhdGF9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9TaWRlYmFyV2l0aEhlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUVudHJ5UGFnZTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm94IiwiVGFibGUiLCJUaGVhZCIsIlRib2R5IiwiVHIiLCJUaCIsIlRkIiwiSW5ncmVkaWVudEZvcm0iLCJQcm9wZXJ0eVR5cGVGb3JtIiwiSW5ncmVkaWVudFByb3BlcnR5Rm9ybSIsIlNpZGViYXJXaXRoSGVhZGVyIiwiRGF0YURpc3BsYXlUYWJsZSIsImRhdGEiLCJsZW5ndGgiLCJwIiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJ2YXJpYW50IiwibWFwIiwiaGVhZGVyIiwiaW5kZXgiLCJyb3ciLCJEYXRhRW50cnlQYWdlIiwiY3VycmVudEVudGl0eSIsInNldEN1cnJlbnRFbnRpdHkiLCJjdXJyZW50RGF0YSIsInNldEN1cnJlbnREYXRhIiwiaXNUYWJsZVZpc2libGUiLCJzZXRJc1RhYmxlVmlzaWJsZSIsImhhbmRsZU5hdkNsaWNrIiwiZW50aXR5IiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInciLCJoIiwib3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});