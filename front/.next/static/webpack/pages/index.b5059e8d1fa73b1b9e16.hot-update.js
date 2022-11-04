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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      DateList = _useState4[0],
      setDateList = _useState4[1];

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
    console.log(btDay);
    var D = startDate;

    for (var i = 0; i < btDay; i++) {
      //DateArray.push([D.getFullYear(), D.getMonth(), D.getDate()]);
      DateArray.push(D.getFullYear() + '년 ' + (D.getMonth() + 1) + '월 ' + D.getDate() + '일');
      D.setDate(D.getDate() + 1);
    }

    console.log(DateArray);
    setDateList(DateArray);
    setIsRadioOpen(true);
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
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 32
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "add trip route",
    type: "button",
    onClick: showModal2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "\uC5EC\uD589 \uACBD\uB85C \uCD94\uAC00"), ",", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, __jsx(RangePicker, {
    size: "middle",
    onChange: onChangeDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "post",
    type: "button",
    onClick: makeDateRadio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, "\uB0A0\uC9DC \uC124\uC815")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Segmented"], {
    size: "small",
    options: DateList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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

_s(PostForm, "prywKzCDaWbMmVLv0LAI6wxCtR8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwidXNlU3RhdGUiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaXNNb2RhbDJPcGVuIiwic2V0SXNNb2RhbDJPcGVuIiwiaXNSYWRpb09wZW4iLCJzZXRJc1JhZGlvT3BlbiIsInVzZUlucHV0IiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsInNldFRleHQiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwiUmFuZ2VQaWNrZXIiLCJEYXRlUGlja2VyIiwiRGF0ZUxpc3QiLCJzZXREYXRlTGlzdCIsInNob3dNb2RhbCIsInNob3dNb2RhbDIiLCJoYW5kbGVPayIsImhhbmRsZU9rMiIsImhhbmRsZUNhbmNsZSIsImhhbmRsZUNhbmNsZTIiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsIm1haW5UZXh0cyIsIm9uQ2hhbmdlTWFpblRleHRzIiwib25TdWJtaXRGb3JtIiwiY29uc29sZSIsImxvZyIsImJ0RGF5Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIkRhdGVBcnJheSIsIm1ha2VEYXRlUmFkaW8iLCJEIiwiaSIsInB1c2giLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInNldERhdGUiLCJvbkNoYW5nZURhdGUiLCJyYW5nZSIsIkRhdGUxIiwiZm9ybWF0IiwiRGF0ZTIiLCJ5ZWFyMSIsInN1YnN0cmluZyIsInllYXIyIiwibW9udGgxIiwibW9udGgyIiwiZGF5MSIsImRheTIiLCJEYXRlIiwiYnRNcyIsImdldFRpbWUiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtB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UUFBakM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURKLENBWkosQ0FQSixDQURKLENBeEJKLENBREosQ0FoR21CLENBOEpuQjtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBRUE7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0gsQ0F0TUQ7O0dBQU1yQixRO1VBQ2tDQyx1RCxFQUlFWSx1RCxFQW9DUEEsdUQsRUFDUUEsdUQ7OztLQTFDckNiLFE7QUF3TVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1MDU5ZThkMWZhNzNiMWI5ZTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBNb2RhbCwgRGF0ZVBpY2tlciwgUmFkaW8sIFNlZ21lbnRlZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBkYXlzSW5XZWVrIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBhZGRQb3N0IH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBQb3N0Um91dGVzRm9ybSBmcm9tICcuL1Bvc3RSb3V0ZXNGb3JtJztcclxuXHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc01vZGFsMk9wZW4sIHNldElzTW9kYWwyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNSYWRpb09wZW4sIHNldElzUmFkaW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgeyBSYW5nZVBpY2tlciB9ID0gRGF0ZVBpY2tlcjtcclxuICAgIGNvbnN0IFtEYXRlTGlzdCwgc2V0RGF0ZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbDIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbDJPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsMk9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNsZTIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbDJPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT4ge1xyXG4gICAgICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgb25DaGFuZ2VUaXRsZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbbWFpblRleHRzLCBvbkNoYW5nZU1haW5UZXh0c10gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlLCBtYWluVGV4dHMpXHJcbiAgICB9LCBbdGl0bGUsIG1haW5UZXh0c10pO1xyXG5cclxuXHJcbiAgICB2YXIgYnREYXkgPSAwO1xyXG4gICAgdmFyIHN0YXJ0RGF0ZTtcclxuICAgIHZhciBlbmREYXRlO1xyXG4gICAgdmFyIERhdGVBcnJheSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IG1ha2VEYXRlUmFkaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnREYXkpO1xyXG4gICAgICAgIHZhciBEID0gc3RhcnREYXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGJ0RGF5OyBpKyspIHtcclxuICAgICAgICAgICAgLy9EYXRlQXJyYXkucHVzaChbRC5nZXRGdWxsWWVhcigpLCBELmdldE1vbnRoKCksIEQuZ2V0RGF0ZSgpXSk7XHJcbiAgICAgICAgICAgIERhdGVBcnJheS5wdXNoKEQuZ2V0RnVsbFllYXIoKSArICfrhYQgJyArIChELmdldE1vbnRoKCkgKyAxKSArICfsm5QgJyArIEQuZ2V0RGF0ZSgpICsgJ+ydvCcpO1xyXG4gICAgICAgICAgICBELnNldERhdGUoRC5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKERhdGVBcnJheSk7XHJcbiAgICAgICAgc2V0RGF0ZUxpc3QoRGF0ZUFycmF5KTtcclxuICAgICAgICBzZXRJc1JhZGlvT3Blbih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZURhdGUgPSAocmFuZ2UpID0+IHtcclxuICAgICAgICBjb25zdCBEYXRlMSA9IHJhbmdlWzBdLmZvcm1hdCgpO1xyXG4gICAgICAgIGNvbnN0IERhdGUyID0gcmFuZ2VbMV0uZm9ybWF0KCk7XHJcblxyXG4gICAgICAgIHZhciB5ZWFyMSA9IERhdGUxLnN1YnN0cmluZygwLCA0KTtcclxuICAgICAgICB2YXIgeWVhcjIgPSBEYXRlMi5zdWJzdHJpbmcoMCwgNCk7XHJcbiAgICAgICAgdmFyIG1vbnRoMSA9IERhdGUxLnN1YnN0cmluZyg1LCA3KTtcclxuICAgICAgICB2YXIgbW9udGgyID0gRGF0ZTIuc3Vic3RyaW5nKDUsIDcpO1xyXG4gICAgICAgIHZhciBkYXkxID0gRGF0ZTEuc3Vic3RyaW5nKDgsIDEwKTtcclxuICAgICAgICB2YXIgZGF5MiA9IERhdGUyLnN1YnN0cmluZyg4LCAxMCk7XHJcblxyXG4gICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHllYXIxLCBtb250aDEtMSwgZGF5MSk7XHJcbiAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKHllYXIyLCBtb250aDItMSwgZGF5Mik7XHJcblxyXG4gICAgICAgIHZhciBidE1zID0gZW5kRGF0ZS5nZXRUaW1lKCkgLSBzdGFydERhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGJ0RGF5ID0gYnRNcyAvICgxMDAwKjYwKjYwKjI0KSArIDE7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCBkYXRlJywgRGF0ZTEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbmQgZGF0ZScsIERhdGUyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgZGF0ZScsIHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VuZCBkYXRlJywgZW5kRGF0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RheScsIGJ0RGF5KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYmxvY2sgb25DbGljaz17c2hvd01vZGFsfT4rIOuCtCDsl6ztlokg6rKM7Iuc6riAIOyekeyEse2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIuqyjOyLnOq4gCDsnpHshLHtlZjquLBcIiBcclxuICAgICAgICAgICAgICAgIG9wZW49e2lzTW9kYWxPcGVufSBcclxuICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfSBcclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jbGV9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgIF19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT48SW5wdXQgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX0gc3R5bGU9e3ttYXJnaW46ICc1cHggMHB4J319IHBsYWNlaG9sZGVyPVwi6rKM7Iuc6riAIOygnOuqqeydhCDsnoXroKXtlZjshLjsmpRcIiAvPjwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+PElucHV0LlRleHRBcmVhIHZhbHVlPXttYWluVGV4dHN9IHN0eWxlPXt7bWFyZ2luOiAnNXB4IDBweCd9fSBvbkNoYW5nZT17b25DaGFuZ2VNYWluVGV4dHN9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuqyjOyLnOq4gCDrs7jrrLjsnYQg7J6R7ISx7ZWY7IS47JqULlwiIC8+PC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+KyDsgqzsp4Qg7JeF66Gc65OcPC9CdXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cImFkZCB0cmlwIHJvdXRlXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Nob3dNb2RhbDJ9PuyXrO2WiSDqsr3roZwg7LaU6rCAPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cInBvc3RcIiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+6rKM7IucPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLsl6ztlokg66Oo7Yq4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17aXNNb2RhbDJPcGVufSBcclxuICAgICAgICAgICAgICAgICAgICBvbk9rPXtoYW5kbGVPazJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jbGUyfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgIF19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhbmdlUGlja2VyIHNpemU9XCJtaWRkbGVcIiBvbkNoYW5nZT17b25DaGFuZ2VEYXRlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJwb3N0XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e21ha2VEYXRlUmFkaW99PuuCoOynnCDshKTsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1JhZGlvT3BlbiAmJiBEYXRlQXJyYXkubWFwKCh2KSA9PiA8UmFkaW8uQnV0dG9uPnt2WzBdICsgYOuFhGAgKyB2WzFdKzEgKyBg7JuUYCArIHZbMl0gKyBg7J28YH08L1JhZGlvLkJ1dHRvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRlZCBzaXplPVwic21hbGxcIiBvcHRpb25zPXtEYXRlTGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7aXNSYWRpb09wZW4gJiYgPFNlZ21lbnRlZCBzaXplPVwic21hbGxcIiBvcHRpb25zPXtEYXRlQXJyYXl9IC8+fSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U2VnbWVudGVkIHNpemU9XCJzbWFsbFwiIG9wdGlvbnM9e1snYScsICdiJywgJ2MnXX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICAgIC8vIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAvLyAgICAgICAgIHNldFRleHQoJycpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFthZGRQb3N0RG9uZV0pO1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vICAgICBkaXNwYXRjaChhZGRQb3N0KHRleHQpKTtcclxuXHJcbiAgICAvLyB9LCBbdGV4dF0pO1xyXG5cclxuICAgIC8vIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpPT4ge1xyXG4gICAgLy8gICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgLy8gfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8Rm9ybSBzdHlsZT17e21hcmdpbjogJzEwcHggMCAyMHB4J319IGVuY1R5cGU9J211bHRpcGFydC9mb3JtLWRhdGEnIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAvLyAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIC8+XHJcbiAgICAvLyAgICAgICAgIDxkaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fS8+XHJcbiAgICAvLyAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgLy8gICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuynueynuTwvQnV0dG9uPlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPGRpdj5cclxuICAgIC8vICAgICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodikgPT4gKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17e2Rpc3BsYXk6J2lubGluZS1ibG9jayd9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Z9IHN0eWxlPXt7d2lkdGg6JzIwMHB4J319IGFsdD17dn0gLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgKSl9XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgIDwvRm9ybT5cclxuICAgIC8vIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=