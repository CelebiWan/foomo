"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard2",{

/***/ "./pages/dashboard2.tsx":
/*!******************************!*\
  !*** ./pages/dashboard2.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Navigation/SideBar */ \"./src/components/Navigation/SideBar.tsx\");\n/* harmony import */ var _src_components_Tables_IngredientTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Tables/IngredientTable */ \"./src/components/Tables/IngredientTable.tsx\");\n/* harmony import */ var _src_components_Tables_IngredientPropertiesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Tables/IngredientPropertiesTable */ \"./src/components/Tables/IngredientPropertiesTable.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DataEntryPage() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentEntity = _useState[0], setCurrentEntity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentData = _useState1[0], setCurrentData = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedIngredient = _useState2[0], setSelectedIngredient = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), ingredientProperties = _useState3[0], setIngredientProperties = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), interactions = _useState4[0], setInteractions = _useState4[1];\n    var handleNavClickIngredientTable = function(entity) {\n        setCurrentEntity(entity);\n        setSelectedIngredient(null); // Reset selected ingredient when switching entities\n    };\n    var handleNavClickPropertyTypeTable = function(entity) {\n        setCurrentEntity(entity);\n        setSelectedIngredient(null); // Reset selected ingredient when switching entities\n    };\n    var handleNavClickIngredientPropertiesTable = function(entity) {\n        setCurrentEntity(entity);\n        setSelectedIngredient(null); // Reset selected ingredient when switching entities\n    };\n    var handleIngredientClick = function(ingredient) {\n        setSelectedIngredient(ingredient);\n        fetchIngredientProperties(ingredient);\n        fetchInteractions(ingredient);\n    };\n    var fetchIngredientProperties = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function(ingredient) {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://127.0.0.1:8000/api/ingredient/\".concat(ingredient, \"/properties/\"))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!!response.ok) return [\n                            3,\n                            2\n                        ];\n                        console.error(\"Failed to fetch ingredient properties\");\n                        setIngredientProperties([]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 2:\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        console.log(\"ingredient properties:\", data);\n                        setIngredientProperties(data);\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        error = _state.sent();\n                        console.error(\"Error fetching ingredient properties: \", error);\n                        setIngredientProperties([]);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchIngredientProperties(ingredient) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchInteractions = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function(ingredient) {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://127.0.0.1:8000/api/ingredient/\".concat(ingredient, \"/interactions/\"))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!!response.ok) return [\n                            3,\n                            2\n                        ];\n                        console.error(\"Failed to fetch interactions\");\n                        setInteractions([]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 2:\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        console.log(\"interactions:\", data);\n                        setInteractions(data);\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        error = _state.sent();\n                        console.error(\"Error fetching interactions: \", error);\n                        setInteractions([]);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchInteractions(ingredient) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Fetching data...\");\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {\n                var url, response, data, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            switch(currentEntity){\n                                case \"Ingredient\":\n                                    url = \"http://127.0.0.1:8000/api/ingredients/\";\n                                    break;\n                                case \"Ingredient Property\":\n                                    url = \"http://127.0.0.1:8000/api/ingredient-properties/\";\n                                    break;\n                                default:\n                                    url = \"\";\n                            }\n                            if (!url) return [\n                                3,\n                                7\n                            ];\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                6,\n                                ,\n                                7\n                            ]);\n                            return [\n                                4,\n                                fetch(url)\n                            ];\n                        case 2:\n                            response = _state.sent();\n                            if (!!response.ok) return [\n                                3,\n                                3\n                            ];\n                            console.error(\"Failed to fetch data\");\n                            setCurrentData([]);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 3:\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 4:\n                            data = _state.sent();\n                            console.log(\"data:\", data);\n                            setCurrentData(data);\n                            _state.label = 5;\n                        case 5:\n                            return [\n                                3,\n                                7\n                            ];\n                        case 6:\n                            error = _state.sent();\n                            console.error(\"Error fetching data: \", error);\n                            setCurrentData([]);\n                            return [\n                                3,\n                                7\n                            ];\n                        case 7:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, [\n        currentEntity\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n        templateColumns: \"0.5fr 3fr\",\n        gap: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navigation_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handleNavClickIngredientTable: handleNavClickIngredientTable,\n                    handleNavClickPropertyTypeTable: handleNavClickPropertyTypeTable,\n                    handleNavClickIngredientPropertiesTable: handleNavClickIngredientPropertiesTable\n                }, void 0, false, {\n                    fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard2.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard2.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                direction: \"column\",\n                height: \"100vh\",\n                overflow: \"auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        p: 5,\n                        children: currentEntity === \"Ingredient\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Tables_IngredientTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: currentData,\n                            handleIngredientClick: handleIngredientClick\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard2.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard2.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    selectedIngredient && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        p: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Tables_IngredientPropertiesTable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: ingredientProperties\n                        }, void 0, false, {\n                            fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard2.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard2.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard2.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard2.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"fe1ReU0EwnQpcDrUDGPElXTkgcU=\");\n_c = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c;\n$RefreshReg$(_c, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzRCQUVhOztnQ0FBTWUsU0FBU00sSUFBSTs7OzRCQUExQkwsT0FBTzs0QkFDYkksUUFBUUUsR0FBRyxDQUFDLFNBQVNOOzRCQUNyQmhCLGVBQWVnQjs7Ozs7Ozs7NEJBRVZDOzRCQUNQRyxRQUFRSCxLQUFLLENBQUMseUJBQXlCQTs0QkFDdkNqQjs7Ozs7Ozs7Ozs7WUFHTjs0QkE3Qk11Qjs7OztRQStCTkE7SUFDRixHQUFHO1FBQUMxQjtLQUFjO0lBRWxCLHFCQUNFLDhEQUFDTCxrREFBSUE7UUFBQ2lDLGlCQUFnQjtRQUFZQyxLQUFLOzswQkFDckMsOERBQUNwQyxpREFBR0E7MEJBQ0YsNEVBQUNHLDBFQUFjQTtvQkFDYmMsK0JBQStCQTtvQkFDL0JFLGlDQUFpQ0E7b0JBQ2pDQyx5Q0FBeUNBOzs7Ozs7Ozs7OzswQkFHN0MsOERBQUNuQixrREFBSUE7Z0JBQUNvQyxXQUFVO2dCQUFTQyxRQUFPO2dCQUFRQyxVQUFTOztrQ0FDL0MsOERBQUN2QyxpREFBR0E7d0JBQUN3QyxHQUFHO2tDQUNMakMsa0JBQWtCLDhCQUNqQiw4REFBQ0gsOEVBQWVBOzRCQUNkc0IsTUFBTWpCOzRCQUNOWSx1QkFBdUJBOzs7Ozs7Ozs7OztvQkFJNUJWLG9DQUNDLDhEQUFDWCxpREFBR0E7d0JBQUN3QyxHQUFHO2tDQUNOLDRFQUFDbkMsd0ZBQXlCQTs0QkFBQ3FCLE1BQU1iOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03QztHQTlIU1A7S0FBQUE7QUFnSVQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkMi50c3g/ZDNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBHcmlkIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyQ29udGVudCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL1NpZGVCYXInO1xyXG5pbXBvcnQgSW5ncmVkaWVudFRhYmxlIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RhYmxlcy9JbmdyZWRpZW50VGFibGUnO1xyXG5pbXBvcnQgSW5ncmVkaWVudFByb3BlcnRpZXNUYWJsZSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UYWJsZXMvSW5ncmVkaWVudFByb3BlcnRpZXNUYWJsZSc7XHJcbmltcG9ydCBJbnRlcmFjdGlvblRhYmxlIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RhYmxlcy9JbnRlcmFjdGlvblRhYmxlJztcclxuXHJcbmZ1bmN0aW9uIERhdGFFbnRyeVBhZ2UoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRFbnRpdHksIHNldEN1cnJlbnRFbnRpdHldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEluZ3JlZGllbnQsIHNldFNlbGVjdGVkSW5ncmVkaWVudF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbaW5ncmVkaWVudFByb3BlcnRpZXMsIHNldEluZ3JlZGllbnRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgW2ludGVyYWN0aW9ucywgc2V0SW50ZXJhY3Rpb25zXSA9IHVzZVN0YXRlPGFueVtdPihbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50VGFibGUgPSAoZW50aXR5OiBzdHJpbmcpID0+IHtcclxuICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICAgIHNldFNlbGVjdGVkSW5ncmVkaWVudChudWxsKTsgLy8gUmVzZXQgc2VsZWN0ZWQgaW5ncmVkaWVudCB3aGVuIHN3aXRjaGluZyBlbnRpdGllc1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdkNsaWNrUHJvcGVydHlUeXBlVGFibGUgPSAoZW50aXR5OiBzdHJpbmcpID0+IHtcclxuICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICAgIHNldFNlbGVjdGVkSW5ncmVkaWVudChudWxsKTsgLy8gUmVzZXQgc2VsZWN0ZWQgaW5ncmVkaWVudCB3aGVuIHN3aXRjaGluZyBlbnRpdGllc1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdkNsaWNrSW5ncmVkaWVudFByb3BlcnRpZXNUYWJsZSA9IChlbnRpdHk6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q3VycmVudEVudGl0eShlbnRpdHkpO1xyXG4gICAgc2V0U2VsZWN0ZWRJbmdyZWRpZW50KG51bGwpOyAvLyBSZXNldCBzZWxlY3RlZCBpbmdyZWRpZW50IHdoZW4gc3dpdGNoaW5nIGVudGl0aWVzXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5ncmVkaWVudENsaWNrID0gKGluZ3JlZGllbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJbmdyZWRpZW50KGluZ3JlZGllbnQpO1xyXG4gICAgZmV0Y2hJbmdyZWRpZW50UHJvcGVydGllcyhpbmdyZWRpZW50KTtcclxuICAgIGZldGNoSW50ZXJhY3Rpb25zKGluZ3JlZGllbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoSW5ncmVkaWVudFByb3BlcnRpZXMgPSBhc3luYyAoaW5ncmVkaWVudDogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2luZ3JlZGllbnQvJHtpbmdyZWRpZW50fS9wcm9wZXJ0aWVzL2BcclxuICAgICAgKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBpbmdyZWRpZW50IHByb3BlcnRpZXMnKTtcclxuICAgICAgICBzZXRJbmdyZWRpZW50UHJvcGVydGllcyhbXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5ncmVkaWVudCBwcm9wZXJ0aWVzOicsIGRhdGEpO1xyXG4gICAgICAgIHNldEluZ3JlZGllbnRQcm9wZXJ0aWVzKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBpbmdyZWRpZW50IHByb3BlcnRpZXM6ICcsIGVycm9yKTtcclxuICAgICAgc2V0SW5ncmVkaWVudFByb3BlcnRpZXMoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcbmNvbnN0IGZldGNoSW50ZXJhY3Rpb25zID0gYXN5bmMgKGluZ3JlZGllbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50LyR7aW5ncmVkaWVudH0vaW50ZXJhY3Rpb25zL2BcclxuICAgICAgKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBpbnRlcmFjdGlvbnMnKTtcclxuICAgICAgICBzZXRJbnRlcmFjdGlvbnMoW10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ludGVyYWN0aW9uczonLCBkYXRhKTtcclxuICAgICAgICBzZXRJbnRlcmFjdGlvbnMoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGludGVyYWN0aW9uczogJywgZXJyb3IpO1xyXG4gICAgICBzZXRJbnRlcmFjdGlvbnMoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBkYXRhLi4uJyk7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCB1cmw7XHJcbiAgICAgIHN3aXRjaCAoY3VycmVudEVudGl0eSkge1xyXG4gICAgICAgIGNhc2UgJ0luZ3JlZGllbnQnOlxyXG4gICAgICAgICAgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvaW5ncmVkaWVudHMvJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0luZ3JlZGllbnQgUHJvcGVydHknOlxyXG4gICAgICAgICAgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvaW5ncmVkaWVudC1wcm9wZXJ0aWVzLyc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdXJsID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RGF0YShbXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonLCBkYXRhKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudERhdGEoZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6ICcsIGVycm9yKTtcclxuICAgICAgICAgIHNldEN1cnJlbnREYXRhKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2N1cnJlbnRFbnRpdHldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIHRlbXBsYXRlQ29sdW1ucz1cIjAuNWZyIDNmclwiIGdhcD17NH0+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFNpZGViYXJDb250ZW50XHJcbiAgICAgICAgICBoYW5kbGVOYXZDbGlja0luZ3JlZGllbnRUYWJsZT17aGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50VGFibGV9XHJcbiAgICAgICAgICBoYW5kbGVOYXZDbGlja1Byb3BlcnR5VHlwZVRhYmxlPXtoYW5kbGVOYXZDbGlja1Byb3BlcnR5VHlwZVRhYmxlfVxyXG4gICAgICAgICAgaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50UHJvcGVydGllc1RhYmxlPXtoYW5kbGVOYXZDbGlja0luZ3JlZGllbnRQcm9wZXJ0aWVzVGFibGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD1cIjEwMHZoXCIgb3ZlcmZsb3c9XCJhdXRvXCI+XHJcbiAgICAgICAgPEJveCBwPXs1fT5cclxuICAgICAgICAgIHtjdXJyZW50RW50aXR5ID09PSAnSW5ncmVkaWVudCcgJiYgKFxyXG4gICAgICAgICAgICA8SW5ncmVkaWVudFRhYmxlXHJcbiAgICAgICAgICAgICAgZGF0YT17Y3VycmVudERhdGF9XHJcbiAgICAgICAgICAgICAgaGFuZGxlSW5ncmVkaWVudENsaWNrPXtoYW5kbGVJbmdyZWRpZW50Q2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtzZWxlY3RlZEluZ3JlZGllbnQgJiYgKFxyXG4gICAgICAgICAgPEJveCBwPXs1fT5cclxuICAgICAgICAgICAgPEluZ3JlZGllbnRQcm9wZXJ0aWVzVGFibGUgZGF0YT17aW5ncmVkaWVudFByb3BlcnRpZXN9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUVudHJ5UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJGbGV4IiwiR3JpZCIsIlNpZGViYXJDb250ZW50IiwiSW5ncmVkaWVudFRhYmxlIiwiSW5ncmVkaWVudFByb3BlcnRpZXNUYWJsZSIsIkRhdGFFbnRyeVBhZ2UiLCJjdXJyZW50RW50aXR5Iiwic2V0Q3VycmVudEVudGl0eSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJzZWxlY3RlZEluZ3JlZGllbnQiLCJzZXRTZWxlY3RlZEluZ3JlZGllbnQiLCJpbmdyZWRpZW50UHJvcGVydGllcyIsInNldEluZ3JlZGllbnRQcm9wZXJ0aWVzIiwiaW50ZXJhY3Rpb25zIiwic2V0SW50ZXJhY3Rpb25zIiwiaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50VGFibGUiLCJlbnRpdHkiLCJoYW5kbGVOYXZDbGlja1Byb3BlcnR5VHlwZVRhYmxlIiwiaGFuZGxlTmF2Q2xpY2tJbmdyZWRpZW50UHJvcGVydGllc1RhYmxlIiwiaGFuZGxlSW5ncmVkaWVudENsaWNrIiwiaW5ncmVkaWVudCIsImZldGNoSW5ncmVkaWVudFByb3BlcnRpZXMiLCJmZXRjaEludGVyYWN0aW9ucyIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZmV0Y2giLCJvayIsImNvbnNvbGUiLCJqc29uIiwibG9nIiwiZmV0Y2hEYXRhIiwidXJsIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwiZGlyZWN0aW9uIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard2.tsx\n"));

/***/ })

});