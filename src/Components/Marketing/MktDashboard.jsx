import React from 'react'
import MktLayout from './MktLayout'
import { Grid } from '@mui/material'
import Profile from '../Default/Profile'

const MktDashboard = () => {
  return (
    <MktLayout>
        <Grid container gap={2}>
      <Grid item  xs>
          <Profile />
        </Grid>
        </Grid>
    </MktLayout>
  )
}

export default MktDashboard