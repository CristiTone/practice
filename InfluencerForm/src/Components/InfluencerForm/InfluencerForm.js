import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Avatar,
  Grid,
  Divider,
  Button,
} from '@material-ui/core';
import littlefinger from './petyr.jpg';
import Fees from './Fees';
import Deliverables from './Deliverables';
import OtherContent from './OtherContent';

const InfluencerForm = () => {
  return (
    <Container maxWidth="md">
      <Box mt={8} mb={4}>
        <Typography variant="body2">{'Step 3 of 5'}</Typography>
        <Typography variant="h6">{'Define influencer deliverables'}</Typography>
        <Typography variant="subtitle1">{'0 of 2 complete'}</Typography>
      </Box>

      <Paper>
        <Grid container alignItems="center" style={{ padding: 8 }}>
          <Avatar alt="Littlefinger" src={littlefinger} />
          <Typography style={{ margin: 8 }}>{'Petyr Baelish'}</Typography>
        </Grid>

        <Divider variant="middle" />

        <Fees />

        <Divider variant="middle" />

        <Deliverables />

        <Divider variant="middle" />

        <OtherContent />

        <Divider variant="middle" />

        <Box display="flex" justifyContent="flex-end" width={1} p={4}>
          <Button>Cancel</Button>
          <Button
            variant="outlined"
            style={{
              backgroundColor: '#FC6061',
              color: '#FFF',
              marginLeft: 8,
            }}
          >
            SAVE
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default InfluencerForm;
