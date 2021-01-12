import axios from 'axios'
import { all, call, put, takeEvery, fork } from 'redux-saga/effects'
import { CLEAR_ERROR_FAILURE, CLEAR_ERROR_REQUEST, CLEAR_ERROR_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, USER_LOADING_FAILURE, USER_LOADING_REQUEST, USER_LOADING_SUCCESS } from '../types'

// LOGIN USER API

const loginUserAPI = (data) => {
    console.log(data, "data")
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    return axios.post('api/auth', data, config)
}

function* loginUser(action) {
    try{
        const result = yield call(loginUserAPI, action.payload)
        console.log(result)
        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data
        })
    } catch(e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: e.response
        })
    }
}

function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser)
}




//LOGOUT
function* logout(action) {
    try{
        yield put({
            type: LOGOUT_SUCCESS,
        })
    } catch(e) {
        yield put({
            type: LOGOUT_FAILURE,
        });

        console.log(e);
    }
}





// USER LOADING

const userLoadingAPI = (token) => {
    console.log(token);
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if(token) {
        config.headers["x-auth-token"] = token
    }

    return axios.get("api/auth/user", config);
}

function* userLoading(action) {
    try{
        console.log(action, "userLoading");
        let result;

        if(action.payload){
            result = yield call(userLoadingAPI, action.payload)
        }else{
            throw new Error();
        }

        console.log(result)
        yield put({
            type: USER_LOADING_SUCCESS,
            payload: result.data
        })
    } catch(e) {
        yield put({
            type: USER_LOADING_FAILURE,
            payload: e.response
        })
    }
}

function* watchuserLoading() {
    yield takeEvery(USER_LOADING_REQUEST, userLoading)
}







function* watchLogout() {
    yield takeEvery(LOGOUT_REQUEST, logout);
}



// REGISTER

const registerUserAPI = (registerData) => {
    console.log(registerData, "registerData")
    
    return axios.post('api/user', registerData);
}

function* registerUser(action) {
    try{
        const result = yield call(registerUserAPI, action.payload)
        console.log(result, "RegisterUser Data")
        yield put({
            type: REGISTER_SUCCESS,
            payload: result.data
        })
    } catch(e) {
        yield put({
            type: REGISTER_FAILURE,
            payload: e.response
        })
    }
}

function* watchregisterUser() {
    yield takeEvery(REGISTER_REQUEST, registerUser)
}



// Clear Error

function* clearError() {
    try{
        yield put({
            type: CLEAR_ERROR_SUCCESS,
        })
    } catch(e) {
        yield put({
            type: CLEAR_ERROR_FAILURE,
        })
    }
}

function* watchclearError() {
    yield takeEvery(CLEAR_ERROR_REQUEST, clearError)
}






export default function* authSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogout),
        fork(watchregisterUser),
        fork(watchclearError),
        fork(watchuserLoading),
    ]);
}