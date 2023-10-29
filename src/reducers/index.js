import { combineReducers } from "redux";
import user from "./userReducer";
import products from "./productsReducer";
import cart from "./cartReducer";
import product from "./productReducer";
import users from "./usersReducer";
import error from "./errorReducer";

export default combineReducers({
  error,
  user,
  products,
  cart,
  product,
  users,
});
