import React from "react";
import classes from "./WelcomePage.module.scss";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div className={classes.hero}>
        <video className={classes.hero__video} autoPlay loop muted>
          <source src={"/Videos/WelcomeVideo.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={classes.hero__text}>
          <h1>BEAUTY CONCEPT</h1>
          <Link to="/">
            <h3>Sign up</h3>
          </Link>
          <p>& browse all our amazing products</p>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
