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
exports.id = "pages/api/validations";
exports.ids = ["pages/api/validations"];
exports.modules = {

/***/ "(api)/./pages/api/validations.js":
/*!**********************************!*\
  !*** ./pages/api/validations.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/validations.js\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Get data from your request\n        const data = req.body;\n        // Perform your data operations here, for example, call Django backend\n        const response = await fetch(\"http://127.0.0.1:8000/api/validations/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const responseData = await response.json();\n        if (!response.ok) {\n            // Handle error response\n            return res.status(response.status).json(responseData);\n        }\n        // Send a response\n        return res.status(200).json(responseData);\n    } else {\n        // Handle any other HTTP method\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmFsaWRhdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJCQUEyQjtBQUVaLGVBQWVBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6Qiw2QkFBNkI7UUFDN0IsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUVyQixzRUFBc0U7UUFDdEUsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDBDQUEwQztZQUNyRUosUUFBUTtZQUNSSyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBSCxNQUFNSSxLQUFLQyxTQUFTLENBQUNOO1FBQ3ZCO1FBRUEsTUFBTU8sZUFBZSxNQUFNTCxTQUFTTSxJQUFJO1FBRXhDLElBQUksQ0FBQ04sU0FBU08sRUFBRSxFQUFFO1lBQ2hCLHdCQUF3QjtZQUN4QixPQUFPWCxJQUFJWSxNQUFNLENBQUNSLFNBQVNRLE1BQU0sRUFBRUYsSUFBSSxDQUFDRDtRQUMxQztRQUVBLGtCQUFrQjtRQUNsQixPQUFPVCxJQUFJWSxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDRDtJQUM5QixPQUFPO1FBQ0wsK0JBQStCO1FBQy9CVCxJQUFJYSxTQUFTLENBQUMsU0FBUztZQUFDO1NBQU87UUFDL0JiLElBQUlZLE1BQU0sQ0FBQyxLQUFLRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVmLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL3ZhbGlkYXRpb25zLmpzP2ZkZGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3ZhbGlkYXRpb25zLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIC8vIEdldCBkYXRhIGZyb20geW91ciByZXF1ZXN0XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBcclxuICAgICAgLy8gUGVyZm9ybSB5b3VyIGRhdGEgb3BlcmF0aW9ucyBoZXJlLCBmb3IgZXhhbXBsZSwgY2FsbCBEamFuZ28gYmFja2VuZFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3ZhbGlkYXRpb25zLycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3IgcmVzcG9uc2VcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXMpLmpzb24ocmVzcG9uc2VEYXRhKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBTZW5kIGEgcmVzcG9uc2VcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlRGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xyXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2VEYXRhIiwianNvbiIsIm9rIiwic3RhdHVzIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/validations.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/validations.js"));
module.exports = __webpack_exports__;

})();