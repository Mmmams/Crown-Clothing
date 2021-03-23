import shopActionsTypes from "./shop.types.js";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: shopActionsTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collection");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fecthCollectionFailure(error.message)));
  };
};

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: shopActionsTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fecthCollectionFailure = (errorMessage) => ({
  type: shopActionsTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});
