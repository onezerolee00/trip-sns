webpackHotUpdate_N_E("pages/follower",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwiaXRlbSIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQjtFQUFBLElBQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7RUFBQSxJQUFWQyxJQUFVLFFBQVZBLElBQVU7RUFFbkMsT0FDSSxNQUFDLHlDQUFEO0lBQ0ksUUFBUSxNQURaO0lBRUksVUFBVSxFQUFDLFlBRmY7SUFHSSxVQUFVLEVBQUVBLElBSGhCO0lBSUksVUFBVSxFQUFFLG9CQUFDQyxJQUFEO01BQUEsT0FDUixNQUFDLHlDQUFELENBQU0sSUFBTjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO1FBQ0EsTUFBTSxFQUFFLE1BQUMsMkNBQUQ7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxHQUFTQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxDQUFkLENBQVQsQ0FEUjtRQUVBLEtBQUssRUFBRUQsSUFBSSxDQUFDQyxRQUZaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFESixFQUtLSCxNQUFNLEtBQUcsZUFBVCxHQUNDLE1BQUMsMkRBQUQ7UUFBb0IsSUFBSSxFQUFFRSxJQUExQjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREQsR0FFQztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBUE4sQ0FEUTtJQUFBLENBSmhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFESixDQUZtQyxDQW9CbkM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0gsQ0F0Q0Q7O0tBQU1ILFU7QUF3Q05BLFVBQVUsQ0FBQ0ssU0FBWCxHQUF1QjtFQUNuQkosTUFBTSxFQUFFSyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUROO0VBRW5CTixJQUFJLEVBQUVJLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkgsQ0FBdkI7QUFLZVIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9sbG93ZXIuOGZjZGY1NzY2MGZlYzY4YjMyNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBGb2xsb3dCdXR0b25Jbkxpc3QgZnJvbSAnLi9Gb2xsb3dCdXR0b25Jbkxpc3QnO1xyXG5cclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoe2hlYWRlciwgZGF0YX0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YSBcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0ubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2hlYWRlcj09PVwiZm9sbG93aW5nbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8Rm9sbG93QnV0dG9uSW5MaXN0IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxMaXN0IFxyXG4gICAgLy8gICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fVxyXG4gICAgLy8gICAgICAgICBncmlkPXt7Z3V0dGVyOiA0LCB4czogMiwgbWQ6IDN9fVxyXG4gICAgLy8gICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgLy8gICAgICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XHJcbiAgICAvLyAgICAgICAgIGxvYWRNb3JlPXs8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJ319PjxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPjwvZGl2Pn1cclxuICAgIC8vICAgICAgICAgYm9yZGVyZWRcclxuICAgIC8vICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgIC8vICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgIC8vICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3ttYXJnaW5Ub3A6MjB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIvPl19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgIC8vICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgLy8gICAgICAgICApfVxyXG4gICAgLy8gICAgIC8+XHJcbiAgICAvLyApXHJcbn07XHJcblxyXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=