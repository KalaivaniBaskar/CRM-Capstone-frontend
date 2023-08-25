import React from 'react'
import MktLayout from './MktLayout'

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