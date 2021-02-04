import React, { useContext } from 'react'
import { Container, Grid, Paper, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserList from './components/UserList'
import Header from './components/Header'
import Message from './components/Message'
import SendField from './components/SendField'
import { GlobalContext } from './utils/GlobalState'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1.5, 1),
    backgroundColor: theme.palette.background.paper,
  },
  message: {
    height: '75vh',
  },
}))

function App() {
  const classes = useStyles()
  const { messages, users, selected } = useContext(GlobalContext)

  return (
    <Container maxWidth='lg'>
      <Paper
        elevation={3}
        style={{
          margin: '12px',
          padding: '8px',
          backgroundColor: '#cfe8fc',
          height: '100vh',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={1} className={classes.paper}>
              <Typography variant='h6' align='center'>
                Messages
              </Typography>
            </Paper>
          </Grid>
          <Divider variant='middle' orientation='vertical' flexItem />
          <Grid item xs={12} sm={7}>
            {selected && (
              <Paper elevation={1}>
                <Header />
              </Paper>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            {users.map((user) => (
              <UserList key={user.id} user={user} />
            ))}
          </Grid>
          <Divider variant='middle' orientation='vertical' flexItem />
          <Grid item xs={12} sm={7}>
            {selected ? (
              <Grid
                container
                direction='column'
                alignItems='center'
                className={classes.message}
              >
                <Message data={messages} />
              </Grid>
            ) : (
              <Paper>
                <Grid
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                  className={classes.message}
                >
                  <Grid item>
                    <h5>Click Chat to start messaging</h5>
                  </Grid>
                </Grid>
              </Paper>
            )}

            {selected && <SendField />}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default App
