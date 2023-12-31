import React, { useState } from "react";
import SignupForm from "../../Components/Auth/SignupForm";
import classes from "./Auth.module.scss";
import { styled } from "styled-components";
import { json, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

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

const AuthPage = () => {
  const navigate = useNavigate();

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

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    first_name: data.get("first_name"),
    last_name: data.get("last_name"),
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await axios
    .post(`${process.env.REACT_APP_API_URL}/api/auth/registe`, authData)
    .then((response) => {
      // console.log("Signup response", response);
      const token = response.data.token;
      localStorage.setItem("token", token);
    })
    .catch((error) => {
      // console.log("Signup error", error);
      throw json({
        message: error.message,
        status: error.request.status,
        title: error.response.statusText,
      });
    });
  return redirect("/home");
}
