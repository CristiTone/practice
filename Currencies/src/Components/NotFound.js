import React from 'react';
import { withStyles, Card, CardHeader, CardMedia } from '@material-ui/core';

const NotFound = (props) => {
  const { classes} = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader    
          title="Ooops! Can't find the requested page."
        />
        <CardMedia
					className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink.png?432866230176278629"
          title="404"
        />
    	</Card>
    </div>
    )		
   
}

const styles = theme => ({
  root: {
		margin: '50px 10px 50px 150px',	
    [theme.breakpoints.down(645)]: {
      marginLeft: 60
    }
	},
	card: {
		maxWidth: 400,
		flex: 1,
		margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
})

export default withStyles(styles)(NotFound);