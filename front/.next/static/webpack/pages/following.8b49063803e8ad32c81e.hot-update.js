webpackHotUpdate_N_E("pages/following",{

/***/ "./components/FollowButton.js":
false,

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
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\FollowList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FollowList = function FollowList(_ref) {
  _s();

  var data = _ref.data,
      header = _ref.header;
  var dispatch = useDispatch();

  var _useSelector = useSelector(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading; // 리덕스에서 내 정보 받아오고


  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === data.User.id;
  }); // 포스트 작성한 사람들 중에 내가 팔로윙한 사람들

  var onClickButton = useCallback(function () {
    if (isFollowing) {
      // 내가 팔로잉을 하고 있는데 버튼을 눌렀다
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id
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
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 29
          }
        }, item.nickname[0]),
        title: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: followLoading || unfollowLoading,
        onClick: onClickButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, isFollowing ? '언팔로우' : '팔로우'));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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

_s(FollowList, "oQRGZ4+MgpAjZ6p1zzrPk3lOofY=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJkYXRhIiwiaGVhZGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsInBvc3QiLCJGT0xMT1dfUkVRVUVTVCIsIml0ZW0iLCJuaWNrbmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW9CO0VBQUE7O0VBQUEsSUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtFQUFBLElBQVpDLE1BQVksUUFBWkEsTUFBWTtFQUNuQyxJQUFNQyxRQUFRLEdBQUdDLFdBQVcsRUFBNUI7O0VBQ0EsbUJBQStDQyxXQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQTFEO0VBQUEsSUFBUUMsRUFBUixnQkFBUUEsRUFBUjtFQUFBLElBQVlDLGFBQVosZ0JBQVlBLGFBQVo7RUFBQSxJQUEyQkMsZUFBM0IsZ0JBQTJCQSxlQUEzQixDQUZtQyxDQUVnRDs7O0VBQ25GLElBQU1DLFdBQVcsR0FBR0gsRUFBSCxhQUFHQSxFQUFILHVCQUFHQSxFQUFFLENBQUVJLFVBQUosQ0FBZUMsSUFBZixDQUFvQixVQUFDQyxDQUFEO0lBQUEsT0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNkLElBQUksQ0FBQ2UsSUFBTCxDQUFVRCxFQUExQjtFQUFBLENBQXBCLENBQXBCLENBSG1DLENBR21DOztFQUV0RSxJQUFNRSxhQUFhLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0lBQ3BDLElBQUlQLFdBQUosRUFBaUI7TUFBRTtNQUNmUixRQUFRLENBQUM7UUFDTGdCLElBQUksRUFBRUMsZ0JBREQ7UUFFTG5CLElBQUksRUFBRW9CLElBQUksQ0FBQ0wsSUFBTCxDQUFVRDtNQUZYLENBQUQsQ0FBUjtJQUlILENBTEQsTUFLTztNQUNIWixRQUFRLENBQUM7UUFDTGdCLElBQUksRUFBRUcsY0FERDtRQUVMckIsSUFBSSxFQUFFb0IsSUFBSSxDQUFDTCxJQUFMLENBQVVEO01BRlgsQ0FBRCxDQUFSO0lBSUg7RUFDSixDQVpnQyxFQVk5QixDQUFDSixXQUFELENBWjhCLENBQWpDO0VBY0EsT0FDSSxNQUFDLHlDQUFEO0lBQ0ksUUFBUSxNQURaO0lBRUksVUFBVSxFQUFDLFlBRmY7SUFHSSxVQUFVLEVBQUVWLElBSGhCO0lBSUksVUFBVSxFQUFFLG9CQUFDc0IsSUFBRDtNQUFBLE9BQ1IsTUFBQyx5Q0FBRCxDQUFNLElBQU47UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNJLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtRQUNBLE1BQU0sRUFBRSxNQUFDLDJDQUFEO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FBU0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsQ0FBZCxDQUFULENBRFI7UUFFQSxLQUFLLEVBQUVELElBQUksQ0FBQ0MsUUFGWjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREosRUFLSSxNQUFDLDJDQUFEO1FBQVEsT0FBTyxFQUFFZixhQUFhLElBQUlDLGVBQWxDO1FBQW1ELE9BQU8sRUFBRU8sYUFBNUQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNDTixXQUFXLEdBQUcsTUFBSCxHQUFZLEtBRHhCLENBTEosQ0FEUTtJQUFBLENBSmhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFESixDQW5CbUMsQ0FxQ25DO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNILENBdkREOztHQUFNWCxVOztLQUFBQSxVO0FBeUROQSxVQUFVLENBQUN5QixTQUFYLEdBQXVCO0VBQ25CdkIsTUFBTSxFQUFFd0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFETjtFQUVuQjNCLElBQUksRUFBRXlCLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkgsQ0FBdkI7QUFLZTVCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZvbGxvd2luZy44YjQ5MDYzODAzZThhZDMyYzgxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGlzdCwgQnV0dG9uLCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoe2RhdGEsIGhlYWRlcn0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTsgLy8g66as642V7Iqk7JeQ7IScIOuCtCDsoJXrs7Qg67Cb7JWE7Jik6rOgXHJcbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IGRhdGEuVXNlci5pZCkgLy8g7Y+s7Iqk7Yq4IOyekeyEse2VnCDsgqzrnozrk6Qg7KSR7JeQIOuCtOqwgCDtjJTroZzsnJntlZwg7IKs656M65OkXHJcblxyXG4gICAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoaXNGb2xsb3dpbmcpIHsgLy8g64K06rCAIO2MlOuhnOyeieydhCDtlZjqs6Ag7J6I64qU642wIOuyhO2KvOydhCDriIzroIDri6RcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0ZvbGxvd2luZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhIFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxuICAgIC8vIHJldHVybiAoXHJcbiAgICAvLyAgICAgPExpc3QgXHJcbiAgICAvLyAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19XHJcbiAgICAvLyAgICAgICAgIGdyaWQ9e3tndXR0ZXI6IDQsIHhzOiAyLCBtZDogM319XHJcbiAgICAvLyAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAvLyAgICAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cclxuICAgIC8vICAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnfX0+PEJ1dHRvbj7rjZQg67O06riwPC9CdXR0b24+PC9kaXY+fVxyXG4gICAgLy8gICAgICAgICBib3JkZXJlZFxyXG4gICAgLy8gICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgLy8gICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgLy8gICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17e21hcmdpblRvcDoyMH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIi8+XX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAvLyAgICAgICAgICl9XHJcbiAgICAvLyAgICAgLz5cclxuICAgIC8vIClcclxufTtcclxuXHJcbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==