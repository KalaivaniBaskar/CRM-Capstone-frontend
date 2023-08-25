import React from 'react';
import Grid from '@mui/material/Grid';
import AppBarComponent from '../AppBarComponent/AppBarComponent';
import SidePanelFixed from '../AppBarComponent/SidePanelFixed';

const SalesLayout = ({ children }) => {
  return (
    <>
    <AppBarComponent />
    <Grid container>
      <Grid item sx={{ display: { xs: 'none', md: 'flex'  } , height: '100vh'}} >
      <SidePanelFixed />
      </Grid>
      <Grid item  xs p={2}>
        {children}
      </Grid>
    </Grid>
    </>
  );
};

export default SalesLayout