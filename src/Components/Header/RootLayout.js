import React from "react";
import MainNav from "./MainNav";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
