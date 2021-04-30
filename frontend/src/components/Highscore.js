import React from 'react';


class Highscore extends React.Component {
    
    render = () => {
      return (
        <ol>

              {this.props.entries.map(users => 

            <div key={users.id}>
            <li>
               {users.initials} with {users.clicks} clicks
            </li>
            </div>)}
        </ol>
      )
    }
  }
  
  export default Highscore;