import {CHANGE_SCORE, REMOVE_PLAYER} from "../action_types";

const initailPlayers ={
  players : [
    {name: 'LDK', score: 30, id: 1},
    {name: 'HONG', score: 40, id: 2},
    {name: 'KIM', score: 50, id: 3},
    {name: 'PARK', score: 60, id: 4},
  ]
};


export const playerReducer = (state= initailPlayers,action)=>{
  let players;

  switch (action.type){
    case REMOVE_PLAYER:
      players = state.players.filter((player) => player.id !== action.id);
      return {...state, players: players}
    case CHANGE_SCORE:
      console.log("asdf")
      players = [...state.players];
      players.forEach(player => {
        if(player.id === action.id){
          player.score += action.delta
        }
      })
      return {...state, players: players}
  }
  return state;
}