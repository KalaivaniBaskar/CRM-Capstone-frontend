import React from 'react'
import {  Box,  IconButton, Typography, 
     List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Divider, Badge} from '@mui/material' 
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { USER_ROLES } from '../../Data/Roles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const SidePanelFixed = () => { 

    const user = useSelector( state => state.userInfo.user_data)
    const navigate = useNavigate();

  return (
    <Box p={2} width={'200px'} textAlign={'center'} role='presentation' bgcolor={'#F8F8F8'}>
    <Typography variant='subtitle1' fontStyle={'oblique'} fontWeight={550}>
      Hi {user.username} 
    </Typography> 
    
      <Divider /> 
      { user.email ?
      <List>
      <ListItem key={'Profile'} disablePadding>
        <ListItemButton onClick={() => navigate('/profile')}>
            <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={'Profile'} />
            </ListItemButton>
            </ListItem>
        <ListItem key={'ProfilePic'} disablePadding>
        <ListItemButton onClick={() => navigate('/profile-pic')}>
            <ListItemIcon>
                    <EditIcon />
                </ListItemIcon>
                <ListItemText primary={'Edit Profile'} />
            </ListItemButton>
            </ListItem>
      </List> 
      : 
        <Typography variant='subtitle1' fontStyle={'oblique'} fontWeight={550}>
        Log in to continue
        </Typography>
        }
        <Divider />
      {
        user.role === USER_ROLES.Customer && 
        <>
        <List>           
            <ListItem key={'Dashboard'} disablePadding>
            <ListItemButton onClick={() => navigate('/cust-dashboard')}>
              <ListItemIcon>
                <DashboardIcon />                
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Store'} disablePadding>
            <ListItemButton onClick={() => navigate('/buy-product')}>
              <ListItemIcon>
                <StorefrontIcon />                
              </ListItemIcon>
              <ListItemText primary={'Store'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Cart'} disablePadding>
            <ListItemButton onClick={() => navigate('/cart')}>
              <ListItemIcon>
                <ShoppingCartIcon />                
              </ListItemIcon>
              <ListItemText primary={'Cart'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>           
            <ListItem key={'Orders'} disablePadding>
            <ListItemButton onClick={() => navigate('/order-hist')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'My Orders'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Track Req'} disablePadding>
            <ListItemButton onClick={() => navigate('/req-hist')}>
              <ListItemIcon>
                <TrackChangesIcon />                
              </ListItemIcon>
              <ListItemText primary={'My Requests'} />
            </ListItemButton>
          </ListItem>
        </List>

        </>
      } 
      {
        user.role === USER_ROLES.Engineer && 
        <>
        <List>           
            <ListItem key={'Dashboard'} disablePadding>
            <ListItemButton onClick={() => navigate('/engg-dashboard')}>
              <ListItemIcon>
                <DashboardIcon />                
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Pending'} disablePadding>
            <ListItemButton onClick={() => navigate('/req-pending')}>
              <ListItemIcon>
                <AddTaskIcon />                
              </ListItemIcon>
              <ListItemText primary={'Pending Req'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'assigned'} disablePadding>
            <ListItemButton onClick={() => navigate('/req-assigned')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Assigned Req'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Closed'} disablePadding>
            <ListItemButton onClick={() => navigate('/req-closed')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Closed Req'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Analysis'} disablePadding>
            <ListItemButton onClick={() => navigate('/engg-chart')}>
              <ListItemIcon>
                <BarChartIcon />                
              </ListItemIcon>
              <ListItemText primary={'Analysis'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        </>
      }
        {
        user.role === USER_ROLES.Sales && 
        <>
        <List>           
            <ListItem key={'Dashboard'} disablePadding>
            <ListItemButton onClick={() => navigate('/sales-dashboard')}>
              <ListItemIcon>
                <DashboardIcon />                
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Pending'} disablePadding>
            <ListItemButton onClick={() => navigate('/od-pending')}>
              <ListItemIcon>
                <AddTaskIcon />                
              </ListItemIcon>
              <ListItemText primary={'Pending OD'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Monthly'} disablePadding>
            <ListItemButton onClick={() => navigate('/od-monthly')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Monthly OD'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Cancel'} disablePadding>
            <ListItemButton onClick={() => navigate('/od-cancelreq')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Cancel Req'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Analysis'} disablePadding>
            <ListItemButton onClick={() => navigate('/sales-chart')}>
              <ListItemIcon>
                <BarChartIcon />                
              </ListItemIcon>
              <ListItemText primary={'Analysis'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        </>
      }
       {
        user.role === USER_ROLES.Admin && 
        <>
        <List>           
            <ListItem key={'Dashboard'} disablePadding>
            <ListItemButton onClick={() => navigate('/admin-dashboard')}>
              <ListItemIcon>
                <DashboardIcon />                
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Requests'} disablePadding>
            <ListItemButton onClick={() => navigate('/requests-chart')}>
              <ListItemIcon>
                <BarChartIcon />                
              </ListItemIcon>
              <ListItemText primary={'Requests'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Sales'} disablePadding>
            <ListItemButton onClick={() => navigate('/revenue-chart')}>
              <ListItemIcon>
                <MonetizationOnIcon />                
              </ListItemIcon>
              <ListItemText primary={'Sales'} />
            </ListItemButton>
          </ListItem>
          <Divider />
            <ListItem key={'AddProd'} disablePadding>
            <ListItemButton onClick={() => navigate('/add-product')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Add Product'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Empl'} disablePadding>
            <ListItemButton onClick={() => navigate('/add-employee')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Add Employee'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Orders'} disablePadding>
            <ListItemButton onClick={() => navigate('/pending-adm')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Orders'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <ListItem key={'Pending'} disablePadding>
            <ListItemButton onClick={() => navigate('/req-pending')}>
              <ListItemIcon>
                <AddTaskIcon />                
              </ListItemIcon>
              <ListItemText primary={'Pending Req'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'assigned'} disablePadding>
            <ListItemButton onClick={() => navigate('/req-assigned')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Assigned Req'} />
            </ListItemButton>
          </ListItem>
            <ListItem key={'Closed'} disablePadding>
            <ListItemButton onClick={() => navigate('/req-closed')}>
              <ListItemIcon>
                <ListAltIcon />                
              </ListItemIcon>
              <ListItemText primary={'Closed Req'} />
            </ListItemButton>
          </ListItem>

        </>
      }
</Box>
  )
}

export default SidePanelFixed