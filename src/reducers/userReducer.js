import { produce } from "immer";
import * as TYPES from "../actions/types";

const defaultState = {
  id: "",
  first_name: "",
  last_name: "",
  isAdmin: "",
};

export default (state = defaultState, { type = "", payload = [] }) =>
  produce(state, (draft) => {
    // console.log("userReducer payload", payload);
    switch (type) {
      case TYPES.ADD_USER_DETAILS:
        draft = payload;
        return draft;

      case TYPES.REMOVE_USER_DETAILS:
        draft = "";
        // testiraj za admina
        console.log("logout dispatch", draft);

        return draft;

      default:
        return;
    }
  });
