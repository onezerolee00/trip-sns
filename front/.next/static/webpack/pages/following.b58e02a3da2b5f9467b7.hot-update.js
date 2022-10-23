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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\FollowList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var FollowList = function FollowList(_ref) {
  _s();

  var user = _ref.user,
      data = _ref.data;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading; // 리덕스에서 내 정보 받아오고


  var isFollowing = user === null || user === void 0 ? void 0 : user.Followings.find(function (v) {
    return v.id === data.id;
  }); // 포스트 작성한 사람들 중에 내가 팔로윙한 사람들

  item_id = 0;
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      // 내가 팔로잉을 하고 있는데 버튼을 눌렀다
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: item_id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: item_id
      });
    }
  }, [item_id, isFollowing]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    bordered: true,
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }
        }, item.nickname[0]),
        title: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: followLoading || unfollowLoading,
        onClick: onClickButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }, isFollowing ? '언팔로우' : '팔로우', item.id), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, item_id = item.id));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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

_s(FollowList, "oQRGZ4+MgpAjZ6p1zzrPk3lOofY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJ1c2VyIiwiZGF0YSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIml0ZW1faWQiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiaXRlbSIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiaGVhZGVyIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7RUFBQTs7RUFBQSxJQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0VBQUEsSUFBVkMsSUFBVSxRQUFWQSxJQUFVO0VBQ2pDLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0VBQ0EsbUJBQStDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNMLElBQWpCO0VBQUEsQ0FBRCxDQUExRDtFQUFBLElBQVFNLEVBQVIsZ0JBQVFBLEVBQVI7RUFBQSxJQUFZQyxhQUFaLGdCQUFZQSxhQUFaO0VBQUEsSUFBMkJDLGVBQTNCLGdCQUEyQkEsZUFBM0IsQ0FGaUMsQ0FFa0Q7OztFQUNuRixJQUFNQyxXQUFXLEdBQUdULElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFVSxVQUFOLENBQWlCQyxJQUFqQixDQUFzQixVQUFDQyxDQUFEO0lBQUEsT0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNaLElBQUksQ0FBQ1ksRUFBckI7RUFBQSxDQUF0QixDQUFwQixDQUhpQyxDQUdrQzs7RUFDbkVDLE9BQU8sR0FBRyxDQUFWO0VBRUEsSUFBTUMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDcEMsSUFBSVAsV0FBSixFQUFpQjtNQUFFO01BQ2ZQLFFBQVEsQ0FBQztRQUNMZSxJQUFJLEVBQUVDLCtEQUREO1FBRUxqQixJQUFJLEVBQUVhO01BRkQsQ0FBRCxDQUFSO0lBSUgsQ0FMRCxNQUtPO01BQ0haLFFBQVEsQ0FBQztRQUNMZSxJQUFJLEVBQUVFLDZEQUREO1FBRUxsQixJQUFJLEVBQUVhO01BRkQsQ0FBRCxDQUFSO0lBSUg7RUFDSixDQVpnQyxFQVk5QixDQUFDQSxPQUFELEVBQVVMLFdBQVYsQ0FaOEIsQ0FBakM7RUFjQSxPQUNJLE1BQUMseUNBQUQ7SUFDSSxRQUFRLE1BRFo7SUFFSSxVQUFVLEVBQUMsWUFGZjtJQUdJLFVBQVUsRUFBRVIsSUFIaEI7SUFJSSxVQUFVLEVBQUUsb0JBQUNtQixJQUFEO01BQUEsT0FDUixNQUFDLHlDQUFELENBQU0sSUFBTjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO1FBQ0EsTUFBTSxFQUFFLE1BQUMsMkNBQUQ7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxHQUFTQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxDQUFkLENBQVQsQ0FEUjtRQUVBLEtBQUssRUFBRUQsSUFBSSxDQUFDQyxRQUZaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFESixFQUtJLE1BQUMsMkNBQUQ7UUFBUSxPQUFPLEVBQUVkLGFBQWEsSUFBSUMsZUFBbEM7UUFBbUQsT0FBTyxFQUFFTyxhQUE1RDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0NOLFdBQVcsR0FBRyxNQUFILEdBQVksS0FEeEIsRUFFQ1csSUFBSSxDQUFDUCxFQUZOLENBTEosRUFTSTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQU1DLE9BQU8sR0FBR00sSUFBSSxDQUFDUCxFQUFyQixDQVRKLENBRFE7SUFBQSxDQUpoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREosQ0FwQmlDLENBd0NqQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSCxDQTFERDs7R0FBTWQsVTtVQUNlSSx1RCxFQUM4QkMsdUQ7OztLQUY3Q0wsVTtBQTRETkEsVUFBVSxDQUFDdUIsU0FBWCxHQUF1QjtFQUNuQkMsTUFBTSxFQUFFQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUROO0VBRW5CekIsSUFBSSxFQUFFdUIsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGSCxDQUF2QjtBQUtlM0IseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9sbG93aW5nLmI1OGUwMmEzZGEyYjVmOTQ2N2I3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoe3VzZXIsIGRhdGF9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7IC8vIOumrOuNleyKpOyXkOyEnCDrgrQg7KCV67O0IOuwm+yVhOyYpOqzoFxyXG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSB1c2VyPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IGRhdGEuaWQpIC8vIO2PrOyKpO2KuCDsnpHshLHtlZwg7IKs656M65OkIOykkeyXkCDrgrTqsIAg7YyU66Gc7JyZ7ZWcIOyCrOuejOuTpFxyXG4gICAgaXRlbV9pZCA9IDBcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0ZvbGxvd2luZykgeyAvLyDrgrTqsIAg7YyU66Gc7J6J7J2EIO2VmOqzoCDsnojripTrjbAg67KE7Yq87J2EIOuIjOuggOuLpFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaXRlbV9pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtX2lkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXRlbV9pZCwgaXNGb2xsb3dpbmddKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YSBcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0ubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ30gb25DbGljaz17b25DbGlja0J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtX2lkID0gaXRlbS5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxMaXN0IFxyXG4gICAgLy8gICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fVxyXG4gICAgLy8gICAgICAgICBncmlkPXt7Z3V0dGVyOiA0LCB4czogMiwgbWQ6IDN9fVxyXG4gICAgLy8gICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgLy8gICAgICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XHJcbiAgICAvLyAgICAgICAgIGxvYWRNb3JlPXs8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJ319PjxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPjwvZGl2Pn1cclxuICAgIC8vICAgICAgICAgYm9yZGVyZWRcclxuICAgIC8vICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgIC8vICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgIC8vICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3ttYXJnaW5Ub3A6MjB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIvPl19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgIC8vICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgLy8gICAgICAgICApfVxyXG4gICAgLy8gICAgIC8+XHJcbiAgICAvLyApXHJcbn07XHJcblxyXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=