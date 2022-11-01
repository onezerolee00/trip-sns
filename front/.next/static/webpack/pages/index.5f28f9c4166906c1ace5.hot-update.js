webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _PostRoutesForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostRoutesForm */ "./components/PostRoutesForm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isModalOpen = _useState[0],
      setIsModalOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isModal2Open = _useState2[0],
      setIsModal2Open = _useState2[1];

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      text = _useInput2[0],
      onChangeText = _useInput2[1],
      setText = _useInput2[2];

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var showModal = function showModal() {
    setIsModalOpen(true);
  };

  var showModal2 = function showModal2() {
    setIsModal2Open(true);
  };

  var handleOk = function handleOk() {
    setIsModalOpen(false);
  };

  var handleCancle = function handleCancle() {
    setIsModalOpen(false);
  };

  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      title = _useInput4[0],
      onChangeTitle = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      mainTexts = _useInput6[0],
      onChangeMainTexts = _useInput6[1];

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(title, mainTexts);
  }, [title, mainTexts]);

  var PostRoutesForms = function PostRoutesForms() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: "\uC5EC\uD589 \uB8E8\uD2B8",
      open: true,
      onOk: handleOk,
      onCancel: handleCancle,
      footer: [],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onFinish: onSubmitForm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }
    }, __jsx("input", {
      type: "file",
      multiple: true,
      hidden: true,
      ref: imageInput,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "add trip route",
      type: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 29
      }
    }, "\uC5EC\uD589 \uACBD\uB85C \uCD94\uAC00"), ",", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "post",
      type: "primary",
      htmlType: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }, "\uAC8C\uC2DC")))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    block: true,
    onClick: showModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "+ \uB0B4 \uC5EC\uD589 \uAC8C\uC2DC\uAE00 \uC791\uC131\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uAC8C\uC2DC\uAE00 \uC791\uC131\uD558\uAE30",
    open: isModalOpen,
    onOk: handleOk,
    onCancel: handleCancle,
    footer: [],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: title,
    onChange: onChangeTitle,
    style: {
      margin: '5px 0px'
    },
    placeholder: "\uAC8C\uC2DC\uAE00 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: mainTexts,
    style: {
      margin: '5px 0px'
    },
    onChange: onChangeMainTexts,
    maxLength: 140,
    placeholder: "\uAC8C\uC2DC\uAE00 \uBCF8\uBB38\uC744 \uC791\uC131\uD558\uC138\uC694.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "add trip route",
    type: "button",
    onClick: showModal2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, "\uC5EC\uD589 \uACBD\uB85C \uCD94\uAC00"), ",", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, "\uAC8C\uC2DC")))), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uC5EC\uD589 \uB8E8\uD2B8",
    open: isModal2Open,
    onOk: handleOk,
    onCancel: handleCancle,
    footer: [],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "add trip route",
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, "\uC5EC\uD589 \uACBD\uB85C \uCD94\uAC00"), ",", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, "\uAC8C\uC2DC")))))); // const { imagePaths, addPostDone } = useSelector((state) => state.post);
  // const dispatch = useDispatch();
  // const imageInput = useRef();
  // const [text, onChangeText, setText] = useInput('');
  // useEffect(() => {
  //     if (addPostDone) {
  //         setText('');
  //     }
  // }, [addPostDone]);
  // const onSubmit = useCallback(() => {
  //     dispatch(addPost(text));
  // }, [text]);
  // const onClickImageUpload = useCallback(()=> {
  //     imageInput.current.click();
  // }, [imageInput.current]);
  // return (
  //     <Form style={{margin: '10px 0 20px'}} encType='multipart/form-data' onFinish={onSubmit}>
  //         <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
  //         <div>
  //             <input type="file" multiple hidden ref={imageInput}/>
  //             <Button onClick={onClickImageUpload}>이미지 업로드</Button>
  //             <Button type="primary" style={{float: 'right'}} htmlType="submit">짹짹</Button>
  //         </div>
  //         <div>
  //             {imagePaths.map((v) => (
  //                 <div key={v} style={{display:'inline-block'}}>
  //                     <img src={v} style={{width:'200px'}} alt={v} />
  //                     <div>
  //                         <Button>제거</Button>
  //                     </div>
  //                 </div>
  //             ))}
  //         </div>
  //     </Form>
  // )
};

