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
exports.id = "pages/api/interaction-types";
exports.ids = ["pages/api/interaction-types"];
exports.modules = {

/***/ "(api)/./pages/api/interaction-types.js":
/*!****************************************!*\
  !*** ./pages/api/interaction-types.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Get data from your request\n        const data = req.body;\n        // Perform your data operations here, for example, call Django backend\n        const response = await fetch(\"http://127.0.0.1:8000/api/interaction-types/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const responseData = await response.json();\n        if (!response.ok) {\n            // Handle error response\n            return res.status(response.status).json(responseData);\n        }\n        // Send a response\n        return res.status(200).json(responseData);\n    } else if (req.method === \"GET\") {\n        // Perform your data operations here, for example, call Django backend\n        const response = await fetch(\"http://127.0.0.1:8000/api/interaction-types/\");\n        const responseData = await response.json();\n        if (!response.ok) {\n            // Handle error response\n            return res.status(response.status).json(responseData);\n        }\n        // Send a response\n        return res.status(200).json(responseData);\n    } else {\n        // Handle any other HTTP method\n        res.setHeader(\"Allow\", [\n            \"POST\",\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW50ZXJhY3Rpb24tdHlwZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6Qiw2QkFBNkI7UUFDN0IsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUVyQixzRUFBc0U7UUFDdEUsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGdEQUFnRDtZQUMzRUosUUFBUTtZQUNSSyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBSCxNQUFNSSxLQUFLQyxTQUFTLENBQUNOO1FBQ3ZCO1FBRUEsTUFBTU8sZUFBZSxNQUFNTCxTQUFTTSxJQUFJO1FBRXhDLElBQUksQ0FBQ04sU0FBU08sRUFBRSxFQUFFO1lBQ2hCLHdCQUF3QjtZQUN4QixPQUFPWCxJQUFJWSxNQUFNLENBQUNSLFNBQVNRLE1BQU0sRUFBRUYsSUFBSSxDQUFDRDtRQUMxQztRQUVBLGtCQUFrQjtRQUNsQixPQUFPVCxJQUFJWSxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDRDtJQUM5QixPQUFPLElBQUlWLElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQy9CLHNFQUFzRTtRQUN0RSxNQUFNRyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTUksZUFBZSxNQUFNTCxTQUFTTSxJQUFJO1FBRXhDLElBQUksQ0FBQ04sU0FBU08sRUFBRSxFQUFFO1lBQ2hCLHdCQUF3QjtZQUN4QixPQUFPWCxJQUFJWSxNQUFNLENBQUNSLFNBQVNRLE1BQU0sRUFBRUYsSUFBSSxDQUFDRDtRQUMxQztRQUVBLGtCQUFrQjtRQUNsQixPQUFPVCxJQUFJWSxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDRDtJQUM5QixPQUFPO1FBQ0wsK0JBQStCO1FBQy9CVCxJQUFJYSxTQUFTLENBQUMsU0FBUztZQUFDO1lBQVE7U0FBTTtRQUN0Q2IsSUFBSVksTUFBTSxDQUFDLEtBQUtFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWYsSUFBSUUsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvaW50ZXJhY3Rpb24tdHlwZXMuanM/MWU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIC8vIEdldCBkYXRhIGZyb20geW91ciByZXF1ZXN0XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBcclxuICAgICAgLy8gUGVyZm9ybSB5b3VyIGRhdGEgb3BlcmF0aW9ucyBoZXJlLCBmb3IgZXhhbXBsZSwgY2FsbCBEamFuZ28gYmFja2VuZFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2ludGVyYWN0aW9uLXR5cGVzLycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3IgcmVzcG9uc2VcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXMpLmpzb24ocmVzcG9uc2VEYXRhKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBTZW5kIGEgcmVzcG9uc2VcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlRGF0YSk7XHJcbiAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgIC8vIFBlcmZvcm0geW91ciBkYXRhIG9wZXJhdGlvbnMgaGVyZSwgZm9yIGV4YW1wbGUsIGNhbGwgRGphbmdvIGJhY2tlbmRcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9pbnRlcmFjdGlvbi10eXBlcy8nKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yIHJlc3BvbnNlXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLy8gU2VuZCBhIHJlc3BvbnNlXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZURhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxyXG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCcsICdHRVQnXSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZURhdGEiLCJqc29uIiwib2siLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/interaction-types.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/interaction-types.js"));
module.exports = __webpack_exports__;

})();