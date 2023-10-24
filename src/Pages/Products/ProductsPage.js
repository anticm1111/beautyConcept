import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions";
import classes from "./Products.module.css";
import Product from "../../Components/Products/Product";
import { styled } from "styled-components";
import { Audio } from "react-loader-spinner";

const List = styled.ul`
  width: 100rem;
  margin: 0 auto;
  /* padding-top: 15rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const Spinner = styled.div`
  width: 100rem;
  margin: 0 auto;
  padding-top: 15rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  svg {
    fill: rgb(255, 192, 203);
  }
`;

const ProductsPage = () => {
  <Audio
    height="80"
    width="80"
    radius="9"
    color="pink"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
  />;
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const { data } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);
  return (
    <>
      {data.length > 0 ? (
        <div className={classes.products}>
          <List>
            {products.data.map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
          </List>
        </div>
      ) : (
        <Spinner>
          <Audio />
        </Spinner>
      )}
    </>
  );
};

export default ProductsPage;
