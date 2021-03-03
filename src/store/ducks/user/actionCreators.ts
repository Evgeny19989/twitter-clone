import {userState, User} from "./contracts/state";


import {FetchSignInActionInterface, SetLoadingStateActionInterface, SetUserDataActionInterface,FetchSignUpActionInterface, UserActionType, FetchUserDataActionInterface} from "./contracts/ActionTypes";
import {LoginFormProps} from "../../../pages/Signin/components/LoginModal";
import {RegisterFormProps} from "../../../pages/Signin/components/RegisterModal";






export const setUserData = (payload:userState['data']):SetUserDataActionInterface =>({
    type: UserActionType.SET_USER_DATA,
    payload
})

export const setUserLoadingStatus = (payload:userState['status']):SetLoadingStateActionInterface =>({
    type: UserActionType.SET_LOADING_STATE,
    payload
})

export const fetchUserSighin = (payload:LoginFormProps):FetchSignInActionInterface =>({
    type: UserActionType.FETCH_SIGN_IN,
    payload
})


export const fetchUserData = ():FetchUserDataActionInterface =>({
    type: UserActionType.FETCH_USER_DATA,

})


export const fetchUserSighUp = (payload:RegisterFormProps):FetchSignUpActionInterface =>({
    type: UserActionType.FETCH_SIGN_UP,
    payload
})




export type UserActions = SetUserDataActionInterface  | SetLoadingStateActionInterface |
    FetchSignInActionInterface|
    FetchSignUpActionInterface |
    FetchUserDataActionInterface

