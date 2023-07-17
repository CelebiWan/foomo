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
exports.id = "pages/api/processes";
exports.ids = ["pages/api/processes"];
exports.modules = {

/***/ "(api)/./pages/api/processes.js":
/*!********************************!*\
  !*** ./pages/api/processes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/processes.js\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Get data from your request\n        const data = req.body;\n        // Perform your data operations here, for example, call Django backend\n        const response = await fetch(\"http://127.0.0.1:8000/api/processes/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const responseData = await response.json();\n        if (!response.ok) {\n            // Handle error response\n            return res.status(response.status).json(responseData);\n        }\n        // Send a response\n        return res.status(200).json(responseData);\n    } else {\n        // Handle any other HTTP method\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvY2Vzc2VzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5QkFBeUI7QUFFVixlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsNkJBQTZCO1FBQzdCLE1BQU1DLE9BQU9ILElBQUlJLElBQUk7UUFFckIsc0VBQXNFO1FBQ3RFLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx3Q0FBd0M7WUFDbkVKLFFBQVE7WUFDUkssU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUgsTUFBTUksS0FBS0MsU0FBUyxDQUFDTjtRQUN2QjtRQUVBLE1BQU1PLGVBQWUsTUFBTUwsU0FBU00sSUFBSTtRQUV4QyxJQUFJLENBQUNOLFNBQVNPLEVBQUUsRUFBRTtZQUNoQix3QkFBd0I7WUFDeEIsT0FBT1gsSUFBSVksTUFBTSxDQUFDUixTQUFTUSxNQUFNLEVBQUVGLElBQUksQ0FBQ0Q7UUFDMUM7UUFFQSxrQkFBa0I7UUFDbEIsT0FBT1QsSUFBSVksTUFBTSxDQUFDLEtBQUtGLElBQUksQ0FBQ0Q7SUFDOUIsT0FBTztRQUNMLCtCQUErQjtRQUMvQlQsSUFBSWEsU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CYixJQUFJWSxNQUFNLENBQUMsS0FBS0UsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFZixJQUFJRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9wcm9jZXNzZXMuanM/NTU0MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvcHJvY2Vzc2VzLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIC8vIEdldCBkYXRhIGZyb20geW91ciByZXF1ZXN0XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBcclxuICAgICAgLy8gUGVyZm9ybSB5b3VyIGRhdGEgb3BlcmF0aW9ucyBoZXJlLCBmb3IgZXhhbXBsZSwgY2FsbCBEamFuZ28gYmFja2VuZFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3Byb2Nlc3Nlcy8nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yIHJlc3BvbnNlXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLy8gU2VuZCBhIHJlc3BvbnNlXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZURhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxyXG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJvayIsInN0YXR1cyIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/processes.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/processes.js"));
module.exports = __webpack_exports__;

})();