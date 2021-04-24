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
                    isMiss: false,
                    ship: false
                }
            }
        }
        return data
    }

    placeShips(data, height, width) {
      //let randomx, randomy = 0;
      //  randomx = this.getRandomNumber(width);
      //  randomy = this.getRandomNumber(height);
      //  debugger
      //  data[randomx][randomy].ship = true;
      //  data[randomx+1][randomy].ship = true;
      //  data[randomx+2][randomy].ship = true;
      return (data);
    }

    getRandomNumber(number) {
      let rando = Math.floor((Math.random() * 1000) + 1) % number;
      return rando
    }

    initBoardData(height, width) {
        let data = this.createEmptyArray(height, width);
        data = this.placeShips(data, height, width);
        return data;
    }

    renderBoard(data) {
        
        return data.map((datarow) => {
          return datarow.map((dataitem) => {
            debugger
            return (
              <div key={dataitem.x * datarow.length + dataitem.y}>
                <Cell
                 onClick={() => this.handleCellClick(dataitem)}/>
              </div>
            );
          })
        });
      }

      handleCellClick(data) {
        alert(data.ship)
        
      }
      

      render() {
        return (
            <div className="board">
              { this.renderBoard(this.state.boardData)}
            </div>
        );
    }
}


export default Board;