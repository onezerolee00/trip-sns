webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject,
    _templateObject2,
    _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Title = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 10px 10px;\n    font-weight: bold;\n"])));
_c = Title;
var Icons = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    dispaly: flex;\n    fontsize: 16px;\n    margin: 0px 10px;\n\n"])));
_c2 = Icons;

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      pictureOrRoute = _useState3[0],
      setPictureOrRoute = _useState3[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    }); //true를 false로 false를 true로 만드는 코드
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var id = me === null || me === void 0 ? void 0 : me.id;
  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      style: {
        margin: '0px 15px 0px 0px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, post.User.nickname[0]), post.User.nickname] //title={post.User.nickname}
    ,
    cover: [__jsx(Icons, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PictureOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["GlobalOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    })), __jsx(Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, '제목 : ' + post.Title), post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 39
      }
    })],
    actions: [//<RetweetOutlined key="retweet" />,
    liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 27
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 33
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 33
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 33
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }))],
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 30
      }
    }) // id : 내가 로그인 했을 때만 팔로우 버튼 보이기
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 34
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 45
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 33
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  })));
};

_s(PostCard, "ymtP1SqGmSg0qvdDtrrivL/LjW8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c3 = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2, _c3;

$RefreshReg$(_c, "Title");
$RefreshReg$(_c2, "Icons");
$RefreshReg$(_c3, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImRpdiIsIkljb25zIiwiUG9zdENhcmQiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJwaWN0dXJlT3JSb3V0ZSIsInNldFBpY3R1cmVPclJvdXRlIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50Iiwib25SZW1vdmVQb3N0IiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiaWQiLCJ1c2VyIiwibWUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJVc2VyIiwibmlja25hbWUiLCJJbWFnZXMiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDBEQUFNLENBQUNDLEdBQVYsaU1BQVg7S0FBTUYsSztBQUtOLElBQU1HLEtBQUssR0FBR0YsMERBQU0sQ0FBQ0MsR0FBVixxTkFBWDtNQUFNQyxLOztBQU9OLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7RUFBQTs7RUFBQSxJQUFYQyxJQUFXLFFBQVhBLElBQVc7RUFDM0IsSUFBTUMsUUFB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akJqQyxJQUFJLEVBQUVrQyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0lBQ2xCZCxFQUFFLEVBQUVhLGlEQUFTLENBQUNFLE1BREk7SUFFbEJWLElBQUksRUFBRVEsaURBQVMsQ0FBQ0csTUFGRTtJQUdsQlIsT0FBTyxFQUFFSyxpREFBUyxDQUFDSSxNQUhEO0lBSWxCQyxTQUFTLEVBQUVMLGlEQUFTLENBQUNHLE1BSkg7SUFLbEJQLFFBQVEsRUFBRUksaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMUTtJQU1sQlQsTUFBTSxFQUFFTSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtFQU5VLENBQWhCLEVBT0hJO0FBUmMsQ0FBckI7QUFXZTFDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhNjQ2M2E5YTQwZDk3MTlmYmEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBQb3BvdmVyLCBCdXR0b24sIEF2YXRhciwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBHbG9iYWxPdXRsaW5lZCwgUGljdHVyZU91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuXHJcbmNvbnN0IEljb25zID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BhbHk6IGZsZXg7XHJcbiAgICBmb250c2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgcmVtb3ZlUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BpY3R1cmVPclJvdXRlLCBzZXRQaWN0dXJlT3JSb3V0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KTsgLy90cnVl66W8IGZhbHNl66GcIGZhbHNl66W8IHRydWXroZwg66eM65Oc64qUIOy9lOuTnFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgaWQgPSBtZT8uaWQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XHJcbiAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1s8QXZhdGFyIHN0eWxlPXt7bWFyZ2luOicwcHggMTVweCAwcHggMHB4J319Pntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3QuVXNlci5uaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvL3RpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17WyBcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdsb2JhbE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29ucz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT57J+ygnOuqqSA6ICcgKyBwb3N0LlRpdGxlfTwvVGl0bGU+LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+LF19XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgLy88UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICBsaWtlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fSAvLyBpZCA6IOuCtOqwgCDroZzqt7jsnbgg7ZaI7J2EIOuVjOunjCDtjJTroZzsmrAg67KE7Yq8IOuztOydtOq4sFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9