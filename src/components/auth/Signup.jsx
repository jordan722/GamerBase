import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import SignupView from "./SignupView";
import { addUserThunk } from "../../actions/";

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			name: ""
		};
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.signUp(this.state.name, this.state.email, this.state.password);
		this.props.history.push("/");
	};

	render() {
		return (
			<SignupView
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUp: (name, email, password) =>
		dispatch(addUserThunk(name, email, password))
});

export default connect(null, mapDispatchToProps)(withRouter(Signup));
