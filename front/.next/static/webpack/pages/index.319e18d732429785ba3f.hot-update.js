webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostRoutes.js":
/*!**********************************!*\
  !*** ./components/PostRoutes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\PostRoutes.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostRoutes = function PostRoutes(_ref) {
  _s();

  var schedules = _ref.schedules;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Segmented"], {
    size: "small",
    options: [{
      label: __jsx("div", {
        style: {
          padding: 1,
          fontSize: '10px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }
      }, "1\uC77C\uCC28"), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }
      }, "07/23 \uD1A0")),
      value: '1일차'
    }, {
      label: __jsx("div", {
        style: {
          padding: 1,
          fontSize: '10px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }, "2\uC77C\uCC28"), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }, "07/24 \uC77C")),
      value: '2일차'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"], {
    style: {
      margin: '20px 20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"].Item, {
    dot: __jsx("img", {
      style: {
        width: '40px',
        height: '35px'
      },
      src: "https://velog.velcdn.com/images/lwy210/post/3e661171-8b4b-421a-b6a6-2f4ec2fce0a8/image.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 27
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "\uC5D0\uBC84\uB79C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"].Item, {
    dot: __jsx("img", {
      style: {
        width: '30px',
        height: '32px'
      },
      src: "https://velog.velcdn.com/images/lwy210/post/3f1f6b25-172a-4431-b8b3-c248a2dd99ab/image.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 27
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "\uB86F\uB370\uC6D4\uB4DC")));
};

_s(PostRoutes, "xZ+WVc/D16Fmvriq1CwZMW/wLmE=");

_c = PostRoutes;
PostRoutes.propTypes = {
  numberOfTrip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  TripDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostRoutes);

var _c;

$RefreshReg$(_c, "PostRoutes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Um91dGVzLmpzIl0sIm5hbWVzIjpbIlBvc3RSb3V0ZXMiLCJzY2hlZHVsZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsIm9uQ2xvc2UiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInZhbHVlIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJudW1iZXJPZlRyaXAiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiVHJpcERhdGVzIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW1CO0VBQUE7O0VBQUEsSUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7RUFDbEMsZ0JBQTRDQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEQ7RUFBQSxJQUFPQyxjQUFQO0VBQUEsSUFBdUJDLGlCQUF2Qjs7RUFFQSxJQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUM3QkYsaUJBQWlCLENBQUMsSUFBRCxDQUFqQjtFQUNILENBRnlCLEVBRXZCLEVBRnVCLENBQTFCO0VBSUEsSUFBTUcsT0FBTyxHQUFHRCx5REFBVyxDQUFDLFlBQU07SUFDOUJGLGlCQUFpQixDQUFDLEtBQUQsQ0FBakI7RUFDSCxDQUYwQixFQUV4QixFQUZ3QixDQUEzQjtFQUlBLE9BQ0ksbUVBQ0EsTUFBQyw4Q0FBRDtJQUFXLElBQUksRUFBQyxPQUFoQjtJQUNGLE9BQU8sRUFBRSxDQUNQO01BQ0VJLEtBQUssRUFDSDtRQUFLLEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUUsQ0FBWDtVQUFjQyxRQUFRLEVBQUU7UUFBeEIsQ0FBWjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0U7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxtQkFERixFQUVFO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsa0JBRkYsQ0FGSjtNQU9FQyxLQUFLLEVBQUU7SUFQVCxDQURPLEVBVVA7TUFDRUgsS0FBSyxFQUNIO1FBQUssS0FBSyxFQUFFO1VBQUVDLE9BQU8sRUFBRSxDQUFYO1VBQWNDLFFBQVEsRUFBRTtRQUF4QixDQUFaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLG1CQURGLEVBRUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFGRixDQUZKO01BT0VDLEtBQUssRUFBRTtJQVBULENBVk8sQ0FEUDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREEsRUF1QkosTUFBQyw2Q0FBRDtJQUFVLEtBQUssRUFBRTtNQUFDQyxNQUFNLEVBQUU7SUFBVCxDQUFqQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyw2Q0FBRCxDQUFVLElBQVY7SUFBZSxHQUFHLEVBQUU7TUFBSyxLQUFLLEVBQUU7UUFBQ0MsS0FBSyxFQUFFLE1BQVI7UUFBZ0JDLE1BQU0sRUFBRTtNQUF4QixDQUFaO01BQTZDLEdBQUcsRUFBQyw0RkFBakQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFwQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQURGLEVBRUUsTUFBQyw2Q0FBRCxDQUFVLElBQVY7SUFBZSxHQUFHLEVBQUU7TUFBSyxLQUFLLEVBQUU7UUFBQ0QsS0FBSyxFQUFFLE1BQVI7UUFBZ0JDLE1BQU0sRUFBRTtNQUF4QixDQUFaO01BQTZDLEdBQUcsRUFBQyw0RkFBakQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFwQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUZGLENBdkJJLENBREo7QUE4QkgsQ0F6Q0Q7O0dBQU1kLFU7O0tBQUFBLFU7QUEyQ05BLFVBQVUsQ0FBQ2UsU0FBWCxHQUF1QjtFQUNuQkMsWUFBWSxFQUFFQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURaO0VBRW5CQyxTQUFTLEVBQUVILGlEQUFTLENBQUNJLE9BQVYsQ0FBa0JKLGlEQUFTLENBQUNLLE1BQTVCO0FBRlEsQ0FBdkI7QUFLZXRCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMxOWUxOGQ3MzI0Mjk3ODViYTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBTZWdtZW50ZWQsIFRpbWVsaW5lIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5cclxuY29uc3QgUG9zdFJvdXRlcyA9ICh7IHNjaGVkdWxlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8U2VnbWVudGVkIHNpemU9J3NtYWxsJ1xyXG4gICAgICBvcHRpb25zPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxLCBmb250U2l6ZTogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxkaXY+MeydvOywqDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+MDcvMjMg7YagPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIHZhbHVlOiAnMeydvOywqCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEsIGZvbnRTaXplOiAnMTBweCd9fT5cclxuICAgICAgICAgICAgICA8ZGl2PjLsnbzssKg8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjA3LzI0IOydvDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICB2YWx1ZTogJzLsnbzssKgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICAvPlxyXG4gICAgPFRpbWVsaW5lIHN0eWxlPXt7bWFyZ2luOiAnMjBweCAyMHB4J319PlxyXG4gICAgICA8VGltZWxpbmUuSXRlbSBkb3Q9ezxpbWcgc3R5bGU9e3t3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICczNXB4J319IHNyYz1cImh0dHBzOi8vdmVsb2cudmVsY2RuLmNvbS9pbWFnZXMvbHd5MjEwL3Bvc3QvM2U2NjExNzEtOGI0Yi00MjFhLWI2YTYtMmY0ZWMyZmNlMGE4L2ltYWdlLnBuZ1wiLz59PuyXkOuyhOuenOuTnDwvVGltZWxpbmUuSXRlbT5cclxuICAgICAgPFRpbWVsaW5lLkl0ZW0gZG90PXs8aW1nIHN0eWxlPXt7d2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzJweCd9fSBzcmM9XCJodHRwczovL3ZlbG9nLnZlbGNkbi5jb20vaW1hZ2VzL2x3eTIxMC9wb3N0LzNmMWY2YjI1LTE3MmEtNDQzMS1iOGIzLWMyNDhhMmRkOTlhYi9pbWFnZS5wbmdcIi8+fT7roa/rjbDsm5Trk5w8L1RpbWVsaW5lLkl0ZW0+XHJcbiAgICA8L1RpbWVsaW5lPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuUG9zdFJvdXRlcy5wcm9wVHlwZXMgPSB7XHJcbiAgICBudW1iZXJPZlRyaXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIFRyaXBEYXRlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RSb3V0ZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==