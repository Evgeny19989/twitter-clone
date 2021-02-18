import produce, {Draft} from 'immer'
import {AddFormState, LoadingStatus} from '../tweets/contracts/state';
import { TweetActions } from './actionCreators';
import { TweetActionsType } from './contracts/ActionTypes';

import {TweetState} from './contracts/state';


const initialTweetState: TweetState = {
    data: undefined,
    LoadingStatus: LoadingStatus.NEVER,


}

export const TweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {


    switch (action.type) {
        case TweetActionsType.SET_DATA :
            draft.data = action.payload
            draft.LoadingStatus = LoadingStatus.LOADED
            break;

        case TweetActionsType.FETCH_ADD_DATA:
            draft.data = undefined
            draft.LoadingStatus = LoadingStatus.LOADING
            break

  /*      case TweetActionsType.FETCH_ADD_DATA:
          draft.addFormState = AddFormState.LOADING
            break
*/
        case TweetActionsType.SET_LOADING_STATE:
            draft.LoadingStatus = action.payload
            break
        default:
            break
    }


}, initialTweetState)