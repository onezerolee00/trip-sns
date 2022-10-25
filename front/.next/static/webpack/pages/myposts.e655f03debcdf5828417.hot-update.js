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
        id: shortId.generate(),
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
          id: shortId.generate(),
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
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "\uB0B4 \uAC8C\uC2DC\uAE00 | ")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(PostList, {
    myPosts: me.Posts,
    totalPosts: Posts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })));
};

_s(MyPosts, "dXV5Ddi7LLTWnG2eWiuuh7S2+8o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlwb3N0cy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU15RHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJUaXRsZSIsImZha2VyIiwibG9yZW0iLCJzZW50ZW5jZSIsIlVzZXIiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJuaWNrbmFtZSIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwiTXlQb3N0cyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJQb3N0cyIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxNQUFEO0VBQUEsT0FBWUMsS0FBSyxDQUFDRCxNQUFELENBQUwsQ0FBY0UsSUFBZCxHQUFxQkMsR0FBckIsQ0FBeUI7SUFBQSxPQUFPO01BQ3BFQyxFQUFFLEVBQUVKLE1BRGdFO01BRXBFSyxLQUFLLEVBQUVDLHFEQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFBWixFQUY2RDtNQUdwRUMsSUFBSSxFQUFFO1FBQ0ZMLEVBQUUsRUFBRU0sT0FBTyxDQUFDQyxRQUFSLEVBREY7UUFFRkMsUUFBUSxFQUFFTixxREFBSyxDQUFDTyxJQUFOLENBQVdDLFFBQVg7TUFGUixDQUg4RDtNQU9wRUMsT0FBTyxFQUFFVCxxREFBSyxDQUFDQyxLQUFOLENBQVlTLFNBQVosRUFQMkQ7TUFRcEVDLE1BQU0sRUFBRSxDQUFDO1FBQ0xDLEdBQUcsRUFBRVoscURBQUssQ0FBQ2EsS0FBTixDQUFZQSxLQUFaO01BREEsQ0FBRCxFQUVMO1FBQ0NELEdBQUcsRUFBRVoscURBQUssQ0FBQ2EsS0FBTixDQUFZQSxLQUFaO01BRE4sQ0FGSyxFQUlMO1FBQ0NELEdBQUcsRUFBRVoscURBQUssQ0FBQ2EsS0FBTixDQUFZQSxLQUFaO01BRE4sQ0FKSyxDQVI0RDtNQWVwRUMsUUFBUSxFQUFFLENBQUM7UUFDUFgsSUFBSSxFQUFFO1VBQ0ZMLEVBQUUsRUFBRU0sT0FBTyxDQUFDQyxRQUFSLEVBREY7VUFFRkMsUUFBUSxFQUFFTixxREFBSyxDQUFDTyxJQUFOLENBQVdDLFFBQVg7UUFGUixDQURDO1FBS1BDLE9BQU8sRUFBRVQscURBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFaO01BTEYsQ0FBRDtJQWYwRCxDQUFQO0VBQUEsQ0FBekIsQ0FBWjtBQUFBLENBQTVCOztBQXdCQSxJQUFNYSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0VBQUE7O0VBQ2xCLG1CQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUExQjtFQUFBLElBQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0VBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMzQixtQkFBbUIsQ0FBQyxDQUFELENBQXBCLEVBQXlCQSxtQkFBbUIsQ0FBQyxDQUFELENBQTVDLEVBQWlEQSxtQkFBbUIsQ0FBQyxDQUFELENBQXBFLEVBQXlFQSxtQkFBbUIsQ0FBQyxDQUFELENBQTVGLENBQWQ7RUFFQTRCLHVEQUFTLENBQUMsWUFBTTtJQUNaLElBQUksRUFBRUYsRUFBRSxJQUFJQSxFQUFFLENBQUNyQixFQUFYLENBQUosRUFBb0I7TUFDaEJ3Qiw4REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtJQUNIO0VBQ0osQ0FKUSxFQUlOLENBQUNKLEVBQUUsSUFBSUEsRUFBRSxDQUFDckIsRUFBVixDQUpNLENBQVQsQ0FKa0IsQ0FVbEI7O0VBQ0EsSUFBSSxDQUFDcUIsRUFBTCxFQUFTO0lBQ0wsT0FBTyxJQUFQO0VBQ0g7O0VBRUQsT0FDSSxtRUFDSSxNQUFDLGdEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGtDQURKLENBREosRUFJSSxNQUFDLDZEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSSxNQUFDLFFBQUQ7SUFBVSxPQUFPLEVBQUVBLEVBQUUsQ0FBQ0MsS0FBdEI7SUFBNkIsVUFBVSxFQUFFQSxLQUF6QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREosQ0FKSixDQURKO0FBVUgsQ0F6QkQ7O0dBQU1MLE87VUFDYUMsdUQ7OztLQURiRCxPO0FBMkJTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teXBvc3RzLmU2NTVmMDNkZWJjZGY1ODI4NDE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IGZha2VyIH0gZnJvbSAnQGZha2VyLWpzL2Zha2VyJztcclxuXHJcbmNvbnN0IGdlbmVyYXRlTXlEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBUaXRsZTogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKClcclxuICAgIH0sIHtcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKClcclxuICAgIH0sIHtcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKClcclxuICAgIH1dLFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSlcclxuXHJcbmNvbnN0IE15UG9zdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgUG9zdHMgPSBbZ2VuZXJhdGVNeUR1bW15UG9zdCgxKSwgZ2VuZXJhdGVNeUR1bW15UG9zdCgyKSwgZ2VuZXJhdGVNeUR1bW15UG9zdCgzKSwgZ2VuZXJhdGVNeUR1bW15UG9zdCg0KV1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICAgIC8vIOuhnOq3uOyduCDslYjtlZwg7IOB7YOc7JeQ7IScIO2UhOuhnO2VhCDtgbTrpq0g7JWI65CY6rKMXHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7rgrQg6rKM7Iuc6riAIHwgPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFBvc3RMaXN0IG15UG9zdHM9e21lLlBvc3RzfSB0b3RhbFBvc3RzPXtQb3N0c30vPlxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15UG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==