import {
  GET_HOME_GAMES,
  GET_GAME,
} from './actionTypes';

import axios from 'axios';


// Action creators
const getHomeGames = games => {
  return{
    type: GET_HOME_GAMES,
    payload: games
  };
};

const getGame = game => {
  return{
    type: GET_GAME,
    payload: game
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

export const getGameThunk = gameId => async dispatch => {
  try{
    const res = await axios.get(`/api/rawg/${gameId}`);
    dispatch(getGame(res.data));
  } catch (err) {
    console.log(err);
  }
}
