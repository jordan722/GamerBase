import {
  GET_HOME_GAMES,
  GET_GAME,
  GET_TWITCH,
  GET_MIXER,
  GET_YOUTUBE,
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
    case GET_TWITCH:
      return{
        ...state,
        currGame:{
          ...state.currGame,
          twitch: action.payload
        }
      }
    case GET_MIXER:
      return{
        ...state,
        currGame:{
          ...state.currGame,
          mixer: action.payload,
        }
      }
    case GET_YOUTUBE:
      return{
        ...state,
        currGame:{
          ...state.currGame,
          youtube: action.payload
        }
      }
    default:
      return state;
  }
}
