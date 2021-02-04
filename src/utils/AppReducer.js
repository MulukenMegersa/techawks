export default (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      }
    case 'SELECTED_USER':
      return {
        ...state,
        selectedUser: action.payload,
      }
    default:
      return state
  }
}
