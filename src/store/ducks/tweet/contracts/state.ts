import {LoadingStatus, Tweet} from "../../tweets/contracts/state";






export interface TweetState {
    data?: Tweet;
    LoadingStatus: LoadingStatus;

}
