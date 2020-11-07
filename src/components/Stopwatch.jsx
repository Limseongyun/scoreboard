import React, {useEffect, useRef, useState} from "react";

function Stopwatch(props){
  let tickRef;
  const [isRunning,setIsRunning] = useState(false);
  const [timer,setTimer] = useState(0);


  const refIsRunning = useRef(false);

  
  
  const tick =() =>{
    console.log(refIsRunning.current,timer);
    if(refIsRunning.current){
      setTimer(timer => timer+1)
    }
  }
  
  useEffect(()=>{
    tickRef = setInterval(tick, 1000);
    return()=>{
      clearInterval(tickRef);
    }
    //리턴하면 사라지기전에 실행
  },[]);//배열이 없으면 처음 한번만실행
  //렌더링이 다시 일어난다 체크 해보자

  const getButton = () =>{
    if(isRunning){
      refIsRunning.current = true;
      return (
        <button onClick={()=>{setIsRunning(!isRunning)}}>stop</button>
      )
    } else {
      refIsRunning.current = false;
      return (
        <button onClick={()=>{setIsRunning(!isRunning)}}>start</button>
      )
    }
  }
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{timer}</span>
        {
          getButton()
        }

        <button>Reset</button>
      </div>
    );

  



}

export default Stopwatch;