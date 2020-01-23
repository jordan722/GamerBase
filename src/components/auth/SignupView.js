import React from "react";

const SignupView = props => {
	const { handleSubmit, handleChange } = props;

	const styles = {
		paddingTop: "200px",
		backgroundColor: "white",
		color: "black"
	};

	return (
		<div style={styles}>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">
						<small>Name</small>
					</label>
					<input name="name" type="text" onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="email">
						<small>Email</small>
					</label>
					<input name="email" type="text" onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="password">
						<small>Password</small>
					</label>
					<input name="password" type="password" onChange={handleChange} />
				</div>
				<div>
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default SignupView;
