import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const Deliverables = () => {
  return (
    <Box pl={5} pr={5} pt={3} pb={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Social deliverables</Typography>
          <Typography variant="body2">
            {'What posts have you asked Littlefinger to do?'}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Instagram</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField value="Post" select fullWidth>
            <MenuItem value="Post">Post</MenuItem>
            <MenuItem value="Story">Story</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField value="Post" select fullWidth>
            <MenuItem value="Post">Post</MenuItem>
            <MenuItem value="Story">Story</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField value="Story" select fullWidth>
            <MenuItem value="Post">Post</MenuItem>
            <MenuItem value="Story">Story</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            type="date"
            defaultValue="2016-01-24"
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField value="Story" select fullWidth>
            <MenuItem value="Post">Post</MenuItem>
            <MenuItem value="Story">Story</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-07-20"
            fullWidth
          />
        </Grid>
        <Button style={{ color: '#FC6061' }}>
          <AddIcon />
          Add post
        </Button>

        <Grid item xs={12}>
          <Typography variant="subtitle2">Youtube</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField value="Video" select fullWidth>
            <MenuItem value="Post">Post</MenuItem>
            <MenuItem value="Video">Video</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-05"
            fullWidth
          />
        </Grid>
        <Button style={{ color: '#FC6061' }}>
          <AddIcon />
          Add post
        </Button>

        <Grid item xs={12}>
          <Typography variant="subtitle2">Facebook</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField value="" select fullWidth placeholder="Select post type">
            <MenuItem value="Post">Post</MenuItem>
            <MenuItem value="Story">Story</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField id="date" type="date" fullWidth />
        </Grid>
        <Button style={{ color: '#FC6061' }}>
          <AddIcon />
          Add post
        </Button>

        <Grid item xs={12}>
          <Typography variant="subtitle2">Other</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField value="" select fullWidth placeholder="Select post type">
            <MenuItem value="Post">Post</MenuItem>
            <MenuItem value="Story">Story</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" color="textSecondary">
            {
              "*We're unable to track these social networks at the moment, but we will take these into account when we break down campaign spend."
            }
          </Typography>
        </Grid>
        <Button style={{ color: '#FC6061', marginTop: '-24px' }}>
          <AddIcon />
          Add social media
        </Button>
      </Grid>
    </Box>
  );
};

export default Deliverables;
