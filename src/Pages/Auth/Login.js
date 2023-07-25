import React, { useState } from "react";
import LoginForm from "../../Components/Auth/LoginForm";
import classes from "./Auth.module.scss";
import { styled } from "styled-components";
import SignupForm from "../../Components/Auth/SignupForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
        <LoginForm />

        <Content>
          <h3>Don't have account?</h3>
          <button
            onClick={(e) => {
              navigate("/auth");
            }}
          >
            Signup
          </button>
        </Content>
      </div>
    </div>
  );
};

export default Login;
