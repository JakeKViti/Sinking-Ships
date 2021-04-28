export default function manageLeaderboard(state = {
    entries: []
  }, action) {
    switch (action.type) {
  
       
          case 'ADD_ENTRIES':
            return {
              ...state,
              entries: action.entries,
              requesting: false
            }
       
          default:
            return state;
        }
      };