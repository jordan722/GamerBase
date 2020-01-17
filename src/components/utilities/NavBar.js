import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul>
      <li className="left">
        <Link className="logo" to="/">
          Fake Twitch
        </Link>
      </li>
      <li>
        <Link className="item" to="/campuses">
          Sign Up
        </Link>
      </li>
      <li>
        <Link className="item" to="/students">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
