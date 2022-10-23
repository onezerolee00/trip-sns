webpackHotUpdate_N_E("pages/following",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var initialState = {
  followLoading: false,
  // 팔로우 시도 중 
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도 중 
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도 중 
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도 중 
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도 중 
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도 중 
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SECCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SECCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SECCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SECCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SECCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SECCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: 'lee',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: 'won',
      id: 2
    }, {
      nickname: 'kim',
      id: 3
    }, {
      nickname: 'park',
      id: 4
    }],
    Followers: [{
      nickname: 'won',
      id: 2
    }, {
      nickname: 'kim',
      id: 3
    }, {
      nickname: 'park',
      id: 4
    }]
  });
}; // export const loginAction = (data) => {
//     return (dispatch, getState) => {
//         const state = getState();
//         dispatch(loginRequestAction());
//         axios.post('/api/login')
//             .then((res) => {
//                 dispatch(loginSuccessAction(res.data));
//             })
//             .catch((err) => {
//                 dispatch(loginFailureAction(err));
//             })
//     }
// }


var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data
        });
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        }); // 그 사람 빼고 나머지들이 팔로잉되는거니까 그 사람만 빠지는 거

        draft.unfollowDone = true;
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = dummyUser(action.data);
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //     ...state,
      //     me: {
      //         ...state.me,
      //         Posts: [{ id: action.data }, ...state.me.Posts],
      //     },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;
      // return {
      //     ...state,
      //     me: {
      //         ...state.me,
      //         Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //     },
      // };

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInB1c2giLCJlcnJvciIsImZpbHRlciIsInYiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsYUFBYSxFQUFFLEtBRFM7RUFDRjtFQUN0QkMsVUFBVSxFQUFFLEtBRlk7RUFHeEJDLFdBQVcsRUFBRSxJQUhXO0VBSXhCQyxlQUFlLEVBQUUsS0FKTztFQUlBO0VBQ3hCQyxZQUFZLEVBQUUsS0FMVTtFQU14QkMsYUFBYSxFQUFFLElBTlM7RUFPeEJDLFlBQVksRUFBRSxLQVBVO0VBT0g7RUFDckJDLFNBQVMsRUFBRSxLQVJhO0VBU3hCQyxVQUFVLEVBQUUsSUFUWTtFQVV4QkMsYUFBYSxFQUFFLEtBVlM7RUFVRjtFQUN0QkMsVUFBVSxFQUFFLEtBWFk7RUFZeEJDLFdBQVcsRUFBRSxJQVpXO0VBYXhCQyxhQUFhLEVBQUUsS0FiUztFQWFGO0VBQ3RCQyxVQUFVLEVBQUUsS0FkWTtFQWV4QkMsV0FBVyxFQUFFLElBZlc7RUFnQnhCQyxxQkFBcUIsRUFBRSxLQWhCQztFQWdCTTtFQUM5QkMsa0JBQWtCLEVBQUUsS0FqQkk7RUFrQnhCQyxtQkFBbUIsRUFBRSxJQWxCRztFQW9CeEJDLEVBQUUsRUFBRSxJQXBCb0I7RUFxQnhCQyxVQUFVLEVBQUUsRUFyQlk7RUFzQnhCQyxTQUFTLEVBQUU7QUF0QmEsQ0FBckI7QUF5QkEsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUs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dkMsa0JBQU4sR0FBMkIsSUFBM0I7UUFDQTs7TUFFSixLQUFLZ0IsdUJBQUw7UUFDSXVCLEtBQUssQ0FBQ3hDLHFCQUFOLEdBQThCLEtBQTlCO1FBQ0F3QyxLQUFLLENBQUN0QyxtQkFBTixHQUE0Qm9DLE1BQU0sQ0FBQ0ksS0FBbkM7UUFDQTs7TUFFSixLQUFLbEIsY0FBTDtRQUNJZ0IsS0FBSyxDQUFDckMsRUFBTixDQUFTMkIsS0FBVCxDQUFlZSxPQUFmLENBQXVCO1VBQUNoQixFQUFFLEVBQUVTLE1BQU0sQ0FBQ1g7UUFBWixDQUF2QjtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUosS0FBS0YsaUJBQUw7UUFDSWUsS0FBSyxDQUFDckMsRUFBTixDQUFTMkIsS0FBVCxHQUFpQlUsS0FBSyxDQUFDckMsRUFBTixDQUFTMkIsS0FBVCxDQUFlYSxNQUFmLENBQXNCLFVBQUNDLENBQUQ7VUFBQSxPQUFPQSxDQUFDLENBQUNmLEVBQUYsS0FBU1MsTUFBTSxDQUFDWCxJQUF2QjtRQUFBLENBQXRCLENBQWpCO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7TUFDSjtRQUNJO0lBaElSO0VBa0lILENBbklhLENBQWQ7QUFvSUgsQ0FySUQ7O0FBdUllUyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb2xsb3dpbmcuMjJmYTdlNzdmMGIzYjk2NTU5MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4Qg7KSRIFxyXG4gICAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4Qg7KSRIFxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+EIOykkSBcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4Qg7KSRIFxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+EIOykkSBcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhCDspJEgXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TRUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NFQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TRUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TRUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU0VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU0VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJzsgXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZTogJ2xlZScsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAnd29uJywgaWQ6IDIgfSwgeyBuaWNrbmFtZTogJ2tpbScsIGlkOiAzIH0sIHsgbmlja25hbWU6ICdwYXJrJywgaWQ6IDR9XSxcclxuICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICd3b24nLCBpZDogMiB9LCB7IG5pY2tuYW1lOiAna2ltJywgaWQ6IDMgfSwgeyBuaWNrbmFtZTogJ3BhcmsnLCBpZDogNH1dLFxyXG59KVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4vLyAgICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuLy8gICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJylcclxuLy8gICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcblxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpOyAvLyDqt7gg7IKs656MIOu5vOqzoCDrgpjrqLjsp4Drk6TsnbQg7YyU66Gc7J6J65CY64qU6rGw64uI6rmMIOq3uCDsgqzrnozrp4wg67mg7KeA64qUIOqxsFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1lOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWU6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=