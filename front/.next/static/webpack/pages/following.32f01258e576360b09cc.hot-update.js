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
    return v.id === data.User.id;
  }); // 포스트 작성한 사람들 중에 내가 팔로윙한 사람들

  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      // 내가 팔로잉을 하고 있는데 버튼을 눌렀다
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: User.id
      });
    }
  }, [isFollowing]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    bordered: true,
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }
        }, item.nickname[0]),
        title: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: followLoading || unfollowLoading,
        onClick: onClickButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }, isFollowing ? '언팔로우' : '팔로우'));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJ1c2VyIiwiZGF0YSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiaXRlbSIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiaGVhZGVyIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7RUFBQTs7RUFBQSxJQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0VBQUEsSUFBVkMsSUFBVSxRQUFWQSxJQUFVO0VBQ2pDLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0VBQ0EsbUJBQStDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNMLElBQWpCO0VBQUEsQ0FBRCxDQUExRDtFQUFBLElBQVFNLEVBQVIsZ0JBQVFBLEVBQVI7RUFBQSxJQUFZQyxhQUFaLGdCQUFZQSxhQUFaO0VBQUEsSUFBMkJDLGVBQTNCLGdCQUEyQkEsZUFBM0IsQ0FGaUMsQ0FFa0Q7OztFQUNuRixJQUFNQyxXQUFXLEdBQUdULElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFVSxVQUFOLENBQWlCQyxJQUFqQixDQUFzQixVQUFDQyxDQUFEO0lBQUEsT0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNaLElBQUksQ0FBQ2EsSUFBTCxDQUFVRCxFQUExQjtFQUFBLENBQXRCLENBQXBCLENBSGlDLENBR3VDOztFQUV4RSxJQUFNRSxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNwQyxJQUFJUCxXQUFKLEVBQWlCO01BQUU7TUFDZlAsUUFBUSxDQUFDO1FBQ0xlLElBQUksRUFBRUMsK0RBREQ7UUFFTGpCLElBQUksRUFBRWEsSUFBSSxDQUFDRDtNQUZOLENBQUQsQ0FBUjtJQUlILENBTEQsTUFLTztNQUNIWCxRQUFRLENBQUM7UUFDTGUsSUFBSSxFQUFFRSw2REFERDtRQUVMbEIsSUFBSSxFQUFFYSxJQUFJLENBQUNEO01BRk4sQ0FBRCxDQUFSO0lBSUg7RUFDSixDQVpnQyxFQVk5QixDQUFDSixXQUFELENBWjhCLENBQWpDO0VBY0EsT0FDSSxNQUFDLHlDQUFEO0lBQ0ksUUFBUSxNQURaO0lBRUksVUFBVSxFQUFDLFlBRmY7SUFHSSxVQUFVLEVBQUVSLElBSGhCO0lBSUksVUFBVSxFQUFFLG9CQUFDbUIsSUFBRDtNQUFBLE9BQ1IsTUFBQyx5Q0FBRCxDQUFNLElBQU47UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNJLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtRQUNBLE1BQU0sRUFBRSxNQUFDLDJDQUFEO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FBU0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsQ0FBZCxDQUFULENBRFI7UUFFQSxLQUFLLEVBQUVELElBQUksQ0FBQ0MsUUFGWjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREosRUFLSSxNQUFDLDJDQUFEO1FBQVEsT0FBTyxFQUFFZCxhQUFhLElBQUlDLGVBQWxDO1FBQW1ELE9BQU8sRUFBRU8sYUFBNUQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNDTixXQUFXLEdBQUcsTUFBSCxHQUFZLEtBRHhCLENBTEosQ0FEUTtJQUFBLENBSmhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFESixDQW5CaUMsQ0FxQ2pDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNILENBdkREOztHQUFNVixVO1VBQ2VJLHVELEVBQzhCQyx1RDs7O0tBRjdDTCxVO0FBeUROQSxVQUFVLENBQUN1QixTQUFYLEdBQXVCO0VBQ25CQyxNQUFNLEVBQUVDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47RUFFbkJ6QixJQUFJLEVBQUV1QixpREFBUyxDQUFDRyxLQUFWLENBQWdCRDtBQUZILENBQXZCO0FBS2UzQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb2xsb3dpbmcuMzJmMDEyNThlNTc2MzYwYjA5Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGlzdCwgQnV0dG9uLCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRm9sbG93TGlzdCA9ICh7dXNlciwgZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTsgLy8g66as642V7Iqk7JeQ7IScIOuCtCDsoJXrs7Qg67Cb7JWE7Jik6rOgXHJcbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IHVzZXI/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gZGF0YS5Vc2VyLmlkKSAvLyDtj6zsiqTtirgg7J6R7ISx7ZWcIOyCrOuejOuTpCDspJHsl5Ag64K06rCAIO2MlOuhnOycme2VnCDsgqzrnozrk6RcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0ZvbGxvd2luZykgeyAvLyDrgrTqsIAg7YyU66Gc7J6J7J2EIO2VmOqzoCDsnojripTrjbAg67KE7Yq87J2EIOuIjOuggOuLpFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogVXNlci5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBVc2VyLmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNGb2xsb3dpbmddKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YSBcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0ubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ30gb25DbGljaz17b25DbGlja0J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxMaXN0IFxyXG4gICAgLy8gICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fVxyXG4gICAgLy8gICAgICAgICBncmlkPXt7Z3V0dGVyOiA0LCB4czogMiwgbWQ6IDN9fVxyXG4gICAgLy8gICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgLy8gICAgICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XHJcbiAgICAvLyAgICAgICAgIGxvYWRNb3JlPXs8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJ319PjxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPjwvZGl2Pn1cclxuICAgIC8vICAgICAgICAgYm9yZGVyZWRcclxuICAgIC8vICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgIC8vICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgIC8vICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3ttYXJnaW5Ub3A6MjB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIvPl19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgIC8vICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgLy8gICAgICAgICApfVxyXG4gICAgLy8gICAgIC8+XHJcbiAgICAvLyApXHJcbn07XHJcblxyXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=