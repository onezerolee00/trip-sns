import { all, fork, put, takeLatest, delay, take } from "redux-saga/effects";
import axios from "axios";
import { 
    LOG_IN_SUCCESS, LOG_IN_REQUEST, LOG_IN_FAILURE,
    LOG_OUT_SUCCESS, LOG_OUT_REQUEST, LOG_OUT_FAILURE,
    SIGN_UP_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILURE,
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
    UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS,
} from '../reducers/user';

function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        console.log('saga login');
        //const result = yield call(logInAPI, action.data) // call은 logInAPI가 return할 때까지 기다려서 result에 넣어주는데 fork는 비동기라서 바로 다음께 실행된다 
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
        } catch (err) {
            yield put({
                type: LOG_IN_FAILURE,
                error: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout');
}

function* logOut() {
    try {
        //const result = yield call(logOutAPI) // call은 logInAPI가 return할 때까지 기다려서 result에 넣어주는데 fork는 비동기라서 바로 다음께 실행된다 
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
        } catch (err) {
            yield put({
                type: LOG_OUT_FAILURE,
                error: err.response.data,
        });
    }
}

function signUpAPI() {
    return axios.post('/api/signUp');
}

function* signUp() {
    try {
        //const result = yield call(signUpAPI) // call은 logInAPI가 return할 때까지 기다려서 result에 넣어주는데 fork는 비동기라서 바로 다음께 실행된다 
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
        } catch (err) {
            yield put({
                type: SIGN_UP_FAILURE,
                error: err.response.data,
        });
    }
}

function followAPI() {
    return axios.post('/api/follow');
}

function* follow(action) {
    try {
        //const result = yield call(followAPI) // call은 logInAPI가 return할 때까지 기다려서 result에 넣어주는데 fork는 비동기라서 바로 다음께 실행된다 
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
        } catch (err) {
            yield put({
                type: FOLLOW_FAILURE,
                error: err.response.data,
        });
    }
}

function unfollowAPI() {
    return axios.post('/api/unfollow');
}

function* unfollow(action) {
    try {
        //const result = yield call(unfollowAPI) // call은 logInAPI가 return할 때까지 기다려서 result에 넣어주는데 fork는 비동기라서 바로 다음께 실행된다 
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });
        } catch (err) {
            yield put({
                type: UNFOLLOW_FAILURE,
                error: err.response.data,
        });
    }
}


function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
    // takeLatest 실수로 로그인 따닥 두번 실행했을 때 앞에 실수거는 무시되고 마지막것만 요청됨
    // while로 감싸는 이유? 이거 이벤트리스너같은건데 일회용이라서 => takeEvery
    yield takeLatest(LOG_IN_REQUEST, logIn);  // take란 LOG_IN 액션이 실행될 때 까지 기다리겠다
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);  
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchUnfollow),
        fork(watchFollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}