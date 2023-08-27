import React, { useState } from "react";
import classes from "./MainNav.module.scss";
import {
  NavLink,
  redirect,
  useRouteLoaderData,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CheckToken, IsAdmin } from "../../Pages/Auth/AuthLogic";
import { useDispatch } from "react-redux";
import { removeUserInfo } from "../../actions";

const MainNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const token = useRouteLoaderData("root");
  // const token = localStorage.getItem("token");
  console.log("incoming token", token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = token ? CheckToken(token) : false;
  console.log("isAuth", isAuthenticated);
  const isAdmin = token ? IsAdmin(token) : false;

  const onLogoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(removeUserInfo());
    setShowMenu(!showMenu);
    navigate("/auth");
  };

  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>
        <NavLink to="/">
          <img src="/images/logo2.png" alt="Company logo" />
        </NavLink>
      </div>
      <div className="header__menu">
        <ul className={classes.header__list}>
          {isAuthenticated && (
            <li>
              Home
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: "#ffffff" }}
              />
              <ul className={classes.header__list__hover}>
                <li>
                  <NavLink to="/">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/">Contact Us</NavLink>
                </li>
              </ul>
            </li>
          )}
          {isAuthenticated && (
            <li>
              Products
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: "#ffffff" }}
              />
              <ul className={classes.header__list__hover}>
                <li>
                  <NavLink to="/">All products</NavLink>
                </li>
                <li>
                  <NavLink to="/">Special offer</NavLink>
                </li>
                {/* <li>
                <NavLink to="/">other3</NavLink>
              </li> */}
              </ul>
            </li>
          )}
          {isAdmin && (
            <li>
              Admin
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: "#ffffff" }}
              />
              <ul className={classes.header__list__hover}>
                <li>
                  <NavLink to="/">Admin panel 1</NavLink>
                </li>
                <li>
                  <NavLink to="/">Admin panel 2</NavLink>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
      {isAuthenticated ? <p>Cao milose</p> : <p>Registrujte se / prijavi</p>}
      <div className={classes.header__registration}>
        {isAuthenticated ? (
          <>
            <button onClick={() => setShowMenu(!showMenu)}>
              Profile <FontAwesomeIcon icon={faUser} />
            </button>
            <ul
              className={`classes.header__registration__list ${
                showMenu
                  ? classes.header__registration__list_show
                  : classes.header__registration__list_hide
              }`}
            >
              <li>
                <NavLink to="">Settings</NavLink>
              </li>
              <li>
                <a onClick={onLogoutHandler}>Logout</a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <button onClick={(e) => setShowMenu(!showMenu)}>
              Register <FontAwesomeIcon icon={faUser} />
            </button>
            <ul
              className={`classes.header__registration__list ${
                showMenu
                  ? classes.header__registration__list_show
                  : classes.header__registration__list_hide
              }`}
            >
              <li>
                <NavLink to="/Auth">Sign up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MainNav;
