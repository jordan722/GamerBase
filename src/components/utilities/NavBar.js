import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./NavBar.css";

import { logoutThunk } from "../../actions";
import LinkButton from "./LinkButton";

class NavBar extends Component {
	render() {
		let loggedInView;
		if (this.props.isLoggedIn) {
			loggedInView = (
				<div>
					<LinkButton className="sign-up" onClick={this.props.logout} to="/">
						Log Out
					</LinkButton>
					<p style={{ float: "right" }}>{this.props.loggedInUser.name}</p>
				</div>
			);
		}
		const loggedOutView = (
			<div>
				<Link className="sign-up" to="/signup">
					Sign Up
				</Link>
				<Link className="login" to="/login">
					Log In
				</Link>
			</div>
		);
		return (
			<div className="navbar">
				<Link className="logo" to="/">
					Fake Twitch
				</Link>
				<Link className="login" to="/forums" style={{ float: "left" }}>
					Forums
				</Link>
				{this.props.isLoggedIn ? loggedInView : loggedOutView}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: !!state.user.loggedInUser.id,
		loggedInUser: state.user.loggedInUser
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logoutThunk())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
