webpackHotUpdate_N_E("pages/_app",{

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
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].name.findName()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJUaXRsZSIsImZha2VyIiwibG9yZW0iLCJzZW50ZW5jZSIsIlVzZXIiLCJuaWNrbmFtZSIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwiU2NoZWR1bGVzIiwibnVtYmVyT2ZUcmlwIiwiVHJpcERhdGVzIiwiZGF0ZSIsIkRhdGUiLCJSb3V0ZXMiLCJzcG90cyIsIm9yZGVyIiwic3BvdE5hbWUiLCJzcG90TGF0aXR1ZGUiLCJzcG90TG9naXR1ZGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsInBvc3QiLCJmaW5kIiwicG9zdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQ3hCQyxTQUFTLEVBQUUsRUFEYTtFQUV4QkMsVUFBVSxFQUFFLEVBRlk7RUFHeEJDLFlBQVksRUFBRSxJQUhVO0VBSXhCQyxnQkFBZ0IsRUFBRSxLQUpNO0VBS3hCQyxhQUFhLEVBQUUsS0FMUztFQU14QkMsY0FBYyxFQUFFLElBTlE7RUFPeEJDLGNBQWMsRUFBRSxLQVBRO0VBUXhCQyxXQUFXLEVBQUUsS0FSVztFQVN4QkMsWUFBWSxFQUFFLElBVFU7RUFVeEJDLGlCQUFpQixFQUFFLEtBVks7RUFXeEJDLGNBQWMsRUFBRSxLQVhRO0VBWXhCQyxlQUFlLEVBQUUsSUFaTztFQWF4QkMsaUJBQWlCLEVBQUUsS0FiSztFQWN4QkMsY0FBYyxFQUFFLEtBZFE7RUFleEJDLGVBQWUsRUFBRTtBQWZPLENBQXJCLEMsQ0FrQlA7QUFDQTs7QUFDTyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE1BQUQ7RUFBQSxPQUFZQyxLQUFLLENBQUNELE1BQUQsQ0FBTCxDQUFjRSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QjtJQUFBLE9BQU87TUFDekVDLEVBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURxRTtNQUV6RUMsS0FBSyxFQUFFQyxxREFBSyxDQUFDQyxL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QUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtRQUNIOztNQUNELEtBQUs4QyxtQkFBTDtRQUNJVyxLQUFLLENBQUMxRCxpQkFBTixHQUEwQixLQUExQjtRQUNBMEQsS0FBSyxDQUFDeEQsZUFBTixHQUF3QnNELE1BQU0sQ0FBQ0ssS0FBL0I7UUFDQTs7TUFFSjtRQUNJO0lBckZSO0VBdUZILENBeEZhLENBQWQ7QUF5RkgsQ0ExRkQ7O0FBNEZlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJiYmNkNmI4NzY4NWQ2YTk2ZGE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuLy8g7ISc67KE7JeQ7IScIOuNsOydtO2EsCDrtojrn6zsmKTripQg6rGw66W8IOydtCDtlajsiJjroZwg7J2864uoIOuMgOyytFxyXG4vLyArIOyduO2UvOuLiO2KuCDsiqTtgazroaTrp4FcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVGl0bGU6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9LCB7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9LCB7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxuICAgIFNjaGVkdWxlczogW3tcclxuICAgICAgICBudW1iZXJPZlRyaXA6IDIsXHJcbiAgICAgICAgVHJpcERhdGVzOiBbe1xyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfSwge2RhdGU6IG5ldyBEYXRlKClcclxuICAgICAgICB9LCAgXHJcbiAgICAgICAgXSxcclxuICAgICAgICBSb3V0ZXM6IFt7XHJcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHNwb3RzOiBbe1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICBzcG90TmFtZTogJ+yXkOuyhOuenOuTnCcsXHJcbiAgICAgICAgICAgICAgICBzcG90TGF0aXR1ZGU6IDM3LjI5NzA3LFxyXG4gICAgICAgICAgICAgICAgc3BvdExvZ2l0dWRlOiAxMjcuMjA4LCBcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICBzcG90TmFtZTogJ+uhr+uNsOyblOuTnCcsXHJcbiAgICAgICAgICAgICAgICBzcG90TGF0aXR1ZGU6IDM3LjUxMTEsXHJcbiAgICAgICAgICAgICAgICBzcG90TG9naXR1ZGU6IDEyNy43NDcyLFxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgc3BvdHM6IFt7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgIHNwb3ROYW1lOiAn7LC96rK96raBJyxcclxuICAgICAgICAgICAgICAgIHNwb3RMYXRpdHVkZTogMzcuNTgwMjUsXHJcbiAgICAgICAgICAgICAgICBzcG90TG9naXR1ZGU6IDEyNi45OTQ4LCBcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICBzcG90TmFtZTogJ+ywveuNleq2gScsXHJcbiAgICAgICAgICAgICAgICBzcG90TGF0aXR1ZGU6IDM3LjU4MjM5LFxyXG4gICAgICAgICAgICAgICAgc3BvdExvZ2l0dWRlOiAxMjYuOTkxNyxcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcblxyXG4gICAgfV1cclxufSkpXHJcblxyXG5cclxuLy9pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMTApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgVGl0bGU6IGRhdGEuVGl0bGUsXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsnbTsm5DsmIEnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDogZGF0YSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+ydtOybkOyYgScsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8vIOumrOuTgOyEnCA6IOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJggKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDsgLy8gNTDqsJzrs7Tri6Qg7KCB7Jy866m0IGhhc01vcmVQb3N06rCAIHRydWUuIOymiSwgNTDqsJwg6rKM7Iuc6riA66eMIOqwgOyguOyZgOyEnCDrs7TqsqDri6QuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgLy8gaW1tZXLqsIAg7JWM7JWE7IScIOu2iOuzgOyEseydhCDtlbTqsrDtlbTspIDri6QuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTsgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=