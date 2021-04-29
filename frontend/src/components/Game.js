import React, { Component } from 'react';
import Board from '../containers/Board.js'


class Game extends Component {
    state = {
        height: 20,
        width: 20
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