import React, { Component } from "react";
import { connect } from "react-redux";
import "./Game.css";
import GameView from "./GameView";

import {
	getGameThunk,
	getTwitchThunk,
	getMixerThunk,
	getYoutubeThunk
} from "../../actions";

class Game extends Component {
	async componentDidMount() {
		await this.props.getGame(this.props.gameId);
		await this.props.getTwitch(this.props.currGame.name);
		if (this.props.currGame.twitch) {
			this.props.getMixer(this.props.currGame.twitch.name);
			this.props.getYoutube(this.props.currGame.twitch.name);
		}
	}

	render() {
		if (this.props.currGame.length === 0) {
			return <div> Page Loading </div>;
		} else {
			return <GameView game={this.props.currGame} />;
		}
	}
}

const mapStateToProps = state => ({
	gameId: parseInt(window.location.pathname.split("/")[2]),
	currGame: state.game.currGame
});

const mapDispatchToProps = dispatch => ({
	getGame: id => dispatch(getGameThunk(id)),
	getTwitch: name => dispatch(getTwitchThunk(name)),
	getMixer: name => dispatch(getMixerThunk(name)),
	getYoutube: name => dispatch(getYoutubeThunk(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
