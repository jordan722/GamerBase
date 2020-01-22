import {
    GET_THREAD,
    GET_THREADS,
    GET_THREAD_INFO
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
];

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

const dummyThreadInfo = [
    {
        id: 1,
        threadReplies: [threadReplyEX, threadReplyEX2]
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

const getThreadInfo = threadInfo => {
    return {
        type: GET_THREAD_INFO,
        payload: threadInfo
    }
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

export const GetThreadInfoThunk = () => dispatch => {
    const arrayOfThreadInfoFromAPI = dummyThreadInfo;
    dispatch(getThreadInfo(arrayOfThreadInfoFromAPI));
}