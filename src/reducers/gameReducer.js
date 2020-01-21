import {
  GET_HOME_GAMES
} from "../actions/actionTypes";

const initialState = {
  trending: [],
  toprated: [],
  upcoming: [],
}

export default(state = initialState, action) => {
  switch(action.type){
    case GET_HOME_GAMES:
      return {
        ...state,
        trending: action.payload.trending.data,
        toprated: action.payload.toprated.data,
        upcoming: action.payload.upcoming.data,
      }
    default:
      return state;
  }
}
