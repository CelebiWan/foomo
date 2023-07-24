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

/***/ "./src/components/Dashboard/DBDashboard.tsx":
/*!**************************************************!*\
  !*** ./src/components/Dashboard/DBDashboard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n/* harmony import */ var _Tables_IngredientTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tables/IngredientTable */ \"./src/components/Tables/IngredientTable.tsx\");\n/* harmony import */ var _Tables_PropertyTypesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tables/PropertyTypesTable */ \"./src/components/Tables/PropertyTypesTable.tsx\");\n/* harmony import */ var _Tables_IngredientPropertiesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tables/IngredientPropertiesTable */ \"./src/components/Tables/IngredientPropertiesTable.tsx\");\n/* harmony import */ var _Tables_InteractionTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Tables/InteractionTable */ \"./src/components/Tables/InteractionTable.tsx\");\n/* harmony import */ var _Tables_RecipeTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Tables/RecipeTable */ \"./src/components/Tables/RecipeTable.tsx\");\n/* harmony import */ var _Tables_RecipeMetadataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Tables/RecipeMetadataTable */ \"./src/components/Tables/RecipeMetadataTable.tsx\");\n/* harmony import */ var _Tables_FormulaTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Tables/FormulaTable */ \"./src/components/Tables/FormulaTable.tsx\");\n/* harmony import */ var _Tables_FormulaTypesTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Tables/FormulaTypesTable */ \"./src/components/Tables/FormulaTypesTable.tsx\");\n// DBDashboard component\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar DBDashboard = function(param) {\n    var currentEntity = param.currentEntity, currentData = param.currentData, handleIngredientPropertiesClick = param.handleIngredientPropertiesClick, handleIngredientInteractionsClick = param.handleIngredientInteractionsClick, ingredientProperties = param.ingredientProperties, interactions = param.interactions, selectedTable = param.selectedTable, handleRecipeMetadataClick = param.handleRecipeMetadataClick, recipeMetadata = param.recipeMetadata, handleNavClick = param.handleNavClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid, {\n        templateColumns: \"0.5fr 3fr\",\n        gap: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handleNavClick: handleNavClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Flex, {\n                direction: \"column\",\n                height: \"100vh\",\n                overflow: \"auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                        p: 5,\n                        children: [\n                            currentEntity === \"Ingredient\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_IngredientTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                data: currentData,\n                                handleIngredientPropertiesClick: handleIngredientPropertiesClick,\n                                handleIngredientInteractionsClick: handleIngredientInteractionsClick\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this),\n                            currentEntity === \"Recipe\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_RecipeTable__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                data: currentData,\n                                handleRecipeMetadataClick: handleRecipeMetadataClick\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    selectedTable === \"IngredientProperties\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                        p: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_IngredientPropertiesTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            data: ingredientProperties\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this),\n                    selectedTable === \"Interactions\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                        p: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_InteractionTable__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            data: interactions\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this),\n                    selectedTable === \"RecipeMetadata\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                        p: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_RecipeMetadataTable__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            data: recipeMetadata\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this),\n                    currentEntity === \"Property Type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_PropertyTypesTable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 47\n                    }, _this),\n                    currentEntity === \"Ingredient Property\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_IngredientPropertiesTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 53\n                    }, _this),\n                    currentEntity === \"Interaction\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_InteractionTable__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 45\n                    }, _this),\n                    currentEntity === \"Recipe Metadata\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_RecipeMetadataTable__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 49\n                    }, _this),\n                    currentEntity === \"Formula\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_FormulaTable__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 41\n                    }, _this),\n                    currentEntity === \"Formula Type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tables_FormulaTypesTable__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 46\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Dashboard\\\\DBDashboard.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_c = DBDashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DBDashboard);\nvar _c;\n$RefreshReg$(_c, \"DBDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvREJEYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUF3Qjs7O0FBQ0U7QUFDeUI7QUFDQTtBQUNLO0FBQ0s7QUFDZTtBQUNsQjtBQUNWO0FBQ2dCO0FBQ2Q7QUFDUTtBQWUxRCxJQUFNYSxjQUEwQztRQUM5Q0Msc0JBQUFBLGVBQ0FDLG9CQUFBQSxhQUNBQyx3Q0FBQUEsaUNBQ0FDLDBDQUFBQSxtQ0FDQUMsNkJBQUFBLHNCQUNBQyxxQkFBQUEsY0FDQUMsc0JBQUFBLGVBQ0FDLGtDQUFBQSwyQkFDQUMsdUJBQUFBLGdCQUNBQyx1QkFBQUE7SUFFQSxxQkFDRSw4REFBQ3BCLG1EQUFJQTtRQUFDcUIsaUJBQWdCO1FBQVlDLEtBQUs7OzBCQUNyQyw4REFBQ3hCLGtEQUFHQTswQkFDRiw0RUFBQ0csMkRBQWNBO29CQUFDbUIsZ0JBQWdCQTs7Ozs7Ozs7Ozs7MEJBRWxDLDhEQUFDckIsbURBQUlBO2dCQUFDd0IsV0FBVTtnQkFBU0MsUUFBTztnQkFBUUMsVUFBUzs7a0NBQy9DLDhEQUFDM0Isa0RBQUdBO3dCQUFDNEIsR0FBRzs7NEJBQ0xmLGtCQUFrQiw4QkFDakIsOERBQUNULCtEQUFlQTtnQ0FDZHlCLE1BQU1mO2dDQUNOQyxpQ0FBaUNBO2dDQUNqQ0MsbUNBQW1DQTs7Ozs7OzRCQUd0Q0gsa0JBQWtCLDBCQUNqQiw4REFBQ0wsMkRBQVdBO2dDQUNWcUIsTUFBTWY7Z0NBQ05NLDJCQUEyQkE7Ozs7Ozs7Ozs7OztvQkFJaENELGtCQUFrQix3Q0FDakIsOERBQUNuQixrREFBR0E7d0JBQUM0QixHQUFHO2tDQUNOLDRFQUFDdEIseUVBQXlCQTs0QkFBQ3VCLE1BQU1aOzs7Ozs7Ozs7OztvQkFHcENFLGtCQUFrQixnQ0FDakIsOERBQUNuQixrREFBR0E7d0JBQUM0QixHQUFHO2tDQUNOLDRFQUFDckIsZ0VBQWdCQTs0QkFBQ3NCLE1BQU1YOzs7Ozs7Ozs7OztvQkFHM0JDLGtCQUFrQixrQ0FDakIsOERBQUNuQixrREFBR0E7d0JBQUM0QixHQUFHO2tDQUNOLDRFQUFDbkIsbUVBQW1CQTs0QkFBQ29CLE1BQU1SOzs7Ozs7Ozs7OztvQkFHOUJSLGtCQUFrQixpQ0FBbUIsOERBQUNSLGtFQUFpQkE7d0JBQUN3QixNQUFNZjs7Ozs7O29CQUM5REQsa0JBQWtCLHVDQUF5Qiw4REFBQ1AseUVBQXlCQTt3QkFBQ3VCLE1BQU1mOzs7Ozs7b0JBQzVFRCxrQkFBa0IsK0JBQWlCLDhEQUFDTixnRUFBZ0JBO3dCQUFDc0IsTUFBTWY7Ozs7OztvQkFDM0RELGtCQUFrQixtQ0FBcUIsOERBQUNKLG1FQUFtQkE7d0JBQUNvQixNQUFNZjs7Ozs7O29CQUNsRUQsa0JBQWtCLDJCQUFhLDhEQUFDSCw0REFBWUE7d0JBQUNtQixNQUFNZjs7Ozs7O29CQUNuREQsa0JBQWtCLGdDQUFrQiw4REFBQ0Ysa0VBQWdCQTt3QkFBQ2tCLE1BQU1mOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckU7S0F6RE1GO0FBMkROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9EQkRhc2hib2FyZC50c3g/YzBkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEQkRhc2hib2FyZCBjb21wb25lbnRcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBHcmlkIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyQ29udGVudCBmcm9tICcuLi9OYXZpZ2F0aW9uL1NpZGVCYXInO1xyXG5pbXBvcnQgSW5ncmVkaWVudFRhYmxlIGZyb20gJy4uL1RhYmxlcy9JbmdyZWRpZW50VGFibGUnO1xyXG5pbXBvcnQgUHJvcGVydHlUeXBlVGFibGUgZnJvbSAnLi4vVGFibGVzL1Byb3BlcnR5VHlwZXNUYWJsZSc7XHJcbmltcG9ydCBJbmdyZWRpZW50UHJvcGVydGllc1RhYmxlIGZyb20gJy4uL1RhYmxlcy9JbmdyZWRpZW50UHJvcGVydGllc1RhYmxlJztcclxuaW1wb3J0IEludGVyYWN0aW9uVGFibGUgZnJvbSAnLi4vVGFibGVzL0ludGVyYWN0aW9uVGFibGUnO1xyXG5pbXBvcnQgUmVjaXBlVGFibGUgZnJvbSAnLi4vVGFibGVzL1JlY2lwZVRhYmxlJztcclxuaW1wb3J0IFJlY2lwZU1ldGFkYXRhVGFibGUgZnJvbSAnLi4vVGFibGVzL1JlY2lwZU1ldGFkYXRhVGFibGUnO1xyXG5pbXBvcnQgRm9ybXVsYVRhYmxlIGZyb20gJy4uL1RhYmxlcy9Gb3JtdWxhVGFibGUnO1xyXG5pbXBvcnQgRm9ybXVsYVR5cGVUYWJsZSBmcm9tICcuLi9UYWJsZXMvRm9ybXVsYVR5cGVzVGFibGUnXHJcblxyXG5pbnRlcmZhY2UgREJEYXNoYm9hcmRQcm9wcyB7XHJcbiAgY3VycmVudEVudGl0eTogc3RyaW5nIHwgbnVsbDtcclxuICBjdXJyZW50RGF0YTogYW55W107XHJcbiAgaGFuZGxlSW5ncmVkaWVudFByb3BlcnRpZXNDbGljazogKGluZ3JlZGllbnQ6IHN0cmluZykgPT4gdm9pZDtcclxuICBoYW5kbGVJbmdyZWRpZW50SW50ZXJhY3Rpb25zQ2xpY2s6IChpbmdyZWRpZW50OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgaW5ncmVkaWVudFByb3BlcnRpZXM6IGFueVtdO1xyXG4gIGludGVyYWN0aW9uczogYW55W107XHJcbiAgc2VsZWN0ZWRUYWJsZTonSW5ncmVkaWVudFByb3BlcnRpZXMnIHwgJ0ludGVyYWN0aW9ucycgfCAnUmVjaXBlTWV0YWRhdGEnfCBudWxsO1xyXG4gIHJlY2lwZU1ldGFkYXRhOiBhbnlbXTtcclxuICBoYW5kbGVSZWNpcGVNZXRhZGF0YUNsaWNrOiAocmVjaXBlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgaGFuZGxlTmF2Q2xpY2s6IChlbnRpdHk6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgREJEYXNoYm9hcmQ6IFJlYWN0LkZDPERCRGFzaGJvYXJkUHJvcHM+ID0gKHtcclxuICBjdXJyZW50RW50aXR5LFxyXG4gIGN1cnJlbnREYXRhLFxyXG4gIGhhbmRsZUluZ3JlZGllbnRQcm9wZXJ0aWVzQ2xpY2ssXHJcbiAgaGFuZGxlSW5ncmVkaWVudEludGVyYWN0aW9uc0NsaWNrLFxyXG4gIGluZ3JlZGllbnRQcm9wZXJ0aWVzLFxyXG4gIGludGVyYWN0aW9ucyxcclxuICBzZWxlY3RlZFRhYmxlLFxyXG4gIGhhbmRsZVJlY2lwZU1ldGFkYXRhQ2xpY2ssXHJcbiAgcmVjaXBlTWV0YWRhdGEsXHJcbiAgaGFuZGxlTmF2Q2xpY2tcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCIwLjVmciAzZnJcIiBnYXA9ezR9PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxTaWRlYmFyQ29udGVudCBoYW5kbGVOYXZDbGljaz17aGFuZGxlTmF2Q2xpY2t9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBoZWlnaHQ9XCIxMDB2aFwiIG92ZXJmbG93PVwiYXV0b1wiPlxyXG4gICAgICAgIDxCb3ggcD17NX0+XHJcbiAgICAgICAgICB7Y3VycmVudEVudGl0eSA9PT0gJ0luZ3JlZGllbnQnICYmIChcclxuICAgICAgICAgICAgPEluZ3JlZGllbnRUYWJsZVxyXG4gICAgICAgICAgICAgIGRhdGE9e2N1cnJlbnREYXRhfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUluZ3JlZGllbnRQcm9wZXJ0aWVzQ2xpY2s9e2hhbmRsZUluZ3JlZGllbnRQcm9wZXJ0aWVzQ2xpY2t9XHJcbiAgICAgICAgICAgICAgaGFuZGxlSW5ncmVkaWVudEludGVyYWN0aW9uc0NsaWNrPXtoYW5kbGVJbmdyZWRpZW50SW50ZXJhY3Rpb25zQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2N1cnJlbnRFbnRpdHkgPT09ICdSZWNpcGUnICYmIChcclxuICAgICAgICAgICAgPFJlY2lwZVRhYmxlXHJcbiAgICAgICAgICAgICAgZGF0YT17Y3VycmVudERhdGF9XHJcbiAgICAgICAgICAgICAgaGFuZGxlUmVjaXBlTWV0YWRhdGFDbGljaz17aGFuZGxlUmVjaXBlTWV0YWRhdGFDbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge3NlbGVjdGVkVGFibGUgPT09ICdJbmdyZWRpZW50UHJvcGVydGllcycgJiYgKFxyXG4gICAgICAgICAgPEJveCBwPXs1fT5cclxuICAgICAgICAgICAgPEluZ3JlZGllbnRQcm9wZXJ0aWVzVGFibGUgZGF0YT17aW5ncmVkaWVudFByb3BlcnRpZXN9Lz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3NlbGVjdGVkVGFibGUgPT09ICdJbnRlcmFjdGlvbnMnICYmIChcclxuICAgICAgICAgIDxCb3ggcD17NX0+XHJcbiAgICAgICAgICAgIDxJbnRlcmFjdGlvblRhYmxlIGRhdGE9e2ludGVyYWN0aW9uc30gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3NlbGVjdGVkVGFibGUgPT09ICdSZWNpcGVNZXRhZGF0YScgJiYgKFxyXG4gICAgICAgICAgPEJveCBwPXs1fT5cclxuICAgICAgICAgICAgPFJlY2lwZU1ldGFkYXRhVGFibGUgZGF0YT17cmVjaXBlTWV0YWRhdGF9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjdXJyZW50RW50aXR5ID09PSAnUHJvcGVydHkgVHlwZScgJiYgPFByb3BlcnR5VHlwZVRhYmxlIGRhdGE9e2N1cnJlbnREYXRhfSAvPn1cclxuICAgICAgICB7Y3VycmVudEVudGl0eSA9PT0gJ0luZ3JlZGllbnQgUHJvcGVydHknICYmIDxJbmdyZWRpZW50UHJvcGVydGllc1RhYmxlIGRhdGE9e2N1cnJlbnREYXRhfSAvPn1cclxuICAgICAgICB7Y3VycmVudEVudGl0eSA9PT0gJ0ludGVyYWN0aW9uJyAmJiA8SW50ZXJhY3Rpb25UYWJsZSBkYXRhPXtjdXJyZW50RGF0YX0gLz59XHJcbiAgICAgICAge2N1cnJlbnRFbnRpdHkgPT09ICdSZWNpcGUgTWV0YWRhdGEnICYmIDxSZWNpcGVNZXRhZGF0YVRhYmxlIGRhdGE9e2N1cnJlbnREYXRhfSAvPn1cclxuICAgICAgICB7Y3VycmVudEVudGl0eSA9PT0gJ0Zvcm11bGEnICYmIDxGb3JtdWxhVGFibGUgZGF0YT17Y3VycmVudERhdGF9IC8+fVxyXG4gICAgICAgIHtjdXJyZW50RW50aXR5ID09PSAnRm9ybXVsYSBUeXBlJyAmJiA8Rm9ybXVsYVR5cGVUYWJsZSBkYXRhPXtjdXJyZW50RGF0YX0gLz59XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgREJEYXNoYm9hcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiRmxleCIsIkdyaWQiLCJTaWRlYmFyQ29udGVudCIsIkluZ3JlZGllbnRUYWJsZSIsIlByb3BlcnR5VHlwZVRhYmxlIiwiSW5ncmVkaWVudFByb3BlcnRpZXNUYWJsZSIsIkludGVyYWN0aW9uVGFibGUiLCJSZWNpcGVUYWJsZSIsIlJlY2lwZU1ldGFkYXRhVGFibGUiLCJGb3JtdWxhVGFibGUiLCJGb3JtdWxhVHlwZVRhYmxlIiwiREJEYXNoYm9hcmQiLCJjdXJyZW50RW50aXR5IiwiY3VycmVudERhdGEiLCJoYW5kbGVJbmdyZWRpZW50UHJvcGVydGllc0NsaWNrIiwiaGFuZGxlSW5ncmVkaWVudEludGVyYWN0aW9uc0NsaWNrIiwiaW5ncmVkaWVudFByb3BlcnRpZXMiLCJpbnRlcmFjdGlvbnMiLCJzZWxlY3RlZFRhYmxlIiwiaGFuZGxlUmVjaXBlTWV0YWRhdGFDbGljayIsInJlY2lwZU1ldGFkYXRhIiwiaGFuZGxlTmF2Q2xpY2siLCJ0ZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJkaXJlY3Rpb24iLCJoZWlnaHQiLCJvdmVyZmxvdyIsInAiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Dashboard/DBDashboard.tsx\n"));

