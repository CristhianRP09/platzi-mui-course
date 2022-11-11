import { CardMedia, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import MainInfo from '../Components/MainInfo';
import UserDescription from './UserDescription';

const UserCard = ({userState}) => {
  const {avatar_url} = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '15px'
      }}
    >
      <Grid item xs={3} >
        <Stack justifyContent='center' alignItems='center'>
          <CardMedia
            component='img'
            image={avatar_url}
            alt='GitHub User'
            sx={{
              borderRadius: '50%',
              marginLeft: '5px',
              height: '230px',
              width: '230px'
            }}
          />
        </Stack>
      </Grid>
      <Grid item xs={9} >
        <Stack
          direction='column'
          spacing={1}
          sx={{
            margin: '30px'
          }}
        >
          <MainInfo userState={userState} />
          <UserDescription userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard;