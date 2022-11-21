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
  var cnt = 1;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("SpotInfoListView component");
    cnt += 1;
  }, []);
  return (// <div>
    //     {spotList.map(spot => (<SpotInfo key={spot.id} info={spot} />))}
    // </div>
    __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
      style: {
        padding: '20px'
      },
      itemLayout: "horizontal",
      dataSource: spotList,
      renderItem: function renderItem(item) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
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
              lineNumber: 26,
              columnNumber: 23
            }
          }, cnt++),
          title: item.spotName,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }
        }));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG90SW5mb0xpc3RWaWV3LmpzIl0sIm5hbWVzIjpbIlNwb3RJbmZvTGlzdFZpZXciLCJzcG90TGlzdCIsImNudCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nIiwiaXRlbSIsImJhY2tncm91bmRDb2xvciIsInNwb3ROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxnQkFBVCxPQUE2QztFQUFBOztFQUFBOztFQUFBLHlCQUFqQkMsUUFBaUI7RUFBQSxJQUFqQkEsUUFBaUIsOEJBQU4sRUFBTTtFQUV6QyxJQUFJQyxHQUFHLEdBQUcsQ0FBVjtFQUVBQyx1REFBUyxDQUFDLFlBQU07SUFDWkMsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7SUFDQUgsR0FBRyxJQUFJLENBQVA7RUFDSCxDQUhRLEVBR04sRUFITSxDQUFUO0VBTUEsT0FDSTtJQUNBO0lBQ0E7SUFDQSxNQUFDLHlDQUFEO01BQ0EsS0FBSyxFQUFFO1FBQUNJLE9BQU8sRUFBRTtNQUFWLENBRFA7TUFFQSxVQUFVLEVBQUMsWUFGWDtNQUdBLFVBQVUsRUFBRUwsUUFIWjtNQUlBLFVBQVUsRUFBRSxvQkFBQ00sSUFBRDtRQUFBLE9BQ1YsTUFBQyx5Q0FBRCxDQUFNLElBQU47VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxHQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtVQUNFLE1BQU0sRUFBRSxNQUFDLDJDQUFEO1lBQVEsSUFBSSxFQUFDLE9BQWI7WUFBcUIsS0FBSyxFQUFDLFFBQTNCO1lBQW9DLEtBQUssRUFBRTtjQUFFQyxlQUFlLEVBQUU7WUFBbkIsQ0FBM0M7WUFBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFBQSxHQUE0RU4sR0FBRyxFQUEvRSxDQURWO1VBRUUsS0FBSyxFQUFFSyxJQUFJLENBQUNFLFFBRmQ7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxFQURGLENBRFU7TUFBQSxDQUpaO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7RUFKSjtBQWtCSDs7R0E1QlFULGdCOztLQUFBQSxnQjtBQThCTUEsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGFhZGIxZjg3OWUwZWNiYjFhMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcG90SW5mbyBmcm9tIFwiLi9TcG90SW5mb1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgU2VnbWVudGVkLCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIFNwb3RJbmZvTGlzdFZpZXcoeyBzcG90TGlzdCA9IFtdIH0pIHtcclxuXHJcbiAgICB2YXIgY250ID0gMVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTcG90SW5mb0xpc3RWaWV3IGNvbXBvbmVudFwiKTtcclxuICAgICAgICBjbnQgKz0gMVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGRpdj5cclxuICAgICAgICAvLyAgICAge3Nwb3RMaXN0Lm1hcChzcG90ID0+ICg8U3BvdEluZm8ga2V5PXtzcG90LmlkfSBpbmZvPXtzcG90fSAvPikpfVxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgc3R5bGU9e3twYWRkaW5nOiAnMjBweCd9fVxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBkYXRhU291cmNlPXtzcG90TGlzdH1cclxuICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNpemU9XCJzbWFsbFwiIHNoYXBlPVwic3F1YXJlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzg3ZDA2OCcgfX0+e2NudCsrfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5zcG90TmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcG90SW5mb0xpc3RWaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==