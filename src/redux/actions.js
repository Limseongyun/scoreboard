import {REMOVE_PLAYER} from "./action_types";

export const removePlayer =(id) =>({
  type : REMOVE_PLAYER,
  id
})