
import React from "react";
import Statistics from "./Statistics";
// eslint-disable-next-line no-undef
export let Header = ({title, players} = props) => {
  // console.log(props)
  return (
    <header className="header">
      <Statistics players={players}/>
      <h1 className="h1">{title}</h1>

    </header>
  );
}
