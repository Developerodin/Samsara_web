import { Box, Button } from '@mui/material'
import React from 'react'
import Logo from "../assest/samsara-logo.png";
export const ConformationPage = () => {
    const HandelHome=()=>{
        window.location.href = 'https://samsarawellness.in/';
    }
  return (
    <Box style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor: "#FFFBF5"}}>
      <Box >
        <div style={{textAlign:"center"}}>
        <img src={Logo} alt="img" />
        </div>
      <div style={{textAlign:"center"}}>
      
      <p style={{fontSize:"18px",fontWeight:"bold"}}>
        Thank you for signing up! Your details have been submitted successfully.<br/>
        Your account is pending approval by the admin. Once approved, you will
        receive an email notification.
      </p>

      <Button variant='contained' onClick={HandelHome} size="large"
                      style={{ backgroundColor: "#EE731B" }}>Home</Button>
    </div>
      </Box>
    </Box>
  )
}
