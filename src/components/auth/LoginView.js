import React from "react";
import "./auth.css";

const LoginView = props => {
	const { handleSubmit, handleChange } = props;

	return (
		<div className="page">
			<div className="login-container">
				<form onSubmit={handleSubmit}>
					<div className="email">
						<label htmlFor="email">
							<small>Email:</small>
						</label>
						<input name="email" type="text" onChange={handleChange} />
					</div>
					<div className="password">
						<label htmlFor="password">
							<small>Password:</small>
						</label>
						<input name="password" type="password" onChange={handleChange} />
					</div>
					<div>
						<button type="submit">Log In</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginView;
