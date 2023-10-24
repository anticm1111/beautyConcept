import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import classes from "./CartHeader.module.css";

const CartButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  padding: 2rem 4rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
    font-size: 1.7rem;
  }
  #cart_amount {
    border: 0.5px solid;
    padding: 5px;
  }
`;

const CartHeader = (props) => {
  const { cart } = useSelector((state) => state);
  const { items } = useSelector((state) => state.cart);
  // console.log(items, items.length);

  const [animation, setAnimation] = useState(false);
  const animatedButton = `${animation ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnimation(true);

    const timer = setTimeout(() => {
      setAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <CartButton className={animatedButton} onClick={props.onShowCart}>
      <span>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span>Your cart</span>
      <span id="cart_amount">{cart.totalAmount}</span>
    </CartButton>
  );
};

export default CartHeader;
