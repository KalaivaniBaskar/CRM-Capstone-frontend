import React from 'react'
import AppBarComponent from '../AppBarComponent/AppBarComponent'
import { Typography, Stack } from '@mui/material'

const About = () => {
  return (
    <>
    <AppBarComponent />
    <div>
      <Typography variant='h6' textAlign={'center'}>About Us: </Typography>
      <Stack sx={{  justifyContent: 'center', alignItems: 'center' }} py={'1rem'}>
                
                    <Typography variant='h5' padding={'1rem'}
                    fontFamily={'cursive'} className='txt-shadow'>
                      Welcome to CleanLife !</Typography>
                    <Typography variant='subtitle'
                    fontWeight={600}>An Eco-friendly GREEN initative with low energy consumption appliances for your home needs!</Typography>
            </Stack>
            <Typography variant='body1' sx={{textDecoration: 'underline'}}> Contact us :  cleanlifeISO9000@outlook.com </Typography>
    </div>
    </>
  )
}

export default About