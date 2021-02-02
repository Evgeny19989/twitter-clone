import {combineReducers} from 'redux'
import {TweetsReducer} from './ducks/tweets/reducer'

export const rootReducer = combineReducers({
tweets : TweetsReducer
})