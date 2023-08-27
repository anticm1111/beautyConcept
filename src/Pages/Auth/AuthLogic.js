import jwt from "jwt-decode";

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
  console.log("OKIDAM !!!token loader main");

  const token = localStorage.getItem("token");
  console.log(token, "TOKEN");
  return token;
};

export const IsAdmin = (token) => {
  const decodedToken = jwt(token);

  return decodedToken.IsAdmin;
};
