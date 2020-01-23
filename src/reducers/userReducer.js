import {
	ADD_USER,
	EDIT_USER,
	REMOVE_USER,
	GET_USER,
	LOGIN,
	LOGOUT
} from "../actions/actionTypes";

const initialState = {
	loggedInUser: {},
	currentUser: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				loggedInUser: action.payload
			};
		case EDIT_USER:
			return {
				...state,
				allUsers: state.allUsers.map((item, index) => {
					if (item.id === action.userId) {
						return action.payload;
					}
					return item;
				}),
				currUser: action.payload
			};
		case GET_USER:
			return {
				...state,
				currUser: action.payload
			};
		case REMOVE_USER:
			return {
				...state,
				allUsers: state.allUsers.filter(user => user.id !== action.payload)
			};
		case LOGIN:
			return {
				...state,
				loggedInUser: action.payload
			};
		case LOGOUT:
			return {
				...state,
				loggedInUser: {}
			};
		default:
			return state;
	}
};
