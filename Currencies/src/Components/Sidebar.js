import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { 
  withStyles, 
  MenuList, 
  MenuItem, 
  ListItemText, 
  ListItemIcon,
  Tooltip,
} from '@material-ui/core';
import { Home, SpeakerNotes } from '@material-ui/icons';
import views from '../config/views';

@inject('store')
@observer
class Sidebar extends Component {
	constructor() {
    super();

    this.state = {
      width: 0
    };

    window.addEventListener("resize", this.update);
	}
	
	componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  render() {
    const { goTo, currentPath } = this.props.store.router;
		const { classes } = this.props;
		let showTooltip = this.state.width < 645;

    return (
      <div>
        <MenuList className={classes.root}>
          <Tooltip title={showTooltip ? 'Home' : ''} placement="right">
        	  <MenuItem selected={currentPath === '/'} onClick={() => goTo(views.home)}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText inset primary="Home" className={classes.menuText} />
            </MenuItem>
          </Tooltip>
          <Tooltip title={showTooltip ? 'About' : ''} placement="right">
						<MenuItem selected={currentPath === '/about'} onClick={() => goTo(views.about)}>
							<ListItemIcon>
								<SpeakerNotes />
							</ListItemIcon>
							<ListItemText inset primary="About" className={classes.menuText} />
						</MenuItem>   
          </Tooltip>     
        </MenuList>   
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    marginTop: 40,
		width: 140,
    display: 'inline-block',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRight: '1px solid #757575',
    [theme.breakpoints.down(645)]: {
				width: 56,
    }
  },
  menuText: {
    [theme.breakpoints.down(645)]: {
        display: 'none'
    }
	},
	tooltip: {
		// opacity: 0,
		// [theme.breakpoints.down(645)]: {
		// 	opacity: 1
		// }
	}
});

export default withStyles(styles)(Sidebar);