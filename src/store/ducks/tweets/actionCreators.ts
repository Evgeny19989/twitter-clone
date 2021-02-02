import {LoadingState, TweetsState} from "./contracts/state";
import {Action} from "redux";

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',

}

export interface SetTweetsActionInterface extends Action<TweetsActionType>{
    type:TweetsActionType.SET_TWEETS;
    payload:TweetsState['items']
}


export interface FetchTweetsActionInterface extends Action<TweetsActionType>{
    type:TweetsActionType.FETCH_TWEETS;

}

export interface SetTweetLoadingInterface extends Action<TweetsActionType>{
    type:TweetsActionType.SET_LOADING_STATE;
    payload:LoadingState

}

export const setTweetLoading = (payload:LoadingState):SetTweetLoadingInterface =>({
    type: TweetsActionType.SET_LOADING_STATE,
    payload
})

export const SetTweets = (payload:TweetsState['items']):SetTweetsActionInterface =>({
    type: TweetsActionType.SET_TWEETS,
    payload
})
export const FetchTweets = ():FetchTweetsActionInterface =>({
    type: TweetsActionType.FETCH_TWEETS,

})

export type TweetsActions = SetTweetsActionInterface | SetTweetLoadingInterface | FetchTweetsActionInterface