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
  var RangePicker = antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"].RangePicker;

  var showModal = function showModal() {
    setIsModalOpen(true);
  };

  var showModal2 = function showModal2() {
    setIsModal2Open(true);
  };

  var handleOk = function handleOk() {
    setIsModalOpen(false);
  };

  var handleOk2 = function handleOk2() {
    setIsModal2Open(false);
  };

  var handleCancle = function handleCancle() {
    setIsModalOpen(false);
  };

  var handleCancle2 = function handleCancle2() {
    setIsModal2Open(false);
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
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onFinish: onSubmitForm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 66,
        columnNumber: 29
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "add trip route",
      type: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, "\uC5EC\uD589 \uACBD\uB85C \uCD94\uAC00"), ",", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "post",
      type: "primary",
      htmlType: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
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
      lineNumber: 84,
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
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 93,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 94,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "add trip route",
    type: "button",
    onClick: showModal2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, "\uC5EC\uD589 \uACBD\uB85C \uCD94\uAC00"), ",", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "\uAC8C\uC2DC")))), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uC5EC\uD589 \uB8E8\uD2B8",
    open: isModal2Open,
    onOk: handleOk2,
    onCancel: handleCancle2,
    footer: [],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, __jsx(RangePicker, {
    size: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwidXNlU3RhdGUiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaXNNb2RhbDJPcGVuIiwic2V0SXNNb2RhbDJPcGVuIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJSYW5nZVBpY2tlciIsIkRhdGVQaWNrZXIiLCJzaG93TW9kYWwiLCJzaG93TW9kYWwyIiwiaGFuZGxlT2siLCJoYW5kbGVPazIiLCJoYW5kbGVDYW5jbGUiLCJoYW5kbGVDYW5jbGUyIiwib25DbGlja0ltYWdlVXBsb2FkIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY2xpY2siLCJ0aXRsZSIsIm9uQ2hhbmdlVGl0bGUiLCJtYWluVGV4dHMiLCJvbkNoYW5nZU1haW5UZXh0cyIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJQb3N0Um91dGVzRm9ybXMiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFBQTs7RUFDbkIsbUJBQW9DQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUEvQztFQUFBLElBQVFDLFVBQVIsZ0JBQVFBLFVBQVI7RUFBQSxJQUFvQkMsV0FBcEIsZ0JBQW9CQSxXQUFwQjs7RUFDQSxnQkFBc0NDLHNEQUFRLENBQUMsS0FBRCxDQUE5QztFQUFBLElBQU9DLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBQ0EsaUJBQXdDRixzREFBUSxD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QUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FPSSxNQUFDLHlDQUFEO0lBQU0sUUFBUSxFQUFFUyxZQUFoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsV0FBRDtJQUFhLElBQUksRUFBQyxRQUFsQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREosQ0FESixFQUlJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSSxNQUFDLDJDQUFEO0lBQVEsR0FBRyxFQUFDLE1BQVo7SUFBbUIsSUFBSSxFQUFDLFNBQXhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBREosQ0FKSixDQVBKLENBREosQ0F4QkosQ0FESixDQTFFbUIsQ0E4SG5CO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUdBO0VBQ0E7RUFFQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSCxDQXRLRDs7R0FBTWpDLFE7VUFDa0NDLHVELEVBR0VVLHVELEVBa0NQQSx1RCxFQUNRQSx1RDs7O0tBdkNyQ1gsUTtBQXdLU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmRhNTExMTdlOGQ3MzNmMzExNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIE1vZGFsLCBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IFBvc3RSb3V0ZXNGb3JtIGZyb20gJy4vUG9zdFJvdXRlc0Zvcm0nO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNNb2RhbDJPcGVuLCBzZXRJc01vZGFsMk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB7IFJhbmdlUGlja2VyIH0gPSBEYXRlUGlja2VyO1xyXG5cclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbDIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbDJPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2syID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWwyT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2xlMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsMk9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gICAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFttYWluVGV4dHMsIG9uQ2hhbmdlTWFpblRleHRzXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGl0bGUsIG1haW5UZXh0cylcclxuICAgIH0sIFt0aXRsZSwgbWFpblRleHRzXSk7XHJcblxyXG4gICAgY29uc3QgUG9zdFJvdXRlc0Zvcm1zID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuyXrO2WiSDro6jtirhcIiBcclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0cnVlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbk9rPXtoYW5kbGVPa30gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNsZX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+KyDsgqzsp4Qg7JeF66Gc65OcPC9CdXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJhZGQgdHJpcCByb3V0ZVwiIHR5cGU9XCJidXR0b25cIj7sl6ztlokg6rK966GcIOy2lOqwgDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwicG9zdFwiIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7qsozsi5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBibG9jayBvbkNsaWNrPXtzaG93TW9kYWx9Pisg64K0IOyXrO2WiSDqsozsi5zquIAg7J6R7ISx7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi6rKM7Iuc6riAIOyekeyEse2VmOq4sFwiIFxyXG4gICAgICAgICAgICAgICAgb3Blbj17aXNNb2RhbE9wZW59IFxyXG4gICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2t9IFxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNsZX1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgXX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPjxJbnB1dCB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtvbkNoYW5nZVRpdGxlfSBzdHlsZT17e21hcmdpbjogJzVweCAwcHgnfX0gcGxhY2Vob2xkZXI9XCLqsozsi5zquIAg7KCc66qp7J2EIOyeheugpe2VmOyEuOyalFwiIC8+PC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT48SW5wdXQuVGV4dEFyZWEgdmFsdWU9e21haW5UZXh0c30gc3R5bGU9e3ttYXJnaW46ICc1cHggMHB4J319IG9uQ2hhbmdlPXtvbkNoYW5nZU1haW5UZXh0c30gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi6rKM7Iuc6riAIOuzuOusuOydhCDsnpHshLHtlZjshLjsmpQuXCIgLz48L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT4rIOyCrOynhCDsl4XroZzrk5w8L0J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiYWRkIHRyaXAgcm91dGVcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2hvd01vZGFsMn0+7Jes7ZaJIOqyveuhnCDstpTqsIA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwicG9zdFwiIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7qsozsi5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuyXrO2WiSDro6jtirhcIiBcclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtpc01vZGFsMk9wZW59IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rMn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNsZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VQaWNrZXIgc2l6ZT1cIm1pZGRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJwb3N0XCIgdHlwZT1cInByaW1hcnlcIj7qsozsi5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8gY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gICAgLy8gY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAoYWRkUG9zdERvbmUpIHtcclxuICAgIC8vICAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW2FkZFBvc3REb25lXSk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKGFkZFBvc3QodGV4dCkpO1xyXG5cclxuICAgIC8vIH0sIFt0ZXh0XSk7XHJcblxyXG4gICAgLy8gY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PiB7XHJcbiAgICAvLyAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAvLyB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxGb3JtIHN0eWxlPXt7bWFyZ2luOiAnMTBweCAwIDIwcHgnfX0gZW5jVHlwZT0nbXVsdGlwYXJ0L2Zvcm0tZGF0YScgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgIC8vICAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgLz5cclxuICAgIC8vICAgICAgICAgPGRpdj5cclxuICAgIC8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9Lz5cclxuICAgIC8vICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAvLyAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319IGh0bWxUeXBlPVwic3VibWl0XCI+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8ZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KSA9PiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7ZGlzcGxheTonaW5saW5lLWJsb2NrJ319PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dn0gc3R5bGU9e3t3aWR0aDonMjAwcHgnfX0gYWx0PXt2fSAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICApKX1cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgPC9Gb3JtPlxyXG4gICAgLy8gKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==