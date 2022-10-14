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
/* harmony import */ var _PostRoutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PostRoutes */ "./components/PostRoutes.js");


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
      lineNumber: 57,
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
        lineNumber: 59,
        columnNumber: 25
      }
    }, post.User.nickname[0]), post.User.nickname] //title={post.User.nickname}
    ,
    cover: [__jsx(Icons, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, pictureOrRoute ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PictureTwoTone"], {
      twoToneColor: "#9c9c9c",
      style: {
        fontSize: '25px',
        color: '#9f9f9f',
        margin: '5px 5px 0px 0px'
      },
      onClick: onTogglePictureOrRoute,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["PictureOutlined"], {
      style: {
        fontSize: '25px',
        color: '#9f9f9f',
        margin: '5px 5px 0px 0px'
      },
      onClick: onTogglePictureOrRoute,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 26
      }
    }), pictureOrRoute ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ScheduleOutlined"], {
      style: {
        fontSize: '25px',
        color: '#9f9f9f',
        margin: '5px 5px 0px 0px'
      },
      onClick: onTogglePictureOrRoute,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ScheduleTwoTone"], {
      twoToneColor: "#9c9c9c",
      style: {
        fontSize: '25px',
        color: '#9f9f9f',
        margin: '5px 5px 0px 0px'
      },
      onClick: onTogglePictureOrRoute,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 27
      }
    })), __jsx(Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, '제목 : ' + post.Title), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, pictureOrRoute ? post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 45
      }
    }) : __jsx(_PostRoutes__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 27
      }
    }))],
    actions: [//<RetweetOutlined key="retweet" />,
    liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 27
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 33
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 33
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 33
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }))],
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 30
      }
    }) // id : 내가 로그인 했을 때만 팔로우 버튼 보이기
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    description: pictureOrRoute ? __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }) : __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 27
      }
    }, "\uC548"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
          lineNumber: 115,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 45
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 33
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImRpdiIsIkljb25zIiwiUG9zdENhcmQiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJwaWN0dXJlT3JSb3V0ZSIsInNldFBpY3R1cmVPclJvdXRlIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVQaWN0dXJlT3JSb3V0ZSIsIm9uVG9nZ2xlQ29tbWVudCIsIm9uUmVtb3ZlUG9zdCIsInR5cGUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiZGF0YSIsImlkIiwidXNlciIsIm1lIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwiVXNlciIsIm5pY2tuYW1lIiwiZm9udFNpemUiLCJjb2xvciIsIkltYWdlcyIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsMERBQU0sQ0FBQ0MsR0FBVixpTUFBWDtLQUFNRixLO0FBS04sSUFBTUcsS0FBSyxHQUFHRiwwREFBTSxDQUFDQyxHQUFWLHFOQUFYO01BQU1DLEs7O0FBT04sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FB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d0VILENBcEdEOztHQUFNakMsUTtVQUNlRyx1RCxFQUNhQyx1RCxFQXdCZkEsdUQ7OztNQTFCYkosUTtBQXNHTkEsUUFBUSxDQUFDcUMsU0FBVCxHQUFxQjtFQUNqQnBDLElBQUksRUFBRXFDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7SUFDbEJoQixFQUFFLEVBQUVlLGlEQUFTLENBQUNFLE1BREk7SUFFbEJaLElBQUksRUFBRVUsaURBQVMsQ0FBQ0csTUFGRTtJQUdsQlIsT0FBTyxFQUFFSyxpREFBUyxDQUFDSSxNQUhEO0lBSWxCQyxTQUFTLEVBQUVMLGlEQUFTLENBQUNHLE1BSkg7SUFLbEJQLFFBQVEsRUFBRUksaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMUTtJQU1sQlQsTUFBTSxFQUFFTSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtFQU5VLENBQWhCLEVBT0hJO0FBUmMsQ0FBckI7QUFXZTdDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk0MjQ3ZWI4ODUwNGU2NTU0MzhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBQb3BvdmVyLCBCdXR0b24sIEF2YXRhciwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBQaWN0dXJlVHdvVG9uZSwgU2NoZWR1bGVPdXRsaW5lZCwgU2NoZWR1bGVUd29Ub25lLCBQaWN0dXJlT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gJy4vRm9sbG93QnV0dG9uJztcclxuXHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQb3N0Um91dGVzIGZyb20gJy4vUG9zdFJvdXRlcyc7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbnMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnRTaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGljdHVyZU9yUm91dGUsIHNldFBpY3R1cmVPclJvdXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRMaWtlZCgocHJldikgPT4gIXByZXYpOyAvL3RydWXrpbwgZmFsc2XroZwgZmFsc2XrpbwgdHJ1ZeuhnCDrp4zrk5zripQg7L2U65OcXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVQaWN0dXJlT3JSb3V0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRQaWN0dXJlT3JSb3V0ZSgocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgaWQgPSBtZT8uaWQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XHJcbiAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1s8QXZhdGFyIHN0eWxlPXt7bWFyZ2luOicwcHggMTVweCAwcHggMHB4J319Pntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3QuVXNlci5uaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvL3RpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17WyBcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwaWN0dXJlT3JSb3V0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8UGljdHVyZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiIzljOWM5Y1wiIHN0eWxlPXt7Zm9udFNpemU6ICcyNXB4JywgY29sb3I6ICcjOWY5ZjlmJywgbWFyZ2luOiAnNXB4IDVweCAwcHggMHB4J319IG9uQ2xpY2s9e29uVG9nZ2xlUGljdHVyZU9yUm91dGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8UGljdHVyZU91dGxpbmVkIHN0eWxlPXt7Zm9udFNpemU6ICcyNXB4JywgY29sb3I6ICcjOWY5ZjlmJywgbWFyZ2luOiAnNXB4IDVweCAwcHggMHB4J319IG9uQ2xpY2s9e29uVG9nZ2xlUGljdHVyZU9yUm91dGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwaWN0dXJlT3JSb3V0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8U2NoZWR1bGVPdXRsaW5lZCBzdHlsZT17e2ZvbnRTaXplOiAnMjVweCcsIGNvbG9yOiAnIzlmOWY5ZicsIG1hcmdpbjogJzVweCA1cHggMHB4IDBweCd9fSBvbkNsaWNrPXtvblRvZ2dsZVBpY3R1cmVPclJvdXRlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPFNjaGVkdWxlVHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjOWM5YzljXCIgc3R5bGU9e3tmb250U2l6ZTogJzI1cHgnLCBjb2xvcjogJyM5ZjlmOWYnICwgbWFyZ2luOiAnNXB4IDVweCAwcHggMHB4JyB9fSBvbkNsaWNrPXtvblRvZ2dsZVBpY3R1cmVPclJvdXRlfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25zPixcclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+eyfsoJzrqqkgOiAnICsgcG9zdC5UaXRsZX08L1RpdGxlPixcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGljdHVyZU9yUm91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxQb3N0Um91dGVzIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIC8vPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0vPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn0gLy8gaWQgOiDrgrTqsIAg66Gc6re47J24IO2WiOydhCDrlYzrp4wg7YyU66Gc7JqwIOuyhO2KvCDrs7TsnbTquLBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YSBcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cGljdHVyZU9yUm91dGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXY+7JWIPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9