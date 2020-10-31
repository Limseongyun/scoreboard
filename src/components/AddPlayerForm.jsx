import React from "react";

class AddPlayerForm extends React.Component{
  state ={
    value : ''
  }

  handleValueChange = (e,param) =>{
    this.setState(
      {
        value : e.target.value
      }
    );
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    console.log('handleSubmit')
    this.props.addPlayer(this.state.value);
    this.setState({value:''})
  }
  render() {
    return(
      <form action="" className="form" onSubmit={this.handleSubmit}>
        <input type="text" className="input" placeholder="enter a player's name" value={this.state.value} onChange={(e)=>this.handleValueChange(e,1)}/>
        <input type="submit" className="input" value="Add Player"/>
      </form>
    );
  }
}

export default AddPlayerForm;