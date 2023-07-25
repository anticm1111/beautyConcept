import React from "react";

import { Outlet } from "react-router";
import MainNav from "./MainNav";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
