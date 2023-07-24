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
exports.id = "pages/api/quantitativeresults";
exports.ids = ["pages/api/quantitativeresults"];
exports.modules = {

/***/ "(api)/./pages/api/quantitativeresults.js":
/*!******************************************!*\
  !*** ./pages/api/quantitativeresults.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Get data from your request\n        const data = req.body;\n        // Perform your data operations here, for example, call Django backend\n        const response = await fetch(\"http://127.0.0.1:8000/api/quantitative-results/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const responseData = await response.json();\n        if (!response.ok) {\n            // Handle error response\n            return res.status(response.status).json(responseData);\n        }\n    } else if (req.method === \"GET\") {\n        const experimentsResponse = await fetch(\"http://127.0.0.1:8000/api/experiments/\");\n        const propertyTypesResponse = await fetch(\"http://127.0.0.1:8000/api/property-types/\");\n        const experimentData = await experimentsResponse.json();\n        const propertyTypeData = await propertyTypesResponse.json();\n        if (!experimentsResponse.ok || !propertyTypesResponse.ok) {\n            // Handle error response\n            return res.status(experimentsResponse.status || propertyTypesResponse.status).json({\n                experiments: experimentData,\n                propertyTypes: propertyTypeData\n            });\n        }\n        // Send a response\n        return res.status(200).json({\n            experiments: experimentData,\n            propertyTypes: propertyTypeData\n        });\n    } else {\n        // Handle any other HTTP method\n        res.setHeader(\"Allow\", [\n            \"POST\",\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVhbnRpdGF0aXZlcmVzdWx0cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLDZCQUE2QjtRQUM3QixNQUFNQyxPQUFPSCxJQUFJSSxJQUFJO1FBRXJCLHNFQUFzRTtRQUN0RSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbURBQW1EO1lBQzlFSixRQUFRO1lBQ1JLLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FILE1BQU1JLEtBQUtDLFNBQVMsQ0FBQ047UUFDdkI7UUFFQSxNQUFNTyxlQUFlLE1BQU1MLFNBQVNNLElBQUk7UUFFeEMsSUFBSSxDQUFDTixTQUFTTyxFQUFFLEVBQUU7WUFDaEIsd0JBQXdCO1lBQ3hCLE9BQU9YLElBQUlZLE1BQU0sQ0FBQ1IsU0FBU1EsTUFBTSxFQUFFRixJQUFJLENBQUNEO1FBQzFDO0lBQ0YsT0FBTyxJQUFJVixJQUFJRSxNQUFNLEtBQUssT0FBTztRQUMvQixNQUFNWSxzQkFBc0IsTUFBTVIsTUFBTTtRQUN4QyxNQUFNUyx3QkFBd0IsTUFBTVQsTUFBTTtRQUUxQyxNQUFNVSxpQkFBaUIsTUFBTUYsb0JBQW9CSCxJQUFJO1FBQ3JELE1BQU1NLG1CQUFtQixNQUFNRixzQkFBc0JKLElBQUk7UUFFekQsSUFBSSxDQUFDRyxvQkFBb0JGLEVBQUUsSUFBSSxDQUFDRyxzQkFBc0JILEVBQUUsRUFBRTtZQUN4RCx3QkFBd0I7WUFDeEIsT0FBT1gsSUFBSVksTUFBTSxDQUFDQyxvQkFBb0JELE1BQU0sSUFBSUUsc0JBQXNCRixNQUFNLEVBQUVGLElBQUksQ0FBQztnQkFDakZPLGFBQWFGO2dCQUNiRyxlQUFlRjtZQUNqQjtRQUNGO1FBRUEsa0JBQWtCO1FBQ2xCLE9BQU9oQixJQUFJWSxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDO1lBQzFCTyxhQUFhRjtZQUNiRyxlQUFlRjtRQUNqQjtJQUNGLE9BQU87UUFDTCwrQkFBK0I7UUFDL0JoQixJQUFJbUIsU0FBUyxDQUFDLFNBQVM7WUFBQztZQUFRO1NBQU07UUFDdENuQixJQUFJWSxNQUFNLENBQUMsS0FBS1EsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFckIsSUFBSUUsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvcXVhbnRpdGF0aXZlcmVzdWx0cy5qcz8wNWE2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgLy8gR2V0IGRhdGEgZnJvbSB5b3VyIHJlcXVlc3RcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gIFxyXG4gICAgICAvLyBQZXJmb3JtIHlvdXIgZGF0YSBvcGVyYXRpb25zIGhlcmUsIGZvciBleGFtcGxlLCBjYWxsIERqYW5nbyBiYWNrZW5kXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcXVhbnRpdGF0aXZlLXJlc3VsdHMvJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvciByZXNwb25zZVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbihyZXNwb25zZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgIGNvbnN0IGV4cGVyaW1lbnRzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9leHBlcmltZW50cy8nKTtcclxuICAgICAgY29uc3QgcHJvcGVydHlUeXBlc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHJvcGVydHktdHlwZXMvJyk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGV4cGVyaW1lbnREYXRhID0gYXdhaXQgZXhwZXJpbWVudHNSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZURhdGEgPSBhd2FpdCBwcm9wZXJ0eVR5cGVzUmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgICBpZiAoIWV4cGVyaW1lbnRzUmVzcG9uc2Uub2sgfHwgIXByb3BlcnR5VHlwZXNSZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvciByZXNwb25zZVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGV4cGVyaW1lbnRzUmVzcG9uc2Uuc3RhdHVzIHx8IHByb3BlcnR5VHlwZXNSZXNwb25zZS5zdGF0dXMpLmpzb24oe1xyXG4gICAgICAgICAgZXhwZXJpbWVudHM6IGV4cGVyaW1lbnREYXRhLFxyXG4gICAgICAgICAgcHJvcGVydHlUeXBlczogcHJvcGVydHlUeXBlRGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBTZW5kIGEgcmVzcG9uc2VcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBleHBlcmltZW50czogZXhwZXJpbWVudERhdGEsXHJcbiAgICAgICAgcHJvcGVydHlUeXBlczogcHJvcGVydHlUeXBlRGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJywgJ0dFVCddKTtcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJvayIsInN0YXR1cyIsImV4cGVyaW1lbnRzUmVzcG9uc2UiLCJwcm9wZXJ0eVR5cGVzUmVzcG9uc2UiLCJleHBlcmltZW50RGF0YSIsInByb3BlcnR5VHlwZURhdGEiLCJleHBlcmltZW50cyIsInByb3BlcnR5VHlwZXMiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/quantitativeresults.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/quantitativeresults.js"));
module.exports = __webpack_exports__;

})();