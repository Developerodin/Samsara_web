import { Box, Grid } from '@mui/material'
import React from 'react'
import { EventCard } from './EventCard'

export const Events = () => {
  return (
   <Box sx={{padding:"20px"}}>
    <Grid container spacing={4} >
      <Grid item xs={3}>
      <EventCard/>
      </Grid>

      <Grid item xs={3}>
      <EventCard/>
      </Grid>

      <Grid item xs={3}>
      <EventCard/>
      </Grid>

      <Grid item xs={3}>
      <EventCard/>
      </Grid>

     
    </Grid>
   </Box>
  )
}
