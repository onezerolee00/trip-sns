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
        title: item.spot,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG90SW5mby5qcyJdLCJuYW1lcyI6WyJTcG90SW5mbyIsImluZm8iLCJzcG90TmFtZSIsInNwb3RBZGRyZXNzIiwiZGF0YSIsImNudCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwib3JkZXIiLCJuYW1lIiwiYWRkcmVzcyIsInBhZGRpbmciLCJpdGVtIiwiYmFja2dyb3VuZENvbG9yIiwic3BvdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsU0FBU0EsUUFBVCxPQUFxRTtFQUFBOztFQUFBOztFQUFBLHFCQUFqREMsSUFBaUQ7RUFBQSxJQUFqREEsSUFBaUQsMEJBQTFDO0lBQUNDLFFBQVEsRUFBRSxLQUFYO0lBQWtCQyxXQUFXLEVBQUU7RUFBL0IsQ0FBMEM7RUFFakUsSUFBSUMsSUFBSSxHQUFHLEVBQVg7RUFDQSxJQUFJQyxHQUFHLEdBQUcsQ0FBVjtFQUVBQyx1REFBUyxDQUFDLFlBQU07SUFDWkMsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7SUFDQUosSUFBSSxDQUFDSyxJQUFMLENBQVU7TUFBQ0MsS0FBSyxFQUFFTCxHQUFSO01BQWFNLElBQUksRUFBRVYsSUFBSSxDQUFDQyxRQUF4QjtNQUFrQ1UsT0FBTyxFQUFFWCxJQUFJLENBQUNFO0lBQWhELENBQVY7SUFDQUUsR0FBRyxJQUFJLENBQVA7SUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7RUFDSCxDQUxRLEVBS04sRUFMTSxDQUFUO0VBT0EsT0FDSSxNQUFDLElBQUQ7SUFDSixLQUFLLEVBQUU7TUFBQ1MsT0FBTyxFQUFFO0lBQVYsQ0FESDtJQUVKLFVBQVUsRUFBQyxZQUZQO0lBR0osVUFBVSxFQUFFVCxJQUhSO0lBSUosVUFBVSxFQUFFLG9CQUFDVSxJQUFEO01BQUEsT0FDVixNQUFDLElBQUQsQ0FBTSxJQUFOO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDRSxNQUFDLElBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtRQUNFLE1BQU0sRUFBRSxNQUFDLE1BQUQ7VUFBUSxJQUFJLEVBQUMsT0FBYjtVQUFxQixLQUFLLEVBQUMsUUFBM0I7VUFBb0MsS0FBSyxFQUFFO1lBQUVDLGVBQWUsRUFBRTtVQUFuQixDQUEzQztVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLEdBQTRFRCxJQUFJLENBQUNKLEtBQWpGLENBRFY7UUFFRSxLQUFLLEVBQUVJLElBQUksQ0FBQ0UsSUFGZDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREYsQ0FEVTtJQUFBLENBSlI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURKLENBY0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQXJCSjtBQXVCSDs7R0FuQ1FoQixROztLQUFBQSxRO0FBcUNNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNDM3MWI0N2ZjZTQ1NjZiODI0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFNwb3RJbmZvKHsgaW5mbyA9IHtzcG90TmFtZTogXCJOL0FcIiwgc3BvdEFkZHJlc3M6IFwiTi9BXCIgfSB9KSB7XHJcblxyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuICAgIHZhciBjbnQgPSAxO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTcG90SW5mbyBjb21wb25lbnQgY3JlYXRlZFwiKTtcclxuICAgICAgICBkYXRhLnB1c2goe29yZGVyOiBjbnQsIG5hbWU6IGluZm8uc3BvdE5hbWUsIGFkZHJlc3M6IGluZm8uc3BvdEFkZHJlc3N9KTtcclxuICAgICAgICBjbnQgKz0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgIHN0eWxlPXt7cGFkZGluZzogJzIwcHgnfX1cclxuICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNpemU9XCJzbWFsbFwiIHNoYXBlPVwic3F1YXJlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzg3ZDA2OCcgfX0+e2l0ZW0ub3JkZXJ9PC9BdmF0YXI+fVxyXG4gICAgICAgICAgdGl0bGU9e2l0ZW0uc3BvdH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgICl9XHJcbiAgLz5cclxuICAgICAgICAvLyA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICAgIC8vICAgICBtYXJnaW46ICc4cHgnXHJcbiAgICAgICAgLy8gfX0+XHJcbiAgICAgICAgLy8gICAgIDxkaXY+PGI+e2luZm8uc3BvdE5hbWV9PC9iPjwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8ZGl2PntpbmZvLnNwb3RBZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BvdEluZm8iXSwic291cmNlUm9vdCI6IiJ9