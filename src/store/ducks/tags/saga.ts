import { call, put, takeLatest } from 'redux-saga/effects';
import { setTags, setTagsLoadingState, TagsActionsType } from './actionCreators';
import { LoadingState } from './contracts/state';
import {TagsApi} from "../../../services/api/tagsApi";

export function* fetchTagsRequest() {
    try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setTags(items));
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR));
    }
}

export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
