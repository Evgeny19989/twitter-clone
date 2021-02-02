export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Tag {
    _id: string;
    name: string;
    count: string;
}

export interface TagsState {
    items: Tag[]
    loadingState: LoadingState
}