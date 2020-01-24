import axios from "axios";

import {
	GET_THREAD,
	GET_THREADS,
	ADD_THREAD,
	ADD_THREAD_REPLY
} from "./actionTypes";

const BASE_URL = process.env.BASE_URL;

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

const addThreadReply = updateThread => {
	return {
		type: ADD_THREAD_REPLY,
		payload: updateThread
	};
};

export const GetThreadsThunk = () => async dispatch => {
	try {
		const res = await axios.get(`${BASE_URL}/api/posts`);
		dispatch(getThreads(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const GetThreadThunk = threadId => async dispatch => {
	try {
		const res = await axios.get(`${BASE_URL}/api/posts/${threadId}`);
		dispatch(getThread(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const AddThreadThunk = thread => async dispatch => {
	try {
		let newThread = await axios.post(`${BASE_URL}/api/posts`, thread);
		const user = await axios.get(`${BASE_URL}/api/users/${thread.userId}`);
		newThread = newThread.data;
		newThread.user = user.data;
		dispatch(addThread(newThread));
	} catch (err) {
		console.log(err);
	}
};

export const AddThreadReplyThunk = (
	threadId,
	threadReply
) => async dispatch => {
	try {
		const res = await axios.get(`${BASE_URL}/api/posts/${threadId}`);

		let currThread = res.data;

		let newThreadReplies;
		if (currThread.replies) {
			currThread.replies.push(threadReply);
			newThreadReplies = currThread;
		} else {
			newThreadReplies = { replies: [threadReply] };
		}

		await axios.put(`${BASE_URL}/api/posts/${threadId}`, newThreadReplies);

		const newThread = await axios.get(`${BASE_URL}/api/posts/${threadId}`);

		dispatch(addThreadReply(newThread.data));
	} catch (err) {
		console.log(err);
	}
};