/***/ }),

/***/ "./src/components/Tables/FormulaTypesTable.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Tables/FormulaTypesTable.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\nvar _this = undefined;\n\n\n\nvar FormulaTypeTable = function(param) {\n    var data = param.data, selectedTable = param.selectedTable;\n    console.log(\"selectedTable:\", selectedTable);\n    console.log(\"data:\", data);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading data...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {\n        variant: \"striped\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Thead, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                            children: \"ID\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                            children: \"Alias\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tbody, {\n                children: data.map(function(FormulaType) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                                children: FormulaType.id\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                                children: FormulaType.alias\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {\n                                children: FormulaType.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, FormulaType.id, true, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Tables\\\\FormulaTypesTable.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c = FormulaTypeTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormulaTypeTable);\nvar _c;\n$RefreshReg$(_c, \"FormulaTypeTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZXMvRm9ybXVsYVR5cGVzVGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ3dEO0FBYTFGLElBQU1RLG1CQUFtQztRQUFHQyxhQUFBQSxNQUFNQyxzQkFBQUE7SUFDaERDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO0lBQzlCQyxRQUFRQyxHQUFHLENBQUMsU0FBU0g7SUFHckIsSUFBSSxDQUFDQSxNQUFNO1FBQ1QscUJBQU8sOERBQUNJO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDWCxtREFBV0E7UUFBQ1ksU0FBUTs7MEJBQ25CLDhEQUFDWCxtREFBS0E7MEJBQ0osNEVBQUNFLGdEQUFFQTs7c0NBQ0QsOERBQUNDLGdEQUFFQTtzQ0FBQzs7Ozs7O3NDQUNKLDhEQUFDQSxnREFBRUE7c0NBQUM7Ozs7OztzQ0FDSiw4REFBQ0EsZ0RBQUVBO3NDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHUiw4REFBQ0YsbURBQUtBOzBCQUNISyxLQUFLTSxHQUFHLENBQUMsU0FBQ0M7eUNBQ1QsOERBQUNYLGdEQUFFQTs7MENBQ0QsOERBQUNFLGdEQUFFQTswQ0FBRVMsWUFBWUMsRUFBRTs7Ozs7OzBDQUNuQiw4REFBQ1YsZ0RBQUVBOzBDQUFFUyxZQUFZRSxLQUFLOzs7Ozs7MENBQ3RCLDhEQUFDWCxnREFBRUE7MENBQUVTLFlBQVlHLElBQUk7Ozs7Ozs7dUJBSGRILFlBQVlDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pDO0tBN0JNVDtBQStCTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RhYmxlcy9Gb3JtdWxhVHlwZXNUYWJsZS50c3g/NDE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYmxlIGFzIENoYWtyYVRhYmxlLCBUaGVhZCwgVGJvZHksIFRyLCBUaCwgVGQsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIEZvcm11bGFUeXBlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGFsaWFzOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGFibGVQcm9wcyB7XHJcbiAgZGF0YTogRm9ybXVsYVR5cGVbXTtcclxuICBzZWxlY3RlZFRhYmxlOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5jb25zdCBGb3JtdWxhVHlwZVRhYmxlOiBGQzxUYWJsZVByb3BzPiA9ICh7IGRhdGEsIHNlbGVjdGVkVGFibGUgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdzZWxlY3RlZFRhYmxlOicsIHNlbGVjdGVkVGFibGUpO1xyXG4gIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpO1xyXG5cclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZyBkYXRhLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhVGFibGUgdmFyaWFudD1cInN0cmlwZWRcIj5cclxuICAgICAgPFRoZWFkPlxyXG4gICAgICAgIDxUcj5cclxuICAgICAgICAgIDxUaD5JRDwvVGg+XHJcbiAgICAgICAgICA8VGg+QWxpYXM8L1RoPlxyXG4gICAgICAgICAgPFRoPk5hbWU8L1RoPlxyXG4gICAgICAgIDwvVHI+XHJcbiAgICAgIDwvVGhlYWQ+XHJcbiAgICAgIDxUYm9keT5cclxuICAgICAgICB7ZGF0YS5tYXAoKEZvcm11bGFUeXBlOiBGb3JtdWxhVHlwZSkgPT4gKFxyXG4gICAgICAgICAgPFRyIGtleT17Rm9ybXVsYVR5cGUuaWR9PlxyXG4gICAgICAgICAgICA8VGQ+e0Zvcm11bGFUeXBlLmlkfTwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD57Rm9ybXVsYVR5cGUuYWxpYXN9PC9UZD5cclxuICAgICAgICAgICAgPFRkPntGb3JtdWxhVHlwZS5uYW1lfTwvVGQ+XHJcbiAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Rib2R5PlxyXG4gICAgPC9DaGFrcmFUYWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYVR5cGVUYWJsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJDaGFrcmFUYWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUciIsIlRoIiwiVGQiLCJGb3JtdWxhVHlwZVRhYmxlIiwiZGF0YSIsInNlbGVjdGVkVGFibGUiLCJjb25zb2xlIiwibG9nIiwicCIsInZhcmlhbnQiLCJtYXAiLCJGb3JtdWxhVHlwZSIsImlkIiwiYWxpYXMiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Tables/FormulaTypesTable.tsx\n"));

/***/ })

});