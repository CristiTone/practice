import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Footer(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.root}> 
          <Typography variant="h6" color="inherit">
            Lorem ipsum dolor sit amet
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styles = {
    root: {
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        minHeight: 40,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#757575'
    },
  };

export default withStyles(styles)(Footer);