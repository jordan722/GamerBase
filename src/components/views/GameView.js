import React from "react";
import TrailerModal from '../../components/utilities/TrailerModal';
import "./GameView.css";

const GameView = () => {
  return (
    <div className="main-container">
      <div className="game-header">
        <img src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-144x192.jpg" style={{float:'left', marginTop:'30px', marginLeft:'40px'}}/>
        <div style={{float:'left', marginLeft:'40px', textAlign:'left',}}>
          <h1>Fortnite</h1>
          <h2> 74.8K Viewers . 51.7M Followers </h2>
          <p> Fortnite is a sandbox-survival third-person shooter from the <br/> studio behind the Unreal Tournament and Gears of War series. </p>
        </div>
        <div style={{float:'left', marginLeft:'100px', marginTop: '80px', textAlign:'left',}}>
          <h2>Rating: 4.1/5</h2>
          <button className="steam-button"> Buy on Steam </button>
          <TrailerModal />
        </div>
      </div>
      <h1 style={{color:'white'}}> Twitch Streams </h1>
      <div>
        <img className="stream-box" src="https://i.ytimg.com/vi/Kavmf3RYEjI/maxresdefault.jpg"/>
        <img className="stream-box-blue" src="https://i.ytimg.com/vi/Kavmf3RYEjI/maxresdefault.jpg"/>
        <img className="stream-box" src="https://i.ytimg.com/vi/Kavmf3RYEjI/maxresdefault.jpg"/>
        <img className="stream-box-blue" src="https://i.ytimg.com/vi/Kavmf3RYEjI/maxresdefault.jpg"/>
      </div>
    </div>
  );
};

export default GameView;
