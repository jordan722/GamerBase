import {
  GET_HOME_GAMES,
  GET_GAME,
} from "../actions/actionTypes";

const initialState = {
  trending: [],
  toprated: [],
  upcoming: [],
  currGame: [],
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
    case GET_GAME:
      return{
        ...state,
        currGame: action.payload,
      }
    default:
      return state;
  }
}
