export const fetchLeaderboard = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_LEADERBOARD'})
      fetch('http://localhost:3001/api/v1/users').then(response => {
        return response.json()
      }).then(responseJSON => {debugger
        dispatch({ type: 'ADD_ENTRIES', entires: responseJSON.images })
      })
    }
  }