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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_Forms_IngredientForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Forms/IngredientForm */ \"./src/components/Forms/IngredientForm.jsx\");\n/* harmony import */ var _src_components_Forms_PropertyTypeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Forms/PropertyTypeForm */ \"./src/components/Forms/PropertyTypeForm.jsx\");\n/* harmony import */ var _src_components_Forms_IngredientPropertyForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Forms/IngredientPropertyForm */ \"./src/components/Forms/IngredientPropertyForm.jsx\");\n/* harmony import */ var _src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar DataDisplayTable = function(param) {\n    var data = param.data;\n    if (!data || data.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data to display.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, _this);\n    }\n    var headers = Object.keys(data[0]); // Get headers from first object\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table, {\n        variant: \"simple\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Thead, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tr, {\n                    children: headers.map(function(header, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Th, {\n                            children: header\n                        }, index, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tbody, {\n                children: data.map(function(row, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tr, {\n                        children: headers.map(function(header, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Td, {\n                                children: row[header]\n                            }, index, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, index, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = DataDisplayTable;\nfunction DataEntryPage() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentEntity = _useState[0], setCurrentEntity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentData = _useState1[0], setCurrentData = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isTableVisible = _useState2[0], setIsTableVisible = _useState2[1];\n    // const handleButtonClick = (entity) => {\n    //   setCurrentEntity(entity);\n    // };\n    var handleNavClick = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function(entity) {\n            var url, response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setCurrentEntity(entity);\n                        switch(entity){\n                            case \"Ingredient\":\n                                url = \"http://127.0.0.1:8000/api/ingredients/\";\n                                break;\n                            case \"Property Type\":\n                                url = \"http://localhost:8000/api/property-types\";\n                                break;\n                            case \"Ingredient Properties\":\n                                url = \"http://localhost:8000/api/ingredient-properties\";\n                                break;\n                            default:\n                                url = \"\";\n                        }\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            fetch(url)\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setCurrentData(data);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching data: \", error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleNavClick(entity) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        handleNavClick: handleNavClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            p: 5,\n            w: \"100%\",\n            h: \"100vh\",\n            overflow: \"auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDisplayTable, {\n                data: currentData\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"kFnjHHTFr8MYM1heT5TdQ6RMZSA=\");\n_c1 = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"DataDisplayTable\");\n$RefreshReg$(_c1, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNxQjtBQUNKO0FBQ0k7QUFDWTtBQUNmO0FBRXJFLElBQU1jLG1CQUFtQjtRQUFHQyxhQUFBQTtJQUMxQixJQUFJLENBQUNBLFFBQVFBLEtBQUtDLE1BQU0sS0FBSyxHQUFHO1FBQzlCLHFCQUFPLDhEQUFDQztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxJQUFNQyxVQUFVQyxPQUFPQyxJQUFJLENBQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsZ0NBQWdDO0lBRXRFLHFCQUNFLDhEQUFDWCxtREFBS0E7UUFBQ2lCLFNBQVE7OzBCQUNiLDhEQUFDaEIsbURBQUtBOzBCQUNKLDRFQUFDRSxnREFBRUE7OEJBQ0FXLFFBQVFJLEdBQUcsQ0FBQyxTQUFDQyxRQUFRQzs2Q0FDcEIsOERBQUNoQixnREFBRUE7c0NBQWNlOzJCQUFSQzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJZiw4REFBQ2xCLG1EQUFLQTswQkFDSFMsS0FBS08sR0FBRyxDQUFDLFNBQUNHLEtBQUtEO3lDQUNkLDhEQUFDakIsZ0RBQUVBO2tDQUNBVyxRQUFRSSxHQUFHLENBQUMsU0FBQ0MsUUFBUUM7aURBQ3BCLDhEQUFDZixnREFBRUE7MENBQWNnQixHQUFHLENBQUNGLE9BQU87K0JBQW5CQzs7Ozs7O3VCQUZKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkI7S0EzQk1WO0FBNEJOLFNBQVNZOztJQUNQLElBQTBDeEIsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFdBQTVDeUIsZ0JBQW1DekIsY0FBcEIwQixtQkFBb0IxQjtJQUMxQyxJQUFzQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBMUMyQixjQUErQjNCLGVBQWxCNEIsaUJBQWtCNUI7SUFDdEMsSUFBNENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUE5QzZCLGlCQUFxQzdCLGVBQXJCOEIsb0JBQXFCOUI7SUFFNUMsMENBQTBDO0lBQzFDLDhCQUE4QjtJQUM5QixLQUFLO0lBRUwsSUFBTStCO21CQUFpQiw0RUFBT0M7Z0JBR3hCQyxLQWdCSUMsVUFDQXJCLE1BRUNzQjs7Ozt3QkFyQlRULGlCQUFpQk07d0JBR2pCLE9BQVFBOzRCQUNOLEtBQUs7Z0NBQ0hDLE1BQU07Z0NBQ047NEJBQ0YsS0FBSztnQ0FDSEEsTUFBTTtnQ0FDTjs0QkFDRixLQUFLO2dDQUNIQSxNQUFNO2dDQUNOOzRCQUNGO2dDQUNFQSxNQUFNO3dCQUNWOzs7Ozs7Ozs7d0JBR21COzs0QkFBTUcsTUFBTUg7Ozt3QkFBdkJDLFdBQVc7d0JBQ0o7OzRCQUFNQSxTQUFTRyxJQUFJOzs7d0JBQTFCeEIsT0FBTzt3QkFDYmUsZUFBZWY7Ozs7Ozt3QkFDUnNCO3dCQUNQRyxRQUFRSCxLQUFLLENBQUMseUJBQXlCQTs7Ozs7Ozs7Ozs7UUFFM0M7d0JBekJNSixlQUF3QkM7Ozs7SUE2QjlCLHFCQUNFLDhEQUFDckIsMEVBQWlCQTtRQUFDb0IsZ0JBQWdCQTtrQkFDakMsNEVBQUM5QixpREFBR0E7WUFBQ2MsR0FBRztZQUFHd0IsR0FBRTtZQUFPQyxHQUFFO1lBQVFDLFVBQVM7c0JBQ3JDLDRFQUFDN0I7Z0JBQWlCQyxNQUFNYzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztHQTdDU0g7TUFBQUE7QUFnRFQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzPzBlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGFibGUsIFRoZWFkLCBUYm9keSwgVHIsIFRoLCBUZCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgSW5ncmVkaWVudEZvcm0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9ybXMvSW5ncmVkaWVudEZvcm0nO1xyXG5pbXBvcnQgUHJvcGVydHlUeXBlRm9ybSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9Qcm9wZXJ0eVR5cGVGb3JtJztcclxuaW1wb3J0IEluZ3JlZGllbnRQcm9wZXJ0eUZvcm0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9ybXMvSW5ncmVkaWVudFByb3BlcnR5Rm9ybSc7XHJcbmltcG9ydCBTaWRlYmFyV2l0aEhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL1NpZGVCYXInO1xyXG5cclxuY29uc3QgRGF0YURpc3BsYXlUYWJsZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDxwPk5vIGRhdGEgdG8gZGlzcGxheS48L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGVhZGVycyA9IE9iamVjdC5rZXlzKGRhdGFbMF0pOyAvLyBHZXQgaGVhZGVycyBmcm9tIGZpcnN0IG9iamVjdFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlIHZhcmlhbnQ9XCJzaW1wbGVcIj5cclxuICAgICAgPFRoZWFkPlxyXG4gICAgICAgIDxUcj5cclxuICAgICAgICAgIHtoZWFkZXJzLm1hcCgoaGVhZGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8VGgga2V5PXtpbmRleH0+e2hlYWRlcn08L1RoPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Ucj5cclxuICAgICAgPC9UaGVhZD5cclxuICAgICAgPFRib2R5PlxyXG4gICAgICAgIHtkYXRhLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7aGVhZGVycy5tYXAoKGhlYWRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8VGQga2V5PXtpbmRleH0+e3Jvd1toZWFkZXJdfTwvVGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Ucj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9UYm9keT5cclxuICAgIDwvVGFibGU+XHJcbiAgKTtcclxufTtcclxuZnVuY3Rpb24gRGF0YUVudHJ5UGFnZSgpIHtcclxuICBjb25zdCBbY3VycmVudEVudGl0eSwgc2V0Q3VycmVudEVudGl0eV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3VycmVudERhdGEsIHNldEN1cnJlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNUYWJsZVZpc2libGUsIHNldElzVGFibGVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoZW50aXR5KSA9PiB7XHJcbiAgLy8gICBzZXRDdXJyZW50RW50aXR5KGVudGl0eSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmF2Q2xpY2sgPSBhc3luYyAoZW50aXR5KSA9PiB7XHJcbiAgICBzZXRDdXJyZW50RW50aXR5KGVudGl0eSk7XHJcbiAgICAvLyBmZXRjaCBkYXRhIGZyb20geW91ciBiYWNrZW5kIGJhc2VkIG9uIHRoZSBlbnRpdHlcclxuICAgIGxldCB1cmw7XHJcbiAgICBzd2l0Y2ggKGVudGl0eSkge1xyXG4gICAgICBjYXNlICdJbmdyZWRpZW50JzpcclxuICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50cy8nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdQcm9wZXJ0eSBUeXBlJzpcclxuICAgICAgICB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9wZXJ0eS10eXBlcyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0luZ3JlZGllbnQgUHJvcGVydGllcyc6XHJcbiAgICAgICAgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvaW5ncmVkaWVudC1wcm9wZXJ0aWVzJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB1cmwgPSAnJztcclxuICAgIH1cclxuICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0Q3VycmVudERhdGEoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOiAnLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZWJhcldpdGhIZWFkZXIgaGFuZGxlTmF2Q2xpY2s9e2hhbmRsZU5hdkNsaWNrfT5cclxuICAgICAgPEJveCBwPXs1fSB3PVwiMTAwJVwiIGg9XCIxMDB2aFwiIG92ZXJmbG93PVwiYXV0b1wiPlxyXG4gICAgICAgIDxEYXRhRGlzcGxheVRhYmxlIGRhdGE9e2N1cnJlbnREYXRhfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvU2lkZWJhcldpdGhIZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFFbnRyeVBhZ2U7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIlRhYmxlIiwiVGhlYWQiLCJUYm9keSIsIlRyIiwiVGgiLCJUZCIsIkluZ3JlZGllbnRGb3JtIiwiUHJvcGVydHlUeXBlRm9ybSIsIkluZ3JlZGllbnRQcm9wZXJ0eUZvcm0iLCJTaWRlYmFyV2l0aEhlYWRlciIsIkRhdGFEaXNwbGF5VGFibGUiLCJkYXRhIiwibGVuZ3RoIiwicCIsImhlYWRlcnMiLCJPYmplY3QiLCJrZXlzIiwidmFyaWFudCIsIm1hcCIsImhlYWRlciIsImluZGV4Iiwicm93IiwiRGF0YUVudHJ5UGFnZSIsImN1cnJlbnRFbnRpdHkiLCJzZXRDdXJyZW50RW50aXR5IiwiY3VycmVudERhdGEiLCJzZXRDdXJyZW50RGF0YSIsImlzVGFibGVWaXNpYmxlIiwic2V0SXNUYWJsZVZpc2libGUiLCJoYW5kbGVOYXZDbGljayIsImVudGl0eSIsInVybCIsInJlc3BvbnNlIiwiZXJyb3IiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwidyIsImgiLCJvdmVyZmxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});