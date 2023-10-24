import { produce } from "immer";
import * as TYPES from "../actions/types";

const defaultState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

export default (state = defaultState, { type = "", payload = [] }) =>
  produce(state, (draft) => {
    switch (type) {
      case TYPES.ADD_CART_ITEMS:
        const filteredCartItem = state.items.find(
          (item) => item.id === payload.id
        );
        console.log("Is item already in the cart", filteredCartItem);

        if (filteredCartItem) {
          console.log("Item postoji u cartu, samo povecaj amount");
          draft.items = state.items.map((item) =>
            item.id === payload.id
              ? { ...item, amount: item.amount + payload.amount }
              : item
          );
        } else {
          console.log("ne postoji dodaj novi item");
          draft.items = state.items.concat(payload);
        }

        draft.totalAmount = state.totalAmount + payload.amount;
        draft.totalPrice = state.totalPrice + payload.price * payload.amount;
        return draft;

      case TYPES.REMOVE_CART_ITEMS:
        console.log("remove item from Cart", payload);

        const filteredItem = state.items.find((item) => item.id === payload);
        console.log("Item to be removed", filteredItem);

        if (filteredItem.amount > 1) {
          console.log("Item to be removed with amount grater than 1");

          draft.items = state.items.map((item) =>
            item.id === payload ? { ...item, amount: item.amount - 1 } : item
          );
        } else {
          console.log("Item to be removed with amount less than 1");
          draft.items = state.items.filter((item) => item.id !== payload);
        }
        draft.totalAmount = state.totalAmount - 1;
        draft.totalPrice = state.totalPrice - filteredItem.price;
        return draft;

      default:
        return;
    }
  });
