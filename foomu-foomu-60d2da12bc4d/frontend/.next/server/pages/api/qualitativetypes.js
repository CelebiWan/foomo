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
exports.id = "pages/api/qualitativetypes";
exports.ids = ["pages/api/qualitativetypes"];
exports.modules = {

/***/ "(api)/./pages/api/qualitativetypes.js":
/*!***************************************!*\
  !*** ./pages/api/qualitativetypes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/qualitativetypes.js\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Get data from your request\n        const data = req.body;\n        // Perform your data operations here, for example, call Django backend\n        const response = await fetch(\"http://127.0.0.1:8000/api/qualitative-types/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const responseData = await response.json();\n        if (!response.ok) {\n            // Handle error response\n            return res.status(response.status).json(responseData);\n        }\n        // Send a response\n        return res.status(200).json(responseData);\n    } else {\n        // Handle any other HTTP method\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVhbGl0YXRpdmV0eXBlcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0NBQWdDO0FBRWpCLGVBQWVBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6Qiw2QkFBNkI7UUFDN0IsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUVyQixzRUFBc0U7UUFDdEUsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGdEQUFnRDtZQUMzRUosUUFBUTtZQUNSSyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBSCxNQUFNSSxLQUFLQyxTQUFTLENBQUNOO1FBQ3ZCO1FBRUEsTUFBTU8sZUFBZSxNQUFNTCxTQUFTTSxJQUFJO1FBRXhDLElBQUksQ0FBQ04sU0FBU08sRUFBRSxFQUFFO1lBQ2hCLHdCQUF3QjtZQUN4QixPQUFPWCxJQUFJWSxNQUFNLENBQUNSLFNBQVNRLE1BQU0sRUFBRUYsSUFBSSxDQUFDRDtRQUMxQztRQUVBLGtCQUFrQjtRQUNsQixPQUFPVCxJQUFJWSxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDRDtJQUM5QixPQUFPO1FBQ0wsK0JBQStCO1FBQy9CVCxJQUFJYSxTQUFTLENBQUMsU0FBUztZQUFDO1NBQU87UUFDL0JiLElBQUlZLE1BQU0sQ0FBQyxLQUFLRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVmLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL3F1YWxpdGF0aXZldHlwZXMuanM/NWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvcXVhbGl0YXRpdmV0eXBlcy5qc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAvLyBHZXQgZGF0YSBmcm9tIHlvdXIgcmVxdWVzdFxyXG4gICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgXHJcbiAgICAgIC8vIFBlcmZvcm0geW91ciBkYXRhIG9wZXJhdGlvbnMgaGVyZSwgZm9yIGV4YW1wbGUsIGNhbGwgRGphbmdvIGJhY2tlbmRcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9xdWFsaXRhdGl2ZS10eXBlcy8nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yIHJlc3BvbnNlXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLy8gU2VuZCBhIHJlc3BvbnNlXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZURhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxyXG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJvayIsInN0YXR1cyIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/qualitativetypes.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/qualitativetypes.js"));
module.exports = __webpack_exports__;

})();