"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/equipments";
exports.ids = ["pages/api/equipments"];
exports.modules = {

/***/ "(api)/./pages/api/equipments.js":
/*!*********************************!*\
  !*** ./pages/api/equipments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/equipments.js\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Get data from your request\n        const data = req.body;\n        // Perform your data operations here, for example, call Django backend\n        const response = await fetch(\"http://127.0.0.1:8000/api/equipments/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const responseData = await response.json();\n        if (!response.ok) {\n            // Handle error response\n            return res.status(response.status).json(responseData);\n        }\n        // Send a response\n        return res.status(200).json(responseData);\n    } else {\n        // Handle any other HTTP method\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXF1aXBtZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsMEJBQTBCO0FBRVgsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLDZCQUE2QjtRQUM3QixNQUFNQyxPQUFPSCxJQUFJSSxJQUFJO1FBRXJCLHNFQUFzRTtRQUN0RSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0seUNBQXlDO1lBQ3BFSixRQUFRO1lBQ1JLLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FILE1BQU1JLEtBQUtDLFNBQVMsQ0FBQ047UUFDdkI7UUFFQSxNQUFNTyxlQUFlLE1BQU1MLFNBQVNNLElBQUk7UUFFeEMsSUFBSSxDQUFDTixTQUFTTyxFQUFFLEVBQUU7WUFDaEIsd0JBQXdCO1lBQ3hCLE9BQU9YLElBQUlZLE1BQU0sQ0FBQ1IsU0FBU1EsTUFBTSxFQUFFRixJQUFJLENBQUNEO1FBQzFDO1FBRUEsa0JBQWtCO1FBQ2xCLE9BQU9ULElBQUlZLE1BQU0sQ0FBQyxLQUFLRixJQUFJLENBQUNEO0lBQzlCLE9BQU87UUFDTCwrQkFBK0I7UUFDL0JULElBQUlhLFNBQVMsQ0FBQyxTQUFTO1lBQUM7U0FBTztRQUMvQmIsSUFBSVksTUFBTSxDQUFDLEtBQUtFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWYsSUFBSUUsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvZXF1aXBtZW50cy5qcz9kNDkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9lcXVpcG1lbnRzLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIC8vIEdldCBkYXRhIGZyb20geW91ciByZXF1ZXN0XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBcclxuICAgICAgLy8gUGVyZm9ybSB5b3VyIGRhdGEgb3BlcmF0aW9ucyBoZXJlLCBmb3IgZXhhbXBsZSwgY2FsbCBEamFuZ28gYmFja2VuZFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2VxdWlwbWVudHMvJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvciByZXNwb25zZVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbihyZXNwb25zZURhdGEpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIFNlbmQgYSByZXNwb25zZVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2VEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcclxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZURhdGEiLCJqc29uIiwib2siLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/equipments.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/equipments.js"));
module.exports = __webpack_exports__;

})();