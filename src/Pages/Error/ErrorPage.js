import React from "react";
import { useNavigate, useRouteError, useRouteLoaderData } from "react-router";
import { Link } from "react-router-dom";

import classes from "./Error.module.scss";
import { CheckToken } from "../Auth/AuthLogic";

const ErrorPage = () => {
  const token = useRouteLoaderData("root");
  console.log(token);

  const isAuthenticated = token ? CheckToken(token) : false;

  const error = useRouteError();
  console.log("Error page", error);
  const { message, title, status } = error.data;
  // const navigate = useNavigate();

  return (
    <div className={classes.error}>
      <div className={classes.error__text}>
        <h3>{message ? message : "An error occured"} </h3>
        <h4>{title ? title : "An error occured"} </h4>
        <h5>{status ? <p>Error status is: {status}</p> : ""}</h5>
        {!isAuthenticated ? (
          <Link to="/auth">SIGN IN</Link>
        ) : (
          <Link to="/home">GO BACK</Link>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
