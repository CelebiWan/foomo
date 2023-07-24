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
exports.id = "pages/api/recipemetadata";
exports.ids = ["pages/api/recipemetadata"];
exports.modules = {

/***/ "(api)/./pages/api/recipemetadata.js":
/*!*************************************!*\
  !*** ./pages/api/recipemetadata.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Get data from your request\n        const data = req.body;\n        try {\n            const response = await fetch(\"http://127.0.0.1:8000/api/recipe-metadata/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            const responseData = await response.json();\n            if (!response.ok) {\n                // Handle error response\n                return res.status(response.status).json(responseData);\n            }\n            // Send a response\n            return res.status(201).json(responseData);\n        } catch (error) {\n            // Handle error during the request\n            return res.status(500).json({\n                error: \"An unexpected error occurred\"\n            });\n        }\n    } else if (req.method === \"GET\") {\n        const [recipesResponse, functionalityResponse, ingredientResponse, formulaResponse] = await Promise.all([\n            fetch(\"http://127.0.0.1:8000/api/recipes/\"),\n            fetch(\"http://127.0.0.1:8000/api/functionalities/\"),\n            fetch(\"http://127.0.0.1:8000/api/ingredients/\"),\n            fetch(\"http://127.0.0.1:8000/api/formulas/\")\n        ]);\n        const [recipesData, functionalityData, ingredientData, formulaData] = await Promise.all([\n            recipesResponse.json(),\n            functionalityResponse.json(),\n            ingredientResponse.json(),\n            formulaResponse.json()\n        ]);\n        if (!recipesResponse.ok || !functionalityResponse.ok || !ingredientResponse.ok || !formulaResponse.ok) {\n            // Handle error response\n            return res.status(recipesResponse.status || functionalityResponse.status || ingredientResponse.status || formulaResponse.status).json({\n                error: \"Failed to fetch data\"\n            });\n        }\n        // Send a response\n        return res.status(200).json({\n            recipes: recipesData,\n            functionalities: functionalityData,\n            ingredientComponents: ingredientData,\n            formulaComponents: formulaData\n        });\n    } else {\n        // Handle any other HTTP method\n        res.setHeader(\"Allow\", [\n            \"POST\",\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjaXBlbWV0YWRhdGEuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6Qiw2QkFBNkI7UUFDN0IsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUVyQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDhDQUE4QztnQkFDekVKLFFBQVE7Z0JBQ1JLLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUgsTUFBTUksS0FBS0MsU0FBUyxDQUFDTjtZQUN2QjtZQUVBLE1BQU1PLGVBQWUsTUFBTUwsU0FBU00sSUFBSTtZQUV4QyxJQUFJLENBQUNOLFNBQVNPLEVBQUUsRUFBRTtnQkFDaEIsd0JBQXdCO2dCQUN4QixPQUFPWCxJQUFJWSxNQUFNLENBQUNSLFNBQVNRLE1BQU0sRUFBRUYsSUFBSSxDQUFDRDtZQUMxQztZQUVBLGtCQUFrQjtZQUNsQixPQUFPVCxJQUFJWSxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDRDtRQUM5QixFQUFFLE9BQU9JLE9BQU87WUFDZCxrQ0FBa0M7WUFDbEMsT0FBT2IsSUFBSVksTUFBTSxDQUFDLEtBQUtGLElBQUksQ0FBQztnQkFBRUcsT0FBTztZQUErQjtRQUN0RTtJQUNGLE9BQU8sSUFBSWQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDL0IsTUFBTSxDQUFDYSxpQkFBaUJDLHVCQUF1QkMsb0JBQW9CQyxnQkFBZ0IsR0FBRyxNQUFNQyxRQUFRQyxHQUFHLENBQUM7WUFDdEdkLE1BQU07WUFDTkEsTUFBTTtZQUNOQSxNQUFNO1lBQ05BLE1BQU07U0FDUDtRQUVELE1BQU0sQ0FBQ2UsYUFBYUMsbUJBQW1CQyxnQkFBZ0JDLFlBQVksR0FBRyxNQUFNTCxRQUFRQyxHQUFHLENBQUM7WUFDdEZMLGdCQUFnQkosSUFBSTtZQUNwQkssc0JBQXNCTCxJQUFJO1lBQzFCTSxtQkFBbUJOLElBQUk7WUFDdkJPLGdCQUFnQlAsSUFBSTtTQUNyQjtRQUVELElBQUksQ0FBQ0ksZ0JBQWdCSCxFQUFFLElBQUksQ0FBQ0ksc0JBQXNCSixFQUFFLElBQUcsQ0FBQ0ssbUJBQW1CTCxFQUFFLElBQUksQ0FBQ00sZ0JBQWdCTixFQUFFLEVBQUU7WUFDcEcsd0JBQXdCO1lBQ3hCLE9BQU9YLElBQ0pZLE1BQU0sQ0FBQ0UsZ0JBQWdCRixNQUFNLElBQUlHLHNCQUFzQkgsTUFBTSxJQUFJSSxtQkFBbUJKLE1BQU0sSUFBSUssZ0JBQWdCTCxNQUFNLEVBQ3BIRixJQUFJLENBQUM7Z0JBQ0pHLE9BQU87WUFDVDtRQUNKO1FBR0Esa0JBQWtCO1FBQ2xCLE9BQU9iLElBQUlZLE1BQU0sQ0FBQyxLQUFLRixJQUFJLENBQUM7WUFDMUJjLFNBQVNKO1lBQ1RLLGlCQUFpQko7WUFDakJLLHNCQUFzQko7WUFDdEJLLG1CQUFtQko7UUFDckI7SUFDRixPQUFPO1FBQ0wsK0JBQStCO1FBQy9CdkIsSUFBSTRCLFNBQVMsQ0FBQyxTQUFTO1lBQUM7WUFBUTtTQUFNO1FBQ3RDNUIsSUFBSVksTUFBTSxDQUFDLEtBQUtpQixHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUU5QixJQUFJRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9yZWNpcGVtZXRhZGF0YS5qcz8xY2Q2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgLy8gR2V0IGRhdGEgZnJvbSB5b3VyIHJlcXVlc3RcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcmVjaXBlLW1ldGFkYXRhLycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3IgcmVzcG9uc2VcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKHJlc3BvbnNlLnN0YXR1cykuanNvbihyZXNwb25zZURhdGEpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAvLyBTZW5kIGEgcmVzcG9uc2VcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocmVzcG9uc2VEYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3IgZHVyaW5nIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICBjb25zdCBbcmVjaXBlc1Jlc3BvbnNlLCBmdW5jdGlvbmFsaXR5UmVzcG9uc2UsIGluZ3JlZGllbnRSZXNwb25zZSwgZm9ybXVsYVJlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9yZWNpcGVzLycpLFxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2Z1bmN0aW9uYWxpdGllcy8nKSwgICAgIFxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2luZ3JlZGllbnRzLycpLFxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2Zvcm11bGFzLycpLFxyXG4gICAgICBdKTtcclxuICBcclxuICAgICAgY29uc3QgW3JlY2lwZXNEYXRhLCBmdW5jdGlvbmFsaXR5RGF0YSwgaW5ncmVkaWVudERhdGEsIGZvcm11bGFEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICByZWNpcGVzUmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIGZ1bmN0aW9uYWxpdHlSZXNwb25zZS5qc29uKCksXHJcbiAgICAgICAgaW5ncmVkaWVudFJlc3BvbnNlLmpzb24oKSxcclxuICAgICAgICBmb3JtdWxhUmVzcG9uc2UuanNvbigpLFxyXG4gICAgICBdKTtcclxuICBcclxuICAgICAgaWYgKCFyZWNpcGVzUmVzcG9uc2Uub2sgfHwgIWZ1bmN0aW9uYWxpdHlSZXNwb25zZS5vayB8fCFpbmdyZWRpZW50UmVzcG9uc2Uub2sgfHwgIWZvcm11bGFSZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvciByZXNwb25zZVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgIC5zdGF0dXMocmVjaXBlc1Jlc3BvbnNlLnN0YXR1cyB8fCBmdW5jdGlvbmFsaXR5UmVzcG9uc2Uuc3RhdHVzIHx8IGluZ3JlZGllbnRSZXNwb25zZS5zdGF0dXMgfHwgZm9ybXVsYVJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgICAgIC5qc29uKHtcclxuICAgICAgICAgICAgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggZGF0YScsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICBcclxuICAgICAgLy8gU2VuZCBhIHJlc3BvbnNlXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgcmVjaXBlczogcmVjaXBlc0RhdGEsXHJcbiAgICAgICAgZnVuY3Rpb25hbGl0aWVzOiBmdW5jdGlvbmFsaXR5RGF0YSxcclxuICAgICAgICBpbmdyZWRpZW50Q29tcG9uZW50czogaW5ncmVkaWVudERhdGEsXHJcbiAgICAgICAgZm9ybXVsYUNvbXBvbmVudHM6IGZvcm11bGFEYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcclxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnLCAnR0VUJ10pO1xyXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2VEYXRhIiwianNvbiIsIm9rIiwic3RhdHVzIiwiZXJyb3IiLCJyZWNpcGVzUmVzcG9uc2UiLCJmdW5jdGlvbmFsaXR5UmVzcG9uc2UiLCJpbmdyZWRpZW50UmVzcG9uc2UiLCJmb3JtdWxhUmVzcG9uc2UiLCJQcm9taXNlIiwiYWxsIiwicmVjaXBlc0RhdGEiLCJmdW5jdGlvbmFsaXR5RGF0YSIsImluZ3JlZGllbnREYXRhIiwiZm9ybXVsYURhdGEiLCJyZWNpcGVzIiwiZnVuY3Rpb25hbGl0aWVzIiwiaW5ncmVkaWVudENvbXBvbmVudHMiLCJmb3JtdWxhQ29tcG9uZW50cyIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/recipemetadata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/recipemetadata.js"));
module.exports = __webpack_exports__;

})();