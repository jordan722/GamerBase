import {
    GET_THREAD,
    GET_THREADS,
    ADD_THREAD,
    ADD_THREAD_REPLY
} from '../actions/actionTypes'

const initialState = {
    allThreads: [],
    currThread: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_THREAD:
            return{
                ...state,
                currThread: action.payload
            }
        case GET_THREADS:
            return{
                ...state,
                allThreads: action.payload
            }
        case ADD_THREAD:
            return {
                ...state,
                allThreads: [...state.allThreads, action.payload]
            };
        case ADD_THREAD_REPLY:
            return{
                ...state,
                currThread: action.payload
            }
        default:
            return state;
    }
};