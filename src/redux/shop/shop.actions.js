import shopActionsTypes from "./shop.types.js";

export const updateCollections = (collectionsMap) => ({
  type: shopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
