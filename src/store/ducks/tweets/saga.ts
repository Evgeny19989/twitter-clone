import {call, put, takeEvery} from 'redux-saga/effects'
import {AddTweet, SetAddFormState, setTweetLoading, SetTweets} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingStatus, Tweet} from "./contracts/state";
import {FetchAddTweetActionInterface, TweetsActionType} from './contracts/ActionTypes';



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


export function* fetchAddTweetRequest({payload:text}: FetchAddTweetActionInterface) {


    try {

        const item = yield call(TweetsApi.addTweetData, text)
        yield put(AddTweet(item))
    } catch
        (error) {
        yield put(SetAddFormState(AddFormState.ERROR))
    }


}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}