import React, { Component } from "react";
import { connect } from "react-redux";
import './Game.css';
import GameView from './GameView';

import { getGameThunk } from "../../actions";

class Game extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getGame(this.props.gameId)
  }

  render(){
    if(this.props.currGame.length === 0){
      return (<div> Page Loading </div>);
    } else{
      console.log(this.props.currGame)
      return (
        <GameView
        game={this.props.currGame}
      />
      )
    }
  }
}

const mapStateToProps = state => ({
  gameId: parseInt(window.location.pathname.split("/")[2]),
  currGame: state.game.currGame,
})

const mapDispatchToProps = dispatch => ({
  getGame: id => dispatch(getGameThunk(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
