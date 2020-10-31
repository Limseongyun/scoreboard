import React from 'react';
import Counter from "./Counter";

function Player({score,removePlayer,name,id,changeScore}) {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={(e) => removePlayer(id)}>x</button>
      </span>
      <span className="player-name">{name}</span>
      <Counter id={id} score={score} changeScore={changeScore}></Counter>
    </div>
  );
}

export default Player;