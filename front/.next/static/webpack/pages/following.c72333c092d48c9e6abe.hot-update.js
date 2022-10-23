webpackHotUpdate_N_E("pages/following",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\FollowList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var FollowList = function FollowList(_ref) {
  _s();

  var user = _ref.user,
      data = _ref.data;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading; // 리덕스에서 내 정보 받아오고


  var isFollowing = user === null || user === void 0 ? void 0 : user.Followings.find(function (v) {
    return v.id === data.id;
  }); // 포스트 작성한 사람들 중에 내가 팔로윙한 사람들

  var item_id = 0;
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (isFollowing) {
      // 내가 팔로잉을 하고 있는데 버튼을 눌렀다
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
        data: item_id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["FOLLOW_REQUEST"],
        data: item_id
      });
    }
  }, [item_id, isFollowing]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    bordered: true,
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
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
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
      }, (item.id, Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("item_id"))));
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
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcmVhZE9ubHlFcnJvci5qcyJdLCJuYW1lcyI6WyJGb2xsb3dMaXN0IiwidXNlciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm1lIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiaWQiLCJpdGVtX2lkIiwib25DbGlja0J1dHRvbiIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIml0ZW0iLCJuaWNrbmFtZSIsInByb3BUeXBlcyIsImhlYWRlciIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0VBQUE7O0VBQUEsSUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtFQUFBLElBQVZDLElBQVUsUUFBVkEsSUFBVTtFQUNqQyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUNBLG1CQUErQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDTCxJQUFqQjtFQUFBLENBQUQsQ0FBMUQ7RUFBQSxJQUFRTSxFQUFSLGdCQUFRQSxFQUFSO0VBQUEsSUFBWUMsYUFBWixnQkFBWUEsYUFBWjtFQUFBLElBQTJCQyxlQUEzQixnQkFBMkJBLGVBQTNCLENBRmlDLENBRWtEOzs7RUFDbkYsSUFBTUMsV0FBVyxHQUFHVCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRVUsVUFBTixDQUFpQkMsSUFBakIsQ0FBc0IsVUFBQ0MsQ0FBRDtJQUFBLE9BQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTWixJQUFJLENBQUNZLEVBQXJCO0VBQUEsQ0FBdEIsQ0FBcEIsQ0FIaUMsQ0FHa0M7O0VBQ25FLElBQU1DLE9BQU8sR0FBRyxDQUFoQjtFQUVBLElBQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ3BDLElBQUlQLFdBQUosRUFBaUI7TUFBRTtNQUNmUCxRQUFRLENBQUM7UUFDTGUsSUFBSSxFQUFFQywrREFERDtRQUVMakIsSUFBSSxFQUFFYTtNQUZELENBQUQsQ0FBUjtJQUlILENBTEQsTUFLTztNQUNIWixRQUFRLENBQUM7UUFDTGUsSUFBSSxFQUFFRSw2REFERDtRQUVMbEIsSUFBSSxFQUFFYTtNQUZELENBQUQsQ0FBUjtJQUlIO0VBQ0osQ0FaZ0MsRUFZOUIsQ0FBQ0EsT0FBRCxFQUFVTCxXQUFWLENBWjhCLENBQWpDO0VBY0EsT0FDSSxNQUFDLHlDQUFEO0lBQ0ksUUFBUSxNQURaO0lBRUksVUFBVSxFQUFDLFlBRmY7SUFHSSxVQUFVLEVBQUVSLElBSGhCO0lBSUksVUFBVSxFQUFFLG9CQUFDbUIsSUFBRDtNQUFBLE9BQ1IsTUFBQyx5Q0FBRCxDQUFNLElBQU47UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNJLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtRQUNBLE1BQU0sRUFBRSxNQUFDLDJDQUFEO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FBU0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsQ0FBZCxDQUFULENBRFI7UUFFQSxLQUFLLEVBQUVELElBQUksQ0FBQ0MsUUFGWjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREosRUFLSSxNQUFDLDJDQUFEO1FBQVEsT0FBTyxFQUFFZCxhQUFhLElBQUlDLGVBQWxDO1FBQW1ELE9BQU8sRUFBRU8sYUFBNUQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNDTixXQUFXLEdBQUcsTUFBSCxHQUFZLEtBRHhCLEVBRUNXLElBQUksQ0FBQ1AsRUFGTixDQUxKLEVBU0k7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxJQUFnQk8sSUFBSSxDQUFDUCxFQUFyQix1R0FUSixDQURRO0lBQUEsQ0FKaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURKLENBcEJpQyxDQXdDakM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0gsQ0ExREQ7O0dBQU1kLFU7VUFDZUksdUQsRUFDOEJDLHVEOzs7S0FGN0NMLFU7QUE0RE5BLFVBQVUsQ0FBQ3VCLFNBQVgsR0FBdUI7RUFDbkJDLE1BQU0sRUFBRUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFETjtFQUVuQnpCLElBQUksRUFBRXVCLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkgsQ0FBdkI7QUFLZTNCLHlFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb2xsb3dpbmcuYzcyMzMzYzA5MmQ0OGM5ZTZhYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGlzdCwgQnV0dG9uLCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRm9sbG93TGlzdCA9ICh7dXNlciwgZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTsgLy8g66as642V7Iqk7JeQ7IScIOuCtCDsoJXrs7Qg67Cb7JWE7Jik6rOgXHJcbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IHVzZXI/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gZGF0YS5pZCkgLy8g7Y+s7Iqk7Yq4IOyekeyEse2VnCDsgqzrnozrk6Qg7KSR7JeQIOuCtOqwgCDtjJTroZzsnJntlZwg7IKs656M65OkXHJcbiAgICBjb25zdCBpdGVtX2lkID0gMFxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRm9sbG93aW5nKSB7IC8vIOuCtOqwgCDtjJTroZzsnonsnYQg7ZWY6rOgIOyeiOuKlOuNsCDrsoTtirzsnYQg64iM66CA64ukXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtX2lkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGl0ZW1faWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpdGVtX2lkLCBpc0ZvbGxvd2luZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhIFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnfVxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW1faWQgPSBpdGVtLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxuICAgIC8vIHJldHVybiAoXHJcbiAgICAvLyAgICAgPExpc3QgXHJcbiAgICAvLyAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19XHJcbiAgICAvLyAgICAgICAgIGdyaWQ9e3tndXR0ZXI6IDQsIHhzOiAyLCBtZDogM319XHJcbiAgICAvLyAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAvLyAgICAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cclxuICAgIC8vICAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnfX0+PEJ1dHRvbj7rjZQg67O06riwPC9CdXR0b24+PC9kaXY+fVxyXG4gICAgLy8gICAgICAgICBib3JkZXJlZFxyXG4gICAgLy8gICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgLy8gICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgLy8gICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17e21hcmdpblRvcDoyMH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIi8+XX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAvLyAgICAgICAgICl9XHJcbiAgICAvLyAgICAgLz5cclxuICAgIC8vIClcclxufTtcclxuXHJcbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9