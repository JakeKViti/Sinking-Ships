import React from 'react';
  class Highscore extends React.Component {

    state = {
      sort : "ASC",
      scores : this.props.entries
    }
  
  handleClick = (entries) => {
      let sorted
      if (this.state.sort === "ASC"){
          this.setState ({sort: "DESC"})
          sorted = entries.sort((a,b) => b.clicks - a.clicks) 
          console.log(sorted)
      } else {
          this.setState ({sort: "ASC"})
          sorted = entries.sort((b,a) => b.clicks - a.clicks)
          console.log(sorted)
      }
  }
  
    renderSortButton(){
      if(this.props.entries.length !== 0) {
        return  (
          <button onClick={() => this.handleClick(this.props.entries)}>
            Order Shots {this.state.sort}?
          </button>
        )
      }
    }
      
      render() {
        return (
          <ol id="leaderboard">
            {this.renderSortButton()}
            {this.state.scores.map(users => 
            <div key={users.id}>
              <li>
                {users.initials} with {users.clicks} shots  
              </li>
            </div>)}
          </ol>
        )
      }
    }
    
    export default Highscore;