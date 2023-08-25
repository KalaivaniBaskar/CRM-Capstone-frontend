import React from 'react'
import { Grid } from '@mui/material'
import Profile from '../Default/Profile'
import SalesLayout from './SalesLayout'
import SalesChart from './SalesChart'
const SalesDashboard = () => {
  return (
    <SalesLayout>
      <Grid container gap={2}>
      <Grid item  xs>
          <Profile />
        </Grid>
      <Grid item  xs>
          <SalesChart />
        </Grid>
      
      </Grid>
    </SalesLayout>
  )
}

export default SalesDashboard