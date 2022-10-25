webpackHotUpdate_N_E("pages/myposts",{

/***/ "./pages/myposts.js":
/*!**************************!*\
  !*** ./pages/myposts.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @faker-js/faker */ "./node_modules/@faker-js/faker/dist/esm/index.mjs");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostList */ "./components/PostList.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\pages\\myposts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var generateMyDummyPost = function generateMyDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: number,
      Title: _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__["faker"].lorem.sentence(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
        nickname: _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__["faker"].name.findName()
      },
      content: _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__["faker"].lorem.paragraph(),
      Images: [{
        src: _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__["faker"].image.image()
      }, {
        src: _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__["faker"].image.image()
      }, {
        src: _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__["faker"].image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_8___default.a.generate(),
          nickname: _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__["faker"].name.findName()
        },
        content: _faker_js_faker__WEBPACK_IMPORTED_MODULE_7__["faker"].lorem.sentence()
      }]
    };
  });
};

var MyPosts = function MyPosts() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  var Posts = [generateMyDummyPost(1), generateMyDummyPost(2), generateMyDummyPost(3), generateMyDummyPost(4)];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["Router"].push('/');
    }
  }, [me && me.id]); // 로그인 안한 상태에서 프로필 클릭 안되게

  if (!me) {
    return null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "\uB0B4 \uAC8C\uC2DC\uAE00 | ")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_components_PostList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    myPosts: me.Posts,
    totalPosts: Posts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })));
};

_s(MyPosts, "IOQN8fCFAbp85ejLa2P+yFs00E0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = MyPosts;
/* harmony default export */ __webpack_exports__["default"] = (MyPosts);

var _c;

$RefreshReg$(_c, "MyPosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlwb3N0cy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU15RHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJUaXRsZSIsImZha2VyIiwibG9yZW0iLCJzZW50ZW5jZSIsIlVzZXIiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJuaWNrbmFtZSIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwiTXlQb3N0cyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiUG9zdHMiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLE1BQUQ7RUFBQSxPQUFZQyxLQUFLLENBQUNELE1BQUQsQ0FBTCxDQUFjRSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QjtJQUFBLE9BQU87TUFDcEVDLEVBQUUsRUFBRUosTUFEZ0U7TUFFcEVLLEtBQUssRUFBRUMscURBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFaLEVBRjZEO01BR3BFQyxJQUFJLEVBQUU7UUFDRkwsRUFBRSxFQUFFTSw4Q0FBTyxDQUFDQyxRQUFSLEVBREY7UUFFRkMsUUFBUSxFQUFFTixxREFBSyxDQUFDTyxJQUFOLENBQVdDLFFBQVg7TUFGUixDQUg4RDtNQU9wRUMsT0FBTyxFQUFFVCxxREFBSyxDQUFDQyxLQUFOLENBQVlTLFNBQVosRUFQMkQ7TUFRcEVDLE1BQU0sRUFBRSxDQUFDO1FBQ0xDLEdBQUcsRUFBRVoscURBQUssQ0FBQ2EsS0FBTixDQUFZQSxLQUFaO01BREEsQ0FBRCxFQUVMO1FBQ0NELEdBQUcsRUFBRVoscURBQUssQ0FBQ2EsS0FBTixDQUFZQSxLQUFaO01BRE4sQ0FGSyxFQUlMO1FBQ0NELEdBQUcsRUFBRVoscURBQUssQ0FBQ2EsS0FBTixDQUFZQSxLQUFaO01BRE4sQ0FKSyxDQVI0RDtNQWVwRUMsUUFBUSxFQUFFLENBQUM7UUFDUFgsSUFBSSxFQUFFO1VBQ0ZMLEVBQUUsRUFBRU0sOENBQU8sQ0FBQ0MsUUFBUixFQURGO1VBRUZDLFFBQVEsRUFBRU4scURBQUssQ0FBQ08sSUFBTixDQUFXQyxRQUFYO1FBRlIsQ0FEQztRQUtQQyxPQUFPLEVBQUVULHFEQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFBWjtNQUxGLENBQUQ7SUFmMEQsQ0FBUDtFQUFBLENBQXpCLENBQVo7QUFBQSxDQUE1Qjs7QUF3QkEsSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtFQUFBOztFQUNsQixtQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztFQUNBLG9CQUFzQkgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtFQUFBLENBQUQsQ0FBakM7RUFBQSxJQUFRQyxTQUFSLGlCQUFRQSxTQUFSOztFQUNBLElBQU1DLEtBQUssR0FBRyxDQUFDN0IsbUJBQW1CLENBQUMsQ0FBRCxDQUFwQixFQUF5QkEsbUJBQW1CLENBQUMsQ0FBRCxDQUE1QyxFQUFpREEsbUJBQW1CLENBQUMsQ0FBRCxDQUFwRSxFQUF5RUEsbUJBQW1CLENBQUMsQ0FBRCxDQUE1RixDQUFkO0VBRUE4Qix1REFBUyxDQUFDLFlBQU07SUFDWixJQUFJLEVBQUVKLEVBQUUsSUFBSUEsRUFBRSxDQUFDckIsRUFBWCxDQUFKLEVBQW9CO01BQ2hCMEIsOERBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7SUFDSDtFQUNKLENBSlEsRUFJTixDQUFDTixFQUFFLElBQUlBLEVBQUUsQ0FBQ3JCLEVBQVYsQ0FKTSxDQUFULENBTGtCLENBV2xCOztFQUNBLElBQUksQ0FBQ3FCLEVBQUwsRUFBUztJQUNMLE9BQU8sSUFBUDtFQUNIOztFQUVELE9BQ0ksbUVBQ0ksTUFBQyxnREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0k7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxrQ0FESixDQURKLEVBSUksTUFBQyw2REFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQyw0REFBRDtJQUFVLE9BQU8sRUFBRUEsRUFBRSxDQUFDRyxLQUF0QjtJQUE2QixVQUFVLEVBQUVBLEtBQXpDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFESixDQUpKLENBREo7QUFVSCxDQTFCRDs7R0FBTVAsTztVQUNhQyx1RCxFQUNPQSx1RDs7O0tBRnBCRCxPO0FBNEJTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teXBvc3RzLjRjNTM1YTM2MmViMjNlOTJiMjdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IGZha2VyIH0gZnJvbSAnQGZha2VyLWpzL2Zha2VyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RMaXN0JztcclxuXHJcbmNvbnN0IGdlbmVyYXRlTXlEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBUaXRsZTogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKClcclxuICAgIH0sIHtcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKClcclxuICAgIH0sIHtcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKClcclxuICAgIH1dLFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSlcclxuXHJcbmNvbnN0IE15UG9zdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBQb3N0cyA9IFtnZW5lcmF0ZU15RHVtbXlQb3N0KDEpLCBnZW5lcmF0ZU15RHVtbXlQb3N0KDIpLCBnZW5lcmF0ZU15RHVtbXlQb3N0KDMpLCBnZW5lcmF0ZU15RHVtbXlQb3N0KDQpXVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lICYmIG1lLmlkXSk7XHJcblxyXG4gICAgLy8g66Gc6re47J24IOyViO2VnCDsg4Htg5zsl5DshJwg7ZSE66Gc7ZWEIO2BtOumrSDslYjrkJjqsoxcclxuICAgIGlmICghbWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPuuCtCDqsozsi5zquIAgfCA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8UG9zdExpc3QgbXlQb3N0cz17bWUuUG9zdHN9IHRvdGFsUG9zdHM9e1Bvc3RzfS8+XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlQb3N0czsiXSwic291cmNlUm9vdCI6IiJ9