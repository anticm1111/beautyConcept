import React, { useEffect } from "react";
import classes from "./HomePage.module.scss";
import { useRouteLoaderData } from "react-router";
import { CheckToken, DecodeToken } from "../Auth/AuthLogic";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../actions";

const HomePage = () => {
  const token = useRouteLoaderData("root");

  const isAuthenticated = token ? CheckToken(token) : false;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  console.log(user, "user");

  useEffect(() => {
    isAuthenticated && dispatch(getUserInfo(DecodeToken(token)));
  }, [token, isAuthenticated]);

  return (
    <div className={classes.home}>
      <div className={classes.home__text}>
        <h2>Welcome {user.first_name} </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit?</p>
        <a href="#">SHOP NOW</a>
      </div>
    </div>
  );
};

export default HomePage;
