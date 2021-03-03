import {combineReducers} from 'redux'
import {TweetsReducer} from './ducks/tweets/reducer'
import {tagsReducer} from "./ducks/tags/reducer";
import {TweetReducer} from "./ducks/tweet/reducer";
import {UserReducer} from "./ducks/user/reducer";
import { usersReducer } from './ducks/users/reducer';

export const rootReducer = combineReducers({
tweets : TweetsReducer,
    tags:tagsReducer,
    tweet:TweetReducer,
    user:UserReducer,
    users:usersReducer
})