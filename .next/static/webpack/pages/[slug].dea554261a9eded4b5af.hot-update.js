webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/yiorgosbagakis/Documents/School/Next/next-bagaski-blog/pages/[slug].js\",\n    _this = undefined;\n\n\n\n\n\nvar Post = function Post(_ref) {\n  var htmlString = _ref.htmlString,\n      data = _ref.data;\n  var styled = {\n    margin: '20px',\n    fontSize: '48px',\n    width: '50vw'\n  };\n  var linked = {\n    backgroundColor: 'red',\n    padding: '10px',\n    textDecoration: 'none',\n    color: 'white'\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: styled,\n      dangerouslySetInnerHTML: {\n        __html: htmlString\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        style: linked,\n        children: \"\\u2190 Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n}; //Nextjs static site generation function I for the paths\n\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLmpzPzQ2MmIiXSwibmFtZXMiOlsiUG9zdCIsImh0bWxTdHJpbmciLCJkYXRhIiwic3R5bGVkIiwibWFyZ2luIiwiZm9udFNpemUiLCJ3aWR0aCIsImxpbmtlZCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwidGl0bGUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBd0I7QUFBQSxNQUF0QkMsVUFBc0IsUUFBdEJBLFVBQXNCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBRW5DLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxVQUFNLEVBQUUsTUFESztBQUViQyxZQUFRLEVBQUUsTUFGRztBQUdiQyxTQUFLLEVBQUU7QUFITSxHQUFmO0FBTUYsTUFBTUMsTUFBTSxHQUFHO0FBQ2JDLG1CQUFlLEVBQUUsS0FESjtBQUViQyxXQUFPLEVBQUUsTUFGSTtBQUdiQyxrQkFBYyxFQUFFLE1BSEg7QUFJYkMsU0FBSyxFQUFFO0FBSk0sR0FBZjtBQU9FLHNCQUVFO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw2QkFBTTtBQUFBLGtCQUFRVCxJQUFJLENBQUNVO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBO0FBQUssV0FBSyxFQUFFVCxNQUFaO0FBQW9CLDZCQUF1QixFQUFFO0FBQUNVLGNBQU0sRUFBRVo7QUFBVDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsZUFHQSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0k7QUFBRyxhQUFLLEVBQUVNLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEE7QUFBQSxrQkFGRjtBQWFELENBNUJELEMsQ0E4QkE7OztLQTlCTVAsSTs7QUFrRVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgUG9zdCA9ICh7aHRtbFN0cmluZywgZGF0YX0pID0+IHtcblxuICBjb25zdCBzdHlsZWQgPSB7XG4gICAgbWFyZ2luOiAnMjBweCcsXG4gICAgZm9udFNpemU6ICc0OHB4JyxcbiAgICB3aWR0aDogJzUwdncnXG4gIH1cblxuY29uc3QgbGlua2VkID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGNvbG9yOiAnd2hpdGUnXG59XG5cbiAgcmV0dXJuIChcblxuICAgIDw+XG4gICAgPEhlYWQ+PHRpdGxlPntkYXRhLnRpdGxlfTwvdGl0bGU+PC9IZWFkPlxuICAgIDxkaXYgc3R5bGU9e3N0eWxlZH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGh0bWxTdHJpbmd9fSAvPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rZWR9ID5cbiAgICDihpAgQmFja1xuICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgPC8+XG4gIClcblxufTtcblxuLy9OZXh0anMgc3RhdGljIHNpdGUgZ2VuZXJhdGlvbiBmdW5jdGlvbiBJIGZvciB0aGUgcGF0aHNcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcblxuLy9DcmVhdGUgYSBwYXRoIHBlciBwb3N0IHdpdGggZnMuIGl0IHJlYWRzIHRoZSBmaWxlcyBpbiBwb3N0cyBmb2xkZXJcbi8vUmV0dXJucyBhcnJheSB0aGF0IGkgd2lsbCBwdXQgaW4gcGF0aHMgdW5kZXJuZWF0aC4uLlxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCdjb250ZW50JylcblxuICAgIHJldHVybiB7XG4gICAgICAvL3BhdGhzIGdldHMgYXJyYXkgZnJvbSBjb25zdCBmaWxlcy4uLmFuZCByZXR1cm5zIGFuIG9iamVjdC4uLlxuICAgICAgcGF0aHM6IGZpbGVzLm1hcChmaWxlbmFtZSA9PiAoe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKCcubWQnLCAnJylcbiAgICAgICAgfVxuICAgICAgfSkpLFxuICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxuXG59XG5cbi8vTmV4dGpzIGZ1bmN0aW9uIElJIGZvciB0aGUgY29udGVudFxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHNsdWcgfX0pID0+IHtcblxuICBjb25zdCBtYXJrZG93bldpdGhNZXRhZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oJ2NvbnRlbnQnLCBzbHVnICsgXCIubWRcIikpLnRvU3RyaW5nKCk7XG5cbiAgY29uc3QgcGFyc2VkTWFya2Rvd24gPSBtYXR0ZXIobWFya2Rvd25XaXRoTWV0YWRhdGEpXG4gIGNvbnN0IGh0bWxTdHJpbmcgPSBtYXJrZWQocGFyc2VkTWFya2Rvd24uY29udGVudCkgLy9tZCB0byBodG1sIHdpdGggbWFya2VkXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaHRtbFN0cmluZyxcbiAgICAgIGRhdGE6IHBhcnNlZE1hcmtkb3duLmRhdGFcbiAgICB9XG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ })

})