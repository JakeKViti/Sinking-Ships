import React, { Component } from 'react';

class Cell extends Component { 
    getValue() {
        const {value} = this.props;

        if (value.isHit) {
          return "X";
        }
        if (value.IsMiss === 0) {
          return "O";
        }
      }

      render() {
        const {value, onClick} = this.props;    
        return (
          <div
            onClick={this.props.onClick}
          >
          {this.getValue()}
          </div>
        );
      }
    }    


export default Cell;