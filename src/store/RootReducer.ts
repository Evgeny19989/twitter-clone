import {combineReducers} from 'redux'
import {TweetsReducer} from './ducks/tweets/reducer'
import {tagsReducer} from "./ducks/tags/reducer";
import {TweetReducer} from "./ducks/tweet/reducer";

export const rootReducer = combineReducers({
tweets : TweetsReducer,
    tags:tagsReducer,
    tweet:TweetReducer
})