import {AddFormState, LoadingStatus, Tweet, TweetsState} from "./contracts/state";


import {FetchTweetsActionInterface,RemoveTweetActionInterface, SetTweetsActionInterface, TweetsActionType,SetTweetLoadingInterface, AddTweetActionInterface, FetchAddTweetActionInterface, SetAddFormActionInterface} from "./contracts/ActionTypes";






export const AddTweet = (payload:Tweet):AddTweetActionInterface =>({
    type: TweetsActionType.ADD_TWEET,
    payload
})
export const RemoveTweet = (payload:string):RemoveTweetActionInterface =>({
    type: TweetsActionType.REMOVE_TWEET,
    payload
})


export const SetTweets = (payload:TweetsState['items']):SetTweetsActionInterface =>({
    type: TweetsActionType.SET_TWEETS,
    payload
})

export const setTweetLoading = (payload:LoadingStatus):SetTweetLoadingInterface =>({
    type: TweetsActionType.SET_LOADING_STATE,
    payload
})

export const fetchAddTweet = (payload: { text:string ,images:string[] }): FetchAddTweetActionInterface => ({
    type: TweetsActionType.FETCH_ADD_TWEET,
    payload,
});


export const SetAddFormState = (payload:AddFormState):SetAddFormActionInterface =>({
    type: TweetsActionType.SET_ADD_FORM_STATE,
    payload

})

export const FetchTweets = ():FetchTweetsActionInterface =>({
    type: TweetsActionType.FETCH_TWEETS,

})

export type TweetsActions = SetTweetsActionInterface |
    SetTweetLoadingInterface |
    FetchTweetsActionInterface |
    AddTweetActionInterface|
    FetchAddTweetActionInterface |
    SetAddFormActionInterface
