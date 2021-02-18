import { TweetState} from "./contracts/state";
import {SetTweetLoadingInterface, SetTweetDataActionInterface, TweetActionsType, FetchAddTweetDataActionInterface } from "./contracts/ActionTypes";
import { LoadingStatus } from "../tweets/contracts/state";




export const setTweetLoading = (payload:LoadingStatus):SetTweetLoadingInterface =>({
    type: TweetActionsType.SET_LOADING_STATE,
    payload
})

export const SetTweet = (payload:TweetState['data']):SetTweetDataActionInterface =>({
    type: TweetActionsType.SET_DATA,
    payload
})

export const FetchAddTweet = (payload:string):FetchAddTweetDataActionInterface =>({
    type: TweetActionsType.FETCH_ADD_DATA,
    payload
})








/*export interface FetchTweetDataActionInterface extends Action<TweetActionType>{
    type:TweetActionsType.FETCH_DATA;
    payload: string;

}*/




/*

export const FetchTweet = (payload:string):FetchTweetDataActionInterface =>({
    type: TweetActionType.FETCH_DATA,
    payload

})
*/

export type TweetActions =
    SetTweetLoadingInterface |
    SetTweetDataActionInterface |
    FetchAddTweetDataActionInterface
