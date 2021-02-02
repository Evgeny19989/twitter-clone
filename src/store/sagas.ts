import { all } from "redux-saga/effects";
import { tweetsSaga } from "./ducks/tweets/saga";

export default function* rootSaga() {
    yield all([
        tweetsSaga()
    ])
}