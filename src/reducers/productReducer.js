import { produce } from "immer";
import * as TYPES from "../actions/types";

const defaultState = {
  isLoaded: false,
  productDetails: {},
};
export default (state = defaultState, { type = "", payload = [] }) =>
  produce(state, (draft) => {
    switch (type) {
      case TYPES.FETCH_PRODUCT_STARTED:
        draft.isLoaded = false;
        return draft;

      case TYPES.FETCH_PRODUCT_FINISHED:
        draft.isLoaded = true;
        draft.productDetails = payload;
        return draft;

      case TYPES.FETCH_PRODUCT_ERROR:
        draft.isLoaded = false;
        draft.productDetails = {};
        return draft;

      default:
        return;
    }
  });
