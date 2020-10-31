import React from "react";

class Counter extends React.Component {
  /* constructor() {
     super();
     this.state ={
       score : 10
     }
   }*/

  state = {
    score: 10
  }
  handleScore = (delta, e) => {
    console.log(e)
    console.log(this);
    // this.state.score += 1;
    /*
    * this.setState({
      score : this.state.score += 1
    });
    * */
    this.setState(prevState => {
      return {
        score: prevState.score + delta
      }
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={(e) => {
          this.handleScore(-1, e)
        }}>
          -
        </button>
        <span className="score">{this.state.score}</span>
        <button className="counter-action increment" onClick={(e) => this.handleScore(1, e)}>
          +
        </button>
      </div>
    )
  }
}

export default Counter;