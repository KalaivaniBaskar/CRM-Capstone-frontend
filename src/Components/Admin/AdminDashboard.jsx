import React, { useEffect } from 'react'
import { USER_ROLES } from '../../Data/Roles.js';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout.jsx';
import { Grid } from '@mui/material';
import MonthlyOrders from '../Sales/MonthlyOrders.jsx';
import SalesChart from '../Sales/SalesChart.jsx';
import RequestsData from './RequestsData.jsx';
import YearlyRevenue from './YearlyRevenue.jsx';
const AdminDashboard = () => {
    const navigate = useNavigate();
    useEffect( () => {
        const token = localStorage.getItem('tokenAuth')
        const role = localStorage.getItem('role')
        if(!token){
            navigate('/')
        }
       if(role !== USER_ROLES.Admin ) {
        navigate('/')
       }
    
    },[])

  return (
    <AdminLayout>
        <Grid container gap={2}>
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4} key={"sales-chart"} my={2}>
          <YearlyRevenue />
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4} key={"sales-chart"} my={2}>
          <RequestsData />
        </Grid>
        </Grid>
    </AdminLayout>
  )
}

export default AdminDashboard