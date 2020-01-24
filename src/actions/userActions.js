import { ADD_USER, GET_USER, LOGIN, LOGOUT } from "./actionTypes";

import axios from "axios";

// Action creator
const getUser = user => {
	return {
		type: GET_USER,
		payload: user
	};
};

const addUser = user => {
	return {
		type: ADD_USER,
		payload: user
	};
};

const login = user => {
	return {
		type: LOGIN,
		payload: user
	};
};

const logout = () => {
	return {
		type: LOGOUT
	};
};

// Thunks
export const getUserThunk = userId => async dispatch => {
	try {
		const res = await axios.get(`/api/users/${userId}`);
		dispatch(getUser(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const addUserThunk = (name, email, password) => async dispatch => {
	try {
		const body = {
			name: name,
			email: email,
			password: password
		};
		const newUser = await axios.post(`/api/auth/signup`, body, {
			withCredentials: true
		});
		dispatch(addUser(newUser.data));
	} catch (err) {
		console.log(err);
	}
};

export const loginThunk = (email, password) => async dispatch => {
	try {
		const body = {
			email: email,
			password: password
		};
		const user = await axios.post(`/api/auth/login`, body, {
			withCredentials: true
		});
		dispatch(login(user.data));
	} catch (err) {
		console.log(err);
	}
};

export const logoutThunk = () => async dispatch => {
	try {
		await axios.delete(`/api/auth/logout`, {
			withCredentials: true
		});
		dispatch(logout());
	} catch (err) {
		console.log(err);
	}
};

export const me = () => async dispatch => {
	try {
		const res = await axios.get(`/api/auth/me`, {
			withCredentials: true
		});
		console.log(res.data);
		dispatch(login(res.data || {}));
	} catch (err) {
		console.error(err);
	}
};
