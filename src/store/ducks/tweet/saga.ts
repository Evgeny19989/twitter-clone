import {call, put, takeEvery} from 'redux-saga/effects'
import {
    AddTweet,
    AddTweetDataActionInterface,
    FetchTweetDataActionInterface,
    SetTweet,
    setTweetLoading,
    TweetActionType
} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingStatus} from "./contracts/state";


export function* fetchTweetRequest({payload: tweetId}: FetchTweetDataActionInterface) {

    try {

        const data = yield call(TweetsApi.fetchTweetData, tweetId)
        yield put(SetTweet(data[0]))
    } catch (error) {
        yield put(setTweetLoading(LoadingStatus.ERROR))
    }


}

export function* AddTweetRequest({payload}: AddTweetDataActionInterface) {


    try {
        const data = {
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
    export function* tweetSaga() {
        yield takeEvery(TweetActionType.FETCH_DATA, fetchTweetRequest)
        yield takeEvery(TweetActionType.ADD_DATA, AddTweetRequest)
    }