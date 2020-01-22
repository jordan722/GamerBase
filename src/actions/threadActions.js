import { GET_THREAD, GET_THREADS, ADD_THREAD } from "./actionTypes";

import axios from "axios";

const dummyThreads = [
  {
    id: 1,
    lastUpdated: "today",
    postName: "Test post",
    replyCount: 100,
    creator: "Kendrick"
  },
  {
    id: 2,
    lastUpdated: "yesterday",
    postName: "Test post 2",
    replyCount: 200,
    creator: "Jordan"
  }
];

const getThread = thread => {
  return {
    type: GET_THREAD,
    payload: thread
  };
};

const getThreads = threads => {
  return {
    type: GET_THREADS,
    payload: threads
  };
};

const addThread = thread => {
  return {
    type: ADD_THREAD,
    payload: thread
  };
};

export const GetThreadsThunk = () => dispatch => {
  const arrayOfThreadsFromAPI = dummyThreads;
  dispatch(getThreads(arrayOfThreadsFromAPI));
};

export const GetThreadThunk = threadId => dispatch => {
  //ThreadId is a string for whatever reason
  // console.log("threadId: " +  typeof(threadId));
  // console.log(dummyThreads.filter(item => item.id === parseInt(threadId)));
  const thread = dummyThreads.filter(item => item.id === parseInt(threadId))[0];
  dispatch(getThread(thread));
};

export const AddThreadThunk = thread => dispatch => {
  dispatch(addThread(thread));
};

/*
// https://stackoverflow.com/questions/34698905/how-can-i-clone-a-javascript-object-except-for-one-key
const objectWithoutKey = (object, key) => {
  const { [key]: deletedKey, ...otherKeys } = object;
  return otherKeys;
};

export const addThreadThunk = thread => async dispatch => {
  try {
    // checks if student has campusId, if not passes student object without campusId key
    let apiThread = thread;
    if (!thread.threadId) {
      apiThread = objectWithoutKey(thread, "threadId");
    }

    await axios.post("/api/forums", apiThread);
    dispatch(addThread(thread));
  } catch (err) {
    console.log(err);
  }
};

*/
