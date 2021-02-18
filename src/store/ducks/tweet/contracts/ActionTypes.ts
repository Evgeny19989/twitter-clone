import {Action} from "redux";
import {TweetState} from "./state";
import {LoadingStatus} from "../../tweets/contracts/state";

export enum TweetActionsType {
    SET_DATA = 'tweet/SET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
    FETCH_ADD_DATA = 'tweet/FETCH_ADD_DATA'
,
}


export interface SetTweetDataActionInterface extends Action<TweetActionsType>{
    type:TweetActionsType.SET_DATA;
    payload:TweetState['data']
}



export interface FetchAddTweetDataActionInterface extends Action<TweetActionsType>{
    type:TweetActionsType.FETCH_ADD_DATA;
    payload:string
}

export interface SetTweetLoadingInterface extends Action<TweetActionsType>{
    type:TweetActionsType.SET_LOADING_STATE;
    payload:LoadingStatus

}

