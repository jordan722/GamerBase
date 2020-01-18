import React from "react";
import TrailerModal from '../../components/utilities/TrailerModal';
import StreamTabs from '../../components/utilities/StreamTabs';
import "./GameView.css";

const GameView = () => {
  return (
    <div className="main-container">
      <div className="game-header">
        <img src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-144x192.jpg" style={{float:'left', marginTop:'30px', marginLeft:'40px'}}/>
        <div style={{float:'left', marginLeft:'40px', textAlign:'left', color:'white', width:'30%'}}>
          <h1>Fortnite</h1>
          <h2> 74.8K Viewers . 51.7M Followers </h2>
          <p> Fortnite is a sandbox-survival third-person shooter from the studio behind the Unreal Tournament and Gears of War series. </p>
        </div>
        <div style={{float:'left', marginLeft:'100px', marginTop: '80px', textAlign:'left', width:'15%'}}>
          <h2>Rating: 4.1/5</h2>
          <button className="steam-button"><a href="https://www.epicgames.com/fortnite"> Download Game </a> </button>
          <TrailerModal />
        </div>
      </div>
      <h1> Active Streams </h1>
      <StreamTabs />
    </div>
  );
};

export default GameView;
