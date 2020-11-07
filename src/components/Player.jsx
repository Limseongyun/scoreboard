import React from 'react';
import Counter from "./Counter";
import {useDispatch} from "react-redux";
import {removePlayer} from "../redux/actions";

function Player({score, name, id, changeScore,children}) {

  const dispatch = useDispatch();

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={(e) => dispatch(removePlayer(id))}>x</button>
        {children}
        {name}
      </span>

      <Counter id={id} score={score}></Counter>
    </div>
  );
}
//dispatch
//(액션을 디스패치하는)펑션을 props로 매핑
// const mapActionToProps = (dispatch) => ({
//   //왼쪽은 props, 오른쪽은 펑션
//   removePlayer : (id)=>dispatch(removePlayer(id))
// })
// export default connect(null,mapActionToProps)(Player);
export default Player;