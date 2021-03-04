import {call, put, takeEvery} from 'redux-saga/effects'
import {AddTweet, RemoveTweet, SetAddFormState, setTweetLoading, SetTweets} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingStatus, Tweet} from "./contracts/state";
import {FetchAddTweetActionInterface, RemoveTweetActionInterface, TweetsActionType} from './contracts/ActionTypes';



// ...

// Our worker Saga: will perform the async increment task
export function* fetchTweetsRequest() {

    try {

        const data = yield call(TweetsApi.fetchTweets)
        yield put(SetTweets(data))
    } catch (error) {
        yield put(setTweetLoading(LoadingStatus.ERROR))
    }


}


export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface) {


    try {

        const item = yield call(TweetsApi.addTweetData, payload)
        yield put(AddTweet(item))
    } catch
        (error) {
        yield put(SetAddFormState(AddFormState.ERROR))
    }


}

export function* removeTweetRequest({payload}: RemoveTweetActionInterface) {


    try {

         yield call(TweetsApi.removeTweet, payload)

    } catch
        (error) {
       alert('Ошибка при удаление твита')
    }


}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest)
    yield takeEvery(TweetsActionType.REMOVE_TWEET, removeTweetRequest)
}