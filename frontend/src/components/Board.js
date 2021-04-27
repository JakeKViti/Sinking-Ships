import React, { Component } from 'react';
import Cell from './Cell.js'
import Info from './Info.js'

class Board extends Component {
    state = {
        boardData: this.initBoardData(this.props.height, this.props.width),
        gameWon: false,
        clicks: 0,
        remainingSquids: 9
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
                    ship: false,
                    revealed: false
                }
            }
        }
        return data
    }

    placeShips(data, height, width) {
      data[1][1].ship = true;
      data[1][2].ship = true;
      data[4][2].ship = true;
      data[4][3].ship = true;
      data[4][4].ship = true;
      data[6][1].ship = true;
      data[6][2].ship = true;
      data[6][3].ship = true;
      data[6][4].ship = true;
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
            return (
              <div key={dataitem.x * datarow.length + dataitem.y}>
                <Cell
                 onClick={() => this.handleCellClick(dataitem)}
                 value={dataitem}
                 />
              </div>
            );
          })
        });
      }

      renderInfo(clicks) {
        return (
          <div>
            <Info
            click={clicks}/>
          </div>
        )
      }

      revealBoard() {
        let updatedData = this.state.boardData;
        updatedData.map((datarow) => {
          datarow.map((dataitem) => {
            dataitem.revealed = true;
          });
        });
        this.setState({
          boardData: updatedData
        })
      }

      handleCellClick(data) {
        let updatedData = this.state.boardData;
        let updatedClicks = this.state.clicks + 1;
        let updatedSquidCount = this.state.remainingSquids
        data.revealed = true
        if (data.ship === true && data.isHit === false){
          data.isHit = true
          updatedSquidCount -= 1
        }
        if (data.ship === false){
          data.isMiss = true
        }
        if (updatedSquidCount === 0){
          alert("Game Over!")
          this.revealBoard()
        }
        this.setState({
          boardData: updatedData,
          clicks: updatedClicks,
          remainingSquids: updatedSquidCount 
        });
      }

      

      render() {
        return (
            <div className="board">
              { this.renderInfo(this.state.clicks)}
              { this.renderBoard(this.state.boardData)}
            </div>
        );
    }
}


export default Board;