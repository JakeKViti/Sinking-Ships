import React from 'react';

export default class Info extends React.Component {
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
        event.preventDefault();
        alert(this.state.value + ', you have a score of ' + this.state.clicks + ' clicks!');
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

