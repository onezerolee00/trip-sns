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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _PostRoutesForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostRoutesForm */ "./components/PostRoutesForm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalOpen = _useState[0],
      setIsModalOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModal2Open = _useState2[0],
      setIsModal2Open = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isRadioOpen = _useState3[0],
      setIsRadioOpen = _useState3[1];

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      text = _useInput2[0],
      onChangeText = _useInput2[1],
      setText = _useInput2[2];

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
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

  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      title = _useInput4[0],
      onChangeTitle = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      mainTexts = _useInput6[0],
      onChangeMainTexts = _useInput6[1];

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    console.log(title, mainTexts);
  }, [title, mainTexts]);
  var btDay = 0;
  var startDate;
  var endDate;
  var DateArray = [];

  var makeDateRadio = function makeDateRadio() {
    setIsRadioOpen(true);
    console.log(btDay);
    var D = startDate;

    for (var i = 0; i < btDay; i++) {
      //DateArray.push([D.getFullYear(), D.getMonth(), D.getDate()]);
      DateArray.push(D.getFullYear() + '년 ' + (D.getMonth() + 1) + '월 ' + D.getDate() + '일');
      D.setDate(D.getDate() + 1);
    }

    console.log(DateArray);
  };

  var onChangeDate = function onChangeDate(range) {
    var Date1 = range[0].format();
    var Date2 = range[1].format();
    var year1 = Date1.substring(0, 4);
    var year2 = Date2.substring(0, 4);
    var month1 = Date1.substring(5, 7);
    var month2 = Date2.substring(5, 7);
    var day1 = Date1.substring(8, 10);
    var day2 = Date2.substring(8, 10);
    startDate = new Date(year1, month1 - 1, day1);
    endDate = new Date(year2, month2 - 1, day2);
    var btMs = endDate.getTime() - startDate.getTime();
    btDay = btMs / (1000 * 60 * 60 * 24) + 1;
    console.log('start date', Date1);
    console.log('end date', Date2);
    console.log('start date', startDate);
    console.log('end date', endDate);
    console.log('day', btDay);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    block: true,
    onClick: showModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 116,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 117,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 120,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "add trip route",
    type: "button",
    onClick: showModal2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, "\uC5EC\uD589 \uACBD\uB85C \uCD94\uAC00"), ",", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "\uAC8C\uC2DC")))), __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uC5EC\uD589 \uB8E8\uD2B8",
    open: isModal2Open,
    onOk: handleOk2,
    onCancel: handleCancle2,
    footer: [],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, __jsx(RangePicker, {
    size: "middle",
    onChange: onChangeDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "button",
    onClick: makeDateRadio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, "\uB0A0\uC9DC \uC124\uC815")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Segmented"], {
    size: "small",
    options: DateArray,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  })))))); // const { imagePaths, addPostDone } = useSelector((state) => state.post);
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

