import { Box, Button, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Base_url } from '../../Config/BaseUrl';

export const EventsDetails = () => {
  const {eventId,userId} = useParams();
  
  const applyForEvent = async (eventId, userId) => {
    try {
      const response = await axios.post(`${Base_url}api/event-applications/apply`, {
        eventId,
        userId,
      });
  
      // Handle the response as needed
      alert('Application submitted successful')
      console.log('Application successful:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error applying for event:', error);
    }
  };



  useEffect(()=>{
    if(userId.length > 1){
      localStorage.setItem('userId',userId);
    }
   console.log("User id ==>",userId,"event id ==>",eventId)
  },[])
  return (
    <Box>
      <img style={{height:"50vh",width:"100%"}} 
      src='https://static.vecteezy.com/system/resources/previews/023/221/657/original/yoga-day-banner-design-file-vector.jpg'

       />

       <Box style={{padding:"10px"}}>
       <Typography gutterBottom variant="h5" component="div">
       Yoga Session (In Person) 18 Jun 2024 12:00 PM
      </Typography>
     
      
      <Box>
      <Typography gutterBottom variant="h6" component="div">
       Deatils
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Join us for a rejuvenating yoga session designed to balance mind, body, and spirit. Suitable 
      for all levels, this event includes a blend of asanas (postures), pranayama (breathing exercises), 
      and meditation techniques to enhance flexibility, strength, and inner peace. Led by an experienced instructor, 
      you'll be guided through a sequence that promotes relaxation and mindfulness, leaving you refreshed and energized. 
      Whether you're a seasoned yogi or a beginner, this session offers a welcoming space to practice, connect, and grow. 
      Bring your mat, 
      wear comfortable clothing, and prepare to embark on a journey of self-discovery and well-being.
      </Typography>
      </Box>
         <Box  sx={{marginTop:"40px",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"60px"}}>
              <Button onClick={()=>applyForEvent(eventId,userId)} size='medium' variant='contained'>Apply</Button> 
         </Box>
       </Box>
    </Box>
  )
}
