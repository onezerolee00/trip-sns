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
  var onTogglePictureOrRoute = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setPictureOrRoute(function (prev) {
      return !prev;
    });
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
      lineNumber: 56,
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
        lineNumber: 58,
        columnNumber: 25
      }
    }, post.User.nickname[0]), post.User.nickname] //title={post.User.nickname}
    ,
    cover: [__jsx(Icons, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, pictureOrRoute ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PictureTwoTone"], {
      twoToneColor: "#eb2f96",
      style: {
        fontSize: '20px',
        color: '#9f9f9f'
      },
      onClick: onTogglePictureOrRoute,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PictureOutlined"], {
      style: {
        fontSize: '20px',
        color: '#9f9f9f'
      },
      onClick: onTogglePictureOrRoute,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 26
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["GlobalOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    })), __jsx(Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, '제목 : ' + post.Title), post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
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
        lineNumber: 74,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 33
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 33
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 33
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }))],
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 30
      }
    }) // id : 내가 로그인 했을 때만 팔로우 버튼 보이기
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 34
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
          lineNumber: 104,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 45
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 33
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  })));
};

_s(PostCard, "H4cIegrJx1Bs0qokzawM2/lNZXs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImRpdiIsIkljb25zIiwiUG9zdENhcmQiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJwaWN0dXJlT3JSb3V0ZSIsInNldFBpY3R1cmVPclJvdXRlIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVQaWN0dXJlT3JSb3V0ZSIsIm9uVG9nZ2xlQ29tbWVudCIsIm9uUmVtb3ZlUG9zdCIsInR5cGUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiZGF0YSIsImlkIiwidXNlciIsIm1lIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwiVXNlciIsIm5pY2tuYW1lIiwiZm9udFNpemUiLCJjb2xvciIsIkltYWdlcyIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsMERBQU0sQ0FBQ0MsR0FBVixpTUFBWDtLQUFNRixLO0FBS04sSUFBTUcsS0FBSyxHQUFHRiwwREFBTSxDQUFDQyxHQUFWLHFOQUFYO01BQU1DLEs7O0FBT04sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztFQUFB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LE9BQ1I7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNJLE1BQUMsNENBQUQ7UUFDSSxNQUFNLEVBQUVBLElBQUksQ0FBQ1IsSUFBTCxDQUFVQyxRQUR0QjtRQUVJLE1BQU0sRUFBRSxNQUFDLDJDQUFEO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FBU08sSUFBSSxDQUFDUixJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBVCxDQUZaO1FBR0ksT0FBTyxFQUFFTyxJQUFJLENBQUNILE9BSGxCO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFESixDQURRO0lBQUEsQ0FKaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZKLENBekNSLENBREo7QUE4REgsQ0ExRkQ7O0dBQU1qQyxRO1VBQ2VHLHVELEVBQ2FDLHVELEVBd0JmQSx1RDs7O01BMUJiSixRO0FBNEZOQSxRQUFRLENBQUNxQyxTQUFULEdBQXFCO0VBQ2pCcEMsSUFBSSxFQUFFcUMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtJQUNsQmhCLEVBQUUsRUFBRWUsaURBQVMsQ0FBQ0UsTUFESTtJQUVsQlosSUFBSSxFQUFFVSxpREFBUyxDQUFDRyxNQUZFO0lBR2xCUixPQUFPLEVBQUVLLGlEQUFTLENBQUNJLE1BSEQ7SUFJbEJDLFNBQVMsRUFBRUwsaURBQVMsQ0FBQ0csTUFKSDtJQUtsQlAsUUFBUSxFQUFFSSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQUxRO0lBTWxCVCxNQUFNLEVBQUVNLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCO0VBTlUsQ0FBaEIsRUFPSEk7QUFSYyxDQUFyQjtBQVdlN0MsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2FkMjM5NDM1NTRmMGQ1OWE2MGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IENhcmQsIFBvcG92ZXIsIEJ1dHRvbiwgQXZhdGFyLCBMaXN0LCBDb21tZW50IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFBpY3R1cmVUd29Ub25lLCBHbG9iYWxPdXRsaW5lZCwgUGljdHVyZU91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuXHJcbmNvbnN0IEljb25zID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250U2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgcmVtb3ZlUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BpY3R1cmVPclJvdXRlLCBzZXRQaWN0dXJlT3JSb3V0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KTsgLy90cnVl66W8IGZhbHNl66GcIGZhbHNl66W8IHRydWXroZwg66eM65Oc64qUIOy9lOuTnFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlUGljdHVyZU9yUm91dGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0UGljdHVyZU9yUm91dGUoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGlkID0gbWU/LmlkO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19PlxyXG4gICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtbPEF2YXRhciBzdHlsZT17e21hcmdpbjonMHB4IDE1cHggMHB4IDBweCd9fT57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPixcclxuICAgICAgICAgICAgICAgICAgICBwb3N0LlVzZXIubmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgLy90aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgY292ZXI9e1sgXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGljdHVyZU9yUm91dGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPFBpY3R1cmVUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBzdHlsZT17e2ZvbnRTaXplOiAnMjBweCcsIGNvbG9yOiAnIzlmOWY5ZicgfX0gb25DbGljaz17b25Ub2dnbGVQaWN0dXJlT3JSb3V0ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjxQaWN0dXJlT3V0bGluZWQgc3R5bGU9e3tmb250U2l6ZTogJzIwcHgnLCBjb2xvcjogJyM5ZjlmOWYnfX0gb25DbGljaz17b25Ub2dnbGVQaWN0dXJlT3JSb3V0ZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdsb2JhbE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29ucz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT57J+ygnOuqqSA6ICcgKyBwb3N0LlRpdGxlfTwvVGl0bGU+LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+LF19XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgLy88UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICBsaWtlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fSAvLyBpZCA6IOuCtOqwgCDroZzqt7jsnbgg7ZaI7J2EIOuVjOunjCDtjJTroZzsmrAg67KE7Yq8IOuztOydtOq4sFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9