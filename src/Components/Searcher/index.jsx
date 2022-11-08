import { Search } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

const Searcher = (props) => {

  const {setInputUser} = props;
  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }
  
  const handleSubmit = () => {
    setInputUser(valueInput);
  }

  return (
    <Stack direction='row' sx={{
      marginTop: '30px',
      width: '80%'
    }} >
      <TextField 
        id='outlined-basic'
        label='GitHub User'
        placeholder='Octocat'
        variant='outlined'
        size='small'
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '90%'
        }}
        />
      <IconButton
        onClick={handleSubmit}
        size='small'
        sx={{
          left: '-45px'
        }}
      >
        <Search />
      </IconButton>
    </Stack>
  )
}

export default Searcher