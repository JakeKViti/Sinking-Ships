export const fetchLeaderboard = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_LEADERBOARD'})
      fetch('http://localhost:3001/api/v1/users') 
      .then(response => response.json())
      .then(entries => dispatch({ type: 'ADD_ENTRIES', payload: entries}));
    }
  }