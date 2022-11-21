webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SpotForm.js":
/*!********************************!*\
  !*** ./components/SpotForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\leeoo\\Desktop\\trip-sns\\front\\components\\SpotForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SpotForm(_ref) {
  _s();

  var _ref$onCreate = _ref.onCreate,
      onCreate = _ref$onCreate === void 0 ? function (v) {
    return console.log(v);
  } : _ref$onCreate;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      spotName = _useState[0],
      setSpotName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      spotAddress = _useState2[0],
      setSpotAddress = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onCreate({
      spotName: spotName,
      spotAddress: spotAddress
    });
    setSpotName("");
    setSpotAddress("");
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    style: {
      padding: '8px',
      margin: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    value: spotName,
    name: "spotName",
    placeholder: "\uC5EC\uD589\uC9C0 \uBA85",
    onChange: function onChange(e) {
      return setSpotName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    value: spotAddress,
    name: "spotAddress",
    placeholder: "\uC5EC\uD589\uC9C0 \uC8FC\uC18C",
    onChange: function onChange(e) {
      return setSpotAddress(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })), __jsx("button", {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, " \uCD94\uAC00 "));
}

_s(SpotForm, "ZcicEVPLvc63XBe6giIxim7HZ9I=");

_c = SpotForm;
/* harmony default export */ __webpack_exports__["default"] = (SpotForm);

var _c;

$RefreshReg$(_c, "SpotForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcG90Rm9ybS5qcyJdLCJuYW1lcyI6WyJTcG90Rm9ybSIsIm9uQ3JlYXRlIiwidiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInNwb3ROYW1lIiwic2V0U3BvdE5hbWUiLCJzcG90QWRkcmVzcyIsInNldFNwb3RBZGRyZXNzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFkZGluZyIsIm1hcmdpbiIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQXdEO0VBQUE7O0VBQUEseUJBQXBDQyxRQUFvQztFQUFBLElBQXBDQSxRQUFvQyw4QkFBekIsVUFBQ0MsQ0FBRDtJQUFBLE9BQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQVA7RUFBQSxDQUF5Qjs7RUFDcEQsZ0JBQWdDRyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7RUFBQSxJQUFPQyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUFzQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQTlDO0VBQUEsSUFBT0csV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87SUFDeEJBLENBQUMsQ0FBQ0MsY0FBRjtJQUNBWCxRQUFRLENBQUM7TUFBRUssUUFBUSxFQUFFQSxRQUFaO01BQXNCRSxXQUFXLEVBQUVBO0lBQW5DLENBQUQsQ0FBUjtJQUNBRCxXQUFXLENBQUMsRUFBRCxDQUFYO0lBQ0FFLGNBQWMsQ0FBQyxFQUFELENBQWQ7RUFDSCxDQUxEOztFQU9BLE9BQ0k7SUFBTSxRQUFRLEVBQUVDLFlBQWhCO0lBQThCLEtBQUssRUFBRTtNQUNqQ0csT0FBTyxFQUFFLEtBRHdCO01BRWpDQyxNQUFNLEVBQUU7SUFGeUIsQ0FBckM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUlJLE1BQUMsMENBQUQsQ0FBTyxLQUFQO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQSxNQUFDLDBDQUFEO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsS0FBSyxFQUFFUixRQUExQjtJQUFvQyxJQUFJLEVBQUMsVUFBekM7SUFBb0QsV0FBVyxFQUFDLDJCQUFoRTtJQUF3RSxRQUFRLEVBQUUsa0JBQUFLLENBQUM7TUFBQSxPQUFJSixXQUFXLENBQUNJLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQWY7SUFBQSxDQUFuRjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREEsRUFHQSxNQUFDLDBDQUFEO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsS0FBSyxFQUFFUixXQUExQjtJQUF1QyxJQUFJLEVBQUMsYUFBNUM7SUFBMEQsV0FBVyxFQUFDLGlDQUF0RTtJQUErRSxRQUFRLEVBQUUsa0JBQUFHLENBQUM7TUFBQSxPQUFJRixjQUFjLENBQUNFLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQWxCO0lBQUEsQ0FBMUY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUhBLENBSkosRUFXSTtJQUFRLElBQUksRUFBQyxRQUFiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsb0JBWEosQ0FESjtBQWVIOztHQTFCUWhCLFE7O0tBQUFBLFE7QUE0Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk2YThjMTI4MzI4Y2M4ZWEwYjgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFNwb3RGb3JtKHsgb25DcmVhdGUgPSAodikgPT4gY29uc29sZS5sb2codikgfSkge1xyXG4gICAgY29uc3QgW3Nwb3ROYW1lLCBzZXRTcG90TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Nwb3RBZGRyZXNzLCBzZXRTcG90QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgb25DcmVhdGUoeyBzcG90TmFtZTogc3BvdE5hbWUsIHNwb3RBZGRyZXNzOiBzcG90QWRkcmVzcyB9KVxyXG4gICAgICAgIHNldFNwb3ROYW1lKFwiXCIpXHJcbiAgICAgICAgc2V0U3BvdEFkZHJlc3MoXCJcIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICc4cHgnXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxJbnB1dC5Hcm91cD5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Nwb3ROYW1lfSBuYW1lPVwic3BvdE5hbWVcIiBwbGFjZWhvbGRlcj1cIuyXrO2WieyngCDrqoVcIiBvbkNoYW5nZT17ZSA9PiBzZXRTcG90TmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzcG90TmFtZX0gbmFtZT1cInNwb3ROYW1lXCIgcGxhY2Vob2xkZXI9XCLsl6ztlonsp4Ag66qFXCIgb25DaGFuZ2U9e2UgPT4gc2V0U3BvdE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Nwb3RBZGRyZXNzfSBuYW1lPVwic3BvdEFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIuyXrO2WieyngCDso7zshoxcIiBvbkNoYW5nZT17ZSA9PiBzZXRTcG90QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17c3BvdEFkZHJlc3N9IG5hbWU9XCJzcG90QWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwi7Jes7ZaJ7KeAIOyjvOyGjFwiIG9uQ2hhbmdlPXtlID0+IHNldFNwb3RBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX0gLz4gKi99XHJcbiAgICAgICAgICAgIDwvSW5wdXQuR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4g7LaU6rCAIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwb3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=