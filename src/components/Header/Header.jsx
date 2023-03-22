import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
      TOXIN
      <NavLink
        to="/signin">
        Sign-In
      </NavLink>
      <NavLink
        to="/signup">
        Sign-Up
      </NavLink>
    </div>
  )
}
export default Header;
