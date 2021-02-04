import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  users: [
    {
      id: '01',
      name: 'juliate',
      lastMessage: 'hello how are you?',
      messageTime: '11:02 am',
    },
    {
      id: '02',
      name: 'jack',
      lastMessage: 'hi there',
      messageTime: '9:11 am',
    },
  ],
  messages: [
    {
      from: '01',
      data:
        'Lorem ipum dolor sit amet consectetur adipisicing lit. Eligendi,',
      messageTime: '01:22 am',
    },
    {
      from: '02',
      data:
        'Lorem ipsum dolor sit amet consetetur adipisicing elit. Eligendi,',
      messageTime: '01:23 am',
    },
    {
      from: '01',
      data:
        'Lorem ipsum dolor st amet consectetur adipisicing elit. Eligendi,',
      messageTime: '01:24 am',
    },
    {
        from: '01',
        data:
          'Lorem ipsm dolor sit amet consectetur adipisicing elit. Eligendi,',
        messageTime: '01:25 am',
      },
  ],
  selectedUser: '',
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function sendMessage(messages) {
    dispatch({
      type: 'SEND_MESSAGE',
      payload: messages,
    })
  }

  function selectedUser(id) {
    dispatch({
      type: 'SELECTED_USER',
      payload: id,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        messages: state.messages,
        users: state.users,
        selected: state.selectedUser,
        sendMessage,
        selectedUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
