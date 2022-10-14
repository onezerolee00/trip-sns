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
var Icons = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    fontSize: 30px;\n    margin: 5px 10px;\n\n"])));
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
      style: {
        fontSize: '20px',
        color: '#9f9f9f'
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImRpdiIsIkljb25zIiwiUG9zdENhcmQiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJwaWN0dXJlT3JSb3V0ZSIsInNldFBpY3R1cmVPclJvdXRlIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50Iiwib25SZW1vdmVQb3N0IiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiaWQiLCJ1c2VyIiwibWUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJVc2VyIiwibmlja25hbWUiLCJmb250U2l6ZSIsImNvbG9yIiwiSW1hZ2VzIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywwREFBTSxDQUFDQyxHQUFWLGlNQUFYO0tBQU1GLEs7QUFLTixJQUFNRyxLQUFLLEdBQUdGLDBEQUFNLENBQUNDLEdBQVYscU5BQVg7TUFBTUMsSzs7QUFPTixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0VBQUE7O0VBQUEsSUFBWEMsSUFBVyxRQUFYQSxJ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RkQ7O0dBQU1oQyxRO1VBQ2VHLHVELEVBQ2FDLHVELEVBb0JmQSx1RDs7O01BdEJiSixRO0FBc0ZOQSxRQUFRLENBQUNvQyxTQUFULEdBQXFCO0VBQ2pCbkMsSUFBSSxFQUFFb0MsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtJQUNsQmhCLEVBQUUsRUFBRWUsaURBQVMsQ0FBQ0UsTUFESTtJQUVsQlosSUFBSSxFQUFFVSxpREFBUyxDQUFDRyxNQUZFO0lBR2xCUixPQUFPLEVBQUVLLGlEQUFTLENBQUNJLE1BSEQ7SUFJbEJDLFNBQVMsRUFBRUwsaURBQVMsQ0FBQ0csTUFKSDtJQUtsQlAsUUFBUSxFQUFFSSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQUxRO0lBTWxCVCxNQUFNLEVBQUVNLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCO0VBTlUsQ0FBaEIsRUFPSEk7QUFSYyxDQUFyQjtBQVdlNUMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmYyYjRlYjY4YmNlMzA0YmFiMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IENhcmQsIFBvcG92ZXIsIEJ1dHRvbiwgQXZhdGFyLCBMaXN0LCBDb21tZW50IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEdsb2JhbE91dGxpbmVkLCBQaWN0dXJlT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gJy4vRm9sbG93QnV0dG9uJztcclxuXHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbnMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnRTaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGljdHVyZU9yUm91dGUsIHNldFBpY3R1cmVPclJvdXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRMaWtlZCgocHJldikgPT4gIXByZXYpOyAvL3RydWXrpbwgZmFsc2XroZwgZmFsc2XrpbwgdHJ1ZeuhnCDrp4zrk5zripQg7L2U65OcXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBpZCA9IG1lPy5pZDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fT5cclxuICAgICAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17WzxBdmF0YXIgc3R5bGU9e3ttYXJnaW46JzBweCAxNXB4IDBweCAwcHgnfX0+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj4sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5Vc2VyLm5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGNvdmVyPXtbIFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY3R1cmVPdXRsaW5lZCBzdHlsZT17e2ZvbnRTaXplOiAnMjBweCcsIGNvbG9yOiAnIzlmOWY5Zid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iYWxPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbnM+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+eyfsoJzrqqkgOiAnICsgcG9zdC5UaXRsZX08L1RpdGxlPixcclxuICAgICAgICAgICAgICAgICAgICBwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPixdfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIC8vPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0vPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn0gLy8gaWQgOiDrgrTqsIAg66Gc6re47J24IO2WiOydhCDrlYzrp4wg7YyU66Gc7JqwIOuyhO2KvCDrs7TsnbTquLBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YSBcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==