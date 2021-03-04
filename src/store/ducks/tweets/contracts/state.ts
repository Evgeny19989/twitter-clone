export enum LoadingStatus {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    SUCCESS = 'SUCCESS'
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
    createdAt:string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
    images:string[]
}

export interface TweetsState {
    items: Tweet[];
    LoadingStatus: LoadingStatus
    addFormState:AddFormState
}