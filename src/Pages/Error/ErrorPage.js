import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { NavLink } from "react-router-dom";

import classes from "./Error.module.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("Error page", error);
  const { message, title, status } = error.data;
  const navigate = useNavigate();

  return (
    <div className={classes.error}>
      <div className={classes.error__text}>
        <h3>{message ? message : "An error occured"} </h3>
        <h4>{title ? title : "An error occured"} </h4>
        <h5>{status ? <p>Error status is: {status}</p> : ""}</h5>
        <NavLink to="/auth">GO BACK</NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
