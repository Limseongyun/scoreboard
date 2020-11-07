import {REMOVE_PLAYER} from "../action_types";

const initailPlayers ={
  players : [
    {name: 'LDK', score: 30, id: 1},
    {name: 'HONG', score: 40, id: 2},
    {name: 'KIM', score: 50, id: 3},
    {name: 'PARK', score: 60, id: 4},
  ]
};


export const playerReducer = (state= initailPlayers,action)=>{
  switch (action.type){
    case REMOVE_PLAYER:
      const  players = state.players.filter((player) => player.id !== action.id);
      return {...state,players: players}
  }
  return state;
}