
import React from "react";
import Statistics from "./Statistics";
import Stopwatch from "./Stopwatch";
// eslint-disable-next-line no-undef
export let Header = ({title, players} = props) => {
  // console.log(props)
  return (
    <header className="header">
      <Statistics players={players}/>
      <h1 className="h1">{title}</h1>
      <Stopwatch/>

    </header>
  );
}
