const initailPlayers ={
  players : [
    {name: 'LDK', score: 30, id: 1},
    {name: 'HONG', score: 40, id: 2},
    {name: 'KIM', score: 50, id: 3},
    {name: 'PARK', score: 60, id: 4},
  ]
};

export const playerReducer = (state= initailPlayers,action)=>{
  if(action.type ==='updatePlayer'){
    return action.payload;
  }
  return state;
}