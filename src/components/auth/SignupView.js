import React from "react";
import "./auth.css";

const SignupView = props => {
	const { handleSubmit, handleChange } = props;

	return (
		<div>
			<div>
				<form onSubmit={handleSubmit} className="form">
					<div className="signup">
						<label htmlFor="name">
							<small>Name:</small>
						</label>
						<input name="name" type="text" onChange={handleChange} />
					</div>
					<div className="signup">
						<label htmlFor="email">
							<small>Email:</small>
						</label>
						<input name="email" type="text" onChange={handleChange} />
					</div>
					<div className="signup">
						<label htmlFor="password">
							<small>Password:</small>
						</label>
						<input name="password" type="password" onChange={handleChange} />
					</div>
					<div className="signup">
						<button type="submit">Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignupView;
