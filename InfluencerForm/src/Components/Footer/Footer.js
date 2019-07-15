import React from 'react';
import { AppBar, Toolbar, Button, Grid, Box } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Box style={{ height: 100 }} />
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Button>
                <KeyboardArrowLeft />
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
