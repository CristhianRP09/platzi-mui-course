import { Business, Language, LocationOn, Twitter } from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import React from 'react'

const LocationInfo = ({userState}) => {
  const {location, twitter_username, blog, company} = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '15px'
      }}
    >
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LocationOn />
          <Typography>{location ? location : 'Not available'}</Typography>
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Twitter />
          <Typography>{twitter_username ? `@${twitter_username}` : 'Not available'}</Typography>
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Language />
          <Typography>
            {blog ? <a target='blank' href={blog}>{blog}</a> : 'Not Available'}
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Business />
          <Typography>{company ? company : 'Not available'}</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LocationInfo