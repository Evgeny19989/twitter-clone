import {call, put, takeEvery} from 'redux-saga/effects'
import {setTweetLoading, SetTweets, TweetsActionType} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";


// ...

// Our worker Saga: will perform the async increment task
export function* fetchTweetsRequest() {

    try {

        const data = yield call(TweetsApi.fetchTweets)
        yield put(SetTweets(data))
    }
    catch(error) {
yield put(setTweetLoading(LoadingState.ERROR))
    }


}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
}