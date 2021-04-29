export default function manageLeaderboard(state = {
    entries: [],
    loading: false
  }, action) {
    switch (action.type) {
      case 'LOADING_LEADERBOARD':
        return {
          ...state,
          entries: [...state.entries],
          loading: true
        }
        case 'ADD_ENTRIES':
      return {
        ...state,
        entries: action.payload,
        loading: false
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