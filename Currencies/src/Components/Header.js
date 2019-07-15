import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Toolbar, 
  AppBar, 
  withStyles, 
  MenuList, 
  MenuItem, 
  Button,
  Popper,
  Grow, 
  Paper,
  ClickAwayListener,
  Typography
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

@inject('store')
@observer
class Header extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };


  render() {
    const { user } = this.props.store.user;
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <AppBar>
          <Toolbar className={classes.root}>
            <div>                  
              <Button
                buttonRef={node => {
                  this.anchorEl = node;
                }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}   
                style={{color: '#fff'}}                 
                >
                <AccountCircle />
                <Typography style={{padding: 4, color: '#fff'}}>Hello, {user.firstName}</Typography>  
              </Button>
                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      id="menu-list-grow"
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={this.handleClose}>
                          <MenuList>
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>Account settings</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
            </div>
          </Toolbar>
        </AppBar> 
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    minHeight: 40,
    display: 'flex',
    justifyContent: 'flex-end'
  },
});

export default withStyles(styles)(Header);