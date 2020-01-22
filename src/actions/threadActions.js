import {
    GET_THREAD,
    GET_THREADS
} from './actionTypes'

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
]

const getThread = thread => {
    return {
    type: GET_THREAD,
    payload: thread
    };
}

const getThreads = threads => {
    return {
        type: GET_THREADS,
        payload: threads
    };
}

export const GetThreadsThunk = () => dispatch => {
    const arrayOfThreadsFromAPI = dummyThreads;
    dispatch(getThreads(arrayOfThreadsFromAPI));
}

export const GetThreadThunk = (threadId) => dispatch => {
    //ThreadId is a string for whatever reason
    // console.log("threadId: " +  typeof(threadId));
    // console.log(dummyThreads.filter(item => item.id === parseInt(threadId)));
    const thread = dummyThreads.filter(item => item.id === parseInt(threadId))[0];
    dispatch(getThread(thread));
}