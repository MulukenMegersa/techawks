import React from 'react';
import { Badge, Avatar, Typography } from '@material-ui/core'; 
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ariana from '../ariana.png';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
    },
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Header = () =>  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar src= {ariana} />
      </StyledBadge>
      <Typography style={{paddingTop: '6px'}}> Ariana grande</Typography>
    </div>
  );
}

export default Header
