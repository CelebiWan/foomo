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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_Forms_IngredientForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Forms/IngredientForm */ \"./src/components/Forms/IngredientForm.jsx\");\n/* harmony import */ var _src_components_Forms_PropertyTypeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Forms/PropertyTypeForm */ \"./src/components/Forms/PropertyTypeForm.jsx\");\n/* harmony import */ var _src_components_Forms_IngredientPropertyForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Forms/IngredientPropertyForm */ \"./src/components/Forms/IngredientPropertyForm.jsx\");\n/* harmony import */ var _src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar DataDisplayTable = function(param) {\n    var data = param.data;\n    if (!data || data.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data to display.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, _this);\n    }\n    var headers = Object.keys(data[0]); // Get headers from first object\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table, {\n        variant: \"simple\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Thead, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tr, {\n                    children: headers.map(function(header, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Th, {\n                            children: header\n                        }, index, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tbody, {\n                children: data.map(function(row, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tr, {\n                        children: headers.map(function(header, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Td, {\n                                children: row[header]\n                            }, index, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, index, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = DataDisplayTable;\nfunction DataEntryPage() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentEntity = _useState[0], setCurrentEntity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentData = _useState1[0], setCurrentData = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), ingredientData = _useState2[0], setIngredientData = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), propertyTypeData = _useState3[0], setPropertyTypeData = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), ingredientPropertiesData = _useState4[0], setIngredientPropertiesData = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isTableVisible = _useState5[0], setIsTableVisible = _useState5[1];\n    //   useEffect(() => {\n    //     fetch('http://localhost:8000/api/ingredients')\n    //       .then(res => res.json())\n    //       .then(setIngredientData);\n    //     fetch('http://localhost:8000/api/property-types')\n    //       .then(res => res.json())\n    //       .then(setPropertyTypeData);\n    //     fetch('http://localhost:8000/api/ingredient-properties')\n    //       .then(res => res.json())\n    //       .then(setIngredientPropertiesData);\n    //   }, []);\n    var handleButtonClick = function(entity) {\n        setCurrentEntity(entity);\n    };\n    var handleCyanButtonClick = function() {\n        setIsTableVisible(function(prevState) {\n            return !prevState;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            p: 5,\n            w: \"100%\",\n            h: \"100vh\",\n            overflow: \"auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return handleButtonClick(\"Ingredient\");\n                    },\n                    children: \"Ingredient\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return handleButtonClick(\"Property Type\");\n                    },\n                    children: \"Property Type\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return handleButtonClick(\"Ingredient Properties\");\n                    },\n                    children: \"Ingredient Properties\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                currentEntity === \"Ingredient\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDisplayTable, {\n                            data: ingredientData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Forms_IngredientForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true),\n                currentEntity === \"Property Type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDisplayTable, {\n                            data: propertyTypeData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Forms_PropertyTypeForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true),\n                currentEntity === \"Ingredient Properties\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDisplayTable, {\n                            data: ingredientPropertiesData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IngredientPropertiesForm, {}, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"3jXgaawfOWR5HSp7bCMryu9EWvk=\");\n_c1 = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"DataDisplayTable\");\n$RefreshReg$(_c1, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQkE7Ozs7Ozs7Z0JBSXBCZ0Isa0JBQWtCLHlDQUNqQjs7c0NBQ0UsOERBQUNiOzRCQUFpQkMsTUFBTW9COzs7Ozs7c0NBQ3hCLDhEQUFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0EvRFN0QjtNQUFBQTtBQWlFVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanM/MGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBUYWJsZSwgVGhlYWQsIFRib2R5LCBUciwgVGgsIFRkIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBJbmdyZWRpZW50Rm9ybSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9JbmdyZWRpZW50Rm9ybSc7XHJcbmltcG9ydCBQcm9wZXJ0eVR5cGVGb3JtIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvcm1zL1Byb3BlcnR5VHlwZUZvcm0nO1xyXG5pbXBvcnQgSW5ncmVkaWVudFByb3BlcnR5Rm9ybSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9JbmdyZWRpZW50UHJvcGVydHlGb3JtJztcclxuaW1wb3J0IFNpZGViYXJXaXRoSGVhZGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vU2lkZUJhcic7XHJcblxyXG5jb25zdCBEYXRhRGlzcGxheVRhYmxlID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gPHA+Tm8gZGF0YSB0byBkaXNwbGF5LjwvcD47XHJcbiAgfVxyXG5cclxuICBjb25zdCBoZWFkZXJzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7IC8vIEdldCBoZWFkZXJzIGZyb20gZmlyc3Qgb2JqZWN0XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGUgdmFyaWFudD1cInNpbXBsZVwiPlxyXG4gICAgICA8VGhlYWQ+XHJcbiAgICAgICAgPFRyPlxyXG4gICAgICAgICAge2hlYWRlcnMubWFwKChoZWFkZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxUaCBrZXk9e2luZGV4fT57aGVhZGVyfTwvVGg+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RyPlxyXG4gICAgICA8L1RoZWFkPlxyXG4gICAgICA8VGJvZHk+XHJcbiAgICAgICAge2RhdGEubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8VHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHtoZWFkZXJzLm1hcCgoaGVhZGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZCBrZXk9e2luZGV4fT57cm93W2hlYWRlcl19PC9UZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Rib2R5PlxyXG4gICAgPC9UYWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gRGF0YUVudHJ5UGFnZSgpIHtcclxuICBjb25zdCBbY3VycmVudEVudGl0eSwgc2V0Q3VycmVudEVudGl0eV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5ncmVkaWVudERhdGEsIHNldEluZ3JlZGllbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvcGVydHlUeXBlRGF0YSwgc2V0UHJvcGVydHlUeXBlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2luZ3JlZGllbnRQcm9wZXJ0aWVzRGF0YSwgc2V0SW5ncmVkaWVudFByb3BlcnRpZXNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNUYWJsZVZpc2libGUsIHNldElzVGFibGVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2luZ3JlZGllbnRzJylcclxuLy8gICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbi8vICAgICAgIC50aGVuKHNldEluZ3JlZGllbnREYXRhKTtcclxuXHJcbi8vICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9wZXJ0eS10eXBlcycpXHJcbi8vICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4vLyAgICAgICAudGhlbihzZXRQcm9wZXJ0eVR5cGVEYXRhKTtcclxuXHJcbi8vICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9pbmdyZWRpZW50LXByb3BlcnRpZXMnKVxyXG4vLyAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuLy8gICAgICAgLnRoZW4oc2V0SW5ncmVkaWVudFByb3BlcnRpZXNEYXRhKTtcclxuLy8gICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKGVudGl0eSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEVudGl0eShlbnRpdHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUN5YW5CdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldElzVGFibGVWaXNpYmxlKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGViYXJXaXRoSGVhZGVyPlxyXG4gICAgICA8Qm94IHA9ezV9IHc9XCIxMDAlXCIgaD1cIjEwMHZoXCIgb3ZlcmZsb3c9XCJhdXRvXCI+XHJcbiAgICAgICAgey8qIEJ1dHRvbiB0byBzZWxlY3QgJ0luZ3JlZGllbnQnICovfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soJ0luZ3JlZGllbnQnKX0+SW5ncmVkaWVudDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiBCdXR0b24gdG8gc2VsZWN0ICdQcm9wZXJ0eSBUeXBlJyAqL31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCdQcm9wZXJ0eSBUeXBlJyl9PlByb3BlcnR5IFR5cGU8L2J1dHRvbj5cclxuICAgICAgICB7LyogQnV0dG9uIHRvIHNlbGVjdCAnSW5ncmVkaWVudCBQcm9wZXJ0aWVzJyAqL31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCdJbmdyZWRpZW50IFByb3BlcnRpZXMnKX0+SW5ncmVkaWVudCBQcm9wZXJ0aWVzPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2N1cnJlbnRFbnRpdHkgPT09ICdJbmdyZWRpZW50JyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RGF0YURpc3BsYXlUYWJsZSBkYXRhPXtpbmdyZWRpZW50RGF0YX0gLz5cclxuICAgICAgICAgICAgPEluZ3JlZGllbnRGb3JtIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7Y3VycmVudEVudGl0eSA9PT0gJ1Byb3BlcnR5IFR5cGUnICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxEYXRhRGlzcGxheVRhYmxlIGRhdGE9e3Byb3BlcnR5VHlwZURhdGF9IC8+XHJcbiAgICAgICAgICAgIDxQcm9wZXJ0eVR5cGVGb3JtIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7Y3VycmVudEVudGl0eSA9PT0gJ0luZ3JlZGllbnQgUHJvcGVydGllcycgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPERhdGFEaXNwbGF5VGFibGUgZGF0YT17aW5ncmVkaWVudFByb3BlcnRpZXNEYXRhfSAvPlxyXG4gICAgICAgICAgICA8SW5ncmVkaWVudFByb3BlcnRpZXNGb3JtIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvU2lkZWJhcldpdGhIZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUVudHJ5UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJUYWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUciIsIlRoIiwiVGQiLCJJbmdyZWRpZW50Rm9ybSIsIlByb3BlcnR5VHlwZUZvcm0iLCJJbmdyZWRpZW50UHJvcGVydHlGb3JtIiwiU2lkZWJhcldpdGhIZWFkZXIiLCJEYXRhRGlzcGxheVRhYmxlIiwiZGF0YSIsImxlbmd0aCIsInAiLCJoZWFkZXJzIiwiT2JqZWN0Iiwia2V5cyIsInZhcmlhbnQiLCJtYXAiLCJoZWFkZXIiLCJpbmRleCIsInJvdyIsIkRhdGFFbnRyeVBhZ2UiLCJjdXJyZW50RW50aXR5Iiwic2V0Q3VycmVudEVudGl0eSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJpbmdyZWRpZW50RGF0YSIsInNldEluZ3JlZGllbnREYXRhIiwicHJvcGVydHlUeXBlRGF0YSIsInNldFByb3BlcnR5VHlwZURhdGEiLCJpbmdyZWRpZW50UHJvcGVydGllc0RhdGEiLCJzZXRJbmdyZWRpZW50UHJvcGVydGllc0RhdGEiLCJpc1RhYmxlVmlzaWJsZSIsInNldElzVGFibGVWaXNpYmxlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlbnRpdHkiLCJoYW5kbGVDeWFuQnV0dG9uQ2xpY2siLCJwcmV2U3RhdGUiLCJ3IiwiaCIsIm92ZXJmbG93IiwiYnV0dG9uIiwib25DbGljayIsIkluZ3JlZGllbnRQcm9wZXJ0aWVzRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});