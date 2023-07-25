import React, { useState } from "react";
import SignupForm from "../../Components/Auth/SignupForm";
import classes from "./Auth.module.scss";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";



const AuthPage = () => {
  const navigate = useNavigate();

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    button {
      align-self: center;
      padding: 2rem;
      font-size: 2rem;
      border: 1px solid #fff;
    }
  `;

  return (
    <div className={classes.auth}>
      <div className={classes.auth__section}>
        <SignupForm />

        <Content>
          <h3>Already have account?</h3>
          <button
            onClick={(e) => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </Content>
      </div>
    </div>
  );
};

export default AuthPage;
