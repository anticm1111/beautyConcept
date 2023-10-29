import React from "react";
import { useNavigate, useRouteError, useRouteLoaderData } from "react-router";
import { Link } from "react-router-dom";

import classes from "./Error.module.scss";
import { CheckToken } from "../Auth/AuthLogic";

const ErrorPage = ({ manualError }) => {
  const token = useRouteLoaderData("root");
  console.log(token);
  console.log("manual error", manualError);

  const isAuthenticated = token ? CheckToken(token) : false;

  const error = useRouteError();
  console.log("Error page", error);

  // const navigate = useNavigate();

  return (
    <>
      {manualError ? (
        <div className={classes.error}>
          <div className={classes.error__text}>
            <h3>
              {manualError.message ? manualError.message : "An error occured"}
            </h3>
            {/* <h4>
              {manualError.response.data
                ? manualError.response.data
                : "An error occured"}
            </h4> */}
            <h5>
              {manualError.status ? (
                <p>Error status is: {manualError.status}</p>
              ) : (
                ""
              )}
            </h5>
            {!isAuthenticated ? (
              <Link to="/auth">SIGN IN</Link>
            ) : (
              <Link to="/home">GO BACK</Link>
            )}
          </div>
        </div>
      ) : (
        <div className={classes.error}>
          <div className={classes.error__text}>
            <h3>
              {error.data.message ? error.data.message : "An error occured"}{" "}
            </h3>
            <h4>{error.data.title ? error.data.title : "An error occured"} </h4>
            <h5>
              {error.data.status ? (
                <p>Error status is: {error.data.status}</p>
              ) : (
                ""
              )}
            </h5>
            {!isAuthenticated ? (
              <Link to="/auth">SIGN IN</Link>
            ) : (
              <Link to="/home">GO BACK</Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorPage;
