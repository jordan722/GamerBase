import {
  GET_USER,
  ADD_USER,
  EDIT_USER,
  REMOVE_USER,
  GET_USER
} from "./actionTypes";

import axios from "axios";

// Action creator
const getUser = users => {
  return {
    type: GET_USER,
    payload: users
  };
};

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

const editUser = (user, userId) => {
  return {
    type: EDIT_USER,
    payload: user,
    studentId: userId
  };
};

const removeUser = userId => {
  return {
    type: REMOVE_USER,
    payload: userId
  };
};

// Thunks
export const getUsersThunk = () => async dispatch => {
  try {
    const res = await axios.get("/api/users");
    dispatch(getUsers(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getUserThunk = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}`);
    dispatch(getUser(res.data));
  } catch (err) {
    console.log(err);
  }
};

// https://stackoverflow.com/questions/34698905/how-can-i-clone-a-javascript-object-except-for-one-key
const objectWithoutKey = (object, key) => {
  const { [key]: deletedKey, ...otherKeys } = object;
  return otherKeys;
};

export const addUserThunk = user => async dispatch => {
  try {
    // checks if student has campusId, if not passes student object without campusId key
    let apiUser = user;
    if (!user.campusId) {
      apiUser = objectWithoutKey(user, "campusId");
    }

    await axios.post("/api/users", apiUser);
    dispatch(addUser(user));
  } catch (err) {
    console.log(err);
  }
};

export const editUserThunk = (user, userId) => async dispatch => {
  try {
    const res = await axios.put(`/api/users/${userId}`, user);
    dispatch(editUser(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const removeUserThunk = userId => async dispatch => {
  try {
    await axios.delete(`/api/users/${userId}`);
    dispatch(removeUser(userId));
  } catch (err) {
    console.log(err);
  }
};
