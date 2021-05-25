import React, { Component } from 'react';
import { sendScore } from "../actions/sendScore";
import { connect } from 'react-redux'


export class Info extends Component {
  constructor(props) {
  super(props);
  this.state = {
    clicks: this.props.boardInfo.clicks,
    gameWon: this.props.boardInfo.gameWon,
    squidCount: this.props.boardInfo.remainingSquids,
    value: '',
    activeButton: true
  };
        
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      clicks: this.props.boardInfo.clicks,
      gameWon: this.props.boardInfo.gameWon,
      squidCount:this.props.boardInfo.remainingSquids
    });
  }

  handleSubmit = (event) =>  {
    event.preventDefault();
    if (this.props.boardInfo.gameWon === true && this.state.activeButton === true && this.state.value.length !== 0){
      alert(this.state.value + ', you have a score of ' + this.props.boardInfo.clicks + ' clicks!');
      const entry =  {users: {initials: this.state.value, clicks: this.props.boardInfo.clicks}}
      this.props.sendScore(entry)
      this.setState({activeButton: false})
    } else {
      alert('Score Failed To Submit');
    }
  }

  render = () =>  {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Vere are {this.props.boardInfo.remainingSquids} Squids left {"        | "}  Shots Fired: {this.props.boardInfo.clicks} {"        | "}   
        </label>
        <label>
          Initials: 
          <input 
            type="text" 
            onChange={this.handleChange} 
            size="3"
            maxlength="3"
          />
        </label>
        <input 
        type="submit" 
        value="Submit" 
        />
      </form>
    );
  } 
};

const mapDispatchToProps = dispatch => {
  return {
    sendScore: (entry) => {
      dispatch(sendScore(entry))
    }
  };
};

export default connect(null, mapDispatchToProps)(Info);

