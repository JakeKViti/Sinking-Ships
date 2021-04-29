import React from 'react';
import { fetchLeaderboard } from "../actions/fetchLeaderboard";
import { connect } from 'react-redux'
import Highscore from './Highscore.js'



class Leaderboard extends React.Component {

    componentDidMount(){
       this.props.fetchLeaderboard()
    }

    handleLoading = () => {
        console.log(this.props.entries)
        if(this.props.entries.length !== 0) {
            return <Highscore entries={this.props.entries} />
        }
    }

    render() {
        return (
            <div className="highscores">
              <h1>TOP SCORES!</h1>
              {this.handleLoading()}
            </div>
          );
    }
};

const mapDispatchToProps = state => {
    return {
      entries: state.entries,
      loading: state.loading
    }
  }


  export default connect(mapDispatchToProps, { fetchLeaderboard })(Leaderboard)