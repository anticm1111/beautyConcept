import React, { useState } from "react";

import { Outlet } from "react-router";
import MainNav from "./MainNav";
import Cart from "../Cart/Cart";

const RootLayout = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <MainNav onShowCart={showCartHandler} />
      <Outlet />
    </>
  );
};

export default RootLayout;