_s(PostForm, "LXJEZuFGRSTs56kO+I/ZNKK5seY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwidXNlU3RhdGUiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaXNNb2RhbDJPcGVuIiwic2V0SXNNb2RhbDJPcGVuIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJzaG93TW9kYWwiLCJzaG93TW9kYWwyIiwiaGFuZGxlT2siLCJoYW5kbGVDYW5jbGUiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsIm1haW5UZXh0cyIsIm9uQ2hhbmdlTWFpblRleHRzIiwib25TdWJtaXRGb3JtIiwiY29uc29sZSIsImxvZyIsIlBvc3RSb3V0ZXNGb3JtcyIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtFQUFBOztFQUNuQixtQkFBb0NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQS9DO0VBQUEsSUFBUUMsVUFBUixnQkFBUUEsVUFBUjtFQUFBLElBQW9CQyxXQUFwQixnQkFBb0JBLFdBQXBCOztFQUNBLGdCQUFzQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDO0VBQUEsSUFBT0MsV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFDQSxpQkFBd0NGLHNEQUFRLENBQUMsS0FBRCxDQUFoRDtFQUFBLElBQU9HLFlBQVA7RUFBQSxJQUFxQkMsZUFBckI7O0VBQ0Es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bEM7SUFBbUMsR0FBRyxFQUFFZCxVQUF4QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREEsRUFFQSxNQUFDLDJDQUFEO0lBQVEsT0FBTyxFQUFFTSxrQkFBakI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx1Q0FGQSxDQURKLENBREosRUFPSSxNQUFDLHlDQUFELENBQU0sSUFBTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQywyQ0FBRDtJQUFRLEdBQUcsRUFBQyxnQkFBWjtJQUE2QixJQUFJLEVBQUMsUUFBbEM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw0Q0FESixPQUVJLE1BQUMsMkNBQUQ7SUFBUSxHQUFHLEVBQUMsTUFBWjtJQUFtQixJQUFJLEVBQUMsU0FBeEI7SUFBa0MsUUFBUSxFQUFDLFFBQTNDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBRkosQ0FQSixDQVBKLENBREosQ0F4QkosQ0FESixDQWhFbUIsQ0F3SG5CO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUdBO0VBQ0E7RUFFQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSCxDQWhLRDs7R0FBTXJCLFE7VUFDa0NDLHVELEVBR0VVLHVELEVBd0JQQSx1RCxFQUNRQSx1RDs7O0tBN0JyQ1gsUTtBQWtLU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWYyOGY5YzQxNjY5MDZjMWFjZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IFBvc3RSb3V0ZXNGb3JtIGZyb20gJy4vUG9zdFJvdXRlc0Zvcm0nO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNNb2RhbDJPcGVuLCBzZXRJc01vZGFsMk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsMk9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYW5jbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+IHtcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIG9uQ2hhbmdlVGl0bGVdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW21haW5UZXh0cywgb25DaGFuZ2VNYWluVGV4dHNdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSwgbWFpblRleHRzKVxyXG4gICAgfSwgW3RpdGxlLCBtYWluVGV4dHNdKTtcclxuXHJcbiAgICBjb25zdCBQb3N0Um91dGVzRm9ybXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi7Jes7ZaJIOujqO2KuFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RydWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgIF19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT4rIOyCrOynhCDsl4XroZzrk5w8L0J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cImFkZCB0cmlwIHJvdXRlXCIgdHlwZT1cImJ1dHRvblwiPuyXrO2WiSDqsr3roZwg7LaU6rCAPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJwb3N0XCIgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqyjOyLnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICBcclxuICAgICAgICApXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGJsb2NrIG9uQ2xpY2s9e3Nob3dNb2RhbH0+KyDrgrQg7Jes7ZaJIOqyjOyLnOq4gCDsnpHshLHtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLqsozsi5zquIAg7J6R7ISx7ZWY6riwXCIgXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtpc01vZGFsT3Blbn0gXHJcbiAgICAgICAgICAgICAgICBvbk9rPXtoYW5kbGVPa30gXHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2xlfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+PElucHV0IHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9IHN0eWxlPXt7bWFyZ2luOiAnNXB4IDBweCd9fSBwbGFjZWhvbGRlcj1cIuqyjOyLnOq4gCDsoJzrqqnsnYQg7J6F66Cl7ZWY7IS47JqUXCIgLz48L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPjxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17bWFpblRleHRzfSBzdHlsZT17e21hcmdpbjogJzVweCAwcHgnfX0gb25DaGFuZ2U9e29uQ2hhbmdlTWFpblRleHRzfSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLqsozsi5zquIAg67O466y47J2EIOyekeyEse2VmOyEuOyalC5cIiAvPjwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9Pisg7IKs7KeEIOyXheuhnOuTnDwvQnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJhZGQgdHJpcCByb3V0ZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaG93TW9kYWwyfT7sl6ztlokg6rK966GcIOy2lOqwgDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJwb3N0XCIgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqyjOyLnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi7Jes7ZaJIOujqO2KuFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e2lzTW9kYWwyT3Blbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2t9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9Pisg7IKs7KeEIOyXheuhnOuTnDwvQnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiYWRkIHRyaXAgcm91dGVcIiB0eXBlPVwiYnV0dG9uXCI+7Jes7ZaJIOqyveuhnCDstpTqsIA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cInBvc3RcIiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+6rKM7IucPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICAgIC8vIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAvLyAgICAgICAgIHNldFRleHQoJycpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFthZGRQb3N0RG9uZV0pO1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vICAgICBkaXNwYXRjaChhZGRQb3N0KHRleHQpKTtcclxuXHJcbiAgICAvLyB9LCBbdGV4dF0pO1xyXG5cclxuICAgIC8vIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT4ge1xyXG4gICAgLy8gICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgLy8gfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8Rm9ybSBzdHlsZT17e21hcmdpbjogJzEwcHggMCAyMHB4J319IGVuY1R5cGU9J211bHRpcGFydC9mb3JtLWRhdGEnIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAvLyAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIC8+XHJcbiAgICAvLyAgICAgICAgIDxkaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fS8+XHJcbiAgICAvLyAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgLy8gICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuynueynuTwvQnV0dG9uPlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPGRpdj5cclxuICAgIC8vICAgICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodikgPT4gKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17e2Rpc3BsYXk6J2lubGluZS1ibG9jayd9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Z9IHN0eWxlPXt7d2lkdGg6JzIwMHB4J319IGFsdD17dn0gLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgKSl9XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgIDwvRm9ybT5cclxuICAgIC8vIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=