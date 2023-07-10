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
exports.id = "pages/api/property-types";
exports.ids = ["pages/api/property-types"];
exports.modules = {

/***/ "(api)/./pages/api/property-types.js":
/*!*************************************!*\
  !*** ./pages/api/property-types.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/property-types.js\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Get data from your request\n        const data = req.body;\n        // Perform your data operations here, for example, call Django backend\n        const response = await fetch(\"http://127.0.0.1:8000/api/property-types/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const responseData = await response.json();\n        if (!response.ok) {\n            // Handle error response\n            return res.status(response.status).json(responseData);\n        }\n        // Send a response\n        return res.status(200).json(responseData);\n    } else {\n        // Handle any other HTTP method\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvcGVydHktdHlwZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhCQUE4QjtBQUVmLGVBQWVBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6Qiw2QkFBNkI7UUFDN0IsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUVyQixzRUFBc0U7UUFDdEUsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDZDQUE2QztZQUN4RUosUUFBUTtZQUNSSyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBSCxNQUFNSSxLQUFLQyxTQUFTLENBQUNOO1FBQ3ZCO1FBRUEsTUFBTU8sZUFBZSxNQUFNTCxTQUFTTSxJQUFJO1FBRXhDLElBQUksQ0FBQ04sU0FBU08sRUFBRSxFQUFFO1lBQ2hCLHdCQUF3QjtZQUN4QixPQUFPWCxJQUFJWSxNQUFNLENBQUNSLFNBQVNRLE1BQU0sRUFBRUYsSUFBSSxDQUFDRDtRQUMxQztRQUVBLGtCQUFrQjtRQUNsQixPQUFPVCxJQUFJWSxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDRDtJQUM5QixPQUFPO1FBQ0wsK0JBQStCO1FBQy9CVCxJQUFJYSxTQUFTLENBQUMsU0FBUztZQUFDO1NBQU87UUFDL0JiLElBQUlZLE1BQU0sQ0FBQyxLQUFLRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVmLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL3Byb3BlcnR5LXR5cGVzLmpzPzdlYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3Byb3BlcnR5LXR5cGVzLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgLy8gR2V0IGRhdGEgZnJvbSB5b3VyIHJlcXVlc3RcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuXHJcbiAgICAvLyBQZXJmb3JtIHlvdXIgZGF0YSBvcGVyYXRpb25zIGhlcmUsIGZvciBleGFtcGxlLCBjYWxsIERqYW5nbyBiYWNrZW5kXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3Byb3BlcnR5LXR5cGVzLycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIC8vIEhhbmRsZSBlcnJvciByZXNwb25zZVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXMpLmpzb24ocmVzcG9uc2VEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kIGEgcmVzcG9uc2VcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZURhdGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZURhdGEiLCJqc29uIiwib2siLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/property-types.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/property-types.js"));
module.exports = __webpack_exports__;

})();