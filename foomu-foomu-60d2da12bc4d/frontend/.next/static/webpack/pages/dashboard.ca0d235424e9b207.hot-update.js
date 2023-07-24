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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Dashboard_DBDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Dashboard/DBDashboard */ \"./src/components/Dashboard/DBDashboard.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction DataEntryPage() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentEntity = _useState[0], setCurrentEntity = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentData = _useState1[0], setCurrentData = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedTable = _useState2[0], setSelectedTable = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), ingredientProperties = _useState3[0], setIngredientProperties = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), interactions = _useState4[0], setInteractions = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), recipeMetadata = _useState5[0], setRecipeMetadata = _useState5[1];\n    var handleNavClick = function(entity) {\n        switch(entity){\n            case \"Ingredient\":\n                setCurrentEntity(entity);\n                setSelectedTable(null); // Reset selected ingredient when switching entities\n                break;\n            case \"Property Type\":\n                setCurrentEntity(entity);\n                break;\n            case \"Ingredient Property\":\n                setCurrentEntity(entity);\n                break;\n            case \"Interaction\":\n                setCurrentEntity(entity);\n                break;\n            case \"Recipe\":\n                setCurrentEntity(entity);\n                break;\n            case \"Recipe Metadata\":\n                setCurrentEntity(entity);\n                break;\n            case \"Formula\":\n                setCurrentEntity(entity);\n                break;\n            case \"Formula Type\":\n                setCurrentEntity(entity);\n                break;\n            default:\n                console.log(\"Unhandled entity: \", entity);\n        }\n    };\n    var handleIngredientPropertiesClick = function(ingredient) {\n        setSelectedTable(\"IngredientProperties\");\n        fetchIngredientProperties(ingredient);\n    };\n    var handleIngredientInteractionsClick = function(ingredient) {\n        setSelectedTable(\"Interactions\");\n        fetchInteractions(ingredient);\n    };\n    var handleRecipeMetadataClick = function(recipe) {\n        setSelectedTable(\"RecipeMetadata\");\n        fetchRecipeMetadata(recipe);\n    };\n    var fetchIngredientProperties = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(ingredient) {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://127.0.0.1:8000/api/ingredient/\".concat(ingredient, \"/properties/\"))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!!response.ok) return [\n                            3,\n                            2\n                        ];\n                        console.error(\"Failed to fetch ingredient properties\");\n                        setIngredientProperties([]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 2:\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        console.log(\"ingredient properties:\", data);\n                        setIngredientProperties(data);\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        error = _state.sent();\n                        console.error(\"Error fetching ingredient properties: \", error);\n                        setIngredientProperties([]);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchIngredientProperties(ingredient) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchInteractions = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(ingredient) {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://127.0.0.1:8000/api/ingredient/\".concat(ingredient, \"/interactions/\"))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!!response.ok) return [\n                            3,\n                            2\n                        ];\n                        console.error(\"Failed to fetch interactions\");\n                        setInteractions([]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 2:\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        console.log(\"interactions:\", data);\n                        setInteractions(data);\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        error = _state.sent();\n                        console.error(\"Error fetching interactions: \", error);\n                        setInteractions([]);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchInteractions(ingredient) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchRecipeMetadata = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(recipe) {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://127.0.0.1:8000/api/recipe/\".concat(recipe, \"/metadata/\"))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!!response.ok) return [\n                            3,\n                            2\n                        ];\n                        console.error(\"Failed to fetch recipe metadata\");\n                        setRecipeMetadata([]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 2:\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        console.log(\"recipe metadata:\", data);\n                        setRecipeMetadata(data);\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        error = _state.sent();\n                        console.error(\"Error fetching recipe metadata: \", error);\n                        setRecipeMetadata([]);\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchRecipeMetadata(recipe) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Fetching data...\");\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function() {\n                var url, response, data, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            switch(currentEntity){\n                                case \"Ingredient\":\n                                    url = \"http://127.0.0.1:8000/api/ingredients/\";\n                                    break;\n                                case \"Property Type\":\n                                    url = \"http://127.0.0.1:8000/api/property-types/\";\n                                    break;\n                                case \"Ingredient Property\":\n                                    url = \"http://127.0.0.1:8000/api/ingredient-properties/\";\n                                    break;\n                                case \"Interaction\":\n                                    url = \"http://127.0.0.1:8000/api/interactions/\";\n                                    break;\n                                case \"Recipe\":\n                                    url = \"http://127.0.0.1:8000/api/recipes/\";\n                                    break;\n                                case \"Recipe Metadata\":\n                                    url = \"http://127.0.0.1:8000/api/recipe-metadata/\";\n                                    break;\n                                case \"Formula\":\n                                    url = \"http://127.0.0.1:8000/api/formulas/\";\n                                    break;\n                                case \"Formula Type\":\n                                    url = \"http://127.0.0.1:8000/api/formula-types/\";\n                                    break;\n                                default:\n                                    url = \"\";\n                            }\n                            if (!url) return [\n                                3,\n                                7\n                            ];\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                6,\n                                ,\n                                7\n                            ]);\n                            return [\n                                4,\n                                fetch(url)\n                            ];\n                        case 2:\n                            response = _state.sent();\n                            if (!!response.ok) return [\n                                3,\n                                3\n                            ];\n                            console.error(\"Failed to fetch data\");\n                            setCurrentData([]);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 3:\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 4:\n                            data = _state.sent();\n                            console.log(\"data:\", data);\n                            setCurrentData(data);\n                            _state.label = 5;\n                        case 5:\n                            return [\n                                3,\n                                7\n                            ];\n                        case 6:\n                            error = _state.sent();\n                            console.error(\"Error fetching data: \", error);\n                            setCurrentData([]);\n                            return [\n                                3,\n                                7\n                            ];\n                        case 7:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, [\n        currentEntity\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Dashboard_DBDashboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        currentEntity: currentEntity,\n        currentData: currentData,\n        selectedTable: selectedTable,\n        handleIngredientPropertiesClick: handleIngredientPropertiesClick,\n        handleIngredientInteractionsClick: handleIngredientInteractionsClick,\n        ingredientProperties: ingredientProperties,\n        interactions: interactions,\n        handleRecipeMetadataClick: handleRecipeMetadataClick,\n        recipeMetadata: recipeMetadata,\n        handleNavClick: handleNavClick\n    }, void 0, false, {\n        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 175,\n        columnNumber: 5\n    }, this);\n}\n_s(DataEntryPage, \"U9H/SStkwHV/lS8rykfFpUNsxPY=\");\n_c = DataEntryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataEntryPage);\nvar _c;\n$RefreshReg$(_c, \"DataEntryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxTQUFTVTs0QkFDckJ0QixlQUFlc0I7Ozs7Ozs7OzRCQUVWQzs0QkFDUFosUUFBUVksS0FBSyxDQUFDLHlCQUF5QkE7NEJBQ3ZDdkI7Ozs7Ozs7Ozs7O1lBR047NEJBL0NNMkI7Ozs7UUFpRE5BO0lBQ0YsR0FBRztRQUFDOUI7S0FBYztJQUVsQixxQkFDRSw4REFBQ0YsNkVBQVdBO1FBQ1ZFLGVBQWVBO1FBQ2ZFLGFBQWFBO1FBQ2JFLGVBQWVBO1FBQ2ZZLGlDQUFpQ0E7UUFDakNHLG1DQUFtQ0E7UUFDbkNiLHNCQUFzQkE7UUFDdEJFLGNBQWNBO1FBQ2RhLDJCQUEyQkE7UUFDM0JYLGdCQUFnQkE7UUFDaEJFLGdCQUFnQkE7Ozs7OztBQUd0QjtHQXhMU2I7S0FBQUE7QUEwTFQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeD9kN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgREJEYXNoYm9hcmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0RCRGFzaGJvYXJkJztcclxuXHJcbmZ1bmN0aW9uIERhdGFFbnRyeVBhZ2UoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRFbnRpdHksIHNldEN1cnJlbnRFbnRpdHldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYmxlLCBzZXRTZWxlY3RlZFRhYmxlXSA9IHVzZVN0YXRlPCdJbmdyZWRpZW50UHJvcGVydGllcycgfCAnSW50ZXJhY3Rpb25zJyB8ICdSZWNpcGVNZXRhZGF0YScgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbaW5ncmVkaWVudFByb3BlcnRpZXMsIHNldEluZ3JlZGllbnRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgW2ludGVyYWN0aW9ucywgc2V0SW50ZXJhY3Rpb25zXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgW3JlY2lwZU1ldGFkYXRhLCBzZXRSZWNpcGVNZXRhZGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlTmF2Q2xpY2sgPSAoZW50aXR5OiBzdHJpbmcpID0+IHtcclxuICAgIHN3aXRjaCAoZW50aXR5KSB7XHJcbiAgICAgIGNhc2UgJ0luZ3JlZGllbnQnOlxyXG4gICAgICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICAgICAgICBzZXRTZWxlY3RlZFRhYmxlKG51bGwpOyAvLyBSZXNldCBzZWxlY3RlZCBpbmdyZWRpZW50IHdoZW4gc3dpdGNoaW5nIGVudGl0aWVzXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1Byb3BlcnR5IFR5cGUnOlxyXG4gICAgICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSW5ncmVkaWVudCBQcm9wZXJ0eSc6XHJcbiAgICAgICAgc2V0Q3VycmVudEVudGl0eShlbnRpdHkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdJbnRlcmFjdGlvbic6XHJcbiAgICAgICAgc2V0Q3VycmVudEVudGl0eShlbnRpdHkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdSZWNpcGUnOlxyXG4gICAgICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnUmVjaXBlIE1ldGFkYXRhJzpcclxuICAgICAgICBzZXRDdXJyZW50RW50aXR5KGVudGl0eSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Zvcm11bGEnOlxyXG4gICAgICAgIHNldEN1cnJlbnRFbnRpdHkoZW50aXR5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRm9ybXVsYSBUeXBlJzpcclxuICAgICAgICBzZXRDdXJyZW50RW50aXR5KGVudGl0eSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuaGFuZGxlZCBlbnRpdHk6ICcsIGVudGl0eSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5cclxuY29uc3QgaGFuZGxlSW5ncmVkaWVudFByb3BlcnRpZXNDbGljayA9IChpbmdyZWRpZW50OiBzdHJpbmcpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGFibGUoJ0luZ3JlZGllbnRQcm9wZXJ0aWVzJyk7XHJcbiAgICBmZXRjaEluZ3JlZGllbnRQcm9wZXJ0aWVzKGluZ3JlZGllbnQpO1xyXG4gICAgXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVJbmdyZWRpZW50SW50ZXJhY3Rpb25zQ2xpY2sgPSAoaW5ncmVkaWVudDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRhYmxlKCdJbnRlcmFjdGlvbnMnKTtcclxuICAgIGZldGNoSW50ZXJhY3Rpb25zKGluZ3JlZGllbnQpO1xyXG4gICAgXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVSZWNpcGVNZXRhZGF0YUNsaWNrID0gKHJlY2lwZTogc3RyaW5nKSA9PiB7XHJcbiAgc2V0U2VsZWN0ZWRUYWJsZSgnUmVjaXBlTWV0YWRhdGEnKTtcclxuICBmZXRjaFJlY2lwZU1ldGFkYXRhKHJlY2lwZSk7XHJcbn07XHJcblxyXG5cclxuICBjb25zdCBmZXRjaEluZ3JlZGllbnRQcm9wZXJ0aWVzID0gYXN5bmMgKGluZ3JlZGllbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50LyR7aW5ncmVkaWVudH0vcHJvcGVydGllcy9gXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggaW5ncmVkaWVudCBwcm9wZXJ0aWVzJyk7XHJcbiAgICAgICAgc2V0SW5ncmVkaWVudFByb3BlcnRpZXMoW10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luZ3JlZGllbnQgcHJvcGVydGllczonLCBkYXRhKTtcclxuICAgICAgICBzZXRJbmdyZWRpZW50UHJvcGVydGllcyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5ncmVkaWVudCBwcm9wZXJ0aWVzOiAnLCBlcnJvcik7XHJcbiAgICAgIHNldEluZ3JlZGllbnRQcm9wZXJ0aWVzKFtdKTtcclxuICAgIH1cclxuICB9O1xyXG5jb25zdCBmZXRjaEludGVyYWN0aW9ucyA9IGFzeW5jIChpbmdyZWRpZW50OiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvaW5ncmVkaWVudC8ke2luZ3JlZGllbnR9L2ludGVyYWN0aW9ucy9gXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggaW50ZXJhY3Rpb25zJyk7XHJcbiAgICAgICAgc2V0SW50ZXJhY3Rpb25zKFtdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnRlcmFjdGlvbnM6JywgZGF0YSk7XHJcbiAgICAgICAgc2V0SW50ZXJhY3Rpb25zKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBpbnRlcmFjdGlvbnM6ICcsIGVycm9yKTtcclxuICAgICAgc2V0SW50ZXJhY3Rpb25zKFtdKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGZldGNoUmVjaXBlTWV0YWRhdGEgPSBhc3luYyAocmVjaXBlOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcmVjaXBlLyR7cmVjaXBlfS9tZXRhZGF0YS9gXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcmVjaXBlIG1ldGFkYXRhJyk7XHJcbiAgICAgICAgc2V0UmVjaXBlTWV0YWRhdGEoW10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2lwZSBtZXRhZGF0YTonLCBkYXRhKTtcclxuICAgICAgICBzZXRSZWNpcGVNZXRhZGF0YShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmVjaXBlIG1ldGFkYXRhOiAnLCBlcnJvcik7XHJcbiAgICAgIHNldFJlY2lwZU1ldGFkYXRhKFtdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIGRhdGEuLi4nKTtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHVybDtcclxuICAgICAgc3dpdGNoIChjdXJyZW50RW50aXR5KSB7XHJcbiAgICAgICAgY2FzZSAnSW5ncmVkaWVudCc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50cy8nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUHJvcGVydHkgVHlwZSc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9wcm9wZXJ0eS10eXBlcy8nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnSW5ncmVkaWVudCBQcm9wZXJ0eSc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbmdyZWRpZW50LXByb3BlcnRpZXMvJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0ludGVyYWN0aW9uJzpcclxuICAgICAgICAgIHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2ludGVyYWN0aW9ucy8nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUmVjaXBlJzpcclxuICAgICAgICAgIHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3JlY2lwZXMvJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1JlY2lwZSBNZXRhZGF0YSc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9yZWNpcGUtbWV0YWRhdGEvJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Zvcm11bGEnOlxyXG4gICAgICAgICAgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvZm9ybXVsYXMvJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Zvcm11bGEgVHlwZSc6XHJcbiAgICAgICAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9mb3JtdWxhLXR5cGVzLyc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdXJsID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RGF0YShbXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonLCBkYXRhKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudERhdGEoZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6ICcsIGVycm9yKTtcclxuICAgICAgICAgIHNldEN1cnJlbnREYXRhKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2N1cnJlbnRFbnRpdHldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEQkRhc2hib2FyZFxyXG4gICAgICBjdXJyZW50RW50aXR5PXtjdXJyZW50RW50aXR5fVxyXG4gICAgICBjdXJyZW50RGF0YT17Y3VycmVudERhdGF9XHJcbiAgICAgIHNlbGVjdGVkVGFibGU9e3NlbGVjdGVkVGFibGV9XHJcbiAgICAgIGhhbmRsZUluZ3JlZGllbnRQcm9wZXJ0aWVzQ2xpY2s9e2hhbmRsZUluZ3JlZGllbnRQcm9wZXJ0aWVzQ2xpY2t9XHJcbiAgICAgIGhhbmRsZUluZ3JlZGllbnRJbnRlcmFjdGlvbnNDbGljaz17aGFuZGxlSW5ncmVkaWVudEludGVyYWN0aW9uc0NsaWNrfVxyXG4gICAgICBpbmdyZWRpZW50UHJvcGVydGllcz17aW5ncmVkaWVudFByb3BlcnRpZXN9XHJcbiAgICAgIGludGVyYWN0aW9ucz17aW50ZXJhY3Rpb25zfVxyXG4gICAgICBoYW5kbGVSZWNpcGVNZXRhZGF0YUNsaWNrPXtoYW5kbGVSZWNpcGVNZXRhZGF0YUNsaWNrfVxyXG4gICAgICByZWNpcGVNZXRhZGF0YT17cmVjaXBlTWV0YWRhdGF9XHJcbiAgICAgIGhhbmRsZU5hdkNsaWNrPXtoYW5kbGVOYXZDbGlja31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUVudHJ5UGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRCRGFzaGJvYXJkIiwiRGF0YUVudHJ5UGFnZSIsImN1cnJlbnRFbnRpdHkiLCJzZXRDdXJyZW50RW50aXR5IiwiY3VycmVudERhdGEiLCJzZXRDdXJyZW50RGF0YSIsInNlbGVjdGVkVGFibGUiLCJzZXRTZWxlY3RlZFRhYmxlIiwiaW5ncmVkaWVudFByb3BlcnRpZXMiLCJzZXRJbmdyZWRpZW50UHJvcGVydGllcyIsImludGVyYWN0aW9ucyIsInNldEludGVyYWN0aW9ucyIsInJlY2lwZU1ldGFkYXRhIiwic2V0UmVjaXBlTWV0YWRhdGEiLCJoYW5kbGVOYXZDbGljayIsImVudGl0eSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVJbmdyZWRpZW50UHJvcGVydGllc0NsaWNrIiwiaW5ncmVkaWVudCIsImZldGNoSW5ncmVkaWVudFByb3BlcnRpZXMiLCJoYW5kbGVJbmdyZWRpZW50SW50ZXJhY3Rpb25zQ2xpY2siLCJmZXRjaEludGVyYWN0aW9ucyIsImhhbmRsZVJlY2lwZU1ldGFkYXRhQ2xpY2siLCJyZWNpcGUiLCJmZXRjaFJlY2lwZU1ldGFkYXRhIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaCIsIm9rIiwianNvbiIsImZldGNoRGF0YSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n"));

/***/ })

});