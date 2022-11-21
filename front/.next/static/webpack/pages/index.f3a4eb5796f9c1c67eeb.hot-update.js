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
  return __jsx(List, {
    style: {
      padding: '20px'
    },
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(List.Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, __jsx(List.Item.Meta, {
        avatar: __jsx(Avatar, {
          size: "small",
          shape: "square",
          style: {
            backgroundColor: '#87d068'
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 19
          }
        }, item.order),
        title: item.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG90SW5mby5qcyJdLCJuYW1lcyI6WyJTcG90SW5mbyIsImluZm8iLCJzcG90TmFtZSIsInNwb3RBZGRyZXNzIiwiZGF0YSIsImNudCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwib3JkZXIiLCJuYW1lIiwiYWRkcmVzcyIsInBhZGRpbmciLCJpdGVtIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQSxTQUFTQSxRQUFULE9BQXFFO0VBQUE7O0VBQUE7O0VBQUEscUJBQWpEQyxJQUFpRDtFQUFBLElBQWpEQSxJQUFpRCwwQkFBMUM7SUFBQ0MsUUFBUSxFQUFFLEtBQVg7SUFBa0JDLFdBQVcsRUFBRTtFQUEvQixDQUEwQztFQUVqRSxJQUFJQyxJQUFJLEdBQUcsRUFBWDtFQUNBLElBQUlDLEdBQUcsR0FBRyxDQUFWO0VBRUFDLHVEQUFTLENBQUMsWUFBTTtJQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtJQUNBSixJQUFJLENBQUNLLElBQUwsQ0FBVTtNQUFDQyxLQUFLLEVBQUVMLEdBQVI7TUFBYU0sSUFBSSxFQUFFVixJQUFJLENBQUNDLFFBQXhCO01BQWtDVSxPQUFPLEVBQUVYLElBQUksQ0FBQ0U7SUFBaEQsQ0FBVjtJQUNBRSxHQUFHLElBQUksQ0FBUDtJQUNBRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtFQUNILENBTFEsRUFLTixFQUxNLENBQVQ7RUFPQSxPQUNJLE1BQUMsSUFBRDtJQUNKLEtBQUssRUFBRTtNQUFDUyxPQUFPLEVBQUU7SUFBVixDQURIO0lBRUosVUFBVSxFQUFDLFlBRlA7SUFHSixVQUFVLEVBQUVULElBSFI7SUFJSixVQUFVLEVBQUUsb0JBQUNVLElBQUQ7TUFBQSxPQUNWLE1BQUMsSUFBRCxDQUFNLElBQU47UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFLE1BQUMsSUFBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO1FBQ0UsTUFBTSxFQUFFLE1BQUMsTUFBRDtVQUFRLElBQUksRUFBQyxPQUFiO1VBQXFCLEtBQUssRUFBQyxRQUEzQjtVQUFvQyxLQUFLLEVBQUU7WUFBRUMsZUFBZSxFQUFFO1VBQW5CLENBQTNDO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FBNEVELElBQUksQ0FBQ0osS0FBakYsQ0FEVjtRQUVFLEtBQUssRUFBRUksSUFBSSxDQUFDSCxJQUZkO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFERixDQURVO0lBQUEsQ0FKUjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREosQ0FjSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBckJKO0FBdUJIOztHQW5DUVgsUTs7S0FBQUEsUTtBQXFDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjNhNGViNTc5NmY5YzFjNjdlZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBTcG90SW5mbyh7IGluZm8gPSB7c3BvdE5hbWU6IFwiTi9BXCIsIHNwb3RBZGRyZXNzOiBcIk4vQVwiIH0gfSkge1xyXG5cclxuICAgIHZhciBkYXRhID0gW107XHJcbiAgICB2YXIgY250ID0gMTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3BvdEluZm8gY29tcG9uZW50IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgZGF0YS5wdXNoKHtvcmRlcjogY250LCBuYW1lOiBpbmZvLnNwb3ROYW1lLCBhZGRyZXNzOiBpbmZvLnNwb3RBZGRyZXNzfSk7XHJcbiAgICAgICAgY250ICs9IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0XHJcbiAgICBzdHlsZT17e3BhZGRpbmc6ICcyMHB4J319XHJcbiAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzaXplPVwic21hbGxcIiBzaGFwZT1cInNxdWFyZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM4N2QwNjgnIH19PntpdGVtLm9yZGVyfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICApfVxyXG4gIC8+XHJcbiAgICAgICAgLy8gPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIC8vICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxyXG4gICAgICAgIC8vICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAvLyAgICAgbWFyZ2luOiAnOHB4J1xyXG4gICAgICAgIC8vIH19PlxyXG4gICAgICAgIC8vICAgICA8ZGl2PjxiPntpbmZvLnNwb3ROYW1lfTwvYj48L2Rpdj5cclxuICAgICAgICAvLyAgICAgPGRpdj57aW5mby5zcG90QWRkcmVzc308L2Rpdj5cclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwb3RJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==