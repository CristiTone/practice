import React from 'react';
import { withStyles, CardHeader, Card, Avatar, CardMedia, CardContent, Typography } from '@material-ui/core';


const About = ({ classes} ) => {
  return (
    <div className={classes.root}>
			<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar className={classes.avatar}>
						VON
					</Avatar>
				}
				title="Economic Changes"
				subheader="September 14, 2018"
			/>
			<CardMedia
				className={classes.media}
				image="https://www.von.gov.ng/wp-content/uploads/2018/05/Economy.jpg"
				title="News"
			/>
			<CardContent>
				<Typography component="p">
				As Nigeria marks the 2018 Democracy Day, some law makers have suggested policy changes and stringent measures to move the economy forward.
				Commenting on the Democracy Day, Miss Beni Lar, House of Representatives Member from Plateau State said government should reflect on areas that need to improve upon to meet the demands of citizens.
				</Typography>
			</CardContent>
		</Card>

		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar className={classes.avatar}>
						BBC
					</Avatar>
				}
				title="Economy Expands in UK"
				subheader="March 24, 2019"
			/>
			<CardMedia
				className={classes.media}
				image="https://ichef.bbci.co.uk/news/624/cpsprodpb/1200B/production/_105993737_optimised-growth_3m_bar-nc.png"
				title="News"
			/>
			<CardContent>
				<Typography component="p">
				The report from the Office for National Statistics (ONS) showed a pick-up in activity in January when the economy expanded by 0.5%.
				The ONS said strength in IT, health services and wholesale trading offset falls in the manufacturing of metals and cars, and construction repair work.
				</Typography>
			</CardContent>
		</Card>
  </div>
  )
}

const styles = theme => ({
  root: {
		display: 'flex',
		margin: '50px 10px 50px 150px',
		flexDirection: 'row',
    [theme.breakpoints.down(645)]: {
			marginLeft: 60,
			flexDirection: 'column'
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
  avatar: {
  	backgroundColor: 'lightblue',
  },
})

export default withStyles(styles)(About);