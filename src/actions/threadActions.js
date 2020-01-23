import axios from 'axios'

import {
    GET_THREAD,
    GET_THREADS,
    ADD_THREAD,
    ADD_THREAD_REPLY
} from './actionTypes'

const threadReplyEX = {
    replyId: 1,
    user: "RandomCoolGuy123",
    postTime: "50 hours ago",
    postContent: "H e l l o   w o r l d",
    isEdited: false
}

const threadReplyEX2 = {
    replyId: 2,
    user: "SaltyTeemo",
    postTime: "30 hours ago",
    postContent: "Nah",
    isEdited: false
}

let dummyThreads = [
    {
        id: 1,
        lastUpdated: "today",
        postName: "Test post",
        creator: "Kendrick",
        replies: [threadReplyEX, threadReplyEX2]
    },
    {
        id: 2,
        lastUpdated: "yesterday",
        postName: "Test post 2",
        creator: "Jordan",
        replies: []
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

const addThreadReply = (updateThread) => {
    return{
        type: ADD_THREAD_REPLY,
        payload: updateThread
    }
}

export const GetThreadsThunk = () => async dispatch => {
  try{
    const res = await axios.get("/api/posts")
    dispatch(getThreads(res.data));
  } catch(err){
    console.log(err);
  }
};

export const GetThreadThunk = (threadId) => async dispatch => {
  try{
    const res = await axios.get(`/api/posts/${threadId}`);
    dispatch(getThread(res.data))
  } catch(err){
    console.log(err)
  }
};

export const AddThreadThunk = thread => async dispatch => {
  try{
    await axios.post("/api/posts", thread);
    dispatch(addThread(thread))
  } catch (err) {
    console.log(err)
  }
}


export const AddThreadReplyThunk = (threadId, threadReply) => async dispatch => {
  try{
    const res = await axios.get(`/api/posts/${threadId}`);

    let currThread = res.data;

    let newThreadReplies;
    if(currThread.replies){
      currThread.replies.push(threadReply);
      newThreadReplies = currThread;
    } else{
      newThreadReplies = {replies: [threadReply]};
    }

    await axios.put(`/api/posts/${threadId}`, newThreadReplies);


    const newThread = await axios.get(`/api/posts/${threadId}`)

    dispatch(addThreadReply(newThread.data))
  } catch(err){
    console.log(err)
  }
}
