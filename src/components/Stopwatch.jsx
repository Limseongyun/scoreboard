import React from "react";

class Stopwatch extends React.Component{
  tickRef;
  state = {
    isRunning:false,
    timer : 0
  }
  tick =() =>{
    if(this.state.isRunning){
      this.setState(
        {
          timer:this.state.timer +1
        }
      )
    }
  }
  //돔이 렌더링 된 직후에 호출
  //REST API 호출, 서드 파티 라이브러리 로딩
  componentDidMount() {
    this.tickRef = setInterval(this.tick,1000);
  }
  getButton = () =>{
    if(this.state.isRunning){
      return (
        <button onClick={()=>{this.setState({isRunning : ! this.state.isRunning})}}>stop</button>
      )
    } else {
      return (
        <button onClick={()=>{this.setState({isRunning : ! this.state.isRunning})}}>start</button>
      )
    }
  }
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        {
          this.getButton()
        }

        <button>Reset</button>
      </div>
    );
  }
  
  //돔이 파괴되기 직전에 호출되는 라이프 사이클 메서드
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

}

export default Stopwatch;