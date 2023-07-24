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

/***/ "./src/components/Forms/EquipmentsForm.jsx":
/*!*************************************************!*\
  !*** ./src/components/Forms/EquipmentsForm.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction EquipmentForm() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), message = _useState[0], setMessage = _useState[1];\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function(event) {\n            var data, values, response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        data = new FormData(event.target);\n                        values = Object.fromEntries(data.entries());\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            fetch(\"/api/equipments/\", {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify(values)\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (response.ok) {\n                            setMessage(\"Form submitted successfully!\");\n                            event.target.reset(); // Resets the form after successful submission\n                        } else {\n                            console.error(\"Error:\", response.statusText);\n                            setMessage(\"Error occurred while submitting form. Please try again.\");\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(\"Error:\", error);\n                        setMessage(\"An unexpected error occurred. Please try again.\");\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                        id: \"name\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                name: \"name\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                        id: \"alias\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                children: \"Alias\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                name: \"alias\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        mt: 4,\n                        colorScheme: \"teal\",\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\EquipmentsForm.jsx\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(EquipmentForm, \"l8KXAebGu4sZHsyCIQX7P8si41w=\");\n_c = EquipmentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EquipmentForm);\nvar _c;\n$RefreshReg$(_c, \"EquipmentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9FcXVpcG1lbnRzRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDbUM7QUFFekUsU0FBU007O0lBQ1AsSUFBOEJMLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUFoQ00sVUFBdUJOLGNBQWRPLGFBQWNQO0lBQzlCLElBQU1RO21CQUFlLDRFQUFPQztnQkFFcEJDLE1BQ0FDLFFBR0VDLFVBZUNDOzs7O3dCQXBCVEosTUFBTUssY0FBYzt3QkFDZEosT0FBTyxJQUFJSyxTQUFTTixNQUFNTyxNQUFNO3dCQUNoQ0wsU0FBU00sT0FBT0MsV0FBVyxDQUFDUixLQUFLUyxPQUFPOzs7Ozs7Ozs7d0JBRzNCOzs0QkFBTUMsTUFBTSxvQkFBb0I7Z0NBQy9DQyxRQUFRO2dDQUNSQyxTQUFTO29DQUNQLGdCQUFnQjtnQ0FDbEI7Z0NBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2Q7NEJBQ3ZCOzs7d0JBTk1DLFdBQVc7d0JBUWpCLElBQUlBLFNBQVNjLEVBQUUsRUFBRTs0QkFDZm5CLFdBQVc7NEJBQ1hFLE1BQU1PLE1BQU0sQ0FBQ1csS0FBSyxJQUFLLDhDQUE4Qzt3QkFDdkUsT0FBTzs0QkFDTEMsUUFBUWYsS0FBSyxDQUFDLFVBQVVELFNBQVNpQixVQUFVOzRCQUMzQ3RCLFdBQVc7d0JBQ2I7Ozs7Ozt3QkFDT007d0JBQ1BlLFFBQVFmLEtBQUssQ0FBQyxVQUFVQTt3QkFDeEJOLFdBQVc7Ozs7Ozs7Ozs7O1FBRWY7d0JBekJNQyxhQUFzQkM7Ozs7SUEyQjVCLHFCQUNFOzswQkFDQSw4REFBQ3FCO2dCQUFLQyxVQUFVdkI7O2tDQUNkLDhEQUFDTix5REFBV0E7d0JBQUM4QixJQUFHOzswQ0FDZCw4REFBQzdCLHVEQUFTQTswQ0FBQzs7Ozs7OzBDQUNYLDhEQUFDQyxtREFBS0E7Z0NBQUM2QixNQUFLO2dDQUFPQyxNQUFLO2dDQUFPQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR3pDLDhEQUFDakMseURBQVdBO3dCQUFDOEIsSUFBRzs7MENBQ1osOERBQUM3Qix1REFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0MsbURBQUtBO2dDQUFDNkIsTUFBSztnQ0FBT0MsTUFBSztnQ0FBUUMsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUc1Qyw4REFBQ2xDLG9EQUFNQTt3QkFBQ21DLElBQUk7d0JBQUdDLGFBQVk7d0JBQU9KLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OztZQUlqRDNCLHlCQUFXLDhEQUFDZ0M7MEJBQUtoQzs7Ozs7Ozs7QUFHdEI7R0FqRFNEO0tBQUFBO0FBbURULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL0VxdWlwbWVudHNGb3JtLmpzeD80OTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEVxdWlwbWVudEZvcm0oKSB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5mcm9tRW50cmllcyhkYXRhLmVudHJpZXMoKSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9lcXVpcG1lbnRzLycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBzZXRNZXNzYWdlKCdGb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7ICAvLyBSZXNldHMgdGhlIGZvcm0gYWZ0ZXIgc3VjY2Vzc2Z1bCBzdWJtaXNzaW9uXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgc2V0TWVzc2FnZSgnRXJyb3Igb2NjdXJyZWQgd2hpbGUgc3VibWl0dGluZyBmb3JtLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHNldE1lc3NhZ2UoJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPEZvcm1Db250cm9sIGlkPVwibmFtZVwiPlxyXG4gICAgICAgIDxGb3JtTGFiZWw+TmFtZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICBcclxuICAgICAgPEZvcm1Db250cm9sIGlkPVwiYWxpYXNcIj5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+QWxpYXM8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbGlhc1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgIDxCdXR0b24gbXQ9ezR9IGNvbG9yU2NoZW1lPVwidGVhbFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICBTdWJtaXRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICB7bWVzc2FnZSAmJiA8ZGl2PnttZXNzYWdlfTwvZGl2Pn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIkVxdWlwbWVudEZvcm0iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiZGF0YSIsInZhbHVlcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInJlc2V0IiwiY29uc29sZSIsInN0YXR1c1RleHQiLCJmb3JtIiwib25TdWJtaXQiLCJpZCIsInR5cGUiLCJuYW1lIiwicmVxdWlyZWQiLCJtdCIsImNvbG9yU2NoZW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Forms/EquipmentsForm.jsx\n"));

/***/ })

});