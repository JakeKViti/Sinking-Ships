import React from 'react';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        //this will save user initals 
      }
    
      handleSubmit(event) {
        event.preventDefault();
        //This will submit to backend
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <label>
              Amount of clicks: {this.props.value} {"        | "}     
            </label>
            <label>
              Initials:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
};

