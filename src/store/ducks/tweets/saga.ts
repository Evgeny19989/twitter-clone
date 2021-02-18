import {call, put, takeEvery} from 'redux-saga/effects'
import {AddTweet, setTweetLoading, SetTweets} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingStatus, Tweet} from "./contracts/state";
import {FetchAddTweetActionInterface, TweetsActionType} from './contracts/ActionTypes';



// ...

// Our worker Saga: will perform the async increment task
export function* fetchTweetsRequest() {

    try {

        const data = yield call(TweetsApi.fetchTweets)
        yield put(SetTweets(data))
    }
    catch(error) {
yield put(setTweetLoading(LoadingStatus.ERROR))
    }


}



export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface) {


    try {
        const data:Tweet = {
            _id:Math.random().toString(36).substr(2),
            text:payload,
            user: {
                fullname: 'Test',
                username: 'Test',
                avatarUrl: 'https://source.unsplash.com/random/100x100?3',

            }

        }
        const item = yield call(TweetsApi.addTweetData, data)
        yield put(AddTweet(item))
    } catch
        (error)
    {
        yield put(setTweetLoading(LoadingStatus.ERROR))
    }


}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}