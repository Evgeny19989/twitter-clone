import {call, put, takeEvery} from 'redux-saga/effects'
import {AuthApi} from "../../../services/api/authApi";
import {
    FetchSignInActionInterface,
    FetchSignUpActionInterface,
    UserActionType
} from './contracts/ActionTypes';
import {setUserData, setUserLoadingStatus} from "./actionCreators";
import {LoadingStatus} from '../tweets/contracts/state';


// ...

// Our worker Saga: will perform the async increment task
export function* fetchSignInRequest({payload}: FetchSignInActionInterface) {

    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING))
        const data = yield call(AuthApi.signIn, payload)
        window.localStorage.setItem('token', data.token)
        yield put(setUserData(data))

    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }


}

// Our worker Saga: will perform the async increment task
export function* fetchUserData() {

    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING))
        const data = yield call(AuthApi.getMe)
        yield put(setUserData(data))

    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }


}
// Our worker Saga: will perform the async increment task
export function* fetchSignUpRequest({payload}: FetchSignUpActionInterface) {

    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING))
        yield call(AuthApi.signUp, payload)
        yield put(setUserLoadingStatus(LoadingStatus.SUCCESS))

    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }


}


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* userSaga() {
    yield takeEvery(UserActionType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeEvery(UserActionType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeEvery(UserActionType.FETCH_USER_DATA, fetchUserData)

}