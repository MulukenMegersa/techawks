export default (state, action) => {
    switch(action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [action.payload, ...state.messages]
        }
      default:
        return state;
    }
  }