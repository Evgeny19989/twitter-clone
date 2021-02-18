export enum LoadingStatus {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export enum AddFormState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}


export interface Tweet {
    _id: string;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

export interface TweetsState {
    items: Tweet[];
    LoadingStatus: LoadingStatus
    addFormState:AddFormState
}