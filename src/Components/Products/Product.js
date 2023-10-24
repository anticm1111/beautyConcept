import React, { useState } from "react";
import { styled } from "styled-components";
import ProductForm from "./ProductForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addItemsToCart, removeItemsFromCart } from "../../actions";
import { NavLink } from "react-router-dom";

const ListItem = styled.li`
  /* background-color: pink; */
  display: flex;
  gap: 2rem;
  color: #fff;
  align-items: center;
  justify-content: space-evenly;
  /* width: 35rem; */
  border: 1px solid #fff;
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: pink;
    letter-spacing: 1px;
    font-size: 1.4rem;
  }
`;

const ProductPic = styled.div`
  width: 15rem;

  height: 15rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 50%;
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);
  // console.log("ProductForm cart items", items);

  const addToCartHandler = (enteredAmount) => {
    dispatch(
      addItemsToCart({
        id: product._id,
        category: product.category,
        price: product.stock,
        name: product.name,
        amount: enteredAmount,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(removeItemsFromCart(product._id));
  };

  const productAmount = (prodID) => {
    const itm = items.find((item) => item.id === prodID);
    // console.log(itm);

    return itm?.amount ? itm.amount : 0;
  };

  return (
    <ListItem>
      <ProductPic>
        <img src={product.featuredImage} alt="Product picture" />
      </ProductPic>
      <ProductInfo>
        <h3>Name: {product.name}</h3>
        <h3>Category: {product.category}</h3>
        <h4>Price: {product.stock}</h4>
        <NavLink to={`/products/${product._id}`}>View details</NavLink>
      </ProductInfo>
      <ProductForm
        removeItem={removeItemHandler}
        amount={productAmount(product._id)}
        onAddToCart={addToCartHandler}
      />
    </ListItem>
  );
};

export default Product;
