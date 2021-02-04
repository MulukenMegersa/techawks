import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  message: {
    maxWidth: '350px',
    backgroundColor: '#07bf95',
    borderRadius: '50px',
    padding: '12px',
  },
}))

const Message = ({ data }) => {
  const classes = useStyles()

  return (
    <div>
      {data.map((message,id) => (
        <div key={id} style={{ maxWidth: '350px' }}>
          <div className={classes.message}>
            {message.data}
          </div>
          <Typography
            variant='body2'
            display='block'
            gutterBottom
            style={{ marginLeft: '12px', textAlignLast: 'end' }}
          >
           {message.messageTime}
          </Typography>
        </div>
      ))}
    </div>
  )
}

Message.propTypes = {}

export default Message
