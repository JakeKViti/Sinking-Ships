import React, { Component } from 'react';

class Cell extends Component { 
    getValue() {
        const {value} = this.props;

        if (value.isHit) {
          return "X";
        }
        if (value.IsMiss) {
          return "O";
        }
      }

      render() {
        const {value, onClick} = this.props;    
        let className = "cell"
        return (
          <div
          onClick={onClick}
          className={className}>
            
          </div>
        );
      }
    }
    
    


export default Cell;