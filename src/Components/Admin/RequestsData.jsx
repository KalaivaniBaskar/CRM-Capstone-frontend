import BarChart from '../Charts/BarChart';
import React, { useState, useEffect } from 'react'
import {  Grid, Box, Typography, Stack, Paper} from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../../Data/APIdata';
import { REQUEST_STATUS } from '../../Data/statusCode';
import { useNavigate } from 'react-router-dom';
import useCTX from '../Context/useCTX';

const RequestsData = () => { 
    const [requests, setRequests] = useState([]);
    const [numM, setReqNumM] = useState([]);
    const [numY, setReqNumY] = useState([]);
    const [close, setClose] = useState(true)
    const REQUEST_STATUS_VALUES = Object.values(REQUEST_STATUS)
    const navigate = useNavigate()
    const {requestY, setRequestY} = useCTX(); 
    const {requestM, setRequestM} = useCTX(); 
    const [data, setData] = useState({})  
    const [yearlydata, setyearlyData] = useState({})  
    const options = {
       } 

       const getRequestsData = async() => {
        try{ 
            console.log("get y and m req")
            const token = localStorage.getItem('tokenAuth')
            const email = localStorage.getItem('email')
              //  console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
            console.log("sending req")    
            const response = await axios.post(`${BASE_URL}/request/get-all-requests`, 
            {email : email} ,
            config ) 
            console.log(response) 
            if( response.status === 200) { 
            
              const monthly = [...response.data.requestMonthly]
              const yearly  = [...response.data.requestYearly]
              
              setRequestM(monthly)
              setRequestY(yearly)
                const pending = monthly.filter( req => req.request_status === REQUEST_STATUS.Pending)
                const assigned = monthly.filter( req => req.request_status === REQUEST_STATUS.Assigned)
                const resolved = monthly.filter( req => req.request_status === REQUEST_STATUS.Resolved)
                
                const num = [ pending.length , assigned.length, resolved.length ] 
                console.log(num, REQUEST_STATUS_VALUES)
                setReqNumM(num)
                 setData({
                  labels: REQUEST_STATUS_VALUES,
                  datasets : [{
                    label: "Monthly Requests Status",
                    data: num,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)',
                      'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
                })

                const pendingY = yearly.filter( req => req.request_status === REQUEST_STATUS.Pending)
                const assignedY = yearly.filter( req => req.request_status === REQUEST_STATUS.Assigned)
                const resolvedY = yearly.filter( req => req.request_status === REQUEST_STATUS.Resolved) 
                const numY = [ pendingY.length , assignedY.length, resolvedY.length ] 
                setReqNumY(numY)
                setyearlyData({
                    labels: REQUEST_STATUS_VALUES,
                    datasets : [{
                      label: "Yearly Requests Status",
                      data: numY,
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)',
                        
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                      ],
                      borderWidth: 1
                  }]
                  })

                setClose(false)
            }
            else if( response.status === 403) {
                navigate('/')
            }
            }
            catch(error){
              console.log(error);
          }
          }

    useEffect( () => {
        getRequestsData()
      }, [])

  return (
    
    <Grid container justifyContent={'space-evenly'} alignItems={'center'} p={1}>
      <div className='.grid-container-eq'>
      <Typography variant='body1'>Monthly Requests</Typography>

         {
          numM.length > 0 && 
          numM.map( (req, i) => {
            return  <Box borderRadius={'20px'}  >
            <Box m={1} className='gradient-b' component={Paper} p={'2rem'}>
                <Typography variant='h5' color={'white'}>
                    {REQUEST_STATUS_VALUES[i]}
                </Typography>
                <Typography variant='h4' color={'white'}>
                     {req}
                  </Typography>
            </Box>
        </Box>
          } )
         }
      </div>

      <div className='.grid-container-eq'>
      <Typography variant='body1'>Yearly Requests</Typography>

      {
          numY.length > 0 && 
          numY.map( (req, i) => {
            return  <Box borderRadius={'20px'}  >
            <Box m={1} className='gradient-b' component={Paper} p={'2rem'}>
                <Typography variant='h5' color={'white'}>
                    {REQUEST_STATUS_VALUES[i]}
                </Typography>
                <Typography variant='h4' color={'white'}>
                     {req}
                  </Typography>
            </Box>
        </Box>
          } )
        }
      </div> 
      <div className='.grid-container-eq'>
      { !close &&
          <Box minHeight={'500px'} > 
                         <Typography> Current Month Requests</Typography>
            <BarChart data={data} options={options} />
        </Box>
         
            }
              { !close &&
          
          <Box minHeight={'500px'} >
              <Typography> Yearly Requests </Typography>
           
            <BarChart data={yearlydata} options={options} />
        </Box>
            }
       </div>
     {/* <Grid item xs>
            <Stack gap={2} >
                <Box borderRadius={'20px'}  >
                    <Box m={1} className='gradient-b' component={Paper} p={'2rem'}>
                        <Typography variant='h5' color={'white'}>
                            This year:
                        </Typography>
                        <Typography variant='h5' color={'white'}>
                          </Typography>
                    </Box>
                </Box>
                <Box borderRadius={'20px'}  >
                <Box m={1} className='gradient-b' component={Paper} p={'2rem'}>
                     <Typography variant='h5' color={'white'}>
                            This month:
                        </Typography>
                        <Typography variant='h5' color={'white'}>
                           
                            </Typography>
                    </Box>
                </Box>
            </Stack>
        </Grid> */}
    {/* <Grid item xs key={"req-chart3"} my={2}
      >
          { !close &&
          <Box minHeight={'500px'} > 
                         <Typography> Current Month Requests</Typography>
            <BarChart data={data} options={options} />
        </Box>
         
            }
    </Grid>
    <Grid item xs key={"reqY-chart4"} my={2}
      >
          { !close &&
          
          <Box minHeight={'500px'} >
              <Typography> Yearly Requests </Typography>
           
            <BarChart data={yearlydata} options={options} />
        </Box>
            }
    </Grid> */}
    </Grid>
  )
}

export default RequestsData