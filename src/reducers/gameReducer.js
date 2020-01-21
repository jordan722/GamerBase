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
        trending: action.payload.trending,
        toprated: action.payload.toprated,
        upcoming: action.payload.upcoming,
      }
    default:
      return state;
  }
}
