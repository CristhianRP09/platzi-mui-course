import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import LocationInfo from '../Components/LocationInfo';
import PaperInfo from '../Components/PaperInfo';

const UserDescription = ({userState}) => {
  const {bio} = userState;

  return (
    <>
      <Stack sx={{
        justifyContent: 'center'
      }}>
        <Typography variant='body1' sx={{
          margin: '10px 0px'
        }}>
          {bio ? bio : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestiae vel distinctio esse sunt officia iusto quibusdam ducimus enim delectus.'}
        </Typography>
      </Stack>
      <PaperInfo userState={userState} />
      <LocationInfo userState={userState} />
    </>
  )
}

export default UserDescription;