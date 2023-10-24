import * as TYPES from "../actions/types";
import { produce } from "immer";

const defaultState = {
  isLoaded: false,
  data: [],
  // _id: "",
  // name: "",
  // sku: "",
  // featuredImage: "",
  // category: "",
  // brand: "",
  // stock: 0,
};

export default (state = defaultState, { type = "", payload = [] }) =>
  produce(state, (draft) => {
    // console.log("productReducer payload", payload);

    switch (type) {
      case TYPES.FETCH_PRODUCTS_STARTED:
        draft.isLoaded = false;
        return draft;

      case TYPES.FETCH_PRODUCTS_FINISHED:
        draft.data = payload;
        draft.isLoaded = true;
        return draft;

      case TYPES.FETCH_PRODUCTS_ERROR:
        draft = null;
        draft.isLoaded = false;
        return draft;

      default:
        return;
    }
  });
