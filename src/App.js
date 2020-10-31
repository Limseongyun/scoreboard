import './App.css';
import React from "react";
import {Header} from "./components/Header";
import Player from "./components/Player";

const players = [
  {name: 'LDK', score: 30, id: 1},
  {name: 'HONG', score: 40, id: 2},
  {name: 'KIM', score: 50, id: 3},
  {name: 'PARK', score: 60, id: 4},
];
//펑션 컴포넌트가 되는 조건
//첫글자는 대문자
//react element를 리턴


// let Player = (props) => {
//   return (
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={(e) => props.removePlayer(props.id)}>x</button>
//       </span>
//       <span className="player-name">{props.name}</span>
//       <Counter score={props.score}></Counter>
//     </div>
//   );
// }




/*let Counter = (props) =>{
  return(
    <div className="counter">
      <button className="counter-action decrement">
        -
      </button>
      <span className="score">{props.score}</span>
      <button className="counter-action increment">
        +
      </button>
    </div>
  )
}*/
class App extends React.Component{
  state ={
    players :[
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }
  handleRemovePlayer = (id) =>{
    console.log('handleRemovePlayer',id);
    //로직작성
    this.setState((prevState)=>{

      //id를 제외한 상태를 업데이트해야한다 .predicate : 판별한다 테스트 한다
      const players = prevState.players.filter((player)=>player.id !== id);
      return { players:players}

    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={players.length}></Header>
        {
          this.state.players.map((player) => {
            return (
              //반복문에선 키를 넣어야 한다
              <Player name={player.name}  score={player.score} key ={player.id} id={player.id} removePlayer={this.handleRemovePlayer} ></Player>
            )
          })
        }

      </div>
    )
  }
}

export default App;