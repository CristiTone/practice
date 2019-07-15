import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core';
import CurrencyTable from './CurrencyTable';
import CurrencyChart from './CurrencyChart';

@inject('store')
@observer
class Home extends Component {
	componentDidMount() {
		this.props.store.currency.initRefresh();
	}

	componentWillUnmount() {
		this.props.store.currency.stopRefresh();
	}

  render() {
		const { classes} = this.props;

		return (
			<div className={classes.root}>
					<CurrencyTable />
					<CurrencyChart />
			</div>
		)
  }
}


const styles = theme => ({
  root: {	
    margin: '50px 10px 50px 150px',
    [theme.breakpoints.down(645)]: {
        marginLeft: 60
    }
  }
})

export default withStyles(styles)(Home);