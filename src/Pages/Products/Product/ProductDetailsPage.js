import { useParams, useLoaderData, redirect } from "react-router";
import { styled } from "styled-components";

import axios from "axios";
import { json } from "react-router";
import ProductForm from "../../../Components/Products/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../../actions";

  const ProdDetails = styled.div`
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-top: 20rem;
  `;
  const ListItem = styled.div`
    /* background-color: pink; */
    display: flex;
    gap: 2rem;
    color: #fff;
    align-items: center;
    justify-content: space-evenly;
    width: 70rem;
    border: 1px solid #fff;
    padding: 5rem;
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

    border-radius: 50%;
    img {
      width: 15rem;

      height: 15rem;
    }
  `;

const ProductDetailsPage = () => {


  const productDetails = useLoaderData();
  console.log("prodDetails.DAta", productDetails.data);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const addToCartHandler = (enteredAmount) => {
    dispatch(
      addItemsToCart({
        id: productDetails.data._id,
        category: productDetails.data.category,
        price: productDetails.data.stock,
        name: productDetails.data.name,
        amount: enteredAmount,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(removeItemsFromCart(productDetails.data._id));
  };

  const productAmount = (prodID) => {
    const itm = items.find((item) => item.id === prodID);
    // console.log(itm);

    return itm?.amount ? itm.amount : 0;
  };

  return (
    <ProdDetails>
      <ListItem>
        <ProductPic>
          <img src={productDetails.data.featuredImage} alt="Product picture" />
        </ProductPic>
        <ProductInfo>
          <h3>Name: {productDetails.data.name}</h3>
          <h3>Category: {productDetails.data.category}</h3>
          <h4>Price: {productDetails.data.stock}</h4>
        </ProductInfo>
      </ListItem>
      <ProductForm
        removeItem={removeItemHandler}
        amount={productAmount(productDetails.data._id)}
        onAddToCart={addToCartHandler}
      ></ProductForm>
    </ProdDetails>
  );
};

export default ProductDetailsPage;

export async function loader({ params }) {
  console.log(params);
  const id = params.productID;

  const res = await axios

    .get(`${process.env.REACT_APP_API_URL}/api/products/` + id)
    .then((res) => {
      console.log("fetchProductRes", res);
      return res;
    })
    .catch((error) => {
      console.log("SingleProdErr", error);

      throw json({
        message: error.message,
        status: error.request.status,
      });
    });
  return res;
}

// export const loader = async ({ request, params }) => {
//   console.log("Products details params", params);
//   const id = params.id;

//   const response = await axios
//     .get(`${process.env.REACT_APP_API_URL}/api/products/` + id)
//     .then((res) => {
//       console.log("products details res", res);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log("products details err", err);
//       throw json({ title: err.message, message: err.response.data });
//     });
//   return response;
// };
