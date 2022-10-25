webpackHotUpdate_N_E("pages/myposts",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _FollowButtonInList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FollowButtonInList */ "./components/FollowButtonInList.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\PostList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PostList = function PostList(_ref) {
  var myPosts = _ref.myPosts,
      totalPosts = _ref.totalPosts;
  var myPostsId = myPosts.find(function (v) {
    return v.id === totalPosts.id;
  });
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Image"].PreviewGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, totalPosts.map(function (v) {
    __jsx("img", {
      src: v.Images[0].src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    });
  }));
};

_c = PostList;
PostList.propTypes = {
  myPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  totalPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostList);

var _c;

$RefreshReg$(_c, "PostList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdCIsIm15UG9zdHMiLCJ0b3RhbFBvc3RzIiwibXlQb3N0c0lkIiwiZmluZCIsInYiLCJpZCIsIm1hcCIsIkltYWdlcyIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMkI7RUFBQSxJQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0VBQUEsSUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtFQUN4QyxJQUFNQyxTQUFTLEdBQUdGLE9BQU8sQ0FBQ0csSUFBUixDQUFhLFVBQUNDLENBQUQ7SUFBQSxPQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU0osVUFBVSxDQUFDSSxFQUEzQjtFQUFBLENBQWIsQ0FBbEI7RUFFQSxPQUNJLE1BQUMsMENBQUQsQ0FBTyxZQUFQO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDS0osVUFBVSxDQUFDSyxHQUFYLENBQWUsVUFBQ0YsQ0FBRCxFQUFNO0lBQ2xCO01BQUssR0FBRyxFQUFFQSxDQUFDLENBQUNHLE1BQUYsQ0FBUyxDQUFULEVBQVlDLEdBQXRCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7RUFDSCxDQUZBLENBREwsQ0FESjtBQVFILENBWEQ7O0tBQU1ULFE7QUFhTkEsUUFBUSxDQUFDVSxTQUFULEdBQXFCO0VBQ2pCVCxPQUFPLEVBQUVVLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLFVBRFI7RUFFakJYLFVBQVUsRUFBRVMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQkM7QUFGWCxDQUFyQjtBQUtlYix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teXBvc3RzLjYwMzY0ZjMwMTZiNDhiYWU4OTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIEF2YXRhciwgSW1hZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbkluTGlzdCBmcm9tICcuL0ZvbGxvd0J1dHRvbkluTGlzdCc7XHJcblxyXG5cclxuY29uc3QgUG9zdExpc3QgPSAoe215UG9zdHMsIHRvdGFsUG9zdHN9KSA9PiB7XHJcbiAgICBjb25zdCBteVBvc3RzSWQgPSBteVBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IHRvdGFsUG9zdHMuaWQpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW1hZ2UuUHJldmlld0dyb3VwPlxyXG4gICAgICAgICAgICB7dG90YWxQb3N0cy5tYXAoKHYpPT4ge1xyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3YuSW1hZ2VzWzBdLnNyY30gLz5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHsvKiA8SW1hZ2Ugd2lkdGg9ezE1MH0gaGVpZ2h0PXsxNTB9IHNyYz17dG90YWxQb3N0c1swXS5JbWFnZXNbMF0uc3JjfSAvPiAqL31cclxuICAgICAgICA8L0ltYWdlLlByZXZpZXdHcm91cD5cclxuICAgIClcclxufTtcclxuXHJcblBvc3RMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIG15UG9zdHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgdG90YWxQb3N0czogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9