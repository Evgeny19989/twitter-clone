import {AddFormState, LoadingStatus, TweetsState} from "./contracts/state";
import {RootState} from "../../store";
import {createSelector} from "reselect";


export  const  selectTweetsState= (state:RootState): TweetsState =>  state.tweets

export  const selectTweetsItems =  (state:RootState) => selectTweetsState(state).items

export  const selectLoadingState = (state:RootState) : LoadingStatus => selectTweetsState(state).LoadingStatus

export const  selectIsTweetsLoaded = (state:RootState) : boolean =>
    selectLoadingState(state) === LoadingStatus.LOADED


export const  selectAddFormState = (state:RootState) : AddFormState =>
    selectTweetsState(state).addFormState


export const  selectIsTweetsLoading = (state:RootState) : boolean =>
    selectLoadingState(state) === LoadingStatus.LOADING