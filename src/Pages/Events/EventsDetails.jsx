import { Box, Button, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Base_url } from '../../Config/BaseUrl';

export const EventsDetails = () => {
  const {eventId,userId} = useParams();

  // const eventId = "66e16fc428e05ab1a576a661";
  const [eventDetails, setEventDetails] = useState(null);

  
  const applyForEvent = async (eventId, userId) => {
    try {
      const response = await axios.post(`${Base_url}api/event-applications/apply`, {
        eventId,
        userId,
      });
  
      // Handle the response as needed
      alert('Application submitted successful');
      console.log('Application successful:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error applying for event:', error);
    }
  };

  
  const getEventDetails = async (eventId) => {
    try {
      const response = await axios.get(`${Base_url}api/events/${eventId}`);
      console.log('Event details:', response.data);
      setEventDetails(response.data);
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  };

  useEffect(() => {
    getEventDetails(eventId);
  }, [eventId]);

  useEffect(() => {
    if (userId?.length > 1) {
      localStorage.setItem('userId', userId);
    }
    console.log("User id ==>", userId, "event id ==>", eventId);
  }, [userId, eventId]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  if (!eventDetails) {
    // Render a loader or message while eventDetails is loading
    return <Typography>Loading event details...</Typography>;
  }

  const defaultImageUrl = 'https://static.vecteezy.com/system/resources/previews/023/221/657/original/yoga-day-banner-design-file-vector.jpg';
  const eventImageUrl = eventDetails.image && eventDetails.image.length > 0 && eventDetails.image[0]
    ? `${Base_url}${eventDetails.image[0].path}`
    : defaultImageUrl;

  return (
    <Box>
      <img style={{ height: "50vh", width: "100%" }}
        src={eventImageUrl}
        alt='Event Banner'
      />

      <Box style={{ padding: "10px" }}>
        <Typography gutterBottom  component="div" sx={{fontSize:22}}>
          {eventDetails.eventName} ({eventDetails.eventType}) 
        </Typography>
        

      

        <Box>
          <Typography gutterBottom variant="h6" component="div">
            Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Date & Time : {formatDate(eventDetails.startDate)} , {eventDetails.startTime}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{marginTop:1}}>
            {eventDetails.details}
          </Typography>
        </Box>

        {eventDetails.eventType === 'inPerson' && (
          <Box style={{marginTop:10}}> 
            <Typography gutterBottom variant="h6" component="div">
            Location
          </Typography>
          <Typography variant="body2" color="text.secondary" >
              Address: {eventDetails.address} , {eventDetails.city}, {eventDetails.state}
            </Typography>
            {/* <Typography variant="body2" >
              City: 
            </Typography>
            <Typography variant="body2" >
              State: 
            </Typography> */}
            
            
          </Box>
        )}

        <Box sx={{ marginTop: "40px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "60px" }}>
          <Button onClick={() => applyForEvent(eventId, userId)} size='medium' variant='contained'>Register Now</Button>
        </Box>
      </Box>
    </Box>
  );
}
