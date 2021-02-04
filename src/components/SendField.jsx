import React, { useState, useContext } from 'react'
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { GlobalContext } from '../utils/GlobalState'

const SendField = (props) => {
    const classes = useState()
    const [message, setMessage] = useState('')
    const { sendMessage,selected } = useContext(GlobalContext)
  return (
    <div className={classes.send}>
    <FormControl variant='outlined' fullWidth required margin='normal'>
      <OutlinedInput
        name='message'
        placeholder='Write your message here'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton edge='end' onClick = {()=> sendMessage({ from:selected, data:message ,messageTime: '14:02 Pm'})}>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
    </div>
  )
}

export default SendField
