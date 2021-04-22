import React, { Component } from 'react';


class Board extends Component {
    state = {
        boardData: this.initBoardData(this.props.height, this.props.width),
        gameStatus: false
    }

    render() {
        return (
            <div className="board">
              <div className="game-info">
                <br />
                <span className="info">
                  {this.state.gameStatus}
                </span>
              </div>
              { this.renderBoard(this.state.boardData)}
            </div>
        );
        
    }
    

    createEmptyArray(height, width) {
        let data = []
        
        for (let i = 0; i < height; i++){
            data.push([]);
            for (let j = 0; j < width; j++) {
                data[i][j] = {
                    x: i,
                    y: j,
                    isHit: false,
                    isMiss: false
                }
            }
        }
        return data
    }

    initBoardData(height, width) {
        let data = this.createEmptyArray(height, width);
        
        return data;
    }

    
      
      
}


export default Board;