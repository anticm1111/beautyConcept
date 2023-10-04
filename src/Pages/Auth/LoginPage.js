import LoginForm from "../../Components/Auth/LoginForm";
import classes from "./Auth.module.scss";
import { styled } from "styled-components";
import { json, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { CheckToken } from "./AuthLogic";

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

const LoginPage = () => {
  const navigate = useNavigate();

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

export default LoginPage;

export async function action({ request }) {
  // console.log("Login action", request);

  const data = await request.formData();
  // console.log("Login action data", data);

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await axios
    .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, authData)
    .then((response) => {
      // console.log("response login", response);
      const token = response.data.accessToken;
      localStorage.setItem("token", token);
    })
    .catch((error) => {
      // console.log("Login error", error);
      throw json({
        message: error.message,
        status: error.request.status,
        title: error.response.data,
      });
    });
  return redirect("/home");
}
