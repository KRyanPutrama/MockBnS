import { all } from "redux-saga/effects";
import AuthSaga from "./AuthSaga";
import blogsSaga from "./blogSaga";

export default function* rootSagas() {
    yield all([AuthSaga(), blogsSaga()])
}