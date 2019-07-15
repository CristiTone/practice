import React from 'react';
import {
  Box,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from '@material-ui/core';

const OtherContent = () => {
  const [state, setState] = React.useState({
    event: false,
    newsletter: false,
    blog: false,
    store: false,
    website: false,
    other: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Box pl={5} pr={5} pt={3} pb={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Other paid content</Typography>
          <Typography variant="body2">
            {'Have you asked Littlefinger to create any further content?'}
          </Typography>
        </Grid>
        <FormGroup row>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.event}
                  onChange={handleChange('event')}
                  value="event"
                />
              }
              label="Event"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.blog}
                  onChange={handleChange('blog')}
                  value="blog"
                />
              }
              label="Newsletter"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.website}
                  onChange={handleChange('website')}
                  value="website"
                />
              }
              label="Brand Website content"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.newsletter}
                  onChange={handleChange('newsletter')}
                  value="newsletter"
                />
              }
              label="Newsletter"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.store}
                  onChange={handleChange('store')}
                  value="store"
                />
              }
              label="In-store appearance"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.other}
                  onChange={handleChange('other')}
                  value="other"
                />
              }
              label="Other"
            />
          </Grid>
        </FormGroup>
        <Grid item xs={12}>
          <TextField fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OtherContent;
