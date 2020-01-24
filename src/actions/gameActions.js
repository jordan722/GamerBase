import {
	GET_HOME_GAMES,
	GET_GAME,
	GET_TWITCH,
	GET_MIXER,
	GET_YOUTUBE
} from "./actionTypes";

import axios from "axios";

const BASE_URL = process.env.BASE_URL;

// Action creators
const getHomeGames = games => {
	return {
		type: GET_HOME_GAMES,
		payload: games
	};
};

const getGame = game => {
	return {
		type: GET_GAME,
		payload: game
	};
};

const getTwitch = twitch => {
	return {
		type: GET_TWITCH,
		payload: twitch
	};
};

const getMixer = mixer => {
	return {
		type: GET_MIXER,
		payload: mixer
	};
};

const getYoutube = youtube => {
	return {
		type: GET_YOUTUBE,
		payload: youtube
	};
};

// Thunks
export const getHomeGamesThunk = () => async dispatch => {
	try {
		const trending = await axios.get(`${BASE_URL}/api/rawg/trending`);
		const toprated = await axios.get(`${BASE_URL}/api/rawg/toprated`);
		const upcoming = await axios.get(`${BASE_URL}/api/rawg/upcoming`);
		const res = {
			trending: trending,
			toprated: toprated,
			upcoming: upcoming
		};
		dispatch(getHomeGames(res));
	} catch (err) {
		console.log(err);
	}
};

export const getGameThunk = gameId => async dispatch => {
	try {
		const res = await axios.get(`${BASE_URL}/api/rawg/${gameId}`);
		dispatch(getGame(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const getTwitchThunk = name => async dispatch => {
	try {
		const res = await axios.get(
			`${BASE_URL}/api/twitch/streams?gameName=${name}`
		);
		dispatch(getTwitch(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const getMixerThunk = name => async dispatch => {
	try {
		const res = await axios.get(
			`${BASE_URL}/api/mixer/streams?gameName=${name}`
		);
		dispatch(getMixer(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const getYoutubeThunk = name => async dispatch => {
	try {
		const res = await axios.get(
			`${BASE_URL}/api/youtube/streams?gameName=${name}`
		);
		dispatch(getYoutube(res.data));
	} catch (err) {
		console.log(err);
	}
};
