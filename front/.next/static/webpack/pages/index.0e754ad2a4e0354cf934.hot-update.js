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

  var makeDateRadio = function makeDateRadio() {
    console.log(btDay);
    var DateArray = [];

    for (var i = startDate; i != endDate; i.setDate(i.getDate() + 1)) {
      DateArray.push(i);
    }

    console.log(DateArray);
  };

  var btDay = 0;
  var startDate;
  var endDate;

  var onChangeDate = function onChangeDate(range) {
    var Date1 = range[0].format();
    var Date2 = range[1].format();
    var year1 = Date1.substring(0, 4);
    var year2 = Date2.substring(0, 4);
    var month1 = Date1.substring(5, 7);
    var month2 = Date2.substring(5, 7);
    var day1 = Date1.substring(8, 10);
    var day2 = Date2.substring(8, 10);
    startDate = new Date(year1, month1, day1);
    endDate = new Date(year2, month2, day2);
    var btMs = endDate.getTime() - startDate.getTime();
    btDay = btMs / (1000 * 60 * 60 * 24) + 1;
    console.log('start date', Date1);
    console.log('end date', Date2);
    console.log('start date', startDate);
    console.log('end date', endDate);
    console.log('day', btDay);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    block: true,
    onClick: showModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 109,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 110,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 113,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "add trip route",
    type: "button",
    onClick: showModal2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, "\uC5EC\uD589 \uACBD\uB85C \uCD94\uAC00"), ",", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, __jsx(RangePicker, {
    size: "middle",
    onChange: onChangeDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "button",
    onClick: makeDateRadio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, "\uB0A0\uC9DC \uC124\uC815")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, btDay)))))); // const { imagePaths, addPostDone } = useSelector((state) => state.post);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwidXNlU3RhdGUiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaXNNb2RhbDJPcGVuIiwic2V0SXNNb2RhbDJPcGVuIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJSYW5nZVBpY2tlciIsIkRhdGVQaWNrZXIiLCJzaG93TW9kYWwiLCJzaG93TW9kYWwyIiwiaGFuZGxlT2siLCJoYW5kbGVPazIiLCJoYW5kbGVDYW5jbGUiLCJoYW5kbGVDYW5jbGUyIiwib25DbGlja0ltYWdlVXBsb2FkIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY2xpY2siLCJ0aXRsZSIsIm9uQ2hhbmdlVGl0bGUiLCJtYWluVGV4dHMiLCJvbkNoYW5nZU1haW5UZXh0cyIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlRGF0ZVJhZGlvIiwiYnREYXkiLCJEYXRlQXJyYXkiLCJpIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwicHVzaCIsIm9uQ2hhbmdlRGF0ZSIsInJhbmdlIiwiRGF0ZTEiLCJmb3JtYXQiLCJEYXRlMiIsInllYXIxIiwic3Vic3RyaW5nIiwieWVhcjIiLCJtb250aDEiLCJtb250aDIiLCJkYXkxIiwiZGF5MiIsIkRhdGUiLCJidE1zIiwiZ2V0VGltZSIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtFQUFBOztFQUNuQixtQkFBb0NDLCtEQUFXLENBQUMsVUFB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QUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQyxXQUFEO0lBQWEsSUFBSSxFQUFDLFFBQWxCO0lBQTJCLFFBQVEsRUFBRVksWUFBckM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURKLENBREosRUFJSSxNQUFDLHlDQUFELENBQU0sSUFBTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQywyQ0FBRDtJQUFRLEdBQUcsRUFBQyxNQUFaO0lBQW1CLElBQUksRUFBQyxRQUF4QjtJQUFpQyxPQUFPLEVBQUVULGFBQTFDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsK0JBREosQ0FKSixFQU9JLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0tDLEtBREwsQ0FESixDQVBKLENBUEosQ0FESixDQXhCSixDQURKLENBekZtQixDQWtKbkI7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFQUVBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNILENBMUxEOztHQUFNckMsUTtVQUNrQ0MsdUQsRUFHRVUsdUQsRUFtQ1BBLHVELEVBQ1FBLHVEOzs7S0F4Q3JDWCxRO0FBNExTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTc1NGFkMmE0ZTAzNTRjZjkzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgTW9kYWwsIERhdGVQaWNrZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUG9zdFJvdXRlc0Zvcm0gZnJvbSAnLi9Qb3N0Um91dGVzRm9ybSc7XHJcblxyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNNb2RhbDJPcGVuLCBzZXRJc01vZGFsMk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB7IFJhbmdlUGlja2VyIH0gPSBEYXRlUGlja2VyO1xyXG5cclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbDIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbDJPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsMk9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNsZTIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbDJPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT4ge1xyXG4gICAgICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgb25DaGFuZ2VUaXRsZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbbWFpblRleHRzLCBvbkNoYW5nZU1haW5UZXh0c10gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlLCBtYWluVGV4dHMpXHJcbiAgICB9LCBbdGl0bGUsIG1haW5UZXh0c10pO1xyXG5cclxuICAgIGNvbnN0IG1ha2VEYXRlUmFkaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnREYXkpO1xyXG4gICAgICAgIHZhciBEYXRlQXJyYXkgPSBbXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcih2YXIgaSA9IHN0YXJ0RGF0ZTsgaSAhPSBlbmREYXRlOyBpLnNldERhdGUoaS5nZXREYXRlKCkgKyAxKSkge1xyXG4gICAgICAgICAgICBEYXRlQXJyYXkucHVzaChpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coRGF0ZUFycmF5KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgYnREYXkgPSAwO1xyXG4gICAgdmFyIHN0YXJ0RGF0ZTtcclxuICAgIHZhciBlbmREYXRlO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlRGF0ZSA9IChyYW5nZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IERhdGUxID0gcmFuZ2VbMF0uZm9ybWF0KCk7XHJcbiAgICAgICAgY29uc3QgRGF0ZTIgPSByYW5nZVsxXS5mb3JtYXQoKTtcclxuXHJcbiAgICAgICAgdmFyIHllYXIxID0gRGF0ZTEuc3Vic3RyaW5nKDAsIDQpO1xyXG4gICAgICAgIHZhciB5ZWFyMiA9IERhdGUyLnN1YnN0cmluZygwLCA0KTtcclxuICAgICAgICB2YXIgbW9udGgxID0gRGF0ZTEuc3Vic3RyaW5nKDUsIDcpO1xyXG4gICAgICAgIHZhciBtb250aDIgPSBEYXRlMi5zdWJzdHJpbmcoNSwgNyk7XHJcbiAgICAgICAgdmFyIGRheTEgPSBEYXRlMS5zdWJzdHJpbmcoOCwgMTApO1xyXG4gICAgICAgIHZhciBkYXkyID0gRGF0ZTIuc3Vic3RyaW5nKDgsIDEwKTtcclxuXHJcbiAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUoeWVhcjEsIG1vbnRoMSwgZGF5MSk7XHJcbiAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKHllYXIyLCBtb250aDIsIGRheTIpO1xyXG5cclxuICAgICAgICB2YXIgYnRNcyA9IGVuZERhdGUuZ2V0VGltZSgpIC0gc3RhcnREYXRlLmdldFRpbWUoKTtcclxuICAgICAgICBidERheSA9IGJ0TXMgLyAoMTAwMCo2MCo2MCoyNCkgKyAxO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgZGF0ZScsIERhdGUxKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW5kIGRhdGUnLCBEYXRlMik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IGRhdGUnLCBzdGFydERhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbmQgZGF0ZScsIGVuZERhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXknLCBidERheSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGJsb2NrIG9uQ2xpY2s9e3Nob3dNb2RhbH0+KyDrgrQg7Jes7ZaJIOqyjOyLnOq4gCDsnpHshLHtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLqsozsi5zquIAg7J6R7ISx7ZWY6riwXCIgXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtpc01vZGFsT3Blbn0gXHJcbiAgICAgICAgICAgICAgICBvbk9rPXtoYW5kbGVPa30gXHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2xlfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+PElucHV0IHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9IHN0eWxlPXt7bWFyZ2luOiAnNXB4IDBweCd9fSBwbGFjZWhvbGRlcj1cIuqyjOyLnOq4gCDsoJzrqqnsnYQg7J6F66Cl7ZWY7IS47JqUXCIgLz48L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPjxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17bWFpblRleHRzfSBzdHlsZT17e21hcmdpbjogJzVweCAwcHgnfX0gb25DaGFuZ2U9e29uQ2hhbmdlTWFpblRleHRzfSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLqsozsi5zquIAg67O466y47J2EIOyekeyEse2VmOyEuOyalC5cIiAvPjwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9Pisg7IKs7KeEIOyXheuhnOuTnDwvQnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJhZGQgdHJpcCByb3V0ZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaG93TW9kYWwyfT7sl6ztlokg6rK966GcIOy2lOqwgDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJwb3N0XCIgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqyjOyLnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi7Jes7ZaJIOujqO2KuFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e2lzTW9kYWwyT3Blbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2syfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2xlMn1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZVBpY2tlciBzaXplPVwibWlkZGxlXCIgb25DaGFuZ2U9e29uQ2hhbmdlRGF0ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwicG9zdFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXttYWtlRGF0ZVJhZGlvfT7rgqDsp5wg7ISk7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnREYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8gY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gICAgLy8gY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAoYWRkUG9zdERvbmUpIHtcclxuICAgIC8vICAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW2FkZFBvc3REb25lXSk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKGFkZFBvc3QodGV4dCkpO1xyXG5cclxuICAgIC8vIH0sIFt0ZXh0XSk7XHJcblxyXG4gICAgLy8gY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PiB7XHJcbiAgICAvLyAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAvLyB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxGb3JtIHN0eWxlPXt7bWFyZ2luOiAnMTBweCAwIDIwcHgnfX0gZW5jVHlwZT0nbXVsdGlwYXJ0L2Zvcm0tZGF0YScgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgIC8vICAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgLz5cclxuICAgIC8vICAgICAgICAgPGRpdj5cclxuICAgIC8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9Lz5cclxuICAgIC8vICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAvLyAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319IGh0bWxUeXBlPVwic3VibWl0XCI+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8ZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KSA9PiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7ZGlzcGxheTonaW5saW5lLWJsb2NrJ319PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dn0gc3R5bGU9e3t3aWR0aDonMjAwcHgnfX0gYWx0PXt2fSAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICApKX1cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgPC9Gb3JtPlxyXG4gICAgLy8gKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==