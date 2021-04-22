import React, { Component } from 'react';
import Cell from './Cell.js'



class Board extends Component {
    state = {
        boardData: this.initBoardData(this.props.height, this.props.width),
        gameStatus: false,
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

    renderBoard(data) {
        
        return data.map((datarow) => {
          return datarow.map((dataitem) => {
            return (
              <div key={dataitem.x * datarow.length + dataitem.y}>
                <Cell
                 onClick={() => this.handleCellClick(dataitem.x, dataitem.y)}/>
              </div>
            );
          })
        });
      }

      handleCellClick(x, y) {
        alert(x)
        alert(y)
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
}


export default Board;