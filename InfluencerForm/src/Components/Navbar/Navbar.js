import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Link,
  Tabs,
  Tab,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Badge,
} from '@material-ui/core';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import InfluencerForm from '../InfluencerForm';

const useStyles = makeStyles(theme => ({
  tabRoot: {
    '@media (min-width: 960px)': {
      fontSize: 14,
      minWidth: 110,
    },
  },
  logo: {
    paddingRight: theme.spacing(1),
    color: '#FC6061',
    fontWeight: 500,
  },
  notification: {
    fontWeight: 500,
    padding: theme.spacing(3),
  },
  primaryToolbar: {
    minHeight: theme.spacing(10),
    backgroundColor: '#FFF',
  },
  secondaryToolbar: {
    backgroundColor: '#EEEEF1',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar className={classes.primaryToolbar}>
          <Grid container justify="flex-start" alignItems="center">
            <Grid item style={{ lineHeight: 2.5 }}>
              <Link variant="h5" className={classes.logo} href="#">
                Albus
              </Link>
            </Grid>
            <Grid item>
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { display: 'none' } }}
              >
                <Tab
                  className={classes.tabRoot}
                  label="Campains"
                  disableFocusRipple
                  disableRipple
                />
                <Tab
                  className={classes.tabRoot}
                  label="Hall of fame"
                  disableFocusRipple
                  disableRipple
                />
              </Tabs>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" color="inherit" className={classes.notification}>
                <Badge color="secondary" variant="dot">
                  Notifications
                </Badge>
              </Link>
              <Button onClick={handleClick} color="inherit">
                Cristi Tone
                <KeyboardArrowDown />
              </Button>
              {anchorEl && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <MenuItem>Profile</MenuItem>

                  <MenuItem>Logout</MenuItem>
                </Menu>
              )}
            </Grid>
          </Grid>
        </Toolbar>
        <Toolbar className={classes.secondaryToolbar}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6">{'Add new campaign'}</Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" style={{ borderRadius: 50 }}>
                {'Save and Exit'}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {value === 0 && <InfluencerForm />}
      {value === 1 && (
        <div>
          <h2>Hall of Fame</h2>
        </div>
      )}
    </>
  );
};

export default Navbar;
