import React, { useState } from "react";
import classes from "./MainNav.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MainNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>
        <NavLink to="/">
          <img src="/images/logo2.png" alt="Company logo" />
        </NavLink>
      </div>
      <div className="header__menu">
        <ul className={classes.header__list}>
          <li>
            <NavLink to="/">
              Menu1
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: "#ffffff" }}
              />
              <ul className={classes.header__list__hover}>
                <li>
                  <NavLink to="/">item1</NavLink>
                </li>
                <li>
                  <NavLink to="/">item2</NavLink>
                </li>
                <li>
                  <NavLink to="/">item3</NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Menu2
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: "#ffffff" }}
              />
              <ul className={classes.header__list__hover}>
                <li>
                  <NavLink to="/">other1</NavLink>
                </li>
                <li>
                  <NavLink to="/">other2</NavLink>
                </li>
                <li>
                  <NavLink to="/">other3</NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Menu3
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: "#ffffff" }}
              />
              <ul className={classes.header__list__hover}>
                <li>
                  <NavLink to="/">Title1</NavLink>
                </li>
                <li>
                  <NavLink to="/">Title2</NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.header__registration}>
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
      </div>
    </div>
  );
};

export default MainNav;
