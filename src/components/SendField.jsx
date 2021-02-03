import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  send: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 60,
    textAlign: 'center',
  },
}))

const SendField = (props) => {
    const classes = useState()
    const [message, setMessage] = useState('')
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
            <IconButton edge='end'>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
    </div>
  )
}

SendField.propTypes = {}

export default SendField
