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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\FollowList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FollowList = function FollowList(_ref) {
  var header = _ref.header,
      data = _ref.data;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    } //size="small"
    ,
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, header),
    bordered: true,
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        actions: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 37
          }
        }, "\uC5B8\uD314\uB85C\uC6B0"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 29
          }
        }, item.nickname[0]),
        title: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwiZ3V0dGVyIiwieHMiLCJtZCIsIml0ZW0iLCJuaWNrbmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7RUFBQSxJQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0VBQUEsSUFBVkMsSUFBVSxRQUFWQSxJQUFVO0VBQ25DLE9BQ0ksTUFBQyx5Q0FBRDtJQUNJLElBQUksRUFBRTtNQUFDQyxNQUFNLEVBQUUsQ0FBVDtNQUFZQyxFQUFFLEVBQUUsQ0FBaEI7TUFBbUJDLEVBQUUsRUFBRTtJQUF2QixDQURWLENBRUk7SUFGSjtJQUdJLE1BQU0sRUFBRTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQU1KLE1BQU4sQ0FIWjtJQUlJLFFBQVEsTUFKWjtJQUtJLFVBQVUsRUFBQyxZQUxmO0lBTUksVUFBVSxFQUFFQyxJQU5oQjtJQU9JLFVBQVUsRUFBRSxvQkFBQ0ksSUFBRDtNQUFBLE9BQ1IsTUFBQyx5Q0FBRCxDQUFNLElBQU47UUFBVyxPQUFPLEVBQUUsTUFBQywyQ0FBRDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLDhCQUFwQjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO1FBQ0EsTUFBTSxFQUFFLE1BQUMsMkNBQUQ7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxHQUFTQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxDQUFkLENBQVQsQ0FEUjtRQUVBLEtBQUssRUFBRUQsSUFBSSxDQUFDQyxRQUZaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFESixDQURRO0lBQUEsQ0FQaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURKLENBRG1DLENBbUJuQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSCxDQXJDRDs7S0FBTVAsVTtBQXVDTkEsVUFBVSxDQUFDUSxTQUFYLEdBQXVCO0VBQ25CUCxNQUFNLEVBQUVRLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47RUFFbkJULElBQUksRUFBRU8saURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGSCxDQUF2QjtBQUtlWCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb2xsb3dpbmcuMTQ3MTNjNDI0ODljNmVlZWIxY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgQ2FyZCwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoe2hlYWRlciwgZGF0YX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgIGdyaWQ9e3tndXR0ZXI6IDQsIHhzOiAyLCBtZDogM319XHJcbiAgICAgICAgICAgIC8vc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFjdGlvbnM9ezxCdXR0b24+7Ja47YyU66Gc7JqwPC9CdXR0b24+fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGEgXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxuICAgIC8vIHJldHVybiAoXHJcbiAgICAvLyAgICAgPExpc3QgXHJcbiAgICAvLyAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19XHJcbiAgICAvLyAgICAgICAgIGdyaWQ9e3tndXR0ZXI6IDQsIHhzOiAyLCBtZDogM319XHJcbiAgICAvLyAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAvLyAgICAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cclxuICAgIC8vICAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnfX0+PEJ1dHRvbj7rjZQg67O06riwPC9CdXR0b24+PC9kaXY+fVxyXG4gICAgLy8gICAgICAgICBib3JkZXJlZFxyXG4gICAgLy8gICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgLy8gICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgLy8gICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17e21hcmdpblRvcDoyMH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIi8+XX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAvLyAgICAgICAgICl9XHJcbiAgICAvLyAgICAgLz5cclxuICAgIC8vIClcclxufTtcclxuXHJcbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==