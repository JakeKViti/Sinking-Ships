import React, { Component } from 'react';
import Cell from '../components/Cell.js'
import Info from '../components/Info.js'
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
            squid: false,
            revealed: false
          }
        }
      }
      return data
    }

    placeSquids(data)  {
      data[0][0].squid = true;
      data[0][1].squid = true;
      data[1][0].squid = true;
      data[1][1].squid = true;
      data[1][2].squid = true;
      data[2][0].squid = true;
      data[2][1].squid = true;
      data[2][2].squid = true;
      data[2][3].squid = true;
      //this.getRandomNumber(data, 2)
      //this.getRandomNumber(data, 3)
      //this.getRandomNumber(data, 4)
      return (data);
    }

    getRandomNumber(data, numbers) {
      let x = Math.floor((Math.random() * 1000) + 1) % 17;
      let y = Math.floor((Math.random() * 1000) + 1) % 17;
      let ori = Math.floor((Math.random() * 1000) + 1) % 2;
      if (data[x][y].squid === true){
        this.getRandomNumber(data, numbers)
      }
      for (let i = 0; i < numbers; i++) {
        if (ori === 1) {
          data[x+i][y].squid = true
        } else {
          data[x][y+i].squid = true
        }
      } 
    }

    initBoardData(height, width) {
      let data = this.createEmptyArray(height, width);
      data = this.placeSquids(data);
      return data;
    }

    renderBoard = (data) =>  {
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

      renderInfo = (data) => {
        return (
          <div>
            <Info
            boardInfo={data}/>
          </div>
        )
      }

      revealBoard = () => {
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

      handleCellClick = (data) => {
        let updatedData = this.state.boardData;
        let updatedClicks = this.state.clicks + 1;
        let updatedSquidCount = this.state.remainingSquids
        let winner = false
        data.revealed = true
        if (data.squid === true && data.isHit === false){
          data.isHit = true
          updatedSquidCount -= 1
        }
        if (data.squid === false){
          data.isMiss = true
        }
        if (updatedSquidCount === 0){
          alert("Game Over!")
          winner = true
          this.revealBoard()
        }
        this.setState({
          boardData: updatedData,
          gameWon: winner,
          clicks: updatedClicks,
          remainingSquids: updatedSquidCount 
        });
      }

      

      render = () => {
        return (
            <div className="board">
              { this.renderInfo(this.state)}
              { this.renderBoard(this.state.boardData)}
            </div>
        );
    }
}


export default Board;