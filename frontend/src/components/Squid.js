import React from 'react';

export default class Squid extends React.Component {
    placeSquids(data) {
      debugger
        data[0][0].ship = true;
        data[0][1].ship = true;
        data[1][0].ship = true;
        data[1][1].ship = true;
        data[1][2].ship = true;
        data[2][0].ship = true;
        data[2][1].ship = true;
        data[2][2].ship = true;
        data[2][3].ship = true;
        //this.getRandomNumber(data, 2)
        //this.getRandomNumber(data, 3)
        //this.getRandomNumber(data, 4)
        return (data);
      }
  
      getRandomNumber(data, numbers) {
        let x = Math.floor((Math.random() * 1000) + 1) % 17;
        let y = Math.floor((Math.random() * 1000) + 1) % 17;
        let ori = Math.floor((Math.random() * 1000) + 1) % 2;
        if (data[x][y].ship === true){
          this.getRandomNumber(data, numbers)
        }
        for (let i = 0; i < numbers; i++) {
          if (ori === 1) {
            data[x+i][y].ship = true
          } else {
            data[x][y+i].ship = true
          }
        }
        return 
      }

    render() {
      debugger
        return (
          <div>
            {this.placeSquids(this.props.boardInfo)}
          </div>
        );
    }
};

