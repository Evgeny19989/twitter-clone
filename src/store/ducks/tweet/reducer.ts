import produce, {Draft} from 'immer'
import { LoadingStatus } from '../tweets/contracts/state';
import { TweetActions, TweetActionType } from './actionCreators';
import { TweetState} from './contracts/state';




const initialTweetState: TweetState = {
   data: undefined ,
    LoadingStatus: LoadingStatus.NEVER
}

export const TweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {


    switch (action.type) {
        case TweetActionType.SET_DATA :
            draft.data = action.payload
            draft.LoadingStatus = LoadingStatus.LOADED
            break;

        case TweetActionType.FETCH_DATA:
            draft.data = undefined
            draft.LoadingStatus = LoadingStatus.LOADING
            break

        case TweetActionType.SET_LOADING_STATE:
            draft.LoadingStatus = action.payload
            break
        default:
            break
    }


}, initialTweetState)