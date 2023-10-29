import * as TYPES from "../actions/types";
import { produce } from "immer";

const defaultState = {
  isError: false,
  showModal: false,
  message: "",
  status: "",
};

export default (state = defaultState, { type = "", payload = [] }) =>
  produce(state, (draft) => {
    switch (type) {
      case TYPES.ERROR_THROWN:
        draft.isError = true;
        draft.showModal = true;
        draft.message = payload.message;
        draft.status = payload.request.status;
        return draft;

      case TYPES.ERROR_DISMISSED:
        draft.showModal = false;

      case TYPES.ERROR_NULL:
        draft.isError = false;
        draft.showModal = false;
        draft.message = "";
        draft.status = "";
        return draft;
      default:
        return;
    }
  });
