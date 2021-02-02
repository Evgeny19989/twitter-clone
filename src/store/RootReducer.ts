import {combineReducers} from 'redux'
import {TweetsReducer} from './ducks/tweets/reducer'
import {tagsReducer} from "./ducks/tags/reducer";

export const rootReducer = combineReducers({
tweets : TweetsReducer,
    tags:tagsReducer
})