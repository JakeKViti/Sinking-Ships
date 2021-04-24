import React, { Component } from 'react';
import Board from './Board.js'


class Game extends Component {
    state = {
        height: 10,
        width: 10
    }

    render() {
        const { height, width } = this.state;
        return (
          <div className="game">
            <Board height={height} width={width} />
          </div>
        );
      }    
    }

export default Game;