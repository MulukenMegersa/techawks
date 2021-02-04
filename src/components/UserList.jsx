import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
} from '@material-ui/core'
import ariana from '../ariana.png'
import { GlobalContext } from '../utils/GlobalState'


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}))

const UserList = ({ user }) => {
  const classes = useStyles()
  const { selectedUser } = useContext(GlobalContext);
  return (
    <Grid key={user.id}>
      <Paper elevation={1} className={classes.paper}>
        <List dense onClick={() => selectedUser(user.id)}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={ariana} />
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.lastMessage} />
            <ListItemSecondaryAction>
              <Typography variant='caption' display='block' gutterBottom>
                {user.messageTime}
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  )
}

UserList.propTypes = {}

export default UserList
