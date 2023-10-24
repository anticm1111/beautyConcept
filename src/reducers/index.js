import { combineReducers } from "redux";
import user from "./userReducer";
import products from "./productsReducer";
import cart from "./cartReducer";
import product from "./productReducer";

export default combineReducers({
  user,
  products,
  cart,
  product,
});
