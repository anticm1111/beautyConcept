import * as TYPES from "../actions/types";

// USER

export const getUserInfo = (data) => (dispatch) => {
  // console.log("get user info actions", data);
  dispatch({
    type: TYPES.ADD_USER_DETAILS,
    payload: data,
  });
};

export const removeUserInfo = () => (dispatch) => {
  dispatch({
    type: TYPES.REMOVE_USER_DETAILS,
  });
};