_s(PostForm, "CfJwKR1QS2FaNbK3Yhgmu5wIWFc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwidXNlU3RhdGUiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaXNNb2RhbDJPcGVuIiwic2V0SXNNb2RhbDJPcGVuIiwiaXNSYWRpb09wZW4iLCJzZXRJc1JhZGlvT3BlbiIsInVzZUlucHV0IiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsInNldFRleHQiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwiUmFuZ2VQaWNrZXIiLCJEYXRlUGlja2VyIiwic2hvd01vZGFsIiwic2hvd01vZGFsMiIsImhhbmRsZU9rIiwiaGFuZGxlT2syIiwiaGFuZGxlQ2FuY2xlIiwiaGFuZGxlQ2FuY2xlMiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImNsaWNrIiwidGl0bGUiLCJvbkNoYW5nZVRpdGxlIiwibWFpblRleHRzIiwib25DaGFuZ2VNYWluVGV4dHMiLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwiYnREYXkiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiRGF0ZUFycmF5IiwibWFrZURhdGVSYWRpbyIsIkQiLCJpIiwicHVzaCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwic2V0RGF0ZSIsIm9uQ2hhbmdlRGF0ZSIsInJhbmdlIiwiRGF0ZTEiLCJmb3JtYXQiLCJEYXRlMiIsInllYXIxIiwic3Vic3RyaW5nIiwieWVhcjIiLCJtb250aDEiLCJtb250aDIiLCJkYXkxIiwiZGF5MiIsIkRhdGUiLCJidE1zIiwiZ2V0VGltZSIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0Es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RUFDQTtFQUVBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNILENBbk1EOztHQUFNekMsUTtVQUNrQ0MsdUQsRUFJRVksdUQsRUFtQ1BBLHVELEVBQ1FBLHVEOzs7S0F6Q3JDYixRO0FBcU1TQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNzZiYjgzMzNmN2Q1Zjc5MTIxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgTW9kYWwsIERhdGVQaWNrZXIsIFJhZGlvLCBTZWdtZW50ZWQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgZGF5c0luV2VlayB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUG9zdFJvdXRlc0Zvcm0gZnJvbSAnLi9Qb3N0Um91dGVzRm9ybSc7XHJcblxyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNNb2RhbDJPcGVuLCBzZXRJc01vZGFsMk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzUmFkaW9PcGVuLCBzZXRJc1JhZGlvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHsgUmFuZ2VQaWNrZXIgfSA9IERhdGVQaWNrZXI7XHJcblxyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsMk9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2syID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWwyT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2xlMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsMk9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCk9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gICAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFttYWluVGV4dHMsIG9uQ2hhbmdlTWFpblRleHRzXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGl0bGUsIG1haW5UZXh0cylcclxuICAgIH0sIFt0aXRsZSwgbWFpblRleHRzXSk7XHJcblxyXG5cclxuICAgIHZhciBidERheSA9IDA7XHJcbiAgICB2YXIgc3RhcnREYXRlO1xyXG4gICAgdmFyIGVuZERhdGU7XHJcbiAgICB2YXIgRGF0ZUFycmF5ID0gW107XHJcblxyXG4gICAgY29uc3QgbWFrZURhdGVSYWRpbyA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc1JhZGlvT3Blbih0cnVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhidERheSk7XHJcbiAgICAgICAgdmFyIEQgPSBzdGFydERhdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YnREYXk7IGkrKykge1xyXG4gICAgICAgICAgICAvL0RhdGVBcnJheS5wdXNoKFtELmdldEZ1bGxZZWFyKCksIEQuZ2V0TW9udGgoKSwgRC5nZXREYXRlKCldKTtcclxuICAgICAgICAgICAgRGF0ZUFycmF5LnB1c2goRC5nZXRGdWxsWWVhcigpICsgJ+uFhCAnICsgKEQuZ2V0TW9udGgoKSArIDEpICsgJ+yblCAnICsgRC5nZXREYXRlKCkgKyAn7J28Jyk7XHJcbiAgICAgICAgICAgIEQuc2V0RGF0ZShELmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coRGF0ZUFycmF5KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VEYXRlID0gKHJhbmdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgRGF0ZTEgPSByYW5nZVswXS5mb3JtYXQoKTtcclxuICAgICAgICBjb25zdCBEYXRlMiA9IHJhbmdlWzFdLmZvcm1hdCgpO1xyXG5cclxuICAgICAgICB2YXIgeWVhcjEgPSBEYXRlMS5zdWJzdHJpbmcoMCwgNCk7XHJcbiAgICAgICAgdmFyIHllYXIyID0gRGF0ZTIuc3Vic3RyaW5nKDAsIDQpO1xyXG4gICAgICAgIHZhciBtb250aDEgPSBEYXRlMS5zdWJzdHJpbmcoNSwgNyk7XHJcbiAgICAgICAgdmFyIG1vbnRoMiA9IERhdGUyLnN1YnN0cmluZyg1LCA3KTtcclxuICAgICAgICB2YXIgZGF5MSA9IERhdGUxLnN1YnN0cmluZyg4LCAxMCk7XHJcbiAgICAgICAgdmFyIGRheTIgPSBEYXRlMi5zdWJzdHJpbmcoOCwgMTApO1xyXG5cclxuICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSh5ZWFyMSwgbW9udGgxLTEsIGRheTEpO1xyXG4gICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZSh5ZWFyMiwgbW9udGgyLTEsIGRheTIpO1xyXG5cclxuICAgICAgICB2YXIgYnRNcyA9IGVuZERhdGUuZ2V0VGltZSgpIC0gc3RhcnREYXRlLmdldFRpbWUoKTtcclxuICAgICAgICBidERheSA9IGJ0TXMgLyAoMTAwMCo2MCo2MCoyNCkgKyAxO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgZGF0ZScsIERhdGUxKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW5kIGRhdGUnLCBEYXRlMik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IGRhdGUnLCBzdGFydERhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbmQgZGF0ZScsIGVuZERhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXknLCBidERheSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGJsb2NrIG9uQ2xpY2s9e3Nob3dNb2RhbH0+KyDrgrQg7Jes7ZaJIOqyjOyLnOq4gCDsnpHshLHtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLqsozsi5zquIAg7J6R7ISx7ZWY6riwXCIgXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtpc01vZGFsT3Blbn0gXHJcbiAgICAgICAgICAgICAgICBvbk9rPXtoYW5kbGVPa30gXHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2xlfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+PElucHV0IHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9IHN0eWxlPXt7bWFyZ2luOiAnNXB4IDBweCd9fSBwbGFjZWhvbGRlcj1cIuqyjOyLnOq4gCDsoJzrqqnsnYQg7J6F66Cl7ZWY7IS47JqUXCIgLz48L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPjxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17bWFpblRleHRzfSBzdHlsZT17e21hcmdpbjogJzVweCAwcHgnfX0gb25DaGFuZ2U9e29uQ2hhbmdlTWFpblRleHRzfSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLqsozsi5zquIAg67O466y47J2EIOyekeyEse2VmOyEuOyalC5cIiAvPjwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9Pisg7IKs7KeEIOyXheuhnOuTnDwvQnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJhZGQgdHJpcCByb3V0ZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaG93TW9kYWwyfT7sl6ztlokg6rK966GcIOy2lOqwgDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJwb3N0XCIgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqyjOyLnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi7Jes7ZaJIOujqO2KuFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e2lzTW9kYWwyT3Blbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17aGFuZGxlT2syfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2xlMn1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZVBpY2tlciBzaXplPVwibWlkZGxlXCIgb25DaGFuZ2U9e29uQ2hhbmdlRGF0ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwicG9zdFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXttYWtlRGF0ZVJhZGlvfT7rgqDsp5wg7ISk7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNSYWRpb09wZW4gJiYgRGF0ZUFycmF5Lm1hcCgodikgPT4gPFJhZGlvLkJ1dHRvbj57dlswXSArIGDrhYRgICsgdlsxXSsxICsgYOyblGAgKyB2WzJdICsgYOydvGB9PC9SYWRpby5CdXR0b24+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50ZWQgc2l6ZT1cInNtYWxsXCIgb3B0aW9ucz17RGF0ZUFycmF5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgICAvLyBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChhZGRQb3N0RG9uZSkge1xyXG4gICAgLy8gICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcblxyXG4gICAgLy8gY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyAgICAgZGlzcGF0Y2goYWRkUG9zdCh0ZXh0KSk7XHJcblxyXG4gICAgLy8gfSwgW3RleHRdKTtcclxuXHJcbiAgICAvLyBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+IHtcclxuICAgIC8vICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIC8vIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICAgIC8vIHJldHVybiAoXHJcbiAgICAvLyAgICAgPEZvcm0gc3R5bGU9e3ttYXJnaW46ICcxMHB4IDAgMjBweCd9fSBlbmNUeXBlPSdtdWx0aXBhcnQvZm9ybS1kYXRhJyBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgLy8gICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIiAvPlxyXG4gICAgLy8gICAgICAgICA8ZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0vPlxyXG4gICAgLy8gICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgIC8vICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sp7nsp7k8L0J1dHRvbj5cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDxkaXY+XHJcbiAgICAvLyAgICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYpID0+IChcclxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUtYmxvY2snfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2fSBzdHlsZT17e3dpZHRoOicyMDBweCd9fSBhbHQ9e3Z9IC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICkpfVxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8L0Zvcm0+XHJcbiAgICAvLyApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9