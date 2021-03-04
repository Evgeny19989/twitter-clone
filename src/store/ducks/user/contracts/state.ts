import {LoadingStatus} from "../../tweets/contracts/state";

export interface User {
    _id?: string;
    email: string;
    fullname: string;
    username: string;
    password: string;
    confirmed_hash: string;
    confirmed?: boolean;
    location?: string;
    about?: string;
    website?: string;
}

export interface userState {
    data: User | undefined,
    status: LoadingStatus
}

