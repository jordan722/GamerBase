import React from "react";
import TrailerModal from '../../components/utilities/TrailerModal';
import StreamTabs from '../../components/utilities/StreamTabs';
import "./Game.css";

const GameView = (props) => {

  let cleanText = props.game.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0,250) + "...";

  return (
    <div className="main-container">
      <div className="game-header" style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(${props.game.background_image})`}}>
        {props.game.twitch && <div className="game-logo" style={{backgroundImage:`url(${props.game.twitch.box_art_url.replace('{height}',192).replace('{width}',144)})`}}/>}
        <div style={{float:'left', marginTop:'-40px', marginLeft:'40px', textAlign:'left', color:'white', width:'30%'}}>
          <h1 style={{color:'white'}}>{props.game.name}</h1>
          <h2 style={{color:'white'}}> Released {props.game.released} </h2>
          <p style={{color:'white', fontSize:'14px', marginLeft:0}}> {cleanText}... </p>
        </div>
        <div style={{float:'left', marginTop:'40px', marginLeft:'100px', textAlign:'left', width:'15%'}}>
          <h2 style={{color:'white'}}>Rating: {props.game.rating}</h2>
          {props.game.stores.length != 0 && <button className="steam-button"><a href={props.game.stores[0].url}> Download Game </a> </button>}
          {props.game.clip && <TrailerModal video={props.game.clip}/>}

        </div>
      </div>
      <div style={{paddingBottom:'50px'}}>
        <h1 style={{color:'white'}}> Active Streams </h1>
        <StreamTabs twitch={props.game.twitch} mixer={props.game.mixer} youtube={props.game.youtube}/>
      </div>
    </div>
  );
};

export default GameView;
