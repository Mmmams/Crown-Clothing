import shopActionsTypes from "./shop.types.js";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: shopActionsTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {};
};

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: shopActionsTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fecthCollectionFailure = (errorMessage) => ({
  type: shopActionsTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});
