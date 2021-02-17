import {LoadingStatus, TweetState} from "./contracts/state";
import {RootState} from "../../store";
import { Tweet } from "../tweets/contracts/state";


export  const  selectTweet= (state:RootState): TweetState =>  state.tweet

export  const selectTweetData = (state:RootState):Tweet | undefined => selectTweet(state).data

export  const selectLoadingStatus = (state:RootState) : LoadingStatus => selectTweet(state).LoadingStatus

export const  selectIsTweetLoaded = (state:RootState) : boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADED

export const  selectIsTweetLoading = (state:RootState) : boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADING