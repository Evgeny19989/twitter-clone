import {applyMiddleware, compose, createStore} from 'redux'
import {rootReducer} from "./RootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import {TweetsState} from "./ducks/tweets/contracts/state";
import { TagsState } from './ducks/tags/contracts/state';
import {TweetState} from "./ducks/tweet/contracts/state";
import {userState} from "./ducks/user/contracts/state";
import {UsersState} from "./ducks/users/contracts/state";


 declare global{
     interface Window{
         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? :typeof compose
     }
 }
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleWare = createSagaMiddleware()

export interface  RootState {
    tweets:TweetsState,
    tags:TagsState,
    tweet:TweetState,
    user:userState,
    users:UsersState
}


export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(rootSaga)