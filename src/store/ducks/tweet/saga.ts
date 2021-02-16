import {call, put, takeEvery} from 'redux-saga/effects'
import {SetTweet, setTweetLoading, TweetActionType} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingStatus} from "./contracts/state";


// ...

// Our worker Saga: will perform the async increment task
export function* fetchTweetRequest() {

    try {

        const data = yield call(TweetsApi.fetchTweetData,'5f625ff6bd97609c15525e2b4')
        yield put(SetTweet(data))
    } catch (error) {
        yield put(setTweetLoading(LoadingStatus.ERROR))
    }


}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetActionType.FETCH_DATA, fetchTweetRequest)
}