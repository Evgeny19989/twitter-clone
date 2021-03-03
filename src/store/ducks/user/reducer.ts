import produce, {Draft} from 'immer'
import {User, userState} from "./contracts/state";
import {UserActions} from "./actionCreators";

import {UserActionType} from './contracts/ActionTypes';

import {LoadingStatus} from "../tweets/contracts/state";

const initialTweetsState: userState = {
    data: undefined,
    status: LoadingStatus.NEVER,

}

export const UserReducer = produce((draft: Draft<userState>, action: UserActions) => {


    switch (action.type) {
        case UserActionType.SET_USER_DATA :
            draft.data = action.payload
            draft.status = LoadingStatus.SUCCESS
            break;

        case UserActionType.SET_LOADING_STATE :
            draft.status = action.payload
            break;

        default:
            break
    }


}, initialTweetsState)