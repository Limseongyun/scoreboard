import React from 'react';
import Counter from "./Counter";

function Player({score, removePlayer, name, id, changeScore,children}) {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={(e) => removePlayer(id)}>x</button>
        {children}
        {name}
      </span>

      <Counter id={id} score={score} changeScore={changeScore}></Counter>
    </div>
  );
}

export default Player;