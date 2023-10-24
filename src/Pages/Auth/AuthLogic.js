import jwt from "jwt-decode";
import { redirect } from "react-router";

export const CheckToken = (token) => {
  // const token = localStorage.getItem("Token")
  //   ? localStorage.getItem("Token")
  //   : null;

  const decodedToken = jwt(token);
  // console.log(decodedToken, "Decoded token");

  const expTokenTimeInSeconds = decodedToken.exp * 1000;
  const expTokenStamp = new Date(expTokenTimeInSeconds);
  // console.log(expTokenStamp, "Expiry token date");

  const currentTime = Date.now();
  // console.log(currentTime, "Current time");

  const currentTimeStamp = new Date(currentTime);
  // console.log(currentTimeStamp, "Current time stamp");

  if (currentTimeStamp > expTokenStamp) {
    localStorage.removeItem("token");
    return false;
  }

  return true;
};

export const DecodeToken = (token) => {
  return jwt(token);
};

export const TokenLoader = () => {
  // console.log("OKIDAM !!!token loader main");

  const token = localStorage.getItem("token");
  console.log(token, "TOKEN");
  return token;
};

export const IsAdmin = (token) => {
  const decodedToken = jwt(token);

  return decodedToken.isAdmin;
};

export const routeProtectionLoader = () => {
  const token = TokenLoader();
  const isAuthenticated = token ? CheckToken(token) : false;

  if (!isAuthenticated) {
    console.log("IsAuthenticated - route protection", isAuthenticated);
    return redirect("/auth");
  }

  return null;
};

export const logoutAction = () => {
  localStorage.removeItem("token");
  return redirect("/auth");
};
