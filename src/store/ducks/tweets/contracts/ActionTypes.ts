import {Action} from "redux";
import {LoadingStatus, Tweet, TweetsState} from "./state";

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',


}


export interface AddTweetActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.ADD_TWEET;
    payload: Tweet;
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.FETCH_ADD_TWEET;
    payload: string
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
    payload:LoadingStatus

}