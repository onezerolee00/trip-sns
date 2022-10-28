webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @faker-js/faker */ "./node_modules/@faker-js/faker/dist/esm/index.mjs");



var initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
}; // 서버에서 데이터 불러오는 거를 이 함수로 일단 대체
// + 인피니트 스크롤링

var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      Title: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.sentence(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].name.findName()
      },
      content: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.paragraph(),
      Images: [{
        src: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].image.image()
      }, {
        src: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].image.image()
      }, {
        src: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].image.image()
      }],
      Comments: [{
        User: {
          id: 1,
          nickname: 'lee' // id: shortId.generate(),
          // nickname: faker.name.findName(),

        },
        content: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.sentence()
      }],
      Schedules: [{
        numberOfTrip: 2,
        TripDates: [{
          date: new Date()
        }, {
          date: new Date()
        }],
        Routes: [{
          date: new Date(),
          spots: [{
            order: 1,
            spotName: '에버랜드',
            spotLatitude: 37.29707,
            spotLogitude: 127.208
          }, {
            order: 2,
            spotName: '롯데월드',
            spotLatitude: 37.5111,
            spotLogitude: 127.7472
          }]
        }, {
          date: new Date(),
          spots: [{
            order: 1,
            spotName: '창경궁',
            spotLatitude: 37.58025,
            spotLogitude: 126.9948
          }, {
            order: 2,
            spotName: '창덕궁',
            spotLatitude: 37.58239,
            spotLogitude: 126.9917
          }]
        }]
      }]
    };
  });
}; //initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    Title: data.Title,
    content: data.content,
    User: {
      id: 1,
      nickname: '이원영'
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '이원영'
    }
  };
}; // 리듀서 : 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성은 지키면서)


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50; // 50개보다 적으면 hasMorePost가 true. 즉, 50개 게시글만 가져와서 보겠다.

        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          // immer가 알아서 불변성을 해결해준다.
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          });
          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break; // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
          // const post = { ...state.mainPosts[postIndex] };
          // post.Comments = [dummyComment(action.data.content), ...post.Comments];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;
          // return {
          //     ...state,
          //     mainPosts,
          //     addCommentLoading: false,
          //     addCommentDone: true,
          // };
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJUaXRsZSIsImZha2VyIiwibG9yZW0iLCJzZW50ZW5jZSIsIlVzZXIiLCJuaWNrbmFtZSIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwiU2NoZWR1bGVzIiwibnVtYmVyT2ZUcmlwIiwiVHJpcERhdGVzIiwiZGF0ZSIsIkRhdGUiLCJSb3V0ZXMiLCJzcG90cyIsIm9yZGVyIiwic3BvdE5hbWUiLCJzcG90TGF0aXR1ZGUiLCJzcG90TG9naXR1ZGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsInBvc3QiLCJmaW5kIiwicG9zdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQ3hCQyxTQUFTLEVBQUUsRUFEYTtFQUV4QkMsVUFBVSxFQUFFLEVBRlk7RUFHeEJDLFlBQVksRUFBRSxJQUhVO0VBSXhCQyxnQkFBZ0IsRUFBRSxLQUpNO0VBS3hCQyxhQUFhLEVBQUUsS0FMUztFQU14QkMsY0FBYyxFQUFFLElBTlE7RUFPeEJDLGNBQWMsRUFBRSxLQVBRO0VBUXhCQyxXQUFXLEVBQUUsS0FSVztFQVN4QkMsWUFBWSxFQUFFLElBVFU7RUFVeEJDLGlCQUFpQixFQUFFLEtBVks7RUFXeEJDLGNBQWMsRUFBRSxLQVhRO0VBWXhCQyxlQUFlLEVBQUUsSUFaTztFQWF4QkMsaUJBQWlCLEVBQUUsS0FiSztFQWN4QkMsY0FBYyxFQUFFLEtBZFE7RUFleEJDLGVBQWUsRUFBRTtBQWZPLENBQXJCLEMsQ0FxQlA7QUFDQTs7QUFDTyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE1BQUQ7RUFBQSxPQUFZQyxLQUFLLENBQUNELE1BQUQsQ0FBTCxDQUFjRSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QjtJQUFBLE9BQU87TUFDekVDLEVBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURxRTtNQUV6RUMsS0FBSyxFQUFFQyxxREFBSyxDQUFDQyxL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Q0g7O01BQ0QsS0FBSzhDLG1CQUFMO1FBQ0lXLEtBQUssQ0FBQzFELGlCQUFOLEdBQTBCLEtBQTFCO1FBQ0EwRCxLQUFLLENBQUN4RCxlQUFOLEdBQXdCc0QsTUFBTSxDQUFDSyxLQUEvQjtRQUNBOztNQUVKO1FBQ0k7SUFyRlI7RUF1RkgsQ0F4RmEsQ0FBZDtBQXlGSCxDQTFGRDs7QUE0RmVQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhNDc5MjYyZGNlYjc0YTEyOTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxufTtcclxuXHJcblxyXG5cclxuLy8g7ISc67KE7JeQ7IScIOuNsOydtO2EsCDrtojrn6zsmKTripQg6rGw66W8IOydtCDtlajsiJjroZwg7J2864uoIOuMgOyytFxyXG4vLyArIOyduO2UvOuLiO2KuCDsiqTtgazroaTrp4FcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVGl0bGU6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9LCB7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9LCB7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnbGVlJ1xyXG4gICAgICAgICAgICAvLyBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAvLyBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG4gICAgU2NoZWR1bGVzOiBbe1xyXG4gICAgICAgIG51bWJlck9mVHJpcDogMixcclxuICAgICAgICBUcmlwRGF0ZXM6IFt7XHJcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKClcclxuICAgICAgICB9LCB7ZGF0ZTogbmV3IERhdGUoKVxyXG4gICAgICAgIH0sICBcclxuICAgICAgICBdLFxyXG4gICAgICAgIFJvdXRlczogW3tcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgc3BvdHM6IFt7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgIHNwb3ROYW1lOiAn7JeQ67KE656c65OcJyxcclxuICAgICAgICAgICAgICAgIHNwb3RMYXRpdHVkZTogMzcuMjk3MDcsXHJcbiAgICAgICAgICAgICAgICBzcG90TG9naXR1ZGU6IDEyNy4yMDgsIFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgIHNwb3ROYW1lOiAn66Gv642w7JuU65OcJyxcclxuICAgICAgICAgICAgICAgIHNwb3RMYXRpdHVkZTogMzcuNTExMSxcclxuICAgICAgICAgICAgICAgIHNwb3RMb2dpdHVkZTogMTI3Ljc0NzIsXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBzcG90czogW3tcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgc3BvdE5hbWU6ICfssL3qsr3qtoEnLFxyXG4gICAgICAgICAgICAgICAgc3BvdExhdGl0dWRlOiAzNy41ODAyNSxcclxuICAgICAgICAgICAgICAgIHNwb3RMb2dpdHVkZTogMTI2Ljk5NDgsIFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgIHNwb3ROYW1lOiAn7LC9642V6raBJyxcclxuICAgICAgICAgICAgICAgIHNwb3RMYXRpdHVkZTogMzcuNTgyMzksXHJcbiAgICAgICAgICAgICAgICBzcG90TG9naXR1ZGU6IDEyNi45OTE3LFxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICB9LFxyXG4gICAgXVxyXG5cclxuXHJcbiAgICB9XVxyXG59KSlcclxuXHJcblxyXG4vL2luaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChnZW5lcmF0ZUR1bW15UG9zdCgxMCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgVGl0bGU6IGRhdGEuVGl0bGUsXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsnbTsm5DsmIEnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDogZGF0YSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+ydtOybkOyYgScsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8vIOumrOuTgOyEnCA6IOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJggKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDsgLy8gNTDqsJzrs7Tri6Qg7KCB7Jy866m0IGhhc01vcmVQb3N06rCAIHRydWUuIOymiSwgNTDqsJwg6rKM7Iuc6riA66eMIOqwgOyguOyZgOyEnCDrs7TqsqDri6QuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgLy8gaW1tZXLqsIAg7JWM7JWE7IScIOu2iOuzgOyEseydhCDtlbTqsrDtlbTspIDri6QuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTsgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=