import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const EventCard = () => {
    const navigation = useNavigate();

    const handelApplyClick = ()=>{
        console.log("Apply Button Clicked");
           navigation("/event-details/2/3")
    }
  return (
    <Card >
    <CardMedia
      sx={{ height: 140 }}
      image="https://static.vecteezy.com/system/resources/previews/023/221/657/original/yoga-day-banner-design-file-vector.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       Yoga Session (In Person)
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
       18 Jun 2024 12:00 PM
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Join us for a rejuvenating yoga session designed to balance mind, body, and spirit. Suitable for all levels, 
      this event includes a blend of asanas (postures), pranayama (breathing exercises), and meditation techniques to enhance 
      flexibility, strength, and inner peace. Led by an experienced instructor...
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={handelApplyClick}>Apply</Button>
     
    </CardActions>
  </Card>
   
  )
}
