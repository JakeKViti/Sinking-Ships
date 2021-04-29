import React from 'react';


class Highscore extends React.Component {
    listLeaders = () => {
      return this.props.entries.map(users => <div key={users.id} clicks={users.clicks} initials={users.initials}  />)
    }
  
    render() {
      return (
        <div>
          {this.listLeaders()}
        </div>
      )
    }
  }
  
  export default Highscore;