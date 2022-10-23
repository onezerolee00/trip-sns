webpackHotUpdate_N_E("pages/following",{

/***/ "./components/FollowButtonInList.js":
/*!******************************************!*\
  !*** ./components/FollowButtonInList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\FollowButtonInList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var FollowButtonInList = function FollowButtonInList(_ref) {
  _s();

  var item = _ref.item;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading; // 리덕스에서 내 정보 받아오고


  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === item.id;
  }); // 포스트 작성한 사람들 중에 내가 팔로윙한 사람들

  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      // 내가 팔로잉을 하고 있는데 버튼을 눌렀다
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: item.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: item.id
      });
    }
  }, [isFollowing]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, isFollowing ? '언팔로우' : '팔로우');
};

_s(FollowButtonInList, "oQRGZ4+MgpAjZ6p1zzrPk3lOofY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FollowButtonInList;
FollowButtonInList.propTypes = {
  // object말고 shape가 더 좋은 코드이니 여러분은 shape로 하세요
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButtonInList);

var _c;

$RefreshReg$(_c, "FollowButtonInList");

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
  var user = _ref.user,
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
      }), __jsx(_FollowButtonInList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b25Jbkxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcyJdLCJuYW1lcyI6WyJGb2xsb3dCdXR0b25Jbkxpc3QiLCJpdGVtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIm9uQ2xpY2tCdXR0b24iLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiZGF0YSIsIkZPTExPV19SRVFVRVNUIiwicHJvcFR5cGVzIiwicG9zdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJGb2xsb3dMaXN0Iiwibmlja25hbWUiLCJoZWFkZXIiLCJzdHJpbmciLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBYztFQUFBOztFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztFQUNyQyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUNBLG1CQUErQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBMUQ7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSO0VBQUEsSUFBWUMsYUFBWixnQkFBWUEsYUFBWjtFQUFBLElBQTJCQyxlQUEzQixnQkFBMkJBLGVBQTNCLENBRnFDLENBRThDOzs7RUFDbkYsSUFBTUMsV0FBVyxHQUFHSCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRUksVUFBSixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLENBQUQ7SUFBQSxPQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU2IsSUFBSSxDQUFDYSxFQUFyQjtFQUFBLENBQXBCLENBQXBCLENBSHFDLENBRzRCOztFQUNqRSxJQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNwQyxJQUFJTixXQUFKLEVBQWlCO01BQUU7TUFDZlIsUUFBUSxDQUFDO1FBQ0xlLElBQUksRUFBRUMsK0RBREQ7UUFFTEMsSUFBSSxFQUFFbEIsSUFBSSxDQUFDYTtNQUZOLENBQUQsQ0FBUjtJQUlILENBTEQsTUFLTztNQUNIWixRQUFRLENBQUM7UUFDTGUsSUFBSSxFQUFFRyw2REFERDtRQUVMRCxJQUFJLEVBQUVsQixJQUFJLENBQUNhO01BRk4sQ0FBRCxDQUFSO0lBSUg7RUFDSixDQVpnQyxFQVk5QixDQUFDSixXQUFELENBWjhCLENBQWpDO0VBY0EsT0FDSSxNQUFDLDJDQUFEO0lBQVEsT0FBTyxFQUFFRixhQUFhLElBQUlDLGVBQWxDO0lBQW1ELE9BQU8sRUFBRU0sYUFBNUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNLTCxXQUFXLEdBQUcsTUFBSCxHQUFZLEtBRDVCLENBREo7QUFLSCxDQXZCRDs7R0FBTVYsa0I7VUFDZUcsdUQsRUFDOEJDLHVEOzs7S0FGN0NKLGtCO0FBeUJOQSxrQkFBa0IsQ0FBQ3FCLFNBQW5CLEdBQStCO0VBQzNCO0VBQ0FDLElBQUksRUFBRUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFGSSxDQUEvQjtBQUtlekIsaUZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNMEIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7RUFBQSxJQUFoQnBCLElBQWdCLFFBQWhCQSxJQUFnQjtFQUFBLElBQVZhLElBQVUsUUFBVkEsSUFBVTtFQUVqQyxPQUNJLE1BQUMseUNBQUQ7SUFDSSxRQUFRLE1BRFo7SUFFSSxVQUFVLEVBQUMsWUFGZjtJQUdJLFVBQVUsRUFBRUEsSUFIaEI7SUFJSSxVQUFVLEVBQUUsb0JBQUNsQixJQUFEO01BQUEsT0FDUixNQUFDLHlDQUFELENBQU0sSUFBTjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO1FBQ0EsTUFBTSxFQUFFLE1BQUMsMkNBQUQ7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxHQUFTQSxJQUFJLENBQUMwQixRQUFMLENBQWMsQ0FBZCxDQUFULENBRFI7UUFFQSxLQUFLLEVBQUUxQixJQUFJLENBQUMwQixRQUZaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFESixFQUtJLE1BQUMsMkRBQUQ7UUFBb0IsSUFBSSxFQUFFMUIsSUFBMUI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUxKLENBRFE7SUFBQSxDQUpoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREosQ0FGaUMsQ0FrQmpDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNILENBcENEOztLQUFNeUIsVTtBQXNDTkEsVUFBVSxDQUFDTCxTQUFYLEdBQXVCO0VBQ25CTyxNQUFNLEVBQUVMLGlEQUFTLENBQUNNLE1BQVYsQ0FBaUJKLFVBRE47RUFFbkJOLElBQUksRUFBRUksaURBQVMsQ0FBQ08sS0FBVixDQUFnQkw7QUFGSCxDQUF2QjtBQUtlQyx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb2xsb3dpbmcuZjI2ZWU4OTY1YjQzNmM2ODg2NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbkluTGlzdCA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSwgZm9sbG93TG9hZGluZywgdW5mb2xsb3dMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpOyAvLyDrpqzrjZXsiqTsl5DshJwg64K0IOygleuztCDrsJvslYTsmKTqs6BcclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gaXRlbS5pZCkgLy8g7Y+s7Iqk7Yq4IOyekeyEse2VnCDsgqzrnozrk6Qg7KSR7JeQIOuCtOqwgCDtjJTroZzsnJntlZwg7IKs656M65OkXHJcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0ZvbGxvd2luZykgeyAvLyDrgrTqsIAg7YyU66Gc7J6J7J2EIO2VmOqzoCDsnojripTrjbAg67KE7Yq87J2EIOuIjOuggOuLpFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaXRlbS5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNGb2xsb3dpbmddKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAgICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Gb2xsb3dCdXR0b25Jbkxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgLy8gb2JqZWN066eQ6rOgIHNoYXBl6rCAIOuNlCDsoovsnYAg7L2U65Oc7J2064uIIOyXrOufrOu2hOydgCBzaGFwZeuhnCDtlZjshLjsmpRcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbkluTGlzdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uSW5MaXN0IGZyb20gJy4vRm9sbG93QnV0dG9uSW5MaXN0JztcclxuXHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHt1c2VyLCBkYXRhfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhIFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9sbG93QnV0dG9uSW5MaXN0IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8TGlzdCBcclxuICAgIC8vICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX1cclxuICAgIC8vICAgICAgICAgZ3JpZD17e2d1dHRlcjogNCwgeHM6IDIsIG1kOiAzfX1cclxuICAgIC8vICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgIC8vICAgICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgLy8gICAgICAgICBsb2FkTW9yZT17PGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9fT48QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XHJcbiAgICAvLyAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAvLyAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAvLyAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAvLyAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7bWFyZ2luVG9wOjIwfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiLz5dfT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAvLyAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgIC8vICAgICAgICAgKX1cclxuICAgIC8vICAgICAvPlxyXG4gICAgLy8gKVxyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9