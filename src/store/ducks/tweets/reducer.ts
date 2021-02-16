import produce, {Draft} from 'immer'
import {LoadingStatus, TweetsState} from "./contracts/state";
import {TweetsActions, TweetsActionType} from "./actionCreators";

const initialTweetsState: TweetsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER
}

export const TweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {


    switch (action.type) {
        case TweetsActionType.SET_TWEETS :
            draft.items = action.payload
            draft.LoadingStatus = LoadingStatus.LOADED
            break;

        case TweetsActionType.FETCH_TWEETS:
            draft.items= []
            draft.LoadingStatus = LoadingStatus.LOADING
            break

        case TweetsActionType.SET_LOADING_STATE:
            draft.LoadingStatus = LoadingStatus.LOADED
            break
        default:
            break
    }


}, initialTweetsState)