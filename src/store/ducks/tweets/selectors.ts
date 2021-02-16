import {LoadingStatus, TweetsState} from "./contracts/state";
import {RootState} from "../../store";
import {createSelector} from "reselect";


export  const  selectTweets= (state:RootState): TweetsState =>  state.tweets

export  const selectTweetsItems = createSelector(selectTweets , (tweets) => tweets.items)

export  const selectLoadingState = (state:RootState) : LoadingStatus => selectTweets(state).LoadingStatus

export const  selectIsTweetsLoaded = (state:RootState) : boolean =>
    selectLoadingState(state) === LoadingStatus.LOADED

export const  selectIsTweetsLoading = (state:RootState) : boolean =>
    selectLoadingState(state) === LoadingStatus.LOADING