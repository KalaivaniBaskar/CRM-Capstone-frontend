import { Stack, Typography, Box } from '@mui/material'
import React from 'react'

const Base = ({children}) => {
  return (
        <Box p={'1rem'}>
        {children}
        </Box> 
  )
}

export default Base;
