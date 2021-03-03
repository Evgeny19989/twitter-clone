import {userState} from "./contracts/state";
import {RootState} from "../../store";
import {LoadingStatus} from "../tweets/contracts/state";

export const selectUserState = (state:RootState) : userState => state.user

export const selectUserStatus = (state:RootState) : userState['status'] => selectUserState(state).status
export const selectISAuth = (state:RootState) : boolean => !!selectUserState(state).data

export const selectUserIsLoading = (state: RootState): boolean =>
    selectUserState(state).status === LoadingStatus.LOADING;

export const selectUserIsLoaded = (state: RootState): boolean =>
    selectUserState(state).status === LoadingStatus.LOADED;



export const selectUserData = (state:RootState) : userState['data'] => selectUserState(state).data



