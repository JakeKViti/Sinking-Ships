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
      alert("Sailor " + this.state.value + '!, you have a score of ' + this.props.boardInfo.clicks + ' shots!');
      if (this.props.boardInfo.clicks < 104){
        alert('VAIT! ' + this.props.boardInfo.clicks + '????? SAILOR ZAT BEATS ZE CAPTAINS BEST! Send a Pic to @JakeKViti on Twitter and ze captain vill congratulate you')
      }
      const entry =  {users: {initials: this.state.value, clicks: this.props.boardInfo.clicks}}
      this.props.sendScore(entry)
      this.setState({activeButton: false})
    } else {
      alert('Score Failed To Submit');
    }
  }

  render() {
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

