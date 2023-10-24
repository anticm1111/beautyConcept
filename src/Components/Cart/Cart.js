import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const { cart } = useSelector((state) => state);
  const hasItems = cart.items.length > 0;
  console.log("has Items", hasItems, cart.items.length);
  const cartItems = (
    <ul className={classes.ul}>
      {cart.items.map((item) => (
        <li>
          {item.name} x{item.amount}, ${item.amount * item.price}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cart.totalAmount}</span>
      </div>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{cart.totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} autoFocus={true}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
