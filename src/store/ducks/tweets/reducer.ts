import produce, {Draft} from 'immer'
import {AddFormState, LoadingStatus, TweetsState} from "./contracts/state";
import {TweetsActions} from "./actionCreators";

import {TweetsActionType} from './contracts/ActionTypes';

const initialTweetsState: TweetsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER,
    addFormState: AddFormState.NEVER
}

export const TweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {


    switch (action.type) {
        case TweetsActionType.SET_TWEETS :
            draft.items = action.payload
            draft.LoadingStatus = LoadingStatus.LOADED
            break;
 /*       case TweetsActionType.REMOVE_TWEET:
            draft.items = draft.items.filter((obj) => obj._id !== action.payload);
            break;*/

        case TweetsActionType.FETCH_TWEETS:
            draft.items= []
            draft.LoadingStatus = LoadingStatus.LOADING
            break
        case TweetsActionType.ADD_TWEET:
            draft.items.splice(0, 0, action.payload);
            draft.addFormState = AddFormState.NEVER

            break;
        case TweetsActionType.FETCH_ADD_TWEET:
            draft.addFormState = AddFormState.LOADING
            break;

        case TweetsActionType.SET_LOADING_STATE:
            draft.LoadingStatus = LoadingStatus.LOADED
            break
        case TweetsActionType.SET_ADD_FORM_STATE:
            draft.addFormState = action.payload
            break
        case TweetsActionType.REMOVE_TWEET:
            draft.items = draft.items.filter(el => el._id !== action.payload)
            break
        default:
            break
    }


}, initialTweetsState)