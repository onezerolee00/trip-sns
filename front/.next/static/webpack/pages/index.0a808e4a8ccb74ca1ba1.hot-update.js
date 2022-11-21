webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SpotInfo.js":
/*!********************************!*\
  !*** ./components/SpotInfo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\leeoo\\Desktop\\trip-sns\\front\\components\\SpotInfo.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SpotInfo(_ref) {
  _s();

  var _this = this;

  var _ref$info = _ref.info,
      info = _ref$info === void 0 ? {
    spotName: "N/A",
    spotAddress: "N/A"
  } : _ref$info;
  var data = [];
  var cnt = 1;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("SpotInfo component created");
    data.push({
      order: cnt,
      name: info.spotName,
      address: info.spotAddress
    });
    cnt += 1;
    console.log(data);
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      padding: '20px'
    },
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          size: "small",
          shape: "square",
          style: {
            backgroundColor: '#87d068'
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 19
          }
        }, item.order),
        title: item.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }) // <div style={{
  //     border: '1px solid black',
  //     padding: '8px',
  //     margin: '8px'
  // }}>
  //     <div><b>{info.spotName}</b></div>
  //     <div>{info.spotAddress}</div>
  // </div>
  ;
}

_s(SpotInfo, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = SpotInfo;
/* harmony default export */ __webpack_exports__["default"] = (SpotInfo);

var _c;

$RefreshReg$(_c, "SpotInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG90SW5mby5qcyJdLCJuYW1lcyI6WyJTcG90SW5mbyIsImluZm8iLCJzcG90TmFtZSIsInNwb3RBZGRyZXNzIiwiZGF0YSIsImNudCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwib3JkZXIiLCJuYW1lIiwiYWRkcmVzcyIsInBhZGRpbmciLCJpdGVtIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxTQUFTQSxRQUFULE9BQXFFO0VBQUE7O0VBQUE7O0VBQUEscUJBQWpEQyxJQUFpRDtFQUFBLElBQWpEQSxJQUFpRCwwQkFBMUM7SUFBQ0MsUUFBUSxFQUFFLEtBQVg7SUFBa0JDLFdBQVcsRUFBRTtFQUEvQixDQUEwQztFQUVqRSxJQUFJQyxJQUFJLEdBQUcsRUFBWDtFQUNBLElBQUlDLEdBQUcsR0FBRyxDQUFWO0VBRUFDLHVEQUFTLENBQUMsWUFBTTtJQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtJQUNBSixJQUFJLENBQUNLLElBQUwsQ0FBVTtNQUFDQyxLQUFLLEVBQUVMLEdBQVI7TUFBYU0sSUFBSSxFQUFFVixJQUFJLENBQUNDLFFBQXhCO01BQWtDVSxPQUFPLEVBQUVYLElBQUksQ0FBQ0U7SUFBaEQsQ0FBVjtJQUNBRSxHQUFHLElBQUksQ0FBUDtJQUNBRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtFQUNILENBTFEsRUFLTixFQUxNLENBQVQ7RUFPQSxPQUNJLE1BQUMseUNBQUQ7SUFDSixLQUFLLEVBQUU7TUFBQ1MsT0FBTyxFQUFFO0lBQVYsQ0FESDtJQUVKLFVBQVUsRUFBQyxZQUZQO0lBR0osVUFBVSxFQUFFVCxJQUhSO0lBSUosVUFBVSxFQUFFLG9CQUFDVSxJQUFEO01BQUEsT0FDVixNQUFDLHlDQUFELENBQU0sSUFBTjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO1FBQ0UsTUFBTSxFQUFFLE1BQUMsMkNBQUQ7VUFBUSxJQUFJLEVBQUMsT0FBYjtVQUFxQixLQUFLLEVBQUMsUUFBM0I7VUFBb0MsS0FBSyxFQUFFO1lBQUVDLGVBQWUsRUFBRTtVQUFuQixDQUEzQztVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLEdBQTRFRCxJQUFJLENBQUNKLEtBQWpGLENBRFY7UUFFRSxLQUFLLEVBQUVJLElBQUksQ0FBQ0gsSUFGZDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREYsQ0FEVTtJQUFBLENBSlI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURKLENBY0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQXJCSjtBQXVCSDs7R0FuQ1FYLFE7O0tBQUFBLFE7QUFxQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBhODA4ZTRhOGNjYjc0Y2ExYmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgU2VnbWVudGVkLCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gU3BvdEluZm8oeyBpbmZvID0ge3Nwb3ROYW1lOiBcIk4vQVwiLCBzcG90QWRkcmVzczogXCJOL0FcIiB9IH0pIHtcclxuXHJcbiAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgdmFyIGNudCA9IDE7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNwb3RJbmZvIGNvbXBvbmVudCBjcmVhdGVkXCIpO1xyXG4gICAgICAgIGRhdGEucHVzaCh7b3JkZXI6IGNudCwgbmFtZTogaW5mby5zcG90TmFtZSwgYWRkcmVzczogaW5mby5zcG90QWRkcmVzc30pO1xyXG4gICAgICAgIGNudCArPSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdFxyXG4gICAgc3R5bGU9e3twYWRkaW5nOiAnMjBweCd9fVxyXG4gICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc2l6ZT1cInNtYWxsXCIgc2hhcGU9XCJzcXVhcmVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjODdkMDY4JyB9fT57aXRlbS5vcmRlcn08L0F2YXRhcj59XHJcbiAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgKX1cclxuICAvPlxyXG4gICAgICAgIC8vIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAvLyAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcclxuICAgICAgICAvLyAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgICAgLy8gICAgIG1hcmdpbjogJzhweCdcclxuICAgICAgICAvLyB9fT5cclxuICAgICAgICAvLyAgICAgPGRpdj48Yj57aW5mby5zcG90TmFtZX08L2I+PC9kaXY+XHJcbiAgICAgICAgLy8gICAgIDxkaXY+e2luZm8uc3BvdEFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcG90SW5mbyJdLCJzb3VyY2VSb290IjoiIn0=