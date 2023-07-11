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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_Forms_IngredientForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Forms/IngredientForm */ \"./src/components/Forms/IngredientForm.jsx\");\n/* harmony import */ var _src_components_Forms_PropertyTypeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Forms/PropertyTypeForm */ \"./src/components/Forms/PropertyTypeForm.jsx\");\n/* harmony import */ var _src_components_Forms_IngredientPropertyForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Forms/IngredientPropertyForm */ \"./src/components/Forms/IngredientPropertyForm.jsx\");\n/* harmony import */ var _src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DataEntryPage() {\n    _s();\n    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState(null), 2), currentEntity = _React_useState[0], setCurrentEntity = _React_useState[1];\n    var _React_useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), ingredientData = _React_useState1[0], setIngredientData = _React_useState1[1];\n    var _React_useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), propertyTypeData = _React_useState2[0], setPropertyTypeData = _React_useState2[1];\n    var _React_useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), ingredientPropertiesData = _React_useState3[0], setIngredientPropertiesData = _React_useState3[1];\n    var _React_useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), isTableVisible = _React_useState4[0], setIsTableVisible = _React_useState4[1]; // Add state to control table visibility\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        fetch(\"/api/ingredients\").then(function(res) {\n            return res.json();\n        }).then(setIngredientData);\n        fetch(\"/api/property-types\").then(function(res) {\n            return res.json();\n        }).then(setPropertyTypeData);\n        fetch(\"/api/ingredient-properties\").then(function(res) {\n            return res.json();\n        }).then(setIngredientPropertiesData);\n    }, []);\n    var handleButtonClick = function(entity) {\n        setCurrentEntity(entity);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            p: 5,\n            w: \"100%\",\n            h: \"100vh\",\n            overflow: \"auto\",\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return handleButtonClick(\"Ingredient\");\n                    },\n                    children: \"Ingredient\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return handleButtonClick(\"Property Type\");\n                    },\n                    children: \"Property Type\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return handleButtonClick(\"Ingredient Properties\");\n                    },\n                    children: \"Ingredient Properties\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                currentEntity === \"Ingredient\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                            icon: GiChemicalDrop,\n                            entity: \"Ingredient\",\n                            data: ingredientData,\n                            onClick: handleCyanButtonClick\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this),\n                        isTableVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDisplayTable, {\n                            data: ingredientData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 51,\n                            columnNumber: 32\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Forms_IngredientForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true),\n                currentEntity === \"Property Type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                            icon: FiSettings,\n                            entity: \"Property Type\",\n                            onClick: handleCyanButtonClick\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        isTableVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDisplayTable, {\n                            data: propertyTypeData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 63,\n                            columnNumber: 32\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Forms_PropertyTypeForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true),\n                currentEntity === \"Ingredient Properties\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                            icon: GiChemicalDrop,\n                            entity: \"Ingredient Properties\",\n                            onClick: handleCyanButtonClick\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        isTableVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDisplayTable, {\n                            data: ingredientPropertiesData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 75,\n                            columnNumber: 32\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IngredientPropertiesForm, {}, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"siNsYd3WyH3EtrYYLAZlVSRWmGY=\");\n_c = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c;\n$RefreshReg$(_c, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUM2QjtBQUNJO0FBQ1k7QUFDZjtBQUVyRSxTQUFTTTs7SUFDUCxJQUEwQ04sa0JBQUFBLCtEQUFBQSxDQUFBQSxxREFBYyxDQUFDLFdBQWxEUSxnQkFBbUNSLG9CQUFwQlMsbUJBQW9CVDtJQUMxQyxJQUE0Q0EsbUJBQUFBLCtEQUFBQSxDQUFBQSxxREFBYyxDQUFDLEVBQUUsT0FBdERVLGlCQUFxQ1YscUJBQXJCVyxvQkFBcUJYO0lBQzVDLElBQWdEQSxtQkFBQUEsK0RBQUFBLENBQUFBLHFEQUFjLENBQUMsRUFBRSxPQUExRFksbUJBQXlDWixxQkFBdkJhLHNCQUF1QmI7SUFDaEQsSUFBZ0VBLG1CQUFBQSwrREFBQUEsQ0FBQUEscURBQWMsQ0FBQyxFQUFFLE9BQTFFYywyQkFBeURkLHFCQUEvQmUsOEJBQStCZjtJQUNoRSxJQUE0Q0EsbUJBQUFBLCtEQUFBQSxDQUFBQSxxREFBYyxDQUFDLFlBQXBEZ0IsaUJBQXFDaEIscUJBQXJCaUIsb0JBQXFCakIscUJBQXVCLHdDQUF3QztJQUUzR0Esc0RBQWUsQ0FBQztRQUNkbUIsTUFBTSxvQkFDSEMsSUFBSSxDQUFDQyxTQUFBQTttQkFBT0EsSUFBSUMsSUFBSTtXQUNwQkYsSUFBSSxDQUFDVDtRQUVSUSxNQUFNLHVCQUNIQyxJQUFJLENBQUNDLFNBQUFBO21CQUFPQSxJQUFJQyxJQUFJO1dBQ3BCRixJQUFJLENBQUNQO1FBRVJNLE1BQU0sOEJBQ0hDLElBQUksQ0FBQ0MsU0FBQUE7bUJBQU9BLElBQUlDLElBQUk7V0FDcEJGLElBQUksQ0FBQ0w7SUFDVixHQUFHLEVBQUU7SUFFTCxJQUFNUSxvQkFBb0IsU0FBQ0M7UUFDekJmLGlCQUFpQmU7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ25CLDBFQUFpQkE7a0JBQ2hCLDRFQUFDSixpREFBR0E7WUFBQ3dCLEdBQUc7WUFBR0MsR0FBRTtZQUFPQyxHQUFFO1lBQVFDLFVBQVM7O2dCQUFPOzhCQUc1Qyw4REFBQ0M7b0JBQU9DLFNBQVM7K0JBQU1QLGtCQUFrQjs7OEJBQWU7Ozs7Ozs4QkFFeEQsOERBQUNNO29CQUFPQyxTQUFTOytCQUFNUCxrQkFBa0I7OzhCQUFrQjs7Ozs7OzhCQUUzRCw4REFBQ007b0JBQU9DLFNBQVM7K0JBQU1QLGtCQUFrQjs7OEJBQTBCOzs7Ozs7Z0JBQ2xFZixrQkFBa0IsOEJBQ2pCOztzQ0FDRSw4REFBQ3VCOzRCQUNDQyxNQUFNQzs0QkFDTlQsUUFBTzs0QkFDUFUsTUFBTXhCOzRCQUNOb0IsU0FBU0s7Ozs7Ozt3QkFFVm5CLGdDQUFrQiw4REFBQ29COzRCQUFpQkYsTUFBTXhCOzs7Ozs7c0NBQzNDLDhEQUFDUiw0RUFBY0E7Ozs7Ozs7Z0JBSWxCTSxrQkFBa0IsaUNBQ2pCOztzQ0FDRSw4REFBQ3VCOzRCQUNDQyxNQUFNSzs0QkFDTmIsUUFBTzs0QkFDUE0sU0FBU0s7Ozs7Ozt3QkFFVm5CLGdDQUFrQiw4REFBQ29COzRCQUFpQkYsTUFBTXRCOzs7Ozs7c0NBQzNDLDhEQUFDVCw4RUFBZ0JBOzs7Ozs7O2dCQUlwQkssa0JBQWtCLHlDQUNqQjs7c0NBQ0UsOERBQUN1Qjs0QkFDQ0MsTUFBTUM7NEJBQ05ULFFBQU87NEJBQ1BNLFNBQVNLOzs7Ozs7d0JBRVZuQixnQ0FBa0IsOERBQUNvQjs0QkFBaUJGLE1BQU1wQjs7Ozs7O3NDQUMzQyw4REFBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQTFFU2hDO0tBQUFBO0FBNEVULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcz8wZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgSW5ncmVkaWVudEZvcm0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9ybXMvSW5ncmVkaWVudEZvcm0nO1xyXG5pbXBvcnQgUHJvcGVydHlUeXBlRm9ybSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9Qcm9wZXJ0eVR5cGVGb3JtJztcclxuaW1wb3J0IEluZ3JlZGllbnRQcm9wZXJ0eUZvcm0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9ybXMvSW5ncmVkaWVudFByb3BlcnR5Rm9ybSc7XHJcbmltcG9ydCBTaWRlYmFyV2l0aEhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL1NpZGVCYXInO1xyXG5cclxuZnVuY3Rpb24gRGF0YUVudHJ5UGFnZSgpIHtcclxuICBjb25zdCBbY3VycmVudEVudGl0eSwgc2V0Q3VycmVudEVudGl0eV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW5ncmVkaWVudERhdGEsIHNldEluZ3JlZGllbnREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvcGVydHlUeXBlRGF0YSwgc2V0UHJvcGVydHlUeXBlRGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2luZ3JlZGllbnRQcm9wZXJ0aWVzRGF0YSwgc2V0SW5ncmVkaWVudFByb3BlcnRpZXNEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNUYWJsZVZpc2libGUsIHNldElzVGFibGVWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTsgLy8gQWRkIHN0YXRlIHRvIGNvbnRyb2wgdGFibGUgdmlzaWJpbGl0eVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goJy9hcGkvaW5ncmVkaWVudHMnKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oc2V0SW5ncmVkaWVudERhdGEpO1xyXG5cclxuICAgIGZldGNoKCcvYXBpL3Byb3BlcnR5LXR5cGVzJylcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKHNldFByb3BlcnR5VHlwZURhdGEpO1xyXG5cclxuICAgIGZldGNoKCcvYXBpL2luZ3JlZGllbnQtcHJvcGVydGllcycpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihzZXRJbmdyZWRpZW50UHJvcGVydGllc0RhdGEpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoZW50aXR5KSA9PiB7XHJcbiAgICBzZXRDdXJyZW50RW50aXR5KGVudGl0eSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlYmFyV2l0aEhlYWRlcj5cclxuICAgICAgPEJveCBwPXs1fSB3PVwiMTAwJVwiIGg9XCIxMDB2aFwiIG92ZXJmbG93PVwiYXV0b1wiPiB7LyogQWRkaW5nIGhlaWdodCBhbmQgb3ZlcmZsb3cgcHJvcGVydGllcyAqL31cclxuICAgICAgICB7LyogQXNzdW1pbmcgeW91IHdpbGwgaGF2ZSBzb21lIHNvcnQgb2YgbmF2aWdhdGlvbiBidXR0b25zIHRvIHNlbGVjdCBlbnRpdHkuICovfVxyXG4gICAgICAgIHsvKiBCdXR0b24gdG8gc2VsZWN0ICdJbmdyZWRpZW50JyAqL31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCdJbmdyZWRpZW50Jyl9PkluZ3JlZGllbnQ8L2J1dHRvbj5cclxuICAgICAgICB7LyogQnV0dG9uIHRvIHNlbGVjdCAnUHJvcGVydHkgVHlwZScgKi99XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljaygnUHJvcGVydHkgVHlwZScpfT5Qcm9wZXJ0eSBUeXBlPC9idXR0b24+XHJcbiAgICAgICAgey8qIEJ1dHRvbiB0byBzZWxlY3QgJ0luZ3JlZGllbnQgUHJvcGVydGllcycgKi99XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljaygnSW5ncmVkaWVudCBQcm9wZXJ0aWVzJyl9PkluZ3JlZGllbnQgUHJvcGVydGllczwvYnV0dG9uPlxyXG4gICAgICAgIHtjdXJyZW50RW50aXR5ID09PSAnSW5ncmVkaWVudCcgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICBpY29uPXtHaUNoZW1pY2FsRHJvcH1cclxuICAgICAgICAgICAgICBlbnRpdHk9XCJJbmdyZWRpZW50XCJcclxuICAgICAgICAgICAgICBkYXRhPXtpbmdyZWRpZW50RGF0YX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDeWFuQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtpc1RhYmxlVmlzaWJsZSAmJiA8RGF0YURpc3BsYXlUYWJsZSBkYXRhPXtpbmdyZWRpZW50RGF0YX0gLz59XHJcbiAgICAgICAgICAgIDxJbmdyZWRpZW50Rm9ybSAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2N1cnJlbnRFbnRpdHkgPT09ICdQcm9wZXJ0eSBUeXBlJyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgIGljb249e0ZpU2V0dGluZ3N9XHJcbiAgICAgICAgICAgICAgZW50aXR5PVwiUHJvcGVydHkgVHlwZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3lhbkJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7aXNUYWJsZVZpc2libGUgJiYgPERhdGFEaXNwbGF5VGFibGUgZGF0YT17cHJvcGVydHlUeXBlRGF0YX0gLz59XHJcbiAgICAgICAgICAgIDxQcm9wZXJ0eVR5cGVGb3JtIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7Y3VycmVudEVudGl0eSA9PT0gJ0luZ3JlZGllbnQgUHJvcGVydGllcycgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICBpY29uPXtHaUNoZW1pY2FsRHJvcH1cclxuICAgICAgICAgICAgICBlbnRpdHk9XCJJbmdyZWRpZW50IFByb3BlcnRpZXNcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUN5YW5CdXR0b25DbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2lzVGFibGVWaXNpYmxlICYmIDxEYXRhRGlzcGxheVRhYmxlIGRhdGE9e2luZ3JlZGllbnRQcm9wZXJ0aWVzRGF0YX0gLz59XHJcbiAgICAgICAgICAgIDxJbmdyZWRpZW50UHJvcGVydGllc0Zvcm0gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9TaWRlYmFyV2l0aEhlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhRW50cnlQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkluZ3JlZGllbnRGb3JtIiwiUHJvcGVydHlUeXBlRm9ybSIsIkluZ3JlZGllbnRQcm9wZXJ0eUZvcm0iLCJTaWRlYmFyV2l0aEhlYWRlciIsIkRhdGFFbnRyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRFbnRpdHkiLCJzZXRDdXJyZW50RW50aXR5IiwiaW5ncmVkaWVudERhdGEiLCJzZXRJbmdyZWRpZW50RGF0YSIsInByb3BlcnR5VHlwZURhdGEiLCJzZXRQcm9wZXJ0eVR5cGVEYXRhIiwiaW5ncmVkaWVudFByb3BlcnRpZXNEYXRhIiwic2V0SW5ncmVkaWVudFByb3BlcnRpZXNEYXRhIiwiaXNUYWJsZVZpc2libGUiLCJzZXRJc1RhYmxlVmlzaWJsZSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJoYW5kbGVCdXR0b25DbGljayIsImVudGl0eSIsInAiLCJ3IiwiaCIsIm92ZXJmbG93IiwiYnV0dG9uIiwib25DbGljayIsIk5hdkl0ZW0iLCJpY29uIiwiR2lDaGVtaWNhbERyb3AiLCJkYXRhIiwiaGFuZGxlQ3lhbkJ1dHRvbkNsaWNrIiwiRGF0YURpc3BsYXlUYWJsZSIsIkZpU2V0dGluZ3MiLCJJbmdyZWRpZW50UHJvcGVydGllc0Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});