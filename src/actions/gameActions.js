import {
  GET_HOME_GAMES
} from './actionTypes';

import axios from 'axios';


// Action creators
const getHomeGames = games => {
  return{
    type: GET_HOME_GAMES,
    payload: games
  };
};





// Thunks
export const getHomeGamesThunk = () => async dispatch => {
  try {
    const trending = await axios.get("/api/rawg/trending");
    const toprated = await axios.get("api/rawg/toprated");
    const upcoming = await axios.get("api/rawg/upcoming");
    const res = {
      trending: trending,
      toprated: toprated,
      upcoming: upcoming
    }
    dispatch(getHomeGames(res));
  } catch (err) {
    console.log(err);
  }
};
