import './App.css';
import React, {useState} from "react";
import {Header} from "./components/Header";
//import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import CustomPlayer from "./components/CustomPlayer";
import _ from 'lodash';
import {connect, Provider, useSelector} from "react-redux";

// const players = [
//   {name: 'LDK',score :0, id: 1},
//   {name: 'HONG',score :0,  id: 2},
//   {name: 'KIM',score :0,  id: 3},
//   {name: 'PARK',score :0,  id: 4},
// ];
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
let maxId =4;



function App() {
  const players = useSelector(state => state.player.players);

  const handleAddPlayer =(name)=>{
    console.log('addPlayer',name);

      const aplayers = [...players];
      //추가하는 로직
      //....
      aplayers.push(
        {name:name,score:0,id:++maxId}
      )
    // setPlayers(aplayers);



  }
  const  handleRemovePlayer = (id) =>{
    console.log('handleRemovePlayer',id);
    //로직작성
    //id를 제외한 상태를 업데이트해야한다 .predicate : 판별한다 테스트 한다
    const aplayers = players.filter((player)=>player.id !== id);
    //short hand property : key, value 가 같으면 한쪽 생략
    // setPlayers(aplayers); //비동기로 실행된다.

    console.log(aplayers);
  }

  const  handleChangeScore = (delta,e,id) =>{
    console.log('handleChangeScore',delta,id);
      const newPlayers = [ ...players];
    newPlayers.forEach(player =>{
        if(player.id === id){
          player.score +=delta;
        }
      })
    // setPlayers(newPlayers);
  }
  const getHighScore = () =>{
    const  maxObj = _.maxBy(players,'score');
    return maxObj.score ? maxObj.score : null;
  }
  return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={players}></Header>
        {
          players.map((player) => {
            return (
              //반복문에선 키를 넣어야 한다
              <CustomPlayer isHighScore={player.score === getHighScore()} name={player.name} changeScore ={handleChangeScore}  score={player.score} key ={player.id} id={player.id} removePlayer={handleRemovePlayer} ></CustomPlayer>
            )
          })
        }
        <AddPlayerForm addPlayer={handleAddPlayer}/>
      </div>
  );
}


//구독
//store의 state를 props로 매핑
const mapStateToProps = (state) => ({
  //왼쪽은 props, 오른쪽은 store state
  players : state.player.players,
});


export default connect(mapStateToProps)(App);
// export default App;


// class App extends React.Component{
//   state ={
//     players :[
//       {name: 'LDK', score: 30, id: 1},
//       {name: 'HONG', score: 40, id: 2},
//       {name: 'KIM', score: 50, id: 3},
//       {name: 'PARK', score: 60, id: 4},
//     ]
//   }
//   handleRemovePlayer = (id) =>{
//     console.log('handleRemovePlayer',id);
//     //로직작성
//     this.setState((prevState)=>{
//
//       //id를 제외한 상태를 업데이트해야한다 .predicate : 판별한다 테스트 한다
//       const players = prevState.players.filter((player)=>player.id !== id);
//       //short hand property : key, value 가 같으면 한쪽 생략
//       return { players}
//
//     })
//   }
//   handleChangeScore = (delta,e,id) =>{
//     console.log('handleChangeScore',delta,id);
//     this.setState((prevState)=>{
//       const players = [ ...prevState.players];
//       players.forEach(player =>{
//         if(player.id === id){
//           player.score +=delta;
//         }
//       })
//       return {players : players};
//     })
//
//   }
//
//   handleAddPlayer =(name)=>{
//     console.log('addPlayer',name);
//     this.setState(prevState=>{
//       const players = [...prevState.players];
//       //추가하는 로직
//       //....
//       players.push(
//         {name:name,score:0,id:++maxId}
//       )
//       return {players};
//     })
//
//   }
//   //가장 높은 score를 리턴
//   getHighScore = () =>{
//     const  maxObj = _.maxBy(this.state.players,'score');
//     return maxObj.score ? maxObj.score : null;
//   }
//   render() {
//     return (
//       <div className="scoreboard">
//         <Header title="Scoreboard" players={this.state.players}></Header>
//         {
//           this.state.players.map((player) => {
//             return (
//               //반복문에선 키를 넣어야 한다
//               <CustomPlayer isHighScore={player.score === this.getHighScore()} name={player.name} changeScore ={this.handleChangeScore}  score={player.score} key ={player.id} id={player.id} removePlayer={this.handleRemovePlayer} ></CustomPlayer>
//             )
//           })
//         }
//         <AddPlayerForm addPlayer={this.handleAddPlayer}/>
//       </div>
//     )
//   }
// }
