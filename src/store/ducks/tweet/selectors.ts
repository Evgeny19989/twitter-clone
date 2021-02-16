import {LoadingStatus, TweetState} from "./contracts/state";
import {RootState} from "../../store";
import {createSelector} from "reselect";


export  const  selectTweet= (state:RootState): TweetState =>  state.tweet

export  const selectTweetData = (state:RootState):TweetState['data'] => selectTweet(state).data

export  const selectLoadingState = (state:RootState) : LoadingStatus => selectTweet(state).LoadingStatus

export const  selectIsTweetLoaded = (state:RootState) : boolean =>
    selectLoadingState(state) === LoadingStatus.LOADED

export const  selectIsTweetLoading = (state:RootState) : boolean =>
    selectLoadingState(state) === LoadingStatus.LOADING