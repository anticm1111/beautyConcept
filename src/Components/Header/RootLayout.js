import React, { useState } from "react";
import * as TYPES from "../../actions/types";
import { CheckToken } from "../../Pages/Auth/AuthLogic";
import { redirect, useNavigate, useRouteLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import MainNav from "./MainNav";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Xbutton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  align-self: flex-end;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const RootLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useRouteLoaderData("root");
  const isAuthenticated = token ? CheckToken(token) : false;

  const { isError, message, status, showModal } = useSelector(
    (state) => state.error
  );
  console.log("iserror root page", isError);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  // const hideErrorModal = () => {
  //   dispatch({
  //     type: TYPES.ERROR_DISMISSED,
  //   });
  // };

  const signinHandler = () => {
    dispatch({
      type: TYPES.ERROR_DISMISSED,
    });
    console.log("radis liiiiiii");

    navigate("/auth");
  };

  const gobackHandler = () => {
    dispatch({
      type: TYPES.ERROR_DISMISSED,
    });
    console.log("radis liiiiiii");
    navigate("/home");
  };
  return (
    <>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <MainNav onShowCart={showCartHandler} />
      <Outlet />
      {showModal && (
        <Modal>
          <Xbutton>{/* <FontAwesomeIcon icon={faX} /> */}</Xbutton>
          <p>Message: {message}</p>
          <p>Status: {status}</p>
          {!isAuthenticated ? (
            <button onClick={signinHandler}>SIGN IN</button>
          ) : (
            <button onClick={gobackHandler}>GO BACK</button>
          )}
        </Modal>
      )}
    </>
  );
};

export default RootLayout;
