export default function manageLeaderboard(state = {
    entries: []
  }, action) {
    switch (action.type) {
  
       
          case 'SEND_SCORE':
            return {
              ...state,
              entries: action.entries
            }
       
          default:
            return state;
        }
      };