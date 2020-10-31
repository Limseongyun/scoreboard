import React from "react";

class Counter extends React.Component {
  /* constructor() {
     super();
     this.state ={
       score : 10
     }
   }*/


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
          this.props.changeScore(-1, e,this.props.id)
        }}>
          -
        </button>
        <span className="score">{this.props.score}</span>
        <button className="counter-action increment" onClick={(e) => this.props.changeScore(1, e,this.props.id)}>
          +
        </button>
      </div>
    )
  }
}

export default Counter;