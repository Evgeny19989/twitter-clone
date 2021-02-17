import {LoadingStatus, TweetState} from "./contracts/state";
import {Action} from "redux";
import { Tweet } from "../tweets/contracts/state";


export enum TweetActionType {
 SET_DATA = 'tweet/SET_DATA',
 FETCH_DATA = 'tweet/FETCH_DATA',
 SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
 ADD_DATA = 'tweet/ADD_DATA',


}

export interface SetTweetDataActionInterface extends Action<TweetActionType>{
    type:TweetActionType.SET_DATA;
    payload:TweetState['data']
}
export const SetTweet = (payload:TweetState['data']):SetTweetDataActionInterface =>({
    type: TweetActionType.SET_DATA,
    payload
})




export interface AddTweetDataActionInterface extends Action<TweetActionType>{
    type:TweetActionType.ADD_DATA;
    payload:string
}
export const AddTweet = (payload:string):AddTweetDataActionInterface =>({
    type: TweetActionType.ADD_DATA,
    payload
})





export interface FetchTweetDataActionInterface extends Action<TweetActionType>{
    type:TweetActionType.FETCH_DATA;
    payload: string;

}

export interface SetTweetLoadingInterface extends Action<TweetActionType>{
    type:TweetActionType.SET_LOADING_STATE;
    payload:LoadingStatus

}

export const setTweetLoading = (payload:LoadingStatus):SetTweetLoadingInterface =>({
    type: TweetActionType.SET_LOADING_STATE,
    payload
})


export const FetchTweet = (payload:string):FetchTweetDataActionInterface =>({
    type: TweetActionType.FETCH_DATA,
    payload

})

export type TweetActions = FetchTweetDataActionInterface | SetTweetLoadingInterface | SetTweetDataActionInterface |AddTweetDataActionInterface