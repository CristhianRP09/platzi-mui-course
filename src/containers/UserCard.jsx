import { CardMedia, Grid } from '@mui/material';
import React from 'react'

const UserCard = ({userState}) => {
  const {avatar_url} = userState;

  return (
    <Grid container>
      <Grid item xs={3} sx={{backgroundColor: 'lightgreen'}}>
        <CardMedia
          component='img'
          image={avatar_url}
          alt='GitHub User'
       />
      </Grid>
      <Grid item xs={9} sx={{backgroundColor: 'lightblue'}}></Grid>
    </Grid>
  )
}

export default UserCard;