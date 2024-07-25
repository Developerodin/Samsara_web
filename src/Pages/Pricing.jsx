import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { CheckCircleOutline as CheckCircleOutlineIcon,StarOutline as StarOutlineIcon } from '@mui/icons-material';
import { styled } from "@mui/system";
import axios from "axios";
import { Base_url } from '../Config/BaseUrl';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff8f2",
  padding: theme.spacing(0.5),
  borderRadius: '25px',

  border: `1px solid #EA6C13`,
  margin: theme.spacing(2),
  
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff8f2",
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  marginLeft: theme.spacing(1),
}));

const StyledPriceContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff8f2",
  padding: theme.spacing(0),
  display: "flex",
  alignItems: "center",
  marginLeft: theme.spacing(2),
}));

const StyledFeature = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

export const Pricing = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const handlePlanClick = () => {
  
    navigate(`/payment/${userId}`);
  };

 

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          <Typography variant="h5" sx={{ marginTop: 2,marginLeft: 2 }}>
  Choose your plan
</Typography>

          <StyledContainer>
            <StyledHeader>
              <Typography variant="h5" sx={{fontWeight:'600'}}>Individual</Typography>
            </StyledHeader>
            <StyledPriceContainer>
              <Typography variant="h5" color="#EA6C13">
                ₹4999
              </Typography>
              <Typography variant="h5">/mo</Typography>
            </StyledPriceContainer>
            <Box padding={2}>
            <StyledFeature sx={{ display: 'flex', alignItems: 'center' }}>
  <CheckCircleOutlineIcon sx={{ color: '#ea6d13',fontSize: '20px' }} />
  <Typography variant="body1" marginLeft={1} sx={{ fontSize: '14px' }}>
    Access Yoga Classes Worldwide
  </Typography>
</StyledFeature>
              <StyledFeature>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13',fontSize: '20px' }} />
                <Typography variant="body1" marginLeft={1} sx={{ fontSize: '14px' }}>
                  Daily Yoga & Meditation Habits
                </Typography>
              </StyledFeature>
              <StyledFeature sx={{ display: 'flex', alignItems: 'flex-start' }}>
  <CheckCircleOutlineIcon sx={{ color: '#EA6C13', fontSize: '20px' }} />
  <Typography variant="body1" marginLeft={1} sx={{ fontSize: '14px' }}>
    Build Relationships with Teachers & Practitioners
  </Typography>
</StyledFeature>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePlanClick}
                sx={{ marginTop: 4 ,backgroundColor: '#ea6d13',borderRadius: '25px',}}
              >
                Get Plan
              </Button>
            </Box>
          </StyledContainer>

          <Divider sx={{ borderColor: '#CCC', width: '80%', mx: 'auto',margin:'25px auto' }} />

          <StyledContainer>
            
            <StyledHeader>
              <Typography variant="h5" sx={{fontWeight:'600'}}>Individual</Typography>
               <Box
                display="flex"
                alignItems="center"
                bgcolor="#EA6C13"
                color="white"
                px={1}
                py={0.5}
                borderRadius={2}
              >
                <StarOutlineIcon fontSize="small" />
                <Typography variant="caption" marginLeft={0.5}>
                  Bestseller
                </Typography>
              </Box>
            </StyledHeader>
            <StyledPriceContainer>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <div  style={{ textDecoration: 'line-through',color:"#EA6C13" ,fontSize:'1.3rem',lineHeight:'1.334',letterSpacing:'0em' }}>
    ₹29,994<span style={{color:'black',fontWeight:'400'}}>/6mo</span>
  
  </div>


  <Typography variant="h5" color="#EA6C13" sx={{}}>
    ₹14,997/6mo SAVE 50%
  </Typography>
  </Box>
</StyledPriceContainer>
            <Box padding={2}>
              <StyledFeature>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13',fontSize: '20px' }} />
                <Typography variant="body1" marginLeft={1} sx={{ fontSize: '14px' }}>
                  Access Yoga Classes Worldwide
                </Typography>
              </StyledFeature>
              <StyledFeature>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13',fontSize:"20px" }} />
                <Typography variant="body1" marginLeft={1} sx={{ fontSize: '14px' }}>
                  Daily Yoga & Meditation Habits
                </Typography>
              </StyledFeature>
              <StyledFeature sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13',fontSize: '20px' }} />
                <Typography variant="body1" marginLeft={1} sx={{ fontSize: '14px' }}>
                  Build Relationships with Teachers & Practitioners
                </Typography>
              </StyledFeature>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePlanClick}
                sx={{ marginTop: 4 ,backgroundColor: '#ea6d13',borderRadius: '25px'}}
              >
                Get Plan
              </Button>
            </Box>
          </StyledContainer>
        </>
      )}
    </Container>
  );
};



