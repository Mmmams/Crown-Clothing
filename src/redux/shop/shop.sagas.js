import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fecthCollectionFailure, fetchCollectionSuccess } from "./shop.actions";

import shopActionsTypes from "./shop.types";
// redux saga doesnt use dispatch to pass actions, saga use put method
export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collection");

    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    ); // first arg in call is fucntion other args are arguments for this fucntion
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fecthCollectionFailure(error.message));
  }
}
//takeLatest do similar work which do takeEvery, but will complete only last(click for example)
export function* fetchCollectionStart() {
  yield takeLatest(
    shopActionsTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
