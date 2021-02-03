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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,',
      messageTime: '01:22 am',
    },
    {
      from: '02',
      data:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,',
      messageTime: '01:22 am',
    },
    {
      from: '01',
      data:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,',
      messageTime: '01:22 am',
    },
    {
        from: '01',
        data:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,',
        messageTime: '01:22 am',
      },
  ],
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

  return (
    <GlobalContext.Provider
      value={{
        messages: state.messages,
        users: state.users,
        sendMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
