export default function manageLeaderboard(state = {
    entries: []
  }, action) {
    switch (action.type) {
        case 'FETCH_LEADERBOARD':
        return {
          ...state,
          leaderboard: [...state.entries],
        }       
          case 'SEND_SCORE':
            return {
              ...state,
              entries: action.entries
            }
       
          default:
            return state;
        }
      };