// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload ],
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
