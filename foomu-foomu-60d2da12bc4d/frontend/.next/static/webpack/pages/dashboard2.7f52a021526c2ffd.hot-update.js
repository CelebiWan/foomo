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

/***/ "./src/components/Forms/QualitativeTypesForm.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Forms/QualitativeTypesForm.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction QualitativeTypeForm() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(useState(\"\"), 2), message = _useState[0], setMessage = _useState[1];\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function(event) {\n            var data, values, response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        data = new FormData(event.target);\n                        values = Object.fromEntries(data.entries());\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            fetch(\"/api/qualitativetypes/\", {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify(values)\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (response.ok) {\n                            setMessage(\"Form submitted successfully!\");\n                            event.target.reset(); // Resets the form after successful submission\n                        } else {\n                            console.error(\"Error:\", response.statusText);\n                            setMessage(\"Error occurred while submitting form. Please try again.\");\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(\"Error:\", error);\n                        setMessage(\"An unexpected error occurred. Please try again.\");\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                        id: \"name\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                name: \"name\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                        id: \"alias\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                children: \"Alias\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                name: \"alias\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        mt: 4,\n                        colorScheme: \"teal\",\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\foomu\\\\foomu-foomu-60d2da12bc4d\\\\frontend\\\\src\\\\components\\\\Forms\\\\QualitativeTypesForm.jsx\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(QualitativeTypeForm, \"l8KXAebGu4sZHsyCIQX7P8si41w=\");\n_c = QualitativeTypeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QualitativeTypeForm);\nvar _c;\n$RefreshReg$(_c, \"QualitativeTypeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9RdWFsaXRhdGl2ZVR5cGVzRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDK0M7QUFFekUsU0FBU0s7O0lBQ1AsSUFBOEJDLFlBQUFBLCtEQUFBQSxDQUFBQSxTQUFTLFNBQWhDQyxVQUF1QkQsY0FBZEUsYUFBY0Y7SUFDOUIsSUFBTUc7bUJBQWUsNEVBQU9DO2dCQUVwQkMsTUFDQUMsUUFHRUMsVUFlQ0M7Ozs7d0JBcEJUSixNQUFNSyxjQUFjO3dCQUNkSixPQUFPLElBQUlLLFNBQVNOLE1BQU1PLE1BQU07d0JBQ2hDTCxTQUFTTSxPQUFPQyxXQUFXLENBQUNSLEtBQUtTLE9BQU87Ozs7Ozs7Ozt3QkFHM0I7OzRCQUFNQyxNQUFNLDBCQUEwQjtnQ0FDckRDLFFBQVE7Z0NBQ1JDLFNBQVM7b0NBQ1AsZ0JBQWdCO2dDQUNsQjtnQ0FDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDZDs0QkFDdkI7Ozt3QkFOTUMsV0FBVzt3QkFRakIsSUFBSUEsU0FBU2MsRUFBRSxFQUFFOzRCQUNmbkIsV0FBVzs0QkFDWEUsTUFBTU8sTUFBTSxDQUFDVyxLQUFLLElBQUssOENBQThDO3dCQUN2RSxPQUFPOzRCQUNMQyxRQUFRZixLQUFLLENBQUMsVUFBVUQsU0FBU2lCLFVBQVU7NEJBQzNDdEIsV0FBVzt3QkFDYjs7Ozs7O3dCQUNPTTt3QkFDUGUsUUFBUWYsS0FBSyxDQUFDLFVBQVVBO3dCQUN4Qk4sV0FBVzs7Ozs7Ozs7Ozs7UUFFZjt3QkF6Qk1DLGFBQXNCQzs7OztJQTJCNUIscUJBQ0U7OzBCQUNBLDhEQUFDcUI7Z0JBQUtDLFVBQVV2Qjs7a0NBQ2QsOERBQUNQLHlEQUFXQTt3QkFBQytCLElBQUc7OzBDQUNkLDhEQUFDOUIsdURBQVNBOzBDQUFDOzs7Ozs7MENBQ1gsOERBQUNDLG1EQUFLQTtnQ0FBQzhCLE1BQUs7Z0NBQU9DLE1BQUs7Z0NBQU9DLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHekMsOERBQUNsQyx5REFBV0E7d0JBQUMrQixJQUFHOzswQ0FDWiw4REFBQzlCLHVEQUFTQTswQ0FBQzs7Ozs7OzBDQUNYLDhEQUFDQyxtREFBS0E7Z0NBQUM4QixNQUFLO2dDQUFPQyxNQUFLO2dDQUFRQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBRzVDLDhEQUFDbkMsb0RBQU1BO3dCQUFDb0MsSUFBSTt3QkFBR0MsYUFBWTt3QkFBT0osTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7O1lBSWpEM0IseUJBQVcsOERBQUNnQzswQkFBS2hDOzs7Ozs7OztBQUd0QjtHQWpEU0Y7S0FBQUE7QUFtRFQsK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9RdWFsaXRhdGl2ZVR5cGVzRm9ybS5qc3g/NGRjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBRdWFsaXRhdGl2ZVR5cGVGb3JtKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xyXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEuZW50cmllcygpKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3F1YWxpdGF0aXZldHlwZXMvJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoJ0Zvcm0gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICBldmVudC50YXJnZXQucmVzZXQoKTsgIC8vIFJlc2V0cyB0aGUgZm9ybSBhZnRlciBzdWNjZXNzZnVsIHN1Ym1pc3Npb25cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICBzZXRNZXNzYWdlKCdFcnJvciBvY2N1cnJlZCB3aGlsZSBzdWJtaXR0aW5nIGZvcm0uIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgc2V0TWVzc2FnZSgnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5OYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgIFxyXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJhbGlhc1wiPlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5BbGlhczwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFsaWFzXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgPEJ1dHRvbiBtdD17NH0gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIFN1Ym1pdFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIHttZXNzYWdlICYmIDxkaXY+e21lc3NhZ2V9PC9kaXY+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVhbGl0YXRpdmVUeXBlRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIlF1YWxpdGF0aXZlVHlwZUZvcm0iLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJkYXRhIiwidmFsdWVzIiwicmVzcG9uc2UiLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicmVzZXQiLCJjb25zb2xlIiwic3RhdHVzVGV4dCIsImZvcm0iLCJvblN1Ym1pdCIsImlkIiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsIm10IiwiY29sb3JTY2hlbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Forms/QualitativeTypesForm.jsx\n"));

/***/ })

});