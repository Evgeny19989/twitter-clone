import { Tweet } from "../../tweets/contracts/state";

export enum LoadingStatus {
    LOADED = 'LOADED',
        LOADING = 'LOADING',
        ERROR = 'ERROR',
        NEVER = 'NEVER'
}


export interface TweetState {
    data?: Tweet;
    LoadingStatus: LoadingStatus;
}
