import React from 'react';


class Highscore extends React.Component {
    
    render = () => {
      return (
        <div>
              {this.props.entries.map(users => 

            <div key={users.id}>
            <li>
               Rank : {users.initials} with {users.clicks} clicks
            </li>
            </div>)}
        </div>
      )
    }
  }
  
  export default Highscore;