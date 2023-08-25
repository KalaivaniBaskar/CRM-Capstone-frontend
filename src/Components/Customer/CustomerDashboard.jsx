import React, { useEffect } from 'react'
import { Grid } from '@mui/material';
import { USER_ROLES } from '../../Data/Roles.js';
import { useNavigate } from 'react-router-dom';
import CustLayout from './CustLayout.jsx';
import Profile from '../Default/Profile.jsx';
import ProfilePic from '../Default/ProfilePic.jsx';
import OrderHistory from './OrderHistory.jsx';
import RequestHistory from './RequestHistory.jsx';


const CustomerDashboard = () => {
    const navigate = useNavigate();

     useEffect( () => {
        const token = localStorage.getItem('tokenAuth')
        const role = localStorage.getItem('role')
        if(!token){
            navigate('/')
        }
       if(role !== USER_ROLES.Customer ) {
        navigate('/')
       }

     }, [])
  return (
    <CustLayout>
       
       <Grid container gap={2}> 
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4} >
          <Profile />
         </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
         <ProfilePic /> 
        </Grid>
      
       </Grid>
    </CustLayout>
  )
} 

export default CustomerDashboard