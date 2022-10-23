webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\UserProfile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var UserProfile = function UserProfile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      logOutLoading = _useSelector.logOutLoading;

  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, me.nickname[0]),
    title: me.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    loading: logOutLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    theme: "white",
    mode: "inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(Link, {
    href: "/following",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 28
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 52
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    key: "follwings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 55
    }
  }), " \uD314\uB85C\uC789 ", me.Followings.length))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["TeamOutlined"], {
    key: "follwings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 28
    }
  }), " \uD314\uB85C\uC6CC ", me.Followers.length), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SolutionOutlined"], {
    key: "twit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 28
    }
  }), " \uAC8C\uC2DC\uAE00 ", me.Posts.length), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
    key: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 28
    }
  }), " \uB313\uAE00"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["BookOutlined"], {
    key: "scraps",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 28
    }
  }), " \uC800\uC7A5\uB428"))) //<Link href="/profile"><a>
  // <Card
  //     actions={[
  //         <div key="twit">짹짹<br />{me.Posts.length}</div>,
  //         <div key="follwings">팔로잉<br />{me.Followings.length}</div>,
  //         <div key="follwings">팔로워<br />{me.Followers.length}</div>,
  //     ]}>
  //     <Card.Meta 
  //         avatar={<Avatar>{me.nickname[0]}</Avatar>}
  //         title={me.nickname}/>
  //         <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
  // </Card>
  ;
};

_s(UserProfile, "vyrowHTqhqIO66L5UXqqoOurJQ4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9nT3V0TG9hZGluZyIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwibmlja25hbWUiLCJGb2xsb3dpbmdzIiwibGVuZ3RoIiwiRm9sbG93ZXJzIiwiUG9zdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07RUFBQTs7RUFDdEIsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7RUFDQSxtQkFBOEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQXpDO0VBQUEsSUFBUUMsRUFBUixnQkFBUUEsRUFBUjtFQUFBLElBQVlDLGFBQVosZ0JBQVlBLGFBQVo7O0VBRUEsSUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDL0JSLFFBQVEsQ0FBQztNQUNMUyxJQUFJLEVBQUVDLDhEQUFlQTtJQURoQixDQUFELENBQVI7RUFHSCxDQUoyQixFQUl6QixFQUp5QixDQUE1QjtFQUtBLE9BQ0ksTUFBQyx5Q0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRUksTUFBQyx5Q0FBRCxDQUFNLElBQU47SUFDSSxNQUFNLEVBQUUsTUFBQywyQ0FBRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQVNMLEVBQUUsQ0FBQ00sUUFBSCxDQUFZLENBQVosQ0FBVCxDQURaO0lBRUksS0FBSyxFQUFFTixFQUFFLENBQUNNLFFBRmQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZKLEVBS1EsTUFBQywyQ0FBRDtJQUFRLE9BQU8sRUFBRUosUUFBakI7SUFBMkIsT0FBTyxFQUFFRCxhQUFwQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUxSLEVBT0ksTUFBQyx5Q0FBRDtJQUFNLEtBQUssRUFBQyxPQUFaO0lBQW9CLElBQUksRUFBQyxRQUF6QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFXLE1BQUMsSUFBRDtJQUFNLElBQUksRUFBQyxZQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBd0I7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFHLE1BQUMsK0RBQUQ7SUFBZSxHQUFHLEVBQUMsV0FBbkI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFILDBCQUF5Q0QsRUFBRSxDQUFDTyxVQUFILENBQWNDLE1BQXZELENBQXhCLENBQVgsQ0FESixFQUVJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBVyxNQUFDLDhEQUFEO0lBQWMsR0FBRyxFQUFDLFdBQWxCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBWCwwQkFBZ0RSLEVBQUUsQ0FBQ1MsU0FBSCxDQUFhRCxNQUE3RCxDQUZKLEVBR0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFXLE1BQUMsa0VBQUQ7SUFBa0IsR0FBRyxFQUFDLE1BQXRCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBWCwwQkFBK0NSLEVBQUUsQ0FBQ1UsS0FBSCxDQUFTRixNQUF4RCxDQUhKLEVBSUksTUFBQyx5Q0FBRCxDQUFNLElBQU47SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFXLE1BQUMsaUVBQUQ7SUFBaUIsR0FBRyxFQUFDLFVBQXJCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBWCxrQkFKSixFQUtJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBVyxNQUFDLDhEQUFEO0lBQWMsR0FBRyxFQUFDLFFBQWxCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBWCx3QkFMSixDQVBKLENBREosQ0FnQkk7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBM0JKO0FBNkJILENBdENEOztHQUFNZCxXO1VBQ2VFLHVELEVBQ2FDLHVEOzs7S0FGNUJILFc7QUF3Q1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuY2ZiMDk5YTJmMDAzYjhiMzhlNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCwgQnV0dG9uLCBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGVhbU91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFNvbHV0aW9uT3V0bGluZWQsIEJvb2tPdXRsaW5lZCAgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSwgbG9nT3V0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgZmxleC13cmFwOiBub3dyYXBcIj4gKi99XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fSBsb2FkaW5nPXtsb2dPdXRMb2FkaW5nfT7roZzqt7jslYTsm4M8L0J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPE1lbnUgdGhlbWU9J3doaXRlJyBtb2RlPVwiaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPjxMaW5rIGhyZWY9XCIvZm9sbG93aW5nXCI+PGE+PEhlYXJ0T3V0bGluZWQga2V5PVwiZm9sbHdpbmdzXCIvPiDtjJTroZzsnokge21lLkZvbGxvd2luZ3MubGVuZ3RofTwvYT48L0xpbms+PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPjxUZWFtT3V0bGluZWQga2V5PVwiZm9sbHdpbmdzXCIvPiDtjJTroZzsm4wge21lLkZvbGxvd2Vycy5sZW5ndGh9PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPjxTb2x1dGlvbk91dGxpbmVkIGtleT1cInR3aXRcIi8+IOqyjOyLnOq4gCB7bWUuUG9zdHMubGVuZ3RofTwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT48TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRzXCIvPiDrjJPquIA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+PEJvb2tPdXRsaW5lZCBrZXk9XCJzY3JhcHNcIi8+IOyggOyepeuQqDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIC8vPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGE+XHJcbiAgICAgICAgLy8gPENhcmRcclxuICAgICAgICAvLyAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgIC8vICAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+7Ke57Ke5PGJyIC8+e21lLlBvc3RzLmxlbmd0aH08L2Rpdj4sXHJcbiAgICAgICAgLy8gICAgICAgICA8ZGl2IGtleT1cImZvbGx3aW5nc1wiPu2MlOuhnOyeiTxiciAvPnttZS5Gb2xsb3dpbmdzLmxlbmd0aH08L2Rpdj4sXHJcbiAgICAgICAgLy8gICAgICAgICA8ZGl2IGtleT1cImZvbGx3aW5nc1wiPu2MlOuhnOybjDxiciAvPnttZS5Gb2xsb3dlcnMubGVuZ3RofTwvZGl2PixcclxuICAgICAgICAvLyAgICAgXX0+XHJcbiAgICAgICAgLy8gICAgIDxDYXJkLk1ldGEgXHJcbiAgICAgICAgLy8gICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX0vPlxyXG4gICAgICAgIC8vICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICAgICAgLy8gPC9DYXJkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=