import {Action} from "redux";
import {User,} from "./state";
import {LoadingStatus} from "../../tweets/contracts/state";
import {LoginFormProps} from "../../../../pages/Signin/components/LoginModal";
import {RegisterFormProps} from "../../../../pages/Signin/components/RegisterModal";


export enum UserActionType {
SET_USER_DATA = 'user/SET_USER_DATA',
SET_LOADING_STATE = 'user/SET_LOADING_STATE',
FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
FETCH_USER_DATA = 'user/FETCH_USER_DATA',


}


export interface SetUserDataActionInterface extends Action<UserActionType> {
    type: UserActionType.SET_USER_DATA;
    payload: User | undefined;
}

export interface FetchSignInActionInterface extends Action<UserActionType> {
    type: UserActionType.FETCH_SIGN_IN;
    payload: LoginFormProps
}

export interface FetchSignUpActionInterface extends Action<UserActionType> {
    type: UserActionType.FETCH_SIGN_UP;
    payload: RegisterFormProps
}

export interface FetchUserDataActionInterface extends Action<UserActionType> {
    type: UserActionType.FETCH_USER_DATA;
}


export interface SetLoadingStateActionInterface extends Action<UserActionType> {
    type: UserActionType.SET_LOADING_STATE;
    payload: LoadingStatus;
}
