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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n/* harmony import */ var _src_components_Tables_IngredientTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Tables/IngredientTable */ \"./src/components/Tables/IngredientTable.tsx\");\n/* harmony import */ var _src_components_Tables_PropertyTypesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Tables/PropertyTypesTable */ \"./src/components/Tables/PropertyTypesTable.tsx\");\n/* harmony import */ var _src_components_Tables_IngredientPropertiesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Tables/IngredientPropertiesTable */ \"./src/components/Tables/IngredientPropertiesTable.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DataEntryPage() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentEntity = _useState[0], setCurrentEntity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentData = _useState1[0], setCurrentData = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedIngredient = _useState2[0], setSelectedIngredient = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), ingredientProperties = _useState3[0], setIngredientProperties = _useState3[1];\n    var handleNavClickIngredientTable = function(entity) {\n        setCurrentEntity(entity);\n    };\n    var handleNavClickPropertyTypeTable = function(entity) {\n        setCurrentEntity(entity);\n    };\n    var handleNavClickIngredientPropertiesTable = function(entity) {\n        setCurrentEntity(entity);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Fetching data...\");\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var url, response, data, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            switch(currentEntity){\n                                case \"Ingredient\":\n                                    url = \"http://127.0.0.1:8000/api/ingredients/\";\n                                    break;\n                                case \"Property Type\":\n                                    url = \"http://127.0.0.1:8000/api/property-types/\";\n                                    break;\n                                case \"Ingredient Property\":\n                                    url = \"http://127.0.0.1:8000/api/ingredient-properties/\";\n                                    break;\n                                default:\n                                    url = \"\";\n                            }\n                            if (!url) return [\n                                3,\n                                7\n                            ];\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                6,\n                                ,\n                                7\n                            ]);\n                            return [\n                                4,\n                                fetch(url)\n                            ];\n                        case 2:\n                            response = _state.sent();\n                            if (!!response.ok) return [\n                                3,\n                                3\n                            ];\n                            console.error(\"Failed to fetch data\");\n                            setCurrentData([]);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 3:\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 4:\n                            data = _state.sent();\n                            console.log(\"data:\", data);\n                            setCurrentData(data);\n                            _state.label = 5;\n                        case 5:\n                            return [\n                                3,\n                                7\n                            ];\n                        case 6:\n                            error = _state.sent();\n                            console.error(\"Error fetching data: \", error);\n                            setCurrentData([]);\n                            return [\n                                3,\n                                7\n                            ];\n                        case 7:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, [\n        currentEntity\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                flex: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handleNavClickIngredientTable: handleNavClickIngredientTable,\n                    handleNavClickPropertyTypeTable: handleNavClickPropertyTypeTable,\n                    handleNavClickIngredientPropertiesTable: handleNavClickIngredientPropertiesTable,\n                    children: undefined\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                p: 5,\n                w: \"100%\",\n                h: \"100vh\",\n                overflow: \"auto\",\n                flex: 4,\n                children: [\n                    currentEntity === \"Ingredient\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Tables_IngredientTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 42\n                    }, this),\n                    currentEntity === \"Property Type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Tables_PropertyTypesTable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 45\n                    }, this),\n                    currentEntity === \"Ingredient Properties\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Tables_IngredientPropertiesTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: currentData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 53\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"dguUEo6Eb2FdRqNmOGo41QKhIms=\");\n_c = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c;\n$RefreshReg$(_c, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNOO0FBQ3FCO0FBQ0s7QUFDSztBQUNlO0FBRzNGLFNBQVNTOztJQUNQLElBQTBDUixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQTNEUyxnQkFBbUNULGNBQXBCVSxtQkFBb0JWO0lBQzFDLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVEsRUFBRSxPQUFqRFcsY0FBK0JYLGVBQWxCWSxpQkFBa0JaO0lBQ3RDLElBQW9EQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQXJFYSxxQkFBNkNiLGVBQXpCYyx3QkFBeUJkO0lBQ3BELElBQXdEQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVEsRUFBRSxPQUFuRWUsdUJBQWlEZixlQUEzQmdCLDBCQUEyQmhCO0lBRXhELElBQU1pQixnQ0FBZ0MsU0FBQ0M7UUFDckNSLGlCQUFpQlE7SUFDbkI7SUFFQSxJQUFNQyxrQ0FBa0MsU0FBQ0Q7UUFDdkNSLGlCQUFpQlE7SUFDbkI7SUFFQSxJQUFNRSwwQ0FBMEMsU0FBQ0Y7UUFDL0NSLGlCQUFpQlE7SUFDbkI7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1JvQixRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFNQzt1QkFBWTtvQkFDWkMsS0FpQk1DLFVBS0VDLE1BSURDOzs7OzRCQXpCWCxPQUFRbEI7Z0NBQ04sS0FBSztvQ0FDSGUsTUFBTTtvQ0FDTjtnQ0FDRixLQUFLO29DQUNIQSxNQUFNO29DQUNOO2dDQUNGLEtBQUs7b0NBQ0hBLE1BQU07b0NBQ047Z0NBQ0Y7b0NBQ0VBLE1BQU07NEJBQ1Y7aUNBRUlBLEtBQUFBOzs7Ozs7Ozs7Ozs7NEJBRWlCOztnQ0FBTUksTUFBTUo7Ozs0QkFBdkJDLFdBQVc7aUNBQ2IsQ0FBQ0EsU0FBU0ksRUFBRSxFQUFaOzs7OzRCQUNGUixRQUFRTSxLQUFLLENBQUM7NEJBQ2RmOzs7Ozs7NEJBRWE7O2dDQUFNYSxTQUFTSyxJQUFJOzs7NEJBQTFCSixPQUFPOzRCQUNiTCxRQUFRQyxHQUFHLENBQUMsU0FBU0k7NEJBQ3JCZCxlQUFlYzs7Ozs7Ozs7NEJBRVZDOzRCQUNQTixRQUFRTSxLQUFLLENBQUMseUJBQXlCQTs0QkFDdkNmOzs7Ozs7Ozs7OztZQUdOOzRCQWhDTVc7Ozs7UUFrQ05BO0lBQ0YsR0FBRztRQUFDZDtLQUFjO0lBR2xCLHFCQUNFLDhEQUFDTixrREFBSUE7OzBCQUNILDhEQUFDRCxpREFBR0E7Z0JBQUM2QixNQUFNOzBCQUNULDRFQUFDM0IsMEVBQWNBO29CQUNmYSwrQkFBK0JBO29CQUMvQkUsaUNBQWlDQTtvQkFDakNDLHlDQUF5Q0E7b0JBQXlDWSxVQUFVQzs7Ozs7Ozs7Ozs7MEJBRTlGLDhEQUFDL0IsaURBQUdBO2dCQUFDZ0MsR0FBRztnQkFBR0MsR0FBRTtnQkFBT0MsR0FBRTtnQkFBUUMsVUFBUztnQkFBT04sTUFBTTs7b0JBQ25EdEIsa0JBQWtCLDhCQUFnQiw4REFBQ0osOEVBQWVBO3dCQUFDcUIsTUFBTWY7Ozs7OztvQkFDekRGLGtCQUFrQixpQ0FBbUIsOERBQUNILGlGQUFpQkE7d0JBQUNvQixNQUFNZjs7Ozs7O29CQUM5REYsa0JBQWtCLHlDQUEyQiw4REFBQ0Ysd0ZBQXlCQTt3QkFBQ21CLE1BQU1mOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckY7R0F6RVNIO0tBQUFBO0FBMkVULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC50c3g/ZDdmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyQ29udGVudCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL1NpZGVCYXInOyBcclxuaW1wb3J0IEluZ3JlZGllbnRUYWJsZSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UYWJsZXMvSW5ncmVkaWVudFRhYmxlJztcclxuaW1wb3J0IFByb3BlcnR5VHlwZVRhYmxlIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RhYmxlcy9Qcm9wZXJ0eVR5cGVzVGFibGUnO1xyXG5pbXBvcnQgSW5ncmVkaWVudFByb3BlcnRpZXNUYWJsZSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UYWJsZXMvSW5ncmVkaWVudFByb3BlcnRpZXNUYWJsZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gRGF0YUVudHJ5UGFnZSgpIHtcclxuICBjb25zdCBbY3VycmVudEVudGl0eSwgc2V0Q3VycmVudEVudGl0eV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkSW5ncmVkaWVudCwgc2V0U2VsZWN0ZWRJbmdyZWRpZW50XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtpbmdyZWRpZW50UHJvcGVydGllcywgc2V0SW5ncmVkaWVudFByb3BlcnRpZXNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50VGFibGUgPSAoZW50aXR5OiBzdHJpbmcpID0+IHtcclxuICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVOYXZDbGlja1Byb3BlcnR5VHlwZVRhYmxlID0gKGVudGl0eTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50RW50aXR5KGVudGl0eSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVOYXZDbGlja0luZ3JlZGllbnRQcm9wZXJ0aWVzVGFibGUgPSAoZW50aXR5OiBzdHJpbmcpID0+IHtcclxuICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIGRhdGEuLi4nKTtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHVybDtcclxuICAgICAgc3dpdGNoIChjdXJyZW50RW50aXR5KSB7XHJcbiAgICAgICAgY2FzZSAnSW5ncmVkaWVudCc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50cy8nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUHJvcGVydHkgVHlwZSc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9wcm9wZXJ0eS10eXBlcy8nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnSW5ncmVkaWVudCBQcm9wZXJ0eSc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50LXByb3BlcnRpZXMvJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB1cmwgPSAnJztcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RGF0YShbXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonLCBkYXRhKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudERhdGEoZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6ICcsIGVycm9yKTtcclxuICAgICAgICAgIHNldEN1cnJlbnREYXRhKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2N1cnJlbnRFbnRpdHldKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleD5cclxuICAgICAgPEJveCBmbGV4PXsxfT5cclxuICAgICAgICA8U2lkZWJhckNvbnRlbnQgXHJcbiAgICAgICAgaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50VGFibGU9e2hhbmRsZU5hdkNsaWNrSW5ncmVkaWVudFRhYmxlfVxyXG4gICAgICAgIGhhbmRsZU5hdkNsaWNrUHJvcGVydHlUeXBlVGFibGU9e2hhbmRsZU5hdkNsaWNrUHJvcGVydHlUeXBlVGFibGV9XHJcbiAgICAgICAgaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50UHJvcGVydGllc1RhYmxlPXtoYW5kbGVOYXZDbGlja0luZ3JlZGllbnRQcm9wZXJ0aWVzVGFibGV9IGNoaWxkcmVuPXt1bmRlZmluZWR9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHA9ezV9IHc9XCIxMDAlXCIgaD1cIjEwMHZoXCIgb3ZlcmZsb3c9XCJhdXRvXCIgZmxleD17NH0+XHJcbiAgICAgIHtjdXJyZW50RW50aXR5ID09PSAnSW5ncmVkaWVudCcgJiYgPEluZ3JlZGllbnRUYWJsZSBkYXRhPXtjdXJyZW50RGF0YX0gLz59XHJcbiAgICAgIHtjdXJyZW50RW50aXR5ID09PSAnUHJvcGVydHkgVHlwZScgJiYgPFByb3BlcnR5VHlwZVRhYmxlIGRhdGE9e2N1cnJlbnREYXRhfSAvPn1cclxuICAgICAge2N1cnJlbnRFbnRpdHkgPT09ICdJbmdyZWRpZW50IFByb3BlcnRpZXMnICYmIDxJbmdyZWRpZW50UHJvcGVydGllc1RhYmxlIGRhdGE9e2N1cnJlbnREYXRhfSAvPn1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUVudHJ5UGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkZsZXgiLCJTaWRlYmFyQ29udGVudCIsIkluZ3JlZGllbnRUYWJsZSIsIlByb3BlcnR5VHlwZVRhYmxlIiwiSW5ncmVkaWVudFByb3BlcnRpZXNUYWJsZSIsIkRhdGFFbnRyeVBhZ2UiLCJjdXJyZW50RW50aXR5Iiwic2V0Q3VycmVudEVudGl0eSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJzZWxlY3RlZEluZ3JlZGllbnQiLCJzZXRTZWxlY3RlZEluZ3JlZGllbnQiLCJpbmdyZWRpZW50UHJvcGVydGllcyIsInNldEluZ3JlZGllbnRQcm9wZXJ0aWVzIiwiaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50VGFibGUiLCJlbnRpdHkiLCJoYW5kbGVOYXZDbGlja1Byb3BlcnR5VHlwZVRhYmxlIiwiaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50UHJvcGVydGllc1RhYmxlIiwiY29uc29sZSIsImxvZyIsImZldGNoRGF0YSIsInVybCIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZmV0Y2giLCJvayIsImpzb24iLCJmbGV4IiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJwIiwidyIsImgiLCJvdmVyZmxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n"));

/***/ })

});