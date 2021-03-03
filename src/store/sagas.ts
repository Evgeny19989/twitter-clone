import { all } from "redux-saga/effects";
import { tweetsSaga } from "./ducks/tweets/saga";
import {tagsSaga} from "./ducks/tags/saga";
import { tweetSaga } from "./ducks/tweet/saga";
import { userSaga } from "./ducks/user/saga";
import { usersSaga } from "./ducks/users/saga";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        tagsSaga(),
        tweetSaga(),
        userSaga(),
        usersSaga()
    ])
}