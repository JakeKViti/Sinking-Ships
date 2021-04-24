import React, { Component } from 'react';

class Cell extends Component { 
    getValue() {
      const { value } = this.props;

        if (!value.revealed){
          return "?"
        }
        if (value.isHit) {
          return "X";
        }
        if (value.IsMiss) {
          return "O";
        }
      }

      render() {
        let className = "cell"
        return (
          <div
          onClick={this.props.onClick}
          className={className}>
            {this.getValue()} 
          </div>
        );
      }
    }
    
    


export default Cell;