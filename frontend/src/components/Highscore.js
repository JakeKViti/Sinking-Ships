import React from 'react';
  class Highscore extends React.Component {      
      render() {
        return (
          <ol id="leaderboard">
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