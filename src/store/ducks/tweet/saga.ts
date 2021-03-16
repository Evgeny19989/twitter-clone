import {call, put, takeEvery} from 'redux-saga/effects'
import {

    SetTweet,
    setTweetLoading,

} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingStatus} from '../tweets/contracts/state';

import {FetchAddTweetDataActionInterface, TweetActionsType} from './contracts/ActionTypes';


export function* fetchTweetRequest({payload: tweetId}: FetchAddTweetDataActionInterface) {
    try {
        const data = yield call(TweetsApi.fetchTweetData, tweetId)
        yield put(SetTweet(data))
    } catch (error) {
        yield put(setTweetLoading(LoadingStatus.ERROR))
    }
}


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_ADD_DATA, fetchTweetRequest)
}

