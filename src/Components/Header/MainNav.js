import React, { useState } from "react";
import classes from "./MainNav.module.scss";
import {
  NavLink,
  redirect,
  useRouteLoaderData,
  useNavigate,
  Form,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CheckToken, IsAdmin } from "../../Pages/Auth/AuthLogic";
import { useDispatch } from "react-redux";
import { removeUserInfo } from "../../actions";
import CartHeader from "./CartHeader";

const MainNav = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const token = useRouteLoaderData("root");
  // const token = localStorage.getItem("token");
  // console.log("incoming token", token);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("govno govnjivo", useRouteLoaderData("root"));

  const isAuthenticated = token ? CheckToken(token) : false;
  console.log("tokens", token);
  console.log("isAuth", isAuthenticated);
  const isAdmin = isAuthenticated ? IsAdmin(token) : false;
  console.log("isAdmin", isAdmin);

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
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? classes.header__active : undefined
                    }
                  >
                    All products
                  </NavLink>
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
          {/* USERS  */}
          {isAuthenticated && (
            <li>
              Users
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: "#ffffff" }}
              />
              <ul className={classes.header__list__hover}>
                <li>
                  <NavLink
                    to="/users"
                    className={({ isActive }) =>
                      isActive ? classes.header__active : undefined
                    }
                  >
                    All users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Admin users</NavLink>
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

      {isAuthenticated && <CartHeader onShowCart={props.onShowCart} />}

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
                <Form action="/logout" method="post">
                  <button onClick={(e) => setShowMenu(!showMenu)}>
                    Logout
                  </button>
                </Form>
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
                <NavLink to="/Auth" onClick={(e) => setShowMenu(!showMenu)}>
                  Sign up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" onClick={(e) => setShowMenu(!showMenu)}>
                  Log in
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MainNav;
