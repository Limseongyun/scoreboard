import React from 'react';
import Counter from "./Counter";

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={(e) => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">{props.name}</span>
      <Counter score={props.score}></Counter>
    </div>
  );
}

export default Player;