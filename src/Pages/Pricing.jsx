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
import { CheckCircleOutline as CheckCircleOutlineIcon, StarOutline as StarOutlineIcon } from '@mui/icons-material';
import { styled } from "@mui/system";
import axios from "axios";
import { Base_url } from '../Config/BaseUrl';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff8f2",
  padding: theme.spacing(0.5),
  borderRadius: '20px',

  border: `1px solid #EA6C13`,
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff8f2",
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
}));

const StyledPriceContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff8f2",
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
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

  useEffect(() => {
    const userDetailsFromStorage = async () => {
      try {
        const response = await axios.get("/path-to-your-api");
        const data = response.data.user;
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    userDetailsFromStorage();
  }, []);

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
          <Typography variant="h4" sx={{ marginTop: 2,marginLeft: 2 }}>
  Choose your plan
</Typography>

          <StyledContainer>
            <StyledHeader>
              <Typography variant="h5" sx={{fontWeight:'600'}}>Individual</Typography>
            </StyledHeader>
            <StyledPriceContainer>
              <Typography variant="h3" color="#EA6C13">
                ₹4999
              </Typography>
              <Typography variant="h3">/mo</Typography>
            </StyledPriceContainer>
            <Box padding={2}>
            <StyledFeature sx={{ display: 'flex', alignItems: 'center' }}>
  <CheckCircleOutlineIcon sx={{ color: '#EA6C13' }} />
  <Typography variant="body1" marginLeft={1}>
    Access Yoga Classes Worldwide
  </Typography>
</StyledFeature>
              <StyledFeature>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13' }} />
                <Typography variant="body1" marginLeft={1}>
                  Daily Yoga & Meditation Habits
                </Typography>
              </StyledFeature>
              <StyledFeature>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13' }} />
                <Typography variant="body1" marginLeft={1}>
                  Build Relationships with Teachers & Practitioners
                </Typography>
              </StyledFeature>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePlanClick}
                sx={{ marginTop: 4 ,backgroundColor: '#EA6C13',borderRadius: '25px',}}
              >
                Get Plan
              </Button>
            </Box>
          </StyledContainer>

          <Divider sx={{ borderColor: '#CCC', width: '80%', mx: 'auto' }} />

          <StyledContainer>
            <StyledHeader>
              <Typography variant="h5" sx={{fontWeight:'600'}}>Individual</Typography>
              <Box
                display="flex"
                alignItems="center"
                bgcolor="primary.main"
                color="white"
                px={2}
                py={0.5}
                borderRadius={2}
                sx={{ backgroundColor: '#EA6C13' }}
              >
                <StarOutlineIcon />
                <Typography variant="caption" marginLeft={0.5}>
                  Bestseller
                </Typography>
              </Box>
            </StyledHeader>
            <StyledPriceContainer>
              <Typography variant="h3" color="#EA6C13">
                ₹14,997
              </Typography>
              <Typography variant="h3">/6mo</Typography>
            </StyledPriceContainer>
            <Box padding={2}>
              <StyledFeature>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13' }} />
                <Typography variant="body1" marginLeft={1}>
                  Access Yoga Classes Worldwide
                </Typography>
              </StyledFeature>
              <StyledFeature>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13' }} />
                <Typography variant="body1" marginLeft={1}>
                  Daily Yoga & Meditation Habits
                </Typography>
              </StyledFeature>
              <StyledFeature>
              <CheckCircleOutlineIcon sx={{ color: '#EA6C13' }} />
                <Typography variant="body1" marginLeft={1}>
                  Build Relationships with Teachers & Practitioners
                </Typography>
              </StyledFeature>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePlanClick}
                sx={{ marginTop: 4 ,backgroundColor: '#EA6C13',borderRadius: '25px'}}
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



