webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SpotInfoListView.js":
/*!****************************************!*\
  !*** ./components/SpotInfoListView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpotInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotInfo */ "./components/SpotInfo.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\leeoo\\Desktop\\trip-sns\\front\\components\\SpotInfoListView.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SpotInfoListView(_ref) {
  _s();

  var _this = this;

  var _ref$spotList = _ref.spotList,
      spotList = _ref$spotList === void 0 ? [] : _ref$spotList;
  var data = [];
  useEffect(function () {
    console.log("SpotInfoListView component");
    data.push({
      order: spot.id,
      name: spot.spotName
    });
  }, []);
  return (// <div>
    //     {spotList.map(spot => (<SpotInfo key={spot.id} info={spot} />))}
    // </div>
    __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
      style: {
        padding: '20px'
      },
      itemLayout: "horizontal",
      dataSource: data,
      renderItem: function renderItem(item) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
          avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
            size: "small",
            shape: "square",
            style: {
              backgroundColor: '#87d068'
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 23
            }
          }, item.order),
          title: item.name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }
        }));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    })
  );
}

_s(SpotInfoListView, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = SpotInfoListView;
/* harmony default export */ __webpack_exports__["default"] = (SpotInfoListView);

var _c;

$RefreshReg$(_c, "SpotInfoListView");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG90SW5mb0xpc3RWaWV3LmpzIl0sIm5hbWVzIjpbIlNwb3RJbmZvTGlzdFZpZXciLCJzcG90TGlzdCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm9yZGVyIiwic3BvdCIsImlkIiwibmFtZSIsInNwb3ROYW1lIiwicGFkZGluZyIsIml0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxnQkFBVCxPQUE2QztFQUFBOztFQUFBOztFQUFBLHlCQUFqQkMsUUFBaUI7RUFBQSxJQUFqQkEsUUFBaUIsOEJBQU4sRUFBTTtFQUN6QyxJQUFJQyxJQUFJLEdBQUcsRUFBWDtFQUVBQyxTQUFTLENBQUMsWUFBTTtJQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtJQUNBSCxJQUFJLENBQUNJLElBQUwsQ0FBVTtNQUFDQyxLQUFLLEVBQUVDLElBQUksQ0FBQ0MsRUFBYjtNQUFpQkMsSUFBSSxFQUFFRixJQUFJLENBQUNHO0lBQTVCLENBQVY7RUFDSCxDQUhRLEVBR04sRUFITSxDQUFUO0VBTUEsT0FDSTtJQUNBO0lBQ0E7SUFDQSxNQUFDLHlDQUFEO01BQ0EsS0FBSyxFQUFFO1FBQUNDLE9BQU8sRUFBRTtNQUFWLENBRFA7TUFFQSxVQUFVLEVBQUMsWUFGWDtNQUdBLFVBQVUsRUFBRVYsSUFIWjtNQUlBLFVBQVUsRUFBRSxvQkFBQ1csSUFBRDtRQUFBLE9BQ1YsTUFBQyx5Q0FBRCxDQUFNLElBQU47VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxHQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtVQUNFLE1BQU0sRUFBRSxNQUFDLDJDQUFEO1lBQVEsSUFBSSxFQUFDLE9BQWI7WUFBcUIsS0FBSyxFQUFDLFFBQTNCO1lBQW9DLEtBQUssRUFBRTtjQUFFQyxlQUFlLEVBQUU7WUFBbkIsQ0FBM0M7WUFBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFBQSxHQUE0RUQsSUFBSSxDQUFDTixLQUFqRixDQURWO1VBRUUsS0FBSyxFQUFFTSxJQUFJLENBQUNILElBRmQ7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxFQURGLENBRFU7TUFBQSxDQUpaO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7RUFKSjtBQWtCSDs7R0EzQlFWLGdCOztLQUFBQSxnQjtBQTZCTUEsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZiZTQ1MWEzOTNhNjU3YTdhMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcG90SW5mbyBmcm9tIFwiLi9TcG90SW5mb1wiO1xyXG5pbXBvcnQgeyBMaXN0LCBTZWdtZW50ZWQsIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5cclxuZnVuY3Rpb24gU3BvdEluZm9MaXN0Vmlldyh7IHNwb3RMaXN0ID0gW10gfSkge1xyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3BvdEluZm9MaXN0VmlldyBjb21wb25lbnRcIik7XHJcbiAgICAgICAgZGF0YS5wdXNoKHtvcmRlcjogc3BvdC5pZCwgbmFtZTogc3BvdC5zcG90TmFtZX0pXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8ZGl2PlxyXG4gICAgICAgIC8vICAgICB7c3BvdExpc3QubWFwKHNwb3QgPT4gKDxTcG90SW5mbyBrZXk9e3Nwb3QuaWR9IGluZm89e3Nwb3R9IC8+KSl9XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICBzdHlsZT17e3BhZGRpbmc6ICcyMHB4J319XHJcbiAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzaXplPVwic21hbGxcIiBzaGFwZT1cInNxdWFyZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM4N2QwNjgnIH19PntpdGVtLm9yZGVyfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwb3RJbmZvTGlzdFZpZXciXSwic291cmNlUm9vdCI6IiJ9