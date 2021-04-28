import React from 'react';
import { fetchLeaderboard } from "../actions/fetchLeaderboard";
import { connect } from 'react-redux'


class Leaderboard extends React.Component {
    
    render() {
        return (
            "Future Leaderboard here! Will be able to save to backend and ranked by time or shots fired"
        );
    }

    componentDidMount(){
        this.props.fetchLeaderboard();
    }
};

function mapDispatchToProps(dispatch){
    return { fetchLeaderboard: () => dispatch(fetchLeaderboard()) }
  }

  function mapStateToProps(state){
    return {leaderboard: state.leaderboard}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)