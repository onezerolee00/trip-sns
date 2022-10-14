import shortId from 'shortid';
import produce from 'immer';
import { faker } from '@faker-js/faker';

export const initialState = {
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
    addCommentError: null,
};

// 서버에서 데이터 불러오는 거를 이 함수로 일단 대체
// + 인피니트 스크롤링
export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
    Title: faker.lorem.sentence(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName()
    },
    content: faker.lorem.paragraph(),
    Images: [{
        src: faker.image.image()
    }, {
        src: faker.image.image()
    }, {
        src: faker.image.image()
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
    Schedules: [{
        numberOfTrip: 2,
        TripDates: [{
            date: new Date()
        }, {date: new Date()
        },  
        ],
        Routes: [{
            date: new Date(),
            spots: [{
                order: 1,
                spotName: '에버랜드',
                spotLatitude: 37.29707,
                spotLogitude: 127.208, 
            }, {
                order: 2,
                spotName: '롯데월드',
                spotLatitude: 37.5111,
                spotLogitude: 127.7472,
            },]
        },
        {
            date: new Date(),
            spots: [{
                order: 1,
                spotName: '창경궁',
                spotLatitude: 37.58025,
                spotLogitude: 126.9948, 
            }, {
                order: 2,
                spotName: '창덕궁',
                spotLatitude: 37.58239,
                spotLogitude: 126.9917,
            },]
        },
    ]


    }]
}))


//initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';


export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: data.id,
    Title: data.Title,
    content: data.content,
    User: {
        id: 1,
        nickname: '이원영',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '이원영',
    },
});

// 리듀서 : 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 (불변성은 지키면서)
const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
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
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
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
    
            case ADD_COMMENT_SUCCESS: {
                // immer가 알아서 불변성을 해결해준다.
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
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

export default reducer;