import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Input,
  InputAdornment,
} from '@material-ui/core';

const Fees = () => {
  const [influencerFee, setInfluencerFee] = useState(0);
  const [usageFee, setUsageFee] = useState(0);
  const [totalFee, setTotalFee] = useState(0);

  const numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const onChange = name => ({ target: { value } }) => {
    if (name === 'influencerFee') setInfluencerFee(Number(value));
    else setUsageFee(Number(value));
  };

  useEffect(() => {
    setTotalFee(influencerFee + usageFee);
  }, [influencerFee, usageFee]);
  return (
    <Box pl={5} pr={5} pt={3} pb={3}>
      <Grid container alignItems="center" justify="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">{'Influencer fee'}</Typography>
        </Grid>
        <Grid item xs={8}>
          {'How much are you paying Littlefinger for the agreed deliverables?'}
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={numberWithCommas(influencerFee)}
            onChange={onChange('influencerFee')}
            placeholder="0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">&pound;</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">{'Usage fee'}</Typography>
        </Grid>
        <Grid item xs={8}>
          {'Are you paying Littlefinger a usage fee for this content?'}
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={numberWithCommas(usageFee)}
            onChange={onChange('usageFee')}
            placeholder="0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">&pound;</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle2">Total fee</Typography>
        </Grid>
        <Grid item xs={4}>
          <Input
            value={numberWithCommas(totalFee)}
            disableUnderline
            readOnly
            style={{ marginLeft: 14 }}
            startAdornment={
              <InputAdornment position="start">&pound;</InputAdornment>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Fees;
