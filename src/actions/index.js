import { json } from "react-router";
import * as TYPES from "../actions/types";
import axios from "axios";

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

//PRODUCTS

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: TYPES.FETCH_PRODUCTS_STARTED,
  });

  await axios
    .get(`${process.env.REACT_APP_API_URL}/api/products`)
    .then((res) => {
      console.log("fetched products", res);
      dispatch({
        type: TYPES.FETCH_PRODUCTS_FINISHED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Error fetching products", err);
      dispatch({
        type: TYPES.FETCH_PRODUCTS_FINISHED,
      });
    });
};

// CART

export const addItemsToCart = (item) => (dispatch) => {
  dispatch({ type: TYPES.ADD_CART_ITEMS, payload: item });
};

export const removeItemsFromCart = (id) => (dispatch) => {
  dispatch({ type: TYPES.REMOVE_CART_ITEMS, payload: id });
};

//USERS

export const getUsers = () => async (dispatch) => {
  dispatch({ type: TYPES.FETCH_USERS_STARTED });
  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  await axios
    .get(`${process.env.REACT_APP_API_URL}/api/userss`, config)
    .then((res) => {
      console.log(res, "users res");
      dispatch({
        type: TYPES.FETCH_USERS_FINISHED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error users reducer", err);

      // ERROR KOMPONENTA
      // dispatch({
      //   type: TYPES.FETCH_USERS_ERROR,
      //   payload: err,
      // });

      //error reducer
  
      dispatch({
        type: TYPES.ERROR_THROWN,
        payload: err,
      });
    });
};

// PRODUCT

// export const fetchSingleProduct = (id) => async (dispatch) => {
//   dispatch({ type: TYPES.FETCH_PRODUCT_STARTED });
//   await axios
//     .get(`${process.env.REACT_APP_API_URL}/api/productss/` + id)
//     .then((res) => {
//       console.log("fetchProductRes", res);
//       dispatch({
//         type: TYPES.FETCH_PRODUCT_FINISHED,
//         payload: res.data,
//       });
//     })
//     .catch((error) => {
//       console.log("SingleProdErr", error);

//       throw json({
//         message: error.message,
//         status: error.request.status,
//         title: error.response.statusText,
//       });
//       dispatch({
//         type: TYPES.FETCH_PRODUCT_ERROR,
//       });
//     });
// };
