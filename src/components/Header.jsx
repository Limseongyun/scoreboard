
import React from "react";
// eslint-disable-next-line no-undef
let Header = ({title, players} = props) => {
  // console.log(props)
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Players : {players}</span>
    </header>
  );
}

export default Header;