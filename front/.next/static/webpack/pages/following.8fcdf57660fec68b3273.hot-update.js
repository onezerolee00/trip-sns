webpackHotUpdate_N_E("pages/following",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
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
/* harmony import */ var _FollowButtonInList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FollowButtonInList */ "./components/FollowButtonInList.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\FollowList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FollowList = function FollowList(_ref) {
  var header = _ref.header,
      data = _ref.data;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    bordered: true,
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 29
          }
        }, item.nickname[0]),
        title: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }
      }), header === "followinglist" ? __jsx(_FollowButtonInList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 23
        }
      }) : __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 23
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }); // return (
  //     <List 
  //         style={{marginBottom: 20}}
  //         grid={{gutter: 4, xs: 2, md: 3}}
  //         size="small"
  //         header={<div>{header}</div>}
  //         loadMore={<div style={{textAlign: 'center', margin: '10px 0'}}><Button>더 보기</Button></div>}
  //         bordered
  //         dataSource={data}
  //         renderItem={(item) => (
  //             <List.Item style={{marginTop:20}}>
  //                 <Card actions={[<StopOutlined key="stop"/>]}>
  //                     <Card.Meta description={item.nickname} />
  //                 </Card>
  //             </List.Item>
  //         )}
  //     />
  // )
};

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwiaXRlbSIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQjtFQUFBLElBQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7RUFBQSxJQUFWQyxJQUFVLFFBQVZBLElBQVU7RUFFbkMsT0FDSSxNQUFDLHlDQUFEO0lBQ0ksUUFBUSxNQURaO0lBRUksVUFBVSxFQUFDLFlBRmY7SUFHSSxVQUFVLEVBQUVBLElBSGhCO0lBSUksVUFBVSxFQUFFLG9CQUFDQyxJQUFEO01BQUEsT0FDUixNQUFDLHlDQUFELENBQU0sSUFBTjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO1FBQ0EsTUFBTSxFQUFFLE1BQUMsMkNBQUQ7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxHQUFTQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxDQUFkLENBQVQsQ0FEUjtRQUVBLEtBQUssRUFBRUQsSUFBSSxDQUFDQyxRQUZaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFESixFQUtLSCxNQUFNLEtBQUcsZUFBVCxHQUNDLE1BQUMsMkRBQUQ7UUFBb0IsSUFBSSxFQUFFRSxJQUExQjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREQsR0FFQztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBUE4sQ0FEUTtJQUFBLENBSmhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFESixDQUZtQyxDQW9CbkM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0gsQ0F0Q0Q7O0tBQU1ILFU7QUF3Q05BLFVBQVUsQ0FBQ0ssU0FBWCxHQUF1QjtFQUNuQkosTUFBTSxFQUFFSyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUROO0VBRW5CTixJQUFJLEVBQUVJLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkgsQ0FBdkI7QUFLZVIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9sbG93aW5nLjhmY2RmNTc2NjBmZWM2OGIzMjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uSW5MaXN0IGZyb20gJy4vRm9sbG93QnV0dG9uSW5MaXN0JztcclxuXHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHtoZWFkZXIsIGRhdGF9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGEgXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoZWFkZXI9PT1cImZvbGxvd2luZ2xpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gPEZvbGxvd0J1dHRvbkluTGlzdCBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8TGlzdCBcclxuICAgIC8vICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX1cclxuICAgIC8vICAgICAgICAgZ3JpZD17e2d1dHRlcjogNCwgeHM6IDIsIG1kOiAzfX1cclxuICAgIC8vICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgIC8vICAgICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgLy8gICAgICAgICBsb2FkTW9yZT17PGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9fT48QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XHJcbiAgICAvLyAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAvLyAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAvLyAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAvLyAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7bWFyZ2luVG9wOjIwfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiLz5dfT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAvLyAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgIC8vICAgICAgICAgKX1cclxuICAgIC8vICAgICAvPlxyXG4gICAgLy8gKVxyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9