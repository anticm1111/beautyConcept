import * as TYPES from "../actions/types";
import { produce } from "immer";

const defaultState = {
  isLoaded: false,
  data: [],
  // error: null,
};

export default (state = defaultState, { type = "", payload = [] }) =>
  produce(state, (draft) => {
    switch (type) {
      case TYPES.FETCH_USERS_STARTED:
        draft.isLoaded = false;
        // draft.error = null;
        return draft;

      case TYPES.FETCH_USERS_FINISHED:
        draft.isLoaded = true;
        draft.data = payload;
        return draft;

      // koristim u slucaju ERRORPAGE, ne za errorReducer
      case TYPES.FETCH_USERS_ERROR:
        draft.isLoaded = true;
        draft.data = [];
        // draft.error = payload;

        return draft;

      default:
        return;
    }
  });
