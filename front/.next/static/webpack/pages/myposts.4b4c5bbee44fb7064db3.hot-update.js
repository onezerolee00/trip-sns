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
      src: v.Image[0].src,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdCIsIm15UG9zdHMiLCJ0b3RhbFBvc3RzIiwibXlQb3N0c0lkIiwiZmluZCIsInYiLCJpZCIsIm1hcCIsIkltYWdlIiwic3JjIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUEyQjtFQUFBLElBQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7RUFBQSxJQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0VBQ3hDLElBQU1DLFNBQVMsR0FBR0YsT0FBTyxDQUFDRyxJQUFSLENBQWEsVUFBQ0MsQ0FBRDtJQUFBLE9BQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTSixVQUFVLENBQUNJLEVBQTNCO0VBQUEsQ0FBYixDQUFsQjtFQUVBLE9BQ0ksTUFBQywwQ0FBRCxDQUFPLFlBQVA7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNLSixVQUFVLENBQUNLLEdBQVgsQ0FBZSxVQUFDRixDQUFELEVBQU07SUFDbEI7TUFBSyxHQUFHLEVBQUVBLENBQUMsQ0FBQ0csS0FBRixDQUFRLENBQVIsRUFBV0MsR0FBckI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtFQUNILENBRkEsQ0FETCxDQURKO0FBUUgsQ0FYRDs7S0FBTVQsUTtBQWFOQSxRQUFRLENBQUNVLFNBQVQsR0FBcUI7RUFDakJULE9BQU8sRUFBRVUsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsVUFEUjtFQUVqQlgsVUFBVSxFQUFFUyxpREFBUyxDQUFDQyxLQUFWLENBQWdCQztBQUZYLENBQXJCO0FBS2ViLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215cG9zdHMuNGI0YzViYmVlNDRmYjcwNjRkYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgQXZhdGFyLCBJbWFnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uSW5MaXN0IGZyb20gJy4vRm9sbG93QnV0dG9uSW5MaXN0JztcclxuXHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICh7bXlQb3N0cywgdG90YWxQb3N0c30pID0+IHtcclxuICAgIGNvbnN0IG15UG9zdHNJZCA9IG15UG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gdG90YWxQb3N0cy5pZClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJbWFnZS5QcmV2aWV3R3JvdXA+XHJcbiAgICAgICAgICAgIHt0b3RhbFBvc3RzLm1hcCgodik9PiB7XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5JbWFnZVswXS5zcmN9IC8+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7LyogPEltYWdlIHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSBzcmM9e3RvdGFsUG9zdHNbMF0uSW1hZ2VzWzBdLnNyY30gLz4gKi99XHJcbiAgICAgICAgPC9JbWFnZS5QcmV2aWV3R3JvdXA+XHJcbiAgICApXHJcbn07XHJcblxyXG5Qb3N0TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBteVBvc3RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIHRvdGFsUG9zdHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==