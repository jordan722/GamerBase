import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div className="navbar">
			<Link className="logo" to="/">
				Fake Twitch
			</Link>
			<Link className="sign-up" to="/games" style={{ float: "left" }}>
				Game
			</Link>
			<Link className="sign-up" to="/signup">
				Sign Up
			</Link>
			<Link className="login" to="/login">
				Log In
			</Link>
		</div>
	);
};

export default NavBar;
