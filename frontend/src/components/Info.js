import React, { Component } from 'react';
import { sendScore } from "../actions/sendScore";
import { connect } from 'react-redux'

export class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: this.props.click,
            value: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = (event) => {
        this.setState({
            value: event.target.value,
            clicks: this.props.click
        });
    }
      handleSubmit(event) {
        debugger
        event.preventDefault();
        alert(this.state.value + ', you have a score of ' + this.state.clicks + ' clicks!');
        const entry =  {initial: this.state.value, clicks: this.state.clicks}
        this.props.sendScore(entry)
        //This will submit to backend
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <label>
              Amount of clicks: {this.props.click} {"        | "}     
            </label>
            <label>
              Initials:
              <input 
                type="text" 
                onChange={this.handleChange} 
             />
            </label>
            <input type="submit" value="Submit" />
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

//export default Info