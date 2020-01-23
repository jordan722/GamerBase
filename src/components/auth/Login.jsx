import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import LoginView from "./LoginView";
import { loginThunk } from "../../actions";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.signUp(this.state.email, this.state.password);
		this.props.history.push("/");
	};

	render() {
		return (
			<LoginView
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUp: (name, email, password) => dispatch(loginThunk(name, email, password))
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
